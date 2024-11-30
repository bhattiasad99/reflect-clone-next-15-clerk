import FeaturesSectionComponent from "@/components/usecase/FeaturesSectionComponent";
import HeroComponent from "@/components/usecase/HeroComponent";
import MainFeatureComponent from "@/components/usecase/MainFeatureComponent";
import MoodAnalytics from "@/components/usecase/MoodAnalyticsComponent";
import TestimonialsComponent from "@/components/usecase/TestimonialsComponent";

export default function Home() {
  return (
    <div className="px-4 space-y-28">
      <HeroComponent />
      <FeaturesSectionComponent />
      <MainFeatureComponent />
      <MoodAnalytics />
      <TestimonialsComponent />
    </div>
  );
}