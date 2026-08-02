const features = [
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
    title: "3 Bedrooms · Sleeps 7",
    description:
      "Generously sized rooms with ample space for families or groups, all tastefully furnished for comfort.",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
        />
      </svg>
    ),
    title: "Garden & BBQ",
    description:
      "A lush Mediterranean garden with a dedicated BBQ area — perfect for alfresco dining under the Greek sky.",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V15M3 5.25V15"
        />
      </svg>
    ),
    title: "Spacious Veranda",
    description:
      "A large, shaded veranda with seating — ideal for morning coffee, remote work, or sunset drinks.",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 01-.659 1.591L18.5 14.5m-4.25-11.396c.251.023.501.05.75.082m-7.5 0A24.531 24.531 0 002.25 9.388m12.25 0A24.531 24.531 0 0121.75 9.388M5 14.5l2.25 2.25m0 0l2.25 2.25m-2.25-4.5l6.75-6.75m-4.5 11.25h9"
        />
      </svg>
    ),
    title: "Fully Equipped Kitchen",
    description:
      "Everything from pans and dishes to modern appliances — cook like you're at home, with Greek ingredients.",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3-3m0 0l3 3m-3-3v11.25"
        />
      </svg>
    ),
    title: "Dishwasher & Washing Machine",
    description:
      "Full laundry and dishwasher — pack light and stay fresh throughout your holiday.",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 018.862 12.872M9 21.75l.612-.153m0 0l-.084-.034m.696-1.358l.906-.679m0 0l-.172-.906m1.282-1.282l.153-.612"
        />
      </svg>
    ),
    title: "Beach 2–3 Min Walk",
    description:
      "Crystal-clear waters and golden sand are practically at your doorstep — less than a 3-minute stroll.",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Peaceful & Quiet",
    description:
      "Tucked away in a serene spot, yet close to everything — the best of both worlds.",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H4.5m4.5 0v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21M9 3.75V9m6-5.25V9m4.5 12h2.25a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5H19.5z"
        />
      </svg>
    ),
    title: "Close to Restaurants & Shops",
    description:
      "Restaurants, bars, markets, and shops are a short walk away — leave the car and explore on foot.",
  },
];

export function VillaFeatures() {
  return (
    <section
      id="villa"
      className="relative bg-cream py-24 sm:py-32 overflow-hidden"
    >
      {/* Decorative pine element */}
      <div
        className="absolute top-0 right-0 text-[16rem] text-olive/5 select-none -translate-y-12 translate-x-12"
        aria-hidden="true"
      >
        🌲
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-olive">
            The Villa
          </span>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-deep-blue sm:text-5xl">
            Everything You Need
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-warm-gray">
            Thoughtfully equipped for comfort and relaxation — Villa Pefka has
            been designed with care, and our guests notice.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group rounded-2xl bg-white p-8 shadow-sm shadow-deep-blue/4 transition-all duration-300 hover:shadow-lg hover:shadow-deep-blue/8 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="mb-5 inline-flex rounded-xl bg-olive/10 p-3 text-olive transition-colors group-hover:bg-olive group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="font-serif text-lg font-semibold text-deep-blue">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
