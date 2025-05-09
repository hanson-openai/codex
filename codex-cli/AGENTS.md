# codex-cli

This is a TypeScript repository for the Codex CLI, a lightweight coding agent that runs in your terminal.

## Handling bug reports

- When dealing with bug reports, first write a small Node script to reproduce the issue, and then run it with `tsx <script>` so it can import TypeScript dependencies. (Don't use `node`, it won't work.)
  - Print debugging may be helpful to debug issues.
  - Then, convert it to a unit test and run it with `pnpm test {TEST_FILE}`.
  - Don't try to run `pnpm test` without specifying a set of files, as it is slow.
