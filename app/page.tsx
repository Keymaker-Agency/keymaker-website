import Image from "next/image";
import Link from "next/link";
import offers from "@/content/offers.json";
import { offerCopy, steps, agentWork, roles } from "@/content/site";

function ShortlistCard() {
  const rows = [
    ["Senior Financial Controller", "M. Okonkwo", "Strong fit", "Notice 4 wks"],
    ["Senior Financial Controller", "J. Laurent", "Strong fit", "Available now"],
    ["Senior Financial Controller", "R. Svensson", "Possible", "Salary above band"],
  ];
  return (
    <div className="rounded-lg bg-parchment text-warm-black p-6 sm:p-7 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
      <div className="flex items-center justify-between gap-4">
        <p className="eyebrow text-warm-black/70">Shortlist · drafted by the shortlist agent</p>
        <span className="eyebrow text-[10px] rounded-full border border-warm-black/25 px-2.5 py-1">Draft</span>
      </div>
      <p className="display text-2xl mt-4">Ashby Partners - Senior Financial Controller</p>
      <p className="text-sm text-warm-black/70 mt-1">Brief received Monday 09:10 · shortlist ready Tuesday 16:40</p>
      <div className="mt-5 divide-y divide-warm-black/15 border-y border-warm-black/15 text-sm">
        {rows.map(([, name, fit, note]) => (
          <div key={name} className="grid grid-cols-[1fr_auto] sm:grid-cols-[1.1fr_0.8fr_1fr] gap-x-4 py-3">
            <span className="font-medium">{name}</span>
            <span className="text-warm-black/70">{fit}</span>
            <span className="hidden sm:block text-warm-black/70">{note}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm">Waiting for <span className="font-medium">Priya, recruiter</span> to approve</p>
        <div className="flex gap-2 text-sm">
          <span className="rounded-full bg-warm-black text-parchment px-4 py-2">Send as written</span>
          <span className="rounded-full border border-warm-black/30 px-4 py-2">Don&apos;t send</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero: full-bleed photograph, darkened so the headline sits on it */}
      <section className="relative min-h-[92svh] flex items-end overflow-hidden">
        <Image src="/img/hero.jpg" alt="A recruiter on a call in a recruitment firm's office at dusk" fill priority sizes="100vw" className="object-cover object-[70%_center] saturate-[0.8]" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-forest/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-transparent to-forest/40" />
        <div className="relative mx-auto max-w-6xl w-full px-4 sm:px-6 pb-20 sm:pb-28 pt-40">
          <p className="eyebrow text-peach">For specialist recruiting firms · 20-100 people</p>
          <h1 className="display text-5xl sm:text-7xl mt-6 max-w-3xl">Shortlists in 48 hours. Recruiters back on the phone.</h1>
          <p className="text-lg text-muted mt-7 max-w-xl leading-relaxed">
            We set up agents that source, write candidate summaries and build client-ready shortlists - on infrastructure
            your firm owns. A recruiter approves everything that leaves.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/start" className="btn-primary">Start a project</Link>
            <Link href="#offers" className="btn-ghost">See the offers</Link>
          </div>
        </div>
      </section>

      {/* The numbers the Pilot is built around */}
      <section className="border-y border-line bg-forest-2">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-line">
          {[
            ["4-5 days → 48 hrs", "brief to client-ready shortlist - what the Pilot is built to hit"],
            ["Most of the week", "a recruiter spends on lists, summaries and updates instead of calls"],
            ["1 person", "approves every message before it reaches a client or candidate"],
          ].map(([n, d]) => (
            <div key={n} className="py-10 sm:px-8 first:sm:pl-0 last:sm:pr-0">
              <p className="display text-4xl">{n}</p>
              <p className="text-sm text-muted mt-3 max-w-xs leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What the agents do */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32 grid gap-14 md:grid-cols-2 items-center">
        <div className="photo relative aspect-[4/3]">
          <Image src="/img/shortlist_desk.jpg" alt="A recruiter marking printed candidate profiles next to a laptop showing a shortlist" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div>
          <p className="eyebrow text-peach">The work agents take</p>
          <h2 className="display text-4xl sm:text-5xl mt-5">Everything between the brief and the call.</h2>
          <ul className="mt-10 border-t border-line">
            {agentWork.map(([t, d]) => (
              <li key={t} className="border-b border-line py-5 grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-6">
                <span className="text-text">{t}</span>
                <span className="text-muted text-sm leading-relaxed">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Agents draft, people decide - the shortlist artifact */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32 grid gap-14 md:grid-cols-[1fr_1.15fr] items-center">
          <div>
            <p className="eyebrow text-peach">Agents draft. People decide.</p>
            <h2 className="display text-4xl sm:text-5xl mt-5">Nothing reaches a client until a recruiter says so.</h2>
            <p className="text-muted mt-6 leading-relaxed max-w-md">
              Every shortlist, summary and update lands in the owning recruiter&apos;s inbox as a draft with two buttons.
              Anything off your price list or outside a recruiter&apos;s limit goes to the person who can approve it - once,
              with the options and a deadline.
            </p>
          </div>
          <ShortlistCard />
        </div>
      </section>

      {/* Who it is for: tightly cropped portraits, roles not testimonials */}
      <section className="border-t border-line bg-forest-2">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32">
          <p className="eyebrow text-peach">Who it changes the week for</p>
          <h2 className="display text-4xl sm:text-5xl mt-5 max-w-2xl">Built around the three people in every firm.</h2>
          <div className="grid gap-6 md:grid-cols-3 mt-14">
            {roles.map((r) => (
              <figure key={r.role}>
                <div className="photo relative aspect-[4/5]">
                  <Image src={r.img} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <figcaption className="mt-5">
                  <p className="display text-2xl">{r.role}</p>
                  <p className="text-muted text-sm mt-2 leading-relaxed">{r.line}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* How an engagement runs */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32">
        <p className="eyebrow text-peach">What happens when you write to us</p>
        <div className="grid gap-px bg-line border border-line rounded-lg overflow-hidden sm:grid-cols-2 lg:grid-cols-4 mt-12">
          {steps.map((s) => (
            <div key={s.n} className="bg-forest p-7">
              <p className="eyebrow text-peach">{s.n}</p>
              <h3 className="display text-2xl mt-6">{s.t}</h3>
              <p className="text-muted text-sm mt-3 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Offers - prices rendered from the canon at build */}
      <section id="offers" className="border-t border-line scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-peach">Four ways to work with us</p>
              <h2 className="display text-4xl sm:text-5xl mt-5">Start with one desk.</h2>
            </div>
            <p className="eyebrow text-muted">prices from our canon · {offers.canon_updated}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 mt-14">
            {offers.offers.map((o) => {
              const c = offerCopy[o.name];
              const hi = o.name === "Pilot";
              return (
                <div key={o.name} className={`rounded-lg p-8 flex flex-col ${hi ? "bg-parchment text-warm-black" : "border border-line bg-forest-2"}`}>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="display text-3xl">{o.name}</h3>
                    {hi && <span className="eyebrow text-[10px] rounded-full border border-warm-black/25 px-2.5 py-1">Start here</span>}
                  </div>
                  <p className="display text-2xl mt-2 opacity-90">{o.price}</p>
                  <p className={`mt-5 leading-relaxed ${hi ? "text-warm-black/80" : "text-muted"}`}>{c?.lead ?? o.what}</p>
                  {c && (
                    <ul className="mt-6 space-y-2 text-sm">
                      {c.bullets.map((b) => (
                        <li key={b} className="flex gap-3"><span className={hi ? "text-warm-black/50" : "text-peach"}>-</span>{b}</li>
                      ))}
                    </ul>
                  )}
                  <p className={`eyebrow text-[11px] mt-auto pt-8 ${hi ? "text-warm-black/60" : "text-muted"}`}>{o.notes}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing band - full-bleed photograph */}
      <section className="relative overflow-hidden">
        <Image src="/img/team_room.jpg" alt="A recruitment team reviewing a shortlist in a glass meeting room" fill sizes="100vw" className="object-cover saturate-[0.8]" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest via-forest/55 to-forest" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-32 sm:py-44 text-center">
          <h2 className="display text-4xl sm:text-6xl max-w-3xl mx-auto">Tell us how long a shortlist takes you today.</h2>
          <p className="text-muted mt-6 max-w-lg mx-auto">An agent reads your request within minutes. A person on our team replies.</p>
          <div className="mt-10"><Link href="/start" className="btn-primary">Start a project</Link></div>
        </div>
      </section>
    </>
  );
}
