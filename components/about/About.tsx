import { site } from "@/lib/site.config";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="relative z-10 scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="About"
            title="AI engineering, end to end"
            subtitle="From retrieval and embeddings to dialogue design and production APIs."
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="glass-card mx-auto max-w-3xl rounded-2xl p-8 md:p-10">
            <div className="space-y-6 text-lg leading-relaxed text-slate-300">
              {site.about.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-8">
              {[
                "Production LLM systems",
                "RAG pipelines",
                "LangGraph",
                "FastAPI",
                "Vector search",
                "Enterprise delivery",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs font-medium text-cyan-200/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
