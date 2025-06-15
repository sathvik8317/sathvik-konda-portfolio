
const Hero = () => (
  <div className="max-w-5xl mx-auto w-full flex flex-col-reverse sm:flex-row items-center gap-10 px-2">
    <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        Hi, I’m <span className="text-blue-600">Sathvik</span>
      </h1>
      <p className="text-lg sm:text-xl text-slate-700 mb-6 max-w-lg">
        A Data Science enthusiast passionate about ML, Gen AI, and solving problems with code.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          download
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition"
        >
          Download Resume
        </a>
      </div>
    </div>
    <div className="flex-1 flex justify-center sm:justify-end">
      {/* Profile Image Placeholder */}
      <div className="relative">
        <div className="absolute w-44 h-44 bg-gradient-to-tr from-blue-100 to-blue-300 rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 blur-2xl opacity-60"></div>
        <div className="relative z-10 overflow-hidden rounded-full w-40 h-40 shadow-lg border-4 border-white bg-slate-200 flex items-center justify-center">
          {/* Replace with actual profile image if available */}
          <span className="text-slate-400 text-7xl">🧑‍💼</span>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
