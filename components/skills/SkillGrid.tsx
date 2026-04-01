"use client";

import { site } from "@/lib/site.config";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, useReducedMotion } from "framer-motion";

function SkillCard({ title, items }: { title: string; items: readonly string[] }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="glass-card group relative overflow-hidden rounded-2xl p-6 md:p-8"
      whileHover={
        reduce
          ? undefined
          : {
              y: -4,
              transition: { duration: 0.2 },
            }
      }
      style={{ transition: "border-color 0.25s ease" }}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-60" />
      <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-slate-100 md:text-xl">
        {title}
      </h3>
      <ul className="mt-6 flex flex-wrap gap-2">
        {items.map((skill) => (
          <li key={skill}>
            <span className="inline-block rounded-lg border border-white/10 bg-slate-900/50 px-3 py-1.5 text-sm text-slate-300 transition-colors group-hover:border-cyan-500/25 group-hover:text-cyan-100/90">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function SkillGrid() {
  return (
    <section id="skills" className="relative z-10 scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Capabilities"
            title="Core skills"
            subtitle="Grouped the way hiring teams scan AI/ML resumes — GenAI, modeling, and infrastructure."
          />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {site.skillGroups.map((group, index) => (
            <FadeIn key={group.title} delay={index * 0.08}>
              <SkillCard title={group.title} items={group.items} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
