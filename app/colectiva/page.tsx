import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Figure from "@/components/Figure";
import { members } from "@/data/members";
import { SITE } from "@/lib/site";
import styles from "./colectiva.module.css";

export const metadata: Metadata = {
  title: "La colectiva",
  description: SITE.description,
};

export default function ColectivaPage() {
  return (
    <>
      <Header context={<Link href="/">← volver al índice</Link>} />

      <main id="main" className={styles.main}>
        {/* —— Statement —— */}
        <section className={styles.statement}>
          <div className={styles.statementText}>
            <p className={styles.eyebrow}>
              {SITE.name.toUpperCase()} · {SITE.city.toUpperCase()}
            </p>
            <p className={styles.manifesto}>
              Somos una compañía teatral emergente conformada por mujeres en
              distintas etapas de su vida que, a través de la creación escénica,
              busca despertar el interés por el teatro — con puestas en escena
              que interpelan y replantean el status quo sobre lo que es ser
              humano, y sobre todo lo que es ser mujer.
            </p>
            <p className={styles.support}>
              No hay una sola directora ni una voz principal. Cada montaje reúne
              disciplinas distintas —la fotografía, la danza ceremonial, el cine,
              la arquitectura, la historia del arte, la dramaturgia— y las pone a
              reaccionar entre sí: lo que sale no se parece a ninguna de nosotras
              por separado. Creemos que el teatro es un acto vivo, un espacio de
              cercanía donde la historia continúa en la conversación, mucho
              después de que cae el telón.
            </p>
            <Link href="/galeria" className={styles.galleryLink}>
              Ver la galería de la colectiva →
            </Link>
          </div>

          <Figure
            className={styles.groupPhoto}
            src="/img/colectiva.jpg"
            alt="Retrato de grupo de las integrantes de LAUME Teatral."
            ratio="1 / 1"
            rotate={1.4}
            caption="fig.06 — la colectiva"
            figId="fig.06"
            sizes="(min-width: 880px) 360px, 90vw"
          />
        </section>

        {/* —— The ensemble, equal —— */}
        <section className={styles.ensemble}>
          <div className={styles.ensembleHead}>
            <h2 className={styles.ensembleTitle}>Las seis</h2>
            <p className={styles.ensembleNote}>
              misma escala · sin jerarquía · puede crecer o reducirse
            </p>
          </div>

          <ul className={styles.grid}>
            {members.map((m) => (
              <li key={m.slug}>
                <Link href={`/colectiva/${m.slug}`} className={styles.card}>
                  <Figure
                    src={m.portrait}
                    alt={`Retrato de ${m.name}.`}
                    ratio="3 / 4"
                    figId="retrato"
                    sizes="(min-width: 900px) 160px, (min-width: 600px) 30vw, 45vw"
                  />
                  <h3 className={styles.cardName}>{m.name}</h3>
                  <p className={styles.cardDisciplines}>
                    {m.disciplines.join(" · ")}
                  </p>
                  <p className={styles.cardBio}>{m.bioEs}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
