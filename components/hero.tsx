import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, ChevronDown, MapPin, Code, Rocket } from "lucide-react"

const EnhancedHero = () => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentRole, setCurrentRole] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const roles = [
    "Full Stack Software Engineer",
    "DevOps Enthusiast",
    "Cloud Architecture Specialist",
    "React & Next.js Expert"
  ]
  
  const techStack = ["React", "Next.js", "TypeScript", "AWS", "Docker", "Node.js"]

  // Typing animation for current role
  useEffect(() => {
    let index = 0
    const currentText = roles[currentRole]
    setDisplayedText("")
    
    const timer = setInterval(() => {
      if (index < currentText.length) {
        setDisplayedText(currentText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 2000)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [currentRole])

  // Mouse move effect for spotlight
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e510_1px,transparent_1px),linear-gradient(to_bottom,#4f46e510_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Spotlight Effect */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 text-center md:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium backdrop-blur-sm animate-pulse-slow">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
              <div className="w-2 h-2 bg-green-400 rounded-full absolute" />
              Available for opportunities
            </div>

            {/* Name with Gradient */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Bhanu Prakash R
              </h1>
              
              {/* Dynamic Role */}
              <div className="h-16 md:h-20">
                <h2 className="text-2xl md:text-4xl font-semibold text-blue-300 flex items-center justify-center md:justify-start">
                  {displayedText}
                  <span className="ml-2 w-1 h-8 bg-blue-400 animate-blink" />
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Crafting scalable solutions with modern web technologies. 
              Currently at <span className="text-blue-400 font-semibold">Elanco</span>, 
              building cloud-native applications and optimizing DevOps workflows.
            </p>

            {/* Stats */}
            <div className="flex gap-6 justify-center md:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">3+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-slate-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-slate-400">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Let's Work Together
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl border-2 border-blue-500 text-blue-400 font-semibold hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <Code className="w-5 h-5" />
                View Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://linkedin.com/in/bhanuprakash-r"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-800/50 hover:bg-blue-600 text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 backdrop-blur-sm border border-slate-700 hover:border-blue-500"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-800/50 hover:bg-purple-600 text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 backdrop-blur-sm border border-slate-700 hover:border-purple-500"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>

              <a
                href="mailto:bp71712@gmail.com"
                className="p-4 rounded-xl bg-slate-800/50 hover:bg-pink-600 text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 backdrop-blur-sm border border-slate-700 hover:border-pink-500"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="relative hidden md:flex items-center justify-center">
            {/* Animated Circles */}
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl animate-pulse" />
              
              <div className="absolute inset-8 rounded-full border-2 border-blue-500/30 animate-spin-slow" />
              <div className="absolute inset-16 rounded-full border-2 border-purple-500/30 animate-spin-reverse" />
              
              {/* Center Avatar Placeholder */}
              <div className="absolute inset-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
                BP
              </div>

              {/* Floating Tech Stack Icons */}
              {techStack.map((tech, i) => (
                <div
                  key={tech}
                  className="absolute bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium text-blue-300 border border-blue-500/30 shadow-lg animate-float"
                  style={{
                    top: `${50 + 40 * Math.cos((i * 2 * Math.PI) / techStack.length)}%`,
                    left: `${50 + 40 * Math.sin((i * 2 * Math.PI) / techStack.length)}%`,
                    animationDelay: `${i * 0.5}s`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {tech}
                </div>
              ))}
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
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
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
  )
}

export default EnhancedHero