import { Hero } from "@/components/hero";
import { OnboardingSteps } from "@/components/onboarding-steps";
import { WhyBotGuide } from "@/components/what-is-openclaw";
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
      <OnboardingSteps />
      <WhyBotGuide />
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
