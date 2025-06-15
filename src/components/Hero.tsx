
import { Button } from "@/components/ui/button";

const Hero = () => (
  <section className="relative w-full py-12 sm:py-20 overflow-hidden bg-[#003049]">
    {/* Colored accent blurred blobs */}
    <div className="absolute inset-0 -z-20 pointer-events-none">
      {/* Top left light blue blob */}
      <div className="absolute left-[-120px] top-[-80px] w-[340px] h-[320px] bg-[#2e9df6] rounded-full blur-[120px] opacity-30" />
      {/* Bottom right purple/pink blob */}
      <div className="absolute right-[-100px] bottom-[-80px] w-[360px] h-[320px] bg-[#f471b5] rounded-full blur-[120px] opacity-20" />
      {/* Center blue blob */}
      <div className="absolute right-[25vw] top-[22vh] w-[120px] h-[100px] bg-[#75e3ff] rounded-full blur-[60px] opacity-20" />
    </div>
    {/* Main Hero Content */}
    <div className="max-w-5xl mx-auto w-full flex flex-col-reverse sm:flex-row items-center justify-between gap-8 px-2">
      {/* Text & CTA */}
      <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight leading-tight drop-shadow-xl">
          <span className="text-white">Hi, I'm </span>
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white to-sky-300"
            style={{
              WebkitTextStroke: '1.2px #fff',
              textShadow: '0 2px 24px rgba(0,0,0,0.20)'
            }}
          >
            Sathvik
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-sky-50/90 mb-8 max-w-lg font-medium drop-shadow-md">
          A Data Science enthusiast passionate about ML, Gen AI, and solving problems with code.
        </p>
        <div className="flex gap-4">
          <Button
            size="lg"
            className="bg-white text-[#003049] px-7 py-3 rounded-xl shadow-xl hover:bg-blue-100/80 transition-all font-semibold text-base ring-2 ring-white/30"
          >
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
          {/* Outer accent ring with glow */}
          <span className="absolute inset-0 w-44 h-44 rounded-full bg-gradient-to-br from-yellow-200 via-sky-400/70 to-pink-400 blur-[24px] opacity-70 animate-pulse -z-10"></span>
          {/* White halo */}
          <span className="absolute inset-2 w-40 h-40 rounded-full bg-white/70 shadow-xl -z-10"></span>
          {/* Main profile placeholder */}
          <div className="relative z-10 w-40 h-40 rounded-full border-4 border-sky-100/80 bg-white/80 shadow-2xl flex items-center justify-center">
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
