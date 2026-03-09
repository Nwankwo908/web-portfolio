import { Link } from "react-router-dom";
import livongoImage from "../assets/LIVONGO (1).png";

const livongoDesignModules = import.meta.glob(
  "../assets/Livongo Designs Presented at Teladoc EBC - PDF_Page_*.jpg",
  { eager: true, query: "?url", import: "default" }
);
const livongoDesignImages = Object.entries(livongoDesignModules)
  .sort(([a], [b]) => {
    const numA = parseInt(a.match(/PDF_Page_(\d+)\.jpg/)?.[1] ?? "0", 10);
    const numB = parseInt(b.match(/PDF_Page_(\d+)\.jpg/)?.[1] ?? "0", 10);
    return numA - numB;
  })
  .map(([, url]) => url);

export default function LivongoPage() {
  return (
    <div className="min-h-screen pt-[136px] text-black bg-white app-lift-up">
      <div className="w-full px-4 py-10 sm:py-12 lg:py-16">
        {/* Pagination */}
        <nav className="flex items-center justify-between mb-8" aria-label="Project navigation">
          <Link
            to="/projects/ppp"
            className="inline-flex items-center gap-2 text-black/70 hover:text-black text-sm sm:text-base transition-colors"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
          >
            <span className="inline-block" aria-hidden>←</span>
            Previous project
          </Link>
          <Link
            to="/projects/intrado"
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
            Livongo
          </h1>
          <p
            className="text-lg sm:text-xl text-black/80 max-w-2xl"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif", lineHeight: 1.5 }}
          >
            See how I created effortless Livongo integration with Microsoft Teams
          </p>
          <p
            className="text-sm text-black/60 mt-2"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
          >
            Redesign | 2022
          </p>
        </header>

        {/* Hero image — responsive corners like HD: smaller on mobile, 84px on larger screens */}
        <div
          className="rounded-t-[48px] sm:rounded-t-[84px] rounded-b-[16px] sm:rounded-b-[84px] overflow-hidden mb-16 w-full border-2 border-black/15"
          style={{ aspectRatio: "426/192" }}
        >
          <img
            src={livongoImage}
            alt="Livongo product overview"
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
                I designed the end-to-end user experience for the Livongo app, focusing on accessibility, personalization, and integration within the Microsoft Teams environment. This included designing the flow for adding the app from the Teams Marketplace, streamlining the onboarding process, and implementing single sign-on (SSO) for a frictionless start. I crafted a dynamic dashboard that allows users to view coaching options informed by their activity logs and designed a customizable action plan feature to help users set and stay on track with their health goals.

<br />To enhance engagement and accountability, I integrated an AI chatbot that provides reminders and support, along with a personalized food log to track nutrition with ease. I also streamlined the experience of ordering test strips directly from the app and ensured users receive timely push notifications and in-app chat alerts. Finally, I made it easy for users to connect with tech support via an AI assistant, creating a responsive and supportive ecosystem for health management.
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

        {/* Livongo designs gallery */}
        <section className="mb-16">
          <div className="flex flex-col gap-8">
            {livongoDesignImages.map((src, i) => (
              <div
                key={i}
                className="rounded-[48px] overflow-hidden w-full bg-black/5 border-2 border-black/15"
              >
                <img
                  src={src}
                  alt={`Livongo design — page ${i + 1}`}
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
