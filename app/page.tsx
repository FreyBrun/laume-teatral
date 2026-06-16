import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Figure from "@/components/Figure";
import { featuredShow } from "@/data/shows";
import { members } from "@/data/members";
import styles from "./page.module.css";

export default function Home() {
  const show = featuredShow();
  const obraHref = `/obra/${show.slug}`;

  return (
    <>
      <Header context="índice no lineal" />

      <main id="main">
        {/* ===== Hero — title and poster side by side, no overlap ===== */}
        <section className={styles.hero} aria-label="Portada">
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <div className={styles.titleWrap}>
                <span className={styles.titleGhost} aria-hidden="true">
                  LAUME
                  <br />
                  TEATRAL
                </span>
                <h1 className={styles.title}>
                  LAUME
                  <br />
                  TEATRAL
                </h1>
              </div>

              <p className={styles.tagline}>
                Teatro hecho por mujeres — para interpelar y replantear lo que se
                da por sentado sobre lo que es ser mujer.
              </p>

              <p className={styles.scrollHint} aria-hidden="true">
                ↓ desciende para recorrer los fragmentos
              </p>
            </div>

            <Link
              href={obraHref}
              className={styles.posterLink}
              aria-label={`Ver la obra en cartel: ${show.title}`}
            >
              <Figure
                className={styles.heroImg}
                src={show.posterImage}
                alt={`Cartel de la obra ${show.title}.`}
                ratio="2 / 3"
                rotate={2}
                figId="cartel"
                sizes="(min-width: 880px) 360px, 78vw"
                priority
              />
            </Link>
          </div>
        </section>

        {/* ===== Fragments index ===== */}
        <section className={styles.fragments} aria-label="Fragmentos">
          <p className={styles.fragHeading}>
            Fragmentos — recorre en cualquier orden
          </p>

          <div className={styles.fragField}>
            {/* fragmento 01 — la obra */}
            <Link href={obraHref} className={`${styles.card} ${styles.cardObra}`}>
              <span className={styles.cardMeta}>
                <span>fragmento</span>
                <span>01</span>
              </span>
              <span className={styles.cardTitle}>{show.title}</span>
              <Figure
                src={show.heroImage}
                alt=""
                ratio="16 / 7"
                thin
                sizes="(min-width: 760px) 300px, 88vw"
              />
              <span className={styles.cardText}>
                La obra en cartel. Notas de programa, sinopsis y ficha como una
                sala de exposición.
              </span>
            </Link>

            {/* fragmento 02 — el elenco */}
            <Link
              href="/colectiva"
              className={`${styles.card} ${styles.cardElenco}`}
            >
              <span className={`${styles.cardMeta} ${styles.metaTeal}`}>
                <span>fragmento</span>
                <span>02 · elenco</span>
              </span>
              <span className={styles.thumbRow}>
                {members.map((m) => (
                  <Figure
                    key={m.slug}
                    src={m.portrait}
                    alt=""
                    ratio="3 / 4"
                    thin
                    sizes="64px"
                  />
                ))}
              </span>
              <span className={styles.cardText}>
                Seis nombres, seis disciplinas. Cada retrato abre su propia ficha.
              </span>
            </Link>

            {/* fragmento 03 — materiales */}
            <Link
              href={`${obraHref}#materiales`}
              className={`${styles.card} ${styles.cardMateriales}`}
            >
              <span className={styles.cardMeta}>
                <span>fragmento</span>
                <span>03 · materiales</span>
              </span>
              <span className={styles.matRow}>
                {show.materials.slice(0, 2).map((src) => (
                  <Figure
                    key={src}
                    className={styles.matThumb}
                    src={src}
                    alt=""
                    ratio="1 / 1"
                    thin
                    sizes="66px"
                  />
                ))}
                <span className={styles.cardText}>
                  Bocetos, notas y fotos de ensayo. La marginalia del montaje.
                </span>
              </span>
            </Link>

            {/* the seal — the way to the box office */}
            <div className={styles.sealWrap}>
              <p className={styles.sealLead}>···· el camino a la reserva ····</p>
              <Link href={obraHref} className={styles.seal}>
                <span className={styles.sealStep}>paso 01</span>
                <span className={styles.sealTitle}>
                  Entrar a<br />la obra
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
