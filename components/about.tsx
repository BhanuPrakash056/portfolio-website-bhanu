"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="py-20 px-4 md:px-0" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          {/* Section Title */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Profile */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a passionate full-stack software engineer with over 2 years of experience building scalable web
                applications and DevOps solutions. Currently working at Elanco as a Software Engineer, I focus on
                crafting efficient, maintainable code that makes a real impact.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                My journey has taken me through cutting-edge technologies including React, Next.js, Node.js, and cloud
                platforms. I'm particularly enthusiastic about DevOps practices, CI/CD pipelines, and optimizing
                application performance.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold text-foreground mb-4">Core Values</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    Clean, maintainable code
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    Continuous learning and improvement
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    Collaborative problem-solving
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    Performance and scalability
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Column - Certifications */}
            <motion.div variants={itemVariants}>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground mb-6">Certifications</h3>

                {[
                  {
                    title: "Red Hat Certified System Administrator",
                    code: "RHCSA - EX200",
                  },
                  {
                    title: "Microsoft Certified",
                    code: "Azure Fundamentals",
                  },
                  {
                    title: "AI & Model Context",
                    code: "Introduction to MCP",
                  },
                ].map((cert, i) => (
                  <motion.div
                    key={i}
                    className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300"
                    whileHover={{ x: 5, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.1)" }}
                  >
                    <p className="text-sm text-accent font-semibold uppercase tracking-wider">{cert.code}</p>
                    <p className="text-foreground font-medium mt-2">{cert.title}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
