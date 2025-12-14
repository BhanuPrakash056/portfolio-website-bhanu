"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Experience = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const experiences = [
    {
      title: "Software Engineer - I",
      company: "Elanco",
      period: "Oct 2024 - Present",
      description:
        "Developing and maintaining full-stack applications, optimizing performance, and leading DevOps initiatives.",
      skills: ["React", "Node.js", "AWS", "CI/CD"],
    },
    {
      title: "Trainee Engineer",
      company: "Elanco",
      period: "Oct 2023 - Oct 2024",
      description:
        "Completed intensive training in modern web development and cloud technologies. Built foundational skills in full-stack development.",
      skills: ["Next.js", "PostgreSQL", "AWS", "Docker"],
    },
    {
      title: "Software Engineer Intern",
      company: "Tiramisu New Media Solutions",
      period: "Jul 2023 - Oct 2023",
      description:
        "Migrated legacy Vue 2/Nuxt 2 applications to Vue 3/Nuxt 3, implemented CI/CD pipelines, and conducted performance load testing.",
      skills: ["Vue 3", "Nuxt 3", "CI/CD", "Locust"],
    },
    {
      title: "Software Engineer Trainee",
      company: "BETSOL",
      period: "Jun 2022 - Jul 2022",
      description:
        "Developed employee onboarding portal with React and Node.js. Integrated AWS services for email and document management.",
      skills: ["React", "Node.js", "PostgreSQL", "AWS"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 md:px-0" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Timeline Line */}
              <div className="hidden md:block absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-transparent" />

              {/* Timeline Dot */}
              <motion.div
                className="hidden md:block absolute -left-14 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background"
                whileHover={{ scale: 1.2 }}
              />

              {/* Card */}
              <motion.div
                className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all"
                whileHover={{ y: -5, boxShadow: "0 20px 25px rgba(59, 130, 246, 0.1)" }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-foreground/60 text-sm md:text-right mt-2 md:mt-0">{exp.period}</span>
                </div>

                <p className="text-foreground/70 mb-4 leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
