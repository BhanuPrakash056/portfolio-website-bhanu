"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Star, Quote } from "lucide-react"

const Testimonials = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "Bhanu's expertise in full-stack development and DevOps transformed our product delivery pipeline. His attention to detail and problem-solving skills are exceptional.",
      rating: 5,
      avatar: "/api/placeholder/64/64",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      content: "Working with Bhanu was a game-changer for our startup. He delivered a scalable e-commerce platform that exceeded our expectations and helped us scale to 10x users.",
      rating: 5,
      avatar: "/api/placeholder/64/64",
    },
    {
      name: "Emily Rodriguez",
      role: "Engineering Lead",
      company: "DataFlow Inc",
      content: "Bhanu's cloud architecture expertise and knowledge of modern DevOps practices helped us reduce deployment time by 70% and improve system reliability significantly.",
      rating: 5,
      avatar: "/api/placeholder/64/64",
    },
    {
      name: "David Kim",
      role: "Founder",
      company: "InnovateLab",
      content: "The AI chat application Bhanu built for us has been instrumental in improving our customer engagement. His technical skills and innovative approach are outstanding.",
      rating: 5,
      avatar: "/api/placeholder/64/64",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="testimonials" className="py-20 px-4 md:px-0" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it - here's what clients and colleagues have to say about working with me
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 left-6">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-3 h-3 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-foreground/80 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="p-4 rounded-lg bg-card border border-border">
            <div className="text-3xl font-bold text-primary mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <div className="text-3xl font-bold text-primary mb-1">25+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <div className="text-3xl font-bold text-primary mb-1">99%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <div className="text-3xl font-bold text-primary mb-1">3+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials