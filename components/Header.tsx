import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { SITE } from "@/lib/site";

/**
 * The site header carries the logo wordmark and, optionally, a contextual
 * slot (e.g. a back link). Deliberately no conventional top nav (handoff §4):
 * discovery happens through the non-linear index on the home screen.
 *
 * Paper-themed. The dark booking screen uses its own chrome.
 */
export default function Header({ context }: { context?: React.ReactNode }) {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.wordmark} aria-label={`${SITE.name} — inicio`}>
        <Image
          className={styles.mark}
          src="/img/logo-mark.png"
          alt=""
          width={215}
          height={202}
          priority
        />
        <span className={styles.wordmarkText}>LAUME · TEATRAL</span>
      </Link>
      {context ? <span className={styles.context}>{context}</span> : null}
    </header>
  );
}
