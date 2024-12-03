import { getDailyPrompt } from "@/actions/public";
import PageLayout from "@/components/layouts/PageLayout";
import CTAComponent from "@/components/usecase/CTAComponent";
import FAQComponent from "@/components/usecase/FAQComponent";
import FeaturesSectionComponent from "@/components/usecase/FeaturesSectionComponent";
import HeroComponent from "@/components/usecase/HeroComponent";
import MainFeatureComponent from "@/components/usecase/MainFeatureComponent";
import MoodAnalytics from "@/components/usecase/MoodAnalyticsComponent";
import TestimonialsComponent from "@/components/usecase/TestimonialsComponent";

export default async function Home() {
  const prompt = await getDailyPrompt()

  return (
    <PageLayout className="space-y-28">
      <HeroComponent advice={prompt.advice} />
      <FeaturesSectionComponent />
      <MainFeatureComponent />
      <MoodAnalytics />
      <TestimonialsComponent />
      <FAQComponent />
      <CTAComponent />
    </PageLayout>
  );
}