const integrationMatrix = [
  {
    capability: "Email Access",
    gmail: "Gmail REST API (read-only scopes), incremental sync via historyId",
    outlook: "Microsoft Graph Mail.Read, delta sync with change tokens",
  },
  {
    capability: "Calendar Actions",
    gmail: "Google Calendar insert/update, RSVP via calendar.events.patch",
    outlook: "Microsoft Graph /calendar/events, follow-up tasks via To Do beta",
  },
  {
    capability: "Reminder Delivery",
    gmail: "chrome.alarms \u0026 notifications API, optional push to Google Tasks",
    outlook: "Edge-compatible alarms, Adaptive Card push notifications",
  },
  {
    capability: "Authentication",
    gmail: "Chrome Identity API + OAuth 2.0 PKCE",
    outlook: "MSAL.js with extension redirect uri inside service worker",
  },
  {
    capability: "AI Enrichment",
    gmail: "Vertex AI serverless function (Text + Extraction) / on-device fallback",
    outlook: "Azure OpenAI + deterministic rules for enterprise tenants",
  },
];

export function IntegrationMatrix() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
            <th className="px-4 py-3">Capability</th>
            <th className="px-4 py-3">Gmail</th>
            <th className="px-4 py-3">Outlook</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white text-sm text-slate-600">
          {integrationMatrix.map((row) => (
            <tr key={row.capability}>
              <td className="px-4 py-3 font-medium text-slate-900">
                {row.capability}
              </td>
              <td className="px-4 py-3">{row.gmail}</td>
              <td className="px-4 py-3">{row.outlook}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
