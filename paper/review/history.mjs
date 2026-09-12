#!/usr/bin/env node
// What the repository's history records about the study data: the commits, by date and subject, that
// introduced the artefacts, re-measured the educational results on the generated dataset, and kept the
// withdrawn dataset's runs out of git. A source for the paper's account of its own correction.
import { execSync } from 'node:child_process';
const REPO = new URL('../../', import.meta.url).pathname;
const git = (a) => execSync('git ' + a, { cwd: REPO, encoding: 'utf8' }).trim();
for (const sha of ['cbed76e', '94e91f6', '6e06a1e']) console.log(git(`log -1 --format="%ad %h %s" --date=short ${sha}`));
console.log('gitignore: ' + git('show HEAD:.gitignore').split('\n').filter((l) => /withdrawn|archive\//.test(l)).join(' / '));
