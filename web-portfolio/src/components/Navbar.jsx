// src/components/Navbar.jsx
import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Home", to: "/", badge: null },
  { label: "Projects", to: "/projects", badge: "16", scrollTo: "top" },
  { label: "About", to: "/", badge: null, scrollTo: "expertise" },
  { label: "Contact", to: "/", badge: null, scrollTo: "footer" },
];

const SCROLL_THRESHOLD = 10;

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [pillStyle, setPillStyle] = useState({});
  const [hasScrolled, setHasScrolled] = useState(false);
  const navRefs = useRef([]);

  useEffect(() => {
    const getScrollY = () =>
      window.scrollY ?? document.documentElement.scrollTop ?? 0;
    const onScroll = () => setHasScrolled(getScrollY() > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Re-sync shadow with scroll when route changes (e.g. new page starts at top)
  useEffect(() => {
    const getScrollY = () =>
      window.scrollY ?? document.documentElement.scrollTop ?? 0;
    setHasScrolled(getScrollY() > SCROLL_THRESHOLD);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/projects" || location.pathname.startsWith("/projects/")) setActiveIndex(1);
    else if (location.pathname === "/about" || (location.pathname === "/" && location.state?.scrollTo === "expertise")) setActiveIndex(2);
    else setActiveIndex(0);
  }, [location.pathname, location.state]);

  const updatePill = (index) => {
    const el = navRefs.current[index];
    if (!el) return;
    setPillStyle({
      left: el.offsetLeft,
      width: el.offsetWidth,
      opacity: 1,
    });
  };

  const getTo = (item) => {
    if (item.scrollTo && item.to === "/") return { pathname: "/", state: { scrollTo: item.scrollTo } };
    if (item.scrollTo && item.to === "/projects") return { pathname: "/projects", state: { scrollTo: "top" } };
    return item.to;
  };

  const handleNavClick = (e, i) => {
    setActiveIndex(i);
    const item = NAV_ITEMS[i];
    if (item.scrollTo === "footer" && item.to === "/") {
      e.preventDefault();
      navigate("/", { state: { scrollTo: "footer" }, replace: true });
    } else if (item.to === "/" && !item.scrollTo && location.pathname === "/") {
      e.preventDefault();
      navigate("/", { state: { scrollTo: "top" }, replace: true });
    } else if (item.scrollTo === "expertise" && item.to === "/") {
      e.preventDefault();
      navigate("/", { state: { scrollTo: "expertise" }, replace: true });
    }
    if (item.to === "/projects") {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  useEffect(() => { updatePill(activeIndex); }, [activeIndex]);
  useEffect(() => { updatePill(0); }, []);

  const isProjectsPage = location.pathname === "/projects" || location.pathname.startsWith("/projects/");
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md pb-4 transition-shadow duration-200 ${
        isProjectsPage ? "bg-white/50" : "bg-black/50"
      } ${hasScrolled ? "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),0_2px_4px_-2px_rgba(0,0,0,0.15),0_10px_15px_-3px_rgba(0,0,0,0.18)]" : "shadow-none"}`}
      style={{ paddingTop: "max(1.5rem, env(safe-area-inset-top))" }}
    >
      <div className="w-full px-4 pb-0 flex flex-col items-center justify-center gap-[40px]">

        <div
          className={`font-['Cocogoose'] text-2xl tracking-[-0.08em] text-center ${
            isProjectsPage ? "text-black" : "text-white"
          }`}
        >
          Osita Nwankwo
        </div>

        <nav
          className="relative flex items-center gap-1 rounded-full bg-[#262626] px-2 py-2 shadow-lg flex-nowrap justify-center max-w-[calc(100vw-2rem)] overflow-x-auto overflow-y-hidden scrollbar-none"
          aria-label="Main"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <span
            style={{
              position: "absolute",
              top: "5px",
              height: "calc(100% - 10px)",
              borderRadius: "9999px",
              background: "rgba(255,255,255,0.12)",
              zIndex: 0,
              transition: "left 0.22s cubic-bezier(.4,0,.2,1), width 0.22s cubic-bezier(.4,0,.2,1)",
              pointerEvents: "none",
              ...pillStyle,
            }}
          />

          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.label}
              to={getTo(item)}
              ref={(el) => (navRefs.current[i] = el)}
              onClick={(e) => handleNavClick(e, i)}
              onMouseEnter={() => updatePill(i)}
              onMouseLeave={() => updatePill(activeIndex)}
              className={`relative z-10 inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full text-sm sm:text-base transition-colors shrink-0 ${
                activeIndex === i
                  ? "bg-white text-black font-medium"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {item.badge && (
                <span className="inline-flex items-center justify-center min-w-[22px] h-[22px] px-1.5 rounded-full bg-[#C4C4C4] text-[#000000] text-xs font-medium">
                  {item.badge}
                </span>
              )}
              {item.label}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}
