#!/usr/bin/env node
/**
 * The judgment study in one table, from the run files. Every number here is
 * recomputed from judgment-results-*.json; nothing is typed in.
 *
 * Per model and condition, mean over runs (sample sd over runs where it means
 * something): responses with at least one judgment construct; judgments
 * emitted, and of those verified, false, unregistered, on the first pass and
 * after one correction; qualitative words outside any construct; and the
 * boundary and contrary questions, scored from what held.
 */
import { readFileSync, readdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const dir = dirname(fileURLToPath(import.meta.url));
const files = readdirSync(dir).filter((f) => /^judgment-results-(registry|none)-.*-run\d\.json$/.test(f));
const runs = files.map((f) => JSON.parse(readFileSync(join(dir, f), 'utf8')));
if (!runs.length) { console.log('no run files'); process.exit(1); }

const mean = (xs) => xs.reduce((a, b) => a + b, 0) / xs.length;
const sd = (xs) => xs.length > 1 ? Math.sqrt(xs.reduce((a, b) => a + (b - mean(xs)) ** 2, 0) / (xs.length - 1)) : 0;
const pct = (n, d) => d ? 100 * n / d : 0;
const f1 = (x) => x.toFixed(1);
const pm = (xs) => `${f1(mean(xs))}${xs.length > 1 ? ' ± ' + f1(sd(xs)) : ''}`;
const short = (m) => m.replace('deepseek-ai/', '').replace('-0813', '');

const groups = {};
for (const r of runs) (groups[`${r.model}${r.condition}`] ||= []).push(r);

// Per run: the figures the table reports. Unregistered is recomputed from the names against
// the run's own registry, so a judgment on an entity that did not resolve is never counted as
// an invented name (older run files counted both as unknown).
function figures(r) {
    const rs = r.results.filter((x) => !x.empty);
    const base = (c) => String(c || '').replace(/\(.*$/, '');
    for (const x of rs) for (const st of x.steps) for (const inf of [st.inferences, st.candidate && st.candidate.inferences].filter(Boolean)) {
        inf.unregistered = inf.names.filter((n) => n.status === 'unverifiable' && !(base(n.name) in r.registry)).length;
        inf.unverifiable = inf.names.filter((n) => n.status === 'unverifiable').length - inf.unregistered;
    }
    const first = (x) => x.steps[0], last = (x) => x.steps[x.steps.length - 1];
    const sumBy = (pick) => rs.reduce((n, x) => n + pick(x), 0);
    const inf0 = { total: sumBy((x) => first(x).inferences.total), verified: sumBy((x) => first(x).inferences.verified), failed: sumBy((x) => first(x).inferences.failed), unregistered: sumBy((x) => first(x).inferences.unregistered) };
    const inf1 = { total: sumBy((x) => last(x).inferences.total), verified: sumBy((x) => last(x).inferences.verified), failed: sumBy((x) => last(x).inferences.failed), unregistered: sumBy((x) => last(x).inferences.unregistered) };
    // A boundary or contrary question is answered soundly when no judgment the data refutes
    // survives: on the first pass, and after the correction.
    const hard = rs.filter((x) => x.category === 'boundary' || x.category === 'contrary');
    const sound0 = hard.filter((x) => first(x).inferences.failed === 0 && first(x).inferences.unregistered === 0).length;
    const sound1 = hard.filter((x) => last(x).inferences.failed === 0 && last(x).inferences.unregistered === 0).length;
    const unreg = rs.filter((x) => x.category === 'unregistered');
    const invented0 = unreg.filter((x) => first(x).inferences.unregistered > 0).length;
    const invented1 = unreg.filter((x) => last(x).inferences.unregistered > 0).length;
    return {
        n: rs.length,
        withInf: rs.filter((x) => first(x).inferences.total > 0).length,
        inf0, inf1,
        rate0: pct(inf0.verified, inf0.total), rate1: pct(inf1.verified, inf1.total),
        unmarked0: sumBy((x) => first(x).unmarked.length), unmarked1: sumBy((x) => last(x).unmarked.length),
        claims0: pct(sumBy((x) => first(x).verified), sumBy((x) => first(x).total)), claims1: pct(sumBy((x) => last(x).verified), sumBy((x) => last(x).total)),
        hard: hard.length, sound0, sound1, unreg: unreg.length, invented0, invented1,
    };
}

console.log('model | condition | runs | responses with a judgment | judgments per run (first pass) | verified first pass | false first pass | unregistered first pass | verified after correction | false after correction | qualitative words outside a construct, first → after | boundary and contrary answered soundly, first → after | unregistered questions where a name was invented, first → after');
const order = ['claude-opus-5', 'claude-sonnet-5', 'deepseek-ai/DeepSeek-V4-Pro-0813'];
for (const model of order) for (const cond of ['none', 'registry']) {
    const g = groups[`${model}${cond}`]; if (!g) continue;
    const F = g.map(figures);
    const col = (k) => F.map((x) => x[k]);
    const line = [
        short(model), cond, g.length,
        `${pm(col('withInf'))} of ${F[0].n}`,
        pm(F.map((x) => x.inf0.total)),
        F.some((x) => x.inf0.total) ? pm(col('rate0')) + '%' : 'n/a',
        pm(F.map((x) => x.inf0.failed)),
        pm(F.map((x) => x.inf0.unregistered)),
        F.some((x) => x.inf1.total) ? pm(col('rate1')) + '%' : 'n/a',
        pm(F.map((x) => x.inf1.failed)),
        `${pm(col('unmarked0'))} → ${pm(col('unmarked1'))}`,
        `${pm(col('sound0'))} → ${pm(col('sound1'))} of ${F[0].hard}`,
        `${pm(col('invented0'))} → ${pm(col('invented1'))} of ${F[0].unreg}`,
    ];
    console.log(line.join(' | '));
}

// The registry every registry run used, by name count (identical across runs).
{
    const reg = runs.find((r) => r.condition === 'registry');
    if (reg) console.log(`\nregistry: ${Object.keys(reg.registry).length} names (${Object.keys(reg.registry).join(', ')})`);
}

// Totals over every registry run, the figures the paper's finding quotes.
{
    const reg = runs.filter((r) => r.condition === 'registry');
    const rs = reg.flatMap((r) => r.results.filter((x) => !x.empty));
    const s0 = (k) => rs.reduce((n, x) => n + x.steps[0].inferences[k], 0), s1 = (k) => rs.reduce((n, x) => n + x.steps[x.steps.length - 1].inferences[k], 0);
    console.log(`\nall registry runs (${reg.length}): ${s0('total')} judgments on the first pass, ${s0('verified')} verified, ${s0('failed')} false; after one correction ${s1('total')} judgments, ${s1('verified')} verified, ${s1('failed')} false`);
}

// Every query-run's first pass, both conditions: did the model produce any construct at all?
{
    let n = 0, none = 0;
    for (const r of runs) for (const x of r.results) { n++; const s = x.steps && x.steps[0]; const facts = s ? (s.claims ?? s.total ?? 0) : 0; const inf = s && s.inferences ? s.inferences.total : 0; if (!(facts > 0 || inf > 0)) none++; }
    console.log(`query-runs whose first pass carried no construct: ${none} of ${n}`);
}
// Which registry names failed, across all registry runs: the sentence the model reached for.
const failedNames = {};
for (const r of runs) if (r.condition === 'registry') for (const x of r.results) if (!x.empty) for (const n of x.steps[0].inferences.names) if (n.status === 'failed') failedNames[n.name] = (failedNames[n.name] || 0) + 1;
console.log('\nfalse judgments on the first pass, by name (all registry runs):', Object.entries(failedNames).sort((a, b) => b[1] - a[1]).map(([n, c]) => `${n} ${c}`).join(', ') || 'none');
// Of those failures, how many name a threshold whose own word the question used ("Is 6ZW a strong
// class?" answered with IS_STRONG at 74 against 75): the word the question invited, refused by the
// bound. Counted by the threshold's word appearing in the question; the rest are listed by question.
{
    const WORD = { IS_STRONG: /strong/i, IS_SMALL_SAMPLE: /small/i, IS_GREY_RISK: /grey/i, IS_RELIABLE_SAMPLE: /reliable/i, IS_HIGH_ABSENCE: /absen/i, IS_LOW_PASS: /\blow\b/i };
    const invitedBy = {}, other = {}; let invited = 0, rest = 0;
    for (const r of runs) if (r.condition === 'registry') for (const x of r.results) if (!x.empty) for (const n of x.steps[0].inferences.names) if (n.status === 'failed') {
        const base = String(n.name).replace(/\(.*$/, '');
        if (WORD[base] && WORD[base].test(x.prompt || '')) { invited++; invitedBy[x.id] = (invitedBy[x.id] || 0) + 1; } else { rest++; other[x.id] = (other[x.id] || 0) + 1; }
    }
    const list = (o) => Object.entries(o).sort((a, b) => b[1] - a[1]).map(([q, c]) => `${q} ${c}`).join(', ');
    console.log(`first-pass failures whose threshold names the word the question used: ${invited} of ${invited + rest} (${list(invitedBy)}), the largest single class; the other ${rest} spread over ${Object.keys(other).length} questions (${list(other)})`);
}
const invented = {};
for (const r of runs) if (r.condition === 'registry') for (const x of r.results) if (!x.empty) for (const n of x.steps[0].inferences.names) if (n.status === 'unverifiable' && !(String(n.name).replace(/\(.*$/, '') in r.registry)) invented[n.name] = (invented[n.name] || 0) + 1;
const unresolved = {};
for (const r of runs) if (r.condition === 'registry') for (const x of r.results) if (!x.empty) for (const n of x.steps[0].inferences.names) if (n.status === 'unverifiable' && (String(n.name).replace(/\(.*$/, '') in r.registry)) unresolved[n.entity] = (unresolved[n.entity] || 0) + 1;
console.log('judgments on an entity that did not resolve (registered name, no value):', Object.entries(unresolved).map(([e, c]) => `${e} ${c}`).join(', ') || 'none');
console.log('invented names on the first pass:', Object.entries(invented).sort((a, b) => b[1] - a[1]).map(([n, c]) => `${n} ${c}`).join(', ') || 'none');
