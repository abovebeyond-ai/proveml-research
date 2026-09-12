#!/usr/bin/env node
// A TikZ figure has no image file for the review page to show. This renders one: the tikzpicture is cut
// out of the paper, compiled standalone with the paper's own tikzset, and rasterised with pdftoppm.
//   node render-tikz-figure.mjs <label> <out.png>       e.g. fig:comparison fig-pipeline.png
import { readFileSync, writeFileSync, mkdtempSync, copyFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
const [label, out] = process.argv.slice(2);
const HERE = new URL('./', import.meta.url).pathname;
const tex = readFileSync(HERE + 'proveml-spec.tex', 'utf8');
const preamble = tex.slice(0, tex.indexOf('\\begin{document}'));
const tikzset = preamble.slice(preamble.indexOf('\\tikzset{'), preamble.indexOf('\n}\n', preamble.indexOf('\\tikzset{')) + 2);
const libs = (preamble.match(/\\usetikzlibrary\{[^}]*\}/g) || []).join('\n');
const fig = tex.split('\\begin{figure}').find((f) => f.includes('\\label{' + label + '}'));
if (!fig) { console.error('no figure with label', label); process.exit(1); }
const pic = fig.slice(fig.indexOf('\\begin{tikzpicture}'), fig.indexOf('\\end{tikzpicture}') + '\\end{tikzpicture}'.length);
const doc = `\\documentclass[border=6pt]{standalone}\n\\usepackage{tikz}\n${libs}\n\\usepackage[T1]{fontenc}\n\\usepackage{helvet}\n${tikzset}\n\\begin{document}\n${pic}\n\\end{document}\n`;
const dir = mkdtempSync(join(tmpdir(), 'tikz-'));
writeFileSync(join(dir, 'fig.tex'), doc);
const a = spawnSync('pdflatex', ['-interaction=nonstopmode', 'fig.tex'], { cwd: dir, encoding: 'utf8' });
if (a.status !== 0) { console.error(a.stdout.split('\n').filter((l) => /^!/.test(l)).join('\n')); process.exit(1); }
const b = spawnSync('pdftoppm', ['-png', '-r', '220', '-singlefile', 'fig.pdf', 'fig'], { cwd: dir, encoding: 'utf8' });
if (b.status !== 0) { console.error(b.stderr); process.exit(1); }
copyFileSync(join(dir, 'fig.png'), HERE + out);
console.log(`${out} rendered from ${label}`);
