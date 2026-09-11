export const meta = {
  name: 'resolve-readings',
  description: 'Vera review protocol 1.1, step 4: one checker per flagged reading against the repository and the archives; a second, independent checker confirms any verdict that would change text',
  phases: [{ title: 'Check', detail: 'one checker per reading' }, { title: 'Confirm', detail: 'a second reader on anything that would change a sentence' }],
}

// args: the array node paper/review/readings.mjs prints (optionally --only-changed)
const readings = Array.isArray(args) ? args : []
const REPO = '/Volumes/shanedeconinck.be/Projects/proveml-all/proveml-research'

// The rubric, verbatim from vera/docs/review-protocol.md 1.1, step 4. Change it there first.
const RUBRIC = `Rubric (Vera review protocol 1.1, step 4):
- Judge the passage AS DISPLAYED, with the archive out of reach: the reader sees only the quotes in this reading. A source that supports the sentence somewhere else is NOT support. You may open the archive only to say what the reading should quote instead.
- A verdict of "stands" with a suggestion attached is not a stand. If you have a suggestion, the verdict is "reword" or "partial" and the suggestion is the finding.
- For a work cited in several sentences with passages tagged per sentence: if none of the sentence's content words appear in the quotes shown, the tagging is suspect; say which passage of the archive carries the sentence.
- Change text only on evidence: a false statement, or a quote that does not carry the use. Do not flag style.`

const VERDICT = { type: 'object', properties: {
  field: { type: 'string' },
  verdict: { type: 'string', enum: ['stands', 'reword', 'false', 'partial', 'no', 'cannot-check'] },
  reason: { type: 'string' },
  evidence: { type: 'string', description: 'the file, line, or archived passage the verdict rests on' },
  suggest: { type: 'string', description: 'the sentence, or the passage to quote, that would make it stand' },
}, required: ['field', 'verdict', 'reason', 'evidence'] }

const describe = (r) => `Reading ${r.field} (${r.kind}) in section ${r.section}.
Paragraph as the reader sees it: ${r.paragraph}
Value judged: ${r.value}
Quotes shown to the reader (${r.quotes.length}): ${r.quotes.map((q, i) => `[${i + 1}] "${q}"`).join(' ') || 'none'}
Locators: ${r.locators.join(' | ') || 'none'}
Remark on the page: ${r.note || 'none'}`

const kindTask = (r) => r.kind === 'citation'
  ? 'Does the quoted passage, as displayed, carry what the paper\'s sentence uses the cited work for? stands | partial | no.'
  : r.kind === 'inferred'
    ? 'This is the paper\'s own statement with no source. Is it true of what the repository holds (code, run files, tables, benchmarks, the technical report, the Lean model)? stands | reword | false | cannot-check, with the file or line that shows it.'
    : 'A number with a note asking whether the reading or rounding is fair against its source. stands | reword.'

const results = await pipeline(readings,
  (r) => agent(`You check one reading of a research paper's review page. Repository, read-only: ${REPO} (paper in paper/proveml-spec.tex, technical report paper/proveml-technical-report.tex, experiments/, benchmarks/, archived sources as text under paper/review/report/sources/raw/ and audit/references/raw/, the Lean model in formal/, the package in ../proveml/src). Do not modify anything.
${describe(r)}
Task: ${kindTask(r)}
${RUBRIC}
Return the verdict object only.`, { label: `check:${r.field.slice(0, 40)}`, phase: 'Check', schema: VERDICT }),
  (v, r) => (v && v.verdict !== 'stands' && v.verdict !== 'cannot-check')
    ? agent(`A first checker proposes to change a research paper on the strength of this verdict. You are the second, independent reader: try to refute it. Repository, read-only: ${REPO}. Do not modify anything.
${describe(r)}
First checker's verdict: ${JSON.stringify(v)}
${RUBRIC}
Confirm only if you can reproduce the evidence yourself and the change is warranted under the rubric; otherwise return verdict "stands" with your reason. Return the verdict object only.`, { label: `confirm:${r.field.slice(0, 40)}`, phase: 'Confirm', schema: VERDICT })
      .then((c) => ({ reading: r.field, section: r.section, first: v, second: c, confirmed: !!(c && c.verdict !== 'stands') }))
    : { reading: r.field, section: r.section, first: v, second: null, confirmed: false })

const changes = results.filter(Boolean).filter((x) => x.confirmed)
const stands = results.filter(Boolean).filter((x) => !x.confirmed)
log(`${readings.length} readings: ${stands.length} stand, ${changes.length} confirmed changes`)
return { measure: changes.length, changes, standsWithNote: stands.filter((x) => x.first && x.first.verdict !== 'stands').map((x) => ({ reading: x.reading, first: x.first, second: x.second })) }
