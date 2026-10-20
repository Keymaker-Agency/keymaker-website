import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

// Mail to anyone@keymaker.agency arrives here as a Resend `email.received` webhook (metadata only).
// Keymaker is a demonstration agency: its team mailboxes are personas, so everything is forwarded,
// unchanged, to the person who plays them (INBOUND_FORWARD_TO). Sign-in codes included.
export async function POST(req: NextRequest) {
  const key = process.env.RESEND_INBOUND_KEY;
  const secret = process.env.RESEND_WEBHOOK_SECRET;
  const to = process.env.INBOUND_FORWARD_TO;
  if (!key || !secret || !to) return NextResponse.json({ error: "not configured" }, { status: 503 });

  const payload = await req.text();
  const resend = new Resend(key);
  let event: { type: string; data: { email_id: string; to?: string[]; subject?: string } };
  try {
    event = resend.webhooks.verify({
      payload,
      headers: {
        id: req.headers.get("svix-id") || "",
        timestamp: req.headers.get("svix-timestamp") || "",
        signature: req.headers.get("svix-signature") || "",
      },
      webhookSecret: secret,
    }) as typeof event;
  } catch {
    return NextResponse.json({ error: "bad signature" }, { status: 401 });
  }
  if (event.type !== "email.received") return NextResponse.json({ ok: true, ignored: event.type });

  const { error } = await resend.emails.receiving.forward({
    emailId: event.data.email_id,
    to,
    from: "Keymaker mail <forward@keymaker.agency>",
  });
  if (error) {
    console.error("inbound forward failed:", error.message);
    return NextResponse.json({ error: "forward failed" }, { status: 502 });
  }
  console.log(`inbound: ${event.data.email_id} to ${(event.data.to || []).join(",")} forwarded`);
  return NextResponse.json({ ok: true });
}
