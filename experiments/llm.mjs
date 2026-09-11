/**
 * One LLM call, three providers. The harness scripts are synchronous by
 * design (a run is a loop of calls that must finish in order), so every
 * provider is a shell command: `ollama run`, `claude -p`, or curl against an
 * OpenAI-compatible endpoint.
 *
 *   claude    the Claude Code CLI with the user's own login; --model takes an
 *             Anthropic model id or alias (claude-opus-5, claude-sonnet-5, haiku)
 *   ollama    a local model
 *   together  Together AI (https://api.together.ai/v1), any serverless model
 *             string from their catalog. Key from TOGETHER_API_KEY or
 *             ~/.config/proveml/together-key. Never passed on the command line.
 *
 * The prompt is sent as a single user message on every provider, because that
 * is what the CLI and ollama receive on stdin: the system text is part of it.
 */

import { execSync } from 'child_process';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';

export function togetherKey() {
    if (process.env.TOGETHER_API_KEY) return process.env.TOGETHER_API_KEY;
    const file = join(homedir(), '.config', 'proveml', 'together-key');
    if (existsSync(file)) return readFileSync(file, 'utf8').trim();
    throw new Error('No Together key: set TOGETHER_API_KEY or write it to ~/.config/proveml/together-key');
}

/**
 * @param {'claude'|'ollama'|'together'} provider
 * @param {string} model
 * @param {string} prompt
 * @param {{ timeoutMs: number, tmpFile: string }} opts
 * @returns {string|null}  the response text, or null when the call failed
 *                         (the caller decides what a failed call means)
 */
export function callLLM(provider, model, prompt, { timeoutMs, tmpFile }) {
    writeFileSync(tmpFile, prompt);
    const exec = (cmd, extraEnv = {}) => execSync(cmd, {
        encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024, timeout: timeoutMs,
        env: { ...process.env, ...extraEnv },
    });
    if (provider === 'ollama') {
        return exec(`ollama run ${model} --nowordwrap < "${tmpFile}" 2>/dev/null`).trim();
    }
    if (provider === 'together') {
        if (!model) throw new Error('--model is required for provider together');
        const body = `${tmpFile}.json`;
        // Reasoning models spend output tokens thinking before they answer;
        // with the endpoint's default budget the thinking alone can use it up
        // and the answer comes back empty. Give the answer room.
        writeFileSync(body, JSON.stringify({ model, max_tokens: 16384, messages: [{ role: 'user', content: prompt }] }));
        // The key goes in through the environment, not the argument list,
        // so it never shows up in `ps` or a shell history.
        const raw = exec(
            `curl -sS --fail-with-body -m ${Math.ceil(timeoutMs / 1000)} https://api.together.ai/v1/chat/completions`
            + ` -H "Authorization: Bearer $TOGETHER_API_KEY" -H "Content-Type: application/json" -d @"${body}"`,
            { TOGETHER_API_KEY: togetherKey() }
        );
        const json = JSON.parse(raw);
        if (json.error) throw new Error(`Together: ${json.error.message || JSON.stringify(json.error)}`);
        const choice = json.choices?.[0];
        const text = choice?.message?.content;
        if (typeof text !== 'string' || text.trim() === '') {
            const reasoning = (choice?.message?.reasoning_content || '').length;
            throw new Error(`Together: empty answer (finish_reason=${choice?.finish_reason}, reasoning_content=${reasoning} chars, completion_tokens=${json.usage?.completion_tokens})`);
        }
        return text.trim();
    }
    // Claude Code CLI
    return exec(`cat "${tmpFile}" | claude -p${model ? ` --model ${model}` : ''}`).trim();
}

/**
 * The same call, with the provider's receipt kept beside the text: the ids the provider
 * echoes (a session and message id on the CLI, the completion id on Together), the model
 * string it answered as, the token usage and the clock. A run file that carries these is
 * its own evidence that the call happened, which a text on its own is not; and they can
 * only be taken at call time. The older harnesses keep callLLM; new studies use this.
 *
 * @returns {{ text: string, receipt: object }}
 */
export function callLLMWithReceipt(provider, model, prompt, { timeoutMs, tmpFile }) {
    writeFileSync(tmpFile, prompt);
    const at = new Date().toISOString();
    const exec = (cmd, extraEnv = {}) => execSync(cmd, {
        encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024, timeout: timeoutMs,
        env: { ...process.env, ...extraEnv },
    });
    if (provider === 'together') {
        if (!model) throw new Error('--model is required for provider together');
        const body = `${tmpFile}.json`;
        writeFileSync(body, JSON.stringify({ model, max_tokens: 16384, messages: [{ role: 'user', content: prompt }] }));
        const raw = exec(
            `curl -sS --fail-with-body -m ${Math.ceil(timeoutMs / 1000)} https://api.together.ai/v1/chat/completions`
            + ` -H "Authorization: Bearer $TOGETHER_API_KEY" -H "Content-Type: application/json" -d @"${body}"`,
            { TOGETHER_API_KEY: togetherKey() }
        );
        const json = JSON.parse(raw);
        if (json.error) throw new Error(`Together: ${json.error.message || JSON.stringify(json.error)}`);
        const choice = json.choices?.[0];
        const text = choice?.message?.content;
        if (typeof text !== 'string' || text.trim() === '') throw new Error(`Together: empty answer (finish_reason=${choice?.finish_reason})`);
        return { text: text.trim(), receipt: { provider, at, id: json.id, model: json.model, created: json.created, finishReason: choice?.finish_reason, usage: json.usage } };
    }
    if (provider === 'ollama') {
        return { text: exec(`ollama run ${model} --nowordwrap < "${tmpFile}" 2>/dev/null`).trim(), receipt: { provider, at, model } };
    }
    const raw = exec(`cat "${tmpFile}" | claude -p${model ? ` --model ${model}` : ''} --output-format json`);
    const json = JSON.parse(raw);
    if (json.subtype && json.subtype !== 'success') throw new Error(`claude: ${json.subtype}`);
    const answered = json.modelUsage ? Object.keys(json.modelUsage).filter((m) => !/haiku/.test(m)) : [];
    return { text: String(json.result || '').trim(), receipt: { provider, at, sessionId: json.session_id, messageId: json.uuid, model: answered[0] || model, durationApiMs: json.duration_api_ms, usage: json.usage && { input: json.usage.input_tokens, cacheRead: json.usage.cache_read_input_tokens, cacheCreation: json.usage.cache_creation_input_tokens, output: json.usage.output_tokens }, costUsd: json.total_cost_usd } };
}

