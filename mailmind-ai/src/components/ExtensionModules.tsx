const modules = [
  {
    name: "Background Service Worker",
    responsibilities:
      "Manages message queue, orchestrates AI calls, handles OAuth token refresh, coordinates alarms & analytics pings.",
  },
  {
    name: "Gmail Content Script",
    responsibilities:
      "Injects inline smart chips near email subject lines, observes thread updates, and extracts structured metadata.",
  },
  {
    name: "Outlook Content Script",
    responsibilities:
      "Hooks into React-based Outlook DOM, maps recommendation anchors to message list cards and reading pane.",
  },
  {
    name: "Sidebar Panel",
    responsibilities:
      "Presents ranked suggestions, allows editing details, binds to calendar availability & focus hours.",
  },
  {
    name: "Notification Module",
    responsibilities:
      "Delivers chrome.notifications prompts with quick actions, snooze controls, and voice command entry point.",
  },
  {
    name: "Settings & Policy",
    responsibilities:
      "Feature flags, model selection, enterprise policy sync, telemetry opt-in management.",
  },
];

export function ExtensionModules() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {modules.map((module) => (
        <div
          key={module.name}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <h3 className="text-base font-semibold text-slate-900">
            {module.name}
          </h3>
          <p className="mt-2 text-sm text-slate-600">{module.responsibilities}</p>
        </div>
      ))}
    </div>
  );
}
