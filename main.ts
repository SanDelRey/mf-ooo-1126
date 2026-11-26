// entry.txt: one painfully honest, still polite out-of-office auto-reply, <=200 chars.
import { mkdirSync, writeFileSync } from "node:fs";

// Honest about the inbox without blaming anyone; the turn is "the work is
// covered, the inbox is not," which a manager can forward without wincing.
const REPLY =
  "I'm away until Monday; the work is covered, the inbox is not, and I'll " +
  "reply in the order things actually caught fire.";

// 118 characters; the gate allows 1 to 200 of UTF-8 text.
const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", REPLY + "\n", "utf8");
