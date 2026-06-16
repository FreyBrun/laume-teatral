import Link from "next/link";
import styles from "./Footer.module.css";
import { SITE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <p className={styles.tagline}>
          Teatro hecho por mujeres — en la {SITE.city}.
        </p>
        <nav className={styles.meta} aria-label="Enlaces">
          <Link className={styles.link} href="/galeria">
            Galería
          </Link>
          {SITE.instagram ? (
            <a
              className={styles.link}
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          ) : null}
          {SITE.email ? (
            <a className={styles.link} href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          ) : null}
        </nav>
      </div>

      <div className={styles.bottom}>
        <span className={styles.colophon}>
          {SITE.name.toUpperCase()} · CDMX · {year}
        </span>
        <a
          className={styles.studio}
          href="https://simplescenes.studio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.studioBy}>Designed and created by</span>
          <span className={styles.studioName}>simplescenes.studio</span>
        </a>
      </div>
    </footer>
  );
}
