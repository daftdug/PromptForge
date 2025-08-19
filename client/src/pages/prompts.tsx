import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, Filter, Heart, Share2, Bookmark, Star, TrendingUp, Clock } from "lucide-react";

export default function Prompts() {
  const featuredPrompts = [
    {
      id: 1,
      title: "Marketing Copy Generator",
      description: "Create compelling marketing copy for any product or service with this comprehensive prompt template.",
      category: "Marketing",
      author: "Sarah Chen",
      likes: 234,
      uses: 1200,
      rating: 4.8,
      tags: ["marketing", "copywriting", "sales"],
      premium: false
    },
    {
      id: 2,
      title: "Code Review Assistant",
      description: "Get detailed code reviews and improvement suggestions for any programming language.",
      category: "Development",
      author: "Alex Kumar",
      likes: 189,
      uses: 856,
      rating: 4.9,
      tags: ["code", "review", "development"],
      premium: true
    },
    {
      id: 3,
      title: "Creative Story Generator",
      description: "Generate engaging stories with plot twists, character development, and rich descriptions.",
      category: "Creative Writing",
      author: "Emma Rodriguez",
      likes: 312,
      uses: 2100,
      rating: 4.7,
      tags: ["creative", "writing", "storytelling"],
      premium: false
    },
    {
      id: 4,
      title: "Business Strategy Analyzer",
      description: "Analyze business strategies, identify opportunities, and create actionable recommendations.",
      category: "Business",
      author: "Michael Thompson",
      likes: 156,
      uses: 678,
      rating: 4.6,
      tags: ["business", "strategy", "analysis"],
      premium: true
    },
    {
      id: 5,
      title: "Learning Path Creator",
      description: "Design personalized learning paths for any subject with structured milestones and resources.",
      category: "Education",
      author: "Lisa Park",
      likes: 278,
      uses: 1450,
      rating: 4.9,
      tags: ["education", "learning", "curriculum"],
      premium: false
    },
    {
      id: 6,
      title: "Social Media Content Planner",
      description: "Plan and create engaging social media content across multiple platforms with this template.",
      category: "Social Media",
      author: "David Wilson",
      likes: 201,
      uses: 980,
      rating: 4.5,
      tags: ["social media", "content", "planning"],
      premium: false
    }
  ];

  const categories = ["All", "Marketing", "Development", "Creative Writing", "Business", "Education", "Social Media"];

  return (
    <div className="min-h-screen bg-prompt-dark text-white overflow-x-hidden" data-testid="prompts-page" style={{ fontFamily: "'NTR', 'Inter', system-ui, -apple-system, sans-serif" }}>
      <Navigation />
      
      <div className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight" data-testid="prompts-title">
              <span className="bg-gradient-to-r from-prompt-purple to-prompt-cyan bg-clip-text text-transparent">
                Browse Prompts
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="prompts-description">
              Discover thousands of high-quality prompts created by our community. 
              Find the perfect prompt for your next AI interaction.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search prompts..."
                  className="w-full pl-10 pr-4 py-3 bg-prompt-slate/50 border border-prompt-purple/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-prompt-purple/60"
                  data-testid="search-input"
                />
              </div>
              <Button
                className="bg-prompt-purple/20 border border-prompt-purple/40 text-prompt-purple hover:bg-prompt-purple hover:text-white px-6 py-3 rounded-xl"
                data-testid="filter-button"
              >
                <Filter className="mr-2 h-5 w-5" />
                Filters
              </Button>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    category === "All"
                      ? "bg-prompt-purple text-white"
                      : "bg-prompt-slate/30 text-gray-300 hover:bg-prompt-purple/20 hover:text-white"
                  }`}
                  data-testid={`category-${category.toLowerCase().replace(' ', '-')}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Prompts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredPrompts.map((prompt) => (
              <div
                key={prompt.id}
                className="bg-card-gradient rounded-2xl p-6 border border-prompt-purple/20 hover:border-prompt-purple/40 transition-all duration-300 hover:transform hover:scale-105"
                data-testid={`prompt-card-${prompt.id}`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-xs px-2 py-1 bg-prompt-cyan/20 text-prompt-cyan rounded-full">
                        {prompt.category}
                      </span>
                      {prompt.premium && (
                        <span className="ml-2 text-xs px-2 py-1 bg-gradient-to-r from-prompt-purple to-prompt-pink text-white rounded-full">
                          PRO
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2" data-testid={`prompt-title-${prompt.id}`}>
                      {prompt.title}
                    </h3>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-prompt-purple">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="text-gray-400 hover:text-prompt-cyan">
                      <Bookmark className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed" data-testid={`prompt-description-${prompt.id}`}>
                  {prompt.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {prompt.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-prompt-slate/40 text-gray-300 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      {prompt.likes}
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {prompt.uses}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 fill-current text-yellow-400" />
                      {prompt.rating}
                    </div>
                  </div>
                </div>

                {/* Author and Action */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">by {prompt.author}</span>
                  <Button
                    className="bg-prompt-purple hover:bg-prompt-purple/90 text-white px-4 py-2 rounded-lg text-sm"
                    onClick={() => window.open('https://promptmagic.dev', '_blank')}
                    data-testid={`use-prompt-${prompt.id}`}
                  >
                    Use Prompt
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button
              className="bg-gradient-to-r from-prompt-purple to-prompt-cyan hover:shadow-lg hover:shadow-prompt-purple/25 text-white px-8 py-3 rounded-xl font-semibold"
              onClick={() => window.open('https://promptmagic.dev', '_blank')}
              data-testid="load-more-button"
            >
              Load More Prompts
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}