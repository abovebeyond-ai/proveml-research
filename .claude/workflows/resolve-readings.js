export const meta = {
  name: 'resolve-readings',
  description: 'Vera review protocol 1.1, step 4: a checker per batch of flagged readings against the repository and the archives; a second, independent checker confirms each verdict that would change text',
  phases: [{ title: 'Check', detail: 'one checker per batch file' }, { title: 'Confirm', detail: 'a second reader per verdict that would change a sentence' }],
}

// args: { batches: [paths] }, each path a JSON array of readings as node paper/review/readings.mjs prints
// (split into files of about 17; a single args array of hundreds of readings is refused by the tool).
// Returns { measure, checked: [{reading, first, second, confirmed}], changes, overruled, cannot };
// feed `checked` to paper/review/resolved.mjs so the next round does not ask the same readings again.
const batches = (args && args.batches) || []
const REPO = '/Volumes/shanedeconinck.be/Projects/proveml-all/proveml-research'

const RUBRIC = `Rubric (Vera review protocol 1.1, step 4):
- Judge the passage AS DISPLAYED, with the archive out of reach: the reader sees only the quotes in this reading. A source that supports the sentence somewhere else is NOT support. You may open the archive only to say what the reading should quote instead.
- A verdict of "stands" with a suggestion attached is not a stand. If you have a suggestion, the verdict is "reword" or "partial" and the suggestion is the finding.
- For a work cited in several sentences with passages tagged per sentence: if none of the sentence's content words appear in the quotes shown, the tagging is suspect; say which passage of the archive carries the sentence.
- Change text only on evidence: a false statement, or a quote that does not carry the use. Do not flag style.
Tasks by kind: citation: does the quoted passage, as displayed, carry what the paper's sentence uses the cited work for? stands | partial | no. inferred: the paper's own statement with no source; is it true of what the repository holds (code, run files, tables, benchmarks, the technical report, the Lean model)? stands | reword | false | cannot-check, with the file or line that shows it. bound: a number with a note asking whether the reading or rounding is fair: stands | reword.`

const VERDICT = { type: 'object', properties: {
  field: { type: 'string' },
  verdict: { type: 'string', enum: ['stands', 'reword', 'false', 'partial', 'no', 'cannot-check'] },
  reason: { type: 'string' },
  evidence: { type: 'string' },
  suggest: { type: 'string' },
}, required: ['field', 'verdict', 'reason', 'evidence'] }
const BATCH = { type: 'object', properties: { verdicts: { type: 'array', items: VERDICT } }, required: ['verdicts'] }

const results = await pipeline(batches,
  (path) => agent(`You check readings of a research paper's review page. Read the JSON array at ${path}: each item is one reading with its section, the paragraph as the reader sees it, the field, the value judged, the kind (citation | inferred | bound), the quotes shown to the reader, their locators, and the remark on the page. Repository, read-only: ${REPO} (paper in paper/proveml-spec.tex, technical report paper/proveml-technical-report.tex, experiments/, benchmarks/, archived sources as text under paper/review/report/sources/raw/ and audit/references/raw/, the Lean model in formal/, the package in ../proveml/src). Do not modify anything.
${RUBRIC}
Return one verdict per reading, in the file's order, field copied exactly.`, { label: `check:${path.split('/').pop()}`, phase: 'Check', schema: BATCH })
    .then((b) => ({ path, verdicts: (b && b.verdicts) || [] })),
  ({ path, verdicts }) => parallel(verdicts.filter((v) => v.verdict !== 'stands' && v.verdict !== 'cannot-check').map((v) => () =>
    agent(`A first checker proposes to change a research paper on the strength of a verdict. You are the second, independent reader: try to refute it. Read the reading whose field is ${JSON.stringify(v.field)} from the JSON array at ${path} (section, paragraph, value, quotes shown, remark). Repository, read-only: ${REPO}. Do not modify anything.
First checker's verdict: ${JSON.stringify(v)}
${RUBRIC}
Confirm only if you can reproduce the evidence yourself and the change is warranted under the rubric; otherwise return verdict "stands" with your reason. Return the verdict object only, field copied exactly.`, { label: `confirm:${v.field.slice(0, 40)}`, phase: 'Confirm', schema: VERDICT })
      .then((c) => ({ reading: v.field, first: v, second: c, confirmed: !!(c && c.verdict !== 'stands') }))))
    .then((confirms) => ({ path, verdicts, confirms: confirms.filter(Boolean) })))

const all = results.filter(Boolean)
const byField = {}
for (const b of all) for (const c of b.confirms) byField[c.reading] = c
const checked = all.flatMap((b) => b.verdicts.map((v) => byField[v.field] || { reading: v.field, first: v, second: null, confirmed: false }))
const changes = checked.filter((c) => c.confirmed)
const overruled = checked.filter((c) => c.second && !c.confirmed)
const cannot = checked.filter((c) => c.first.verdict === 'cannot-check')
log(`${checked.length} readings checked: ${changes.length} confirmed changes, ${overruled.length} proposals overruled by the second reader, ${cannot.length} cannot-check`)
return { measure: changes.length, checked, changes: changes.map((c) => c.reading), overruled: overruled.map((c) => c.reading), cannot: cannot.map((c) => c.reading) }