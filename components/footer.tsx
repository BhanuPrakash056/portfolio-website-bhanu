"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Code,
  Cloud,
  Zap,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Full-Stack Development",
    "DevOps & CI/CD",
    "Cloud Architecture",
    "API Development",
    "Performance Optimization",
    "Technical Consulting",
  ];

  const technologies = [
    "React/Next.js",
    "Node.js",
    "AWS/Azure",
    "Docker/K8s",
    "PostgreSQL",
    "TypeScript",
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-border">
      {/* Main Footer Content */}
      <div className="py-16 px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand & Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                Bhanu Prakash R
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed max-w-md">
                Passionate full-stack engineer crafting scalable solutions and
                optimizing development workflows. Let's build something amazing
                together.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-foreground/60">
                  <MapPin size={16} className="text-primary flex-shrink-0" />
                  <span className="text-sm">Bengaluru, Karnataka, India</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/60">
                  <Mail size={16} className="text-primary flex-shrink-0" />
                  <a
                    href="mailto:bp71712@gmail.com"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    bp71712@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Code size={18} className="text-primary" />
                Services
              </h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-sm text-foreground/60 hover:text-primary transition-colors cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Zap size={18} className="text-primary" />
                Technologies
              </h4>
              <ul className="space-y-2">
                {technologies.map((tech) => (
                  <li key={tech}>
                    <span className="text-sm text-foreground/60 hover:text-primary transition-colors cursor-pointer">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Quick Links & Social */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: "About", href: "#about" },
                  { name: "Experience", href: "#experience" },
                  { name: "Projects", href: "#projects" },
                  { name: "Skills", href: "#skills" },
                  { name: "Testimonials", href: "#testimonials" },
                  { name: "Contact", href: "#contact" },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Social & Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <div className="flex gap-3 mb-4">
                <motion.a
                  href="https://linkedin.com/in/bhanuprakash-r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-800/50 hover:bg-blue-600 text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-slate-700 hover:border-blue-500"
                  whileHover={{ scale: 1.05 }}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </motion.a>

                <motion.a
                  href="https://github.com/bhanu-pratap-r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-800/50 hover:bg-purple-600 text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-slate-700 hover:border-purple-500"
                  whileHover={{ scale: 1.05 }}
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </motion.a>

                <motion.a
                  href="mailto:bp71712@gmail.com"
                  className="p-3 rounded-xl bg-slate-800/50 hover:bg-pink-600 text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-slate-700 hover:border-pink-500"
                  whileHover={{ scale: 1.05 }}
                  aria-label="Email Bhanu Prakash R"
                >
                  <Mail size={20} />
                </motion.a>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 border border-primary/20">
                <p className="text-sm text-foreground/80 mb-2">
                  Ready to start a project?
                </p>
                <a
                  href="#contact"
                  className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors"
                >
                  Let's talk <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="py-6 px-4 md:px-0 border-t border-border"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-foreground/60 text-sm">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
            <p>&copy; {currentYear} Bhanu Prakash R. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span>Built with</span>
              <span className="text-primary font-medium">React</span>
              <span>&</span>
              <span className="text-primary font-medium">Next.js</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
