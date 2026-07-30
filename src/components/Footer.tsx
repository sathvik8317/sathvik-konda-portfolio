
import { Linkedin, Github } from "lucide-react";

const Footer = () => (
  <footer className="w-full pt-6 pb-6 bg-transparent mt-8">
    <div className="max-w-shell mx-auto px-4">
      <div className="rule-scan mb-6" aria-hidden="true" />
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/sathvik-konda-b890121a1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-md p-2 text-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/sathvik8317"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-md p-2 text-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition"
          >
            <Github size={22} />
          </a>
        </div>
        <div className="label-mono">05 &mdash; END OF FILE</div>
        <div className="text-xs text-muted-foreground text-center">&copy; {new Date().getFullYear()} Sathvik Konda</div>
      </div>
    </div>
  </footer>
);

export default Footer;
