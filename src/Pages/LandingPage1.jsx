import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Play, Eye, Zap, Globe, Users, Award, ArrowRight, Menu, X } from 'lucide-react';

const LandingPage1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const FloatingOrb = ({ className, delay = 0 }) => (
    <div 
      className={`absolute rounded-full opacity-20 animate-pulse ${className}`}
      style={{
        animationDelay: `${delay}s`,
        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
      }}
    />
  );

  const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div 
        className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/30 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/25"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className={`relative z-10 transform transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
          <Icon className="w-12 h-12 mb-6 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300" />
        </div>
        
        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
        
        <div className={`absolute bottom-4 right-4 transform transition-all duration-300 ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
          <ArrowRight className="w-5 h-5 text-purple-400" />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative px-10">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <FloatingOrb className="w-96 h-96 bg-purple-500/30 -top-48 -left-48" delay={0} />
        <FloatingOrb className="w-64 h-64 bg-cyan-500/20 top-1/3 -right-32" delay={1} />
        <FloatingOrb className="w-48 h-48 bg-pink-500/15 bottom-1/4 left-1/4" delay={2} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            MENTĀMĪ
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Features', 'About', 'Pricing', 'Contact'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group py-2 px-4 transition-all duration-300 hover:text-purple-400"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative z-10 px-6 py-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div 
              className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm"
              style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            >
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                🚀 Welcome to the Future of Learning
              </span>
            </div>

            <h1 
              className="text-5xl lg:text-7xl font-bold leading-tight"
              style={{ transform: `translateY(${scrollY * -0.2}px)` }}
            >
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Immersive
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Education
              </span>
              <br />
              <span className="text-white">Redefined</span>
            </h1>

            <p 
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              style={{ transform: `translateY(${scrollY * -0.15}px)` }}
            >
              Experience learning like never before with our cutting-edge AR and VR platform. 
              Transform abstract concepts into interactive realities.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-4"
              style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center gap-2">
                  Start Learning <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="group px-8 py-4 border border-gray-600 rounded-xl font-semibold text-white hover:border-purple-500 transition-all duration-300 hover:bg-purple-500/10 backdrop-blur-sm">
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" /> Watch Demo
                </span>
              </button>
            </div>
          </div>

          {/* 3D Visual Element */}
          <div className="relative">
            <div 
              className="relative w-full h-96 lg:h-[500px]"
              style={{ transform: `translateY(${scrollY * -0.3}px) rotateY(${mousePosition.x * 0.01}deg)` }}
            >
              {/* Central Orb */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-3xl opacity-60 animate-pulse" />
              
              {/* Floating Elements */}
              <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg transform rotate-45 animate-bounce" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 right-1/6 w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
              
              {/* Ring Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-purple-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-cyan-500/20 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how we're transforming education through immersive technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Eye}
              title="Immersive VR Learning"
              description="Step into virtual worlds where complex concepts become tangible experiences. From molecular structures to historical events."
              delay={0}
            />
            <FeatureCard
              icon={Zap}
              title="AR Enhancement"
              description="Overlay digital information onto the real world. Transform any space into an interactive learning environment."
              delay={200}
            />
            <FeatureCard
              icon={Globe}
              title="Global Accessibility"
              description="Learn from anywhere in the world. Our cloud-based platform ensures seamless access to all educational content."
              delay={400}
            />
            <FeatureCard
              icon={Users}
              title="Collaborative Learning"
              description="Share virtual spaces with classmates and teachers. Learn together in immersive multiplayer environments."
              delay={600}
            />
            <FeatureCard
              icon={Award}
              title="Adaptive Assessment"
              description="AI-powered evaluation system that adapts to your learning pace and provides personalized feedback."
              delay={800}
            />
            <FeatureCard
              icon={Zap}
              title="Real-time Analytics"
              description="Track your learning progress with detailed analytics and insights. Understand your strengths and improvement areas."
              delay={1000}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-3xl" />
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent relative z-10">
              Ready to Transform Learning?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 relative z-10">
              Join thousands of educators and students already experiencing the future of education.
            </p>
            
            <button className="relative z-10 group px-10 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-bold text-lg text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                Get Started Today <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            MENTĀMĪ
          </div>
          <p className="text-gray-400">
            © 2025 MENTĀMĪ. All rights reserved. Transforming education through immersive technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage1;