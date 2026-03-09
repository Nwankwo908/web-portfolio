import React, { useState, useEffect } from "react";

export default function ScrollDownButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const atBottom = scrollHeight <= 0 || scrollTop >= scrollHeight - 10;
      setIsVisible(!atBottom && scrollTop > 100);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToBottom() {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={scrollToBottom}
      className={`fixed right-6 top-1/2 -translate-y-1/2 z-[9999] flex items-center justify-center rounded-full bg-[#141414] px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25)" }}
      aria-label="Scroll to bottom"
    >
      SCROLL DOWN ↓
    </button>
  );
}
