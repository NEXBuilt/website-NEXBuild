import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Process from "@/components/Process";
import Why from "@/components/Why";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import ContactSection from "@/components/ContactSection";
import HomeMotion from "@/components/HomeMotion";

export default function Home() {
  return (
    <HomeMotion>
      <Hero />
      <TrustStrip />
      <Services />
      <FeaturedWork />
      <Process />
      <Why />
      <Team />
      <CTA href="#contact" />
      <ContactSection />
    </HomeMotion>
  );
}
