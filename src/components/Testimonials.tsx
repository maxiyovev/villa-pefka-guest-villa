interface Testimonial {
  name: string;
  country: string;
  flag: string;
  date: string;
  quote: string;
  rating: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ierotheos",
    country: "United Kingdom",
    flag: "🇬🇧",
    date: "August 2024",
    rating: "10/10",
    quote:
      "Our recent summer stay at Villa Pefka exceeded all our expectations. The villa was impeccably clean, wonderfully equipped, and the location is just a 2–3 minute walk from various amenities, bars, and restaurants. The garden was a lovely bonus, offering a peaceful retreat for morning coffee or evening relaxation.",
  },
  {
    name: "Vlasta",
    country: "North Macedonia",
    flag: "🇲🇰",
    date: "September 2025",
    rating: "10/10",
    quote:
      "Beautiful villa, peaceful surroundings and welcoming hosts. The barbecue was fantastic and the veranda perfect for relaxing or working. Close to all the restaurants and shops but in a quiet area. One of the best places we've stayed in Greece!",
  },
  {
    name: "Georgi",
    country: "Bulgaria",
    flag: "🇧🇬",
    date: "September 2024",
    rating: "10/10",
    quote:
      "Great place for family vacation in beautiful Nikiti. Great communication with the host, great location, great clean and fully equipped house. Definitely would recommend it for family vacation.",
  },
  {
    name: "Bojan",
    country: "Slovenia",
    flag: "🇸🇮",
    date: "June 2024",
    rating: "10/10",
    quote:
      "Great house for a big family gathering and vacation, very spacious inside and yard. Everything you need is provided, the beach is very close just a 5 min walk away, markets and restaurants all around you. Host was always available.",
  },
  {
    name: "Robert",
    country: "North Macedonia",
    flag: "🇲🇰",
    date: "August 2023",
    rating: "10/10",
    quote:
      "Top location 3 minutes from the beach. Very nice and comfortable.",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-terracotta">
            Guest Reviews
          </span>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-deep-blue sm:text-5xl">
            What Our Guests Say
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-warm-gray">
            Every single guest has rated their stay a perfect score. Here's what
            they had to say about Villa Pefka.
          </p>
        </div>

        {/* Perfect Score Banner */}
        <div className="mx-auto mt-12 flex max-w-md items-center justify-center gap-4 rounded-2xl bg-gradient-to-br from-gold/20 to-gold-light/10 px-8 py-5 border border-gold/30">
          <div className="flex" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-6 w-6 text-gold"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="text-center">
            <span className="block font-serif text-3xl font-bold text-deep-blue">
              10/10
            </span>
            <span className="text-sm font-medium text-warm-gray">
              Every single review
            </span>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name + t.date}
              className="group relative flex flex-col rounded-2xl bg-cream p-8 shadow-md shadow-deep-blue/4 transition-all duration-300 hover:shadow-xl hover:shadow-deep-blue/8 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Quote icon */}
              <svg
                className="mb-4 h-8 w-8 text-gold/40"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>

              {/* Rating badge */}
              <div className="absolute top-6 right-6 flex items-center gap-1 rounded-full bg-gold/15 px-3 py-1">
                <svg
                  className="h-4 w-4 text-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-bold text-deep-blue">
                  {t.rating}
                </span>
              </div>

              {/* Quote */}
              <p className="flex-1 text-sm leading-relaxed text-warm-gray italic">
                "{t.quote}"
              </p>

              {/* Guest info */}
              <div className="mt-6 flex items-center gap-3 border-t border-sand/50 pt-4">
                <span className="text-2xl" aria-label={t.country}>
                  {t.flag}
                </span>
                <div>
                  <span className="block text-sm font-semibold text-deep-blue">
                    {t.name}
                  </span>
                  <span className="block text-xs text-warm-gray">
                    {t.country} · {t.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews style summary */}
        <div className="mx-auto mt-16 max-w-xl rounded-2xl border border-sand bg-cream-dark/50 p-8 text-center">
          <p className="font-serif text-xl italic text-deep-blue">
            "One of the best places we've stayed in Greece."
          </p>
          <p className="mt-2 text-sm text-warm-gray">
            — Vlasta, September 2025
          </p>
        </div>
      </div>
    </section>
  );
}
