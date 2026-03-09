import { useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { useLenis } from "lenis/react";
import zeroWaitHeroImage from "../assets/ZeroWait_True.png";
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
import zerowaitPortImg from "../assets/zerowait_Port.png";
import taskanalysisImg from "../assets/taskanalysis.png";
import sampleZW from "../components/Sample_ZW (1).png";
import sampleZW2 from "../components/Sample_ZW2 (1).png";
import zeroWaitWorkshopImg from "../assets/ZeroWait_Workship (1).png";

export default function ZeroWaitPRJPage() {
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
            to="/projects/lowes-po"
            className="inline-flex items-center gap-2 text-black/70 hover:text-black text-sm sm:text-base transition-colors"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
          >
            <span className="inline-block" aria-hidden>←</span>
            Previous project
          </Link>
          <Link
            to="/projects/lowes-b"
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
            ZeroWait | My Hackathon Journey
          </h1>
          <p
            className="text-lg sm:text-xl text-black/80 max-w-2xl"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif", lineHeight: 1.5 }}
          >
            From Jobless to Solving Healthcare Wait Times
          </p>
          <p
            className="text-sm text-black/60 mt-2"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
          >
            New Product | 2026
          </p>
        </header>

        {/* Hero image — full image with white container visible */}
        <div className="rounded-t-[84px] overflow-hidden mb-16 w-full bg-white">
          <img
            src={zeroWaitHeroImage}
            alt="zeroWaitPRJ product overview"
            className="w-full h-auto object-contain"
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
                Healthcare providers often deal with unpredictable schedules. Delays caused by emergencies, overruns, or administrative issues can disrupt the entire day of appointments.
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
                AI Agent Architecture <br />
                AI Integration <br />
                Mobile & Web Exploration and Prototyping
              </p>
            </div>
          </div>
        </section>

        {/* Problem & Solution placeholder */}
        <section className="mb-16">
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
              <strong>Patients Lose Hours Waiting.</strong> Patients are typically asked to arrive at a fixed time even though providers frequently run behind schedule. This leads to crowded waiting rooms and patients losing significant time for a single appointment.
            </p>
          </div>
          <img
            src={zerowaitPortImg}
            alt=""
            className="w-full h-auto object-contain mt-8 rounded-[48px]"
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
              <strong>Real-World Insight from a Provider.</strong> The idea for ZeroWait came from observing my mother, a healthcare provider who runs her own practice. Like many independent providers, she constantly manages delays while trying to keep patients informed and satisfied.<strong>Fix the Waiting Room Experience.</strong> If patients could be notified exactly when to arrive, unnecessary waiting could be eliminated while still allowing providers flexibility to handle delays.

            </p>
          </div>
          
          <img
            src={taskanalysisImg}
            alt=""
            className="w-full h-auto object-contain mt-8"
          />
          <img
            src={zeroWaitWorkshopImg}
            alt="ZeroWait service blueprint and user journey map"
            className="w-full h-auto object-contain mt-8"
          />
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-y-4 mt-10">
            <h2
              className="font-normal text-2xl sm:text-3xl text-black"
              style={{ fontFamily: "Roboto, system-ui, sans-serif" }}
            >
              Solutions
            </h2>
            <p
              className="text-base sm:text-lg text-black/85 leading-relaxed max-w-3xl"
              style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
            >
              ZeroWait Intelligent Arrival Notifications. ZeroWait dynamically updates appointment timing and sends real-time notifications to patients when it is time to arrive, aligning patient arrival with provider availability.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
            <img
              src={sampleZW}
              alt="ZeroWait desktop interface - Agent Response"
              className="w-full h-auto object-contain rounded-[48px]"
            />
            <img
              src={sampleZW2}
              alt="ZeroWait mobile interface - Agent Response"
              className="w-full h-auto object-contain rounded-[48px]"
            />
          </div>
        </section>

        {/* Outcome */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-y-4">
            <h2
              className="font-normal text-2xl sm:text-3xl text-black"
              style={{ fontFamily: "Roboto, system-ui, sans-serif" }}
            >
              Outcome
            </h2>
            <div className="max-w-3xl space-y-4">
              <p
                className="text-base sm:text-lg text-black/85 leading-relaxed"
                style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
              >
                <strong>A More Efficient Healthcare Visit.</strong> Patients no longer need to sit in waiting rooms or block out half their day for an appointment. Instead, they receive timely updates that allow them to arrive when the provider is ready. Time Returned to Patients and Providers.
                ZeroWait reduces waiting room congestion, improves patient satisfaction, and helps providers manage unpredictable schedules without disrupting the patient experience.
              </p>
            </div>
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
