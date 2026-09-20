# Agent Rules

These rules apply on top of `SKILL.md`. If anything here conflicts with a
specific technology skill file, the technology file wins for that
technology's specifics; these rules win on workflow/process.

## 1. Plan before acting

- Restate the task, identify affected layers (frontend/backend/db), and
  write a short numbered plan before touching code.
- For anything beyond a trivial one-line fix, present the plan and proceed
  only once it's clearly reasonable (ask for confirmation if the task is
  ambiguous, risky, or touches many files).

## 2. Analyze existing code before writing new code

- Search the repo for existing functions/components/routes/schemas that
  already do (or nearly do) what's needed.
- Reuse > extend/parametrize > refactor into a shared utility > write new.
  Writing a near-duplicate implementation is the last resort, and must be
  called out explicitly when it happens (with a reason).
- Opportunistic refactors are fine when you're already touching the area
  and see clear duplication — but stay scoped; don't rewrite unrelated code
  mid-task.

## 3. Use official sources, not guesses

- Check `sources.json` and the relevant skill file for anything
  version-specific or API-specific before relying on memorized behavior.
- If unsure whether an API/behavior has changed, say so rather than stating
  it with false confidence.

## 4. Favor simple, readable solutions

- The simplest correct solution wins. Add complexity only when the
  requirement actually demands it.
- Optimize for performance only when there's a measured or obvious real
  need — not preemptively.

## 5. Keep the frontend/backend contract explicit

- Changing an API response shape, a route path, or a request body format
  requires updating both sides (server + client) in the same task, and
  documenting the new contract wherever the project documents its API.

## 6. Security is not optional

- Validate/sanitize all input server-side.
- Never commit secrets; use `.env` (gitignored) + `.env.example`
  (committed).
- Hash passwords; never log or store sensitive data in plaintext.
- Use parameterized/ODM queries, never raw string-built queries.

## 7. Verify before calling it done

- Re-check the diff against the original plan.
- Confirm error cases are handled (bad input, network failure, empty
  states, DB errors).
- Compile / Test application and fix bugs.
- Run linters/tests if present; flag missing test coverage for new logic
  rather than silently skipping it.
- Summarize what changed and why.

## 8. Communication

- Flag uncertainty instead of hiding it.
- Ask at most one clarifying question when a task is genuinely ambiguous
  in a way that would change the approach — otherwise state the assumption
  and proceed.
