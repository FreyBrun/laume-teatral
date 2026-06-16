import type { Metadata } from "next";
import { featuredShow } from "@/data/shows";
import Umbral from "@/components/Umbral";

export const metadata: Metadata = {
  title: "El umbral — boletos",
  // Reached deliberately from the show page, not from global chrome (handoff §4).
  robots: { index: false, follow: true },
};

export default function UmbralPage() {
  return <Umbral show={featuredShow()} />;
}
