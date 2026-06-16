import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Figure from "@/components/Figure";
import { shows, getShow } from "@/data/shows";
import { getMember } from "@/data/members";
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

  const matRotations = [2, -3, 1.5];

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

        {/* —— Ficha técnica —— */}
        <div className={styles.ficha}>
          <div>
            <h2 className={styles.fichaHead}>Reparto</h2>
            <ul className={styles.cast}>
              {show.cast.map((cslug) => {
                const m = getMember(cslug);
                if (!m) return null;
                return (
                  <li key={cslug} className={styles.castRow}>
                    <Link href={`/colectiva/${m.slug}`} className={styles.castName}>
                      {m.name}
                    </Link>
                    <span className={styles.castTag}>{m.roleTag}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
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

            {/* The deliberate, in-page route to tickets — the ONLY entry. */}
            <div className={styles.umbral}>
              <span className={styles.vienes}>¿Vienes?</span>
              <Link href="/umbral" className={styles.cruzar}>
                cruzar el umbral →
              </Link>
            </div>
            <p className={styles.umbralNote}>
              los boletos se reservan por WhatsApp y en taquilla
            </p>
          </div>
        </div>

        {/* —— Materiales —— */}
        <section id="materiales" className={styles.materiales}>
          <h2 className={styles.materialesHead}>Materiales del montaje</h2>
          <div className={styles.materialesRow}>
            {show.materials.map((src, i) => (
              <Figure
                key={src}
                className={styles.materialThumb}
                src={src}
                alt={`Material del montaje de ${show.title} (${i + 1}).`}
                ratio="1 / 1"
                rotate={matRotations[i % matRotations.length]}
                thin
                sizes="120px"
              />
            ))}
            <p className={styles.materialesCaption}>
              fig.03–05 — bocetos, notas de dirección, fotos de ensayo
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
