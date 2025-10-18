const steps = [
  {
    title: "Local Dev",
    description:
      "Chrome extension built with Vite + CRXJS, synced into Next.js docs site for rapid iteration and storybook-like previews.",
  },
  {
    title: "CI Quality Gates",
    description:
      "GitHub Actions run type checks, lint, unit tests for parsers, prompt regression harness, and bundle size guardrails.",
  },
  {
    title: "Release Channels",
    description:
      "Beta channel pushes to Chrome Web Store / Edge Add-ons with staged rollout; production gated via feature flags.",
  },
  {
    title: "Observability",
    description:
      "Edge runtime logs forwarded to managed collector, privacy filters scrub PII before export.",
  },
];

export function DeploymentPlan() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {steps.map((step) => (
        <div
          key={step.title}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
