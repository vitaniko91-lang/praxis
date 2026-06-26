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

export const cta = { heading: "Let's apply it", sub: 'Tell us what you are building.' }

export const manifesto = {
  h1: 'We build the thinking layer',
  paras: [
    'Most products bolt AI on. We embed it — a reasoning layer that lives inside the product, not beside it.',
    'Applied, not abstract. Shipped, not demoed. Measured, not promised.',
  ],
}
