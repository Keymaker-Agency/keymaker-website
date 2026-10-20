// The site's own words. Prices never live here: they come from the canon (content/offers.json).
export const offerCopy: Record<string, { lead: string; bullets: string[] }> = {
  "Automation audit": {
    lead: "We map what your team already runs - agents, n8n flows, scripts, prompts in someone's notes - and tell you what to keep, wrap or rebuild.",
    bullets: ["Inventory of every automation", "Keep / wrap / rebuild call for each", "A readiness report you can act on"],
  },
  Pilot: {
    lead: "One department live on your own Trinity instance: two agents and one real workflow, running on your data.",
    bullets: ["Your instance, your keys", "Two agents, one live workflow", "Credited against a Build"],
  },
  Build: {
    lead: "The whole agency system: departments, a shared brain, one orchestrator and a workspace your people log into.",
    bullets: ["Departments with owners", "Shared brain and canon", "Approvals routed to the right person"],
  },
  Operate: {
    lead: "We run the system with you: monitoring, improvements and new playbooks as your work changes.",
    bullets: ["Health and cost monitoring", "Monthly improvements", "New playbooks on request"],
  },
};

export const steps = [
  { n: "01", t: "You tell us what hurts", d: "Use the form. An agent reads it within minutes, opens it with the right desk, and a person replies." },
  { n: "02", t: "We map what you run", d: "Every agent, flow and script your team relies on - kept, wrapped or rebuilt, never thrown away by default." },
  { n: "03", t: "Departments go live", d: "Each desk has an owner, a playbook and a gate. Agents draft; your people decide." },
  { n: "04", t: "Your team works it", d: "One workspace. Everyone sees the agents they need, approvals land with the person who owns the call." },
];
