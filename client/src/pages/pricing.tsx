import { Check, Zap, Crown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      icon: Zap,
      color: "prompt-cyan",
      features: [
        "Browse unlimited prompts",
        "Copy prompts with one click",
        "Basic search and filtering",
        "Community access",
        "Create up to 5 prompts",
        "Standard support"
      ],
      limitations: [
        "Limited prompt creation",
        "No advanced analytics",
        "No priority support"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$9",
      period: "per month",
      description: "For serious prompt creators",
      icon: Crown,
      color: "prompt-purple",
      features: [
        "Everything in Free",
        "Unlimited prompt creation",
        "Advanced analytics dashboard",
        "Priority community support",
        "Custom prompt categories",
        "Export prompts to CSV",
        "API access (coming soon)",
        "Early access to new features"
      ],
      limitations: [],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Team",
      price: "$29",
      period: "per month",
      description: "For teams and organizations",
      icon: Rocket,
      color: "prompt-pink",
      features: [
        "Everything in Pro",
        "Team workspace (up to 10 members)",
        "Admin dashboard",
        "Team analytics",
        "Bulk prompt management",
        "Priority support & training",
        "Custom integrations",
        "Advanced permissions"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const trainingPackages = [
    {
      name: "Prompt Engineering Fundamentals",
      price: "$149",
      duration: "4 hours",
      description: "Master the basics of effective prompt engineering",
      features: [
        "Core prompting techniques",
        "Understanding AI models",
        "Practical exercises",
        "Certificate of completion"
      ]
    },
    {
      name: "Advanced Prompt Strategies",
      price: "$299",
      duration: "8 hours",
      description: "Advanced techniques for complex AI interactions",
      features: [
        "Complex reasoning prompts",
        "Chain-of-thought techniques",
        "Multi-step workflows",
        "Business applications",
        "1-on-1 coaching session"
      ]
    },
    {
      name: "Business AI Implementation",
      price: "$599",
      duration: "12 hours",
      description: "Complete business transformation with AI",
      features: [
        "Custom workflow design",
        "Team training sessions",
        "Implementation support",
        "3 months of follow-up",
        "ROI tracking"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-prompt-dark text-white" data-testid="pricing-page">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-black mb-6" data-testid="pricing-title">
            Simple,{" "}
            <span className="bg-gradient-to-r from-prompt-purple to-prompt-cyan bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="pricing-description">
            Choose the plan that fits your needs. Upgrade or downgrade at any time.
          </p>
        </div>

        {/* Platform Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Access</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <div
                  key={plan.name}
                  className={`relative bg-card-gradient rounded-2xl border p-8 transition-all duration-300 hover:transform hover:scale-105 ${
                    plan.popular
                      ? "border-prompt-purple shadow-lg shadow-prompt-purple/20"
                      : "border-prompt-purple/20 hover:border-prompt-purple/40"
                  }`}
                  data-testid={`plan-${plan.name.toLowerCase()}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cta-gradient text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-${plan.color}/20 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`text-${plan.color} h-8 w-8`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2" data-testid={`plan-name-${index}`}>{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="mb-2">
                      <span className="text-4xl font-black" data-testid={`plan-price-${index}`}>{plan.price}</span>
                      <span className="text-gray-400 ml-2">/ {plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start" data-testid={`plan-feature-${index}-${featureIndex}`}>
                        <Check className={`text-${plan.color} mr-3 mt-1 h-4 w-4 flex-shrink-0`} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-cta-gradient hover:shadow-lg hover:shadow-prompt-purple/25"
                        : `border-${plan.color} text-${plan.color} hover:bg-${plan.color} hover:text-white`
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    data-testid={`plan-cta-${index}`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Training Packages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Training</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Take your AI skills to the next level with our expert-led training programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {trainingPackages.map((pkg, index) => (
              <div
                key={pkg.name}
                className="bg-card-gradient rounded-2xl border border-prompt-purple/20 p-6 hover:border-prompt-purple/40 transition-all duration-300"
                data-testid={`training-package-${index}`}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2" data-testid={`training-name-${index}`}>{pkg.name}</h3>
                  <p className="text-gray-400 mb-4">{pkg.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-prompt-orange" data-testid={`training-price-${index}`}>{pkg.price}</span>
                    <span className="text-gray-400 ml-2">• {pkg.duration}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start" data-testid={`training-feature-${index}-${featureIndex}`}>
                      <Check className="text-prompt-orange mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full border-prompt-orange text-prompt-orange hover:bg-prompt-orange hover:text-white"
                  data-testid={`training-cta-${index}`}
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card-gradient rounded-xl p-6 text-left">
              <h3 className="font-semibold mb-2">Can I switch plans anytime?</h3>
              <p className="text-gray-400">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="bg-card-gradient rounded-xl p-6 text-left">
              <h3 className="font-semibold mb-2">Is there a free trial for Pro?</h3>
              <p className="text-gray-400">Yes, we offer a 14-day free trial for the Pro plan. No credit card required.</p>
            </div>
            <div className="bg-card-gradient rounded-xl p-6 text-left">
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-400">We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}