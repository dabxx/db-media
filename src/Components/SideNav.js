import React, { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Intersection Observer for active section tracking
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-zinc-400 bg-clip-text text-transparent"
          >
            db media
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              "hero",
              "about",
              "services",
              "skills",
              // "scale-generator",
              "contact",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 text-white hover:text-blue-400 ${
                  activeSection === section
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : ""
                }`}
              >
                {section === "hero" ? "Home" : section.replace("-", " ")}
              </button>
            ))}
          </div>

          {/* Resume Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="https://drive.google.com/file/d/1SheJZqzjvGybL2vT0yGpOzU3w_Eq2AEX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-sm"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 py-2">
            {[
              "hero",
              "about",
              "services",
              "skills",
              // "scale-generator",
              "contact",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left py-3 capitalize hover:text-blue-400 transition-colors"
              >
                {section === "hero" ? "Home" : section.replace("-", " ")}
              </button>
            ))}
            {/* Resume Link - Mobile */}
            <a
              href="https://drive.google.com/file/d/1SheJZqzjvGybL2vT0yGpOzU3w_Eq2AEX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-full py-3 hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
