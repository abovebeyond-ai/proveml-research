#!/usr/bin/env node
/**
 * The readings on the built review page that ask for a judgment, as JSON for the resolve
 * step (protocol 1.1, step 4). Literal readings, a number quoted verbatim from its source,
 * are left out: the machine settled those. What comes out, per reading: the section, the
 * paragraph as the reader sees it, the field, the value judged, the kind (citation |
 * inferred | bound), the quotes shown, their locators, and the remark.
 *
 * Usage: node readings.mjs [--only-changed] > readings.json
 *   --only-changed  keep readings in paragraphs without a judgment in report/review.json
 *                   (a resolved paragraph is not asked again until its text changes)
 */
import { readFileSync } from 'node:fs';

// hover tips carry the quote's neighbourhood and may contain a raw '>', so they come off first
const page = readFileSync(new URL('./report/review-page.html', import.meta.url), 'utf8').replace(/\s(?:title|data-tip)="[^"]*"/g, '');
const onlyChanged = process.argv.includes('--only-changed');
let judged = {};
try { judged = JSON.parse(readFileSync(new URL('./report/review.json', import.meta.url), 'utf8')).judgements || {}; } catch {}

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
const text = (h) => String(h).replace(/<[^>]+>/g, ' ')
    .replace(/&#(\d+);/g, (m, n) => String.fromCodePoint(+n))
    .replace(/&([a-z]+);/gi, (m, n) => ENT[n.toLowerCase()] ?? m)
    .replace(/\s+/g, ' ').trim();
const first = (re, h) => { const m = re.exec(h); return m ? text(m[1]) : ''; };

const out = [];
for (const m of page.matchAll(/<section class="pair" id="([^"]+)"(.*?)<\/section>/gs)) {
    const [, sid, body] = m;
    const cols = /<div class="cols">(.*)/s.exec(body)?.[1] || '';
    const left = /<div class="col">(.*?)<div class="col">/s.exec(cols);
    const paragraph = (left ? text(left[1]) : '').replace(/^the paper says\s*/, '').slice(0, 1500);
    for (const ev of body.matchAll(/<div class="evidence" data-evidence-field="([^"]+)"([^>]*)>(.*?)(?=<div class="evidence"|<\/section>)/gs)) {
        const [, field, attrs, h] = ev;
        if (field.startsWith('paperref:')) continue;
        if (/data-literal/.test(attrs)) continue;
        const rid = /data-review="([^"]+)"/.exec(h)?.[1];
        if (onlyChanged && rid && judged[rid]) continue;
        const kind = field.startsWith('citation:') ? 'citation' : (/\.inf\d+$/.test(field) || field.startsWith('figure:')) ? 'inferred' : 'bound';
        out.push({
            section: sid, review: rid, paragraph, field, kind,
            value: first(/<p class="ev-head">(.*?)<\/p>/s, h),
            basis: first(/<p class="basis[^"]*">(.*?)<\/p>/s, h) || 'quote',
            quotes: [...h.matchAll(/<p class="quote"[^>]*>(.*?)<\/p>/gs)].map((q) => text(q[1])).slice(0, 4),
            locators: [...h.matchAll(/<p class="loc">(.*?)<\/p>/gs)].map((q) => text(q[1])).slice(0, 4),
            note: [first(/<p class="note">(.*?)<\/p>/s, h), first(/<p class="note-q">(.*?)<\/p>/s, h)].filter(Boolean).join(' ').slice(0, 600),
        });
    }
}
// bound readings without a remark are the machine's; only those with a question go out
const need = out.filter((r) => r.kind !== 'bound' || r.note);
process.stdout.write(JSON.stringify(need, null, 1) + '\n');
console.error(`${need.length} readings need a judgment (${['citation', 'inferred', 'bound'].map((k) => k + ' ' + need.filter((r) => r.kind === k).length).join(', ')})`);
