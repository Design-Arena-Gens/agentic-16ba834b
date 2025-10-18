import { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section id={id} className="space-y-6 rounded-3xl border border-slate-200/60 bg-white/70 p-8 shadow-sm backdrop-blur">
      <div className="space-y-3">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.3em] text-sky-500">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
        {description ? (
          <p className="max-w-3xl text-sm text-slate-600 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      <div className="space-y-6 text-sm text-slate-600 sm:text-base">
        {children}
      </div>
    </section>
  );
}
