import AnimatedCounter from "@/components/AnimatedCounter";

export default function SocialProofSection() {
  const statistics = [
    { value: "50K+", label: "Prompts Shared", color: "text-prompt-cyan" },
    { value: "1M+", label: "Monthly Users", color: "text-prompt-purple" },
    { value: "10K+", label: "Happy Creators", color: "text-prompt-pink" },
  ];

  return (
    <section className="py-20 bg-prompt-slate/50" data-testid="social-proof-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg" data-testid="social-proof-subtitle">
            Join 10,000+ creators who've discovered their perfect prompts
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {statistics.map((stat, index) => (
            <div key={stat.label} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
              <AnimatedCounter
                targetValue={stat.value}
                className={`text-5xl font-black ${stat.color} mb-2`}
                testId={`stat-value-${index}`}
                duration={2500 + index * 200}
              />
              <p className="text-gray-300 text-lg" data-testid={`stat-label-${index}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
