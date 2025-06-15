
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const getInitialTheme = () =>
  localStorage.getItem("theme") ||
  (window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
    document.body.classList.add("animate-fade-in");
    const tm = setTimeout(
      () => document.body.classList.remove("animate-fade-in"),
      400
    );
    return () => clearTimeout(tm);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button
      className="p-2 rounded-full border border-[#232636] bg-[#212530]/80 flex items-center justify-center transition hover:scale-110 hover:shadow focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:ring-offset-2"
      aria-label="Toggle dark/light mode"
      onClick={toggleTheme}
      tabIndex={0}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
