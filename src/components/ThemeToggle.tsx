import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
const THEME_KEY = "theme";

// Helper: Set 'dark' class on <html> synchronously
function setHtmlClass(theme: "dark" | "light") {
  if (typeof window !== "undefined") {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
}

// Helper: Determine system or stored theme
function getPreferredTheme(): "dark" | "light" {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(THEME_KEY) as "dark" | "light" | null;
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(getPreferredTheme());

  // Update <html> and localStorage whenever theme changes
  useEffect(() => {
    setHtmlClass(theme);
    localStorage.setItem(THEME_KEY, theme);
    // Smooth fade for transition
    document.documentElement.classList.add("transition-colors", "duration-500");
    const t = setTimeout(() => {
      document.documentElement.classList.remove("transition-colors", "duration-500");
    }, 400);
    return () => clearTimeout(t);
  }, [theme]);

  // On mount, if system theme changes, sync it (optional)
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    // Only listen if no theme is stored
    if (!localStorage.getItem(THEME_KEY)) {
      const handleChange = (e: MediaQueryListEvent) => {
        setTheme(e.matches ? "dark" : "light");
      };
      mql.addEventListener?.("change", handleChange);
      return () => mql.removeEventListener?.("change", handleChange);
    }
  }, []);
  function toggleTheme() {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  }
  return;
}