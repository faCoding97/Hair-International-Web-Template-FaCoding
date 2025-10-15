"use client";
export default function HamburgerButton({ open, onToggle }) {
  return (
    <button
      aria-label="Toggle menu"
      aria-expanded={open}
      onClick={onToggle}
      className="group relative h-11 w-11 md:hidden rounded-2xl border border-gray-200 bg-white/90 backdrop-blur
             flex items-center justify-center shadow-sm hover:shadow-md active:scale-95 transition focus:outline-none
             focus-visible:ring-2 focus-visible:ring-green-600/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
      <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-green-600/20 transition" />

      {/* wrapper مرکزکننده */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="hiburger" data-open={open ? "true" : "false"}>
          <span className="hiburger-bar hiburger-bar-1" />
          <span className="hiburger-bar hiburger-bar-2" />
          <span className="hiburger-bar hiburger-bar-3" />
        </span>
      </span>
    </button>
  );
}
