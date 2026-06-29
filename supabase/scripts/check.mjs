import { existsSync } from "node:fs";

const requiredPaths = ["config.toml", "migrations", "functions", "seed"];
const missing = requiredPaths.filter((path) => !existsSync(new URL(`../${path}`, import.meta.url)));

if (missing.length > 0) {
  console.error(`Missing Supabase paths: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("Supabase workspace scaffold is present.");
