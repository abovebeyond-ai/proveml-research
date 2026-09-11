#!/usr/bin/env node
/**
 * ProveML Judgment Study (September 2026)
 *
 * The frontier study measured entities and facts. This one measures the third
 * construct: a qualitative judgment bound to a named, pre-declared condition,
 * ?[label: NAME]{words}. Twenty questions invite a judgment and name no cutoff.
 * The same questions run under two prompts:
 *
 *   --condition none      the frontier study's prompt, entities and facts only.
 *                         Whatever qualitative words the model writes are prose
 *                         the verifier cannot see. This is the baseline: what a
 *                         deployment without a registry emits.
 *   --condition registry  the prompt proveml/prompt generates from the store and
 *                         the registry: the same rules plus the judgment
 *                         construct and the list of names it may use.
 *
 * Per response the harness records what the verifier says (every construct,
 * every inference: verified, failed, or an unregistered name) and, for the
 * words the verifier cannot see, a lexicon count of qualitative words outside
 * any judgment construct. Which registered conditions hold for each record in
 * the context is computed from the store and saved with the results, so the
 * boundary and contrary questions score themselves.
 *
 * Every call keeps the provider's receipt (ids, model echo, usage, clock).
 *
 * Usage:
 *   node test-judgment.js --provider claude --model claude-opus-5 --condition registry --run 1
 */

import { callLLMWithReceipt } from './llm.mjs';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { verifyProveml } from 'proveml/verify';
import { thresholds as exampleRegistry } from 'proveml/thresholds';
import { promptFor } from 'proveml/prompt';

const __dirname = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const opt = (k, d) => args.find((_, i) => args[i - 1] === k) ?? d;
const maxLoops = parseInt(opt('--max-loops', '1'));
const runId = opt('--run', '1');
const condition = opt('--condition', 'registry');
const model = opt('--model', '');
const provider = opt('--provider', 'claude');
const tag = opt('--tag', 'judgment');
const CALL_TIMEOUT_MS = (Number(opt('--timeout', '900'))) * 1000;
if (!['none', 'registry'].includes(condition)) throw new Error('--condition none|registry');

// ── Data and store: the same flattening as the frontier study ──
const dataPath = join(__dirname, '../data/mastery-layers-demo.json');
if (!existsSync(dataPath)) throw new Error(`Missing ${dataPath}`);
const ml = JSON.parse(readFileSync(dataPath));
const factStore = {};
for (const o of ml.offerings) {
    factStore[`offering:${o.id}.name`] = o.name;
    factStore[`offering:${o.id}.studentCount`] = o.students.length;
    const avg = o.students.length ? Math.round(o.students.reduce((s, st) => s + st.rate, 0) / o.students.length) : 0;
    factStore[`offering:${o.id}.passRate`] = avg;
    const evAvg = o.students.length ? Math.round(o.students.reduce((s, st) => s + (st.total ? st.ev / st.total * 100 : 0), 0) / o.students.length) : 0;
    factStore[`offering:${o.id}.evalRate`] = evAvg;
    for (const s of o.students) {
        factStore[`student:${s.id}.name`] = s.name;
        factStore[`student:${s.id}.passRate`] = s.rate;
        factStore[`student:${s.id}.passed`] = s.pass;
        factStore[`student:${s.id}.evaluated`] = s.ev;
        factStore[`student:${s.id}.total`] = s.total;
        factStore[`student:${s.id}.absent`] = s.grijs || 0;
    }
}

// ── Registry: the example registry that ships with the package, restricted to
// the fields this store holds. One mechanical exclusion: an is_null judgment is
// vacuously true on a record type that never carries the field (IS_MISSING on
// evaluated verifies for every class, because classes have no evaluated field),
// so it would hand every model a free verified judgment. Noted for the spec. ──
const storeFields = new Set(Object.keys(factStore).map((k) => k.slice(k.indexOf('.') + 1)).filter((f) => !f.startsWith('_')));
const registry = Object.fromEntries(Object.entries(exampleRegistry).filter(([, t]) => storeFields.has(t.field) && t.op !== 'is_null'));

