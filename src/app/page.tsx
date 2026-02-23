import { Hero } from "@/components/hero";
import { FeaturesSection } from "@/components/features-section";
import { FeaturedGuides } from "@/components/featured-guides";
import { EcosystemSection } from "@/components/ecosystem-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <FeaturedGuides />
      <EcosystemSection />
      <CTASection />
    </>
  );
}
