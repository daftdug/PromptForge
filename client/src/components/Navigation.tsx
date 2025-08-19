import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { Link } from "wouter";
import logoImage from "@assets/image_1755624842072.png";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { label: "Courses", href: "/courses" },
    { label: "Prompts", href: "/prompts" },
    { label: "Tags", href: "/tags" },
    { label: "Leaderboard", href: "/leaderboard" },
    { label: "Pricing", href: "/pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-prompt-dark/90 backdrop-blur-sm border-b border-prompt-slate/20" data-testid="navigation-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 cursor-pointer" data-testid="logo">
            <img 
              src={logoImage} 
              alt="Prompt Magic Logo" 
              className="w-10 h-10"
              style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(100%) saturate(300%) hue-rotate(10deg) brightness(1.1)' }}
            />
            <span className="text-2xl font-bold tracking-tight">Prompt Magic</span>
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors text-lg font-medium"
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="w-10 h-10 bg-prompt-purple rounded-full flex items-center justify-center cursor-pointer" data-testid="user-profile-button">
              <User className="text-white h-5 w-5" />
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white"
              data-testid="mobile-menu-button"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-prompt-slate/20" data-testid="mobile-navigation-menu">
            <div className="flex flex-col space-y-3">
              {navigationLinks.map((link) => (
                <Link 
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors px-2 py-1 text-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
