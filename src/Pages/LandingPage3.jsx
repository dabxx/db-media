import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Play,
  BookOpen,
  Users,
  Award,
  ArrowRight,
  Menu,
  X,
  Star,
  Globe,
  Headphones,
} from "lucide-react";
import * as THREE from "three";

{
  /* Features Section */
}
//   <section className="relative py-32 z-10">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="text-center mb-20">
//         <h2
//           className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent"
//           style={{
//             transform: `translateY(${Math.max(0, (scrollY - 1600) * -0.3)}px)`,
//             opacity: Math.max(0, Math.min(1, (scrollY - 1400) * 0.003))
//           }}
//         >
//           Experience the Future
//         </h2>
//         <p
//           className="text-xl text-gray-600 max-w-3xl mx-auto"
//           style={{
//             transform: `translateY(${Math.max(0, (scrollY - 1700) * -0.2)}px)`,
//             opacity: Math.max(0, Math.min(1, (scrollY - 1500) * 0.003))
//           }}
//         >
//           Discover how MENTĀMĪ transforms traditional learning into immersive,
//           interactive experiences that stick with you forever.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-8">
//         {features.map((feature, index) => (
//           <div
//             key={feature.title}
//             className="group relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-red-200 hover:-translate-y-2"
//             style={{
//               transform: `translateY(${Math.max(0, (scrollY - 1800 - index * 100) * -0.1)}px)`,
//               opacity: Math.max(0, Math.min(1, (scrollY - 1600 - index * 100) * 0.004)),
//               animation: `fadeInUp 0.8s ease-out ${0.8 + index * 0.2}s both`
//             }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-orange-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//             <div className="relative">
//               <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
//                 {feature.icon}
//               </div>
//               <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-red-600 transition-colors duration-300">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 {feature.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>

{
  /* Testimonials Carousel */
}
//   <section className="relative py-32 z-10 bg-gradient-to-r from-gray-50 to-white">
//     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="text-center mb-16">
//         <h2
//           className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent"
//           style={{
//             transform: `translateY(${Math.max(0, (scrollY - 2200) * -0.3)}px)`,
//             opacity: Math.max(0, Math.min(1, (scrollY - 2000) * 0.003))
//           }}
//         >
//           What Our Students Say
//         </h2>
//       </div>

//       <div
//         className="relative"
//         style={{
//           transform: `translateY(${Math.max(0, (scrollY - 2300) * -0.2)}px)`,
//           opacity: Math.max(0, Math.min(1, (scrollY - 2100) * 0.003))
//         }}
//       >
//         <div className="flex transition-transform duration-500 ease-out">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={testimonial.name}
//               className={`w-full flex-shrink-0 transition-all duration-500 ${
//                 index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute'
//               }`}
//               style={{
//                 transform: index === currentTestimonial ? 'scale(1)' : 'scale(0.9)',
//               }}
//             >
//               <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mx-auto max-w-4xl">
//                 <div className="flex flex-col md:flex-row items-center gap-8">
//                   <img
//                     src={testimonial.avatar}
//                     alt={testimonial.name}
//                     className="w-24 h-24 rounded-full object-cover shadow-lg"
//                   />
//                   <div className="flex-1 text-center md:text-left">
//                     <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
//                       "{testimonial.text}"
//                     </p>
//                     <div>
//                       <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
//                       <p className="text-red-600 font-medium">{testimonial.role}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Testimonial Navigation */}
//         <div className="flex justify-center mt-8 space-x-3">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentTestimonial(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 currentTestimonial === index ? 'bg-red-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   </section>

{
  /* Interactive Demo Section */
}
//   <section className="relative py-32 z-10">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="grid lg:grid-cols-2 gap-16 items-center">
//         <div
//           style={{
//             transform: `translateY(${Math.max(0, (scrollY - 2600) * -0.3)}px) rotateY(${Math.min(15, scrollY * 0.01)}deg)`,
//             opacity: Math.max(0, Math.min(1, (scrollY - 2400) * 0.003))
//           }}
//         >
//           <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
//             See It In Action
//           </h2>
//           <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//             Experience the power of immersive learning with our interactive demo.
//             Watch how complex concepts become simple through visualization.
//           </p>
//           <div className="space-y-4">
//             <div className="flex items-center gap-4">
//               <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center">
//                 <Headphones className="w-4 h-4 text-white" />
//               </div>
//               <span className="text-lg">Spatial Audio Integration</span>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center">
//                 <Globe className="w-4 h-4 text-white" />
//               </div>
//               <span className="text-lg">Real-time Collaboration</span>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center">
//                 <Star className="w-4 h-4 text-white" />
//               </div>
//               <span className="text-lg">AI-Powered Assessments</span>
//             </div>
//           </div>
//         </div>

