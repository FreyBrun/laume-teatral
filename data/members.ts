/**
 * The ensemble — data-driven so it can grow or shrink (handoff §3, §7).
 * Five voices, no hierarchy: every member renders at equal scale.
 *
 * To add a member: append an object. To add a portrait: drop the file in
 * /public/img and set `portrait`. Missing portraits fall back to the
 * designed empty-state, so the page always looks intentional.
 */
export type Member = {
  slug: string;
  name: string;
  /** Disciplines the member brings to the collective. */
  disciplines: string[];
  /** Short tag shown next to the name in a show's reparto. */
  roleTag: string;
  /** One line, shown on the About grid. */
  bioEs: string;
  /** Full biography, shown on the member detail page. */
  fullBioEs: string;
  /** /public path to the individual portrait. Omit for the empty-state. */
  portrait?: string;
};

export const members: Member[] = [
  {
    slug: "yazmin-garcia",
    name: "Yazmín García",
    disciplines: ["arquitectura", "actuación", "modelo"],
    roleTag: "cámara",
    bioEs: "Arquitecta, modelo y actriz. Frente a la cámara y la pasarela.",
    fullBioEs:
      "Licenciada en Arquitectura, modelo y actriz. Inició su formación actoral en 2021, participando en talleres intensivos, diplomados y cursos especializados en actuación realista, actuación frente a cámara, construcción de personaje y herramientas emocionales para la interpretación, en instituciones como NYC Latin Media, Médula Índigo y CasAzul. En el terreno audiovisual, ha formado parte de cortometrajes como ¿Ya llegaste? (2026) y La verdad (2026), así como de un videoclip musical para Los Rehenes y Grupo Liberación (2025). Ha colaborado en campañas comerciales para marcas como Miller (2025) y Maybelline (2026). Como modelo ha participado en pasarelas, editorial y comerciales.",
    portrait: "/img/yazmin.jpg",
  },
  {
    slug: "cristina-bejar",
    name: "Cristina Béjar",
    disciplines: ["fotografía", "curaduría", "actuación"],
    roleTag: "imagen",
    bioEs: "Fotógrafa, curadora y actriz. La que construye la imagen.",
    fullBioEs:
      "Licenciada en Administración Industrial, técnica productora en Medios de la Comunicación Visual, fotógrafa, curadora y actriz. Ha cursado diversos estudios en fotografía, curaduría, arte contemporáneo y actuación en instituciones como CasAzul, Cartol Studio, la Antigua Academia de San Carlos, el MUAC, el Museo Reina Sofía, el Centro Cultural de España y Casa Lamm, entre otros. Egresada del diplomado en actuación +30 en la Escuela de Artes Escénicas CasAzul (2024–2025). En esa misma institución cursó el diplomado Actuación frente a la cámara (2025–2026) con Sonia Couoh, José Carriedo y Gabriela Cartol, y más tarde Actuación realista frente a la cámara con Gabriela Cartol en Cartol Studio (2026) y el diplomado en Autonomía Creativa para Actrices y Actores en CasAzul (2026). En 2019 realizó su primer cortometraje, Beso de sal, donde produjo, dirigió y actuó.",
    portrait: "/img/cristina.jpg",
  },
  {
    slug: "ann-ortega",
    name: "Ann Ortega",
    disciplines: ["danza", "producción", "actuación"],
    roleTag: "cuerpo",
    bioEs: "Danza ceremonial mexicana, producción y actuación. La ritualista.",
    fullBioEs:
      "Licenciada en Turismo, especialista en Ciencias de la Computación con enfoque en Análisis de la Información, productora y actriz mexicana. Inició su formación en danza prehispánica en 2002. Entre 2012 y 2022 residió en Nueva Zelanda, donde participó en presentaciones culturales y coreografías para el Indian Diwali Festival —incluyendo danzas ceremoniales y flash mobs en Aotea Square, Auckland— y realizó presentaciones de danza mexica, entre ellas el Encuentro Internacional de Danza y Ritualidad en el Museum of New Zealand Te Papa Tongarewa. En 2018 inició su formación teatral e improvisación, profundizando en el texto dramático con escenas de Federico García Lorca y Antón Chéjov en el Pitt Street Theatre de Auckland. Entre 2016 y 2022 fue productora de festivales de cultura mexicana en Nueva Zelanda, recibiendo en 2019 el Premio al Mejor Productor de Eventos en los New Zealand Latin Awards. En 2025 continuó su formación actoral con el Diplomado en Actuación en La Casa del Teatro, participando en montajes como Antígona de Sófocles, Jemima y el Lobo de Leonora Carrington y El amor de las luciérnagas de Alejandro Ricaño. Posteriormente realizó el taller de Actuación Realista en CasAzul. Actualmente cursa el Diplomado en Actuación Dramática para la Profesionalización en CEDRAM, Michoacán.",
    portrait: "/img/ann.jpg",
  },
  {
    slug: "haydee-fuentes",
    name: "Haydée Fuentes",
    disciplines: ["arte", "mediación", "historia del arte"],
    roleTag: "mediación",
    bioEs: "Artista visual e historiadora del arte. La mediadora.",
    fullBioEs:
      "Licenciada en Estudios e Historia de las Artes por la Universidad del Claustro de Sor Juana (2014–2018), artista visual, docente y creadora cultural con experiencia en educación, mediación artística, teatro y difusión cultural. Obtuvo la Maestría en Educación y Necesidades Educativas Especiales en la Universidad de La Rioja (2025). Ha trabajado en instituciones educativas bilingües, desarrollando proyectos creativos y acompañamiento educativo para infancias, incluyendo atención a estudiantes con necesidades educativas especiales. Su trayectoria integra formación artística y escénica, destacando el Diplomado de Actuación 18–30 en CasAzul Artes Escénicas Argos (2024–2025) y estudios de Actuación ante la Cámara en la FES Acatlán (2025), así como su labor como narradora oral en la misma institución (2021–2024). Cuenta con experiencia en mediación cultural en el Museo del Palacio de Bellas Artes y en el desarrollo de proyectos digitales como «Bitácora Espacial» (2019), enfocados en la accesibilidad y la difusión del arte. Su trabajo se centra en el cruce entre arte, educación y experiencia escénica.",
    portrait: "/img/haydee.jpg",
  },
  {
    slug: "maria-serrano",
    name: "María Serrano",
    disciplines: ["actuación", "cine"],
    roleTag: "cine",
    bioEs: "Formada con Luis de Tavira. Apasionada del cine y la Nouvelle Vague.",
    fullBioEs:
      "Su formación comenzó en el Taller de Iniciación a la Actuación (julio 2024), impartido por Ramón Cadaval. Posteriormente cursó el Diplomado Intensivo de Actuación 2024–2025 en CasAzul, con Akira Ishikawa en actuación, Bernardo Kasis Galán en cuerpo y movimiento, y Enrique Olmos de Ita en conocimientos teóricos. Complementó su preparación con el taller Pensar el Arte de la Actuación (2024) en Casa del Teatro, impartido por Luis de Tavira. Continuó su formación en CasAzul con los talleres de Actuación Realista (2025), con Ana Isabel Esqueira, y de Actores Contemporáneos para Cine, Teatro y Televisión (2025), con Azalia Ortiz. Cursó el Diplomado Actuar Frente a la Cámara (2025) con Sonia Couoh y Alistair Pulido, y formó parte del Taller de Combate Escénico (2025) del Colectivo Marea Roja. Recientemente finalizó el primer módulo del taller de Actuación Realista (2026) con Gabriela Cartol. Apasionada por el cine, cursó estudios sobre la Nouvelle Vague (2026) con Raúl Ojanguren, ampliando su mirada sobre la actuación y el lenguaje cinematográfico.",
    portrait: "/img/maria.jpg",
  },
];

/** Lookup by slug. */
export function getMember(slug: string): Member | undefined {
  return members.find((m) => m.slug === slug);
}
