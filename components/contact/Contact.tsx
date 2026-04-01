import { site } from "@/lib/site.config";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const links = [
  { label: "Email", href: `mailto:${site.email}`, value: site.email },
  { label: "LinkedIn", href: site.linkedinUrl, value: "Profile" },
  { label: "GitHub", href: site.githubUrl, value: "Repositories" },
];

export function Contact() {
  return (
    <section id="contact" className="relative z-10 scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Let's talk"
            title="Contact"
            subtitle="Open to mid-level AI/ML engineering roles focused on intelligent systems at scale."
          />
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="glass-card mx-auto max-w-2xl rounded-2xl p-8 md:p-10">
            <ul className="space-y-4">
              {links.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/40 px-4 py-4 transition-all hover:border-cyan-500/35 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                  >
                    <span className="text-sm font-semibold text-slate-400 group-hover:text-cyan-200/90">
                      {item.label}
                    </span>
                    <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                      {item.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center text-xs text-slate-500">
              {site.location} · {site.phone}
            </p>
          </div>
        </FadeIn>
      </div>

      <footer className="mx-auto mt-20 max-w-6xl border-t border-white/5 px-4 py-8 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js & Tailwind CSS.
        </p>
      </footer>
    </section>
  );
}
