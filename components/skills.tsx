"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code2, Database, Cloud, Zap, GitBranch, Shield } from "lucide-react"

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["React", "Next.js", "Vue 3", "Nuxt 3", "Tailwind CSS", "TypeScript"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend",
      icon: Zap,
      skills: ["Node.js", "Express", "REST APIs", "Authentication", "GraphQL", "WebSockets"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Database",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Query Optimization"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "S3", "SES", "Docker", "CI/CD", "Linux"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Tools & Testing",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Locust", "Jest", "Playwright", "RHEL"],
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Security",
      icon: Shield,
      skills: ["RHCSA", "Azure Fundamentals", "API Security", "Best Practices"],
      color: "from-amber-500 to-yellow-500",
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
    <section id="skills" className="py-20 px-4 md:px-0" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.title}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all group"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                {/* Icon */}
                <div
                  className={`inline-block p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4">{category.title}</h3>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-foreground/5 text-foreground/70 text-sm font-medium border border-border/50 group-hover:border-primary/50 transition-colors"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
