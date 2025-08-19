import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import educationalVideo from "@assets/5125949-uhd_4096_2160_30fps_1755625417781.mp4";

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
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden" data-testid="video-background-section">
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
          <source src="/attached_assets/4146195-uhd_3840_2160_25fps_1755619470462.mp4" type="video/mp4" />
          <source src="/attached_assets/4426378-uhd_3840_2160_25fps_1755619470465.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-prompt-purple/60 via-prompt-dark/70 to-prompt-cyan/60"></div>
        {/* Fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-prompt-purple/40 via-prompt-dark/60 to-prompt-cyan/40 video-fallback"></div>
      </div>

      {/* Background decorative elements matching hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-prompt-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-prompt-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/3 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-black mb-6 leading-tight text-white">
            Experience the Power of
            <br />
            <span className="bg-gradient-to-r from-prompt-purple to-white bg-clip-text text-transparent">
              Perfect Prompts
            </span>
          </h2>
          <p className="text-base lg:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Watch how the right prompt can transform ordinary AI responses into extraordinary results.
            See real examples from our community in action.
          </p>
          
          <Button 
            onClick={handleExploreFeatures}
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-12 py-6 rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-105"
            data-testid="button-see-prompt-magic-action"
          >
            <Play className="mr-3 h-6 w-6" />
            See Prompt Magic in Action
          </Button>
        </div>
      </div>
    </section>
  );
}