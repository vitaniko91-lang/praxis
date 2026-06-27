export const brand = { name: 'PRAXIS', mark: '/', tagline: 'Intelligence, applied.' }
export const nav = [
  { href: '/', label: 'Index' },
  { href: '/manifesto', label: 'Manifesto' },
  { href: '#contact', label: 'Contact' },
]
export const hero = { h1: 'Intelligence, applied', kicker: 'INTELLIGENCE, APPLIED', sub: 'The thinking layer you embed into any product.' }

export const positioning = { line: 'A thinking layer inside your product', words: ['A', 'thinking', 'layer', 'inside', 'your', 'product'] }

export const howItWorks = {
  heading: 'How it works',
  steps: [
    { n: '01', title: 'Ingest', body: 'Connect your data and context in minutes — files, APIs, events.' },
    { n: '02', title: 'Reason', body: 'Route to the right model, apply guardrails, return a grounded answer.' },
    { n: '03', title: 'Ship', body: 'Drop the response into your product with one SDK call.' },
  ],
}

export const capabilities = {
  heading: 'Capabilities',
  items: [
    { title: 'Inference', body: 'Sub-50ms responses across 40+ models.' },
    { title: 'Routing', body: 'Pick the best model per request, automatically.' },
    { title: 'Guardrails', body: 'Policy, PII, and safety checks built in.' },
  ],
}

export const proof = {
  heading: 'In production',
  stats: [
    { to: 12, suffix: 'ms', label: 'p50 latency' },
    { to: 40, suffix: '+', label: 'models' },
    { to: 99, suffix: '.99%', label: 'uptime' },
  ],
}

export const codeBlock = {
  heading: 'Intelligence in one call',
  sub: 'Routing, retries, memory, and safety — handled. You ship the product, not the plumbing.',
  filename: 'app.ts',
  code: `import { Praxis } from '@praxis/sdk'

const praxis = new Praxis(process.env.PRAXIS_KEY)

const answer = await praxis.reason({
  input: userMessage,
  context: [docs, history],
  guardrails: ['no-pii', 'on-topic'],
})`,
}

export const builtFor = {
  heading: 'Built for',
  sub: 'One reasoning layer, applied wherever your product needs to think.',
  items: [
    { n: '01', title: 'Support agents', body: 'Resolve tickets with grounded, cited answers — not hallucinations.' },
    { n: '02', title: 'Search', body: 'Semantic search that understands intent, ranked and explained.' },
    { n: '03', title: 'Copilots', body: 'In-product assistants that reason over your own data and tools.' },
    { n: '04', title: 'Workflows', body: 'Automate multi-step decisions with guardrails and a human in the loop.' },
  ],
}

export const testimonials = {
  heading: 'From the teams shipping it',
  items: [
    { quote: 'PRAXIS took three months of inference infrastructure off our roadmap. We shipped the feature in a week.', name: 'Maya Chen', role: 'Eng Lead, Northwind' },
    { quote: 'The guardrails alone justified it — no PII leaks, no off-topic answers, in production from day one.', name: 'Diego Ruiz', role: 'CTO, Halcyon Labs' },
    { quote: 'One SDK call replaced a tangle of model routing and retries. Our support copilot finally feels reliable.', name: 'Priya Nair', role: 'Head of Product, Tessellate' },
  ],
}

export const faq = {
  heading: 'Questions',
  items: [
    { q: 'How fast can we integrate?', a: 'One SDK call. Most teams ship a working reasoning layer in an afternoon; full production rollout is typically under a week.' },
    { q: 'Which models do you support?', a: 'Over 40 models across providers, selected per request by the router. Pin a model, or let PRAXIS choose by cost, latency, or quality.' },
    { q: 'How do guardrails work?', a: 'Policy, PII, and safety checks run on every request, before and after inference. You compose them per call — e.g. ["no-pii", "on-topic"].' },
    { q: 'Where does our data go?', a: 'Your data is used only to answer your request and is never used to train models. Bring your own keys and deploy in your region.' },
    { q: 'What does it cost?', a: 'Usage-based, billed on tokens routed. A free tier to prototype, volume pricing for production. Talk to us for an estimate.' },
    { q: 'Can we self-host?', a: 'Yes — PRAXIS runs in your cloud or ours. The SDK and routing layer are identical in both.' },
  ],
}

export const cta = { heading: "Let's apply it", sub: 'Tell us what you are building.' }

export const manifesto = {
  h1: 'We build the thinking layer',
  paras: [
    'Most products bolt AI on — a chatbot in the corner, a feature behind a flag. We embed it instead: a reasoning layer that lives inside the product, in the path of the work, not beside it.',
    'Intelligence should be infrastructure. Routing, retries, memory, guardrails, evaluation — the unglamorous parts that decide whether a feature ships or stalls. We make them a single dependency, so a team of three can do what used to take a platform org.',
    'Applied, not abstract. We do not sell demos or decks. We sell the thing that runs in production at 3am and returns a grounded answer.',
    'Shipped, not promised. Every claim on this page is something you can measure — latency, uptime, the diff in your conversion. If we cannot put a number on it, we do not say it.',
    'That is the whole idea: intelligence, applied — and then proven.',
  ],
}
