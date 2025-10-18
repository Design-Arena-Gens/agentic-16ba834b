const stages = [
  {
    label: "Context Detection",
    details:
      "Content scripts watch inbox DOM mutations, pull message payloads via Gmail API / Microsoft Graph delta queries, and enqueue summaries in IndexedDB.",
  },
  {
    label: "Signal Extraction",
    details:
      "Local temporal parsing + zero-shot LLM classification identifies meetings, deadlines, RSVP requests, and exam schedules with linked metadata.",
  },
  {
    label: "Recommendation Crafting",
    details:
      "Policy engine assembles reminder/calendar templates, pre-fills attendees, locations, video links, and suggests priority & cadence.",
  },
  {
    label: "Human-in-the-loop",
    details:
      "Sidebar surfaces ranked suggestions, users confirm/adjust, and feedback is logged to refine prompts, thresholds, and ranking weights.",
  },
  {
    label: "Delivery & Follow-up",
    details:
      "Confirmed actions sync to Google/Microsoft calendars, reminders scheduled via chrome.alarms, and outcome tracked against event metadata.",
  },
];

export function WorkflowTimeline() {
  return (
    <ol className="relative flex flex-col gap-6 border-l border-dashed border-slate-300 pl-6">
      {stages.map((stage, index) => (
        <li key={stage.label} className="relative pl-4">
          <span className="absolute left-[-11px] top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-sky-500" />
          <div className="rounded-xl bg-slate-50 p-4 shadow-inner">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Step {index + 1}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-slate-900">
              {stage.label}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{stage.details}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
