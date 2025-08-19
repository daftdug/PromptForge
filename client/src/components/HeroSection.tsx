import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Rocket, Play, BookOpen, Sparkles } from "lucide-react";
import { Link } from "wouter";
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
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/3 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-7xl font-black mb-8 leading-tight" data-testid="hero-title">
              Discover the Magic<br />
              Behind Every Great<br />
              <span className="bg-gradient-to-r from-prompt-purple to-white bg-clip-text text-transparent">
                AI Response
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed" data-testid="hero-description">
              Join thousands of creators sharing, remixing, and perfecting prompts for{" "}
              <span className="text-white font-semibold">ChatGPT</span>,{" "}
              <span className="text-white font-semibold">Claude</span>,{" "}
              <span className="text-white font-semibold">Gemini</span>, and beyond.{" "}
              <span className="text-gray-400 font-medium">No login required.</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/courses">
                <Button 
                  className="bg-gradient-to-r from-prompt-purple to-prompt-cyan hover:shadow-lg hover:shadow-prompt-purple/25 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105"
                  data-testid="button-master-prompts"
                >
                  <BookOpen className="mr-3 h-6 w-6" />
                  Master AI Prompts
                </Button>
              </Link>
              <Link href="/prompts">
                <Button 
                  className="bg-gradient-to-r from-prompt-cyan to-prompt-pink hover:shadow-lg hover:shadow-prompt-cyan/25 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105"
                  data-testid="button-explore-prompts"
                >
                  <Sparkles className="mr-3 h-6 w-6" />
                  Explore Prompts Free
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Content - Demo Video */}
          <div className="relative">
            <div className="relative w-full h-80 lg:h-96 rounded-3xl overflow-hidden border border-prompt-purple/20 bg-card-gradient" data-testid="hero-demo-video">
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
                  className="bg-black/50 backdrop-blur-md hover:bg-black/70 text-white border-2 border-white/60 hover:border-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 transform hover:scale-110"
                  data-testid="demo-overlay-button"
                >
                  <Play className="mr-3 h-6 w-6 fill-white" />
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
