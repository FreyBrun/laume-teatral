import type { Metadata } from "next";
import { Newsreader, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

/* Editorial serif — titles, show names, pull quotes (handoff §3). */
const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

/* UI sans — body copy, labels, nav. */
const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

/* Mono / catalog — index tags, fig.NN, breadcrumbs, fine print. */
const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — compañía teatral`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
