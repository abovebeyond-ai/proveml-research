#!/usr/bin/env node
/**
 * The model pass, run at build time. In the artifact the page asked the
 * viewer's Claude paragraph by paragraph; served by Vera there is no model in
 * the browser, so the pass runs here, before the push, with the same prompt
 * and the same rules: everything the model returns is untrusted, a span
 * counts only if it is a verbatim substring of the paragraph, at most twenty
 * per paragraph, and a paragraph with nothing to confirm is recorded as clean
 * so it is never asked again until its text changes.
 *
 * Reads the page build.mjs wrote (which paragraphs it left pending) and the
 * blocks; writes report/infer-state.json, the same shape the artifact's
 * database held. Then build again: proposals become marks.
 *
 *   node infer-cli.mjs --dry            # which paragraphs are pending
 *   node infer-cli.mjs [--limit N] [--model sonnet]
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf('--' + n); return i < 0 ? d : args[i + 1]; };
const DRY = args.includes('--dry'); const LIMIT = Number(opt('limit', 1000)); const MODEL = opt('model', 'sonnet');
const pid = (t) => 'p' + createHash('sha256').update(String(t)).digest('hex').slice(0, 12);
const CITE = /⟦c:([^⟧]+)⟧([^⟦]*)⟦\/c⟧/g;

const page = readFileSync('report/review-page.html', 'utf8');
const pending = new Set([...page.matchAll(/<section class="pair" id="([^"]+)"[^>]*data-scan="pending"/g)].map((m) => m[1]));
const blocks = JSON.parse(readFileSync('report/paper1-blocks.json', 'utf8'));
const state = existsSync('report/infer-state.json') ? JSON.parse(readFileSync('report/infer-state.json', 'utf8')) : {};
const todo = [];
for (const b of blocks) {
  if (b.kind === 'heading' || b.kind === 'code' || b.kind === 'figure') continue;
  let text = b.text; const cm = b.kind === 'para' ? text.match(/^((?:Table|Figure) \d+): ?/) : null; if (cm) text = text.slice(cm[0].length);
  const id = pid(text);
  if (!pending.has(id) || state[id]) continue;
  todo.push({ id, text: text.replace(CITE, '$2').replace(/\s+/g, ' ').trim() });
}
console.log(`${pending.size} paragraphs pending on the page, ${todo.length} without a record`);
if (DRY) { for (const t of todo) console.log(' ', t.id, t.text.slice(0, 90)); process.exit(0); }

const prompt = (t) => "You are a reviewer's assistant. Below is one paragraph of an academic paper. "
  + 'List every claim in it that a careful reviewer would want the author to confirm or source: characterisations of cited work, numbers, dates, comparisons, causal claims, absence claims, historical claims. '
  + 'Return ONLY a JSON array, no prose. Each item: {"span": an exact verbatim substring of the paragraph (short, the claim itself), "kind": one of citation|number|date|comparison|causal|absence|historical|other, "why": one short sentence on what could be wrong}. '
  + 'If nothing needs confirming return [].\n\nPARAGRAPH:\n' + t;

let done = 0;
for (const t of todo.slice(0, LIMIT)) {
  let claims = null;
  for (let tries = 0; tries < 3 && claims === null; tries++) {
    const r = spawnSync('claude', ['-p', prompt(t.text), '--output-format', 'json', '--model', MODEL], { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
    if (r.status !== 0) { console.error(' claude failed:', (r.stderr || '').slice(-200)); continue; }
    try {
      const out = JSON.parse(r.stdout); const text = String(out.result || '');
      const m = text.match(/\[[\s\S]*\]/); const arr = m ? JSON.parse(m[0]) : [];
      claims = Array.isArray(arr) ? arr : [];
    } catch (e) { console.error(' no JSON array in the answer; retrying'); }
  }
  if (claims === null) { console.error(' giving up on', t.id); continue; }
  const kept = claims.filter((c) => c && typeof c.span === 'string' && c.span.length >= 3 && t.text.includes(c.span))
    .map((c) => ({ span: c.span, kind: String(c.kind || 'other').slice(0, 20), why: String(c.why || '').slice(0, 300) })).slice(0, 20);
  state[t.id] = { at: new Date().toISOString(), claims: kept, state: kept.length ? 'checked' : 'clean', by: 'claude ' + MODEL + ', build-time pass' };
  writeFileSync('report/infer-state.json', JSON.stringify(state, null, 1) + '\n');
  done++; console.log(` ${t.id}: ${kept.length} proposal(s)${claims.length !== kept.length ? ' (' + (claims.length - kept.length) + ' not verbatim, dropped)' : ''}`);
}
console.log(`${done} paragraph(s) recorded; build again to turn proposals into marks`);
