
import { Linkedin, Github } from "lucide-react";

const Footer = () => (
  <footer className="w-full mt-12 py-6 bg-[#f8fafc] border-t border-slate-200">
    <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-slate-600 text-sm">
        &copy; {new Date().getFullYear()} Sathvik Konda
      </div>
      <div className="flex gap-4">
        <a href="https://linkedin.com/in/sathvik-konda" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin size={22} className="text-slate-500 hover:text-blue-600 transition" />
        </a>
        <a href="https://github.com/sathvik8317" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github size={22} className="text-slate-500 hover:text-blue-600 transition" />
        </a>
      </div>
      <a
        href="/resume.pdf"
        download
        className="inline-block text-blue-600 hover:text-blue-800 font-medium text-sm transition"
      >
        Download Resume
      </a>
    </div>
  </footer>
);

export default Footer;
