const stages = [
  {
    title: "Lightweight Signal Filter",
    description:
      "Deterministic heuristics isolate threads with RSVP verbs, temporal phrases, or known senders (learning management systems, recruiters).",
    tooling: "chrono-node, compromise.js, custom regexp library",
  },
  {
    title: "Semantic Parsing",
    description:
      "LLM prompt extracts structured fields (title, datetime, timezone, participants, location, attachments) with JSON output & rationale.",
    tooling: "Hosted LLM (8k context) with JSON schema mode, fallback miniLLM on-device",
  },
  {
    title: "Decision Policy",
    description:
      "Scoring matrix combines model confidence, sender trust, historical acceptance rate, and user focus hours to rank suggestions.",
    tooling: "Scikit-learn gradient boosting or TF Lite model running in WebAssembly",
  },
  {
    title: "Recommendation Builder",
    description:
      "Templates expand into calendar events, reminders, or follow-up tasks with natural language summaries + structured metadata.",
    tooling: "Zod validation, ICS generator, Microsoft Adaptive Card serializer",
  },
];

export function IntelligencePipeline() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {stages.map((stage) => (
        <article
          key={stage.title}
          className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-slate-900">{stage.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{stage.description}</p>
          <p className="mt-3 text-xs uppercase tracking-wide text-slate-500">
            Tooling
          </p>
          <p className="text-sm text-slate-600">{stage.tooling}</p>
        </article>
      ))}
    </div>
  );
}
