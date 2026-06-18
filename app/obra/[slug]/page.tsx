import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Figure from "@/components/Figure";
import { shows, getShow } from "@/data/shows";
import { TICKETS } from "@/lib/site";
import styles from "./obra.module.css";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return shows.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const show = getShow(slug);
  if (!show) return { title: "Obra" };
  return {
    title: show.title,
    description: show.leadEs.replace(/[¹²³⁴⁵]/g, ""),
  };
}

export default async function ObraPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const show = getShow(slug);
  if (!show) notFound();

  return (
    <>
      <Header context={<Link href="/">← volver al índice</Link>} />

      <main id="main" className={styles.main}>
        {/* —— Title block (+ cartel) —— */}
        <div className={styles.titleBlock}>
          <div className={styles.titleText}>
            <p className={styles.eyebrow}>OBRA 01 · {show.season.toUpperCase()}</p>
            <h1 className={styles.title}>{show.title}</h1>
            <p className={styles.tagline}>{show.tagline}</p>
            <p className={styles.credit}>
              Dramaturgia y dirección de {show.author}
            </p>
            {show.contentNoteEs ? (
              <p className={styles.contentNote}>{show.contentNoteEs}</p>
            ) : null}
          </div>

          {show.posterImage ? (
            <Figure
              className={styles.cartel}
              src={show.posterImage}
              alt={`Cartel de la obra ${show.title}.`}
              ratio="2 / 3"
              rotate={-3}
              figId="cartel"
              sizes="(min-width: 760px) 290px, 66vw"
              priority
            />
          ) : null}
        </div>

        {/* —— Hero —— */}
        <Figure
          className={styles.hero}
          src={show.heroImage}
          alt={`Fotografía de la producción de ${show.title}.`}
          ratio="16 / 9"
          rotate={-0.6}
          caption="fig.02 — fotografía de la colectiva"
          figId="fig.02"
          sizes="(min-width: 1000px) 920px, 100vw"
          priority
        />

        {/* —— Body as a museum label —— */}
        <div className={styles.body}>
          <div className={styles.rail} aria-hidden="true">
            {show.footnotes.map((f) => (
              <span key={f.marker}>{f.marker}</span>
            ))}
          </div>

          <div className={styles.prose}>
            <p className={styles.lead}>{show.leadEs}</p>
            {show.synopsisEs.map((para, i) => (
              <p key={i} className={styles.para}>
                {para}
              </p>
            ))}
          </div>

          <aside className={styles.marginalia} aria-label="Notas curatoriales">
            {show.footnotes.map((f) => (
              <p key={f.marker} className={styles.mnote}>
                <b>{f.marker}</b> {f.textEs}
              </p>
            ))}
          </aside>
        </div>

        {/* —— Ficha técnica y boletos —— */}
        <div className={styles.ficha}>
          <div className={styles.fichaDetails}>
            <h2 className={styles.fichaHead}>Ficha</h2>
            <dl className={styles.fichaList}>
              <div>
                <dt>Dramaturgia y dirección</dt>
                <dd>{show.author}</dd>
              </div>
              <div>
                <dt>Producción</dt>
                <dd>{show.production}</dd>
              </div>
              <div>
                <dt>Asistencia de dirección</dt>
                <dd>{show.assistantDirection}</dd>
              </div>
              <div>
                <dt>Foro</dt>
                <dd>
                  {show.venue}
                  <br />
                  <span className={styles.addr}>{show.venueAddress}</span>
                </dd>
              </div>
              <div>
                <dt>Funciones</dt>
                <dd>{show.runDates}</dd>
              </div>
              <div>
                <dt>Clasificación</dt>
                <dd>{show.classification}</dd>
              </div>
            </dl>
          </div>

          <aside className={styles.bookingPanel} aria-label="Reservar boletos">
            <span className={styles.vienes}>¿Vienes?</span>
            <a
              href={TICKETS.whatsapp}
              className={styles.cruzar}
              target="_blank"
              rel="noreferrer"
            >
              reservar boletos →
            </a>
            <p className={styles.umbralNote}>
              los boletos se reservan por WhatsApp y en taquilla
            </p>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}
