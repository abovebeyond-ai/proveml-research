#!/bin/bash
# Judgment study, September 2026: three frontier models, two prompt conditions,
# three runs each, twenty questions that invite a qualitative judgment, one
# correction pass. Resume-safe: an existing output file is skipped.
set -uo pipefail
cd "$(dirname "$0")"
MODELS=("claude:claude-sonnet-5" "together:deepseek-ai/DeepSeek-V4-Pro-0813" "claude:claude-opus-5")
echo "=== judgment runs started: $(date) ==="
for run in 1 2 3; do
  for pm in "${MODELS[@]}"; do
    provider="${pm%%:*}"; model="${pm#*:}"; slug="${model//\//_}"
    for cond in registry none; do
      out="judgment-results-$cond-$slug-run$run.json"
      if [ -f "$out" ]; then echo "--- $cond $model run $run: exists, skip"; else
        echo "--- $cond $model run $run: $(date +%H:%M)"
        caffeinate -i node test-judgment.js --provider "$provider" --model "$model" --condition "$cond" --max-loops 1 --run "$run"
      fi
    done
  done
done
echo "=== judgment runs finished: $(date) ==="
