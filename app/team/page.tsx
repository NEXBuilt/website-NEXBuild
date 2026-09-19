import type { Metadata } from "next";
import Team from "@/components/Team";
import CTA from "@/components/CTA";

export const metadata: Metadata = { title: "Team" };

export default function TeamPage() {
  return (
    <>
      <Team />
      <CTA />
    </>
  );
}
