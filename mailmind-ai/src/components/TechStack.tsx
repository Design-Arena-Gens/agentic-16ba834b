const stack = [
  {
    category: "Chrome Extension Core",
    tools: "Manifest V3, chrome.runtime, chrome.storage.session, chrome.identity",
  },
  {
    category: "AI Services",
    tools: "Vertex AI Text, Azure OpenAI, FastAPI orchestrator (optional cloud)",
  },
  {
    category: "Data Storage",
    tools: "IndexedDB via idb library, encrypted local caches, optional Supabase",
  },
  {
    category: "Scheduling APIs",
    tools: "Google Calendar REST, Microsoft Graph Calendar & To Do",
  },
  {
    category: "Frontend Experience",
    tools: "React 18, Zustand state, Tailwind UI kit, Headless UI",
  },
  {
    category: "Observability",
    tools: "OpenTelemetry traces, PostHog event instrumentation, Sentry for runtime errors",
  },
];

export function TechStack() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stack.map((item) => (
        <div
          key={item.category}
          className="rounded-2xl border border-sky-100 bg-sky-50/70 p-5 text-slate-700"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-sky-500">
            {item.category}
          </p>
          <p className="mt-3 text-sm">{item.tools}</p>
        </div>
      ))}
    </div>
  );
}