// Which registered conditions hold for a record: the verifier's own arithmetic,
// asked through a synthetic claim so the harness never re-implements the rule.
function holdsFor(path) {
    const out = {};
    for (const name of Object.keys(registry)) {
        const r = verifyProveml(`@[${path}]{${factStore[path + '.name']}} ?[j: ${name}]{x}`, factStore, { thresholds: registry });
        const d = r.details.find((x) => x.type === 'inference');
        out[name] = d ? d.status : 'unverifiable';
    }
    return Object.entries(out).filter(([, s]) => s === 'verified').map(([n]) => n);
}

// ── Context slice, as in the frontier study ──
const offSummary = ml.offerings.map((o) => ({ id: o.id, name: o.name, stream: o.stream, studentCount: factStore[`offering:${o.id}.studentCount`], passRate: factStore[`offering:${o.id}.passRate`], evalRate: factStore[`offering:${o.id}.evalRate`] }));
const stuAll = [];
for (const o of ml.offerings) for (const s of o.students) stuAll.push({ ...s, offeringId: o.id, offering: o.name });
const struggling = stuAll.filter((s) => s.ev >= 5).sort((a, b) => a.rate - b.rate).slice(0, 20)
    .map((s) => ({ id: s.id, name: s.name, offeringId: s.offeringId, offering: s.offering, passed: s.pass, evaluated: s.ev, total: s.total, passRate: s.rate, absent: s.grijs || 0 }));
const offeringByName = new Map(offSummary.map((o) => [o.name, o]));
const studentByName = new Map(struggling.map((s) => [s.name, s]));
function contextFor(spec) {
    const offerings = [], students = [];
    for (const ref of spec.must_reference || []) {
        if (offeringByName.has(ref)) offerings.push(offeringByName.get(ref));
        if (studentByName.has(ref)) students.push(studentByName.get(ref));
    }
    for (const s of students) if (offeringByName.has(s.offering)) offerings.push(offeringByName.get(s.offering));
    const uniq = (xs) => xs.filter((x, i) => xs.findIndex((y) => y.id === x.id) === i);
    return { offerings: uniq(offerings), strugglingStudents: uniq(students) };
}

// ── The two prompts ──
// Verbatim from test-convergence.js (the frontier study): entities and facts only.
const SYSTEM_NONE = `You are a curriculum analytics expert. Answer in English, in ProveML markdown.
RULES:
- @[entity_type:id]{exact name} for every entity reference
- %[field]{value} for every number — MUST be preceded by @[entity] (context carries forward until a new entity is declared)
- A fact binds to the NEAREST preceding entity. If a sentence names a second entity before a fact (e.g. "Amir of 3BS has a pass rate of 53%"), write the fact with its own record: %[student:20414.passRate]{53}
- A threshold or cutoff from the question (e.g. "below 60%") is not a fact: do not write it as %[...]
- Use EXACT values from the data — do not round or approximate
- Keep it concise — focus on the data
- Do not wrap the answer in code fences or triple backticks

EXAMPLE OUTPUT:
@[offering:10004]{3BS} has %[studentCount]{8} students with a pass rate of %[passRate]{60}%.
@[student:20653]{Rune Verstraete} scored %[passRate]{0}% on %[evaluated]{6} attainment levels.
@[student:20414]{Amir Janssens} of @[offering:10056]{5OL} has a pass rate of %[student:20414.passRate]{53}% with %[student:20414.absent]{0} absences.
`;
// Generated by the package from the store and the registry; nothing hand-copied.
// The example is the frontier prompt's first example line with the judgment it implies.
const SYSTEM_REGISTRY = promptFor({ store: factStore, thresholds: registry, role: 'You are a curriculum analytics expert. Answer in English.', example: '@[offering:10004]{3BS} has %[studentCount]{8} students with a pass rate of %[passRate]{60}%, so it is ?[p: IS_PASSING]{passing}.' });
const SYSTEM = condition === 'registry' ? SYSTEM_REGISTRY : SYSTEM_NONE;

