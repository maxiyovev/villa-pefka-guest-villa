export function Footer() {
  return (
    <footer className="bg-deep-blue text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">
                🌲
              </span>
              <span className="font-serif text-xl font-bold text-white">
                Villa Pefka
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              A luxury three-bedroom guest villa in Nikiti, Halkidiki, Greece.
              Every guest rates us 10/10 — we'd love for you to be the next.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                { label: "The Villa", href: "#villa" },
                { label: "Guest Reviews", href: "#reviews" },
                { label: "Location", href: "#location" },
                { label: "Reserve Now", href: "#reservation" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white">
              Contact
            </h3>
            <address className="mt-4 space-y-2 text-sm not-italic">
              <p>Nikiti, Halkidiki</p>
              <p>Sithonia Peninsula, Greece</p>
              <p className="mt-3">
                <a
                  href="mailto:michelamanolova@gmail.com"
                  className="text-gold-light transition-colors hover:text-white"
                >
                  michelamanolova@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+359889777738"
                  className="text-gold-light transition-colors hover:text-white"
                >
                  +359 889 777 738
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Villa Pefka Guest Villa. All
            rights reserved.
          </p>
          <p className="flex items-center gap-2 text-sm">
            <span className="text-gold" aria-hidden="true">
              ★
            </span>
            Every guest review: 10/10
            <span className="text-gold" aria-hidden="true">
              ★
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
