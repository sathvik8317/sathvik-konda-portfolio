
import { useCallback, useState, type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { useReveal } from "@/hooks/use-reveal";

const Reveal = ({ children }: { children: ReactNode }) => {
  const [ref, isVisible] = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`motion-reduce:!opacity-100 ${isVisible ? "animate-reveal" : "opacity-0"}`}>
      {children}
    </div>
  );
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Index = () => {
  const [loaded, setLoaded] = useState(prefersReducedMotion);
  const handleLoaded = useCallback(() => setLoaded(true), []);

  if (!loaded) {
    return <LoadingScreen onComplete={handleLoaded} />;
  }

  return (
    <div className="bg-background min-h-screen font-sans flex flex-col relative">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, hsl(var(--foreground)) 0px, transparent 1px, transparent 3px)"
        }}
      />
      <Navbar />
      <main className="flex-1 flex flex-col pt-16 sm:pt-20 relative z-10">
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-24 py-20 sm:py-28">
          <Reveal>
            <About />
          </Reveal>
        </section>
        <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
          <Reveal>
            <Skills />
          </Reveal>
        </section>
        <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
          <Reveal>
            <Projects />
          </Reveal>
        </section>
        <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
          <Reveal>
            <Contact />
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