//         <div
//           className="relative"
//           style={{
//             transform: `translateY(${Math.max(0, (scrollY - 2700) * -0.2)}px) rotateX(${Math.min(10, scrollY * 0.005)}deg)`,
//             opacity: Math.max(0, Math.min(1, (scrollY - 2500) * 0.003))
//           }}
//         >
//           <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
//             <div className="aspect-video bg-gradient-to-br from-red-100 to-orange-100">
//               <img
//                 src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=400&fit=crop"
//                 alt="VR Learning Demo"
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <button className="w-24 h-24 bg-white/95 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl">
//                 <Play className="w-10 h-10 text-red-600 ml-2" />
//               </button>
//             </div>

//             {/* Floating UI Elements */}
//             <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
//               <div className="flex items-center gap-3">
//                 <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
//                 <span className="text-sm font-semibold">Live Session</span>
//               </div>
//             </div>

//             <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
//               <div className="flex items-center gap-2">
//                 <Users className="w-5 h-5 text-red-600" />
//                 <span className="text-sm font-semibold">12 Students</span>
//               </div>
//             </div>
//           </div>

//           {/* 3D Floating Elements */}
//           <div
//             className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl rotate-12 opacity-70"
//             style={{
//               animation: 'float 4s ease-in-out infinite',
//               transform: `translateY(${Math.sin(scrollY * 0.01) * 10}px) rotate(${12 + scrollY * 0.1}deg)`
//             }}
//           />
//           <div
//             className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl -rotate-12 opacity-60"
//             style={{
//               animation: 'float 6s ease-in-out infinite reverse',
//               transform: `translateY(${Math.cos(scrollY * 0.008) * 8}px) rotate(${-12 - scrollY * 0.08}deg)`
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   </section>

