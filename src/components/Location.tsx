export function Location() {
  return (
    <section id="location" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-deep-blue-light">
              Location
            </span>
            <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-deep-blue sm:text-5xl">
              Nikiti, Halkidiki
            </h2>
            <div className="mt-8 space-y-5">
              <p className="text-lg leading-relaxed text-warm-gray">
                Perched on the stunning{" "}
                <strong className="text-deep-blue">Sithonia peninsula</strong>,
                Nikiti is where old-world Greek charm meets modern comfort. The
                village blends a traditional old town — with its stone houses
                and winding streets — with a vibrant seaside strip of authentic
                tavernas, beach bars, and boutique shops.
              </p>
              <p className="text-lg leading-relaxed text-warm-gray">
                The waters here are famous for their clarity: think{" "}
                <strong className="text-deep-blue">turquoise shallows</strong>{" "}
                that deepen into sapphire, all backed by pine-covered hills
                stretching down to the shore. It's the kind of beach you
                daydream about in winter.
              </p>
              <p className="text-lg leading-relaxed text-warm-gray">
                Villa Pefka sits in a{" "}
                <strong className="text-deep-blue">quiet, peaceful pocket</strong>{" "}
                — close enough that restaurants, markets, and the beach are a
                short stroll away, yet far enough that you hear only birdsong
                and the rustle of pine trees in the breeze.
              </p>
            </div>

            {/* Quick distance highlights */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { label: "Beach", value: "2–3 min" },
                { label: "Restaurants", value: "3 min" },
                { label: "Shops & Market", value: "4 min" },
                { label: "Old Town", value: "10 min" },
                { label: "Thessaloniki", value: "1 hr" },
                { label: "Airport", value: "80 km" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl bg-cream px-4 py-3 text-center"
                >
                  <span className="block font-serif text-xl font-bold text-terracotta">
                    {item.value}
                  </span>
                  <span className="block text-xs font-medium uppercase tracking-wide text-warm-gray">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual / Map area */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-cream-dark shadow-xl">
              {/* Stylized mini area representation */}
              <div className="flex h-full flex-col items-center justify-center p-12 text-center">
                <span className="text-7xl" aria-hidden="true">
                  🌊
                </span>
                <div className="mt-6 space-y-2">
                  <p className="font-serif text-2xl font-bold text-deep-blue">
                    Sithonia Peninsula
                  </p>
                  <p className="text-warm-gray">
                    The middle finger of Halkidiki — known for its unspoiled
                    beaches, pine forests, and authentic villages.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  {["🏖️ Blue Flag beaches", "🌲 Pine forests", "🍷 Local wine", "🫒 Olive groves"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-deep-blue shadow-sm"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div
              className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-gold/10"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
