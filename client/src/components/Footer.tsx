import { Sparkles } from "lucide-react";
import { FaYoutube, FaLinkedin, FaReddit } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
            <div className="flex items-center space-x-2 mb-6" data-testid="footer-logo">
              <div className="w-8 h-8 bg-cta-gradient rounded-lg flex items-center justify-center">
                <Sparkles className="text-white h-4 w-4" />
              </div>
              <span className="text-xl font-bold">Prompt Magic</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed" data-testid="footer-description">
              Your AI Command Center. Discover, share, and perfect prompts for all major AI platforms.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-${social.color}/20 rounded-lg flex items-center justify-center text-${social.color} hover:bg-${social.color} hover:text-white transition-all duration-300`}
                    data-testid={`social-link-${social.label.toLowerCase()}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title} data-testid={`footer-section-${section.title.toLowerCase()}`}>
              <h4 className={`text-lg font-semibold mb-6 text-${section.color}`}>
                {section.title}
              </h4>
              <ul className="space-y-3 text-gray-400">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="hover:text-white transition-colors"
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
        <div className="border-t border-prompt-dark pt-8 flex flex-col md:flex-row justify-between items-center" data-testid="footer-bottom">
          <p className="text-gray-400 text-sm mb-4 md:mb-0" data-testid="footer-copyright">
            © 2024 Prompt Magic. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
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
