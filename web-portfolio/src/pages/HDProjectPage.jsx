import { Link } from "react-router-dom";
import hdImage from "../assets/HD.png";
import outcomeGif from "../assets/test-text-xray.gif";
import outcomeScreenshot from "../assets/outcome-screenshot.png";

export default function HDProjectPage() {
  return (
    <div className="min-h-screen pt-[136px] text-black bg-white app-lift-up">
      <div className="w-full px-4 py-10 sm:py-12 lg:py-16">
        {/* Pagination */}
        <nav className="flex items-center justify-between mb-8" aria-label="Project navigation">
          <Link
            to="/projects/mechana-ai"
            className="inline-flex items-center gap-2 text-black/70 hover:text-black text-sm sm:text-base transition-colors"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
          >
            <span className="inline-block" aria-hidden>←</span>
            Previous project
          </Link>
          <Link
            to="/projects/lowes-po"
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
            Home Depot + Automation
          </h1>
          <p
            className="text-lg sm:text-xl text-black/80 max-w-2xl"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif", lineHeight: 1.5 }}
          >
            Driving Operational Wins Through AI-Powered Automation
          </p>
          <p
            className="text-sm text-black/60 mt-2"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
          >
            New Product | 2026
          </p>
        </header>

        {/* Hero image — corners like Mechana AI, smaller radius on small screens */}
        <div
          className="rounded-t-[48px] sm:rounded-t-[84px] rounded-b-[16px] sm:rounded-b-[84px] overflow-hidden mb-16 w-full"
          style={{ aspectRatio: "426/192" }}
        >
          <img
            src={hdImage}
            alt="Home Depot project overview"
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
                Enterprise UX leadership needed better visibility into how design work was impacting operations across multiple teams.
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
                UX Designer & Strategist<br />
                Data Visibility Initiative<br />
                AI agent Architecture<br />
                AI Integration
              </p>
            </div>
          </div>
          <img
            src={outcomeGif}
            alt="Project overview"
            className="w-full h-auto object-contain mt-8 rounded-t-[84px] rounded-b-[76px] overflow-hidden border-2 border-black/15"
          />
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
              <strong>No Clear View of Design’s Operational Impact</strong> Design contributions were happening across many teams, but leadership had no centralized way to measure patterns, understand operational impact, or track how design support influenced broader organizational outcomes.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-y-4 mt-10">
            <h2
              className="font-normal text-2xl sm:text-3xl text-black"
              style={{ fontFamily: "Roboto, system-ui, sans-serif" }}
            >
              Process
            </h2>
            <p
              className="text-base sm:text-lg text-black/85 leading-relaxed max-w-3xl"
              style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
            >
              <strong>Value Scoreboard Dashboard</strong> I created a centralized “Value Scoreboard” dashboard that gave Directors and VPs a clear view of operational signals and patterns related to design work across the organization.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-y-4 mt-10">
            <h2
              className="font-normal text-2xl sm:text-3xl text-black"
              style={{ fontFamily: "Roboto, system-ui, sans-serif" }}
            >
              Technical Challenge
            </h2>
            <p
              className="text-base sm:text-lg text-black/85 leading-relaxed max-w-3xl"
              style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
            >
              <strong>Automation Blocked by Security Constraints.</strong> The original integration using Power Automate, Google Sheets, Slack and Airtable was blocked by system security restrictions, preventing automated data syncing.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-y-4 mt-10">
            <h2
              className="font-normal text-2xl sm:text-3xl text-black"
              style={{ fontFamily: "Roboto, system-ui, sans-serif" }}
            >
              Innovation
            </h2>
            <p
              className="text-base sm:text-lg text-black/85 leading-relaxed max-w-3xl"
              style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
            >
              <strong>AI-Driven Data Pipeline.</strong>To solve the issue, I redesigned the system using AI agents and JavaScript to automatically capture, filter, and structure relevant Slack data before sending it to the dashboard.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-y-4 mt-10">
            <h2
              className="font-normal text-2xl sm:text-3xl text-black"
              style={{ fontFamily: "Roboto, system-ui, sans-serif" }}
            >
              Outcome
            </h2>
            <p
              className="text-base sm:text-lg text-black/85 leading-relaxed max-w-3xl"
              style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
            >
              <strong>Leadership Visibility & Better Forecasting.</strong> The new pipeline enabled reliable data tracking and gave leadership a real-time view of design support patterns, helping them measure operational impact and make more informed forecasting decisions.
            </p>
          </div>
          <img
            src={outcomeScreenshot}
            alt="Outcome screenshot"
            className="w-full h-auto object-contain mt-8 rounded-t-[84px] rounded-b-[76px] overflow-hidden"
          />
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
