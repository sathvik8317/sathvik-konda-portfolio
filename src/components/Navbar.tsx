import { useState } from "react";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

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

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-30"
      style={{
        background: "#212530",
        boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
        borderBottom: "1px solid #232636"
      }}
    >
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16 sm:h-20">
        <div className="flex items-center gap-3">
          <span className="font-bold text-lg tracking-tight" style={{ color: "#E5E5F0" }}>
            Sathvik Konda
          </span>
          <ThemeToggle />
        </div>
        <ul className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <li key={link.to}>
              <button
                className="relative px-2 py-1 font-medium transition-colors after:block after:w-0 after:h-0.5 after:bg-[#00BFFF] after:transition-all after:duration-200 hover:after:w-full after:mt-1 focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:ring-offset-2"
                style={{
                  color: "#E5E5F0"
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#00BFFF")}
                onMouseLeave={e => (e.currentTarget.style.color = "#E5E5F0")}
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
          <Menu size={28} color="#E5E5F0" />
        </button>
        {menuOpen && (
          <div
            className="absolute right-4 top-16 border rounded-lg shadow-lg w-40 flex flex-col md:hidden animate-fade-in"
            style={{ background: "#212530", boxShadow: "0 2px 8px rgba(0,0,0,0.5)", borderColor: "#232636" }}
          >
            {navLinks.map(link => (
              <button
                key={link.to}
                onClick={() => {
                  setMenuOpen(false);
                  scrollToSection(link.to);
                }}
                className="py-2 px-4 text-left w-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:ring-offset-2"
                style={{
                  color: "#E5E5F0"
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#00BFFF")}
                onMouseLeave={e => (e.currentTarget.style.color = "#E5E5F0")}
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
