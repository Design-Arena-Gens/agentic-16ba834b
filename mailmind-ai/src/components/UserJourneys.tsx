const journeys = [
  {
    persona: "Busy Executive",
    scenario:
      "Receives investor update with proposed board meeting slots. MailMind highlights best slot against existing calendar, suggests RSVP and calendar block.",
    outcome: "One-click confirm adds invite, sets reminder 1 day prior, logs notes to CRM webhook.",
  },
  {
    persona: "University Student",
    scenario:
      "Professor email announces midterm on Oct 18 2pm. Extension converts to study reminders + calendar event with location and resources link.",
    outcome: "Series of study sessions scheduled based on personal focus hours.",
  },
  {
    persona: "Recruiter",
    scenario:
      "Candidate proposes new interview time; MailMind surfaces timezone-aware suggestions and optional Teams meeting link generation.",
    outcome: "Automated follow-up email draft plus updated shared hiring calendar.",
  },
];

export function UserJourneys() {
  return (
    <div className="space-y-4">
      {journeys.map((journey) => (
        <div
          key={journey.persona}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            {journey.persona}
          </p>
          <p className="mt-2 text-sm text-slate-600">{journey.scenario}</p>
          <p className="mt-3 text-sm font-medium text-slate-900">
            Outcome: {journey.outcome}
          </p>
        </div>
      ))}
    </div>
  );
}
