#!/usr/bin/env node
/**
 * Planted-error measurement of the review loop (Vera review protocol, limit 1).
 *
 * The loop's stages are the build (binds numbers and citations, refuses a mark it
 * cannot find), the flag pass (a model lists what a reviewer would want confirmed)
 * and the resolver (one checker per flagged reading, a second on anything that
 * would change text). "It found two things" says nothing about what it misses.
 * This plants known errors in a copy of the paper and counts what each stage
 * catches, by class:
 *
 *   bound      a number that is bound to its source (the build should refuse)
 *   number     a number in prose that nothing binds (flag pass, then resolver)
 *   statement  an own statement about the mechanism, the runs or the artifacts
 *   citation   a citation moved to a sentence its work does not support
 *
 * Everything runs in paper/review-planted/, a copy of the review directory with
 * the planted paper; the live review, its judgements and its push are untouched.
 *
 *   node plant/run.mjs prepare        copy the review directory, drop the judgements
 *   node plant/run.mjs bound          one build per bound plant: does it refuse?
 *   node plant/run.mjs all            plant number+statement+citation, build, flag,
 *                                     build, list readings -> plant/out/readings.json
 *   node plant/run.mjs score <verdicts.json>   join the resolver's verdicts to the plants
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, existsSync, readdirSync, unlinkSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));            // paper/review/plant
const REVIEW = join(HERE, '..');                                  // paper/review
const PAPER = join(REVIEW, '..');                                 // paper
const COPY = join(PAPER, 'review-planted');                       // the sandbox; ../../ from it is still the repo
const OUT = join(HERE, 'out');
const plants = JSON.parse(readFileSync(join(HERE, 'plants.json'), 'utf8'));
const tex = readFileSync(join(PAPER, 'proveml-spec.tex'), 'utf8');
const mode = process.argv[2];
const sh = (cmd, args, opts = {}) => spawnSync(cmd, args, { cwd: COPY, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, ...opts });

const plantTex = (set) => {
  let t = tex;
  for (const p of set) {
    if (t.split(p.find).length !== 2) throw new Error(p.id + ': find string not unique in the paper');
    t = t.replace(p.find, p.replace);
  }
  writeFileSync(join(COPY, 'proveml-spec.tex'), t);
};
const adaptBuild = () => {
  const a = sh('node', ['tex-adapter.mjs', 'proveml-spec.tex']);
  if (a.status !== 0) return { stage: 'adapt', status: a.status, err: a.stderr.trim().split('\n').pop() };
  writeFileSync(join(COPY, 'report/paper1-blocks.json'), a.stdout);
  const b = sh('node', ['build.mjs']);
  return { stage: 'build', status: b.status, err: (b.stderr.trim().split('\n').filter((l) => !/leaf fallback/.test(l)).pop() || '').slice(0, 300) };
};

if (mode === 'prepare') {
  rmSync(COPY, { recursive: true, force: true });
  mkdirSync(join(COPY, 'report'), { recursive: true });
  for (const f of readdirSync(REVIEW)) if (/\.(mjs|py|json)$/.test(f) && f !== 'package-lock.json') cpSync(join(REVIEW, f), join(COPY, f));
  for (const f of readdirSync(join(REVIEW, 'report'))) {
    if (f === 'review.json' || f === 'manifests-enc' || /\.html$/.test(f) || f === 'rounds.txt') continue;   // the reviewer's records and the built pages stay out
    cpSync(join(REVIEW, 'report', f), join(COPY, 'report', f), { recursive: true });
  }
  cpSync(join(PAPER, 'proveml.bib'), join(COPY, 'proveml.bib'));
  plantTex([]);
  const r = adaptBuild();
  console.log('clean copy builds:', r.status === 0 ? 'yes' : 'NO ' + r.err);
  process.exit(r.status === 0 ? 0 : 1);
}

if (mode === 'bound') {
  mkdirSync(OUT, { recursive: true });
  const rows = [];
  for (const p of plants.filter((x) => x.class === 'bound')) {
    plantTex([p]);
    const r = adaptBuild();
    const caught = r.status !== 0;
    rows.push({ id: p.id, caught, stage: caught ? 'build' : null, message: r.err });
    console.log(p.id, caught ? 'caught by build: ' + r.err : 'NOT CAUGHT: build accepted the planted number');
  }
  writeFileSync(join(OUT, 'bound.json'), JSON.stringify(rows, null, 1) + '\n');
  plantTex([]); adaptBuild();   // leave the copy clean
}

if (mode === 'classify') {
  // a prose plant that the build refuses was bound after all: move it to the bound class
  let changed = 0;
  for (const p of plants.filter((x) => x.class !== 'bound')) {
    plantTex([p]);
    const r = adaptBuild();
    if (r.status !== 0) { console.log(p.id, 'is bound:', r.err); p.class = 'bound'; changed++; }
  }
  writeFileSync(join(HERE, 'plants.json'), JSON.stringify(plants, null, 1).replace(/\n  \{/g, '\n {') + '\n');
  plantTex([]); adaptBuild();
  console.log(changed, 'plant(s) moved to bound');
}

if (mode === 'all') {
  mkdirSync(OUT, { recursive: true });
  const set = plants.filter((x) => x.class !== 'bound');
  plantTex(set);
  let r = adaptBuild();
  if (r.status !== 0) { console.error('the planted paper does not build:', r.err, '\nA statement plant crossed a mark; move it.'); process.exit(1); }
  const before = JSON.parse(readFileSync(join(COPY, 'report/infer-state.json'), 'utf8'));
  const inf = sh('node', ['infer-cli.mjs']);
  process.stdout.write(inf.stdout.split('\n').filter((l) => /pending|recorded/.test(l)).join('\n') + '\n');
  r = adaptBuild();
  if (r.status !== 0) { console.error('rebuild after the flag pass failed:', r.err); process.exit(1); }
  const after = JSON.parse(readFileSync(join(COPY, 'report/infer-state.json'), 'utf8'));
  doMap(before, after);
}

if (mode === 'map') doMap(null, null);

function doMap(before, after) {
  const set = plants.filter((x) => x.class !== 'bound');
  const rd = sh('node', ['readings.mjs']);
  const readings = JSON.parse(rd.stdout);
  console.error(rd.stderr.trim());
  // which reading belongs to which plant: the paragraph, as the reader sees it, carries the planted text.
  // Both sides are reduced to lower-case letters and digits; TeX commands and citations are dropped.
  const norm = (s) => String(s).replace(/\\cite[a-z]*\{[^}]*\}/g, ' ').replace(/\\[a-zA-Z]+/g, ' ').toLowerCase().replace(/[^a-z0-9]+/g, '');
  const words = (s) => norm(s);
  const map = {};
  for (const p of set) {
    const keys = [...p.replace.matchAll(/\\cite[a-z]*\{([^}]*)\}/g)].flatMap((m) => m[1].split(','));
    const oldKeys = [...p.find.matchAll(/\\cite[a-z]*\{([^}]*)\}/g)].flatMap((m) => m[1].split(','));
    const moved = p.class === 'citation' ? keys.filter((k, i) => k !== oldKeys[i]) : [];
    const probe = words(p.replace);
    // the paragraph of the planted paper that carries the plant, reduced the same way; its opening identifies the section
    const planted = readFileSync(join(COPY, 'proveml-spec.tex'), 'utf8');
    const para = planted.split(/\n\s*\n|\\item\s/).find((t) => t.includes(p.replace)) || '';
    const head = words(para.replace(/^\s*\\(paragraph|noindent|textbf)\{?/, '')).slice(0, 40);
    let secs = [...new Set(readings.filter((x) => head.length >= 12 && words(x.paragraph).includes(head)).map((x) => x.section))];
    if (!secs.length) secs = [...new Set(readings.filter((x) => probe.length >= 8 && words(x.paragraph).includes(probe)).map((x) => x.section))];
    const inSecs = readings.filter((x) => secs.includes(x.section));
    const hits = inSecs.filter((x) => p.class === 'citation'
      ? x.kind === 'citation' && moved.some((k) => x.field.startsWith('citation:' + k + '.'))
      : x.kind === 'inferred' && (probe.includes(words(x.value)) || words(x.value).includes(probe) || overlap(p.replace, x.value)));
    map[p.id] = { class: p.class, sections: secs, moved, flagged: hits.map((x) => x.field), readingsInSection: inSecs.length,
      otherInferred: inSecs.filter((x) => x.kind === 'inferred' && !hits.includes(x)).map((x) => x.value) };
    console.log(p.id.padEnd(4), p.class.padEnd(10), (secs.join(',') || 'PARAGRAPH NOT FOUND').padEnd(16), hits.length ? 'reading: ' + hits.map((x) => x.field).join(' ') : 'NO READING (flag pass did not mark the planted span)');
  }
  const planted = new Set(Object.values(map).flatMap((m) => m.sections));
  const control = readings.filter((x) => !planted.has(x.section)).filter((x, i) => i % 6 === 0).slice(0, 30);
  const out = [...readings.filter((x) => planted.has(x.section)), ...control];
  const newly = before && after ? Object.keys(after).filter((k) => !before[k]).length : null;
  writeFileSync(join(OUT, 'map.json'), JSON.stringify({ map, control: control.map((c) => c.field), newlyFlagged: newly }, null, 1) + '\n');
  writeFileSync(join(OUT, 'readings.json'), JSON.stringify(out, null, 1) + '\n');
  console.log(`${out.length} readings for the resolver (${out.length - control.length} in planted paragraphs, ${control.length} control)${newly === null ? '' : '; ' + newly + ' paragraphs newly flagged'}`);
}

function cls2(rows, c) { return rows.filter((r) => r.class === c).length; }

function overlap(a, b) { // share a run of 3+ words, TeX stripped
  const w = (s) => String(s).replace(/\\cite[a-z]*\{[^}]*\}/g, ' ').replace(/\\[a-zA-Z]+/g, ' ').toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').split(/\s+/).filter(Boolean);
  const wa = w(a), wbArr = w(b), wb = new Set();
  for (let i = 0; i + 2 < wbArr.length; i++) wb.add(wbArr.slice(i, i + 3).join(' '));
  for (let i = 0; i + 2 < wa.length; i++) if (wb.has(wa.slice(i, i + 3).join(' '))) return true;
  return false;
}


if (mode === 'score') {
  const verdicts = JSON.parse(readFileSync(process.argv[3], 'utf8'));   // the workflow's return value
  const { map, control } = JSON.parse(readFileSync(join(OUT, 'map.json'), 'utf8'));
  const bound = existsSync(join(OUT, 'bound.json')) ? JSON.parse(readFileSync(join(OUT, 'bound.json'), 'utf8')) : [];
  const byField = {}; for (const c of verdicts.checked || []) byField[c.reading] = c;
  const rows = [];
  for (const [id, m] of Object.entries(map)) {
    const vs = m.flagged.map((f) => byField[f]).filter(Boolean);
    const first = vs.filter((v) => v.first && v.first.verdict !== 'stands' && v.first.verdict !== 'cannot-check');
    const confirmed = vs.filter((v) => v.confirmed);
    rows.push({ id, class: m.class, flagged: m.flagged.length > 0, firstCaught: first.length > 0, caught: confirmed.length > 0, verdicts: vs.map((v) => ({ reading: v.reading, first: v.first?.verdict, second: v.second?.verdict })) });
  }
  const cls = (c) => rows.filter((r) => r.class === c);
  const pct = (a, b) => b ? Math.round(100 * a / b) + '%' : 'n/a';
  console.log('bound (build):', bound.filter((b) => b.caught).length + '/' + bound.length);
  for (const c of ['number', 'statement', 'citation']) {
    const r = cls(c);
    console.log(`${c}: reading exists ${r.filter((x) => x.flagged).length}/${r.length} (${pct(r.filter((x) => x.flagged).length, r.length)}), first checker ${r.filter((x) => x.firstCaught).length}/${r.length}, confirmed ${r.filter((x) => x.caught).length}/${r.length} (${pct(r.filter((x) => x.caught).length, r.length)})`);
    for (const x of r.filter((x) => !x.caught)) console.log('   missed', x.id, x.flagged ? 'verdicts ' + JSON.stringify(x.verdicts) : 'no reading');
  }
  const plantedFields = new Set(Object.values(map).flatMap((m) => m.flagged));
  const others = (verdicts.checked || []).filter((c) => !plantedFields.has(c.reading));
  const falseChanges = others.filter((c) => c.confirmed);
  const overruled = (verdicts.checked || []).filter((c) => c.first && c.first.verdict !== 'stands' && c.first.verdict !== 'cannot-check' && !c.confirmed);
  // Precision needs a person: each confirmed change on unplanted text is classed by hand in adjudication.json
  // (collateral: the plant seen from a neighbouring reading; defect: a fault of the paper, known if an earlier
  // round had found it; page: a fault of the review page, not the text; refutable: a change the author refuses).
  const adj = existsSync(join(HERE, 'adjudication.json')) ? JSON.parse(readFileSync(join(HERE, 'adjudication.json'), 'utf8')) : {};
  const adjCount = (k) => falseChanges.filter((f) => (adj[f.reading] || {}).class === k).length;
  const unadj = falseChanges.filter((f) => !adj[f.reading]).length;
  const prose = rows.filter((r) => r.class !== 'bound');
  const lines = [
    `planted: ${bound.length + prose.length} (bound ${bound.length}, number ${cls2(rows, 'number')}, statement ${cls2(rows, 'statement')}, citation ${cls2(rows, 'citation')})`,
    `build refused: ${bound.filter((b) => b.caught).length} of ${bound.length} bound`,
    `flag pass marked: ${prose.filter((r) => r.flagged).length} of ${prose.length} prose plants`,
    `resolver confirmed: ${prose.filter((r) => r.caught).length} of ${prose.filter((r) => r.flagged).length} marked`,
    `caught in all: ${bound.filter((b) => b.caught).length + prose.filter((r) => r.caught).length} of ${bound.length + prose.length}`,
    `missed: ${[...bound.filter((b) => !b.caught).map((b) => b.id), ...prose.filter((r) => !r.caught).map((r) => r.id)].join(', ') || 'none'}`,
    `unplanted readings checked: ${others.length}`,
    `confirmed changes among them: ${falseChanges.length}`,
    `  collateral of a plant: ${adjCount("collateral")}`,
    `  defects of the paper: ${adjCount("defect")} (${falseChanges.filter((f) => (adj[f.reading] || {}).known).length} already found by the previous round)`,
    `  faults of the page: ${adjCount("page")}`,
    `  refutable: ${adjCount("refutable")}`,
    `  not adjudicated: ${unadj}`,
    `second reader overruled the first: ${overruled.length}`,
  ];
  console.log(lines.join('\n'));
  writeFileSync(join(OUT, 'score.json'), JSON.stringify({ bound, rows, falseChanges, overruled: overruled.map((o) => o.reading), summary: lines }, null, 1) + '\n');
}
