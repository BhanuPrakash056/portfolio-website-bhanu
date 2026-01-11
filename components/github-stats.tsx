"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Star, GitFork, Eye, Code, Users } from "lucide-react";

const GitHubStats = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  // Mock GitHub stats - in a real implementation, you'd fetch these from GitHub API
  const stats = {
    totalStars: 247,
    totalForks: 89,
    totalRepos: 42,
    followers: 156,
    following: 87,
    contributions: 1247,
  };

  const repositories = [
    {
      name: "react-portfolio-template",
      description:
        "A modern, responsive portfolio template built with React and Next.js",
      stars: 45,
      forks: 23,
      language: "TypeScript",
      languageColor: "#3178c6",
    },
    {
      name: "devops-automation-scripts",
      description:
        "Collection of automation scripts for CI/CD pipelines and infrastructure",
      stars: 38,
      forks: 15,
      language: "Python",
      languageColor: "#3776ab",
    },
    {
      name: "microservices-architecture",
      description:
        "Example microservices architecture with Docker and Kubernetes",
      stars: 52,
      forks: 28,
      language: "Go",
      languageColor: "#00add8",
    },
    {
      name: "ai-chatbot-framework",
      description:
        "Framework for building AI-powered chatbots with multiple LLM providers",
      stars: 67,
      forks: 31,
      language: "JavaScript",
      languageColor: "#f1e05a",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="github-stats" className="py-20 px-4 md:px-0" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            GitHub Activity
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My open source contributions and projects on GitHub
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {[
            {
              label: "Total Stars",
              value: stats.totalStars,
              icon: Star,
              color: "text-yellow-500",
            },
            {
              label: "Forks",
              value: stats.totalForks,
              icon: GitFork,
              color: "text-blue-500",
            },
            {
              label: "Repositories",
              value: stats.totalRepos,
              icon: Code,
              color: "text-green-500",
            },
            {
              label: "Followers",
              value: stats.followers,
              icon: Users,
              color: "text-purple-500",
            },
            {
              label: "Following",
              value: stats.following,
              icon: Eye,
              color: "text-orange-500",
            },
            {
              label: "Contributions",
              value: stats.contributions,
              icon: Github,
              color: "text-gray-500",
            },
          ].map((stat) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <IconComponent
                  className={`w-8 h-8 ${stat.color} mx-auto mb-2`}
                />
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Popular Repositories */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Popular Repositories
          </h3>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {repositories.map((repo, index) => (
            <motion.div
              key={repo.name}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {repo.name}
                </h4>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star size={14} />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={14} />
                    {repo.forks}
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {repo.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span className="text-sm text-muted-foreground">
                    {repo.language}
                  </span>
                </div>
                <a
                  href={`https://github.com/bhanuprakash-r/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                >
                  View Repository →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Profile Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://github.com/bhanuprakash-r"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            <Github size={18} />
            View Full GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
