import { Sparkles } from "lucide-react";
import { FaYoutube, FaLinkedin, FaReddit } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import brandLogo from "@assets/image_1755628188134.png";

export default function Footer() {
  const footerSections = [
    {
      title: "Courses",
      color: "prompt-purple",
      links: [
        { label: "Prompt Engineering Basics", href: "#basics" },
        { label: "Advanced AI Techniques", href: "#advanced" },
        { label: "Business Applications", href: "#business" },
        { label: "Certification Program", href: "#certification" },
      ]
    },
    {
      title: "Resources",
      color: "prompt-cyan",
      links: [
        { label: "Prompt Library", href: "#library" },
        { label: "Quick Reference", href: "#reference" },
        { label: "Community", href: "#community" },
        { label: "Leaderboards", href: "#leaderboards" },
      ]
    },
    {
      title: "Support",
      color: "prompt-pink",
      links: [
        { label: "Help Center", href: "#help" },
        { label: "Contact Us", href: "#contact" },
        { label: "Pricing", href: "#pricing" },
        { label: "API Documentation", href: "#api" },
      ]
    }
  ];

  const socialLinks = [
    { icon: FaYoutube, href: "https://www.youtube.com/@PromptingMagic", color: "prompt-purple", label: "YouTube" },
    { icon: FaXTwitter, href: "https://x.com/promptingmagic", color: "prompt-cyan", label: "X" },
    { icon: FaReddit, href: "https://www.reddit.com/r/promptingmagic/", color: "prompt-pink", label: "Reddit" },
  ];

  return (
    <footer className="bg-prompt-slate py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-8" data-testid="footer-logo">
              <img 
                src={brandLogo} 
                alt="Prompt Magic Logo" 
                className="w-12 h-12" 
                style={{ filter: 'brightness(0) saturate(100%) invert(77%) sepia(29%) saturate(6457%) hue-rotate(359deg) brightness(102%) contrast(108%)' }}
              />
              <span className="text-3xl font-black">Prompt Magic</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed text-xl" data-testid="footer-description">
              Your AI Command Center. Discover, share, and perfect prompts for all major AI platforms.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-${social.color}/20 rounded-lg flex items-center justify-center text-${social.color} hover:bg-${social.color} hover:text-white transition-all duration-300`}
                    data-testid={`social-link-${social.label.toLowerCase()}`}
                  >
                    <IconComponent className="h-7 w-7" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title} data-testid={`footer-section-${section.title.toLowerCase()}`}>
              <h4 className={`text-2xl font-semibold mb-8 text-${section.color}`}>
                {section.title}
              </h4>
              <ul className="space-y-4 text-gray-400">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="hover:text-white transition-colors text-lg"
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-prompt-dark pt-10 flex flex-col md:flex-row justify-between items-center" data-testid="footer-bottom">
          <p className="text-gray-400 text-lg mb-6 md:mb-0" data-testid="footer-copyright">
            © 2024 Prompt Magic. All rights reserved.
          </p>
          <div className="flex space-x-8 text-lg text-gray-400">
            <a href="#privacy" className="hover:text-white transition-colors" data-testid="footer-link-privacy">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors" data-testid="footer-link-terms">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-white transition-colors" data-testid="footer-link-cookies">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
