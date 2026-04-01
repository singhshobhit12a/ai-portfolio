import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      <p className="section-label mb-3">{eyebrow}</p>
      <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-slate-100 md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg leading-relaxed text-slate-400">{subtitle}</p>
      ) : null}
    </div>
  );
}
