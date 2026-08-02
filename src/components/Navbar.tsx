import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-lg shadow-deep-blue/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#hero"
          className="flex items-center gap-3 group"
        >
          <span className="text-2xl" aria-hidden="true">
            🌲
          </span>
          <span
            className={`font-serif text-xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-deep-blue" : "text-white"
            }`}
          >
            Villa Pefka
          </span>
        </a>
        <a
          href="https://www.booking.com/hotel/gr/villa-pefka-nikiti1.html"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
            scrolled
              ? "bg-terracotta text-white hover:bg-terracotta-dark shadow-md hover:shadow-lg"
              : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 border border-white/30"
          }`}
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}
