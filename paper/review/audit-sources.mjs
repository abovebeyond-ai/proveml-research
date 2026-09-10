// The paper's own citation audit (proveml-research/audit) as review material.
// Two kinds of reading come out of it:
//   1. the related-work characterisations, already ProveML claims with
//      evidence quoted from archived copies of the cited works;
//   2. for every archived reference, its title checked against the snapshot,
//      so a reference list entry is a reading and not just a line.
// The store is built from the audit's own claims (a verified claim's value is
// the store value by construction), plus the audit's characteristics store.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const ROOT = new URL('../../', import.meta.url).pathname.replace(/\/$/, '');   // the research repository

const A = ROOT + '/audit';
const J = (p) => JSON.parse(readFileSync(join(A, p), 'utf8'));

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', ndash: '–', mdash: '—', hellip: '…' };
export const htmlToText = (h) => h
  .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, ' ')
  .replace(/<\s*(\/p|\/div|\/li|\/h[1-6]|\/tr|\/section|\/article|\/blockquote|\/pre|\/table|\/ul|\/ol|\/dd|\/dt)\b[^>]*>/gi, '\n')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&#(\d+);/g, (m, n) => String.fromCodePoint(+n))
  .replace(/&#x([0-9a-f]+);/gi, (m, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&([a-z]+);/gi, (m, n) => ENT[n.toLowerCase()] ?? m)
  .split('\n').map((l) => l.replace(/\s+/g, ' ').trim()).filter(Boolean).join('\n');
const squash = (s) => s.replace(/\s+/g, ' ').trim();

// archived snapshots, keyed 'cite-<id>' so they never collide with the run artifacts
export const auditSnapshots = {};
for (const f of readdirSync(join(A, 'references/raw'))) {
  const id = f.replace(/\.(html|txt)$/, '');
  const raw = readFileSync(join(A, 'references/raw', f), 'utf8');
  auditSnapshots['cite-' + id] = f.endsWith('.html') ? htmlToText(raw) : squash(raw);
}

// store: audit characteristics + bibliography facts + the claims' own values
export const auditStore = { ...J('fact-stores/citation-characteristics.json'), ...J('fact-stores/citation-bibliography.json') };
const rw = J('references/related-work-claims.json');
for (const c of rw) {
  auditStore[`citation:${c.id}.name`] = c.name;           // the display text the claim uses
  for (const e of c.evidence) auditStore[`citation:${c.id}.${e.field}`] = e.claimValue;
}

// titles for the provenance view, one per archived copy
export const auditTitles = {};
for (const id of Object.keys(auditSnapshots)) {
  const key = id.slice(5); const c = rw.find((x) => x.id === key);
  auditTitles[id] = c ? `${c.name} (${c.year}): ${c.title}` : (auditStore[`citation:${key}.title`] || auditStore[`citation:${key}.name`] || key);
}

// 1. related-work characterisations as readings
export const auditSubjects = rw.map((c) => ({
  id: 'rw-' + c.id,
  title: `${c.name} (${c.year})`,
  meta: c.title,
  claim: c.claim,
  // a claim about a cited work may quote a second archived document about it (the
  // Commission's announcement next to the regulation): evidence may name its own source
  evidence: c.evidence.map((e) => ({ ...e, source: 'cite-' + (e.source || c.id) })),
}));

// 2. a reference entry becomes a reading when its title sits in the archived snapshot
// Typography differs between a bib entry and a rendered page (curly versus straight
// quotes, "---" versus an em dash, title case); the match folds those, one code unit to
// one, and the reading quotes the snapshot's own text at the matched span.
const fold = (ch) => {
  if ('\u201c\u201d\u201e"'.includes(ch)) return '"';
  if ("\u2018\u2019\u201a`\u00b4'".includes(ch)) return "'";
  if ('\u2013\u2014\u2010\u2011\u2212'.includes(ch)) return '-';
  const l = ch.toLowerCase();
  return l.length === 1 ? l : ch;
};
const foldStr = (s) => s.replace(/[\s\S]/g, fold);
export const referenceEvidence = (key, title) => {
  const sid = 'cite-' + key;
  const snap = auditSnapshots[sid];
  if (!snap || !title) return null;
  const t = foldStr(squash(title).replace(/\\&/g, '&').replace(/[{}]/g, '').replace(/---?/g, '-'));
  const body = squash(snap);
  const at = foldStr(body).indexOf(t);
  if (at < 0) return null;
  return { field: `paperref:${key}.title`, claimValue: title, basis: 'quote', source: sid, sourceQuote: body.slice(at, at + t.length), sourceLocator: 'archived copy of the cited work, title' };
};

// sanity: every quote in the audit must sit in its snapshot (it did when the audit was signed)
export const auditCheck = () => {
  let ok = 0, bad = [];
  for (const s of auditSubjects) for (const e of s.evidence) if (e.basis === 'quote') {
    const snap = auditSnapshots[e.source];
    if (snap && squash(snap).includes(squash(e.sourceQuote))) ok++; else bad.push(s.id + '.' + e.field);
  }
  return { ok, bad };
};
