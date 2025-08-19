import { Button } from "@/components/ui/button";
import { Rocket, Sparkles, Zap, Star } from "lucide-react";
import ParallaxElement from "@/components/ParallaxElement";

export default function FinalCTASection() {
  const handleFinalCTA = () => {
    window.open('https://promptmagic.dev', '_blank');
  };

  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden" data-testid="final-cta-section">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <ParallaxElement speed={0.3}>
          <div className="absolute top-20 right-20 w-60 h-60 bg-prompt-purple/10 rounded-full blur-3xl"></div>
        </ParallaxElement>
        <ParallaxElement speed={0.2}>
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-prompt-cyan/10 rounded-full blur-3xl"></div>
        </ParallaxElement>
        
        {/* Floating Icons */}
        <ParallaxElement speed={0.4} className="absolute top-32 left-1/4">
          <Sparkles className="text-prompt-purple/30 h-8 w-8 animate-pulse" />
        </ParallaxElement>
        <ParallaxElement speed={0.6} className="absolute bottom-32 right-1/4">
          <Zap className="text-prompt-cyan/30 h-10 w-10 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </ParallaxElement>
        <ParallaxElement speed={0.35} className="absolute top-1/2 left-16">
          <Star className="text-prompt-pink/30 h-6 w-6 animate-pulse" style={{ animationDelay: '1s' }} />
        </ParallaxElement>
        <ParallaxElement speed={0.55} className="absolute top-40 right-16">
          <Star className="text-prompt-orange/30 h-7 w-7 animate-pulse" style={{ animationDelay: '1.5s' }} />
        </ParallaxElement>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight" data-testid="final-cta-title">
          Ready to Discover Your{" "}
          <span className="bg-gradient-to-r from-prompt-purple to-prompt-cyan bg-clip-text text-transparent">
            Perfect Prompts?
          </span>
        </h2>
        <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed" data-testid="final-cta-description">
          Join thousands of creators who are already using Prompt Magic to 
          supercharge their AI workflows.
        </p>
        
        {/* Final CTA Button */}
        <Button 
          onClick={handleFinalCTA}
          className="bg-cta-gradient hover:shadow-2xl hover:shadow-prompt-purple/30 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 mb-8"
          data-testid="button-final-cta"
        >
          <Rocket className="mr-3 h-6 w-6" />
          Start Exploring for Free
        </Button>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 text-lg">
          <div className="flex items-center">
            <Star className="text-prompt-purple mr-2 h-5 w-5 fill-current" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center">
            <Zap className="text-prompt-cyan mr-2 h-5 w-5" />
            <span>Instant access</span>
          </div>
          <div className="flex items-center">
            <Sparkles className="text-prompt-pink mr-2 h-5 w-5" />
            <span>Join 50,000+ prompts</span>
          </div>
        </div>
      </div>
    </section>
  );
}
