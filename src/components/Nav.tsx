import { useEffect, useState } from "react";

export default function Nav() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastY || currentY < 10);
      setLastY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 border-b border-[#1f1f1f] bg-[#0d0d0d]/90 backdrop-blur-sm ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
        <span className="text-[#888] text-sm font-mono">
          <span className="hidden sm:inline">Kenneth Melendez</span>
          <span className="sm:hidden">KM</span>
        </span>
        <div className="flex gap-4 sm:gap-6 text-sm">
          <a href="#skills" className="text-[#888] hover:text-[#f0f0f0] transition-colors">
            Skills
          </a>
          <a href="#experience" className="text-[#888] hover:text-[#f0f0f0] transition-colors">
            Experience
          </a>
          <a href="#contact" className="text-[#888] hover:text-[#f0f0f0] transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
