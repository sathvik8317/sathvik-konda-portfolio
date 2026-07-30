
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const navLinks = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navLinks
      .map(link => document.getElementById(link.to))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-shell mx-auto px-4 flex items-center justify-between h-16 sm:h-20">
        <span className="font-display text-lg uppercase tracking-tight text-foreground">
          Sathvik Konda
        </span>
        <ul className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <li key={link.to}>
              <button
                className={`label-mono relative px-2 py-1 transition-colors hover:text-primary after:block after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200 hover:after:w-full after:mt-1 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                  activeSection === link.to ? "text-primary after:w-full" : "text-foreground"
                }`}
                onClick={() => scrollToSection(link.to)}
                tabIndex={0}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        {/* Mobile menu */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Toggle navigation"
        >
          <Menu size={28} className="text-foreground" />
        </button>
        {menuOpen && (
          <div className="absolute right-4 top-16 border border-border rounded-md shadow-lg w-40 flex flex-col md:hidden animate-fade-in bg-card">
            {navLinks.map(link => (
              <button
                key={link.to}
                onClick={() => {
                  setMenuOpen(false);
                  scrollToSection(link.to);
                }}
                className="label-mono py-2 px-4 text-left w-full transition-colors text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                tabIndex={0}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
