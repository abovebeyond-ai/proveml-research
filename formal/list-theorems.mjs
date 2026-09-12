#!/usr/bin/env node
// What the mechanisation proves, as a source the paper can bind to: the Lean build's verdict, the count
// of `sorry` (an admitted gap) across the model, and every theorem with the docstring above it.
// Run from the repository root; needs elan (lake) in PATH or under ~/.elan/bin.
import { readFileSync, readdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { homedir } from 'node:os';
const DIR = new URL('./', import.meta.url).pathname;
const env = { ...process.env, PATH: homedir() + '/.elan/bin:' + (process.env.PATH || '') };
const b = spawnSync('lake', ['build'], { cwd: DIR, encoding: 'utf8', env });
const last = (b.stdout || '').trim().split('\n').pop() || '';
console.log(`lake build: exit ${b.status} (${last})`);
const files = readdirSync(DIR + 'ProveML').filter((f) => f.endsWith('.lean')).sort();
let sorry = 0; const theorems = [], defs = [];
for (const f of files) {
  const lines = readFileSync(DIR + 'ProveML/' + f, 'utf8').split('\n');
  lines.forEach((l, i) => {
    if (/\bsorry\b/.test(l)) sorry++;
    const m = l.match(/^(theorem|def)\s+(\S+)/);
    if (m) { let doc = ''; for (let j = i - 1; j >= 0 && lines[j].trim(); j--) { const d = lines[j].match(/^\/--\s*(.*?)\s*-\/\s*$/) || lines[j].match(/^\/--\s*(.*)$/); if (d) { doc = d[1]; break; } } (m[1] === 'theorem' ? theorems : defs).push(`${f.replace('.lean', '')}.${m[2]}${doc ? ': ' + doc : ''}`); }
  });
}
console.log(`sorry: ${sorry} occurrences in ${files.length} files`);
console.log(`theorems: ${theorems.length}`);
for (const t of theorems) console.log('  ' + t);
console.log(`definitions: ${defs.length}`);
for (const t of defs) console.log('  ' + t);
