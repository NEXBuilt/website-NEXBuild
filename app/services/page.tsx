import type { Metadata } from "next";
import Services from "@/components/Services";
import Why from "@/components/Why";
import CTA from "@/components/CTA";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <Services />
      <Why />
      <CTA />
    </>
  );
}
