import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I missed the deadline the same way I miss every red flag: confidently, and right on schedule.";

// Guard the gate before writing: one line, 1 to 200 characters, no padding.
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`entry violates the gate: ${line.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
