import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import CommunitySection from "@/components/CommunitySection";
import TrainingSection from "@/components/TrainingSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-prompt-dark text-white font-inter overflow-x-hidden" data-testid="landing-page">
      <Navigation />
      <HeroSection />
      <SocialProofSection />
      <FeaturesShowcase />
      <CommunitySection />
      <TrainingSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
