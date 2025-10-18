const layers = [
  {
    name: "Extension Shell",
    responsibilities: [
      "Manifest V3 service worker orchestrating Gmail & Outlook content scripts",
      "Context menu & omnibox entry points for quick reminder creation",
      "UI surfaces: sidebar panel, thread-level inline chips, notification toasts",
    ],
  },
  {
    name: "Inbox Intelligence",
    responsibilities: [
      "Streaming email bodies + metadata through local parser prior to uplink",
      "Entity extraction for people, locations, temporal expressions, intents",
      "On-device caching & deduplication to keep API usage minimal",
    ],
  },
  {
    name: "AI Coordination",
    responsibilities: [
      "Hybrid rules & LLM pipeline to classify scheduling opportunities",
      "Confidence scoring + explanation traces for human review",
      "Recommendation builder that maps findings to reminder/calendar templates",
    ],
  },
  {
    name: "Action Delivery",
    responsibilities: [
      "Native integrations with Google Calendar & Microsoft Graph Calendar",
      "Reminder orchestration via browser alarms + optional push to Notion/Trello",
      "Feedback loop to capture user choices and fine-tune ranking weights",
    ],
  },
];

export function ArchitectureLayers() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {layers.map((layer) => (
        <div
          key={layer.name}
          className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-slate-900">{layer.name}</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {layer.responsibilities.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
