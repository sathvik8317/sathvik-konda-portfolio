
import { Button } from "@/components/ui/button";

const Hero = () => (
  <section className="relative w-full overflow-hidden pb-4 pt-6 sm:pb-12 sm:pt-12 md:pt-20 mb-4">
    {/* Decorative blurred gradient background accent */}
    <div className="absolute -z-10 left-1/2 top-0 -translate-x-1/2 blur-[110px] pointer-events-none w-[600px] h-[340px] opacity-60"
      style={{
        background: "linear-gradient(135deg, #c7eafd 0%, #e0e7ff 60%, #e6f6ff 100%)",
      }}
      aria-hidden="true"
    />
    <div className="max-w-5xl mx-auto w-full flex flex-col-reverse sm:flex-row items-center gap-8 px-2">
      {/* Text & CTA */}
      <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight leading-tight">
          Hi, I’m <span className="text-primary">Sathvik</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-700 mb-6 max-w-lg animate-fade-in" style={{ animationDelay: "80ms" }}>
          A Data Science enthusiast passionate about ML, Gen AI, and solving problems with code.
        </p>
        <div className="flex gap-4 animate-fade-in" style={{ animationDelay: "160ms" }}>
          <Button asChild size="lg" className="bg-primary text-primary-foreground shadow-lg hover:scale-105 transition-transform duration-200">
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-blue-50 hover:scale-105 transition-transform duration-200">
            <a href="/resume.pdf" download>Download Resume</a>
          </Button>
        </div>
      </div>
      {/* Profile Image */}
      <div className="flex-1 flex justify-center sm:justify-end items-start">
        <div className="relative w-44 h-44">
          {/* Subtle background halo */}
          <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-tr from-blue-200 to-blue-100 blur-2xl opacity-50 -z-10"></div>
          <div className="relative z-10 overflow-hidden rounded-full w-44 h-44 shadow-xl border-4 border-white bg-slate-200 flex items-center justify-center group hover:scale-105 transition-transform duration-300">
            {/* Placeholder image, replace with real image if available */}
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg"
              className="w-28 h-28 text-blue-400 opacity-80" aria-label="Profile image placeholder">
              <circle cx="45" cy="45" r="45" fill="#e0e7ff"/>
              <ellipse cx="45" cy="35" rx="16" ry="15" fill="#c7eafd"/>
              <ellipse cx="45" cy="67" rx="26" ry="15" fill="#bcccdc"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

