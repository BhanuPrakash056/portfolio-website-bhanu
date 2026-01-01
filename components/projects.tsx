"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, Star, Eye } from "lucide-react"

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      github: "https://github.com",
      demo: "https://demo.com",
      stars: 45,
      views: 1200,
      featured: true,
    },
    {
      title: "DevOps Dashboard",
      description: "Real-time monitoring dashboard for CI/CD pipelines with Docker container management and Kubernetes integration.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Docker", "Kubernetes", "Grafana", "Prometheus"],
      github: "https://github.com",
      demo: "https://demo.com",
      stars: 32,
      views: 890,
      featured: true,
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses, built with modern web technologies and WebSocket integration.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Socket.io", "OpenAI API", "MongoDB", "Express"],
      github: "https://github.com",
      demo: "https://demo.com",
      stars: 28,
      views: 650,
      featured: false,
    },
    {
      title: "Task Management Tool",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Vuex"],
      github: "https://github.com",
      demo: "https://demo.com",
      stars: 19,
      views: 430,
      featured: false,
    },
    {
      title: "Weather Analytics App",
      description: "Advanced weather forecasting application with data visualization, historical analysis, and location-based predictions.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "Weather API", "TypeScript"],
      github: "https://github.com",
      demo: "https://demo.com",
      stars: 15,
      views: 320,
      featured: false,
    },
    {
      title: "Code Review Tool",
      description: "Automated code review and quality analysis tool with GitHub integration and customizable rule sets.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "FastAPI", "GitHub API", "Docker"],
      github: "https://github.com",
      demo: "https://demo.com",
      stars: 22,
      views: 580,
      featured: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="py-20 px-4 md:px-0 bg-gradient-to-b from-background to-muted/20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring full-stack applications, DevOps tools, and innovative solutions
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium backdrop-blur-sm">
                    Featured
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 text-white text-xs backdrop-blur-sm">
                    <Star size={12} />
                    {project.stars}
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 text-white text-xs backdrop-blur-sm">
                    <Eye size={12} />
                    {project.views}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.filter(project => !project.featured).map((project, index) => (
            <motion.div
              key={project.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-1">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star size={10} />
                    {project.stars}
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded text-xs bg-primary/10 text-primary font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 rounded text-xs bg-muted text-muted-foreground">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground text-sm transition-colors"
                >
                  <Github size={14} />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 text-sm transition-colors"
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            <Github size={18} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects