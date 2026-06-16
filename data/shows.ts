/**
 * Productions — one object per show (handoff §7). The archive of past
 * shows is this same array filtered by `status`.
 *
 * Seeded with the real production «No es ficción» (datos del cartel oficial).
 * Edit here — no redesign needed.
 */
import type { Photo } from "./gallery";

export type Performance = {
  /** Human label, e.g. "Sábado 4 de julio". */
  date: string;
  /** Time label, e.g. "7:00 PM". */
  time: string;
};

export type Footnote = {
  marker: string; // "¹", "²", "³"
  textEs: string;
};

export type Show = {
  slug: string;
  title: string;
  /** Dramaturgia y dirección. */
  author: string;
  production: string;
  assistantDirection: string;
  /** Línea de cartel. */
  tagline: string;
  status: "actual" | "proxima" | "pasada";
  season: string;
  venue: string;
  venueAddress: string;
  runDates: string;
  /** Clasificación, e.g. "+18". */
  classification: string;
  /** Discreet content advisory, rendered near the title. */
  contentNoteEs?: string;
  /** Lead sentence (set in the editorial serif). */
  leadEs: string;
  /** Remaining synopsis paragraphs. */
  synopsisEs: string[];
  /** Curatorial marginalia; markers match superscripts in the prose. */
  footnotes: Footnote[];
  /** Member slugs — equal billing, the ensemble on stage. */
  cast: string[];
  /** Cartel / poster (portrait) — used on the home hero. */
  posterImage?: string;
  /** Show hero (landscape). */
  heroImage?: string;
  /** Materials (square). */
  materials: string[];
  /** Funciones. */
  performances: Performance[];
  /** Fotografías de la temporada. Vacío ⇒ marcador "próximamente". */
  gallery?: Photo[];
};

export const shows: Show[] = [
  {
    slug: "no-es-ficcion",
    title: "No es ficción",
    author: "Enrique Olmos",
    production: "Ann Ortega",
    assistantDirection: "Gaby Poot",
    tagline: "¿Qué estás dispuesta a hacer en nombre del arte?",
    status: "actual",
    season: "Temporada 2026",
    venue: "Centro Cultural de Calacoaya",
    venueAddress: "Cam. Real de Calacoaya 66, López Mateos, Méx.",
    runDates: "Sáb 4 y dom 5 de julio · 2026 · 7 PM",
    classification: "+18",
    contentNoteEs:
      "Contiene temas de violencia sexual y de género. +18 — recomendada para público adulto.",
    leadEs:
      "En una noche marcada por la lluvia, cuatro mujeres se reúnen en un taller literario donde el vino es solo el pretexto para diseccionar sus propias fracturas.¹",
    synopsisEs: [
      "Lo que comienza como una sesión creativa se convierte en un ejercicio de exhumación cuando una de ellas presenta un capítulo de su novela, No es ficción.² A través de una venganza urdida en una aplicación de citas, la pieza plantea una interrogante incómoda: ¿puede una mujer ejercer violencia sexual contra un hombre?",
      "En un mundo donde la audiencia solo reacciona ante la sangre expuesta, la obra desafía los límites de la ética y la estética, y cuestiona hasta dónde es capaz de llegar un artista con tal de marcar la realidad.³",
    ],
    footnotes: [
      {
        marker: "¹",
        textEs:
          "El taller literario como cámara cerrada: cuatro voces, una botella de vino y todo lo que el grupo prefería callar.",
      },
      {
        marker: "²",
        textEs:
          "«No es ficción» es también el título de la novela que una de ellas presenta esa noche — el texto dentro del texto.",
      },
      {
        marker: "³",
        textEs:
          "La obra invierte la pregunta habitual sobre la violencia y el género, y la sostiene sin ofrecer una respuesta cómoda.",
      },
    ],
    // Reparto del cartel oficial (5 en escena; Zaira no actúa en este montaje).
    cast: [
      "yazmin-garcia",
      "maria-serrano",
      "haydee-fuentes",
      "cristina-bejar",
      "ann-ortega",
    ],
    posterImage: "/img/cartel-no-es-ficcion.jpg",
    heroImage: "/img/obra-hero.jpg",
    materials: ["/img/material-1.jpg", "/img/material-2.jpg", "/img/material-3.jpg"],
    performances: [
      { date: "Sábado 4 de julio", time: "7:00 PM" },
      { date: "Domingo 5 de julio", time: "7:00 PM" },
    ],
  },
];

/** Lookup by slug. */
export function getShow(slug: string): Show | undefined {
  return shows.find((s) => s.slug === slug);
}

/** The current production (the one the home + tickets flow point at). */
export function featuredShow(): Show {
  return shows.find((s) => s.status === "actual") ?? shows[0];
}
