const monitors = [
  {
    label: "Model Precision",
    metric: "> 92% precision on detected scheduling intents with weekly regression tests",
  },
  {
    label: "Latency",
    metric: "< 1.5s from email load to recommendation render via streaming pipeline",
  },
  {
    label: "User Adoption",
    metric: "50%+ click-through on surfaced suggestions, tracked per account",
  },
  {
    label: "Privacy",
    metric: "Zero PII persisted off-device unless user opts into cloud sync",
  },
];

export function OperationalView() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {monitors.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-slate-200 bg-slate-900 p-5 text-slate-100"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-sky-300">
            {item.label}
          </p>
          <p className="mt-3 text-sm text-slate-200/90">{item.metric}</p>
        </div>
      ))}
    </div>
  );
}
