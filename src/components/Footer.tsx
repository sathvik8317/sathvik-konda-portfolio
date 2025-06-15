
import { Linkedin, Github } from "lucide-react";

const Footer = () => (
  <footer className="w-full mt-12 py-6" style={{ background: "#17191A" }}>
    <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-sm" style={{ color: "#B8B8CA" }}>
        &copy; {new Date().getFullYear()} Sathvik Konda
      </div>
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/sathvik-konda-b890121a1/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={22} style={{ color: "#B8B8CA" }} className="hover:text-[#00BFFF] transition-colors" />
        </a>
        <a
          href="https://github.com/sathvik8317"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github size={22} style={{ color: "#B8B8CA" }} className="hover:text-[#00BFFF] transition-colors" />
        </a>
      </div>
      <a
        href="/resume.pdf"
        download
        className="inline-block font-medium text-sm transition-colors"
        style={{ color: "#00BFFF" }}
      >
        Download Resume
      </a>
    </div>
  </footer>
);

export default Footer;
