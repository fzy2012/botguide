import { Hero } from "@/components/hero";
import { WhatIsOpenClaw } from "@/components/what-is-openclaw";
import { LearningPath } from "@/components/learning-path";
import { SkillsShowcase } from "@/components/skills-showcase";
import { ResourceAggregation } from "@/components/resource-aggregation";
import { FeaturedGuides } from "@/components/featured-guides";
import { FeaturesSection } from "@/components/features-section";
import { EcosystemSection } from "@/components/ecosystem-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsOpenClaw />
      <LearningPath />
      <SkillsShowcase />
      <ResourceAggregation />
      <FeaturedGuides />
      <FeaturesSection />
      <EcosystemSection />
      <CTASection />
    </>
  );
}
