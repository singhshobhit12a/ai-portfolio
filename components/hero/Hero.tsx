"use client";

import { site } from "@/lib/site.config";
import { motion, useReducedMotion } from "framer-motion";

function SocialIconLinkedIn() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function SocialIconGitHub() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function SocialIconMail() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

const socials = [
  { label: "LinkedIn", href: site.linkedinUrl, Icon: SocialIconLinkedIn },
  { label: "GitHub", href: site.githubUrl, Icon: SocialIconGitHub },
  { label: "Email", href: `mailto:${site.email}`, Icon: SocialIconMail },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative z-10 overflow-hidden px-4 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-20 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute right-0 top-32 h-64 w-64 rounded-full bg-purple-500/10 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          className="section-label mb-4"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {site.title}
        </motion.p>

        <motion.h1
          id="hero-heading"
          className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-slate-50 sm:text-5xl md:text-6xl lg:text-7xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <span className="block">{site.name}</span>
          <span className="mt-2 block text-gradient">{site.tagline}</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          {site.heroIntro}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
        >
          <a href="#projects" className="btn-gradient inline-flex min-w-[180px] items-center justify-center rounded-full px-8 py-3.5 text-sm">
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-slate-100 backdrop-blur transition-colors hover:border-cyan-500/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.ul
          className="mt-12 flex items-center justify-center gap-6"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-cyan-500/35 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                aria-label={label}
              >
                <Icon />
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
