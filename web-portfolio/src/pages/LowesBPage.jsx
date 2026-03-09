import { useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { useLenis } from "lenis/react";
import lowesBImage from "../assets/Lowes_B (3).png";
import artboardA from "../assets/Artboard a.png";
import artboardB from "../assets/Artboard b.png";
import artboardC from "../assets/Artboard c.png";
import artboardD from "../assets/Artboard d.png";
import artboardE from "../assets/Artboard e.png";
import artboardF from "../assets/Artboard f.png";
import artboardG from "../assets/Artboard g.png";
import artboardH from "../assets/Artboard h.png";
import artboardI from "../assets/Artboard i.png";
import artboardJ from "../assets/Artboard j.png";
import artboardK from "../assets/Artboard k.png";
import artboardL from "../assets/Artboard l.png";
import artboardM from "../assets/Artboard m.png";
import artboardN from "../assets/Artboard n.png";
import artboardO from "../assets/Artboard o.png";

const artboards = [
  artboardA,
  artboardB,
  artboardC,
  artboardD,
  artboardE,
  artboardF,
  artboardG,
  artboardH,
  artboardI,
  artboardJ,
  artboardK,
  artboardL,
  artboardM,
  artboardN,
  artboardO,
];

export default function LowesBPage() {
  const lenis = useLenis();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (lenis) lenis.scrollTo(0, { immediate: true });
  };

  useLayoutEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    const id1 = requestAnimationFrame(() => scrollToTop());
    const id2 = setTimeout(scrollToTop, 0);
    const id3 = setTimeout(scrollToTop, 50);
    const id4 = setTimeout(scrollToTop, 150);
    return () => {
      cancelAnimationFrame(id1);
      clearTimeout(id2);
      clearTimeout(id3);
      clearTimeout(id4);
    };
  }, [lenis]);

  return (
    <div className="min-h-screen pt-[136px] text-black bg-white app-lift-up">
      <div className="w-full px-4 py-10 sm:py-12 lg:py-16">
        {/* Pagination */}
        <nav className="flex items-center justify-between mb-8" aria-label="Project navigation">
          <Link
            to="/projects/zero-wait-prj"
            className="inline-flex items-center gap-2 text-black/70 hover:text-black text-sm sm:text-base transition-colors"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
          >
            <span className="inline-block" aria-hidden>←</span>
            Previous project
          </Link>
          <Link
            to="/projects/web-portfolio"
            className="inline-flex items-center gap-2 text-black/70 hover:text-black text-sm sm:text-base transition-colors"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
          >
            Next project
            <span className="inline-block" aria-hidden>→</span>
          </Link>
        </nav>

        {/* Hero */}
        <header className="mb-12 sm:mb-16">
          <p
            className="text-sm font-medium text-black/60 mb-2 uppercase tracking-wider"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
          >
            Case Study
          </p>
          <h1
            className="font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em] text-black mb-4"
            style={{ fontFamily: "Roboto, system-ui, sans-serif", lineHeight: 1.15 }}
          >
            Lowes Pro Dashboard
          </h1>
          <p
            className="text-lg sm:text-xl text-black/80 max-w-2xl"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif", lineHeight: 1.5 }}
          >
            One smart platform for orders, jobs, and deliveries. See how I built it.
          </p>
          <p
            className="text-sm text-black/60 mt-2"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
          >
            Redesign | 2024
          </p>
        </header>

        {/* Hero image — responsive corners like HD: smaller on mobile, 84px on larger screens */}
        <div
          className="rounded-t-[48px] sm:rounded-t-[84px] rounded-b-[16px] sm:rounded-b-[84px] overflow-hidden mb-16 w-full"
          style={{ aspectRatio: "426/192" }}
        >
          <img
            src={lowesBImage}
            alt="Lowes B product overview"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2
            className="font-normal text-2xl sm:text-3xl text-black mb-6"
            style={{ fontFamily: "Roboto, system-ui, sans-serif" }}
          >
            Project Origin
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-start">
            <div>
              <p
                className="text-base sm:text-lg text-black/85 leading-relaxed max-w-3xl mb-4"
                style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
              >
               
               I redesigned the Lowes.com account dashboard to create a more connected and intuitive customer experience. By consolidating orders, rewards, messages, and spending insights into one personalized hub, I simplified navigation, introduced clearer loyalty features, and implemented a persistent side menu for faster access. I also centralized account messaging and refined the interface to create a more cohesive and user-friendly experience.
              </p>
             
            </div>
            <div>
              <h3
                className="font-normal text-lg sm:text-xl text-black mb-0"
                style={{ fontFamily: "Roboto, system-ui, sans-serif" }}
              >
                My Role:
              </h3>
              <p
                className="text-base sm:text-lg text-black/85 leading-relaxed"
                style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
              >
               Product designer
              </p>
            </div>
          </div>
        </section>

        {/* Artboard gallery */}
        <section className="mb-16">
          <div className="flex flex-col gap-8">
            {artboards.map((src, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden w-full bg-black/5"
              >
                <img
                  src={src}
                  alt={`Lowes B design screen ${i + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CTA back to projects */}
        <section className="pt-8 border-t border-black/10">
          <Link
            to="/projects"
            state={{ scrollTo: "top" }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-zinc-800 transition-colors"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
          >
            View all projects
            <span className="inline-block" aria-hidden>→</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
