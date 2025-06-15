
const Hero = () => (
  <div className="max-w-5xl mx-auto w-full flex flex-col-reverse sm:flex-row items-center gap-10 px-2">
    <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        <span className="text-[#B8B8CA]">Hi, I’m </span>
        <span className="text-[#00BFFF]">Sathvik</span>
      </h1>
      <p className="text-lg sm:text-xl text-[#B8B8CA] mb-6 max-w-lg">
        A Data Science enthusiast passionate about ML, Gen AI, and solving problems with code.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-[#00BFFF] text-[#17191A] px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#B8B8CA] hover:text-[#17191A] transition-colors"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          download
          className="border border-[#00BFFF] text-[#00BFFF] px-6 py-2 rounded-lg font-semibold hover:bg-[#17191A] hover:text-[#00BFFF] transition"
        >
          Download Resume
        </a>
      </div>
    </div>
    <div className="flex-1 flex justify-center sm:justify-end">
      <div className="relative">
        <div className="absolute w-44 h-44 bg-gradient-to-tr from-blue-100 to-blue-300 rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 blur-2xl opacity-60"></div>
        <div className="relative z-10 overflow-hidden rounded-full w-40 h-40 shadow-lg border-4 border-white bg-slate-200 flex items-center justify-center">
          <span className="text-slate-400 text-7xl">🧑‍💼</span>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
