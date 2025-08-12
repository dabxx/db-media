import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  Play,
  BookOpen,
  Users,
  Zap,
  Eye,
  Brain,
  Laptop,
  ArrowRight,
  Star,
  CheckCircle,
  Globe,
  Layers,
  Cpu,
  ChevronLeft,
  Monitor,
  Headphones,
  Smartphone,
} from "lucide-react";

const LandingPage2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVideoSlide, setCurrentVideoSlide] = useState(0);
  const [currentProductSlide, setCurrentProductSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Immersive AR Experiences",
      description:
        "Transform learning with augmented reality that brings concepts to life in your real environment.",
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "VR Learning Environments",
      description:
        "Step into virtual worlds designed specifically for educational exploration and discovery.",
      gradient: "from-orange-400 to-red-500",
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Interactive Simulations",
      description:
        "Hands-on learning through realistic simulations that make complex topics accessible.",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Collaboration",
      description:
        "Connect with learners worldwide in shared virtual spaces for collaborative education.",
      gradient: "from-pink-400 to-rose-500",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Multi-layered Content",
      description:
        "Experience complex concepts through layered, interactive 3D visualizations.",
      gradient: "from-violet-400 to-purple-500",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI-Powered Learning",
      description:
        "Personalized education paths powered by advanced artificial intelligence algorithms.",
      gradient: "from-yellow-400 to-orange-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Education Director",
      content:
        "MENTĀMĪ revolutionized how our students engage with complex scientific concepts.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Dr. Michael Chen",
      role: "University Professor",
      content:
        "The immersive experiences create unforgettable learning moments.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Lisa Rodriguez",
      role: "Training Coordinator",
      content: "Our team retention improved by 40% after implementing MENTĀMĪ.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "James Wilson",
      role: "Corporate Trainer",
      content:
        "The 3D simulations make complex processes incredibly easy to understand.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const videoContent = [
    {
      title: "AR Chemistry Lab",
      description: "Explore molecular structures in your own space",
      thumbnail:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      duration: "3:24",
    },
    {
      title: "VR History Museum",
      description: "Walk through ancient civilizations",
      thumbnail:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
      duration: "5:17",
    },
    {
      title: "Physics Simulation",
      description: "Interactive quantum mechanics visualization",
      thumbnail:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
      duration: "4:32",
    },
    {
      title: "Medical Training VR",
      description: "Practice surgical procedures safely",
      thumbnail:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
      duration: "6:45",
    },
  ];

  const products = [
    {
      name: "MENTĀMĪ Studio",
      description: "Professional AR/VR content creation suite",
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500&h=300&fit=crop",
      features: [
        "Advanced 3D Modeling",
        "Real-time Collaboration",
        "Cloud Rendering",
      ],
    },
    {
      name: "MENTĀMĪ Classroom",
      description: "Virtual classroom management system",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      features: [
        "Multi-user VR Spaces",
        "Progress Tracking",
        "Interactive Whiteboards",
      ],
    },
    {
      name: "MENTĀMĪ Mobile",
      description: "AR learning experiences on any device",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      features: [
        "Cross-platform AR",
        "Offline Capabilities",
        "Social Learning",
      ],
    },
    {
      name: "MENTĀMĪ Studio",
      description: "Professional AR/VR content creation suite",
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500&h=300&fit=crop",
      features: [
        "Advanced 3D Modeling",
        "Real-time Collaboration",
        "Cloud Rendering",
      ],
    },
    {
      name: "MENTĀMĪ Classroom",
      description: "Virtual classroom management system",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      features: [
        "Multi-user VR Spaces",
        "Progress Tracking",
        "Interactive Whiteboards",
      ],
    },
    {
      name: "MENTĀMĪ Mobile",
      description: "AR learning experiences on any device",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      features: [
        "Cross-platform AR",
        "Offline Capabilities",
        "Social Learning",
      ],
    },
  ];

  // Mouse tracking for 3D effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Canvas animation for 3D background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        speed: Math.random() * 2 + 0.5,
        size: Math.random() * 3 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(34, 197, 94, 0.1)";

      particles.forEach((particle) => {
        particle.z -= particle.speed;
        if (particle.z <= 0) {
          particle.z = 1000;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        const x =
          (particle.x - canvas.width / 2) * (1000 / particle.z) +
          canvas.width / 2;
        const y =
          (particle.y - canvas.height / 2) * (1000 / particle.z) +
          canvas.height / 2;
        const size = particle.size * (1000 / particle.z);

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Auto-rotate carousels
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    const videoInterval = setInterval(() => {
      setCurrentVideoSlide((prev) => (prev + 1) % videoContent.length);
    }, 3000);

    const productInterval = setInterval(() => {
      setCurrentProductSlide((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(videoInterval);
      clearInterval(productInterval);
    };
  }, []);

  const FloatingShape = ({ className, delay = 0, shape = "circle" }) => (
    <div
      className={`absolute animate-float-complex ${className}`}
      style={{
        animationDelay: `${delay}s`,
        transform: `translate(${mousePosition.x * 10}px, ${
          mousePosition.y * 10
        }px)`,
      }}
    >
      {shape === "circle" && (
        <div className="w-full h-full bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-xl" />
      )}
      {shape === "square" && (
        <div className="w-full h-full bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-lg blur-lg rotate-45" />
      )}
      {shape === "triangle" && (
        <div className="w-0 h-0 border-l-12 border-r-12 border-b-20 border-transparent border-b-cyan-400/20 blur-sm" />
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white overflow-hidden relative ">
      {/* 3D Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(16, 185, 129, 0.03) 0%, rgba(6, 182, 212, 0.03) 100%)",
        }}
      />

      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <FloatingShape
          className="w-96 h-96 -top-48 -left-48"
          delay={0}
          shape="circle"
        />
        <FloatingShape
          className="w-64 h-64 top-1/4 -right-32"
          delay={1}
          shape="square"
        />
        <FloatingShape
          className="w-80 h-80 bottom-1/4 left-1/4"
          delay={2}
          shape="circle"
        />
        <FloatingShape
          className="w-40 h-40 top-1/2 right-1/3"
          delay={1.5}
          shape="square"
        />

        {/* 3D Geometric Elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-emerald-300/30 rotate-45 animate-spin-slow transform-gpu" />
        <div className="absolute bottom-1/3 left-1/6 w-24 h-24 border-2 border-orange-300/30 rotate-12 animate-pulse-slow" />
        <div className="absolute top-1/2 right-1/6 w-16 h-16 bg-gradient-to-r from-cyan-300/20 to-teal-300/20 rounded-full animate-bounce-slow" />

        {/* Moving Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-emerald-400 to-transparent animate-slide-down"
              style={{
                left: `${i * 10}%`,
                height: "200%",
                animationDelay: `${i * 0.5}s`,
                animationDuration: "8s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 px-10 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            MENTĀMĪ
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 font-medium relative group"
          >
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href="#products"
            className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 font-medium relative group"
          >
            Products
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href="#testimonials"
            className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 font-medium relative group"
          >
            Reviews
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300" />
          </a>
          <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 font-medium">
            Get Started
          </button>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section ref={heroRef} className="relative z-20 pt-24 pb-36 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.2s", animationFillMode: "both" }}
              >
                <h1 className="text-7xl md:text-7xl font-bold mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    The Future
                  </span>
                  <br />
                  <span className="text-gray-800">of Education</span>
                </h1>
              </div>

              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.4s", animationFillMode: "both" }}
              >
                <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
                  Experience learning like never before with our cutting-edge
                  AR/VR educational platform. Transform abstract concepts into
                  immersive, interactive experiences.
                </p>
              </div>

              <div
                className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up"
                style={{ animationDelay: "0.6s", animationFillMode: "both" }}
              >
                <button className="group px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-300 flex items-center space-x-3">
                  <span>Start Learning</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </button>

                <button className="group px-10 py-5 border-2 border-gray-300 text-gray-700 rounded-full text-lg font-semibold hover:border-emerald-500 hover:text-emerald-600 hover:shadow-lg transition-all duration-300 flex items-center space-x-3 backdrop-blur-sm bg-white/70">
                  <Play className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>

            {/* 3D Hero Visual */}
            <div className="relative">
              <div className="relative w-full h-96 perspective-1000">
                <div
                  className="absolute inset-0 transform-gpu transition-transform duration-300 preserve-3d"
                  style={{
                    transform: `rotateY(${mousePosition.x * 10}deg) rotateX(${
                      -mousePosition.y * 10
                    }deg)`,
                  }}
                >
                  <img
                    src="/images/vr.jpg"
                    alt="VR Education"
                    className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-3xl" />
                </div>

                {/* Floating UI Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg animate-float flex items-center justify-center">
                  <Monitor className="w-8 h-8 text-emerald-500" />
                </div>
                <div
                  className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg animate-float flex items-center justify-center"
                  style={{ animationDelay: "1s" }}
                >
                  <Headphones className="w-6 h-6 text-orange-500" />
                </div>
                <div
                  className="absolute top-1/2 -right-8 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg animate-float flex items-center justify-center"
                  style={{ animationDelay: "2s" }}
                >
                  <Smartphone className="w-5 h-5 text-cyan-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Grid */}
      <section
        id="features"
        className="relative z-20 py-32 px-10 bg-gradient-to-b from-white to-gray-50/80"
      >
        <div className="max-w-7xl mx-auto">
          <div
            data-animate
            id="features-title"
            className={`text-center mb-24 transform transition-all duration-1000 ${
              isVisible["features-title"]
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Revolutionary Features
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how our advanced AR/VR technology transforms traditional
              learning into extraordinary experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-animate
                id={`feature-${index}`}
                className={`group transform transition-all duration-1000  ${
                  isVisible[`feature-${index}`]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl border border-gray-100 hover:border-emerald-200 transition-all duration-500 group-hover:-translate-y-4 group-hover:scale-105 overflow-hidden h-80	">
                  {/* Animated Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-3xl flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 group-hover:text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                    {feature.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight className="w-6 h-6 text-emerald-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Carousel Section */}
      <section className="relative z-20 py-24 px-10 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-white">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Experience in Action
            </span>
          </h2>

          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentVideoSlide * 100}%)` }}
            >
              {videoContent.map((video, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 relative group cursor-pointer"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500/80 transition-all duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {video.title}
                        </h3>
                        <p className="text-gray-300">{video.description}</p>
                      </div>
                      <div className="text-emerald-400 font-semibold">
                        {video.duration}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 left-6 transform -translate-y-1/2">
              <button
                onClick={() =>
                  setCurrentVideoSlide(
                    (prev) =>
                      (prev - 1 + videoContent.length) % videoContent.length
                  )
                }
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-emerald-500/80 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
              <button
                onClick={() =>
                  setCurrentVideoSlide(
                    (prev) => (prev + 1) % videoContent.length
                  )
                }
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-emerald-500/80 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {videoContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideoSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentVideoSlide === index
                      ? "bg-emerald-400 w-8"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Carousel */}
      <section id="products" className="relative z-20 py-24 px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Our Product Suite
            </span>
          </h2>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentProductSlide * 33.333}%)`,
                }}
              >
                {products.map((product, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="p-8">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {product.description}
                        </p>
                        <ul className="space-y-2">
                          {product.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-gray-600"
                            >
                              <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProductSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentProductSlide === index
                      ? "bg-orange-500"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-10 bg-[#D07A2A]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center text-white">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">10k+</div>
              <div className="text-xl opacity-90">Active Learners</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl opacity-90">AR/VR Courses</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-xl opacity-90">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section
        id="testimonials"
        className="relative z-10 py-24 px-10 bg-gradient-to-b from-gray-50/50 to-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              What Our Users Say
            </span>
          </h2>

          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 p-12 bg-white/80 backdrop-blur-sm border border-gray-100"
                >
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-xl text-gray-600 mb-8 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="font-semibold text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500">{testimonial.role}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-10 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of learners already experiencing the future of
            education with MENTĀMĪ
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-300 flex items-center space-x-3">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <div className="flex items-center space-x-3 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>No credit card required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-16 px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                MENTĀMĪ
              </span>
            </div>
            <p className="text-gray-400">
              Revolutionizing education through immersive AR/VR experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Demo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 MENTĀMĪ. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage2;
