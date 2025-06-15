
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
          <span className="sr-only">LinkedIn</span>
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#B8B8CA" aria-hidden="true">
            <title>LinkedIn icon</title>
            <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6z" stroke="#B8B8CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="2" y="9" width="4" height="12" stroke="#B8B8CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="4" cy="4" r="2" stroke="#B8B8CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a
          href="https://github.com/sathvik8317"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <span className="sr-only">GitHub</span>
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#B8B8CA" aria-hidden="true">
            <title>GitHub icon</title>
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.153-1.11-1.461-1.11-1.461-.906-.62.069-.608.069-.608 1.002.07 1.53 1.028 1.53 1.028.891 1.526 2.341 1.086 2.91.831.091-.646.349-1.086.636-1.337-2.22-.253-4.555-1.112-4.555-4.945 0-1.092.39-1.987 1.03-2.688-.104-.253-.447-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.54 9.54 0 0112 6.844a9.54 9.54 0 012.5.336c1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.641.701 1.03 1.596 1.03 2.688 0 3.842-2.337 4.688-4.565 4.937.359.308.679.918.679 1.852 0 1.336-.012 2.418-.012 2.747 0 .268.18.579.688.482C19.134 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
        </a>
      </div>
      <a
        href="/resume.png"
        download="Sathvik_Konda_Resume.png"
        className="inline-block font-medium text-sm transition-colors"
        style={{ color: "#00BFFF" }}
      >
        Download Resume
      </a>
    </div>
  </footer>
);

export default Footer;
