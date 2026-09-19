import type { Metadata } from "next";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

export const metadata: Metadata = { title: "Process" };

export default function ProcessPage() {
  return (
    <>
      <Process />
      <CTA />
    </>
  );
}
