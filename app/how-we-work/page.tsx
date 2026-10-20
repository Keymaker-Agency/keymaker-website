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
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">How we work</p>
      <h1 className="font-display text-4xl sm:text-5xl tracking-tight mt-4 max-w-3xl">People hold the seats. Agents serve them.</h1>
      <p className="text-muted text-lg mt-6 max-w-2xl">
        Keymaker runs on the same system we build for clients. Every seat has a person, every agent serves a seat,
        and only a person ratifies anything that leaves the building.
      </p>

      <div className="mt-14 overflow-x-auto rounded-2xl border border-line">
        <table className="w-full text-left text-sm min-w-[640px]">
          <thead className="bg-ink-2 text-muted font-mono text-xs uppercase tracking-wider">
            <tr><th className="p-4">Seat</th><th className="p-4">Person</th><th className="p-4">Agents that serve it</th><th className="p-4">Decides</th></tr>
          </thead>
          <tbody>
            {team.map((r) => (
              <tr key={r.seat} className="border-t border-line">
                <td className="p-4 font-display text-brass">{r.seat}</td>
                <td className="p-4">{r.person}</td>
                <td className="p-4 text-muted">{r.agents.join(", ")}</td>
                <td className="p-4 text-muted">{r.decides}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="font-display text-2xl sm:text-3xl mt-20">What happens to your request</h2>
      <ol className="mt-8 space-y-4">
        {flow.map(([t, d], i) => (
          <li key={t} className="flex gap-5 rounded-2xl border border-line bg-ink-2 p-5">
            <span className="font-mono text-brass">{String(i + 1).padStart(2, "0")}</span>
            <p><span className="font-display">{t}</span> <span className="text-muted">{d}</span></p>
          </li>
        ))}
      </ol>

      <div className="mt-16"><Link href="/start" className="rounded-full bg-brass text-ink font-medium px-6 py-3 hover:bg-brass-2">Start a project</Link></div>
    </div>
  );
}
