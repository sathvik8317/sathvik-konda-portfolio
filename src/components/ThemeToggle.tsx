
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const THEME_KEY = "theme";

export default function ThemeToggle() {
  // Always default to null, check theme in useEffect
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  // On mount, set theme from localStorage or system preference
  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY) as "dark" | "light" | null;
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
    } else {
      const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // On theme change, update <html> class and localStorage, with smooth transition
  useEffect(() => {
    if (!theme) return;

    // Animate body background and text color changes
    document.documentElement.classList.add("transition-colors", "duration-500");
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(THEME_KEY, theme);

    // Optional: clean up transition class after animation
    const cleanup = setTimeout(() => {
      document.documentElement.classList.remove("transition-colors", "duration-500");
    }, 600);

    return () => clearTimeout(cleanup);
  }, [theme]);

  // Toggle theme handler
  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  // Render nothing until theme is determined for hydrated UI consistency
  if (!theme) return null;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-[#232636] bg-[#212530]/80 flex items-center justify-center transition hover:scale-110 hover:shadow focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:ring-offset-2"
      aria-label="Toggle dark/light mode"
      tabIndex={0}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
