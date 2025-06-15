
import { useState } from "react";
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-[#f8fafc]/70 backdrop-blur border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16 sm:h-20">
        <div className="font-bold text-lg tracking-tight text-slate-900">Sathvik Konda</div>
        <ul className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <li key={link.to}>
              <button
                className="relative px-2 py-1 text-slate-700 font-medium hover:text-blue-600 transition-colors after:block after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-200 hover:after:w-full after:mt-1"
                onClick={() => scrollToSection(link.to)}
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
          <Menu size={28} />
        </button>
        {menuOpen && (
          <div className="absolute right-4 top-16 bg-white border rounded-lg shadow-lg w-40 flex flex-col md:hidden animate-fade-in">
            {navLinks.map(link => (
              <button
                key={link.to}
                onClick={() => {
                  setMenuOpen(false);
                  scrollToSection(link.to);
                }}
                className="py-2 px-4 text-slate-700 hover:text-blue-600 text-left w-full"
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
