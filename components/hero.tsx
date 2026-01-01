import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  MapPin,
  Code,
  Rocket,
} from "lucide-react";

const EnhancedHero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = [
    "Full Stack Software Engineer",
    "DevOps Enthusiast",
    "Cloud Architecture Specialist",
    "React & Next.js Expert",
  ];

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "AWS",
    "Docker",
    "Node.js",
  ];

  // Typing animation for current role
  useEffect(() => {
    let index = 0;
    const currentText = roles[currentRole];
    setDisplayedText("");

    const timer = setInterval(() => {
      if (index < currentText.length) {
        setDisplayedText(currentText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [currentRole]);

  // Mouse move effect for spotlight
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e510_1px,transparent_1px),linear-gradient(to_bottom,#4f46e510_1px,transparent_1px)] bg-[size:4rem_4rem] animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
      </div>

      {/* Enhanced Spotlight Effect */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), rgba(147, 51, 234, 0.06), transparent 50%)`,
        }}
      />

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400/20 to-pink-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-500/20 rounded-full animate-spin-slow" />
        <div className="absolute top-40 right-20 w-24 h-24 border border-purple-500/20 rounded-lg rotate-45 animate-spin-reverse" />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-cyan-500/20 rounded-full animate-bounce" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 text-center md:text-left">
            {/* Enhanced Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-green-400 text-sm font-medium backdrop-blur-sm animate-pulse-slow shadow-lg shadow-green-500/10">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
              <div className="w-2 h-2 bg-green-400 rounded-full absolute animate-pulse" />
              Available for exciting opportunities
            </div>

            {/* Enhanced Name with Better Gradient */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient leading-tight">
                Bhanu Prakash R
              </h1>
              <p className="text-lg md:text-xl text-slate-400 font-medium max-w-lg mx-auto md:mx-0 leading-relaxed">
                Crafting impactful digital experiences with code, creativity,
                and cloud innovation.
              </p>
              {/* Enhanced Dynamic Role */}
              <div className="h-20 md:h-24 flex items-center justify-center md:justify-start">
                <h2 className="text-2xl md:text-4xl font-semibold text-blue-300 flex items-center gap-2">
                  <span className="text-blue-400">&lt;/</span>
                  {displayedText}
                  <span className="w-1 h-10 bg-gradient-to-b from-blue-400 to-purple-400 animate-blink rounded-full" />
                  <span className="text-purple-400">&gt;</span>
                </h2>
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl">
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                Passionate full-stack engineer specializing in scalable web applications and DevOps solutions.
                Currently driving innovation at{" "}
                <span className="text-blue-400 font-semibold bg-blue-500/10 px-2 py-1 rounded-md">Elanco</span>,
                building cloud-native applications and optimizing development workflows.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm font-medium">React Expert</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm font-medium">Cloud Architect</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-300 rounded-full text-sm font-medium">DevOps Specialist</span>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0">
              <div className="text-center p-4 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50">
                <div className="text-3xl font-bold text-white mb-1">3+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-slate-400">Projects</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-slate-400">Client Satisfaction</div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110 overflow-hidden"
                aria-label="Contact Bhanu Prakash R"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center gap-2">
                  <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Let's Work Together
                </div>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 rounded-xl border-2 border-blue-500/50 text-blue-400 font-semibold hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/20"
                aria-label="View Resume PDF"
              >
                <Code className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                View Resume
              </a>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://linkedin.com/in/bhanuprakash-r"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:from-blue-600 hover:to-blue-700 text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-115 hover:-translate-y-1 backdrop-blur-sm border border-slate-700 hover:border-blue-500 shadow-lg hover:shadow-blue-500/30"
                aria-label="LinkedIn Profile"
              >
                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <Linkedin className="relative w-6 h-6" size={24} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:from-purple-600 hover:to-purple-700 text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-115 hover:-translate-y-1 backdrop-blur-sm border border-slate-700 hover:border-purple-500 shadow-lg hover:shadow-purple-500/30"
                aria-label="GitHub Profile"
              >
                <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <Github className="relative w-6 h-6" size={24} />
              </a>

              <a
                href="mailto:bp71712@gmail.com"
                className="group relative p-4 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:from-pink-600 hover:to-pink-700 text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-115 hover:-translate-y-1 backdrop-blur-sm border border-slate-700 hover:border-pink-500 shadow-lg hover:shadow-pink-500/30"
                aria-label="Email Bhanu Prakash R"
              >
                <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <Mail className="relative w-6 h-6" size={24} />
              </a>
            </div>
          </div>

          {/* Right Side - Enhanced Visual Element */}
          <div className="relative hidden md:flex items-center justify-center">
            {/* Enhanced Animated Circles */}
            <div className="relative w-80 h-80">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl animate-pulse scale-150" />

              {/* Rotating rings */}
              <div className="absolute inset-4 rounded-full border-2 border-blue-500/40 animate-spin-slow backdrop-blur-sm" />
              <div className="absolute inset-12 rounded-full border-2 border-purple-500/40 animate-spin-reverse backdrop-blur-sm" />
              <div className="absolute inset-20 rounded-full border-2 border-cyan-500/30 animate-spin-slow animation-delay-1000 backdrop-blur-sm" />

              {/* Center Avatar with enhanced styling */}
              <div className="absolute inset-28 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-200 to-slate-400 flex items-center justify-center text-slate-800 font-bold text-2xl shadow-inner">
                  BP
                </div>
              </div>

              {/* Enhanced Floating Tech Stack Icons */}
              {techStack.map((tech, i) => (
                <div
                  key={tech}
                  className="absolute bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-medium text-blue-300 border border-blue-500/30 shadow-lg animate-float hover:scale-110 transition-transform"
                  style={{
                    top: `${
                      50 + 45 * Math.cos((i * 2 * Math.PI) / techStack.length)
                    }%`,
                    left: `${
                      50 + 45 * Math.sin((i * 2 * Math.PI) / techStack.length)
                    }%`,
                    animationDelay: `${i * 0.5}s`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {tech}
                </div>
              ))}

              {/* Additional floating elements */}
              <div className="absolute top-8 right-8 w-3 h-3 bg-blue-400 rounded-full animate-ping" />
              <div className="absolute bottom-8 left-8 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <div className="absolute top-1/2 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-blue-400" size={32} />
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default EnhancedHero;
