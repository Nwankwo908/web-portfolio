import { Link } from "react-router-dom";
import lowesPoImage from "../assets/Lowes_PO (1).png";
import artboard1 from "../assets/Artboard 1.png";
import artboard2 from "../assets/Artboard 2.png";
import artboard3 from "../assets/Artboard 3.png";
import artboard4 from "../assets/Artboard 4.png";
import artboard5 from "../assets/Artboard 5.png";
import artboard6 from "../assets/Artboard 6.png";
import artboard7 from "../assets/Artboard 7.png";
import artboard9 from "../assets/Artboard 9.png";
import artboard10 from "../assets/Artboard 10.png";
import artboard12 from "../assets/Artboard 12.png";
import artboard13 from "../assets/Artboard 13.png";
import artboard14 from "../assets/Artboard 14.png";

const artboards = [
  artboard1,
  artboard2,
  artboard3,
  artboard4,
  artboard5,
  artboard6,
  artboard7,
  artboard9,
  artboard10,
  artboard12,
  artboard13,
  artboard14,
];

export default function LowesPoPage() {
  return (
    <div className="min-h-screen pt-[136px] text-black bg-white app-lift-up">
      <div className="w-full px-4 py-10 sm:py-12 lg:py-16">
        {/* Pagination */}
        <nav className="flex items-center justify-between mb-8" aria-label="Project navigation">
          <Link
            to="/projects/hd"
            className="inline-flex items-center gap-2 text-black/70 hover:text-black text-sm sm:text-base transition-colors"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
          >
            <span className="inline-block" aria-hidden>←</span>
            Previous project
          </Link>
          <Link
            to="/projects/zero-wait-prj"
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
            PO Manager
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
            New Product | 2025
          </p>
        </header>

        {/* Hero image — responsive corners like HD: smaller on mobile, 84px on larger screens */}
        <div
          className="rounded-t-[48px] sm:rounded-t-[84px] rounded-b-[16px] sm:rounded-b-[84px] overflow-hidden mb-16 w-full"
          style={{ aspectRatio: "426/192" }}
        >
          <img
            src={lowesPoImage}
            alt="Lowes Po product overview"
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
                I helped design a platform that makes it easier for pros to manage orders and jobs all in one place. The result? Better tracking, faster quotes, and a smoother workflow, driving big adoption and over $30M in projected revenue.
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

        {/* Problem & Solution */}

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
                  alt={`Lowes Po screen ${i + 1}`}
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
