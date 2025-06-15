
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import BackToTop from "@/components/BackToTop";
import SkipToContent from "@/components/SkipToContent";

const Index = () => {
  return (
    <div className="bg-[#17191A] min-h-screen font-inter flex flex-col">
      <SkipToContent />
      <Navbar />
      <main id="maincontent" className="flex-1 flex flex-col pt-20 sm:pt-28">
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="mt-12 sm:mt-20">
          <About />
        </section>
        <section id="skills" className="mt-12 sm:mt-20">
          <Skills />
        </section>
        <section id="projects" className="mt-12 sm:mt-20">
          <Projects />
        </section>
        <TestimonialCarousel />
        <section id="contact" className="mt-12 sm:mt-20">
          <Contact />
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