// ── Verification and the words the verifier cannot see ──
const verifyOpts = { thresholds: registry };   // both conditions are verified against the same registry
function verify(md) {
    const r = verifyProveml(md, factStore, verifyOpts);
    r.rate = r.total > 0 ? Math.round(r.verified / r.total * 100) : 0;
    r.hasMarkup = r.total > 0;
    const inf = r.details.filter((d) => d.type === 'inference');
    // An unregistered name is one the registry does not hold; a judgment on an entity that did
    // not resolve is unverifiable for another reason and is counted as such, not as invented.
    const base = (c) => String(c || '').replace(/\(.*$/, '');
    const invented = (d) => d.status === 'unverifiable' && !(base(d.condition) in registry);
    r.inferences = { total: inf.length, verified: inf.filter((d) => d.status === 'verified').length, failed: inf.filter((d) => d.status === 'failed').length, unregistered: inf.filter(invented).length, unverifiable: inf.filter((d) => d.status === 'unverifiable' && !invented(d)).length, names: inf.map((d) => ({ name: d.condition, status: d.status, entity: d.entity, error: d.error })) };
    return r;
}
// Qualitative words in prose, outside any ?[...]{...} construct. A count, not a
// judgment: the words are listed in the run file for a reader to check.
const LEXICON = /\b(at risk|strong|weak|low|high|critical(?:ly)?|concern(?:ing)?|reliable|unreliable|small sample|too small|well covered|poor(?:ly)?|good|adequate|healthy|solid|badly|excellent|average|worrying|alarming|below half|passing|failing|underperform\w*|outperform\w*)\b/gi;
function unmarkedJudgments(md) {
    const prose = md.replace(/\?\[[^\]]*\]\{[^}]*\}/g, ' ').replace(/[@%]\[[^\]]*\]\{[^}]*\}/g, ' ');
    return [...prose.matchAll(LEXICON)].map((m) => m[0].toLowerCase());
}

let timedOut = 0;
function call(prompt) {
    try { return callLLMWithReceipt(provider, model, prompt, { timeoutMs: CALL_TIMEOUT_MS, tmpFile: join(__dirname, '.tmp-judgment.txt') }); }
    catch (e) { if (/ETIMEDOUT/.test(e.message)) timedOut++; console.error(`    LLM error: ${e.message.slice(0, 120)}`); return null; }
}

const benchmark = JSON.parse(readFileSync(join(__dirname, '../benchmarks/proveml-judgment-en.v1.json'), 'utf8'));
const limit = Number(opt('--limit', '0'));   // a smoke test runs the first N questions and writes no run file
if (limit) benchmark.prompts = benchmark.prompts.slice(0, limit);
console.log(`ProveML judgment study: ${provider} ${model}, condition ${condition}, run ${runId}, registry ${Object.keys(registry).length} names`);

