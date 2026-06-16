import styles from "./Footer.module.css";
import { SITE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p className={styles.tagline}>
        Teatro hecho por mujeres — en la {SITE.city}.
      </p>
      <div className={styles.meta}>
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
        <span className={styles.colophon}>
          {SITE.name.toUpperCase()} · CDMX · {year}
        </span>
      </div>
    </footer>
  );
}
