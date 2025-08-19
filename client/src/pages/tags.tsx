import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, TrendingUp, Hash } from "lucide-react";

export default function Tags() {
  const popularTags = [
    { name: "marketing", count: 1834, trending: true, color: "prompt-purple" },
    { name: "copywriting", count: 1245, trending: true, color: "prompt-cyan" },
    { name: "code", count: 987, trending: false, color: "prompt-pink" },
    { name: "creative", count: 1567, trending: true, color: "prompt-orange" },
    { name: "business", count: 892, trending: false, color: "prompt-purple" },
    { name: "education", count: 734, trending: false, color: "prompt-cyan" },
    { name: "writing", count: 1123, trending: false, color: "prompt-pink" },
    { name: "social-media", count: 656, trending: true, color: "prompt-orange" }
  ];

  const categories = [
    {
      title: "Content Creation",
      tags: ["copywriting", "blogging", "social-media", "newsletters", "articles", "headlines"],
      color: "prompt-purple"
    },
    {
      title: "Development",
      tags: ["code", "debugging", "documentation", "testing", "review", "refactoring"],
      color: "prompt-cyan"
    },
    {
      title: "Business",
      tags: ["marketing", "sales", "strategy", "analysis", "planning", "pitch"],
      color: "prompt-pink"
    },
    {
      title: "Creative",
      tags: ["storytelling", "poetry", "creative", "fiction", "characters", "worldbuilding"],
      color: "prompt-orange"
    },
    {
      title: "Education",
      tags: ["learning", "curriculum", "teaching", "explanation", "summary", "quiz"],
      color: "prompt-purple"
    },
    {
      title: "AI Models",
      tags: ["chatgpt", "claude", "gemini", "gpt-4", "midjourney", "dalle"],
      color: "prompt-cyan"
    }
  ];

  const allTags = [
    "marketing", "copywriting", "code", "creative", "business", "education", "writing", "social-media",
    "debugging", "documentation", "storytelling", "analysis", "learning", "sales", "strategy", "blogging",
    "newsletters", "articles", "headlines", "testing", "review", "poetry", "fiction", "characters",
    "curriculum", "teaching", "explanation", "summary", "chatgpt", "claude", "gemini", "gpt-4",
    "midjourney", "dalle", "productivity", "automation", "workflow", "planning", "brainstorming",
    "research", "presentation", "email", "customer-service", "hr", "finance", "legal", "healthcare"
  ];

  return (
    <div className="min-h-screen bg-prompt-dark text-white overflow-x-hidden" data-testid="tags-page" style={{ fontFamily: "'NTR', 'Inter', system-ui, -apple-system, sans-serif" }}>
      <Navigation />
      
      <div className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight" data-testid="tags-title">
              <span className="bg-gradient-to-r from-prompt-cyan to-prompt-pink bg-clip-text text-transparent">
                Browse by Tags
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed" data-testid="tags-description">
              Find prompts organized by categories, use cases, and AI models. 
              Discover exactly what you need for your projects.
            </p>
          </div>

          {/* Search */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
              <input
                type="text"
                placeholder="Search tags..."
                className="w-full pl-12 pr-6 py-4 bg-prompt-slate/50 border border-prompt-purple/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-prompt-purple/60 text-lg"
                data-testid="search-tags"
              />
            </div>
          </div>

          {/* Popular Tags */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <TrendingUp className="text-prompt-cyan mr-3 h-8 w-8" />
              <h2 className="text-3xl font-bold">Trending Tags</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularTags.map((tag) => (
                <div
                  key={tag.name}
                  className={`bg-card-gradient rounded-xl p-4 border border-${tag.color}/20 hover:border-${tag.color}/40 transition-all duration-300 cursor-pointer hover:transform hover:scale-105`}
                  data-testid={`popular-tag-${tag.name}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Hash className={`text-${tag.color} h-4 w-4 mr-1`} />
                      <span className="font-semibold">{tag.name}</span>
                    </div>
                    {tag.trending && (
                      <TrendingUp className="text-prompt-cyan h-4 w-4" />
                    )}
                  </div>
                  <p className="text-gray-400 text-sm">{tag.count} prompts</p>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <div
                  key={category.title}
                  className={`bg-card-gradient rounded-xl p-6 border border-${category.color}/20 hover:border-${category.color}/40 transition-all duration-300`}
                  data-testid={`category-${category.title.toLowerCase().replace(' ', '-')}`}
                >
                  <h3 className={`text-${category.color} font-bold text-lg mb-4`}>
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.tags.map((tag) => (
                      <button
                        key={tag}
                        className={`text-xs px-2 py-1 bg-${category.color}/10 text-gray-300 hover:text-white hover:bg-${category.color}/20 rounded transition-colors duration-200`}
                        onClick={() => window.open('https://promptmagic.dev', '_blank')}
                        data-testid={`tag-${tag}`}
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Tags Cloud */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">All Tags</h2>
            <div className="bg-card-gradient rounded-xl p-6 border border-prompt-purple/20">
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag, index) => (
                  <button
                    key={tag}
                    className={`text-sm px-3 py-1 bg-prompt-slate/30 text-gray-300 hover:text-white hover:bg-prompt-purple/20 rounded-full transition-all duration-200 transform hover:scale-105`}
                    style={{
                      fontSize: `${0.75 + (Math.random() * 0.5)}rem`,
                      opacity: 0.7 + (Math.random() * 0.3)
                    }}
                    onClick={() => window.open('https://promptmagic.dev', '_blank')}
                    data-testid={`all-tag-${tag}`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              className="bg-gradient-to-r from-prompt-cyan to-prompt-pink hover:shadow-lg hover:shadow-prompt-cyan/25 text-white px-8 py-3 rounded-xl font-semibold"
              onClick={() => window.open('https://promptmagic.dev', '_blank')}
              data-testid="explore-prompts-button"
            >
              Explore All Prompts
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}