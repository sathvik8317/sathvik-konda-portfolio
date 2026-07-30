
import React from "react";

const Hero = () => {
  return (
    <div className="max-w-shell mx-auto w-full flex flex-col-reverse sm:flex-row items-center gap-10 px-4 pt-8 pb-4 relative">
      <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left relative z-10">
        <div className="w-full">
          <p
            className="label-mono mb-4 animate-reveal motion-reduce:!opacity-100"
            style={{ animationDelay: "0ms" }}
          >
            Associate Developer · ISSQUARED Inc.
          </p>
          <h1
            className="font-display text-6xl sm:text-8xl font-medium mb-6 leading-[0.9] tracking-tighter text-foreground animate-reveal motion-reduce:!opacity-100"
            style={{ animationDelay: "80ms" }}
          >
            Hi, I'm <span className="text-primary">Sathvik</span>
          </h1>
          <p
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg font-normal leading-relaxed animate-reveal motion-reduce:!opacity-100"
            style={{ animationDelay: "160ms" }}
          >
            I build retrieval and machine learning systems — currently an Associate Developer at ISSQUARED Inc., with published research in interpretable fraud detection.
          </p>
          <div
            className="flex gap-4 animate-reveal motion-reduce:!opacity-100"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="#projects"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-semibold transition duration-150 hover:-translate-y-1 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              tabIndex={0}
            >
              View Projects
            </a>
            <a
              href="/uploads/Resume.pdf"
              download="Sathvik_Konda_Resume.pdf"
              className="border border-primary text-primary px-6 py-2 rounded-md font-semibold transition duration-150 hover:bg-primary/10 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              tabIndex={0}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div
        className="flex-1 flex justify-center sm:justify-end z-10 animate-reveal motion-reduce:!opacity-100"
        style={{ animationDelay: "180ms" }}
      >
        <div className="relative w-40 h-40 sm:w-48 sm:h-48">
          <div
            aria-hidden="true"
            className="absolute -inset-3 border border-primary/40 rounded-md"
          />
          {/* Corner tick marks */}
          <span aria-hidden="true" className="absolute -top-3 -left-3 w-3 h-3 border-t border-l border-primary" />
          <span aria-hidden="true" className="absolute -top-3 -right-3 w-3 h-3 border-t border-r border-primary" />
          <span aria-hidden="true" className="absolute -bottom-3 -left-3 w-3 h-3 border-b border-l border-primary" />
          <span aria-hidden="true" className="absolute -bottom-3 -right-3 w-3 h-3 border-b border-r border-primary" />
          <div className="relative overflow-hidden rounded-md w-full h-full border border-border bg-card shadow-glow">
            <img
              src="/uploads/1f011f33-bacd-464f-a132-6eb79d9cc81d.png"
              alt="Sathvik's profile"
              className="w-full h-full object-cover"
              aria-label="Profile picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
