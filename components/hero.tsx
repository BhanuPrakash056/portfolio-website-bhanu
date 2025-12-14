"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Full Stack Software Engineer"
  const typingSpeed = 50

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, typingSpeed)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative pt-20 px-4 md:px-0">
      <motion.div
        className="text-center max-w-4xl z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Name */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Bhanu Prakash R
        </motion.h1>

        {/* Typing Title */}
        <motion.h2
          className="text-2xl md:text-3xl text-primary mb-6 h-12 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {displayedText}
          <span className="animate-pulse ml-2">|</span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl text-foreground/60 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          DevOps enthusiast crafting scalable solutions with React, Next.js, and cloud technologies. Currently at
          Elanco, passionate about continuous learning and excellence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg border-2 border-primary text-foreground font-semibold hover:bg-primary/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex gap-4 justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.a
            href="https://linkedin.com/in/bhanuprakash-r"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-card hover:bg-primary/20 transition-all"
            whileHover={{ scale: 1.1, y: -5 }}
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </motion.a>

          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-card hover:bg-primary/20 transition-all"
            whileHover={{ scale: 1.1, y: -5 }}
            aria-label="GitHub"
          >
            <Github size={24} />
          </motion.a>

          <motion.a
            href="mailto:bp71712@gmail.com"
            className="p-3 rounded-lg bg-card hover:bg-primary/20 transition-all"
            whileHover={{ scale: 1.1, y: -5 }}
            aria-label="Email"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="text-accent" size={32} />
      </motion.div>
    </section>
  )
}

export default Hero
