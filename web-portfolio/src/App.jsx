import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLenis } from "lenis/react";
import ProjectCard from "./components/ProjectCard";
import mechanaAiImage from "./assets/Mechana AI (1).png";
import lowesPoImage from "./assets/Lowes_PO (1).png";
import lowesBImage from "./assets/Lowes_B (3).png";
import spendAnalyticsImage from "./assets/Spend_Analytics.png";
import profileImage from "./assets/ProfilePic.png";
import CyclingScramble from "./components/CyclingScramble";
import hdLogo from "./assets/HD 1.png";
import krogerIcon from "./assets/Kroger_Icon.png";
import dellIcon from "./assets/Dell_Icon.png";
import lowesIcon from "./assets/Lowes_Icon.png";
import mechanaIcon from "./assets/Mechana_Icon.png";
import microsoftLogo from "./assets/Microsoft.png";
import zeroWaitIcon from "./assets/ZeroWait.png";
const TESTIMONIALS = [
  {
    quote: "He thinks things through properly, this is proper solution design, not just rush in and light up some features that normally ends in a crappy app",
    name: "Alex Powell",
    role: "Principal Design Director at Microsoft",
  },
  {
    quote: "He proactively researched and implemented AI-driven approaches that significantly simplified the process for our team. He is a strong designer who understands the process well.",
    name: "Aleksandra Lucaci",
    role: "Product/UX Designer at Home Depot",
  },
];

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const lenis = useLenis();
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [heroInView, setHeroInView] = useState(true);
  const [expertiseInView, setExpertiseInView] = useState(false);
  const heroRef = useRef(null);
  const expertiseRef = useRef(null);
  const didFooterScrollRef = useRef(false);
  const testimonial = TESTIMONIALS[testimonialIndex];

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (lenis) lenis.scrollTo(0, { immediate: true });
  };

  const NAVBAR_OFFSET = 160; // clear fixed navbar (main uses pt-[136px]) + a bit of space above title
  // Lenis: negative offset = scroll less so element sits below navbar
  const scrollToExpertise = () => {
    const el = expertiseRef.current || document.getElementById("expertise");
    if (!el) return;
    if (lenis) {
      try {
        lenis.scrollTo("#expertise", { offset: -NAVBAR_OFFSET });
      } catch {
        const targetY = el.getBoundingClientRect().top + (window.scrollY ?? document.documentElement.scrollTop) - NAVBAR_OFFSET;
        window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
      }
    } else {
      const targetY = el.getBoundingClientRect().top + (window.scrollY ?? document.documentElement.scrollTop) - NAVBAR_OFFSET;
      window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
    }
  };
  const scrollToContact = () => {
    // Scroll to "Let's talk!" section (#contact) with navbar offset
    const el = document.getElementById("contact") || document.getElementById("footer");
    if (!el) return;
    if (lenis) {
      try {
        const selector = document.getElementById("contact") ? "#contact" : "#footer";
        lenis.scrollTo(selector, { offset: -NAVBAR_OFFSET });
      } catch {
        const targetY = el.getBoundingClientRect().top + (window.scrollY ?? document.documentElement.scrollTop) - NAVBAR_OFFSET;
        window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
      }
    } else {
      const targetY = el.getBoundingClientRect().top + (window.scrollY ?? document.documentElement.scrollTop) - NAVBAR_OFFSET;
      window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
    }
  };

  // Scroll to top when navigating to home (from another page); skip if we're scrolling to footer or expertise
  useLayoutEffect(() => {
    if (location.state?.scrollTo === "expertise") {
      scrollToExpertise();
      return;
    }
    if (location.state?.scrollTo === "footer") {
      scrollToContact();
      return;
    }
    if (!didFooterScrollRef.current) scrollToTop();
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo === "footer" || location.state?.scrollTo === "expertise") return;
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

  // Handle Contact (scroll to footer), Home (scroll to top), or About (scroll to expertise) intent
  useEffect(() => {
    if (location.state?.scrollTo === "footer") {
      didFooterScrollRef.current = true;
      scrollToContact();
      const t1 = requestAnimationFrame(() => scrollToContact());
      const t2 = setTimeout(scrollToContact, 50);
      const t3 = setTimeout(scrollToContact, 200);
      const clearState = () => navigate(".", { replace: true, state: {} });
      const t4 = setTimeout(clearState, 100);
      return () => {
        cancelAnimationFrame(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    }
    if (location.state?.scrollTo === "expertise") {
      scrollToExpertise();
      const t1 = requestAnimationFrame(() => scrollToExpertise());
      const t2 = setTimeout(scrollToExpertise, 50);
      const t3 = setTimeout(scrollToExpertise, 200);
      const clearState = () => navigate(".", { replace: true, state: {} });
      const t4 = setTimeout(clearState, 100);
      return () => {
        cancelAnimationFrame(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    }
    if (location.state?.scrollTo === "top") {
      scrollToTop();
      navigate(".", { replace: true, state: {} });
      return;
    }
    didFooterScrollRef.current = false;
  }, [location.state, navigate, lenis]);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      {
        threshold: 0,
        rootMargin: "0px 0px -50% 0px",
      }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = expertiseRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setExpertiseInView(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goPrev = () => {
    setTestimonialIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  };
  const goNext = () => {
    setTestimonialIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="min-h-screen bg-black text-white relative app-fade-in">
      <main className="pt-[136px]">
        {/* Hero */}
        <section ref={heroRef} id="home" className="relative w-full px-4 pt-[80px] pb-[40px]">
        <h1 className="text-[56px] md:text-[118px] min-[1028px]:text-[180px] font-bold text-white leading-[0.98] tracking-[-0.02em] mb-[40px]">
          Digital products. Built to Scale. For <CyclingScramble active={heroInView} />
        </h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-4 max-w-md">
              <p className="text-white font-bold text-2xl mb-2">Let&apos;s Talk</p>
              <a
                href="mailto:nwankwo908@gmail.com"
                className="text-white/90 text-lg hover:text-white transition-colors break-all"
              >
                nwankwo908@gmail.com
              </a>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex flex-row gap-4 items-start">
              <img
                src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3OXVmbWg5cTR6c2Fsa2d5YTVnazk4MGptbXJteW9sbGJrdmN5Mjd3OSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cYf4OoUU4YZ0wIVWk3/giphy.gif"
                alt=""
                className="shrink-0 w-24 h-24 rounded-lg object-cover self-start"
              />
              <p className="text-white text-lg leading-[1.4] tracking-[-0.01em] w-[470px] max-w-full min-h-[156px] mt-0">
                Hi, I&apos;m Osita Nwankwo, a UX designer deeply immersed in AI and emerging technologies, with a strong focus on AI agents, integrations, and scalable solutions.
              </p>
            </div>
          </div>
          {/* Scroll button – in flow on small screens so it never covers text; absolute on md+ */}
          <a
            href="#expertise"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="mt-8 md:mt-0 md:absolute md:bottom-4 md:right-8 z-10 inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0045bf] text-white font-medium text-sm hover:opacity-90 transition-opacity shadow-xl w-fit"
            aria-label="Scroll to Expertise"
          >
            SCROLL DOWN ↓
          </a>
        </section>

        {/* Clients */}
        <section className="w-full py-12 lg:py-16 border-t border-white/10 overflow-hidden">
  <h2 className="text-2xl font-medium text-white tracking-tight mb-8 px-4">
    Some of our clients
  </h2>
  <div className="overflow-hidden w-full">
    <div className="flex animate-ticker whitespace-nowrap">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex items-center shrink-0"
          aria-hidden={i > 0 ? "true" : undefined}
          style={{ gap: "4rem" , paddingRight: "4rem" }}
        >
          <img src={dellIcon} alt={i === 0 ? "Dell" : ""} className="h-16 lg:h-20 w-auto object-contain opacity-90 shrink-0" />
          <img src={lowesIcon} alt={i === 0 ? "Lowe's" : ""} className="h-16 lg:h-20 w-auto object-contain opacity-90 shrink-0" />
          <img src={hdLogo} alt={i === 0 ? "The Home Depot" : ""} className="h-16 lg:h-20 w-auto object-contain opacity-90 shrink-0" />
          <img src={mechanaIcon} alt={i === 0 ? "Mechana AI" : ""} className="h-16 lg:h-20 w-auto object-contain opacity-90 shrink-0" />
          <img src={microsoftLogo} alt={i === 0 ? "Microsoft" : ""} className="h-16 lg:h-20 w-auto object-contain opacity-90 shrink-0" />
          <img src={krogerIcon} alt={i === 0 ? "Kroger" : ""} className="h-16 lg:h-20 w-auto object-contain opacity-90 shrink-0" />
          <img src={zeroWaitIcon} alt={i === 0 ? "ZeroWait" : ""} className="h-16 lg:h-20 w-auto object-contain opacity-90 shrink-0" />
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Projects */}
        <section id="projects" className="w-full px-4 pt-0 pb-12 lg:pb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight">
              Projects
            </h2>
            <p className="w-[800px] max-w-full text-white/90 text-lg leading-relaxed tracking-[-0.01em]">
            See how I design intelligent systems that help people make better decisions under pressure.            </p>
            <div className="flex justify-end">
              <a href="/projects" className="text-white font-medium hover:underline shrink-0">
                More →
              </a>
            </div>
          </div>

          <div className="mt-[24px] flex flex-col gap-y-[8px] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
              <ProjectCard
                image={mechanaAiImage}
                alt="Mechana AI"
                title="New Product"
                year="2026"
                description="When the System Broke Me, I Built a Better One"
                variant="tall"
                imageFit="contain"
                textBelow
                href="/projects/mechana-ai"
              />
<ProjectCard
              image={lowesPoImage}
              alt="Re-imagining Pro Shopping"
              title="New Product"
              year="2025"
              description="One smart platform for orders, jobs, and deliveries. See how I built it."
              variant="tall"
              imageFit="contain"
              textBelow
              href="/projects/lowes-po"
/>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
              <ProjectCard
                image={lowesBImage}
                alt="Pro contractors dashboard"
                title="Redesign"
                year="2024"
                description="All your account info and percs in one easy to use place. Find out how it works."
                variant="tall"
                imageFit="contain"
                textBelow
                href="/projects/lowes-b"
              />
              <ProjectCard
                image={spendAnalyticsImage}
                alt="Spend Reports & Analytics"
                title="New Product"
                year="2024"
                description="Lowe's Pro Business Analytics. Smarter insights for pro contractors"
                variant="tall"
                imageFit="contain"
                textBelow
                href="/projects/spend-analytics"
              />
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section ref={expertiseRef} id="expertise" className="w-full px-4 pt-12 pb-24 lg:pt-16 lg:pb-32 overflow-x-hidden">
          <h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight">
            Expertise
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 lg:gap-x-16 lg:gap-y-16 md:items-start">
            <div
              className={`max-w-[288px] will-change-transform transition-transform duration-1000 ease-in-out ${expertiseInView ? "translate-x-0" : "-translate-x-[100vw]"}`}
            >
              <div className="grid grid-cols-[2ch_1fr] gap-x-4 items-start">
                <span className="text-xl font-normal text-white">01</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    UI / UX Design
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed">
              Research-driven product design from concept to launch. Strong in Figma and modern design systems.              </p>
                </div>
              </div>
            </div>
            <div
              className={`max-w-[288px] will-change-transform transition-transform duration-1000 ease-in-out delay-[250ms] ${expertiseInView ? "translate-x-0" : "-translate-x-[100vw]"}`}
            >
              <div className="grid grid-cols-[2ch_1fr] gap-x-4 items-start">
                <span className="text-xl font-normal text-white">02</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    AI Agent Architect
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed">
              Design scalable AI agents and intelligent workflows that automate processes and improve operational efficiency.              </p>
                </div>
              </div>
            </div>
            <div
              className={`max-w-[288px] will-change-transform transition-transform duration-1000 ease-in-out ${expertiseInView ? "translate-x-0" : "translate-x-[100vw]"}`}
            >
              <div className="grid grid-cols-[2ch_1fr] gap-x-4 items-start">
                <span className="text-xl font-normal text-white">03</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    AI Integration Specialist
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed">
              Build AI-powered systems that streamline operations, reduce manual work, and improve speed and accuracy.              </p>
                </div>
              </div>
            </div>
            <div
              className={`max-w-[288px] will-change-transform transition-transform duration-1000 ease-in-out delay-[250ms] ${expertiseInView ? "translate-x-0" : "translate-x-[100vw]"}`}
            >
              <div className="grid grid-cols-[2ch_1fr] gap-x-4 items-start">
                <span className="text-xl font-normal text-white">04</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 whitespace-nowrap">AI-Assisted Frontend Developer</h3>
                  <p className="text-white/90 text-base leading-relaxed">
              Develop production-ready interfaces in React using AI-assisted workflows to accelerate delivery.              </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intelligent Scalable Experience */}
        <section className="pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-white/[0.08]" aria-hidden="true">
          <div className="flex w-max animate-ticker">
            <h2 className="text-[140px] font-bold text-white tracking-tight leading-tight whitespace-nowrap px-12">
              Crafting Intelligent Scalable Experiences.
            </h2>
            <h2 className="text-[140px] font-bold text-white tracking-tight leading-tight whitespace-nowrap px-12" aria-hidden="true">
              Crafting Intelligent Scalable Experiences.
            </h2>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full px-4 pt-24 pb-12 lg:pt-32 lg:pb-16">
          <h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight mb-10">
            Testimonials
          </h2>
          <div className="flex items-center gap-6 lg:gap-10">
            <button
              type="button"
              onClick={goPrev}
              className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="min-w-0 flex-1">
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-snug max-w-4xl">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <footer className="mt-8 text-right">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-white/80 text-sm mt-0.5">{testimonial.role}</p>
              </footer>
            </div>
            <button
              type="button"
              onClick={goNext}
              className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        {/* Let's Talk */}
        <section id="contact" className="w-full px-4 py-12 lg:py-20 flex justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12">
            <img
              src={profileImage}
              alt="Osita Nwankwo"
              className="w-[352px] h-[352px] md:w-[440px] md:h-[440px] lg:w-[530px] lg:h-[530px] rounded-full object-cover shrink-0"
            />
            <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
              <h2 className="text-[200px] font-bold text-white tracking-tight leading-tight">
                Let&apos;s talk!
              </h2>
              <a
                href="mailto:nwankwo908@gmail.com"
                className="inline-flex items-center justify-center w-fit px-6 py-3 rounded-full bg-[#0045bf] text-white font-medium text-base hover:opacity-90 transition-opacity"
              >
                nwankwo908@gmail.com →
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="footer" className="w-full px-4 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
            <p>© {new Date().getFullYear()} Osita Nwankwo</p>
            <div className="flex gap-6">
              
              <a href="https://www.linkedin.com/in/osi-n-5803a11b2/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
