# keymaker.agency

The website of **Keymaker**, a demonstration agency built in public during the
[Agent-Native Agency workshop](https://www.ability.ai/trinity/workshops/agent-native-agency-workshop)
on the open-source [Trinity](https://github.com/abilityai/trinity) platform.

It is also a Trinity agent template (`template.yaml` + `CLAUDE.md`): create an agent from this repo
and it maintains the site through pull requests.

## How a request travels

```
form (/start) -> /api/request (Vercel server function: honeypot, timing check, rate limit, schema)
  -> GitHub issue in the private intake queue (the record - never lost)
  -> signed POST to the orchestrator's [intake] schedule webhook on Trinity
  -> orchestrator reads the issue as data, routes it to the one desk that owns it
  -> the desk drafts a reply; a person approves it in their Workspace inbox; then it is sent
```

No Trinity key ever reaches Vercel or the browser: the webhook URL token + HMAC secret can do one
thing only - start that one schedule. Trinity frames the webhook text as data, and the site strips
`---` from every field so the frame cannot be broken.

## Prices come from the canon

`npm run build` runs `scripts/sync-canon.mjs` first, which renders the offers from
`Abilityai/keymaker-canon/domains/pricing/pricing.md`. Change a price there (by PR), rebuild, done.

## Run it

```bash
npm install
cp .env.example .env.local   # fill in to test the intake path
npm run dev
```

Apache 2.0.
