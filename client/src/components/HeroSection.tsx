import { Button } from "@/components/ui/button";
import { Rocket, Play, Brain } from "lucide-react";

export default function HeroSection() {
  const handleStartFree = () => {
    window.open('https://promptmagic.dev', '_blank');
  };

  const handleDemoVideo = () => {
    // Placeholder for demo video modal
    console.log('Demo video requested');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden" data-testid="hero-section">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-prompt-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-prompt-cyan/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight" data-testid="hero-title">
              Discover the Magic<br />
              Behind Every Great<br />
              <span className="bg-gradient-to-r from-prompt-purple to-prompt-cyan bg-clip-text text-transparent">
                AI Response
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed" data-testid="hero-description">
              Join thousands of creators sharing, remixing, and perfecting prompts for{" "}
              <span className="text-prompt-cyan font-semibold">ChatGPT</span>,{" "}
              <span className="text-prompt-purple font-semibold">Claude</span>,{" "}
              <span className="text-prompt-pink font-semibold">Gemini</span>, and beyond.{" "}
              <span className="text-white font-semibold">No login required.</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleStartFree}
                className="bg-cta-gradient hover:shadow-lg hover:shadow-prompt-purple/25 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                data-testid="button-start-free"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Start Exploring for Free
              </Button>
              <Button 
                onClick={handleDemoVideo}
                variant="outline"
                className="border-2 border-prompt-purple text-prompt-purple hover:bg-prompt-purple hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                data-testid="button-demo-video"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch a Quick Demo
              </Button>
            </div>
          </div>
          
          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] bg-card-gradient rounded-3xl p-8 border border-prompt-purple/20" data-testid="hero-visual">
              <div className="absolute top-6 right-6 text-prompt-cyan">
                <Brain className="h-10 w-10" />
              </div>
              <div className="text-center h-full flex flex-col justify-center">
                <div className="text-6xl font-black mb-4">
                  <span className="bg-gradient-to-r from-prompt-purple to-prompt-cyan bg-clip-text text-transparent">
                    Prompt
                  </span>
                </div>
                <div className="text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-prompt-cyan to-prompt-pink bg-clip-text text-transparent">
                    Magic
                  </span>
                </div>
                <p className="text-gray-300 text-lg">Your AI Command Center</p>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-20 left-4 w-12 h-12 bg-prompt-purple/30 rounded-full animate-pulse"></div>
              <div className="absolute bottom-20 right-8 w-8 h-8 bg-prompt-cyan/30 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
              <div className="absolute top-1/2 left-0 w-6 h-6 bg-prompt-pink/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
