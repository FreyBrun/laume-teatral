import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Figure from "@/components/Figure";
import GalleryGrid from "@/components/GalleryGrid";
import { collectivePhotos } from "@/data/gallery";
import { shows } from "@/data/shows";
import styles from "./galeria.module.css";

export const metadata: Metadata = {
  title: "Galería",
  description: "Fotografías de LAUME Teatral — la colectiva y sus obras.",
};

export default function GaleriaPage() {
  return (
    <>
      <Header context={<Link href="/">← volver al índice</Link>} />

      <main id="main" className={styles.main}>
        <div className={styles.head}>
          <p className={styles.eyebrow}>GALERÍA</p>
          <h1 className={styles.title}>Fotografías</h1>
        </div>

        {/* —— La colectiva —— */}
        <section className={styles.group}>
          <div className={styles.groupHead}>
            <h2 className={styles.groupTitle}>La colectiva</h2>
            <span className={styles.count}>{collectivePhotos.length} fotografías</span>
          </div>
          <GalleryGrid photos={collectivePhotos} />
        </section>

        {/* —— Por obra —— */}
        {shows.map((show) => (
          <section key={show.slug} className={styles.group}>
            <div className={styles.groupHead}>
              <h2 className={styles.groupTitle}>{show.title}</h2>
              <Link href={`/obra/${show.slug}`} className={styles.count}>
                ver la obra →
              </Link>
            </div>

            {show.gallery && show.gallery.length > 0 ? (
              <GalleryGrid photos={show.gallery} />
            ) : (
              <div className={styles.placeholder}>
                {[0, 1, 2].map((i) => (
                  <Figure
                    key={i}
                    className={styles.placeholderSlot}
                    alt=""
                    ratio="4 / 5"
                    figId="próximamente"
                    sizes="30vw"
                  />
                ))}
                <p className={styles.placeholderNote}>
                  Las fotografías de la temporada se publicarán aquí después del
                  estreno.
                </p>
              </div>
            )}
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}
