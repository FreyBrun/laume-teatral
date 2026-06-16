import Link from "next/link";
import type { Show } from "@/data/shows";
import { SITE, TICKETS } from "@/lib/site";
import styles from "./Umbral.module.css";

/**
 * The threshold ("el umbral"). The register flips to dark — a held,
 * ceremonial moment. There is no online payment: tickets are arranged
 * directly with the collective via WhatsApp (or at the box office).
 */
export default function Umbral({ show }: { show: Show }) {
  return (
    <div className={styles.screen}>
      <div className={styles.shell}>
        <div className={styles.topbar}>
          <Link href="/" className={styles.wordmark}>
            {SITE.wordmark}
          </Link>
        </div>

        <nav className={styles.breadcrumb} aria-label="Recorrido">
          <Link href="/">inicio</Link>
          <span aria-hidden="true"> › </span>
          <Link href={`/obra/${show.slug}`}>obra</Link>
          <span aria-hidden="true"> › </span>
          <span className={styles.here} aria-current="page">
            umbral
          </span>
        </nav>

        <p className={styles.intro}>
          Has recorrido la obra. Para cruzar el umbral, escríbenos — los boletos
          se reservan directamente con la colectiva.
        </p>

        <dl className={styles.details}>
          <div className={styles.detail}>
            <dt className={styles.detailLabel}>la obra</dt>
            <dd className={styles.detailValue}>{show.title}</dd>
            <dd className={styles.detailSub}>{show.tagline}</dd>
          </div>
          <div className={styles.detail}>
            <dt className={styles.detailLabel}>funciones</dt>
            {show.performances.map((p, i) => (
              <dd key={i} className={styles.detailValue}>
                {p.date} · {p.time}
              </dd>
            ))}
          </div>
          <div className={styles.detail}>
            <dt className={styles.detailLabel}>dónde</dt>
            <dd className={styles.detailValue}>{show.venue}</dd>
            <dd className={styles.detailSub}>{show.venueAddress}</dd>
          </div>
          <div className={styles.detail}>
            <dt className={styles.detailLabel}>clasificación</dt>
            <dd className={styles.detailValue}>{show.classification}</dd>
          </div>
        </dl>

        <div className={styles.cruzarRow}>
          <div>
            <h2 className={styles.cruzarTitle}>Cruzar el umbral →</h2>
            <p className={styles.cruzarNote}>
              boletos por WhatsApp y en taquilla · tel. {TICKETS.phone}
            </p>
          </div>
          <a
            className={styles.cta}
            href={TICKETS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
