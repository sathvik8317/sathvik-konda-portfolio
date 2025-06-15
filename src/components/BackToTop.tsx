
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", toggleVisible, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-[#22223b] shadow-xl border border-[#00BFFF80] p-2 hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00BFFF]"
      aria-label="Back to top"
    >
      <ArrowUp className="text-[#00BFFF] w-6 h-6" aria-hidden="true" />
    </button>
  ) : null;
};

export default BackToTop;
