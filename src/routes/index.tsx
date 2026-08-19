import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "~/components/Navbar";
import { Hero } from "~/components/Hero";
import { Testimonials } from "~/components/Testimonials";
import { Gallery } from "~/components/Gallery";
import { VillaFeatures } from "~/components/VillaFeatures";
import { Location } from "~/components/Location";
import { Reservation } from "~/components/Reservation";
import { FinalCTA } from "~/components/FinalCTA";
import { Footer } from "~/components/Footer";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-dvh">
      <Navbar />
      <Hero />
      <Testimonials />
      <Gallery />
      <VillaFeatures />
      <Location />
      <Reservation />
      <FinalCTA />
      <Footer />
    </div>
  );
}
