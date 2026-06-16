import Image from "next/image";
import type { Photo } from "@/data/gallery";
import styles from "./GalleryGrid.module.css";

/**
 * A masonry of framed photos that keep their natural aspect ratio — a
 * curated contact sheet. Same ink border + inset shadow as every other
 * image slot, so mixed-quality photos read as one set.
 */
export default function GalleryGrid({ photos }: { photos: Photo[] }) {
  return (
    <div className={styles.masonry}>
      {photos.map((p) => (
        <figure key={p.src} className={styles.item}>
          <Image
            className={styles.img}
            src={p.src}
            alt={p.alt}
            width={p.width}
            height={p.height}
            sizes="(min-width: 880px) 30vw, (min-width: 560px) 45vw, 90vw"
            loading="lazy"
          />
          <span className={styles.inset} aria-hidden="true" />
        </figure>
      ))}
    </div>
  );
}
