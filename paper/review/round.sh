#!/bin/bash
# One review round, stopping at the first failure: pull the judgements, rebuild with the
# model pass, gate, push. Prints the measure of the round: what the pass recorded and
# what verified. A build that refuses (a quote not in its archive, a mark not found)
# stops the round before anything is pushed.
set -euo pipefail
cd "$(dirname "$0")"
npm run pull 2>&1 | grep '^pulled' | cut -c1-80
npm run infer > /tmp/proveml-round.log 2>&1 || { grep -v 'leaf fallback' /tmp/proveml-round.log | tail -5; exit 1; }
grep 'recorded\|^verified' /tmp/proveml-round.log | tail -2
npm run gate 2>&1 | tail -1
npm run push 2>&1 | grep 'pushed paper1'
