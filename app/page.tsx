import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import { ArchitectureSection } from "@/components/architectures/ArchitectureSection";
import { Timeline } from "@/components/experience/Timeline";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/hero/Hero";
import { Projects } from "@/components/projects/Projects";
import { SkillGrid } from "@/components/skills/SkillGrid";
import { BackgroundEffects } from "@/components/ui/BackgroundEffects";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Header />
      <main id="main-content" className="relative z-10 flex-1" tabIndex={-1}>
        <Hero />
        <About />
        <SkillGrid />
        <Projects />
        <ArchitectureSection />
        <Timeline />
        <Contact />
      </main>
    </>
  );
}
