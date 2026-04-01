import { site } from "@/lib/site.config";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Timeline() {
  return (
    <section id="experience" className="relative z-10 scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Career"
            title="Experience & education"
            subtitle="Roles that map to production AI delivery — plus formal training in AI."
          />
        </FadeIn>

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-transparent md:left-1/2 md:-translate-x-px"
            aria-hidden
          />

          <ul className="space-y-12">
            {site.experience.map((job, i) => (
              <FadeIn key={`${job.company}-${job.start}`} delay={i * 0.05}>
                <li className="relative grid gap-4 md:grid-cols-2 md:gap-8">
                  <div className="md:text-right md:pr-10">
                    <div className="flex items-start gap-4 md:flex-row-reverse md:justify-start">
                      <span
                        className="mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-cyan-400 bg-slate-950 shadow-[0_0_12px_rgba(34,211,238,0.6)] md:ml-4"
                        aria-hidden
                      />
                      <div>
                        <p className="text-sm font-medium text-cyan-300/90">
                          {job.start} — {job.end}
                        </p>
                        <h3 className="font-[family-name:var(--font-display)] mt-1 text-lg font-bold text-slate-100">
                          {job.role}
                        </h3>
                        <p className="text-slate-400">{job.company}</p>
                        <p className="text-sm text-slate-500">{job.location}</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:pl-10">
                    <div className="glass-card rounded-xl p-5 md:ml-0">
                      <ul className="space-y-2 text-sm text-slate-300 leading-relaxed">
                        {job.highlights.map((h) => (
                          <li key={h} className="flex gap-2">
                            <span className="text-cyan-500/80">▹</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              </FadeIn>
            ))}

            <FadeIn delay={0.15}>
              <li className="relative grid gap-4 md:grid-cols-2 md:gap-8">
                <div className="md:text-right md:pr-10">
                  <div className="flex items-start gap-4 md:flex-row-reverse md:justify-start">
                    <span
                      className="mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-purple-400 bg-slate-950 shadow-[0_0_12px_rgba(168,85,247,0.5)] md:ml-4"
                      aria-hidden
                    />
                    <div>
                      <p className="text-sm font-medium text-purple-300/90">
                        {site.education.period}
                      </p>
                      <h3 className="font-[family-name:var(--font-display)] mt-1 text-lg font-bold text-slate-100">
                        {site.education.degree}
                      </h3>
                      <p className="text-slate-400">{site.education.school}</p>
                      <p className="text-sm text-slate-500">{site.education.detail}</p>
                    </div>
                  </div>
                </div>
                <div className="md:pl-10">
                  <div className="glass-card rounded-xl p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Certifications
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {site.certifications.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </FadeIn>
          </ul>
        </div>
      </div>
    </section>
  );
}
