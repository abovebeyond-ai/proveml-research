#!/usr/bin/env node
// When each study ran, from the timestamp inside every stored run file: the source for the paper's dates.
import { readdirSync, readFileSync } from 'node:fs';
const DIR = new URL('./', import.meta.url).pathname;
const groups = [
  ['finance runs of the small-model study', /^convergence-results-finance-(?!frontier)/],
  ['education runs of the small-model study', /^convergence-results-(?!finance|frontier|fullctx)[a-z0-9.:-]+-run\d\.json$/],
  ['full-context ablation of the small-model study', /^convergence-results-fullctx-/],
  ['first frontier study (education and finance)', /^convergence-results-(finance-)?frontier-/],
  ['second frontier study (education and finance)', /^convergence-results-(finance-)?frontier2-/],
  ['judgment study', /^judgment-results-/],
];
for (const [label, re] of groups) {
  const files = readdirSync(DIR).filter((f) => re.test(f));
  const ts = files.map((f) => { try { return JSON.parse(readFileSync(DIR + f, 'utf8')).timestamp; } catch { return null; } }).filter(Boolean).sort();
  console.log(`${label}: ${files.length} files, ${ts.length ? ts[0].slice(0, 10) + ' to ' + ts[ts.length - 1].slice(0, 10) : 'no timestamps'}`);
}
