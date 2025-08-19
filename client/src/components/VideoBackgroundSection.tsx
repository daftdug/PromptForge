import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import educationalVideo from "@assets/4146195-uhd_3840_2160_25fps_1755619470462.mp4";

export default function VideoBackgroundSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(console.log);
    }
  }, []);

  const handleExploreFeatures = () => {
    window.open('https://promptmagic.dev', '_blank');
  };

  return (
    <section className="relative py-20 overflow-hidden" data-testid="video-background-section">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onError={(e) => {
            console.log('Educational video error:', e);
            // Hide video element on error and show gradient fallback
            if (videoRef.current) {
              videoRef.current.style.display = 'none';
            }
          }}
        >
          <source src={educationalVideo} type="video/mp4" />
          <source src="/attached_assets/4426378-uhd_3840_2160_25fps_1755619470465.mp4" type="video/mp4" />
          <source src="/attached_assets/4828604-uhd_4096_2160_25fps (1)_1755619470466.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-prompt-purple/60 via-prompt-dark/70 to-prompt-cyan/60"></div>
        {/* Fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-prompt-purple/40 via-prompt-dark/60 to-prompt-cyan/40 video-fallback"></div>
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