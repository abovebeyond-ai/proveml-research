#!/usr/bin/env node
/**
 * The resolver's record (protocol step 4): which readings a checker has judged, under which
 * paragraph text, with what verdict. readings.mjs --only-changed skips a reading that is here
 * under the same paragraph, so a round never re-asks what an earlier round settled; a rewritten
 * paragraph is a new question, exactly as for a person's judgment.
 *
 *   node resolved.mjs add <readings.json> <result.json> <round-label>
 *       readings.json: the array the resolver was given (readings.mjs output, or the batch files concatenated)
 *       result.json:   the workflow's return value, with `checked` as [{reading, first, second, confirmed}]
 *   node resolved.mjs list                 counts per verdict
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
const FILE = new URL('./report/resolved.json', import.meta.url);
export const paraHash = (p) => createHash('sha256').update(String(p).replace(/\s+/g, ' ').trim()).digest('hex').slice(0, 12);
// What a checker actually judged, independent of where the paragraph's other sentences went: the kind, the
// span or label, the quotes shown, and for a citation the sentence it was cited in. A paragraph edited
// elsewhere keeps its settled readings; a rewritten span or a re-quoted citation is a new question.
export const valueKey = (r) => createHash('sha256').update([r.kind, r.value, ...(r.quotes || []), r.kind === 'citation' ? (r.note || '').replace(/Does the cited work support that\?.*$/, '') : ''].join('\u0001').replace(/\s+/g, ' ')).digest('hex').slice(0, 16);
export const keyOf = (section, field) => section + '|' + field;
export const load = () => (existsSync(FILE) ? JSON.parse(readFileSync(FILE, 'utf8')) : {});
const [mode, a, b, label] = process.argv.slice(2);
if (mode === 'add') {
  const readings = JSON.parse(readFileSync(a, 'utf8'));
  const result = JSON.parse(readFileSync(b, 'utf8'));
  const checked = Array.isArray(result.checked) ? result.checked : [];
  const byField = {}; for (const c of checked) byField[c.reading] = c;
  const rec = load(); let n = 0;
  for (const r of readings) {
    const c = byField[r.field]; if (!c || !c.first) continue;
    rec[keyOf(r.section, r.field)] = { para: paraHash(r.paragraph), vk: valueKey(r), verdict: c.first.verdict, second: c.second ? c.second.verdict : null, confirmed: !!c.confirmed, round: label || '', at: new Date().toISOString().slice(0, 10) };
    n++;
  }
  writeFileSync(FILE, JSON.stringify(rec, null, 1) + '\n');
  console.log(`${n} readings recorded; ${Object.keys(rec).length} in the record`);
} else if (mode === 'list') {
  const rec = load(); const c = {};
  for (const v of Object.values(rec)) { const k = v.verdict + (v.confirmed ? ' (confirmed)' : ''); c[k] = (c[k] || 0) + 1; }
  console.log(Object.keys(rec).length, 'readings resolved:', c);
}
