// Prebuild: render the offers from the agency canon, never from copy typed into the site.
// Source: github.com/Abilityai/keymaker-canon -> domains/pricing/pricing.md (the only price list).
// On any failure the committed content/offers.json stays, and the build says so.
import { writeFileSync, readFileSync } from "node:fs";

const SRC = process.env.KEYMAKER_CANON_PRICING_URL ||
  "https://raw.githubusercontent.com/Abilityai/keymaker-canon/main/domains/pricing/pricing.md";
const OUT = new URL("../content/offers.json", import.meta.url);

try {
  const res = await fetch(SRC);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const md = await res.text();
  const updated = (md.match(/^updated:\s*(\S+)/m) || [])[1] || null;
  const rows = md.split("\n").filter((l) => l.startsWith("|") && !/^\|\s*-/.test(l));
  const [header, ...body] = rows;
  if (!header || !/Offer/i.test(header)) throw new Error("price table not found");
  const offers = body.map((l) => {
    const [name, what, price, notes] = l.split("|").slice(1, -1).map((c) => c.trim());
    return { name, what, price, notes };
  });
  const rules = (md.match(/^Rules:([\s\S]*?)\n\n/m) || [])[1]?.replace(/\s+/g, " ").trim() || null;
  writeFileSync(OUT, JSON.stringify({ source: SRC, canon_updated: updated, synced_at: new Date().toISOString(), offers, rules }, null, 2) + "\n");
  console.log(`canon: ${offers.length} offers from pricing.md (updated ${updated})`);
} catch (e) {
  const prev = JSON.parse(readFileSync(OUT, "utf8"));
  console.warn(`canon: could not refresh offers (${e.message}); keeping the committed copy from ${prev.synced_at}`);
}
