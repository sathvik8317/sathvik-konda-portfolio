
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const THEME_KEY = "lovable-theme";
const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const ModeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(THEME_KEY) || getSystemTheme();
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return (
    <button
      aria-label="Toggle dark mode"
      className="ml-2 p-2 rounded transition bg-[#22223b] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-[#22223b] focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
      onClick={() => setTheme(t => (t === "dark" ? "light" : "dark"))}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ModeToggle;
