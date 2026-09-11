#!/usr/bin/env node
/**
 * The implementation against the model. `vectors.json` is printed by the Lean
 * model (`lake exe vectors`): the paper's examples with the verdicts the
 * proven semantics assigns. This runs the same texts through the JavaScript
 * package and compares verdict for verdict. A difference is a bug in one of
 * the two, and the theorems say which one it is not.
 */
import { readFileSync } from 'node:fs';
import { verifyProveml } from 'proveml/verify';

const vectors = JSON.parse(readFileSync(new URL('./vectors.json', import.meta.url), 'utf8'));
const store = {
    'company:aapl.name': 'Apple Inc.', 'company:aapl.revenue': 391035000000, 'company:aapl.revenue._unit': 'USD',
    'company:aapl.netIncome': 93736000000, 'company:aapl.netIncome._unit': 'USD',
    'offering:10012.name': '6ZW', 'offering:10012.passRate': 74, 'offering:10012.studentCount': 8,
    'offering:10050.name': '5WEWI', 'offering:10050.passRate': 75,
    'student:20321.name': 'Nathan Lambert', 'student:20321.passRate': 7, 'student:20321.absent': 29,
    'account:901.name': 'Acme Corp', 'account:901.balance': 12400, 'account:901.balance._unit': 'EUR',
};
const registry = {
    IS_STRONG: { field: 'passRate', op: '>=', value: 75 },
    IS_PASSING: { field: 'passRate', op: '>=', value: 50 },
    IS_LOW_PASS: { field: 'passRate', op: '<', value: 25 },
    IS_HIGH_ABSENCE: { field: 'absent', op: '>', value: 10 },
    IS_GREY_RISK: { field: 'absent', op: '>', value: 30 },
    IS_SMALL_SAMPLE: { field: 'studentCount', op: '<', value: 5 },
    IS_NEGATIVE_BALANCE: { field: 'balance', op: '<', value: 0, unit: 'EUR' },
    IS_MISSING: { field: 'evaluated', op: 'is_null' },
};
let bad = 0;
for (const v of vectors) {
    const got = verifyProveml(v.text, store, { thresholds: registry }).details.map((d) => d.status);
    const same = JSON.stringify(got) === JSON.stringify(v.expected);
    if (!same) bad++;
    console.log(`${same ? 'ok  ' : 'DIFF'} ${v.name}${same ? '' : `\n     model ${JSON.stringify(v.expected)}\n     package ${JSON.stringify(got)}`}`);
}
console.log(`${vectors.length - bad} of ${vectors.length} vectors agree`);
process.exit(bad ? 1 : 0);
