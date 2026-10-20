import { NextRequest, NextResponse } from "next/server";
import { fileIssue, rateLimited, validate, wakeOrchestrator } from "@/lib/intake";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const ip = (req.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim();
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Bad request" }, { status: 400 }); }

  // Bots: the hidden field is filled, or the form was sent faster than a person can type. Answer like a success.
  if (body.website || Number(body.elapsed_ms) < 2500) return NextResponse.json({ ref: "KM-0" });

  if (rateLimited(`ip:${ip}`, 5, 10 * 60_000) || rateLimited("all", 120, 10 * 60_000)) {
    return NextResponse.json({ error: "Too many requests from here - please try again in a few minutes." }, { status: 429 });
  }

  const v = validate(body);
  if (!v.ok) return NextResponse.json({ error: v.error }, { status: 422 });

  let issue: number;
  try { issue = await fileIssue(v.req, ip); }
  catch (e) {
    console.error("intake:", (e as Error).message);
    return NextResponse.json({ error: "We could not take your request just now. Please try again in a minute." }, { status: 503 });
  }
  // The record exists; the orchestrator also drains the queue on its own schedule, so a failed wake loses nothing.
  const woke = await wakeOrchestrator(issue);
  console.log(`intake: KM-${issue} filed, wake=${woke}`);
  return NextResponse.json({ ref: `KM-${issue}` });
}
