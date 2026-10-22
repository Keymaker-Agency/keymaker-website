"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const kinds = [
  ["new-project", "A new project"],
  ["question", "A question about an offer"],
  ["existing-client", "I'm already a client"],
  ["partnership", "Partnership or press"],
] as const;

export default function RequestForm() {
  const router = useRouter();
  const started = useRef(Date.now());
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, elapsed_ms: Date.now() - started.current }),
      });
      const out = await res.json();
      if (!res.ok) throw new Error(out.error || "Something went wrong");
      router.push(`/start/received?ref=${encodeURIComponent(out.ref)}`);
    } catch (e) {
      setErr((e as Error).message);
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="mt-12 grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">Your name<input required name="name" maxLength={80} className="field" /></label>
        <label className="grid gap-2 text-sm">Work email<input required type="email" name="email" maxLength={120} className="field" /></label>
        <label className="grid gap-2 text-sm">Company<input required name="company" maxLength={100} className="field" /></label>
        <label className="grid gap-2 text-sm">Team size
          <select name="team_size" className="field" defaultValue="11-50">
            {["1-10", "11-50", "51-200", "200+"].map((s) => <option key={s}>{s}</option>)}
          </select>
        </label>
      </div>
      <fieldset className="grid gap-2 text-sm">
        <legend className="mb-2">This is about</legend>
        <div className="flex flex-wrap gap-2">
          {kinds.map(([v, l], i) => (
            <label key={v} className="cursor-pointer">
              <input type="radio" name="kind" value={v} defaultChecked={i === 0} className="peer sr-only" />
              <span className="inline-block rounded-full border border-line px-4 py-2 peer-checked:border-brass peer-checked:text-brass">{l}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="grid gap-2 text-sm">What would you like to automate, or what can we help with?
        <textarea required name="message" rows={6} maxLength={2000} className="field" placeholder="We are a 35-person finance recruitment firm. Shortlists take our recruiters four days and clients go quiet..." />
      </label>
      {/* honeypot: people never see it, bots fill it */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <p className="text-xs text-muted">
        Keymaker is a demonstration agency built in public. Your request is stored as a private record, read by AI agents and reviewed by a person. Please do not send anything confidential.
      </p>
      {err && <p className="text-sm text-[var(--warn)]">{err}</p>}
      <button disabled={busy} className="justify-self-start rounded-full bg-brass text-ink font-medium px-6 py-3 hover:bg-brass-2 disabled:opacity-60">
        {busy ? "Sending..." : "Send to Keymaker"}
      </button>
    </form>
  );
}
