import { getGitDiff } from "../src/utils/get-diff";
import { execFileSync } from "node:child_process";
import fs from "fs";
import os from "os";
import path from "path";
import { test, expect } from "vitest";

test("getGitDiff handles filenames with special characters", () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "git-diff-test-"));
  const prevCwd = process.cwd();
  try {
    process.chdir(tmpDir);
    execFileSync("git", ["init"]);
    fs.writeFileSync("a$b.txt", "hello world");
    const { diff } = getGitDiff();
    expect(diff).toContain("a$b.txt");
  } finally {
    process.chdir(prevCwd);
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
});
