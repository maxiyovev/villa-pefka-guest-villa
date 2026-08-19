export function FinalCTA() {
  return (
    <section id="book" className="relative overflow-hidden py-32 sm:py-40">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/beach-sunset.jpg"
          alt="Greek beach at sunset, Halkidiki"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/80 via-deep-blue/60 to-terracotta/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Ready for Your Perfect
          <br />
          Greek Escape?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85">
          Join every guest who has experienced Villa Pefka — and rated it a
          perfect 10/10. Your Mediterranean holiday starts here.
        </p>

        {/* Booking CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#reservation"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-base font-semibold text-deep-blue shadow-2xl transition-all duration-300 hover:bg-gold-light hover:shadow-gold/25 hover:scale-105"
          >
            <svg
              className="h-5 w-5 transition-transform group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            Check Availability
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/70">
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-gold"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">Perfect 10/10 Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-gold"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">Beach 2–3 Min Walk</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-gold"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">Sleeps 7 Comfortably</span>
          </div>
        </div>
      </div>
    </section>
  );
}
