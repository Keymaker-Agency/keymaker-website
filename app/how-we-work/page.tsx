import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "How we work" };

const team = [
  { seat: "Principal", person: "Eugene", agents: ["Orchestrator", "Brain"], decides: "Prices, anything above a rep's limit, what the agency believes" },
  { seat: "Sales", person: "Sam Reyes", agents: ["Sales desk"], decides: "Replies to new clients, discounts up to 10%" },
  { seat: "Delivery", person: "Noor Haddad", agents: ["Delivery desk", "Meeting notes"], decides: "Client state, project plans, what ships when" },
  { seat: "Marketing", person: "Theo Lindqvist", agents: ["Marketing desk"], decides: "Anything published under our name" },
];

const flow = [
  ["Your request", "lands in our intake queue as a record - it is never lost, even if every agent is busy."],
  ["The orchestrator", "reads it as data, decides which kind of work it is, and hands it to the one desk that owns it."],
  ["The desk", "opens your deal or project and drafts a reply. It never sends anything itself."],
  ["A person", "on our team reviews the draft in their workspace inbox and presses send - or rewrites it."],
  ["Above a limit", "anything off the price list goes to the principal, once, with the options and a deadline."],
];

export default function HowWeWork() {
  return (
    <>
      <section className="relative min-h-[70svh] flex items-end overflow-hidden">
        <Image src="/img/approve.jpg" alt="A team lead reading a draft before approving it" fill priority sizes="100vw" className="object-cover saturate-[0.8]" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/70 to-forest/30" />
        <div className="relative mx-auto max-w-6xl w-full px-4 sm:px-6 pb-16 pt-40">
          <p className="eyebrow text-peach">How we work</p>
          <h1 className="display text-5xl sm:text-7xl mt-5 max-w-3xl">People hold the seats. Agents serve them.</h1>
          <p className="text-muted text-lg mt-6 max-w-2xl leading-relaxed">
            Keymaker runs on the same system we build for recruiting firms. Every seat has a person, every agent serves a
            seat, and only a person approves anything that leaves the building.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-24">
        <p className="eyebrow text-peach">Our seats</p>
        <div className="mt-10 grid gap-px bg-line border border-line rounded-lg overflow-hidden sm:grid-cols-2">
          {team.map((r) => (
            <div key={r.seat} className="bg-forest p-7">
              <div className="flex items-baseline justify-between gap-4">
                <p className="display text-3xl">{r.seat}</p>
                <p className="text-sm text-muted">{r.person}</p>
              </div>
              <p className="eyebrow text-[11px] text-peach mt-5">Served by {r.agents.join(" · ")}</p>
              <p className="text-muted text-sm mt-3 leading-relaxed">Decides: {r.decides}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 grid gap-14 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-peach">What happens to your request</p>
            <h2 className="display text-4xl sm:text-5xl mt-5">Five steps, one person at the end.</h2>
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
