import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play, Clock, Users, Star, BookOpen, Award, CheckCircle } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Master Prompt Engineering Fundamentals",
      instructor: "Sarah Chen",
      instructorTitle: "AI Research Scientist",
      rating: 4.9,
      students: 2847,
      duration: "6 hours",
      level: "Beginner",
      price: "$97",
      originalPrice: "$197",
      image: "/api/placeholder/400/250",
      description: "Learn the core principles of prompt engineering and how to create effective prompts for any AI model.",
      modules: [
        "Understanding AI Language Models",
        "Prompt Structure and Components",
        "Common Prompt Patterns",
        "Testing and Iteration Strategies",
        "Advanced Techniques"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Business Automation with AI Prompts",
      instructor: "Marcus Rodriguez",
      instructorTitle: "Business AI Consultant",
      rating: 4.8,
      students: 1923,
      duration: "8 hours",
      level: "Intermediate",
      price: "$147",
      originalPrice: "$297",
      image: "/api/placeholder/400/250",
      description: "Transform your business processes with AI automation using strategic prompt engineering.",
      modules: [
        "Business Process Analysis",
        "Workflow Automation Prompts",
        "Customer Service AI",
        "Content Generation at Scale",
        "ROI Measurement"
      ],
      featured: true
    },
    {
      id: 3,
      title: "Creative Writing with AI Assistance",
      instructor: "Elena Vasquez",
      instructorTitle: "Published Author & AI Writing Coach",
      rating: 4.7,
      students: 1456,
      duration: "5 hours",
      level: "Beginner",
      price: "$77",
      originalPrice: "$157",
      image: "/api/placeholder/400/250",
      description: "Enhance your creative writing with AI tools while maintaining your unique voice and style.",
      modules: [
        "Creative Prompt Techniques",
        "Character Development",
        "Plot Structure Assistance",
        "Style Consistency",
        "Publishing Workflows"
      ],
      featured: false
    },
    {
      id: 4,
      title: "Technical Documentation with AI",
      instructor: "David Kim",
      instructorTitle: "Senior Technical Writer",
      rating: 4.6,
      students: 987,
      duration: "4 hours",
      level: "Intermediate",
      price: "$87",
      originalPrice: "$177",
      image: "/api/placeholder/400/250",
      description: "Create comprehensive technical documentation efficiently using AI-powered prompt strategies.",
      modules: [
        "Technical Writing Fundamentals",
        "API Documentation Prompts",
        "User Guide Generation",
        "Code Documentation",
        "Quality Assurance"
      ],
      featured: false
    }
  ];

  const learningPaths = [
    {
      title: "Complete Prompt Engineering Mastery",
      courses: 4,
      duration: "23 hours",
      price: "$297",
      originalPrice: "$597",
      description: "Everything you need to become a prompt engineering expert"
    },
    {
      title: "Business AI Implementation",
      courses: 3,
      duration: "17 hours", 
      price: "$247",
      originalPrice: "$497",
      description: "Transform your business with practical AI solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-prompt-dark text-white font-sans overflow-x-hidden" data-testid="courses-page">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight" data-testid="courses-title">
              <span className="bg-gradient-to-r from-prompt-orange to-prompt-purple bg-clip-text text-transparent">
                Professional Training
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="courses-description">
              Master AI prompt engineering with expert-led courses designed for professionals, 
              creators, and business leaders.
            </p>
          </div>

          {/* Featured Courses */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-prompt-cyan to-prompt-purple bg-clip-text text-transparent">
                Featured Courses
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {courses.filter(course => course.featured).map((course) => (
                <div
                  key={course.id}
                  className="bg-card-gradient rounded-2xl overflow-hidden border border-prompt-purple/20 hover:border-prompt-cyan/40 transition-all duration-300 hover:transform hover:scale-[1.02]"
                  data-testid={`featured-course-${course.id}`}
                >
                  <div className="relative h-48 bg-gradient-to-br from-prompt-purple/20 to-prompt-cyan/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="text-white h-16 w-16 opacity-80" />
                    </div>
                    <div className="absolute top-4 left-4 bg-prompt-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {course.level}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <Star className="text-yellow-400 h-4 w-4 fill-current" />
                          <span className="text-sm text-gray-300 ml-1">{course.rating}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Users className="h-4 w-4 mr-1" />
                          <span className="text-sm">{course.students.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-sm">{course.duration}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-white">{course.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{course.description}</p>

                    <div className="mb-4">
                      <p className="text-prompt-cyan font-semibold text-sm mb-2">What you'll learn:</p>
                      <div className="grid grid-cols-1 gap-1">
                        {course.modules.slice(0, 3).map((module, idx) => (
                          <div key={idx} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="h-3 w-3 text-prompt-cyan mr-2 flex-shrink-0" />
                            {module}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-prompt-cyan">{course.price}</span>
                        <span className="text-gray-500 line-through">{course.originalPrice}</span>
                      </div>
                      <Button
                        className="bg-gradient-to-r from-prompt-cyan to-prompt-purple hover:shadow-lg hover:shadow-prompt-cyan/25 text-white px-6 py-2 rounded-xl font-semibold"
                        onClick={() => window.open('https://promptmagic.dev', '_blank')}
                        data-testid={`enroll-course-${course.id}`}
                      >
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Paths */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-prompt-purple to-prompt-pink bg-clip-text text-transparent">
                Learning Paths
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {learningPaths.map((path, index) => (
                <div
                  key={index}
                  className="bg-card-gradient rounded-2xl p-8 border border-prompt-purple/20 hover:border-prompt-pink/40 transition-all duration-300"
                  data-testid={`learning-path-${index}`}
                >
                  <Award className="text-prompt-pink h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-white">{path.title}</h3>
                  <p className="text-gray-300 mb-6">{path.description}</p>
                  
                  <div className="flex items-center space-x-6 mb-6 text-gray-400">
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      <span className="text-sm">{path.courses} courses</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{path.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-3xl font-bold text-prompt-pink">{path.price}</span>
                      <span className="text-gray-500 line-through">{path.originalPrice}</span>
                    </div>
                    <Button
                      className="bg-gradient-to-r from-prompt-pink to-prompt-purple hover:shadow-lg hover:shadow-prompt-pink/25 text-white px-6 py-3 rounded-xl font-semibold"
                      onClick={() => window.open('https://promptmagic.dev', '_blank')}
                      data-testid={`enroll-path-${index}`}
                    >
                      Start Learning
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Courses */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-prompt-cyan to-prompt-orange bg-clip-text text-transparent">
                All Courses
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-card-gradient rounded-xl overflow-hidden border border-prompt-purple/20 hover:border-prompt-cyan/40 transition-all duration-300 hover:transform hover:scale-[1.02]"
                  data-testid={`course-${course.id}`}
                >
                  <div className="relative h-32 bg-gradient-to-br from-prompt-purple/20 to-prompt-cyan/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="text-white h-8 w-8 opacity-80" />
                    </div>
                    <div className="absolute top-2 left-2 bg-prompt-orange text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {course.level}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Star className="text-yellow-400 h-3 w-3 fill-current" />
                        <span className="text-xs text-gray-300 ml-1">{course.rating}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <h3 className="font-bold mb-2 text-white text-sm leading-tight">{course.title}</h3>
                    <p className="text-gray-400 text-xs mb-1">by {course.instructor}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center space-x-1">
                        <span className="text-lg font-bold text-prompt-cyan">{course.price}</span>
                        <span className="text-gray-500 line-through text-sm">{course.originalPrice}</span>
                      </div>
                      <Button
                        size="sm"
                        className="bg-prompt-purple/20 border border-prompt-purple/40 text-prompt-purple hover:bg-prompt-purple hover:text-white text-xs px-3 py-1"
                        onClick={() => window.open('https://promptmagic.dev', '_blank')}
                        data-testid={`view-course-${course.id}`}
                      >
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-prompt-orange/10 to-prompt-purple/10 rounded-3xl p-12 border border-prompt-orange/20">
              <h2 className="text-3xl font-bold mb-4">Ready to Master AI Prompts?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who've transformed their workflows with expert prompt engineering training.
              </p>
              <Button
                className="bg-gradient-to-r from-prompt-orange to-prompt-purple hover:shadow-lg hover:shadow-prompt-orange/25 text-white px-8 py-4 rounded-xl font-semibold text-lg"
                onClick={() => window.open('https://promptmagic.dev', '_blank')}
                data-testid="courses-cta-button"
              >
                Browse All Courses
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}