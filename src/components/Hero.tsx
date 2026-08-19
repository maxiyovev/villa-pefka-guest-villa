export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/villa-real-1.jpg"
          alt="Villa Pefka Guest Villa — exterior with garden and pine trees, Nikiti, Halkidiki"
          className="h-full w-full object-cover"
        />
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/70 via-deep-blue/40 to-deep-blue/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-light/40 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold-light backdrop-blur-sm">
            <span aria-hidden="true">🌲</span>
            Nikiti, Halkidiki, Greece
          </span>
        </div>

        <h1
          className="animate-fade-in-up mt-6 font-serif text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.4s" }}
        >
          Your Mediterranean
          <br />
          Escape Awaits
        </h1>

        <p
          className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl"
          style={{ animationDelay: "0.6s" }}
        >
          A sun-drenched three-bedroom villa nestled among pine trees, just a
          2-minute stroll from the crystal-clear waters of Nikiti Beach.
          Every guest rates us a perfect 10/10.
        </p>

        <div
          className="animate-fade-in-up mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#reservation"
            className="inline-flex items-center gap-2 rounded-full bg-terracotta px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:bg-terracotta-dark hover:shadow-2xl hover:scale-105"
          >
            Reserve Now
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#reviews"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
          >
            Read Guest Reviews
          </a>
        </div>

        {/* Rating badge */}
        <div
          className="animate-fade-in-up mt-12 inline-flex items-center gap-3 rounded-2xl bg-white/10 px-6 py-3 backdrop-blur-md"
          style={{ animationDelay: "1s" }}
        >
          <div className="flex" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-5 w-5 text-gold"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-semibold text-white">
            10/10 — Every Guest Review
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-white/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
