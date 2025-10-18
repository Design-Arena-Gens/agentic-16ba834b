const checklist = [
  "Store tokens in chrome.identity managed sessions; refresh using silent auth flow.",
  "Never persist raw email content remotely; only derived metadata leaves the device.",
  "Use field-level encryption for cached metadata inside IndexedDB.",
  "Configurable data retention windows with auto-expiry background task.",
  "SOC2-ready audit logging when deployed with managed backend.",
  "Granular permission toggles per provider & feature with runtime host controls.",
];

export function SecurityChecklist() {
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {checklist.map((item) => (
        <li
          key={item}
          className="flex gap-3 rounded-xl border border-emerald-100 bg-emerald-50/80 p-4 text-sm text-emerald-800"
        >
          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
