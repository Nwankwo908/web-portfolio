import { Link } from "react-router-dom";
import mechanaAiImage from "../assets/Mechana AI (1).png";
import theProblemImg from "../assets/The Problem (2).png";
import confusedImg from "../assets/Confused (3).png";
import seachImg from "../assets/Seach.png";
import scaredImg from "../assets/Scared.png";
import solutionImg from "../assets/Solution (1).png";
import uxImg from "../assets/UX (2).png";
import uxImg4 from "../assets/UX (4).png";
import researchImg from "../assets/Research (1).png";
import motivationImg from "../assets/Motivation.png";
import knowledgeImg from "../assets/knowledge.png";
import conclusionImg from "../assets/Conclusion.png";

export default function MechanaAIPage() {
  return (
    <div className="min-h-screen pt-[136px] text-black bg-white app-lift-up">
      <div className="w-full px-4 py-10 sm:py-12 lg:py-16">
        {/* Pagination */}
        <nav className="flex items-center justify-between mb-8" aria-label="Project navigation">
          <Link
            to="/projects/photography"
            className="inline-flex items-center gap-2 text-black/70 hover:text-black text-sm sm:text-base transition-colors"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
          >
            <span className="inline-block" aria-hidden>←</span>
            Previous project
          </Link>
          <Link
            to="/projects/hd"
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
            Mechana AI
          </h1>
          <p
            className="text-lg sm:text-xl text-black/80 max-w-2xl"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif", lineHeight: 1.5 }}
          >
            When the System Broke Me, I Built a Better One
          </p>
          <p
            className="text-sm text-black/60 mt-2"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
          >
            New Product | 2026
          </p>
        </header>

        {/* Hero image — top 30% cropped */}
        <div
          className="rounded-t-[84px] overflow-hidden mb-16 w-full"
          style={{ aspectRatio: "426/192" }}
        >
          <img
            src={mechanaAiImage}
            alt="Mechana AI product overview"
            className="w-full h-full object-cover object-bottom"
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
                While working as a product designer, I experienced firsthand how financially disruptive car repairs can be. After leaving my job during a transition to startup work, I was hit with a $6,000 repair bill at the exact moment my finances were most fragile.
              </p>
              <p
                className="text-base sm:text-lg text-black/85 leading-relaxed max-w-3xl mb-4"
                style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
              >
                That experience exposed a deeper problem: most drivers aren’t trying to avoid maintaining their vehicles they simply lack clarity about what’s wrong and what their options are.
              </p>
              <p
                className="text-base sm:text-lg text-black/85 leading-relaxed max-w-3xl"
                style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
              >
                This insight became the foundation for Mechana, an AI-driven product designed to help everyday drivers understand vehicle issues and make smarter repair decisions.
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
                Research and Strategy<br />
                Design Direction<br />
                Brand Identity<br />
                AI Agent Architecture <br />  
                AI Integration <br />
                Mobile Exploration and Prototyping <br />
                

              </p>
            </div>
          </div>
        </section>

        {/* Problem & Solution placeholder */}
        <section className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 w-full mb-[42px]">
            <img src={theProblemImg} alt="" className="w-full h-auto object-cover" />
            <img src={confusedImg} alt="" className="w-full h-auto object-cover" />
            <img src={seachImg} alt="" className="w-full h-auto object-cover" />
            <img src={scaredImg} alt="" className="w-full h-auto object-cover" />
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-y-4">
            <h2
              className="font-normal text-2xl sm:text-3xl text-black"
              style={{ fontFamily: "Roboto, system-ui, sans-serif" }}
            >
              Problem & Solution
            </h2>
            <p
              className="text-base sm:text-lg text-black/85 leading-relaxed max-w-3xl"
              style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
            >
              Car diagnostics tools are designed for mechanics, not drivers. Mechana helps everyday drivers decide whether a car issue is safe to handle themselves or if they should go to a mechanic.
            </p>
          </div>
          <img
            src={solutionImg}
            alt=""
            className="w-full h-auto object-contain mt-8"
          />
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
              Research → Problem framing → Design → Testing → Iteration
            </p>
          </div>
          <img
            src={uxImg}
            alt=""
            className="w-full h-auto object-contain mt-8"
          />
          <img
            src={uxImg4}
            alt=""
            className="w-full h-auto object-contain mt-4"
          />
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-y-4 mt-10">
            <h2
              className="font-normal text-2xl sm:text-3xl text-black"
              style={{ fontFamily: "Roboto, system-ui, sans-serif" }}
            >
              Opportunity
            </h2>
            <p
              className="text-base sm:text-lg text-black/85 leading-relaxed max-w-3xl"
              style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
            >
Create a system that translates vehicle data and symptoms into plain language guidance for everyday drivers. Most people don’t want to become mechanics they simply want to avoid making an expensive mistake. I designed Mechana to reduce that decision anxiety and help users understand when they can handle an issue themselves and when it’s time to visit a mechanic.
            </p>
          </div>
          <img
            src={researchImg}
            alt=""
            className="w-full h-auto object-contain mt-8"
          />
          <img
            src={motivationImg}
            alt=""
            className="w-full h-auto object-contain mt-8"
          />
          <img
            src={knowledgeImg}
            alt=""
            className="w-full h-auto object-contain mt-8"
          />
          <img
            src={conclusionImg}
            alt=""
            className="w-full h-auto object-contain mt-8"
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
