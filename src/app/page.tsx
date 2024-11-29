import FeaturesSectionComponent from "@/components/usecase/FeaturesSectionComponent";
import HeroComponent from "@/components/usecase/HeroComponent";
import MainFeatureComponent from "@/components/usecase/MainFeatureComponent";

export default function Home() {
  return (
    <div className="px-4">
      <HeroComponent />
      <FeaturesSectionComponent />
      <MainFeatureComponent />
    </div>
  );
}