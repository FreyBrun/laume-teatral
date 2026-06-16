import Image from "next/image";
import styles from "./Figure.module.css";

type FigureProps = {
  /** /public path. Omit → designed hatch empty-state. */
  src?: string;
  /** Required alt text. Decorative-only slots may pass "". */
  alt: string;
  /** CSS aspect-ratio, e.g. "3 / 4", "16 / 9", "1 / 1". */
  ratio: string;
  /** Decorative rotation in degrees (−2.4 … +2.4 per handoff §3). */
  rotate?: number;
  /** Mono caption pinned bottom-left (e.g. "fig.02 — foto de producción"). */
  caption?: string;
  /** Label shown inside the empty-state, e.g. "fig.01". */
  figId?: string;
  /** next/image sizes hint for responsive loading. */
  sizes?: string;
  /** Eager-load above-the-fold images. */
  priority?: boolean;
  /** Thinner 1.5px border for small thumbnails. */
  thin?: boolean;
  className?: string;
};

/**
 * A single image slot. Fixed aspect ratio, object-fit cover, ink border and
 * inset shadow — so mixed-quality photos read as one curated set (handoff §5).
 * Decorative rotation is a static transform; DOM order stays reading order.
 */
export default function Figure({
  src,
  alt,
  ratio,
  rotate = 0,
  caption,
  figId,
  sizes = "100vw",
  priority = false,
  thin = false,
  className,
}: FigureProps) {
  const style: React.CSSProperties = {
    aspectRatio: ratio,
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
    borderWidth: thin ? 1.5 : 2,
  };

  return (
    <figure
      className={`${styles.frame} ${className ?? ""}`}
      style={style}
      // Decorative rotation/overlap must not mislead assistive tech.
      role={src ? undefined : "img"}
      aria-label={src ? undefined : alt || figId}
    >
      {src ? (
        <>
          <Image
            className={styles.img}
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
          />
          <span className={styles.inset} aria-hidden="true" />
        </>
      ) : (
        <span className={styles.hatch} aria-hidden="true">
          {figId ? <span className={styles.figLabel}>{figId}</span> : null}
        </span>
      )}
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}
