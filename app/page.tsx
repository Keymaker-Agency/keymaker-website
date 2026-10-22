import Link from "next/link";
import offers from "@/content/offers.json";
import { offerCopy, steps } from "@/content/site";

export default function Home() {
  return (
    <>
      <section className="grain">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-20 pb-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">AI agent systems for recruiting firms</p>
          <h1 className="font-display text-4xl sm:text-6xl leading-[1.05] tracking-tight mt-5 max-w-4xl">
            Shortlists in 48 hours. Recruiters back on the phone.
          </h1>
          <p className="text-lg text-muted mt-6 max-w-2xl">
            For specialist recruiting firms of 20-100 people: agents that source, write candidate summaries and build
            client-ready shortlists, on infrastructure you own - and a recruiter approves everything that leaves.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/start" className="rounded-full bg-brass text-ink font-medium px-6 py-3 hover:bg-brass-2">Start a project</Link>
            <Link href="/how-we-work" className="rounded-full border border-line px-6 py-3 hover:border-brass">How we work</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <h2 className="font-display text-2xl sm:text-3xl">What happens when you write to us</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-10">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-line bg-ink-2 p-6">
              <p className="font-mono text-brass text-sm">{s.n}</p>
              <h3 className="font-display text-lg mt-3">{s.t}</h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="offers" className="mx-auto max-w-6xl px-4 sm:px-6 py-20 scroll-mt-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-2xl sm:text-3xl">Four ways to work with us</h2>
          <p className="font-mono text-xs text-muted">prices from our canon · {offers.canon_updated}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 mt-10">
          {offers.offers.map((o) => {
            const c = offerCopy[o.name];
            return (
              <div key={o.name} className="rounded-2xl border border-line bg-ink-2 p-7 flex flex-col">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl">{o.name}</h3>
                  <p className="font-display text-brass text-lg whitespace-nowrap">{o.price}</p>
                </div>
                <p className="text-muted mt-3 leading-relaxed">{c?.lead ?? o.what}</p>
                {c && (
                  <ul className="mt-5 space-y-2 text-sm">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex gap-2"><span className="text-brass">-</span>{b}</li>
                    ))}
                  </ul>
                )}
                <p className="font-mono text-xs text-muted mt-auto pt-6">{o.notes}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="rounded-3xl border border-line bg-ink-2 p-8 sm:p-12 grid gap-8 md:grid-cols-[1.4fr_1fr] items-center">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl">Agents draft. People decide.</h2>
            <p className="text-muted mt-4 leading-relaxed">
              Every request you send is read by our front desk within minutes and handed to the one department that owns it.
              A person on our team reviews the reply before it leaves - and anything off our price list goes to the person who can approve it.
            </p>
          </div>
          <Link href="/start" className="justify-self-start md:justify-self-end rounded-full bg-brass text-ink font-medium px-6 py-3 hover:bg-brass-2">
            Tell us what you need
          </Link>
        </div>
      </section>
    </>
  );
}
