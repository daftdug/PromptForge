import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export default function FinalCTASection() {
  const handleFinalCTA = () => {
    window.open('https://promptmagic.dev', '_blank');
  };

  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden" data-testid="final-cta-section">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-60 h-60 bg-prompt-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-prompt-cyan/10 rounded-full blur-3xl"></div>
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
        
        <p className="text-gray-400" data-testid="final-cta-subtext">
          No credit card required • Instant access • Join 50,000+ prompts
        </p>
      </div>
    </section>
  );
}
