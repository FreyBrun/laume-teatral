/**
 * Photo galleries. Grouped into "la colectiva" and, per show, its own set.
 * Each photo carries intrinsic dimensions so the masonry keeps natural aspect.
 *
 * To add photos: optimize into /public/img/galeria and append here.
 */
export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const collectivePhotos: Photo[] = [
  { src: "/img/galeria/colectiva-01.jpg", width: 1200, height: 800, alt: "LAUME Teatral — la colectiva (1)" },
  { src: "/img/galeria/colectiva-02.jpg", width: 800, height: 1200, alt: "LAUME Teatral — la colectiva (2)" },
  { src: "/img/galeria/colectiva-03.jpg", width: 1200, height: 800, alt: "LAUME Teatral — la colectiva (3)" },
  { src: "/img/galeria/colectiva-04.jpg", width: 1200, height: 800, alt: "LAUME Teatral — la colectiva (4)" },
  { src: "/img/galeria/colectiva-05.jpg", width: 1200, height: 800, alt: "LAUME Teatral — la colectiva (5)" },
  { src: "/img/galeria/colectiva-06.jpg", width: 1200, height: 800, alt: "LAUME Teatral — la colectiva (6)" },
  { src: "/img/galeria/colectiva-07.jpg", width: 1200, height: 800, alt: "LAUME Teatral — la colectiva (7)" },
  { src: "/img/galeria/colectiva-08.jpg", width: 800, height: 1200, alt: "LAUME Teatral — la colectiva (8)" },
  { src: "/img/galeria/colectiva-09.jpg", width: 800, height: 1200, alt: "LAUME Teatral — la colectiva (9)" },
  { src: "/img/galeria/colectiva-10.jpg", width: 800, height: 1200, alt: "LAUME Teatral — la colectiva (10)" },
];
