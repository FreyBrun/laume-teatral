/**
 * Global site configuration.
 * Single source of truth for identity + how the public gets tickets.
 */
export const SITE = {
  name: "LAUME Teatral",
  /** Short wordmark used in the header. */
  wordmark: "LAUME Teatral",
  city: "Ciudad de México",
  url: "https://laumeteatral.com",
  description:
    "Compañía teatral emergente conformada por mujeres. La creación escénica como un espacio para interpelar y replantear el status quo — sobre todo, sobre lo que es ser mujer.",
  /** Most traffic arrives from Instagram. */
  instagram: "https://instagram.com/laume.teatral", // verificar el handle exacto
  email: "laume.teatral@gmail.com",
} as const;

/**
 * Tickets are arranged directly with the collective — no online payment.
 * The "umbral" page sends people to WhatsApp (or the box office).
 */
export const TICKETS = {
  whatsapp:
    "https://api.whatsapp.com/send/?phone=525578797627&text&type=phone_number&app_absent=0",
  phone: "5578797627",
} as const;
