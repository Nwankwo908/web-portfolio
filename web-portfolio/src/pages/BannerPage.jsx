import { Link } from "react-router-dom";
import bannerImage from "../assets/RacknGo.png";
import racknGoPixel from "../assets/RacknGo - Google Pixel 8 Pro.png";
import racknGoAB from "../assets/AB_RackNGO.png";

const bannerGalleryImages = [racknGoPixel, racknGoAB];

export default function BannerPage() {
  return (
    <div className="min-h-screen pt-[136px] text-black bg-white app-lift-up">
      <div className="w-full px-4 py-10 sm:py-12 lg:py-16">
        {/* Pagination */}
        <nav className="flex items-center justify-between mb-8" aria-label="Project navigation">
          <Link
            to="/projects/qoutel"
            className="inline-flex items-center gap-2 text-black/70 hover:text-black text-sm sm:text-base transition-colors"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
          >
            <span className="inline-block" aria-hidden>←</span>
            Previous project
          </Link>
          <Link
            to="/projects/photography"
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
            Rack N Go
          </h1>
          <p
            className="text-lg sm:text-xl text-black/80 max-w-2xl"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif", lineHeight: 1.5 }}
          >
            Rack N Go - Connecting Competitive Players locally
          </p>
          <p
            className="text-sm text-black/60 mt-2"
            style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
          >
            New Product | 2017
          </p>
        </header>

        {/* Hero image — responsive corners like HD: smaller on mobile, 84px on larger screens */}
        <div
          className="rounded-t-[48px] sm:rounded-t-[84px] rounded-b-[16px] sm:rounded-b-[84px] overflow-hidden mb-16 w-full border-2 border-black/15"
          style={{ aspectRatio: "426/192" }}
        >
          <img
            src={bannerImage}
            alt="Rack N Go product overview"
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
                Rack N Go was a mobile application concept developed in 2017 to revolutionize the way competitive pickup game enthusiasts connect locally. It aimed to solve the problem of finding skill-matched opponents quickly and easily, while also integrating cash-based stakes into the experience. The app combined geolocation, user profiles, and secure payment systems to deliver a seamless user experience.

However, despite its innovative approach and user-centered design, Rack N Go was never fully implemented in the market due to unresolved legal challenges surrounding cash-based competitions, particularly in New Jersey’s regulatory environment.
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

        {/* Rack N Go gallery */}
        <section className="mb-16">
          <div className="flex flex-col gap-8">
            {bannerGalleryImages.map((src, i) => (
              <div key={i} className="w-full overflow-hidden">
                <img
                  src={src}
                  alt=""
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
