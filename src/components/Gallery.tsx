import { useState, useCallback, useEffect } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

const images: GalleryImage[] = [
  {
    src: "/images/villa-real-1.jpg",
    alt: "Villa Pefka exterior — sunlit façade with Mediterranean garden and pine trees",
    caption: "The Villa & Garden",
  },
  {
    src: "/images/villa-real-2.jpg",
    alt: "Villa Pefka — bright, airy interior with warm Mediterranean character",
    caption: "Inside Villa Pefka",
  },
  {
    src: "/images/villa-real-3.jpg",
    alt: "Villa Pefka — additional view of the villa and surroundings",
    caption: "Your Mediterranean Escape",
  },
];

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  }, []);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          goToPrev();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll while lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, goToPrev, goToNext]);

  return (
    <>
      <section
        id="gallery"
        className="relative bg-cream py-24 sm:py-32 overflow-hidden"
      >
        {/* Decorative pine element */}
        <div
          className="absolute top-0 left-0 text-[14rem] text-olive/5 select-none -translate-y-12 -translate-x-8"
          aria-hidden="true"
        >
          🌲
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">
              Photo Tour
            </span>
            <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-deep-blue sm:text-5xl">
              A Look Inside
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-warm-gray">
              Peek into the sun-soaked spaces of Villa Pefka — from the
              pine-shaded garden to the warm, welcoming interiors.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="mt-16 grid gap-6 grid-cols-2 lg:grid-cols-3">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                onClick={() => openLightbox(i)}
                className="group relative block overflow-hidden rounded-2xl bg-white shadow-md shadow-deep-blue/4 transition-all duration-300 hover:shadow-xl hover:shadow-deep-blue/8 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 cursor-pointer text-left"
                style={{
                  animationDelay: `${i * 0.15}s`,
                  animationFillMode: "both",
                }}
              >
                {/* Aspect ratio container */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={i < 4 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Hover overlay with caption */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-deep-blue/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="w-full p-5">
                    {image.caption && (
                      <span className="block font-serif text-lg font-semibold text-white">
                        {image.caption}
                      </span>
                    )}
                    <span className="mt-1 inline-flex items-center gap-1.5 text-sm text-white/80">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                        />
                      </svg>
                      Click to expand
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Photo count indicator */}
          <p className="mt-8 text-center text-sm text-warm-gray">
            {images.length} photo{images.length !== 1 ? "s" : ""} — click any
            to view full size
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-deep-blue/90 backdrop-blur-sm"
            onClick={closeLightbox}
          />

          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Close photo viewer"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:left-8"
              aria-label="Previous photo"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Next button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:right-8"
              aria-label="Next photo"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Image container */}
          <div className="relative z-10 mx-4 max-w-5xl">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                className="max-h-[85dvh] w-full object-contain"
              />
            </div>

            {/* Caption & counter */}
            <div className="mt-4 text-center">
              {images[lightboxIndex].caption && (
                <p className="font-serif text-lg text-white">
                  {images[lightboxIndex].caption}
                </p>
              )}
              <p className="mt-1 text-sm text-white/60">
                {lightboxIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
