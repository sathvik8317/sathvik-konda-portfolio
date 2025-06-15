import { Download } from "lucide-react";
const Hero = () => <section className="w-full py-12 sm:py-20 px-2 bg-[#222222]">
    <div className="max-w-5xl mx-auto flex flex-col-reverse sm:flex-row items-center gap-10">
      <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-white tracking-tight drop-shadow">
          Hi, I’m <span className="text-[#4ea8de]">Sathvik</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-200 mb-7 max-w-lg font-medium">
          A Data Science enthusiast passionate about ML, Gen AI, and solving problems with code.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="bg-[#4ea8de] hover:bg-[#009ddc] text-white px-7 py-2.5 rounded-lg font-semibold shadow-lg transition duration-200 text-base focus:outline-none focus:ring-2 focus:ring-[#4ea8de] focus:ring-offset-2">
            View Projects
          </a>
          <a href="/resume.pdf" download className="flex items-center gap-2 border-2 border-[#4ea8de] text-[#4ea8de] px-6 py-2.5 rounded-lg font-semibold transition duration-200 hover:bg-[#22223b]/70 hover:text-white hover:border-white focus:outline-none focus:ring-2 focus:ring-[#4ea8de] focus:ring-offset-2">
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center sm:justify-end">
        <div className="relative">
          {/* Decorative blob */}
          <div className="absolute w-44 h-44 bg-gradient-to-tr from-[#4ea8de] via-[#4f5dab] to-[#22223b] rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 blur-2xl opacity-60"></div>
          <div className="relative z-10 overflow-hidden rounded-full w-40 h-40 shadow-2xl border-4 border-white bg-white flex items-center justify-center">
            <span className="text-[#4ea8de] text-7xl drop-shadow">🧑‍💼</span>
          </div>
        </div>
      </div>
    </div>
  </section>;
export default Hero;