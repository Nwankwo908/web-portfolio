import React from "react";

/**
 * Hero section — Figma 1-312: two-column layout with wide gap.
 * Left: "Let's Talk" (H4) + email. Right: intro text. Optional headline above.
 * @param {{
 *   headline?: string;
 *   email: string;
 *   introText: string;
 *   scrollToId?: string;
 *   className?: string;
 * }} props
 */
export default function Hero({ headline, email, introText, scrollToId = "#projects", className = "" }) {
  const mailto = `mailto:${email}`;

  return (
    <section
      className={`px-6 pt-12 pb-16 sm:px-8 sm:pt-16 sm:pb-20 md:px-12 md:pt-20 md:pb-24 lg:px-16 lg:pt-24 lg:pb-32 ${className}`}
      aria-label="Introduction"
    >
      <div className="mx-auto max-w-[1600px]">
        {headline && (
          <h1
            className="text-3xl font-semibold leading-[1.2] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3rem] xl:text-[4rem] 2xl:text-[5.5rem] mb-12 md:mb-16"
            style={{ letterSpacing: "-0.02em" }}
          >
            {headline}
            
          </h1>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-12 lg:gap-0">
          <div className="lg:col-span-3 lg:col-start-1 max-w-md">
            <p
              className="mb-2 text-white font-semibold"
              style={{
                fontFamily: '"Labil Grotesk", "Plus Jakarta Sans", system-ui, sans-serif',
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: 1.3,
                letterSpacing: "-0.02em",
              }}
            >
              Let&apos;s Talk
            </p>
            <a
              href={mailto}
              className="text-white/90 underline decoration-white/50 underline-offset-2 hover:decoration-white text-base sm:text-lg break-all"
            >
              {email}
            </a>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 max-w-xl">
            <p
              className="text-white/95 text-base leading-[1.4] sm:text-lg mb-6"
              style={{ letterSpacing: "-0.01em" }}
            >
              {introText}
            </p>
            <a
              href={scrollToId}
              className="inline-flex items-center gap-2 rounded-full bg-[#141414] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              SCROLL DOWN ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
