import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import VideoBackgroundSection from "@/components/VideoBackgroundSection";
import CommunitySection from "@/components/CommunitySection";
import TestimonialsSection from "@/components/NewTestimonialsSection";
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
      <VideoBackgroundSection />
      <CommunitySection />
      <TestimonialsSection />
      <TrainingSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
