#!/bin/bash
# One review round under the Vera review protocol (vera/docs/review-protocol.md, 1.0):
# pull the judgements, rebuild with the model pass, gate, push; append the round's measure
# to report/rounds.txt. A build that refuses stops the round before anything is pushed.
set -euo pipefail
cd "$(dirname "$0")"
npm run pull 2>&1 | grep '^pulled' | cut -c1-80
npm run infer > /tmp/proveml-round.log 2>&1 || { grep -v 'leaf fallback' /tmp/proveml-round.log | tail -5; exit 1; }
recorded=$(grep -o '[0-9]* paragraph(s) recorded' /tmp/proveml-round.log | tail -1 | cut -d' ' -f1)
verified=$(grep '^verified' /tmp/proveml-round.log | tail -1)
# the measure: readings the pass proposed and nobody has answered, plus readings judged no
unanswered=$(node -e "
const fs=require('fs'); const h=fs.readFileSync('report/review-page.html','utf8'); const rv=JSON.parse(fs.readFileSync('report/review.json','utf8')).judgements||{};
const ids=[...h.matchAll(/data-review=\"([^\"]+)\"[^>]*data-src=\"[^\"]*\"[^>]*data-field=\"para:[^\"]*\"/g)].map(m=>m[1]);
const open=ids.filter(id=>!rv[id]).length; const no=Object.values(rv).filter(j=>j&&j.verdict==='flag').length; console.log(open+'+'+no)")
npm run gate 2>&1 | tail -1
push=$(npm run push 2>&1 | grep -o 'push [0-9]*' | tail -1)
line="$(date -u +%Y-%m-%dT%H:%M:%SZ) $push | pass recorded $recorded | $verified | measure (own statements unanswered + judged no) $unanswered"
echo "$line" | tee -a report/rounds.txt
