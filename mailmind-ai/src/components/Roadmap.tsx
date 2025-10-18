const roadmapItems = [
  {
    phase: "MVP",
    focus: "Core Gmail support, deterministic parsing, Google Calendar integration, inline recommendations UI.",
  },
  {
    phase: "Outlook Parity",
    focus: "Microsoft Graph integration, Edge extension packaging, enterprise SSO readiness.",
  },
  {
    phase: "AI Personalization",
    focus: "Feedback-weighted ranking, personal focus hours modeling, adaptive tone suggestions.",
  },
  {
    phase: "Ecosystem Expansion",
    focus: "Teams/Slack follow-up nudges, CRM sync, shared team playbooks.",
  },
];

export function Roadmap() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-6">
      {roadmapItems.map((item, index) => (
        <div
          key={item.phase}
          className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Phase {index + 1}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">
            {item.phase}
          </h3>
          <p className="mt-2 text-sm text-slate-600">{item.focus}</p>
        </div>
      ))}
    </div>
  );
}
