#!/usr/bin/env node
/**
 * Validates FEN strings embedded in ./lessons/*.html quiz data.
 * Run: npm test
 */
const fs = require("fs");
const path = require("path");
const { Chess } = require("chess.js");

const LESSONS_DIR = path.join(__dirname, "..", "lessons");

function countSquares(rank) {
  let count = 0;
  for (const c of rank) {
    if (/[pnbrqkPNBRQK]/.test(c)) count++;
    else count += parseInt(c, 10);
  }
  return count;
}

function validateFen(fen, context) {
  const errors = [];
  const placement = fen.split(" ")[0];
  const ranks = placement.split("/");

  if (ranks.length !== 8) {
    errors.push(`${context}: expected 8 ranks, got ${ranks.length}`);
    return errors;
  }

  ranks.forEach((rank, i) => {
    const n = countSquares(rank);
    if (n !== 8) {
      errors.push(`${context}: rank ${8 - i} has ${n} squares (${rank})`);
    }
  });

  try {
    const chess = new Chess(fen);
    const pieces = chess.board().flat().filter(Boolean);
    const wp = pieces.filter((p) => p.type === "p" && p.color === "w").length;
    const bp = pieces.filter((p) => p.type === "p" && p.color === "b").length;
    const wk = pieces.filter((p) => p.type === "k" && p.color === "w").length;
    const bk = pieces.filter((p) => p.type === "k" && p.color === "b").length;

    if (wp > 8) errors.push(`${context}: white has ${wp} pawns (max 8)`);
    if (bp > 8) errors.push(`${context}: black has ${bp} pawns (max 8)`);
    if (wk !== 1) errors.push(`${context}: white has ${wk} kings (expected 1)`);
    if (bk !== 1) errors.push(`${context}: black has ${bk} kings (expected 1)`);
  } catch (e) {
    errors.push(`${context}: chess.js rejected FEN — ${e.message}`);
  }

  return errors;
}

function extractFensFromLesson(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const results = [];
  const re = /fen:\s*(?:"([^"]+)"|null)/g;
  let match;
  let index = 0;
  while ((match = re.exec(content)) !== null) {
    index++;
    if (match[1]) {
      results.push({ file: filePath, index, fen: match[1] });
    }
  }
  return results;
}

let allErrors = [];
const lessonFiles = fs
  .readdirSync(LESSONS_DIR)
  .filter((f) => f.endsWith(".html"))
  .sort();

for (const file of lessonFiles) {
  const filePath = path.join(LESSONS_DIR, file);
  const fens = extractFensFromLesson(filePath);
  for (const { index, fen } of fens) {
    const ctx = `${file} quiz #${index}`;
    allErrors.push(...validateFen(fen, ctx));
  }
}

if (allErrors.length) {
  console.error("FEN validation failed:\n");
  allErrors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
}

const total = lessonFiles.reduce(
  (n, file) => n + extractFensFromLesson(path.join(LESSONS_DIR, file)).length,
  0
);
console.log(`All ${total} lesson FENs valid.`);
