"use client";

import { site } from "@/lib/site.config";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, useReducedMotion } from "framer-motion";

export function ArchitectureSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="architectures"
      className="relative z-10 scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Systems"
            title="AI system architectures"
            subtitle="Patterns I have designed and shipped — not slideware."
          />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2">
          {site.architectures.map((arch, i) => (
            <FadeIn key={arch.name} delay={(i % 2) * 0.06}>
              <motion.div
                className="glass-card flex h-full flex-col rounded-2xl p-6 md:p-8"
                whileHover={
                  reduce
                    ? undefined
                    : { y: -3, transition: { duration: 0.2 } }
                }
              >
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-50">
                  {arch.name}
                </h3>
                <p className="mt-3 text-slate-400 leading-relaxed">{arch.description}</p>
                <div className="mt-5 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400/80">
                    Architecture summary
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {arch.summary.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/70" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                  {arch.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-purple-500/20 bg-purple-500/10 px-2 py-0.5 text-xs text-purple-200/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
