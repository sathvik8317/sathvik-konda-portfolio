
import React from "react";
const Hero = () => {
  return <div className="max-w-5xl mx-auto w-full flex flex-col-reverse sm:flex-row items-center gap-10 px-2 pt-8 relative">
      {/* Geometric gradient overlay */}
      <div aria-hidden="true" className="absolute top-0 left-0 w-full h-56 z-0 pointer-events-none" style={{
      background: "linear-gradient(120deg, rgba(0,191,255,0.07) 30%, rgba(100,138,255,0.03) 100%)"
    }}>
        {/* SVG pattern for a subtle geometric effect */}
        <svg width="100%" height="100%">
          <defs>
            <pattern id="geo" width="32" height="32" patternUnits="userSpaceOnUse">
              <rect width="32" height="32" fill="none" />
              <circle cx="16" cy="16" r="1.5" fill="#00BFFF" opacity="0.08" />
              <circle cx="0" cy="0" r="1.5" fill="#00BFFF" opacity="0.06" />
              <circle cx="32" cy="32" r="1.5" fill="#00BFFF" opacity="0.07" />
              <circle cx="0" cy="32" r="1.5" fill="#00BFFF" opacity="0.07" />
              <circle cx="32" cy="0" r="1.5" fill="#00BFFF" opacity="0.06" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geo)" />
        </svg>
      </div>

      <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left relative z-10">
        <div className="w-full">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight text-foreground">
            Hi, I'm <span className="text-[#00BFFF]">Sathvik</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-lg font-normal leading-relaxed">Passionate about data science, I specialize in machine learning and generative AI to develop intelligent, impactful solutions.</p>
          <div className="flex gap-4">
            <a href="#projects" className="bg-[#00BFFF] text-background px-6 py-2 rounded-lg font-semibold shadow transition duration-150 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BFFF] focus-visible:ring-offset-2" tabIndex={0}>
              View Projects
            </a>
            <a href="/lovable-uploads/592ccce5-475f-4511-a0bd-1fb2cb6c6ed4.png" download="Sathvik_Konda_Resume.png" className="border border-[#00BFFF] text-[#00BFFF] px-6 py-2 rounded-lg font-semibold transition duration-150 hover:bg-background hover:text-[#00BFFF] hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BFFF] focus-visible:ring-offset-2" tabIndex={0}>
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center sm:justify-end z-10">
        <div className="relative">
          <div className="absolute w-44 h-44 bg-gradient-to-tr from-blue-100 to-blue-300 dark:from-blue-900/20 dark:to-blue-700/20 rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 blur-2xl opacity-60"></div>
          <div className="relative z-10 overflow-hidden rounded-full w-40 h-40 shadow-lg border-4 border-card bg-card flex items-center justify-center">
            <img src="/lovable-uploads/1f011f33-bacd-464f-a132-6eb79d9cc81d.png" alt="Sathvik's profile" className="w-full h-full object-cover" aria-label="Profile picture" />
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;
