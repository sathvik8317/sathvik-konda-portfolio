
import { Button } from "@/components/ui/button";

const Hero = () => (
  <section className="relative w-full py-12 sm:py-20 bg-[#f5f8fc]">
    {/* Profile image/placeholder */}
    <div className="max-w-5xl mx-auto w-full flex flex-col-reverse sm:flex-row items-center justify-between gap-8 px-2">
      {/* Text & CTA */}
      <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
          Hi, I'm <span className="text-blue-700">Sathvik</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-700 mb-8 max-w-lg font-medium">
          A Data Science enthusiast passionate about ML, Gen AI, and solving problems with code.
        </p>
        <div className="flex gap-4">
          <Button size="lg" className="bg-slate-900 text-white px-7 py-3 rounded-xl shadow hover:bg-slate-800 transition-all font-semibold text-base">
            <a href="#projects">View Projects</a>
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-slate-900 text-slate-900 px-7 py-3 rounded-xl font-semibold text-base hover:bg-blue-50 transition-all"
            asChild
          >
            <a href="/resume.pdf" download>Download Resume</a>
          </Button>
        </div>
      </div>
      {/* Profile Circle */}
      <div className="flex-1 flex justify-center sm:justify-end items-start mb-10 sm:mb-0">
        <div className="relative">
          {/* Outer colored accent ring */}
          <span className="absolute inset-0 w-40 h-40 rounded-full bg-gradient-to-br from-[#deebfd] to-[#bfdfff] blur-sm opacity-90 -z-10"></span>
          {/* White card/halo */}
          <span className="absolute inset-2 w-36 h-36 rounded-full bg-white shadow-lg -z-10"></span>
          {/* Main profile placeholder */}
          <div className="relative z-10 w-36 h-36 rounded-full border-4 border-blue-200 bg-blue-100 shadow-xl flex items-center justify-center">
            {/* Simple neutral circle, replace with actual image if available */}
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              className="w-20 h-20"
              aria-label="Profile image placeholder"
            >
              <circle cx="40" cy="40" r="40" fill="#e7eefa"/>
              <ellipse cx="40" cy="33" rx="15" ry="14" fill="#c7eafd"/>
              <ellipse cx="40" cy="60" rx="23" ry="13" fill="#bfdfff"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
