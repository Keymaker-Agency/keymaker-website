import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "How we work" };

const principles = [
  { t: "We start with what you already run", d: "Your ATS, your sequences, the way your recruiters actually work. We map it first and keep what works; nothing is thrown away by default." },
  { t: "One desk goes live before anything else", d: "A sourcing agent and a shortlist agent for one specialism, with one recruiter who owns the result. We prove the 48-hour shortlist on real briefs before we widen." },
  { t: "A person approves everything that leaves", d: "Every summary, shortlist and client update is a draft until a recruiter presses send. The agents do the afternoon's work; your people make the calls." },
  { t: "You own the system", d: "Your instance, your keys, your data. Candidate data is personal data and it stays with you. If we part ways, everything keeps running." },
];

const flow = [
  ["Your request", "arrives through the form and is stored as a private record."],
  ["We read it", "the same day, and the right person on our team picks it up."],
  ["A reply", "comes from that person by email within one business day - usually a few questions and a proposed next step."],
  ["An audit or a pilot", "is where most engagements start: two weeks to map your desk, or four weeks to put one desk live."],
  ["Prices", "are on the price list and nowhere else. If something is not on it, we say so rather than guess."],
];

export default function HowWeWork() {
  return (
    <>
      <section className="relative min-h-[70svh] flex items-end overflow-hidden">
        <Image src="/img/approve.jpg" alt="A team lead reading a draft before approving it" fill priority sizes="100vw" className="object-cover saturate-[0.8]" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/70 to-forest/30" />
        <div className="relative mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <p className="eyebrow text-peach">How we work</p>
          <h1 className="display text-5xl sm:text-7xl mt-5 max-w-3xl">Agents draft. Your people decide.</h1>
          <p className="text-muted text-lg mt-6 max-w-2xl leading-relaxed">
            We set up AI agents inside specialist recruiting firms: sourcing, candidate summaries, client-ready shortlists.
            On infrastructure you own, with a recruiter approving everything that leaves.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-24">
        <p className="eyebrow text-peach">Four principles</p>
        <div className="mt-10 grid gap-px bg-line border border-line rounded-lg overflow-hidden sm:grid-cols-2">
          {principles.map((r) => (
            <div key={r.t} className="bg-forest p-7">
              <p className="display text-2xl">{r.t}</p>
              <p className="text-muted text-sm mt-4 leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 grid gap-14 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-peach">What happens to your request</p>
            <h2 className="display text-4xl sm:text-5xl mt-5">Five steps, a person at every one.</h2>
          </div>
          <ol className="border-t border-line">
            {flow.map(([t, d], i) => (
              <li key={t} className="border-b border-line py-6 grid grid-cols-[48px_1fr] gap-4">
                <span className="eyebrow text-peach pt-1">{String(i + 1).padStart(2, "0")}</span>
                <p><span className="display text-xl">{t}</span> <span className="text-muted">{d}</span></p>
              </li>
            ))}
          </ol>
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-24"><Link href="/start" className="btn-primary">Start a project</Link></div>
      </section>
    </>
  );
}
