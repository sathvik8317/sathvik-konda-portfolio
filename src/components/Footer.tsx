
import { Linkedin, Github } from "lucide-react";

const Footer = () => (
  <footer className="w-full py-3 bg-transparent mt-8">
    <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-1">
      <div className="flex gap-3 mb-2">
        <a
          href="https://www.linkedin.com/in/sathvik-konda-b890121a1/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="rounded-full p-2 text-[#00BFFF] hover:bg-[#22223b] focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:ring-offset-2 transition"
        >
          <Linkedin size={22} />
        </a>
        <a
          href="https://github.com/sathvik8317"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="rounded-full p-2 text-[#00BFFF] hover:bg-[#22223b] focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:ring-offset-2 transition"
        >
          <Github size={22} />
        </a>
      </div>
      <div className="text-xs text-[#B8B8CA] text-center">&copy; {new Date().getFullYear()} Sathvik Konda</div>
    </div>
  </footer>
);

export default Footer;
