import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Rocket, Play } from "lucide-react";
import demoVideo from "@assets/5977124-uhd_3840_2160_25fps_1755619421750.mp4";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.log);
    }
  }, []);

  const handleStartFree = () => {
    window.open('https://promptmagic.dev', '_blank');
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-hero-gradient overflow-hidden" data-testid="hero-section">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-prompt-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-prompt-accent/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight" data-testid="hero-title">
              Discover the Magic<br />
              Behind Every Great<br />
              <span className="bg-gradient-to-r from-prompt-purple to-white bg-clip-text text-transparent">
                AI Response
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed" data-testid="hero-description">
              Join thousands of creators sharing, remixing, and perfecting prompts for{" "}
              <span className="text-white font-semibold">ChatGPT</span>,{" "}
              <span className="text-white font-semibold">Claude</span>,{" "}
              <span className="text-white font-semibold">Gemini</span>, and beyond.{" "}
              <span className="text-prompt-purple font-semibold">No login required.</span>
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Button 
                onClick={handleStartFree}
                className="bg-prompt-purple hover:bg-prompt-purple/90 hover:shadow-lg hover:shadow-prompt-purple/25 text-white px-12 py-6 rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-105"
                data-testid="button-start-free"
              >
                <Rocket className="mr-3 h-6 w-6" />
                Start Exploring for Free
              </Button>
            </div>
          </div>
          
          {/* Right Content - Demo Video */}
          <div className="relative">
            <div className="relative w-full h-64 lg:h-80 rounded-3xl overflow-hidden border border-prompt-purple/20 bg-card-gradient" data-testid="hero-demo-video">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                poster=""
                onError={(e) => {
                  console.log('Video error:', e);
                  // Hide video element on error
                  if (videoRef.current) {
                    videoRef.current.style.display = 'none';
                  }
                }}
              >
                <source src={demoVideo} type="video/mp4" />
                <source src="/attached_assets/4146195-uhd_3840_2160_25fps_1755619470462.mp4" type="video/mp4" />
                <source src="/attached_assets/2516159-hd_1920_1080_24fps_1755619470465.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Dynamic overlay for visual interest */}
              <div className="absolute inset-0 bg-gradient-to-br from-prompt-purple/35 via-prompt-cyan/25 to-prompt-pink/40 pointer-events-none"></div>
              
              {/* Demo button overlay - centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  onClick={handleStartFree}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105"
                  data-testid="demo-overlay-button"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </section>
  );
}
