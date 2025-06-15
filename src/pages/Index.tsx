
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-[#22223b] min-h-screen font-inter flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col pt-20 sm:pt-28">
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="mt-12 sm:mt-20 flex justify-center">
          <About />
        </section>
        <section id="skills" className="mt-12 sm:mt-20 flex justify-center">
          <Skills />
        </section>
        <section id="projects" className="mt-12 sm:mt-20 flex justify-center">
          <Projects />
        </section>
        <section id="contact" className="mt-12 sm:mt-20 flex justify-center">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
