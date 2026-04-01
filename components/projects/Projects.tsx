"use client";

import { site } from "@/lib/site.config";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, useReducedMotion } from "framer-motion";

export function Projects() {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="relative z-10 scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Shipped work"
            title="Featured projects"
            subtitle="Enterprise AI systems with clear problems, architecture, and measurable outcomes."
          />
        </FadeIn>
        <div className="grid gap-8 lg:grid-cols-1 lg:gap-10">
          {site.projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.06}>
              <motion.article
                className="glass-card relative overflow-hidden rounded-2xl p-8 md:p-10"
                whileHover={
                  reduce
                    ? undefined
                    : {
                        y: -2,
                        transition: { duration: 0.2 },
                      }
                }
              >
                <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/4 -translate-y-1/4 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-wider text-purple-300/90">
                    {project.client}
                  </p>
                  <h3 className="font-[family-name:var(--font-display)] mt-2 text-2xl font-bold text-slate-50 md:text-3xl">
                    {project.title}
                  </h3>
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400/90">Problem</h4>
                      <p className="mt-2 text-slate-400 leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400/90">Architecture</h4>
                      <p className="mt-2 text-slate-400 leading-relaxed">{project.architecture}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-cyan-400/90">Technologies</h4>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.technologies.map((t) => (
                        <li
                          key={t}
                          className="rounded-md border border-blue-500/25 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-200/95"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 border-t border-white/10 pt-6">
                    <h4 className="text-sm font-semibold text-cyan-400/90">Key achievements</h4>
                    <ul className="mt-3 list-inside list-disc space-y-2 text-slate-300">
                      {project.achievements.map((a) => (
                        <li key={a} className="marker:text-cyan-500/80">
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
