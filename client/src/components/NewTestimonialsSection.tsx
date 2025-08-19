import { Star, Quote } from "lucide-react";
import businessPersonImage from "@assets/pexels-karolina-grabowska-7679644_1755619490415.jpg";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechCorp",
      rating: 5,
      text: "Prompt Magic transformed how our team works with AI. We've saved 15+ hours per week and our content quality has dramatically improved.",
      color: "prompt-purple"
    },
    {
      name: "Marcus Rodriguez", 
      role: "Product Manager",
      company: "StartupXYZ",
      rating: 5,
      text: "The community-driven approach is brilliant. I've discovered prompts I never would have thought of, and sharing our own has built great relationships.",
      color: "prompt-cyan"
    },
    {
      name: "Emma Thompson",
      role: "Creative Director", 
      company: "DesignStudio",
      rating: 5,
      text: "From ChatGPT to Claude to Gemini - having all our best prompts organized in one place has been a game-changer for our creative workflow.",
      color: "prompt-pink"
    }
  ];

  return (
    <section className="py-20 bg-prompt-slate/20 relative overflow-hidden" data-testid="testimonials-section">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-prompt-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-prompt-cyan/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6" data-testid="testimonials-title">
            Loved by{" "}
            <span className="bg-gradient-to-r from-prompt-purple to-prompt-cyan bg-clip-text text-transparent">
              Business Professionals
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="testimonials-description">
            See how teams across industries are using Prompt Magic to unlock their AI potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-card-gradient rounded-2xl p-8 border border-prompt-purple/20 hover:border-prompt-purple/40 transition-all duration-300 relative"
              data-testid={`testimonial-card-${index}`}
            >
              {/* Quote icon */}
              <Quote className={`text-${testimonial.color}/40 h-8 w-8 mb-4`} />
              
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className={`text-${testimonial.color} h-4 w-4 fill-current`} />
                ))}
              </div>
              
              {/* Testimonial text */}
              <p className="text-gray-300 mb-6 leading-relaxed" data-testid={`testimonial-text-${index}`}>
                "{testimonial.text}"
              </p>
              
              {/* Author info */}
              <div className="flex items-center">
                <div className={`w-12 h-12 bg-${testimonial.color}/20 rounded-full flex items-center justify-center mr-4`}>
                  <span className={`text-${testimonial.color} font-bold text-lg`}>
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white" data-testid={`testimonial-name-${index}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400" data-testid={`testimonial-role-${index}`}>
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}