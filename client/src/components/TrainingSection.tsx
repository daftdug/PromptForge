import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Users, Wrench, Play, Book } from "lucide-react";
import laptopImage from "@assets/pexels-bertellifotografia-16094046_1755619490415.jpg";

export default function TrainingSection() {
  const handleViewCourses = () => {
    console.log('View courses clicked');
  };

  const handleCourseCatalog = () => {
    console.log('Course catalog clicked');
  };

  const courseBenefits = [
    { icon: GraduationCap, text: "Expert-led video tutorials and workshops", color: "prompt-purple" },
    { icon: Award, text: "Professional certification upon completion", color: "prompt-cyan" },
    { icon: Users, text: "Access to exclusive community of practitioners", color: "prompt-pink" },
    { icon: Wrench, text: "Advanced prompt templates and frameworks", color: "prompt-orange" },
  ];

  const trainingModules = [
    { icon: "brain", title: "Advanced Prompting", description: "Master complex AI interactions", color: "prompt-purple" },
    { icon: "chart-line", title: "Business Applications", description: "Real-world use cases", color: "prompt-cyan" },
    { icon: "cogs", title: "Workflow Automation", description: "Streamline your processes", color: "prompt-pink" },
    { icon: "trophy", title: "Certification", description: "Become a verified expert", color: "prompt-orange" },
  ];

  return (
    <section className="py-20 bg-prompt-dark" data-testid="training-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6" data-testid="training-title">
              Master AI with{" "}
              <span className="bg-gradient-to-r from-prompt-purple to-prompt-pink bg-clip-text text-transparent">
                Professional Training
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed" data-testid="training-description">
              Ready to become an AI power user? Our comprehensive training courses teach you 
              advanced prompting techniques, workflow optimization, and business applications 
              that will transform how you work with AI.
            </p>
            
            {/* Course Benefits */}
            <div className="space-y-4 mb-8">
              {courseBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-center" data-testid={`training-benefit-${index}`}>
                    <IconComponent className={`text-${benefit.color} mr-4 h-6 w-6`} />
                    <span className="text-gray-300">{benefit.text}</span>
                  </div>
                );
              })}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleViewCourses}
                className="bg-cta-gradient hover:shadow-lg hover:shadow-prompt-purple/25 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                data-testid="button-view-courses"
              >
                <Play className="mr-2 h-5 w-5" />
                View Training Courses
              </Button>
              <Button 
                onClick={handleCourseCatalog}
                variant="outline"
                className="border-2 border-prompt-cyan text-prompt-cyan hover:bg-prompt-cyan hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                data-testid="button-course-catalog"
              >
                <Book className="mr-2 h-5 w-5" />
                Course Catalog
              </Button>
            </div>
          </div>
          
          {/* Right Content - Training Visual */}
          <div className="relative">
            <div className="relative rounded-3xl border border-prompt-purple/20 h-96 overflow-hidden" data-testid="training-visual">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={laptopImage} 
                  alt="Professional working on laptop" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-prompt-dark/80 via-prompt-purple/60 to-prompt-cyan/40"></div>
              </div>
              
              {/* Content Overlay */}
              <div className="relative z-10 p-8 h-full">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {trainingModules.map((module, index) => (
                    <div 
                      key={module.title}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                      data-testid={`training-module-${index}`}
                    >
                      <div className="mb-2">
                        {module.icon === "brain" && <GraduationCap className="text-white h-8 w-8" />}
                        {module.icon === "chart-line" && <Award className="text-prompt-cyan h-8 w-8" />}
                        {module.icon === "cogs" && <Wrench className="text-prompt-pink h-8 w-8" />}
                        {module.icon === "trophy" && <Award className="text-prompt-orange h-8 w-8" />}
                      </div>
                      <h4 className="font-semibold text-sm mb-1 text-white" data-testid={`training-module-title-${index}`}>
                        {module.title}
                      </h4>
                      <p className="text-xs text-gray-200" data-testid={`training-module-description-${index}`}>
                        {module.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
