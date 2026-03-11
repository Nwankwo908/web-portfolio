import { Link } from "react-router-dom";

export default function ProjectCard({
  image,
  alt,
  title,
  description,
  year,
  variant = "tall",
  gradient,
  href = "#",
  imageFit = "cover",
  textBelow = false,
}) {
  const useContain = imageFit === "contain";
  const mediaHeight = useContain ? "" : (variant === "tall" ? "h-[480px]" : "h-[380px]");
  const isInternalLink = href && href.startsWith("/") && href !== "#";
  const exploreClass = "shrink-0 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-black/50 text-white font-medium text-sm hover:bg-zinc-800/50 transition-colors z-10 absolute top-[44px] right-6";

  const textBlock = (
    <div className="min-w-0">
      <p className="text-xl font-bold text-white">
        {title} {year ? <span className="font-normal opacity-90">| {year}</span> : null}
      </p>
      <p className={`text-lg text-white/80 mt-1 ${textBelow ? "" : "line-clamp-2"}`}>
        {description}
      </p>
    </div>
  );

  const exploreEl = isInternalLink ? (
    <span className={exploreClass + " pointer-events-none"} aria-hidden>Explore</span>
  ) : (
    <a href={href} className={exploreClass}>Explore</a>
  );

  const mediaBlock = (
    <div
      className={`relative w-full ${mediaHeight} overflow-hidden flex ${useContain ? "items-start justify-start" : "items-center justify-center"} ${useContain ? "pl-0 pr-0 pt-6 pb-0 bg-black" : ""}`}
    >
      {exploreEl}
      <img
        src={image}
        alt={alt || title}
        className={`w-full transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:brightness-110 ${useContain ? "h-auto object-contain object-left object-top" : "h-full object-cover object-center"}`}
        onError={(e) => { e.target.src = "https://placehold.co/592x320/1a1a1a/666?text=Image"; }}
      />
    </div>
  );

  const textSection = textBelow ? (
    <div className="w-full pt-[24px] pl-0 pr-0 pb-6 flex flex-wrap items-end justify-between gap-4 bg-black text-white box-border min-w-0">
      {textBlock}
    </div>
  ) : (
    <div className="absolute bottom-0 left-0 right-0 pl-0 pr-6 pt-[24px] pb-6 flex flex-wrap items-end gap-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
      {textBlock}
    </div>
  );

  const Wrapper = isInternalLink ? Link : "a";
  const wrapperProps = isInternalLink ? { to: href } : { href };

  return (
    <article className="group relative w-full overflow-hidden rounded-2xl bg-black flex flex-col">
      <Wrapper {...wrapperProps} className="block relative w-full flex flex-col flex-1 min-h-0">
        {mediaBlock}
        {textSection}
      </Wrapper>
    </article>
  );
}
