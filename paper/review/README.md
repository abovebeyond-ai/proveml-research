# The Vera review of paper 1

This folder builds the review page of `paper/proveml-spec.tex`: the paper read end to
end, every number bound to the file that produced it, every citation a reading against an
archived copy, the model's proposals on the prose as readings of their own, and a merkle
root over the lot that is signed and anchored. It is the first product use of Vera, built
on 2026-09-02 and 03.

## The chain

```
node tex-adapter.mjs ../proveml-spec.tex > report/paper1-blocks.json  # the paper as blocks
node regenerate.mjs                 # rerun the scripts the paper's numbers come from; record what ran
node build.mjs                      # bind, verify, render report/review-page.html and the receipts
node artifact-gate.mjs report/review-page.html          # arm the hand-back for the artifact viewer
node stream-infer.mjs report/review-page-artifact.html  # inject the in-page model pass
```

## The cloud loop (since 2026-09-09)

The review lives at https://vera.abovebeyond.ai/r/paper1, served by the Vera app
(github.com/abovebeyond-ai/vera): the judgements are saved there on every click, with the
name of who judged, and "hand back to Vera" closes a round. One round is:

```
npm run pull       # the judgements as saved, to report/review.json
npm run infer      # build; the model pass on paragraphs without a record (claude -p); build again
npm run gate       # arm the page for the cloud: report/review-page-vera.html
npm run push       # it is live; judgements whose block did not change keep their key
```

`infer-cli.mjs` is the build-time form of the artifact's in-page pass (there is no model in
the browser when Vera serves the page): same prompt, same rules, a span counts only when it
is verbatim in the paragraph, a clean paragraph is recorded so it is not asked again until
its text changes. The artifact chain is kept as `npm run build:artifact`.

After a hand-back put the judgements in `report/review.json` (that is what `pull` does) and
the model pass state in `report/infer-state.json`, then build again: the proposals become
marks, judgements are rekeyed to the block hashes they judged.

Then, going out:

```
node sign-review.mjs        # sign the review root with the did:web key; verify against the DID document
node anchor-hedera.mjs      # Hedera Consensus Service, read back from the mirror node
node anchor-rekor.mjs       # Sigstore Rekor, with the inclusion proof the log returns
node anchor-vana.mjs        # Vana L1 DataRegistry, file record plus proof, read back
node sign-review.mjs --verify && node anchor-*.mjs --verify
```

Every anchor script records only what the log returned, never what was merely submitted.

## The loop, and why it stops (2026-09-11)

The round above is one turn of a loop with six steps, and the day it first ran end to end
taught what each step is for and where it goes wrong.

1. **Write.** A paragraph, by a person or a model.
2. **Bind.** Every number to the file that produced it, every citation to a verbatim passage
   in an archived copy. Mechanical: `regenerate.mjs`, `audit-sources.mjs`, `build.mjs`. A
   number or quote the build cannot find refuses the build; nothing is pushed past a refusal
   (`round.sh` stops there).
3. **Flag.** The model pass (`infer`) marks what has no source: the paper's own statements,
   with the question it would ask a reviewer. A paragraph it found clean is not asked again
   until its text changes.
4. **Resolve.** For each flag: find a source, check the statement against the repository, or
   propose the sentence that would be true. On 2026-09-11 this was six agents over 229
   readings (60 citations, 127 own statements, 42 roundings): one false statement, twelve
   rewordings, ten citations whose quote did not carry the sentence. The rubric, learned the
   hard way:
   - Judge the passage **as displayed**, with the archive out of reach. The reader sees one
     quote; a source that supports the sentence somewhere else is not support. (The first
     sweep marked "It shall apply from 2 August 2026" as supporting "regulation now reaches
     generated text" because the Regulation does, elsewhere. The reader caught it.)
   - A verdict of "stands" with a suggestion attached is not a stand. The suggestion is the
     finding; act on it.
   - Cheap signal for a work cited in several sentences with quotes tagged per sentence
     (`paperUse` in `related-work-claims.json`): when none of the sentence's content words
     appear in the quotes shown for it, the tagging is suspect.
   - Change text only on a verdict with evidence: false, or a quote that does not carry the
     use. Leave "stands" alone.
5. **Read.** Awkward wording, an ambiguous "may not", a block too dense. A person, once, on
   text the factual loop has settled; a critic pass may draft, naming the concrete fault or
   staying silent.
6. **Judge.** Yes or no, by the author, in Vera. Judgements travel across rebuilds by
   paragraph and field, so an edit elsewhere in a paragraph keeps them.

**Convergence.** The factual loop (2, 3, 4, 6) converges: the set of statements is finite,
and each pass binds a statement, corrects it or leaves it judged; a corrected statement
re-enters closer to the sources it was checked against. Measure per round: flagged readings
without an answer, plus verdicts of false or partial. On 2026-09-11 it went 229, 14, 0, and
the next pass recorded nothing. The style loop (5) does not converge on its own: a model
asked whether a sentence is awkward always finds one, and every rewrite is new text whose
readings are gone and whose facts can slip (a "local model" that was an API model, a
population pinned to the wrong study, all came from rewrites). So step 5 runs once, at the
end, and the factual loop runs one more time over what it touched. Taste beyond that is the
author's, in the editor, not in the loop.

**What automates next.** Step 4, as the agent Vera's look-further already reaches for: one
agent per flagged reading, with the repository and the archives as its world, returning
evidence or an edit, wired into `infer` so a round prints its measure and stops at zero.

## Sources on the way in

- `audit-sources.mjs` reads `../../audit`: the archived copies of cited works and the
  related-work claims with their verbatim quotes.
- `provenance.mjs` fetches the live pages over TLS (certificate recorded), asks the Wayback
  Machine for a witness, and timestamps the root with an RFC 3161 authority. Each source is
  labelled with the best rung it earned, never a higher one.
- `pdpp-server.mjs` and `source-pdpp.mjs`: the study's (synthetic) pupil dataset served as a
  PDPP 0.1 source and fetched as a client under a purpose-bound grant, names withheld by the
  field projection. Our own implementation of Core sections 4, 5, 7 and 8, not the lab's.
- `pdpp-review-server.mjs`: the review itself served as a PDPP source, streams `judgements`
  and `signoffs`, so an editor reads the approvals on the reviewer's terms.
- `house-css.mjs` reads the paper tokens, the night set and the five ProveML states out of
  the site's `globals.css` at build time (override with `HOUSE_CSS`); the page says which
  file, by sha256, it was styled from.

## What is here and what is not

`report/` holds the records: the roots, the anchors, the sign-offs, the run records, the
fetched sources and their provenance, the judgements handed back and the model pass state.
The rendered page, the manifests and the inclusion proofs are not committed; the build makes
them again from these. Keys live outside the repository, in `~/.config/proveml/`:
`abovebeyond-signing.jwk`, `hedera-operator.json`, `rekor-key.pem`, `vana-key.json`.

Known not to reproduce byte for byte: `deployment-numbers.mjs` prints timings, and a rerun
differs from the snapshot; the run record says so and the page shows it.

## Dependencies

`proveml` from the repository root (the engine; needs the version with the provenance view,
proveml pull request #19 or later, `npm link ../proveml` until it is published), plus
`@hashgraph/sdk` and `ethers` from this folder's `package.json`. `sign-review.mjs` uses the
credential adapter in the sibling `proveml-demos` checkout (`PROVEML_DEMOS` to point
elsewhere).
