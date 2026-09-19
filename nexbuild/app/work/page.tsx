import type { Metadata } from "next";
import FeaturedWork from "@/components/FeaturedWork";
import CTA from "@/components/CTA";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <>
      <FeaturedWork />
      <CTA />
    </>
  );
}
