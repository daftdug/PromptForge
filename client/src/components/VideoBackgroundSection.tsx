import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="text-center mt-20">
          <Button 
            onClick={handleExploreFeatures}
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            data-testid="button-see-prompt-magic-action"
          >
            <Play className="mr-2 h-5 w-5" />
            See Prompt Magic in Action
          </Button>
        </div>
      </div>
    </section>
  );
}