import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Code,
  Palette,
  Cpu,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  FileText,
} from "lucide-react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("");

    try {
      const response = await fetch("https://formspree.io/f/mqalnqqn", {
        // Replace YOUR_FORM_ID with your actual Formspree form ID
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setFormStatus(""), 5000);
    }
  };

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Modern, responsive websites built with cutting-edge technologies",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI Automation",
      description:
        "Intelligent automation solutions to streamline your business processes",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design",
      description:
        "Creative visual solutions that captivate and engage your audience",
      gradient: "from-orange-500 to-red-400",
    },
  ];

  const skills = {
    Frontend: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
    Backend: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL"],
    "Tools & Others": [
      "Git",
      "Docker",
      "AWS",
      "Figma",
      "Adobe Creative Suite",
      "Three.js",
    ],
    "AI & Machine Learning": [
      "Large Language Models (LLMs)",
      "Prompt Engineering",
      "Retrieval-Augmented Generation (RAG)",
      "Vector Databases",
      "OpenAI API",
      "Perplexity AI API",
      "LangChain",
      "Embeddings",
      "Semantic Search",
    ],
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI/UX",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      link: "#", // Add your project link here
    },
    {
      title: "AI Dashboard",
      description: "Analytics dashboard with AI-powered insights",
      tech: ["React", "Python", "TensorFlow", "D3.js"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      link: "#", // Add your project link here
    },
    {
      title: "Portfolio Website",
      description: "Creative portfolio with advanced animations",
      tech: ["React", "Three.js", "GSAP", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      link: "#", // Add your project link here
    },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-white-900/20 to-blue-900/20"></div>
        <div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-white-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}


      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-4"
      >
        <div className="text-center z-10">
          <div className="mb-8 animate-bounce">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl">
              <img className="w-28" src="/images/logo-trans.png" alt="" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white animate-pulse">Dany Binu</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-500 mb-8 max-w-2xl mx-auto">
            React.js Developer & Digital Creator
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Crafting exceptional digital experiences with 4 years of expertise
            in modern web development, AI automation, and creative design
            solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </button> */}
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border border-blue-400 rounded-full hover:bg-blue-400/10 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
            <a
              href="https://drive.google.com/file/d/1SheJZqzjvGybL2vT0yGpOzU3w_Eq2AEX/view?usp=sharing" // Replace with your actual resume path
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-zinc-400 rounded-full hover:bg-zinc-400/10 transition-all duration-300 transform hover:scale-105"
            >
              <FileText className="w-5 h-5" />
              View Resume
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-sky-400">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            With 4 years of experience in the ever-evolving world of web
            development, I specialize in creating cutting-edge digital solutions
            that push the boundaries of what's possible. My journey began with a
            passion for clean code and beautiful interfaces, evolving into
            expertise across the full spectrum of modern web technologies.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            From React.js applications to AI-powered automation systems, I bring
            ideas to life through innovative technology and thoughtful design.
            Every project is an opportunity to create something extraordinary
            that makes a meaningful impact.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-sky-400">
            Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-sky-400">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(
              ([category, skillList], categoryIndex) => (
                <div
                  key={category}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500"
                >
                  <h3 className="text-2xl font-semibold mb-6 text-center text-blue-400">
                    {category}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, index) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full text-sm hover:from-blue-600 hover:to-blue-700 transition-all duration-300 cursor-pointer transform hover:scale-105"
                        style={{
                          animationDelay: `${
                            (categoryIndex * skillList.length + index) * 100
                          }ms`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* <section id="projects" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-sky-400">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 cursor-pointer"
                onClick={() =>
                  window.open(project.link, "_blank", "noopener,noreferrer")
                }
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 right-4">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-sky-400">
              Let's Create Something Amazing
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's collaborate on your next
              project and create something extraordinary together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-medium"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {/* Form Status Messages */}
                {formStatus === "success" && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {formStatus === "error" && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center">
                    ❌ Something went wrong. Please try again or email me
                    directly.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  Get in touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300">Email</p>
                      <a
                        href="mailto:dany@dbmedia.com"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        dany.db.dany@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  Follow me
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/dabxx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dany-binu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Response Time
                </h3>
                <p className="text-gray-300">
                  I typically respond within 24 hours. For urgent projects, feel
                  free to mention it in your message.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-400">
            <p>&copy; 2025 db media. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
