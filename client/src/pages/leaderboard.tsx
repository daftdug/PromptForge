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
    <div className="min-h-screen bg-prompt-dark text-white font-sans overflow-x-hidden" data-testid="leaderboard-page">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight" data-testid="leaderboard-title">
              <span className="bg-gradient-to-r from-prompt-pink to-prompt-orange bg-clip-text text-transparent">
                Community Leaderboard
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="leaderboard-description">
              Celebrate the most active creators and contributors in our community.
              See who's leading in prompt creation, usage, and community engagement.
            </p>
          </div>

          {/* Top 3 Podium */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center">
              <Trophy className="text-yellow-400 mr-2 h-6 w-6" />
              Top Creators
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {topCreators.map((creator, index) => (
                <div
                  key={creator.rank}
                  className={`relative bg-card-gradient rounded-2xl p-6 border transition-all duration-300 hover:transform hover:scale-105 ${
                    creator.rank === 1 
                      ? 'border-yellow-400/50 shadow-xl shadow-yellow-400/20'
                      : creator.rank === 2
                      ? 'border-gray-400/50 shadow-xl shadow-gray-400/20'
                      : 'border-amber-600/50 shadow-xl shadow-amber-600/20'
                  }`}
                  data-testid={`top-creator-${creator.rank}`}
                >
                  {/* Rank Badge */}
                  <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r ${creator.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    {creator.rank === 1 ? <Crown className="h-4 w-4" /> : creator.rank}
                  </div>

                  {/* Avatar */}
                  <div className="text-center mb-4 mt-2">
                    <div className={`w-16 h-16 bg-gradient-to-r ${creator.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-2`}>
                      {creator.avatar}
                    </div>
                    <h3 className="text-xl font-bold text-white">{creator.name}</h3>
                    <span className={`text-sm px-2 py-1 bg-gradient-to-r ${creator.color} text-white rounded-full`}>
                      {creator.badge}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 flex items-center">
                        <Zap className="h-4 w-4 mr-1" />
                        Prompts
                      </span>
                      <span className="font-bold">{creator.prompts}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        Likes
                      </span>
                      <span className="font-bold">{creator.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        Downloads
                      </span>
                      <span className="font-bold">{creator.downloads.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-prompt-slate/20 pt-3">
                      <span className="text-gray-300">Streak</span>
                      <span className="font-bold text-prompt-orange">{creator.streak} days 🔥</span>
                    </div>
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
            <h2 className="text-2xl font-bold mb-6">Full Rankings</h2>
            <div className="bg-card-gradient rounded-2xl p-6 border border-prompt-purple/20">
              <div className="space-y-4">
                {allContributors.map((contributor) => (
                  <div
                    key={contributor.rank}
                    className="flex items-center justify-between py-3 border-b border-prompt-slate/20 last:border-b-0"
                    data-testid={`contributor-${contributor.rank}`}
                  >
                    <div className="flex items-center">
                      <span className="text-gray-400 font-bold text-lg mr-4 w-6">
                        #{contributor.rank}
                      </span>
                      <div className="w-10 h-10 bg-prompt-purple/20 rounded-full flex items-center justify-center text-prompt-purple font-bold mr-4">
                        {contributor.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-semibold">{contributor.name}</span>
                    </div>
                    <div className="flex items-center space-x-6 text-sm text-gray-400">
                      <span>{contributor.prompts} prompts</span>
                      <span>{contributor.likes.toLocaleString()} likes</span>
                      <span>{contributor.downloads.toLocaleString()} downloads</span>
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
              onClick={() => window.open('https://promptmagic.dev', '_blank')}
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