const LandingPage3 = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const cubesRef = useRef([]);
  const spheresRef = useRef([]);
  const frameRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // <-- close this effect here

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Three.js setup
  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // Create floating cubes and spheres
    const cubes = [];
    const spheres = [];

    // Animated cubes
    for (let i = 0; i < 12; i++) {
      const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const material = new THREE.MeshBasicMaterial({
        color: Math.random() > 0.5 ? 0xff6b6b : 0xff9f40,
        transparent: true,
        opacity: 0.6,
        wireframe: true,
      });
      const cube = new THREE.Mesh(geometry, material);

      cube.position.x = (Math.random() - 0.5) * 25;
      cube.position.y = (Math.random() - 0.5) * 25;
      cube.position.z = (Math.random() - 0.5) * 25;

      cube.rotation.x = Math.random() * Math.PI;
      cube.rotation.y = Math.random() * Math.PI;

      scene.add(cube);
      cubes.push(cube);
    }

    // Animated spheres
    for (let i = 0; i < 8; i++) {
      const geometry = new THREE.SphereGeometry(0.3, 16, 16);
      const material = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0xffa726 : 0xff7043,
        transparent: true,
        opacity: 0.4,
      });
      const sphere = new THREE.Mesh(geometry, material);

      sphere.position.x = (Math.random() - 0.5) * 30;
      sphere.position.y = (Math.random() - 0.5) * 30;
      sphere.position.z = (Math.random() - 0.5) * 30;

      scene.add(sphere);
      spheres.push(sphere);
    }

    cubesRef.current = cubes;
    spheresRef.current = spheres;

    camera.position.z = 10;

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      cubes.forEach((cube, index) => {
        cube.rotation.x += 0.01 + index * 0.001;
        cube.rotation.y += 0.01 + index * 0.001;
        cube.position.y += Math.sin(time + index) * 0.002;
        cube.position.x += Math.cos(time + index * 0.5) * 0.001;
      });

      spheres.forEach((sphere, index) => {
        sphere.rotation.x += 0.005;
        sphere.rotation.y += 0.008;
        sphere.position.y += Math.cos(time + index * 2) * 0.003;
        sphere.position.z += Math.sin(time + index * 1.5) * 0.002;
      });

      // Camera movement based on scroll
      if (cameraRef.current) {
        cameraRef.current.position.y = Math.sin(scrollY * 0.001) * 2;
        cameraRef.current.position.x = Math.cos(scrollY * 0.0005) * 1;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener("resize", handleResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Immersive Learning",
      description:
        "Experience education like never before with cutting-edge AR/VR technology",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Spaces",
      description:
        "Learn together in virtual environments that break down geographical barriers",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Personalized Paths",
      description:
        "AI-driven learning paths that adapt to your unique learning style",
    },
  ];

  const stats = [
    { number: "10K+", label: "Active Learners" },
    { number: "500+", label: "VR Courses" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support" },
  ];

  const courses = [
    {
      id: 1,
      title: "Virtual Chemistry Lab",
      description: "Explore molecular structures in 3D space",
      image:
        "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=400&h=250&fit=crop",
      duration: "6 weeks",
      level: "Beginner",
    },
    {
      id: 2,
      title: "Ancient Rome VR Tour",
      description: "Walk through the Roman Forum as it was 2000 years ago",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73a0e?w=400&h=250&fit=crop",
      duration: "4 weeks",
      level: "Intermediate",
    },
    {
      id: 3,
      title: "Human Anatomy AR",
      description: "Interactive 3D exploration of the human body",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      duration: "8 weeks",
      level: "Advanced",
    },
    {
      id: 4,
      title: "Space Exploration",
      description: "Journey through the solar system in virtual reality",
      image:
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=250&fit=crop",
      duration: "5 weeks",
      level: "All Levels",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Medical Student",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616c5e19242?w=80&h=80&fit=crop&crop=face",
      text: "MENTĀMĪ transformed how I study anatomy. The 3D visualizations helped me understand complex structures like never before!",
    },
    {
      name: "Marcus Rodriguez",
      role: "High School Teacher",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      text: "My students are more engaged than ever. The VR chemistry experiments are safe and incredibly detailed.",
    },
    {
      name: "Dr. Lisa Park",
      role: "University Professor",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      text: "The immersive learning experiences on MENTĀMĪ have revolutionized my teaching methodology completely.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* 3D Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{ opacity: 0.3 }}
      />
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* Gradient Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${scrollY * 0.3}px, ${
              Math.sin(scrollY * 0.01) * 50
            }px) scale(${1 + scrollY * 0.0005})`,
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${scrollY * -0.2}px, ${
              Math.cos(scrollY * 0.01) * 30
            }px)`,
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-orange-50 to-transparent" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)`,
            }}
          />
        </div>
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div
              className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent"
              style={{
                transform: `translateY(${Math.sin(scrollY * 0.01) * 2}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              MENTĀMĪ
            </div>

            <div className="hidden md:flex space-x-8">
              {["Home", "Features", "Courses", "About", "Contact"].map(
                (item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-red-600 transition-all duration-300 hover:scale-105"
                    style={{
                      animation: `fadeInDown 0.6s ease-out ${
                        index * 0.1
                      }s both`,
                    }}
                  >
                    {item}
                  </a>
                )
              )}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className="space-y-8"
              style={{
                transform: `translateY(${scrollY * 0.5}px)`,
                opacity: Math.max(0, 1 - scrollY * 0.002),
              }}
            >
              <h1 className="text-6xl md:text-8xl font-bold">
                <span
                  className="block bg-gradient-to-r from-red-600 via-orange-600 to-pink-600 bg-clip-text text-transparent"
                  style={{
                    animation:
                      "slideInUp 1s ease-out, shimmer 3s ease-in-out infinite",
                  }}
                >
                  MENTĀMĪ
                </span>
              </h1>

              <p
                className="text-xl md:text-2xl text-gray-600 leading-relaxed"
                style={{ animation: "fadeInUp 1s ease-out 0.3s both" }}
              >
                Revolutionizing education through immersive AR/VR experiences.
                Step into the future of learning where knowledge comes alive.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-6"
                style={{ animation: "fadeInUp 1s ease-out 0.6s both" }}
              >
                <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    Start Learning{" "}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <button className="group flex items-center gap-3 px-8 py-4 border-2 border-gray-300 rounded-full font-semibold text-lg hover:border-red-600 hover:text-red-600 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Hero Video/Image */}
            <div
              className="relative"
              style={{
                transform: `translateY(${scrollY * 0.3}px) rotateY(${
                  scrollY * 0.1
                }deg)`,
                opacity: Math.max(0, 1 - scrollY * 0.002),
              }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="/images/vr.jpg"
                  alt="VR Learning Experience"
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group">
                    <Play className="w-8 h-8 text-red-600 ml-1" />
                  </button>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl rotate-12 opacity-80 animate-bounce" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl -rotate-12 opacity-60 animate-pulse" />
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{
            animation: "bounce 2s infinite",
            opacity: Math.max(0, 1 - scrollY * 0.003),
          }}
        >
          <ChevronDown className="w-8 h-8 text-red-600" />
        </div>
      </section>
      {/* Stats Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group cursor-pointer"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`,
                  transform: `translateY(${Math.max(
                    0,
                    (scrollY - 100) * -0.1
                  )}px)`,
                }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-2 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Courses Carousel */}
      <section className="relative py-32 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent"
              style={{
                transform: `translateY(${Math.max(
                  0,
                  (scrollY - 100) * -0.3
                )}px)`,
                opacity: Math.max(0, Math.min(1, (scrollY - 100) * 0.003)),
              }}
            >
              Featured Courses
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{
                transform: `translateY(${Math.max(
                  0,
                  (scrollY - 100) * -0.2
                )}px)`,
                opacity: Math.max(0, Math.min(1, (scrollY - 100) * 0.003)),
              }}
            >
              Immerse yourself in cutting-edge educational experiences that
              bring learning to life.
            </p>
          </div>

          <div
            className="relative overflow-hidden rounded-3xl"
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 100) * -0.2)}px)`,
              opacity: Math.max(0, Math.min(1, (scrollY - 100) * 0.003)),
            }}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {courses.map((course) => (
                <div key={course.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 bg-gradient-to-r from-white to-gray-50 p-8 md:p-12">
                    <div className="relative group">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-red-600 text-white text-sm rounded-full font-semibold">
                          {course.level}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center space-y-6">
                      <h3 className="text-4xl font-bold text-gray-900">
                        {course.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {course.description}
                      </p>
                      <div className="flex items-center gap-6 text-gray-500">
                        <span className="flex items-center gap-2">
                          <Globe className="w-5 h-5" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-2">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          4.9/5
                        </span>
                      </div>
                      <button className="group w-fit px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105">
                        <span className="flex items-center gap-2">
                          Start Course{" "}
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {courses.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-red-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-32 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent"
              style={{
                transform: `translateY(${Math.max(
                  0,
                  (scrollY - 600) * -0.3
                )}px)`,
                opacity: Math.max(0, Math.min(1, (scrollY - 400) * 0.003)),
              }}
            >
              Experience the Future
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{
                transform: `translateY(${Math.max(
                  0,
                  (scrollY - 700) * -0.2
                )}px)`,
                opacity: Math.max(0, Math.min(1, (scrollY - 500) * 0.003)),
              }}
            >
              Discover how MENTĀMĪ transforms traditional learning into
              immersive, interactive experiences that stick with you forever.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-red-200 hover:-translate-y-2"
                style={{
                  transform: `translateY(${Math.max(
                    0,
                    (scrollY - 800 - index * 100) * -0.1
                  )}px)`,
                  opacity: Math.max(
                    0,
                    Math.min(1, (scrollY - 600 - index * 100) * 0.004)
                  ),
                  animation: `fadeInUp 0.8s ease-out ${
                    0.8 + index * 0.2
                  }s both`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-orange-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="relative py-32 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden"
            style={{
              transform: `translateY(${Math.max(
                0,
                (scrollY - 100) * -0.2
              )}px) scale(${Math.min(
                1,
                Math.max(0.9, 1 - (scrollY - 100) * 0.0002)
              )})`,
              opacity: Math.max(0, Math.min(1, (scrollY - 100) * 0.003)),
            }}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"
                style={{ animation: "float 8s ease-in-out infinite" }}
              />
              <div
                className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-12 translate-y-12"
                style={{ animation: "float 6s ease-in-out infinite reverse" }}
              />
            </div>

            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Learning?
              </h2>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Join thousands of learners already experiencing the future of
                education. Start your immersive learning journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-10 py-5 bg-white text-red-600 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl">
                  <span className="flex items-center gap-3">
                    Get Started Free
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="group px-10 py-5 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 hover:scale-105">
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="relative py-32 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent"
              style={{
                transform: `translateY(${Math.max(
                  0,
                  (scrollY - 1600) * -0.3
                )}px)`,
                opacity: Math.max(0, Math.min(1, (scrollY - 1400) * 0.003)),
              }}
            >
              Experience the Future
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{
                transform: `translateY(${Math.max(
                  0,
                  (scrollY - 1700) * -0.2
                )}px)`,
                opacity: Math.max(0, Math.min(1, (scrollY - 1500) * 0.003)),
              }}
            >
              Discover how MENTĀMĪ transforms traditional learning into
              immersive, interactive experiences that stick with you forever.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-red-200 hover:-translate-y-2"
                style={{
                  transform: `translateY(${Math.max(
                    0,
                    (scrollY - 1800 - index * 100) * -0.1
                  )}px)`,
                  opacity: Math.max(
                    0,
                    Math.min(1, (scrollY - 1600 - index * 100) * 0.004)
                  ),
                  animation: `fadeInUp 0.8s ease-out ${
                    0.8 + index * 0.2
                  }s both`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-orange-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Carousel */}
      <section className="relative py-32 z-10 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent"
              style={{
                transform: `translateY(${Math.max(
                  0,
                  (scrollY - 2200) * -0.3
                )}px)`,
                opacity: Math.max(0, Math.min(1, (scrollY - 2000) * 0.003)),
              }}
            >
              What Our Students Say
            </h2>
          </div>

          <div
            className="relative"
            style={{
              transform: `translateY(${Math.max(
                0,
                (scrollY - 2300) * -0.2
              )}px)`,
              opacity: Math.max(0, Math.min(1, (scrollY - 2100) * 0.003)),
            }}
          >
            <div className="flex transition-transform duration-500 ease-out">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={`w-full flex-shrink-0 transition-all duration-500 ${
                    index === currentTestimonial
                      ? "opacity-100"
                      : "opacity-0 absolute"
                  }`}
                  style={{
                    transform:
                      index === currentTestimonial ? "scale(1)" : "scale(0.9)",
                  }}
                >
                  <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mx-auto max-w-4xl">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full object-cover shadow-lg"
                      />
                      <div className="flex-1 text-center md:text-left">
                        <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                          "{testimonial.text}"
                        </p>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-red-600 font-medium">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? "bg-red-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Interactive Demo Section */}
      <section className="relative py-32 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              style={{
                transform: `translateY(${Math.max(
                  0,
                  (scrollY - 2600) * -0.3
                )}px) rotateY(${Math.min(15, scrollY * 0.01)}deg)`,
                opacity: Math.max(0, Math.min(1, (scrollY - 2400) * 0.003)),
              }}
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                See It In Action
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the power of immersive learning with our interactive
                demo. Watch how complex concepts become simple through
                visualization.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center">
                    <Headphones className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg">Spatial Audio Integration</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg">Real-time Collaboration</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg">AI-Powered Assessments</span>
                </div>
              </div>
            </div>

            <div
              className="relative"
              style={{
                transform: `translateY(${Math.max(
                  0,
                  (scrollY - 2700) * -0.2
                )}px) rotateX(${Math.min(10, scrollY * 0.005)}deg)`,
                opacity: Math.max(0, Math.min(1, (scrollY - 2500) * 0.003)),
              }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <div className="aspect-video bg-gradient-to-br from-red-100 to-orange-100">
                  <img
                    src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=400&fit=crop"
                    alt="VR Learning Demo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-24 h-24 bg-white/95 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl">
                    <Play className="w-10 h-10 text-red-600 ml-2" />
                  </button>
                </div>

                {/* Floating UI Elements */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold">Live Session</span>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-red-600" />
                    <span className="text-sm font-semibold">12 Students</span>
                  </div>
                </div>
              </div>

              {/* 3D Floating Elements */}
              <div
                className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl rotate-12 opacity-70"
                style={{
                  animation: "float 4s ease-in-out infinite",
                  transform: `translateY(${
                    Math.sin(scrollY * 0.01) * 10
                  }px) rotate(${12 + scrollY * 0.1}deg)`,
                }}
              />
              <div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl -rotate-12 opacity-60"
                style={{
                  animation: "float 6s ease-in-out infinite reverse",
                  transform: `translateY(${
                    Math.cos(scrollY * 0.008) * 8
                  }px) rotate(${-12 - scrollY * 0.08}deg)`,
                }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative py-16 z-10 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              MENTĀMĪ
            </div>
            <p className="text-gray-400 mb-8">
              Revolutionizing education through immersive technology
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              {["Privacy Policy", "Terms of Service", "Contact Us"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0%,
          100% {
            background-position: -200% 0;
          }
          50% {
            background-position: 200% 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }

        @keyframes bounce {
          0%,
          20%,
          53%,
          80%,
          100% {
            transform: translate(-50%, 0);
          }
          40%,
          43% {
            transform: translate(-50%, -10px);
          }
          70% {
            transform: translate(-50%, -5px);
          }
        }

        @keyframes rotateY {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }

        @keyframes scaleFloat {
          0%,
          100% {
            transform: scale(1) translateY(0px);
          }
          50% {
            transform: scale(1.1) translateY(-10px);
          }
        }

        .animate-rotateY {
          animation: rotateY 20s linear infinite;
        }

        .animate-scaleFloat {
          animation: scaleFloat 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage3;
