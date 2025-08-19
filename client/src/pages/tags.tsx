import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Tags() {
  return (
    <div className="min-h-screen bg-prompt-dark text-white font-sans overflow-x-hidden" data-testid="tags-page">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight" data-testid="tags-title">
              <span className="bg-gradient-to-r from-prompt-cyan to-prompt-pink bg-clip-text text-transparent">
                Browse
              </span>
              <br />
              <span className="text-white">by Tags</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="tags-description">
              Find prompts organized by categories, use cases, and AI models. 
              Discover exactly what you need for your projects.
            </p>
          </div>

          <div className="bg-gradient-to-br from-prompt-cyan/10 to-prompt-pink/10 rounded-3xl p-8 border border-prompt-cyan/20">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-white">Coming Soon</h2>
              <p className="text-gray-300 mb-6">
                The Tags page will feature comprehensive categorization of prompts, 
                making it easy to find exactly what you're looking for.
              </p>
              <button 
                onClick={() => window.open('https://promptmagic.dev', '_blank')}
                className="bg-prompt-cyan hover:bg-prompt-cyan/90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                data-testid="visit-main-site-button"
              >
                Visit Main Site
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}