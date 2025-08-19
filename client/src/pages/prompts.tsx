import { useState } from "react";
import { Search, Filter, Heart, Copy, ExternalLink, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";

export default function PromptsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all", "writing", "coding", "marketing", "analysis", "creative", "business"
  ];

  const prompts = [
    {
      id: 1,
      title: "Content Marketing Strategy Generator",
      description: "Create comprehensive marketing strategies for any product or service with detailed action plans.",
      category: "marketing",
      author: "Sarah Chen",
      likes: 247,
      copies: 1520,
      rating: 4.8,
      aiTools: ["ChatGPT", "Claude"],
      preview: "Act as a senior marketing strategist. Analyze the target market for [PRODUCT] and create a comprehensive..."
    },
    {
      id: 2,
      title: "Code Review Assistant",
      description: "Get detailed code reviews with suggestions for improvements, best practices, and bug detection.",
      category: "coding",
      author: "DevMaster",
      likes: 189,
      copies: 890,
      rating: 4.9,
      aiTools: ["ChatGPT", "Claude", "Gemini"],
      preview: "Review the following code and provide detailed feedback on: 1. Code quality and readability..."
    },
    {
      id: 3,
      title: "Creative Writing Prompt Generator",
      description: "Generate unique, engaging story prompts and character development ideas for any genre.",
      category: "creative",
      author: "WordSmith",
      likes: 312,
      copies: 2100,
      rating: 4.7,
      aiTools: ["ChatGPT", "Claude"],
      preview: "Create an original story prompt that includes: A compelling protagonist with a clear motivation..."
    }
  ];

  const filteredPrompts = prompts.filter(prompt => {
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         prompt.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || prompt.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCopyPrompt = (prompt: any) => {
    navigator.clipboard.writeText(prompt.preview);
    console.log(`Copied prompt: ${prompt.title}`);
  };

  const handleLaunchPrompt = (prompt: any) => {
    window.open('https://chat.openai.com/', '_blank');
  };

  return (
    <div className="min-h-screen bg-prompt-dark text-white" data-testid="prompts-page">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-black mb-6" data-testid="prompts-title">
            Discover{" "}
            <span className="bg-gradient-to-r from-prompt-purple to-prompt-cyan bg-clip-text text-transparent">
              Perfect Prompts
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="prompts-description">
            Browse our collection of battle-tested prompts created by the community. 
            Copy, customize, and launch directly in your favorite AI tool.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search prompts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-prompt-slate border-prompt-purple/20 text-white placeholder-gray-400"
              data-testid="search-input"
            />
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`capitalize ${
                  selectedCategory === category
                    ? "bg-prompt-purple text-white"
                    : "border-prompt-purple/20 text-gray-300 hover:bg-prompt-purple/10"
                }`}
                data-testid={`category-filter-${category}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Prompts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrompts.map((prompt) => (
            <div
              key={prompt.id}
              className="bg-card-gradient rounded-2xl p-6 border border-prompt-purple/20 hover:border-prompt-purple/40 transition-all duration-300"
              data-testid={`prompt-card-${prompt.id}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2" data-testid={`prompt-title-${prompt.id}`}>
                    {prompt.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3" data-testid={`prompt-description-${prompt.id}`}>
                    {prompt.description}
                  </p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium bg-prompt-${
                  prompt.category === 'marketing' ? 'purple' :
                  prompt.category === 'coding' ? 'cyan' : 'pink'
                }/20 text-prompt-${
                  prompt.category === 'marketing' ? 'purple' :
                  prompt.category === 'coding' ? 'cyan' : 'pink'
                }`}>
                  {prompt.category}
                </span>
              </div>

              {/* Preview */}
              <div className="bg-prompt-slate/30 rounded-lg p-3 mb-4">
                <p className="text-gray-400 text-sm truncate" data-testid={`prompt-preview-${prompt.id}`}>
                  {prompt.preview}
                </p>
              </div>

              {/* AI Tools */}
              <div className="flex flex-wrap gap-2 mb-4">
                {prompt.aiTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 bg-prompt-slate/50 rounded-md text-xs text-gray-300"
                    data-testid={`ai-tool-${tool.toLowerCase()}`}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-1" />
                    <span data-testid={`prompt-likes-${prompt.id}`}>{prompt.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <Copy className="h-4 w-4 mr-1" />
                    <span data-testid={`prompt-copies-${prompt.id}`}>{prompt.copies}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-current text-prompt-orange" />
                    <span data-testid={`prompt-rating-${prompt.id}`}>{prompt.rating}</span>
                  </div>
                </div>
                <span className="text-xs">by {prompt.author}</span>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleCopyPrompt(prompt)}
                  className="flex-1 border-prompt-cyan/30 text-prompt-cyan hover:bg-prompt-cyan hover:text-white"
                  data-testid={`copy-prompt-${prompt.id}`}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleLaunchPrompt(prompt)}
                  className="flex-1 bg-cta-gradient hover:shadow-lg hover:shadow-prompt-purple/25"
                  data-testid={`launch-prompt-${prompt.id}`}
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Launch
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-prompt-purple text-prompt-purple hover:bg-prompt-purple hover:text-white px-8 py-3"
            data-testid="load-more-button"
          >
            Load More Prompts
          </Button>
        </div>
      </div>
    </div>
  );
}