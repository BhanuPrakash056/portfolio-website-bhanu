"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, BookOpen, Users, TrendingUp, Award, Code } from "lucide-react"

const Blog = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const blogPosts = [
    {
      title: "Building Scalable React Applications with Next.js 16",
      excerpt: "Exploring the latest features in Next.js 16 and how they improve application scalability and developer experience.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "React",
      tags: ["Next.js", "React", "Performance"],
      featured: true,
    },
    {
      title: "DevOps Best Practices for Modern Web Applications",
      excerpt: "A comprehensive guide to implementing CI/CD pipelines, containerization, and monitoring in your development workflow.",
      date: "Nov 28, 2024",
      readTime: "12 min read",
      category: "DevOps",
      tags: ["Docker", "CI/CD", "AWS"],
      featured: false,
    },
    {
      title: "TypeScript Advanced Patterns and Best Practices",
      excerpt: "Deep dive into advanced TypeScript features including conditional types, mapped types, and utility types.",
      date: "Nov 10, 2024",
      readTime: "10 min read",
      category: "TypeScript",
      tags: ["TypeScript", "JavaScript", "Best Practices"],
      featured: false,
    },
    {
      title: "Optimizing Web Performance: From 3s to Sub-1s Load Times",
      excerpt: "Real-world case study of performance optimization techniques that reduced load times by 70%.",
      date: "Oct 22, 2024",
      readTime: "15 min read",
      category: "Performance",
      tags: ["Performance", "Optimization", "Web Vitals"],
      featured: true,
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
    <section id="blog" className="py-20 px-4 md:px-0 bg-muted/20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Latest Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on modern web development, DevOps, and technology trends
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {blogPosts.filter(post => post.featured).slice(0, 1).map((post) => (
            <motion.article
              key={post.title}
              className="bg-card border border-border rounded-2xl p-8 md:p-12 hover:border-primary/50 transition-all duration-300 group"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <span className="text-muted-foreground text-sm flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className="text-muted-foreground text-sm">{post.readTime}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users size={14} />
                    2.3k views
                  </span>
                  <span className="flex items-center gap-1">
                    <TrendingUp size={14} />
                    127 likes
                  </span>
                </div>
                <button className="text-primary hover:text-primary/80 font-medium transition-colors">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.article
              key={post.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <span className="text-muted-foreground text-xs">{post.date}</span>
              </div>

              <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{post.readTime}</span>
                <button className="text-primary hover:text-primary/80 font-medium transition-colors">
                  Read →
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Get notified when I publish new articles about web development, DevOps, and technology trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog