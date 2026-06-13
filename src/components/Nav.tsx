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
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 border-b border-white/[0.06] bg-black/40 backdrop-blur-md ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <span className="text-[#909090] text-sm font-mono shrink-0">
          <span className="hidden sm:inline">Kenneth Melendez</span>
          <span className="sm:hidden">KM</span>
        </span>
        <div className="flex gap-3 sm:gap-6 text-xs sm:text-sm overflow-x-auto">
          <a href="#about" className="text-[#909090] hover:text-white transition-colors py-1 whitespace-nowrap">About</a>
          <a href="#skills" className="text-[#909090] hover:text-white transition-colors py-1 whitespace-nowrap">Skills</a>
          <a href="#experience" className="text-[#909090] hover:text-white transition-colors py-1 whitespace-nowrap">Experience</a>
          <a href="#hobbies" className="hidden sm:block text-[#909090] hover:text-white transition-colors py-1 whitespace-nowrap">Hobbies</a>
          <a href="#contact" className="text-[#909090] hover:text-white transition-colors py-1 whitespace-nowrap">Contact</a>
        </div>
      </div>
    </nav>
  );
}
