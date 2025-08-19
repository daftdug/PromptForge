import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function VideoBackgroundSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(console.log);
    }
  }, []);

  const handleExploreFeatures = () => {
    document.getElementById('features-showcase')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 overflow-hidden" data-testid="video-background-section">
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-prompt-purple/20 via-prompt-dark/60 to-prompt-cyan/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-prompt-purple/40 via-prompt-dark/60 to-prompt-cyan/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight" data-testid="video-section-title">
            <span className="bg-gradient-to-r from-white via-prompt-cyan to-prompt-pink bg-clip-text text-transparent">
              AI Workflows
            </span>
            <br />
            <span className="text-white">
              Made Simple
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed" data-testid="video-section-description">
            Transform complex AI interactions into streamlined workflows. 
            From brainstorming to execution, Prompt Magic makes every step intuitive and powerful.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={handleExploreFeatures}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              data-testid="button-explore-features"
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Explore Features
            </Button>
            <div className="flex items-center text-gray-200">
              <span className="text-lg font-medium">Trusted by 50,000+ creators</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}