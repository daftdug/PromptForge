import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, Award, Users, Play, CheckCircle } from "lucide-react";

export default function CoursesSection() {
  const handleEnrollNow = (courseName: string) => {
    window.open('https://promptmagic.dev', '_blank');
    console.log(`Enrolling in: ${courseName}`);
  };

  const courses = [
    {
      name: "Prompt Engineering Fundamentals",
      price: "$149",
      originalPrice: "$199",
      duration: "4 hours",
      level: "Beginner",
      description: "Master the basics of effective prompt engineering and unlock AI's potential",
      features: [
        "Core prompting techniques and best practices",
        "Understanding different AI models and capabilities",
        "Hands-on practical exercises with real examples",
        "Certificate of completion",
        "Lifetime access to course materials",
        "Access to private community forum"
      ],
      color: "prompt-purple",
      popular: false
    },
    {
      name: "Advanced Prompt Strategies",
      price: "$299",
      originalPrice: "$399",
      duration: "8 hours",
      level: "Intermediate",
      description: "Advanced techniques for complex AI interactions and business applications",
      features: [
        "Complex reasoning and chain-of-thought prompts",
        "Multi-step workflow optimization",
        "Business-specific AI applications",
        "Advanced template library access",
        "1-on-1 coaching session with expert",
        "Priority support and feedback"
      ],
      color: "prompt-cyan",
      popular: true
    },
    {
      name: "Business AI Implementation",
      price: "$599",
      originalPrice: "$799",
      duration: "12 hours",
      level: "Advanced",
      description: "Complete business transformation with AI integration and team training",
      features: [
        "Custom workflow design for your business",
        "Comprehensive team training sessions",
        "Implementation support and guidance",
        "3 months of follow-up consultation",
        "ROI tracking and optimization",
        "Executive strategy session"
      ],
      color: "prompt-pink",
      popular: false
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-prompt-dark via-prompt-slate to-prompt-dark" data-testid="courses-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6" data-testid="courses-title">
            Professional{" "}
            <span className="bg-gradient-to-r from-prompt-purple via-prompt-cyan to-prompt-pink bg-clip-text text-transparent">
              AI Training Courses
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" data-testid="courses-description">
            Transform your AI skills with expert-led training designed for professionals. 
            From fundamentals to advanced business implementation, choose your path to AI mastery.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <div 
              key={course.name}
              className={`relative bg-card-gradient rounded-3xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                course.popular 
                  ? 'border-prompt-cyan/50 shadow-2xl shadow-prompt-cyan/20' 
                  : 'border-prompt-purple/20 hover:border-prompt-purple/40'
              }`}
              data-testid={`course-card-${index}`}
            >
              {/* Popular Badge */}
              {course.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-prompt-cyan to-prompt-pink px-6 py-2 rounded-full text-white font-bold text-sm">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Course Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-${course.color} text-sm font-semibold uppercase tracking-wider`}>
                    {course.level}
                  </span>
                  <div className="flex items-center text-gray-400">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white" data-testid={`course-title-${index}`}>
                  {course.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed" data-testid={`course-description-${index}`}>
                  {course.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-black text-white">{course.price}</span>
                  <span className="text-lg text-gray-400 line-through ml-2">{course.originalPrice}</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">One-time payment • Lifetime access</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {course.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start" data-testid={`course-feature-${index}-${featureIndex}`}>
                      <CheckCircle className={`text-${course.color} h-5 w-5 mr-3 mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Button 
                onClick={() => handleEnrollNow(course.name)}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  course.popular
                    ? 'bg-gradient-to-r from-prompt-cyan to-prompt-pink hover:shadow-lg hover:shadow-prompt-cyan/25'
                    : `bg-${course.color} hover:bg-${course.color}/90 hover:shadow-lg hover:shadow-${course.color}/25`
                } text-white`}
                data-testid={`button-enroll-${index}`}
              >
                <Play className="mr-2 h-5 w-5" />
                Enroll Now
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-300 mb-6">
            Not sure which course is right for you? 
            <br />
            <span className="text-prompt-cyan font-semibold">Schedule a free 15-minute consultation</span>
          </p>
          <Button 
            onClick={() => window.open('https://promptmagic.dev', '_blank')}
            variant="outline"
            className="border-2 border-prompt-purple text-prompt-purple hover:bg-prompt-purple hover:text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300"
            data-testid="button-consultation"
          >
            <Users className="mr-2 h-5 w-5" />
            Book Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}