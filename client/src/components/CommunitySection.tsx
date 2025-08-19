import { Users, Search, Sparkles, Check } from "lucide-react";

export default function CommunitySection() {
  const communityFeatures = [
    {
      icon: Users,
      title: "Community Driven",
      color: "prompt-purple",
      benefits: [
        "Rate and review prompts",
        "Leaderboards and awards for top creators",
        "Follow your favorite prompt gurus",
        "Get inspired by truly magical prompts"
      ]
    },
    {
      icon: Search,
      title: "Find Exactly What You Need",
      color: "prompt-cyan",
      benefits: [
        "Smart search across 50+ categories",
        "Filter by AI tool (GPT-4, Claude, Gemini)",
        "Curated prompt packs for specific use cases",
        "Trending and top-rated content"
      ]
    },
    {
      icon: Sparkles,
      title: "Zero Friction Magic",
      color: "prompt-pink",
      benefits: [
        "No login to browse and access all the magical prompts",
        "One-click prompt copying or copying",
        "Free account to create your own prompt library",
        "Easily share prompts with friends and colleagues"
      ]
    }
  ];

  return (
    <section className="py-20 bg-prompt-slate/30" data-testid="community-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {communityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.title} className="text-center lg:text-left" data-testid={`community-feature-${index}`}>
                <div className={`w-16 h-16 bg-${feature.color}/20 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6`}>
                  <IconComponent className={`text-${feature.color} h-8 w-8`} />
                </div>
                <h3 className={`text-2xl font-bold mb-4 text-${feature.color}`} data-testid={`community-title-${index}`}>
                  {feature.title}
                </h3>
                <ul className="space-y-3 text-gray-300">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start" data-testid={`community-benefit-${index}-${benefitIndex}`}>
                      <Check className={`text-${feature.color} mr-3 mt-1 h-4 w-4 flex-shrink-0`} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
