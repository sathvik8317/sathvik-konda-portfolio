
const SkipToContent = () => (
  <a
    href="#maincontent"
    className="absolute left-4 top-2 bg-[#00BFFF] text-[#22223b] rounded px-4 py-1 z-50 transition -translate-y-16 focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#00BFFF] shadow"
    style={{clipPath: "inset(0 round 0.5em)"}} // Rounded reveal
  >
    Skip to content
  </a>
);
export default SkipToContent;
