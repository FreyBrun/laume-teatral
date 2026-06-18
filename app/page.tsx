import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Figure from "@/components/Figure";
import { featuredShow } from "@/data/shows";
import { members } from "@/data/members";
import { TICKETS } from "@/lib/site";
import styles from "./page.module.css";

export default function Home() {
  const show = featuredShow();
  const obraHref = `/obra/${show.slug}`;

  return (
    <>
      <Header context="índice no lineal" />

      <main id="main">
        {/* ===== Hero ===== */}
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
                Hablamos de lo que nos inquieta desde lo humano, en lo colectivo y en lo íntimo.
              </p>

              <p className={styles.scrollHint} aria-hidden="true">
                ↓ desciende para recorrer los fragmentos
              </p>
            </div>

            <Link
              href="/colectiva"
              className={styles.posterLink}
              aria-label="Conocer a la colectiva LAUME Teatral"
            >
              <Figure
                className={styles.heroImg}
                src="/img/home-hero.jpg"
                alt="Retrato de grupo de las integrantes de LAUME Teatral."
                ratio="2 / 3"
                rotate={1.2}
                figId="la colectiva"
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
                src={show.posterImage}
                alt={`Cartel de la obra ${show.title}.`}
                ratio="2 / 3"
                thin
                sizes="(min-width: 760px) 260px, 88vw"
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
                Cinco nombres, cinco disciplinas. Cada retrato abre su propia ficha.
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

        <section className={styles.booking} aria-labelledby="booking-title">
          <p className={styles.bookingEyebrow}>Funciones · 4 y 5 de julio · 7 PM</p>
          <h2 id="booking-title" className={styles.bookingTitle}>
            Reserva tu lugar para <i>No es ficción</i>
          </h2>
          <a
            href={TICKETS.whatsapp}
            className={styles.bookingLink}
            target="_blank"
            rel="noreferrer"
          >
            Reservar boletos por WhatsApp →
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
