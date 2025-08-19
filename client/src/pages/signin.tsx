import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";
import { Sparkles } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to actual sign in
    window.open('https://promptmagic.dev/signin', '_blank');
  };

  const handleGoogleSignIn = () => {
    window.open('https://promptmagic.dev/signin', '_blank');
  };

  return (
    <div className="min-h-screen bg-prompt-dark text-white flex flex-col" style={{ fontFamily: "'NTR', 'Inter', system-ui, -apple-system, sans-serif" }}>
      {/* Header */}
      <header className="border-b border-prompt-slate/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center space-x-3 cursor-pointer">
                <div className="w-12 h-12 bg-cta-gradient rounded-xl flex items-center justify-center">
                  <Sparkles className="text-white h-6 w-6" />
                </div>
                <span className="text-3xl font-black">Prompt Magic</span>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/courses" className="text-xl font-semibold hover:text-prompt-purple transition-colors">
                Discover
              </Link>
              <Link href="/tags" className="text-xl font-semibold hover:text-prompt-purple transition-colors">
                Tags
              </Link>
              <Link href="/leaderboard" className="text-xl font-semibold hover:text-prompt-purple transition-colors">
                Leaderboard
              </Link>
              <Link href="/pricing" className="text-xl font-semibold hover:text-prompt-purple transition-colors">
                Pricing
              </Link>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Link href="/signin">
                <Button variant="ghost" className="text-white hover:text-prompt-purple">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-prompt-dark text-white border border-white/20 hover:bg-white hover:text-prompt-dark">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="max-w-md w-full mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2" data-testid="signin-title">Sign in to your account</h1>
            <p className="text-gray-400">
              Or{" "}
              <Link href="/signup" className="text-prompt-cyan hover:underline">
                create a new account
              </Link>
            </p>
          </div>

          <div className="space-y-6">
            {/* Google Sign In */}
            <Button
              onClick={handleGoogleSignIn}
              variant="outline"
              className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10 py-3"
              data-testid="google-signin-button"
            >
              <FaGoogle className="mr-3 h-5 w-5" />
              Sign in with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-prompt-dark text-gray-400">Or sign in with email</span>
              </div>
            </div>

            {/* Sign In Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-gray-300 mb-2 block">
                  Email address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-prompt-purple"
                  data-testid="email-input"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="password" className="text-gray-300">
                    Password
                  </Label>
                  <Link href="/forgot-password" className="text-sm text-prompt-cyan hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-prompt-purple"
                  data-testid="password-input"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-prompt-dark text-white border border-white/30 hover:bg-white hover:text-prompt-dark py-3 font-semibold"
                data-testid="signin-submit-button"
              >
                Sign in
              </Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}