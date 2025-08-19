import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, X, Star, Zap, Crown, Sparkles } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with AI prompts",
      features: [
        "Browse unlimited prompts",
        "Access to community templates",
        "Basic prompt editor",
        "Public prompt sharing",
        "Community support"
      ],
      limitations: [
        "No private collections",
        "No advanced analytics",
        "Basic editor only"
      ],
      ctaText: "Get Started Free",
      popular: false,
      color: "prompt-purple"
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "per month",
      description: "For professionals and creators",
      features: [
        "Everything in Free",
        "Unlimited private collections",
        "Advanced prompt editor",
        "Priority support",
        "Advanced analytics & insights",
        "Custom categories & tags",
        "Team collaboration",
        "Export & API access",
        "Early access to new features"
      ],
      limitations: [],
      ctaText: "Upgrade Now",
      popular: true,
      color: "prompt-cyan"
    }
  ];

  const faqs = [
    {
      question: "What counts as a 'prompt use'?",
      answer: "A prompt use is counted each time you copy or run a prompt template. Creating and editing prompts doesn't count toward your limit."
    },
    {
      question: "Can I upgrade or downgrade anytime?",
      answer: "Yes! You can change your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at your next billing cycle."
    },
    {
      question: "Is there a free trial for Pro plans?",
      answer: "Yes, we offer a 14-day free trial for all Pro plans. No credit card required to start."
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes! Students and educators get 50% off Pro plans. Contact us with your .edu email for verification."
    }
  ];

  return (
    <div className="min-h-screen bg-prompt-dark text-white overflow-x-hidden" data-testid="pricing-page" style={{ fontFamily: "'NTR', 'Inter', system-ui, -apple-system, sans-serif" }}>
      <Navigation />
      
      <div className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight" data-testid="pricing-title">
              <span className="bg-gradient-to-r from-prompt-orange to-prompt-purple bg-clip-text text-transparent">
                Simple Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="pricing-description">
              Choose the perfect plan for your AI prompting needs. 
              Start free and upgrade as you grow.
            </p>
          </div>

          {/* Pricing Plans */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-card-gradient rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-prompt-cyan/50 shadow-xl shadow-prompt-cyan/20' 
                    : 'border-prompt-purple/20'
                }`}
                data-testid={`plan-${plan.name.toLowerCase()}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-prompt-cyan to-prompt-purple text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-prompt-cyan mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/ {plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="text-prompt-cyan h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, limitIndex) => (
                      <li key={`limit-${limitIndex}`} className="flex items-start">
                        <X className="text-gray-500 h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-500">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-prompt-cyan to-prompt-purple hover:shadow-lg hover:shadow-prompt-cyan/25 text-white'
                      : 'bg-prompt-purple/20 border border-prompt-purple/40 text-prompt-purple hover:bg-prompt-purple hover:text-white'
                  }`}
                  onClick={() => window.open('https://promptmagic.dev', '_blank')}
                  data-testid={`cta-${plan.name.toLowerCase()}`}
                >
                  {plan.ctaText}
                </Button>
              </div>
            ))}
          </div>

          {/* Features Comparison */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-prompt-purple to-prompt-cyan bg-clip-text text-transparent">
                Everything You Need
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card-gradient rounded-2xl p-6 border border-prompt-purple/20 text-center">
                <Zap className="text-prompt-purple h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
                <p className="text-gray-300">Get instant access to thousands of optimized prompts with one-click copying and editing.</p>
              </div>
              <div className="bg-card-gradient rounded-2xl p-6 border border-prompt-cyan/20 text-center">
                <Crown className="text-prompt-cyan h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
                <p className="text-gray-300">All prompts are tested, optimized, and rated by our community of AI experts and practitioners.</p>
              </div>
              <div className="bg-card-gradient rounded-2xl p-6 border border-prompt-pink/20 text-center">
                <Sparkles className="text-prompt-pink h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Always Updated</h3>
                <p className="text-gray-300">New prompts added daily, with updates for the latest AI models and best practices.</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-prompt-orange to-prompt-pink bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-card-gradient rounded-xl p-6 border border-prompt-purple/20"
                    data-testid={`faq-${index}`}
                  >
                    <h3 className="font-bold text-lg mb-3 text-prompt-cyan">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-prompt-purple/10 to-prompt-cyan/10 rounded-3xl p-12 border border-prompt-purple/20">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals already using Prompt Magic to supercharge their AI workflows.
              </p>
              <Button
                className="bg-gradient-to-r from-prompt-purple to-prompt-cyan hover:shadow-lg hover:shadow-prompt-purple/25 text-white px-8 py-4 rounded-xl font-semibold text-lg"
                onClick={() => window.open('https://promptmagic.dev', '_blank')}
                data-testid="final-cta-button"
              >
                Start Your Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}