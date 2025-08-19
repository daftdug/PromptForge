import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Trophy, Star, TrendingUp, Users, Award, Crown, Medal, Zap } from "lucide-react";

export default function Leaderboard() {
  const topCreators = [
    {
      rank: 1,
      name: "Sarah Chen",
      avatar: "SC",
      prompts: 156,
      likes: 12450,
      downloads: 34200,
      badge: "Master Creator",
      streak: 42,
      color: "from-yellow-400 to-orange-500"
    },
    {
      rank: 2,
      name: "Alex Kumar",
      avatar: "AK",
      prompts: 142,
      likes: 11230,
      downloads: 28900,
      badge: "Code Wizard",
      streak: 38,
      color: "from-gray-300 to-gray-500"
    },
    {
      rank: 3,
      name: "Emma Rodriguez",
      avatar: "ER",
      prompts: 134,
      likes: 10800,
      downloads: 25600,
      badge: "Creative Mind",
      streak: 35,
      color: "from-amber-600 to-orange-700"
    }
  ];

  const allContributors = [
    { rank: 4, name: "Michael Thompson", prompts: 89, likes: 7890, downloads: 18400 },
    { rank: 5, name: "Lisa Park", prompts: 76, likes: 6750, downloads: 15200 },
    { rank: 6, name: "David Wilson", prompts: 68, likes: 5940, downloads: 13800 },
    { rank: 7, name: "Jessica Lee", prompts: 61, likes: 5420, downloads: 12100 },
    { rank: 8, name: "Carlos Martinez", prompts: 55, likes: 4890, downloads: 10700 },
    { rank: 9, name: "Anna Chang", prompts: 49, likes: 4320, downloads: 9500 },
    { rank: 10, name: "Robert Johnson", prompts: 43, likes: 3780, downloads: 8200 }
  ];

  const categories = [
    {
      title: "Most Popular This Month",
      icon: TrendingUp,
      leaders: [
        { name: "Marketing Mastery Pack", creator: "Sarah Chen", uses: 2340 },
        { name: "Code Review Assistant", creator: "Alex Kumar", uses: 1890 },
        { name: "Creative Story Builder", creator: "Emma Rodriguez", uses: 1650 }
      ]
    },
    {
      title: "Rising Stars",
      icon: Star,
      leaders: [
        { name: "Jamie Foster", joined: "2 weeks ago", growth: "+340%" },
        { name: "Ryan Kim", joined: "3 weeks ago", growth: "+290%" },
        { name: "Sofia Patel", joined: "1 month ago", growth: "+245%" }
      ]
    },
    {
      title: "Community Champions",
      icon: Users,
      leaders: [
        { name: "Michael Thompson", contributions: "142 reviews" },
        { name: "Lisa Park", contributions: "89 collaborations" },
        { name: "David Wilson", contributions: "67 tutorials" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-prompt-dark text-white overflow-x-hidden" data-testid="leaderboard-page" style={{ fontFamily: "'NTR', 'Inter', system-ui, -apple-system, sans-serif" }}>
      <Navigation />
      
      <div className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight" data-testid="leaderboard-title">
              <span className="bg-gradient-to-r from-prompt-pink to-prompt-orange bg-clip-text text-transparent">
                Community Leaderboard
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed" data-testid="leaderboard-description">
              Celebrate the most active creators and contributors in our community.
              See who's leading in prompt creation, usage, and community engagement.
            </p>
          </div>

          {/* Top 3 Podium */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
              <Trophy className="text-yellow-400 mr-3 h-8 w-8" />
              Top Creators
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {topCreators.map((creator, index) => (
                <div
                  key={creator.rank}
                  className="bg-card-gradient rounded-xl p-6 border border-prompt-purple/20 hover:border-prompt-purple/40 transition-all duration-300"
                  data-testid={`top-creator-${creator.rank}`}
                >
                  {/* Simple rank and name */}
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-black mr-3 text-prompt-orange">
                      #{creator.rank}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold text-white flex items-center">
                        <span className="w-8 h-8 bg-prompt-purple rounded-full flex items-center justify-center text-white font-bold text-base mr-3">
                          {creator.avatar}
                        </span>
                        {creator.name}
                      </h3>
                      <p className="text-gray-400 text-base">{creator.badge}</p>
                    </div>
                  </div>

                  {/* Simple stats */}
                  <div className="text-gray-300 text-xl">
                    <p><span className="font-bold text-white">{creator.prompts}</span> prompts</p>
                    <p><span className="font-bold text-white">{creator.likes.toLocaleString()}</span> likes</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Leaders */}
          <div className="mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div
                    key={category.title}
                    className="bg-card-gradient rounded-2xl p-6 border border-prompt-purple/20"
                    data-testid={`category-${index}`}
                  >
                    <div className="flex items-center mb-4">
                      <IconComponent className="text-prompt-cyan mr-2 h-5 w-5" />
                      <h3 className="font-bold text-lg">{category.title}</h3>
                    </div>
                    <div className="space-y-3">
                      {category.leaders.map((leader, leaderIndex) => (
                        <div
                          key={leaderIndex}
                          className="flex items-center justify-between"
                          data-testid={`leader-${index}-${leaderIndex}`}
                        >
                          <span className="text-gray-300">{leader.name}</span>
                          <span className="text-sm font-semibold">
                            {'uses' in leader && leader.uses}
                            {'growth' in leader && (
                              <span className="text-prompt-cyan">{leader.growth}</span>
                            )}
                            {'contributions' in leader && (
                              <span className="text-prompt-pink">{leader.contributions}</span>
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Full Leaderboard */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Full Rankings</h2>
            <div className="bg-card-gradient rounded-xl p-6 border border-prompt-purple/20">
              <div className="space-y-3">
                {allContributors.map((contributor) => (
                  <div
                    key={contributor.rank}
                    className="flex items-center justify-between py-4 border-b border-prompt-slate/20 last:border-b-0"
                    data-testid={`contributor-${contributor.rank}`}
                  >
                    <div className="flex items-center">
                      <span className="text-prompt-orange font-bold text-xl mr-4">
                        #{contributor.rank}
                      </span>
                      <span className="w-8 h-8 bg-prompt-purple rounded-full flex items-center justify-center text-white font-bold text-base mr-4">
                        {contributor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                      <span className="font-semibold text-xl">{contributor.name}</span>
                    </div>
                    <div className="flex items-center space-x-6 text-gray-400">
                      <span className="text-lg">{contributor.prompts} prompts</span>
                      <span className="text-lg">{contributor.likes.toLocaleString()} likes</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              className="bg-gradient-to-r from-prompt-pink to-prompt-orange hover:shadow-lg hover:shadow-prompt-pink/25 text-white px-8 py-3 rounded-xl font-semibold"
              onClick={() => window.open('/signup', '_self')}
              data-testid="join-community-button"
            >
              <Users className="mr-2 h-5 w-5" />
              Join the Community
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}