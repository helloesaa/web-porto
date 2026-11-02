export default function Logo() {
  return (
    <span className="group inline-flex items-center gap-2.5">
      <svg
        viewBox="0 0 48 48"
        className="w-11 h-11 shrink-0 transition-transform duration-500 group-hover:rotate-12"
        fill="none"
        aria-hidden="true"
      >
        {/* back part of the orbit ring */}
        <ellipse
          cx="24"
          cy="24"
          rx="21"
          ry="7"
          transform="rotate(-25 24 24)"
          className="stroke-accent/40"
          strokeWidth="1.5"
        />
        {/* planet */}
        <circle cx="24" cy="24" r="9" className="fill-accent" />
        <circle cx="21" cy="21" r="3" className="fill-paper/30" />
        {/* front part of the orbit ring */}
        <path
          d="M3 24 A21 7 0 0 0 45 24"
          transform="rotate(-25 24 24)"
          className="stroke-paper"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* sparkle */}
        <path
          d="M40 4 L41.5 8.5 L46 10 L41.5 11.5 L40 16 L38.5 11.5 L34 10 L38.5 8.5 Z"
          className="fill-paper animate-pulse"
        />
        {/* tiny stars */}
        <circle cx="6" cy="9" r="1.2" className="fill-accent animate-pulse" />
        <circle cx="10" cy="41" r="1" className="fill-paper/70" />
      </svg>

      <span className="flex flex-col items-start leading-none">
        <span className="font-brand text-lg md:text-xl text-paper">Annisaa</span>
        <span className="-mt-0.5 font-brand text-[10px] tracking-[0.15em] text-accent">
          SPACE
        </span>
      </span>
    </span>
  )
}