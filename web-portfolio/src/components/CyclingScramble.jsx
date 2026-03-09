import { useEffect, useState, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const WORDS = ["SMEs.", "Large Enterprises.", "Global Enterprises."];

export default function CyclingScramble({ className = "", active = true }) {
  const [display, setDisplay] = useState(WORDS[0]);
  const wordIndex = useRef(0);
  const intervalRef = useRef(null);

  const scrambleTo = (target) => {
    let iteration = 0;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDisplay(
        target.split("").map((char, i) => {
          if (char === " ") return " ";
          if (i < iteration) return target[i];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("")
      );
      if (iteration >= target.length) clearInterval(intervalRef.current);
      iteration += 0.5;
    }, 30);
  };

  useEffect(() => {
    if (!active) {
      clearInterval(intervalRef.current);
      setDisplay(WORDS[wordIndex.current]);
      return;
    }
    const cycle = setInterval(() => {
      wordIndex.current = (wordIndex.current + 1) % WORDS.length;
      scrambleTo(WORDS[wordIndex.current]);
    }, 2500);
    return () => clearInterval(cycle);
  }, [active]);

  return <span className={`text-[#d30600] ${className}`}>{display}</span>;
}