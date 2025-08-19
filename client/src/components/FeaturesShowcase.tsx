import { Zap, Share2, FolderOpen, Edit, PlayCircle, Feather } from "lucide-react";
import keyboardImage from "@assets/pexels-florenz-mendoza-3667096-5489402_1755619490413.jpg";

export default function FeaturesShowcase() {
  const features = [
    {
      icon: Zap,
      title: "Instant Access to AI Superpowers",
      description: "Browse thousands of battle-tested prompts. Copy with one click. No signup walls. No payment gates. Just pure unlimited magic at your fingertips.",
      color: "prompt-cyan"
    },
    {
      icon: Share2,
      title: "Share Your Genius in Seconds",
      description: "Got a prompt that's fire? Share it with the world in under 10 seconds. Our AI automatically tags and categorizes your contribution. Watch it spread.",
      color: "prompt-purple"
    },
    {
      icon: FolderOpen,
      title: "Create Your Own Prompt Library",
      description: "Build your arsenal of AI superpowers, scattered between docs, notes, reddit, discord channels and you just save them all here so you never lose that prompt magic.",
      color: "prompt-pink"
    },
    {
      icon: Edit,
      title: "Remix and Evolve",
      description: "Every prompt is a starting point. Fix the bugs down there, ask more, and contribute back to the community so our hive mind eventually converts everyone.",
      color: "prompt-orange"
    },
    {
      icon: PlayCircle,
      title: "Run New Prompts on LLMs with 1 Click",
      description: "Try out a prompt that intrigues you, just visit us. Click on \"launch the prompt in your ChatGPT\". Claude, Gemini, whatever's best. One click away from copy / paste madness!",
      color: "prompt-cyan"
    },
    {
      icon: Feather,
      title: "Zero Friction",
      description: "No login to browse and access all the magical prompts. One-click prompt copying or copying. Free account to create your own prompt library to be shared. The friction you want to reduce.",
      color: "prompt-purple"
    }
  ];

  return (
    <section id="features-showcase" className="py-20 bg-prompt-dark" data-testid="features-showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6" data-testid="features-title">
            Supercharge Your{" "}
            <span className="bg-gradient-to-r from-prompt-purple via-prompt-cyan to-prompt-pink bg-clip-text text-transparent">
              AI Workflows
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="features-description">
            From instant access to AI superpowers to building your own prompt library, 
            discover how Prompt Magic transforms the way you work with AI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.title}
                className="bg-card-gradient rounded-2xl p-8 border border-prompt-purple/20 hover:border-prompt-purple/40 transition-all duration-300 hover:transform hover:scale-105"
                data-testid={`feature-card-${index}`}
              >
                <div className={`w-16 h-16 bg-${feature.color}/20 rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className={`text-${feature.color} h-8 w-8`} />
                </div>
                <h3 className="text-2xl font-bold mb-4" data-testid={`feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed" data-testid={`feature-description-${index}`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
