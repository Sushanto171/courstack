import { CTA } from "@/components/modules/home/CTA";
import { FeaturedCourses } from "@/components/modules/home/FeaturedCourse";
import FeaturesGrid from "@/components/modules/home/FeaturesGrid";
import { HeroSection } from "@/components/modules/home/hero/HeroSection";
import SocialProof from "@/components/modules/home/Social-Prof";

export default function HomePage() {
  return (
    <div>
      <HeroSection />

      <SocialProof />

      <FeaturedCourses />

      <FeaturesGrid />

      <CTA />


    </div>
  );
}