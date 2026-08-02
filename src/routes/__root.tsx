import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title:
          "Villa Pefka Guest Villa — Luxury Villa in Nikiti, Halkidiki, Greece",
      },
      {
        name: "description",
        content:
          "A beautiful three-bedroom villa just 2-3 minutes from the beach in Nikiti, Halkidiki. Sleeps 7, with garden, BBQ, and veranda. Perfect 10/10 from every guest.",
      },
      { name: "theme-color", content: "#fefbf6" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Villa Pefka Guest Villa — Nikiti, Halkidiki",
      },
      {
        property: "og:description",
        content:
          "A beautiful three-bedroom villa just 2-3 minutes from the beach. Sleeps 7, with garden, BBQ, and veranda. Perfect 10/10 guest reviews.",
      },
      {
        property: "og:image",
        content: "/images/villa-real-1.jpg",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap",
      },
    ],
  }),
  notFoundComponent: () => <div>Page not found</div>,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
