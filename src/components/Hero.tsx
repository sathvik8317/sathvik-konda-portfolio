
import { Button } from "@/components/ui/button";

const Hero = () => (
  <section className="relative w-full py-12 sm:py-20 overflow-hidden">
    {/* Modern colorful background */}
    <div 
      className="absolute inset-0 -z-20"
      aria-hidden="true"
    >
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#3b82f6] via-[#6366f1] to-[#b5179e] opacity-90" />
      {/* Abstract blurred blobs */}
      <div className="absolute left-[-100px] top-[-80px] w-[400px] h-[400px] bg-[#e0e7ff] rounded-full blur-[120px] opacity-30" />
      <div className="absolute right-[-120px] bottom-[-60px] w-[360px] h-[340px] bg-[#f471b5] rounded-full blur-[120px] opacity-30" />
      <div className="absolute right-[10vw] top-[14vh] w-[140px] h-[140px] bg-[#38bdf8] rounded-full blur-[60px] opacity-40" />
    </div>
    {/* Main Hero Content */}
    <div className="max-w-5xl mx-auto w-full flex flex-col-reverse sm:flex-row items-center justify-between gap-8 px-2">
      {/* Text & CTA */}
      <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 tracking-tight leading-tight drop-shadow-md">
          Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white to-sky-300 animate-gradient-x">Sathvik</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-100/90 mb-8 max-w-lg font-medium drop-shadow">
          A Data Science enthusiast passionate about ML, Gen AI, and solving problems with code.
        </p>
        <div className="flex gap-4">
          <Button size="lg" className="bg-white text-slate-900 px-7 py-3 rounded-xl shadow-lg hover:bg-blue-100/80 transition-all font-semibold text-base ring-2 ring-white/40">
            <a href="#projects">View Projects</a>
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white border-2 text-white px-7 py-3 rounded-xl font-semibold text-base hover:bg-white/10 transition-all hover:text-yellow-200 ring-2 ring-white/20"
            asChild
          >
            <a href="/resume.pdf" download>Download Resume</a>
          </Button>
        </div>
      </div>
      {/* Profile Circle */}
      <div className="flex-1 flex justify-center sm:justify-end items-start mb-10 sm:mb-0 relative z-10">
        <div className="relative">
          {/* Outer animated colored accent ring */}
          <span className="absolute inset-0 w-44 h-44 rounded-full bg-gradient-to-br from-[#b5179e] via-[#3b82f6] to-[#38bdf8] blur-[16px] opacity-80 animate-pulse -z-10"></span>
          {/* White halo */}
          <span className="absolute inset-2 w-40 h-40 rounded-full bg-white/80 shadow-xl -z-10"></span>
          {/* Main profile placeholder */}
          <div className="relative z-10 w-40 h-40 rounded-full border-4 border-blue-200 bg-white/60 shadow-xl flex items-center justify-center">
            {/* Replace this svg with your photo in production */}
            <svg
              width="90"
              height="90"
              viewBox="0 0 80 80"
              fill="none"
              className="w-24 h-24"
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
