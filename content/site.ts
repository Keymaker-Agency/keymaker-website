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
  { n: "02", t: "We map your desk", d: "Your ATS, sequences and the way your recruiters actually work - kept, wrapped or rebuilt, never thrown away by default." },
  { n: "03", t: "One desk goes live", d: "Sourcing and shortlist agents on your own instance, each with an owner and a gate. Agents draft; recruiters decide." },
  { n: "04", t: "Your firm works it", d: "One workspace. Every recruiter sees their agents; approvals land with the person who owns the client." },
];

export const agentWork = [
  ["Sourcing lists", "Long lists built from your ATS, LinkedIn and the brief - deduplicated against people you already know."],
  ["Candidate summaries", "One page per candidate in your house format, written from the call notes and the CV."],
  ["Client-ready shortlists", "The shortlist the client actually reads, formatted and checked against the brief."],
  ["Weekly client updates", "Where every open role stands, drafted for the recruiter who owns the client."],
  ["Keeping candidates warm", "Follow-ups between first call and interview, so good people do not go quiet."],
];

export const roles = [
  { img: "/img/portrait_2.jpg", role: "The recruiter", line: "Gets the afternoon back. Agents draft the summaries and the shortlist; you make the calls and approve what goes out." },
  { img: "/img/portrait_1.jpg", role: "The team lead", line: "Sees every open role, every client update and every approval in one workspace - and the method stays when people move on." },
  { img: "/img/portrait_3.jpg", role: "The managing director", line: "Watches placements per recruiter and time to shortlist, on a system the firm owns, with candidate data on its own instance." },
];
