import React from "react";

const Hero = () => (
  <section className="relative py-20 sm:py-36 flex flex-col items-center justify-center overflow-hidden">
    {/* Subtle BG Overlay/Pattern for headline */}
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:
          "linear-gradient(120deg, #17191A80 60%, #22223b3c 90%), repeating-linear-gradient(45deg, #23263611 0 2px, transparent 2px 40px)",
        opacity: 0.85,
      }}
    />
    <div className="relative z-10 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#00BFFF] mb-4 drop-shadow">
        Hi, I'm Sathvik
      </h1>
      <p className="text-lg text-[#B8B8CA] max-w-xl mx-auto mb-4">
        I build data-driven solutions with Machine Learning, Data Analysis, and beautiful visualizations to create real-world impact.
      </p>
      {/* CTA button */}
      <a
        href="#projects"
        className="inline-block bg-[#00BFFF] text-[#22223b] px-6 py-3 rounded-lg font-semibold hover:bg-[#B8B8CA] hover:text-[#17191A] transition"
      >
        View My Work
      </a>
    </div>
  </section>
);

export default Hero;