const results = [];
for (let qi = 0; qi < benchmark.prompts.length; qi++) {
    const spec = benchmark.prompts[qi];
    const ctx = contextFor(spec);
    const ctxJson = JSON.stringify(ctx, null, 2);
    const holds = {};
    for (const o of ctx.offerings) holds[`offering:${o.id}`] = holdsFor(`offering:${o.id}`);
    for (const s of ctx.strugglingStudents) holds[`student:${s.id}`] = holdsFor(`student:${s.id}`);
    console.log(`Q${qi + 1} [${spec.category}] ${spec.id}: "${spec.prompt}"`);

    const t0 = Date.now();
    const first = call(`${SYSTEM}\n\nDATA:\n${ctxJson}\n\nQuestion: ${spec.prompt}`);
    const genTime = +((Date.now() - t0) / 1000).toFixed(1);
    if (!first) { console.log('  no answer\n'); results.push({ query: qi + 1, id: spec.id, category: spec.category, holds, empty: true, steps: [], receipts: [] }); continue; }
    let response = first.text;
    const receipts = [first.receipt];
    let v = verify(response);
    const step = (loop, v, time, extra = {}) => ({ loop, verified: v.verified, total: v.total, rate: v.rate, errors: v.errors.length, inferences: v.inferences, unmarked: unmarkedJudgments(response), time, ...extra });
    const steps = [step(0, v, genTime)];
    console.log(`  Loop 0: ${v.verified}/${v.total} claims, inferences ${v.inferences.verified}/${v.inferences.total} (${v.inferences.failed} false, ${v.inferences.unregistered} unregistered), unmarked words ${steps[0].unmarked.length} [${genTime}s]`);

    for (let loop = 1; loop <= maxLoops && v.errors.length > 0; loop++) {
        const fixPrompt = `Your ProveML answer had ${v.errors.length} verification errors. The verifier checked each construct against the data${condition === 'registry' ? ' and the registry' : ''} and found:\n\n${v.errors.slice(0, 15).map((e) => '- ' + e).join('\n')}\n\nDATA (use these exact values):\n${ctxJson}\n\nYOUR ANSWER TO CORRECT:\n${response}\n\nFix the errors. A judgment whose condition is false must be removed or replaced by one whose condition holds; an unregistered name may not be used. Return the FULL corrected answer.`;
        const t1 = Date.now();
        const fixed = call(fixPrompt);
        const loopTime = +((Date.now() - t1) / 1000).toFixed(1);
        if (!fixed) { console.log(`  Loop ${loop}: correction failed`); break; }
        receipts.push(fixed.receipt);
        const fv = verify(fixed.text);
        const better = fv.verified > v.verified || (fv.verified === v.verified && fv.errors.length < v.errors.length);
        const accepted = better && fv.hasMarkup;
        if (accepted) { response = fixed.text; v = fv; }
        steps.push(step(loop, v, loopTime, { candidate: { verified: fv.verified, total: fv.total, inferences: fv.inferences, unmarked: unmarkedJudgments(fixed.text) }, accepted }));
        console.log(`  Loop ${loop}: ${fv.verified}/${fv.total}, inferences ${fv.inferences.verified}/${fv.inferences.total} → ${accepted ? 'accepted' : 'not better'} [${loopTime}s]`);
        if (v.errors.length === 0) break;
    }
    results.push({ query: qi + 1, id: spec.id, category: spec.category, prompt: spec.prompt, holds, converged: v.errors.length === 0 && v.hasMarkup, finalResponse: response, steps, receipts });
    if (limit) { console.log('  first answer:\n    ' + first.text.replace(/\n/g, '\n    ')); console.log('  first errors: ' + JSON.stringify(steps[0].inferences.names.filter((n) => n.status !== 'verified')) + ' unmarked: ' + JSON.stringify(steps[0].unmarked)); if (response !== first.text) console.log('  final answer:\n    ' + response.replace(/\n/g, '\n    ')); }
    console.log('');
}

const valid = results.filter((r) => !r.empty);
const sum = (f) => valid.reduce((n, r) => n + f(r), 0);
const last = (r) => r.steps[r.steps.length - 1];
const summary = {
    queries: valid.length,
    withInference: valid.filter((r) => r.steps[0].inferences.total > 0).length,
    inferencesFirst: { total: sum((r) => r.steps[0].inferences.total), verified: sum((r) => r.steps[0].inferences.verified), failed: sum((r) => r.steps[0].inferences.failed), unregistered: sum((r) => r.steps[0].inferences.unregistered) },
    inferencesFinal: { total: sum((r) => last(r).inferences.total), verified: sum((r) => last(r).inferences.verified), failed: sum((r) => last(r).inferences.failed), unregistered: sum((r) => last(r).inferences.unregistered) },
    unmarkedFirst: sum((r) => r.steps[0].unmarked.length), unmarkedFinal: sum((r) => last(r).unmarked.length),
    claimsFirst: { verified: sum((r) => r.steps[0].verified), total: sum((r) => r.steps[0].total) },
    claimsFinal: { verified: sum((r) => last(r).verified), total: sum((r) => last(r).total) },
    timedOutCalls: timedOut,
};
console.log(JSON.stringify(summary, null, 1));
const slug = model.replace(/\//g, '_');
const out = join(__dirname, `${tag}-results-${condition}-${slug}-run${runId}.json`);
if (limit) { console.log('smoke test, nothing saved'); process.exit(0); }
writeFileSync(out, JSON.stringify({ timestamp: new Date().toISOString(), provider, model, condition, run: +runId, maxLoops, benchmark: { name: benchmark.name, version: benchmark.version }, registry, systemPrompt: SYSTEM, results, summary }, null, 2));
console.log(`Saved to ${out}`);
