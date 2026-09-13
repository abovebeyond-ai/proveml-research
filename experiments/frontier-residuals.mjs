#!/usr/bin/env node
/**
 * What the residual errors of the frontier runs are, by mechanism.
 * Reads the education artifacts of one tag (--tag frontier, the default, or
 * --tag frontier2 for the second study), looks at the errors still
 * standing on non-converged queries after the last step, and classifies each:
 *   student-field-under-offering  a pupil field (passRate, passed, evaluated,
 *                                 total, absent) bound to an offering entity:
 *                                 the sentence named the pupil, then the
 *                                 class, and linear carry-forward chose the class
 *   threshold-as-fact             a %[...] with no entity in force (a bound
 *                                 written as if it were a record)
 *   wrong-value                   the path exists, the number does not match
 *   other                         everything else (unknown field, wrong name)
 */
import { readFileSync, readdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const tagArg = process.argv.indexOf('--tag');
const TAG = tagArg > -1 ? process.argv[tagArg + 1] : 'frontier';
if (!/^[\w.-]+$/.test(TAG || '')) { console.error('usage: frontier-residuals.mjs [--tag <tag>]'); process.exit(2); }
const FILES = new RegExp(`^convergence-results-${TAG}-.*-run\\d\\.json$`);
const STUDENT_FIELDS = new Set(['passRate', 'passed', 'evaluated', 'total', 'absent']);
const byModel = {};
for (const f of readdirSync(__dirname).filter(f => FILES.test(f))) {
    const d = JSON.parse(readFileSync(join(__dirname, f), 'utf8'));
    const m = (byModel[d.model] ||= { total: 0, queries: 0, affectedQueries: 0, classes: {} });
    for (const q of d.results) {
        if (!q || q.converged) continue;
        m.queries++;
        let bindingHere = false;
        for (const e of q.steps[q.steps.length - 1].errorDetails || []) {
            m.total++;
            const field = (e.path || '').split('.').slice(1).join('.');
            let cls = 'other';
            if (e.status === 'field-not-found' && /^offering:/.test(e.path || '') && STUDENT_FIELDS.has(field)) { cls = 'student-field-under-offering'; bindingHere = true; }
            else if (e.status === 'no-context') cls = 'threshold-as-fact';
            else if (e.status === 'value-mismatch') cls = 'wrong-value';
            m.classes[cls] = (m.classes[cls] || 0) + 1;
        }
        if (bindingHere) m.affectedQueries++;
    }
}
if (!Object.keys(byModel).length) { console.error(`no run files for tag ${TAG}`); process.exit(1); }
for (const [model, m] of Object.entries(byModel)) {
    const pct = (k) => m.total ? `${m.classes[k] || 0} (${Math.round(100 * (m.classes[k] || 0) / m.total)}%)` : '0';
    console.log(`${model}: ${m.total} residual errors on ${m.queries} non-converged query-runs; binding: ${pct('student-field-under-offering')} in ${m.affectedQueries} query-runs; threshold-as-fact: ${pct('threshold-as-fact')}; wrong value: ${pct('wrong-value')}; other: ${pct('other')}`);
}
