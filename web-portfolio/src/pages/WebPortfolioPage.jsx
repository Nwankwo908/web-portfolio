import { Link } from "react-router-dom";
import webPortfolioImage from "../assets/Web_Portfolio.png";
import fubImage from "../assets/FUB.png";
import outcomeGif from "../assets/test-text-xray.gif";
import outcomeScreenshot from "../assets/outcome-screenshot.png";

export default function WebPortfolioPage() {
  return (
    <div className="min-h-screen pt-[136px] text-black bg-white app-lift-up">
      <div className="w-full px-4 py-10 sm:py-12 lg:py-16">
        {/* Pagination */}
        <nav className="flex items-center justify-between mb-8" aria-label="Project navigation">
          <Link
            to="/projects/lowes-b"
            className="inline-flex items-center gap-2 text-black/70 hover:text-black text-sm sm:text-base transition-colors"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
          >
            <span className="inline-block" aria-hidden>←</span>
            Previous project
          </Link>
          <Link
            to="/projects/spend-analytics"
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
            No Code, No Problem
          </h1>
          <p
            className="text-lg sm:text-xl text-black/80 max-w-2xl"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif", lineHeight: 1.5 }}
          >
           How I Built a Top-Tier Website with AI-Assisted Frontend Tools
          </p>
          <p
            className="text-sm text-black/60 mt-2"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
          >
            New Product | 2026
          </p>
        </header>

        {/* Hero image — responsive corners like HD */}
        <div
          className="rounded-t-[48px] sm:rounded-t-[84px] rounded-b-[16px] sm:rounded-b-[84px] overflow-hidden mb-16 w-full"
          style={{ aspectRatio: "426/192" }}
        >
          <img
            src={webPortfolioImage}
            alt="Web Portfolio project overview"
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
                I rebuilt the project card system on my portfolio to improve visual consistency, layout stability, and overall design quality. The goal was to create a scalable card component that aligned with enterprise-level design standards while maintaining flexibility for different project types.
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
                UX / UI Designer <br />
                Assisted Frontend Developer
            
              </p>
            </div>
          </div>
          
        </section>

        {/* Problem & Solution */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-y-4">
            <h2
              className="font-normal text-2xl sm:text-3xl text-black"
              style={{ fontFamily: "Roboto, system-ui, sans-serif" }}
            >
              Problem 
            </h2>
            <p
              className="text-base sm:text-lg text-black/85 leading-relaxed max-w-3xl"
              style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
            >
              The original project cards looked visually inconsistent and were difficult to maintain. Two main issues were happening: <strong>Visual inconsistency.</strong> Images were cropped unpredictably due to object-cover behavior, causing screenshots to feel cramped or zoomed. <strong>Structural instability.</strong> The component had evolved through multiple iterations. Layout wrappers, height constraints, and media containers were layered together, making the system fragile and difficult to control.At a certain point, it became clear that the problem wasn’t just visual styling. The component architecture itself was limiting the design outcome.
            </p>
          </div>
          <img
            src={fubImage}
            alt=""
            className="w-full h-auto object-contain mt-8 rounded-[48px]"
          />
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-y-4 mt-10">
            <h2
              className="font-normal text-2xl sm:text-3xl text-black"
              style={{ fontFamily: "Roboto, system-ui, sans-serif" }}
            >
             Solution
            </h2>
            <p
              className="text-base sm:text-lg text-black/85 leading-relaxed max-w-3xl"
              style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
            >
              Rather than continuing to patch the existing component, I decided to rebuild the project cards from scratch. The previous structure had accumulated multiple layout wrappers, height constraints, and media behaviors that were working against the design goal. Rebuilding the component allowed me to reset the layout architecture, establish consistent card proportions, intentionally control how images rendered, and align spacing and hierarchy across the grid. This approach ensured the cards could function as part of a scalable system rather than a fragile component being repeatedly adjusted.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-y-4 mt-10">
            <h2
              className="font-normal text-2xl sm:text-3xl text-black"
              style={{ fontFamily: "Roboto, system-ui, sans-serif" }}
            >
              The Outcome
            </h2>
            <p
              className="text-base sm:text-lg text-black/85 leading-relaxed max-w-3xl"
              style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
            >
              The rebuilt component system produced a more consistent visual presentation across all project cards and eliminated the unpredictable cropping and spacing issues seen previously. By restructuring the component architecture, the layout became cleaner and easier to maintain while also improving scalability for future portfolio additions. Instead of relying on one-off styling adjustments, the final system functions as a reusable design pattern that can support additional projects without introducing visual inconsistencies.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-y-4 mt-10">
            <h2
              className="font-normal text-2xl sm:text-3xl text-black"
              style={{ fontFamily: "Roboto, system-ui, sans-serif" }}
            >
              What This Demonstrates
            </h2>
            <p
              className="text-base sm:text-lg text-black/85 leading-relaxed max-w-3xl"
              style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
            >
              This project demonstrates my ability to identify underlying structural issues rather than treating symptoms at the surface level. By recognizing that the component architecture was limiting the design outcome, I was able to make the decision to refactor rather than continue patching the existing solution. The process reflects a systems-thinking approach to product design, where layout logic, component structure, and visual outcomes are considered together to create scalable and maintainable UI systems.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-y-4 mt-10">
            
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
