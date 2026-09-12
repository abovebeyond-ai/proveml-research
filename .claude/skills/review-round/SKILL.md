---
name: review-round
description: "Run one round of the Vera review protocol over the ProveML paper: pull, bind, flag, resolve every flag before editing anything, edit once with evidence, rebuild, push once, log the measure. Use when asked to run a review round, resolve the remarks, or bring the paper's review to zero."
---

# A review round (Vera review protocol 1.2)

The protocol is the contract: `~/Projects/vera/docs/review-protocol.md`. Read it before the
first round of a session. This skill is the how; the scripts refuse what the protocol forbids.

## The round, in order

1. **Pull, bind, flag, push**: `paper/review/round.sh`. It pulls the judgements, rebuilds with
   the model pass, gates, pushes, and appends the round's measure to `report/rounds.txt`. A
   build that refuses (a quote not in its archive, a mark not found) stops before the push;
   fix the cause, never work around it.
2. **List what asks for a judgment**: `node paper/review/readings.mjs --only-changed > /tmp/readings.json`.
   Literal readings are left out; the machine settled those, and so are readings a checker
   already resolved under an unchanged paragraph (`report/resolved.json`). Over about 60
   readings, split the list into batch files of about 17 and pass their paths as
   `args: { batches: [...] }`; a single `args` array that large is refused.
3. **Resolve every flag before touching any text**: launch the workflow in
   `.claude/workflows/resolve-readings.js` with the JSON array as `args`. The Workflow tool
   reads a saved script only from the session's working directory, so either run the session
   in this repository or pass the file's content inline as `script`; the content is the same. One checker per reading; a second,
   independent checker confirms any verdict that would change a sentence. The rubric lives
   in the workflow, verbatim from the protocol; do not paraphrase it into a prompt of your own.
4. **Record the verdicts** so the next round does not ask them again:
   `node paper/review/resolved.mjs add <readings.json> <result.json> round<N>` (the result
   is the workflow's return value, with `checked` as an array).
5. **Edit once.** Apply only the confirmed changes. For each edit keep the evidence beside it
   (the file, line or archived passage). Sourcing beats rewording: when a passage exists that
   carries the sentence, add it to `audit/references/related-work-claims.json` (verbatim, from
   the archived copy, tagged with `paperUse` to the sentence) rather than softening the
   sentence. When a sentence is false, write the true one. Leave "stands" alone, whatever a
   checker's note says about style.
6. **Rebuild and push once**: `round.sh` again. Bound marks must not go down; if the build
   reports fewer readings than before, an edit lost a mark: find it.
7. **Stop** when the pass records nothing and the workflow returns `measure: 0`. Then, and
   only then, the person reads for meaning (protocol step 8) and judges (step 9). Do not run
   a style pass on your own initiative.

## Measuring the loop

When asked whether the loop is tested, or after a change to the build, the flag pass or the
rubric: `paper/review/plant/run.mjs` (`prepare`, `classify`, `bound`, `all`, then the resolver
workflow over `plant/out/readings.json` with the paper's own source out of bounds, then
`score`). Class every confirmed change on unplanted text by hand in `plant/adjudication.json`
before reading the score. Log what it finds about the loop as `caught by planted run`. The
method is the protocol's "Measuring the loop" section; the README of `paper/review` has the
first run's numbers.

## Log who caught it

Every fix gets one line in `report/rounds.txt`, after the round's measure line:
`caught by build | flag pass | resolver | reader: <field>: <what was wrong>`. What the reader
caught and the loop did not is the loop's backlog.

## What you never do

- Push past a refused build.
- Edit a sentence on a single checker's word.
- Run `sign`, `anchor` or `pull`/`push` for another review than paper1.
- Commit `report/review.json`, `roots.json`, `sources/index.json`, `approvals.json` or
  `manifests-enc/`: those are the reviewer's.
