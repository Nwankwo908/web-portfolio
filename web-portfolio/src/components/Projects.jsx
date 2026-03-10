import React from "react";

/**
 * @param {{
 *   title: string;
 *   description: string;
 *   moreHref?: string;
 *   projects: Array<{ tag: string; description: string; imageAlt: string; imageSrc?: string; imageCredit?: string }>;
 *   id?: string;
 *   className?: string;
 * }} props
 */
export default function Projects({
  title,
  description,
  moreHref = "#more-projects",
  projects,
  id = "projects",
  className = "",
}) {
  return (
    <section
      id={id}
      className={`border-t border-white/10 px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id={`${id}-heading`}
              className="mb-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              {title}
            </h2>
            <p className="max-w-2xl text-base leading-[1.4] text-white/90 sm:text-lg">
              {description}
            </p>
          </div>
          <a
            href={moreHref}
            className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-white hover:underline sm:mt-0 sm:text-base"
          >
            More →
          </a>
        </div>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2" role="list">
          {projects.map((project, index) => (
            <ProjectCard key={project.tag + index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * @param {{ project: { tag: string; description: string; imageAlt: string; imageSrc?: string; imageCredit?: string } }} props
 */
function ProjectCard({ project }) {
  return (
    <article
      className="overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#1A1A1A] to-[#111111] p-4 shadow-[0_12px_30px_rgba(0,0,0,0.45)] transition duration-300 hover:border-white/20 hover:shadow-[0_18px_34px_rgba(0,0,0,0.5)] sm:rounded-2xl sm:p-6"
      role="listitem"
    >
      <div className="relative mb-3 flex aspect-video items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/5 sm:mb-4 sm:rounded-xl">
        {project.imageSrc ? (
          <>
            <img
              src={project.imageSrc}
              alt={project.imageAlt}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          </>
        ) : (
          <span className="text-xs text-[#C4C4C4] sm:text-sm">Project image: {project.imageAlt}</span>
        )}
      </div>
      <p className="mb-2 text-xs text-[#C4C4C4] sm:text-sm">{project.tag}</p>
      <p className="text-sm leading-[1.4] text-white sm:text-base">{project.description}</p>
      {project.imageCredit ? (
        <p className="mt-3 text-[11px] text-white/55 sm:text-xs">{project.imageCredit}</p>
      ) : null}
    </article>
  );
}
