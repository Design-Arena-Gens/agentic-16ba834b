import Link from "next/link";

const actionItems = [
  {
    label: "Architecture at a Glance",
    href: "#solution-architecture",
  },
  {
    label: "Workflow",
    href: "#workflow",
  },
  {
    label: "AI Models",
    href: "#intelligence-pipeline",
  },
];

export function Hero() {
  return (
    <header className="relative flex flex-col gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-12 text-slate-100 shadow-xl">
      <div className="absolute -left-32 top-16 h-56 w-56 rounded-full bg-sky-500/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="relative z-10 flex flex-col gap-6">
        <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">
          Chrome Extension Architecture Blueprint
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
          MailMind AI — Intelligent Scheduling Insights for Gmail &amp; Outlook
        </h1>
        <p className="max-w-2xl text-base text-slate-200/80 md:text-lg">
          A privacy-conscious agent that reads inboxes, extracts actionable time
          signals, and orchestrates smart reminder &amp; calendar suggestions without
          interrupting user workflows.
        </p>
      </div>
      <nav className="relative z-10 flex flex-wrap gap-3 text-sm font-medium">
        {actionItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full border border-slate-600/60 bg-slate-900/70 px-5 py-2 transition hover:border-sky-400/60 hover:bg-slate-800/70 hover:text-sky-200"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
