import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Figure from "@/components/Figure";
import { members, getMember } from "@/data/members";
import styles from "./member.module.css";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return members.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) return { title: "Integrante" };
  return {
    title: member.name,
    description: member.bioEs,
  };
}

export default async function MemberPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) notFound();

  return (
    <>
      <Header context={<Link href="/colectiva">← volver a la colectiva</Link>} />

      <main id="main" className={styles.main}>
        <article className={styles.layout}>
          <div className={styles.portraitCol}>
            <Figure
              src={member.portrait}
              alt={`Retrato de ${member.name}.`}
              ratio="3 / 4"
              rotate={-1.2}
              figId="retrato"
              sizes="(min-width: 760px) 320px, 80vw"
              priority
            />
          </div>

          <div className={styles.bioCol}>
            <p className={styles.eyebrow}>{member.disciplines.join(" · ")}</p>
            <h1 className={styles.name}>{member.name}</h1>
            <p className={styles.bio}>{member.fullBioEs}</p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
