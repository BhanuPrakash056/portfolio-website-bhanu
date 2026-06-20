"use client";

import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code,
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
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-4">
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
            </div>

            {/* Services */}
            <div>
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
            </div>

            {/* Technologies */}
            <div>
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
            </div>
          </div>

          {/* Quick Links & Social */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Quick Links */}
            <div>
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
            </div>

            {/* Social & Connect */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <div className="flex gap-3 mb-4">
                <a
                  href="https://linkedin.com/in/bhanuprakash-r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-card transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href="https://github.com/bhanuprakash056"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-card transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>

                <a
                  href="mailto:bp71712@gmail.com"
                  className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-card transition-all"
                  aria-label="Email Bhanu Prakash R"
                >
                  <Mail size={18} />
                </a>
              </div>

              {/* Call to Action */}
              <div className="rounded-lg p-4 border border-border bg-card/50">
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
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 px-4 md:px-0 border-t border-border">
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
      </div>
    </footer>
  );
};

export default Footer;
