export function NextSteps() {
  return (
    <div className="rounded-3xl border border-slate-900/10 bg-slate-900 p-8 text-slate-100">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-sky-400">
            Activation Checklist
          </p>
          <h3 className="mt-2 text-2xl font-semibold">
            Ready the extension for pilot deployment in under two weeks.
          </h3>
          <p className="mt-2 max-w-xl text-sm text-slate-200/80">
            Stand up the orchestrator backend, validate prompt set with fixture corpus, and integrate telemetry dashboards before rollout.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-slate-200/80">
          <span className="rounded-full bg-sky-500/20 px-4 py-2">Day 1: Scaffold extension + Gmail hooks</span>
          <span className="rounded-full bg-sky-500/20 px-4 py-2">Day 5: Integrate AI parsing &amp; ranking</span>
          <span className="rounded-full bg-sky-500/20 px-4 py-2">Day 10: Pilot with triaged accounts</span>
        </div>
      </div>
    </div>
  );
}
