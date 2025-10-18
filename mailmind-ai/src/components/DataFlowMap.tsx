const flows = [
  {
    source: "Gmail DOM + Gmail API",
    destination: "Content Script Extractor",
    description:
      "Injects DOM listeners for thread updates while Gmail REST provides clean HTML / MIME payload for AI processing.",
  },
  {
    source: "Outlook WebView + Graph",
    destination: "Content Script Extractor",
    description:
      "Graph delta queries fetch new messages; MutationObserver keeps inline suggestions aligned with Outlook UI changes.",
  },
  {
    source: "Content Script Extractor",
    destination: "Service Worker Queue",
    description:
      "Normalized payload posted via chrome.runtime messaging; queued in IndexedDB with deduplication hash.",
  },
  {
    source: "Service Worker Queue",
    destination: "AI Orchestration Service",
    description:
      "Batches messages for local rules, fast temporal parser, and optional remote LLM summarization endpoint.",
  },
  {
    source: "AI Orchestration Service",
    destination: "Recommendation Store",
    description:
      "Produces scored reminder/event drafts saved locally; only high-confidence metadata shared with remote services.",
  },
  {
    source: "Recommendation Store",
    destination: "UI Surfaces",
    description:
      "Sidebar + inline chips consume updates via broadcast channel to render actionable insights in real time.",
  },
];

export function DataFlowMap() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {flows.map((flow) => (
        <div
          key={`${flow.source}-${flow.destination}`}
          className="rounded-xl border border-slate-200 bg-slate-50 p-4"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-500">
            {flow.source} → {flow.destination}
          </p>
          <p className="mt-2 text-sm text-slate-600">{flow.description}</p>
        </div>
      ))}
    </div>
  );
}
