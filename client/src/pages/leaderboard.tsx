import { useState } from "react";
import { Trophy, Medal, Award, TrendingUp, Users, Heart, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState("creators");

  const topCreators = [
    {
      rank: 1,
      name: "PromptGenius",
      avatar: "PG",
      prompts: 156,
      likes: 12450,
      copies: 89200,
      badge: "🏆 Master Creator",
      color: "prompt-purple"
    },
    {
      rank: 2,
      name: "AIWhisperer",
      avatar: "AW",
      prompts: 143,
      likes: 11280,
      copies: 76500,
      badge: "🥈 Expert Creator",
      color: "prompt-cyan"
    },
    {
      rank: 3,
      name: "CodeCrafter",
      avatar: "CC",
      prompts: 128,
      likes: 9870,
      copies: 65400,
      badge: "🥉 Pro Creator",
      color: "prompt-pink"
    },
    {
      rank: 4,
      name: "ContentKing",
      avatar: "CK",
      prompts: 98,
      likes: 8650,
      copies: 52300,
      badge: "⭐ Rising Star",
      color: "prompt-orange"
    },
    {
      rank: 5,
      name: "DevMaster",
      avatar: "DM",
      prompts: 87,
      likes: 7920,
      copies: 48100,
      badge: "⭐ Rising Star",
      color: "prompt-purple"
    }
  ];

  const topPrompts = [
    {
      rank: 1,
      title: "Ultimate Code Review Assistant",
      author: "DevMaster",
      likes: 2450,
      copies: 15600,
      category: "coding"
    },
    {
      rank: 2,
      title: "Marketing Strategy Generator",
      author: "ContentKing",
      likes: 2180,
      copies: 14200,
      category: "marketing"
    },
    {
      rank: 3,
      title: "Creative Writing Companion",
      author: "PromptGenius",
      likes: 1920,
      copies: 12800,
      category: "creative"
    }
  ];

  const achievements = [
    { icon: Trophy, title: "First Prompt", description: "Create your first prompt", color: "prompt-purple" },
    { icon: Heart, title: "100 Likes", description: "Receive 100 likes on your prompts", color: "prompt-pink" },
    { icon: Copy, title: "1K Copies", description: "Get 1,000 copies of your prompts", color: "prompt-cyan" },
    { icon: Award, title: "Top Creator", description: "Reach top 10 creators leaderboard", color: "prompt-orange" }
  ];

  return (
    <div className="min-h-screen bg-prompt-dark text-white" data-testid="leaderboard-page">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-black mb-6" data-testid="leaderboard-title">
            Community{" "}
            <span className="bg-gradient-to-r from-prompt-purple to-prompt-cyan bg-clip-text text-transparent">
              Leaderboard
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="leaderboard-description">
            Celebrate our top creators and most popular prompts. Compete, create, and climb the rankings!
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-prompt-slate/30 rounded-xl p-1 flex">
            <Button
              variant={activeTab === "creators" ? "default" : "ghost"}
              onClick={() => setActiveTab("creators")}
              className={`px-6 py-2 rounded-lg transition-all ${
                activeTab === "creators"
                  ? "bg-prompt-purple text-white"
                  : "text-gray-300 hover:text-white"
              }`}
              data-testid="tab-creators"
            >
              <Users className="h-4 w-4 mr-2" />
              Top Creators
            </Button>
            <Button
              variant={activeTab === "prompts" ? "default" : "ghost"}
              onClick={() => setActiveTab("prompts")}
              className={`px-6 py-2 rounded-lg transition-all ${
                activeTab === "prompts"
                  ? "bg-prompt-purple text-white"
                  : "text-gray-300 hover:text-white"
              }`}
              data-testid="tab-prompts"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Top Prompts
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Leaderboard */}
          <div className="lg:col-span-2">
            {activeTab === "creators" && (
              <div className="bg-card-gradient rounded-2xl border border-prompt-purple/20 p-6" data-testid="creators-leaderboard">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Trophy className="text-prompt-purple mr-2 h-6 w-6" />
                  Top Creators
                </h2>
                <div className="space-y-4">
                  {topCreators.map((creator) => (
                    <div
                      key={creator.rank}
                      className="flex items-center justify-between p-4 bg-prompt-slate/20 rounded-xl hover:bg-prompt-slate/30 transition-colors"
                      data-testid={`creator-rank-${creator.rank}`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-8 h-8 font-bold text-lg">
                          {creator.rank <= 3 ? (
                            creator.rank === 1 ? "🥇" : creator.rank === 2 ? "🥈" : "🥉"
                          ) : (
                            <span className="text-gray-400">#{creator.rank}</span>
                          )}
                        </div>
                        <div className={`w-12 h-12 bg-${creator.color}/20 rounded-full flex items-center justify-center`}>
                          <span className={`text-${creator.color} font-bold`}>{creator.avatar}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold" data-testid={`creator-name-${creator.rank}`}>{creator.name}</h3>
                          <p className="text-sm text-gray-400">{creator.badge}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex space-x-6 text-sm">
                          <div>
                            <span className="text-gray-400">Prompts:</span>
                            <span className="ml-1 font-semibold">{creator.prompts}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Likes:</span>
                            <span className="ml-1 font-semibold text-prompt-pink">{creator.likes.toLocaleString()}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Copies:</span>
                            <span className="ml-1 font-semibold text-prompt-cyan">{creator.copies.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "prompts" && (
              <div className="bg-card-gradient rounded-2xl border border-prompt-purple/20 p-6" data-testid="prompts-leaderboard">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <TrendingUp className="text-prompt-cyan mr-2 h-6 w-6" />
                  Most Popular Prompts
                </h2>
                <div className="space-y-4">
                  {topPrompts.map((prompt) => (
                    <div
                      key={prompt.rank}
                      className="flex items-center justify-between p-4 bg-prompt-slate/20 rounded-xl hover:bg-prompt-slate/30 transition-colors"
                      data-testid={`prompt-rank-${prompt.rank}`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-8 h-8 font-bold text-lg">
                          {prompt.rank <= 3 ? (
                            prompt.rank === 1 ? "🥇" : prompt.rank === 2 ? "🥈" : "🥉"
                          ) : (
                            <span className="text-gray-400">#{prompt.rank}</span>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold" data-testid={`prompt-title-${prompt.rank}`}>{prompt.title}</h3>
                          <p className="text-sm text-gray-400">by {prompt.author} • {prompt.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex space-x-6 text-sm">
                          <div className="flex items-center">
                            <Heart className="h-4 w-4 mr-1 text-prompt-pink" />
                            <span className="font-semibold">{prompt.likes.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center">
                            <Copy className="h-4 w-4 mr-1 text-prompt-cyan" />
                            <span className="font-semibold">{prompt.copies.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Achievements */}
          <div className="space-y-6">
            <div className="bg-card-gradient rounded-2xl border border-prompt-purple/20 p-6" data-testid="achievements-panel">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Medal className="text-prompt-orange mr-2 h-5 w-5" />
                Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-prompt-slate/20 rounded-lg"
                      data-testid={`achievement-${index}`}
                    >
                      <IconComponent className={`text-${achievement.color} h-5 w-5`} />
                      <div>
                        <h4 className="font-medium text-sm">{achievement.title}</h4>
                        <p className="text-xs text-gray-400">{achievement.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-cta-gradient rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold mb-3">Join the Competition!</h3>
              <p className="text-sm mb-4 opacity-90">
                Create amazing prompts and climb the leaderboard
              </p>
              <Button
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
                data-testid="join-competition-cta"
              >
                Start Creating
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}