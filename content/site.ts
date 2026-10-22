// The site's own words. Prices never live here: they come from the canon (content/offers.json).
export const offerCopy: Record<string, { lead: string; bullets: string[] }> = {
  "Automation audit": {
    lead: "We map what your desk already runs - ATS automations, sequences, prompts in a recruiter's notes - and tell you what to keep, wrap or rebuild.",
    bullets: ["Every automation your recruiters rely on", "Keep / wrap / rebuild call for each", "A readiness report you can act on"],
  },
  Pilot: {
    lead: "One desk live on your own Trinity instance: a sourcing agent and a shortlist agent. Brief in, client-ready shortlist out within 48 hours.",
    bullets: ["Your instance, your keys", "Sourcing + shortlist agents, one live desk", "Credited against a Build"],
  },
  Build: {
    lead: "The firm's system: a desk per specialism, a shared brain of placements and candidate notes, one orchestrator, a workspace for every recruiter.",
    bullets: ["A desk per specialism", "Placements and candidate notes that compound", "Approvals routed to the right person"],
  },
  Operate: {
    lead: "We run the system with you: monitoring, improvements and new playbooks as your markets change.",
    bullets: ["Health and cost monitoring", "Monthly improvements", "New playbooks on request"],
  },
};

export const steps = [
  { n: "01", t: "You tell us what hurts", d: "Use the form: your specialism, team size, how long a shortlist takes today. An agent reads it within minutes and a person replies." },
  { n: "02", t: "We map what you run", d: "Every agent, flow and script your team relies on - kept, wrapped or rebuilt, never thrown away by default." },
  { n: "03", t: "Departments go live", d: "Each desk has an owner, a playbook and a gate. Agents draft; your people decide." },
  { n: "04", t: "Your team works it", d: "One workspace. Everyone sees the agents they need, approvals land with the person who owns the call." },
];
