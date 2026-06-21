"use client";

import { useEffect, useRef } from "react";
import { animate, createScope, stagger, splitText } from "animejs";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Layers } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  gradient: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: "Enterprise Monitoring Dashboard",
    description:
      "Real-time analytics platform serving thousands of users. Built with React, WebSockets, and Redis pub/sub — achieves sub-100ms data refresh with 99.9% uptime.",
    tech: ["React", "Node.js", "WebSockets", "Redis", "PostgreSQL", "AWS"],
    github: "https://github.com/BhanuPrakash056",
    demo: "#",
    gradient: "from-blue-500 to-cyan-500",
    featured: true,
  },
  {
    title: "CI/CD Automation Framework",
    description:
      "Terraform + GitHub Actions pipeline framework that cut deployment time by 30%. Provisions AWS infrastructure from code with drift detection and auto-rollback.",
    tech: ["Terraform", "GitHub Actions", "AWS", "Docker", "Bash", "YAML"],
    github: "https://github.com/BhanuPrakash056",
    demo: "#",
    gradient: "from-orange-500 to-red-500",
    featured: true,
  },
  {
    title: "Employee Onboarding Portal",
    description:
      "Full-stack portal streamlining onboarding for 100+ employees. Secure JWT auth, role-based access, AWS SES notifications and S3 document storage.",
    tech: ["React", "Node.js", "PostgreSQL", "JWT", "AWS SES", "S3"],
    github: "https://github.com/BhanuPrakash056",
    demo: "#",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Vue 3 Migration Toolkit",
    description:
      "Automated migration tooling for Vue 2 → Vue 3 / Nuxt 2 → Nuxt 3. Improved app response time by 35%, validated by Locust load tests.",
    tech: ["Vue 3", "Nuxt 3", "TypeScript", "Vite", "Locust", "GitHub Actions"],
    github: "https://github.com/BhanuPrakash056",
    demo: "#",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Scalable API Gateway",
    description:
      "GraphQL + REST gateway with rate-limiting, request caching, and circuit-breaker patterns. Handles 10K+ requests/min with horizontal scaling on AWS ECS.",
    tech: ["Node.js", "GraphQL", "Redis", "Docker", "AWS ECS", "Prisma"],
    github: "https://github.com/BhanuPrakash056",
    demo: "#",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    title: "Portfolio Website",
    description:
      "This site — built with Next.js 14 App Router, Tailwind CSS, and advanced Anime.js animations including 3D letter cascades, particle drift, and SVG progress rings.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Anime.js", "Framer Motion"],
    github: "https://github.com/BhanuPrakash056/portfolio-website-bhanu",
    demo: "#",
    gradient: "from-teal-500 to-cyan-500",
  },
];

const Projects = () => {
  const { ref: inViewRef, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const rootRef = useRef<HTMLElement>(null);
  const scopeRef = useRef<ReturnType<typeof createScope> | null>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const splitterRef = useRef<{ chars: Element[]; revert: () => void } | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const setRefs = (el: HTMLElement | null) => {
    (rootRef as React.MutableRefObject<HTMLElement | null>).current = el;
    inViewRef(el);
  };

  // ── Sticky horizontal scroll on desktop ──────────────────────────────────
  useEffect(() => {
    const updateLayout = () => {
      if (!trackRef.current || !wrapperRef.current) return;
      if (window.innerWidth < 768) {
        wrapperRef.current.style.height = "auto";
        trackRef.current.style.transform = "none";
        return;
      }
      const maxTranslate = Math.max(0, trackRef.current.scrollWidth - window.innerWidth + 96);
      wrapperRef.current.style.height = `calc(${maxTranslate}px + 100vh)`;
    };

    const onScroll = () => {
      if (!wrapperRef.current || !trackRef.current) return;
      if (window.innerWidth < 768) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const scrollBudget = wrapperRef.current.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollBudget));
      const maxTranslate = Math.max(0, trackRef.current.scrollWidth - window.innerWidth + 96);
      trackRef.current.style.transform = `translateX(${-progress * maxTranslate}px)`;
    };

    updateLayout();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateLayout);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  useEffect(() => {
    if (!inView || !rootRef.current) return;
    scopeRef.current = createScope({ root: rootRef }).add(() => {
      animate(".proj-header", {
        opacity: { from: 0, to: 1 },
        translateY: { from: 20, to: 0 },
        duration: 600,
        ease: "outExpo",
      });
      // Staggered card entrance with scale pop
      animate(".proj-card", {
        opacity: { from: 0, to: 1 },
        translateY: { from: 40, to: 0 },
        scale: { from: 0.95, to: 1 },
        duration: 650,
        delay: stagger(100, { start: 200 }),
        ease: "outExpo",
      });

      // ── splitText: chars slide up from clip on section h2 ───────────────
      if (h2Ref.current) {
        splitterRef.current = splitText(h2Ref.current, { chars: { wrap: "clip" } }) as { chars: Element[]; revert: () => void };
        animate(splitterRef.current.chars, {
          y: ["110%", "0%"],
          duration: 600,
          delay: stagger(22, { start: 120 }),
          ease: "outExpo",
        });
      }
    });
    return () => {
      scopeRef.current?.revert();
      splitterRef.current?.revert();
    };
  }, [inView]);

  // ── 3D tilt handlers — anime.js drives rotateX/rotateY each mousemove ──
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 … 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    animate(card, {
      rotateX: -y * 14,
      rotateY: x * 14,
      duration: 120,
      ease: "outQuad",
    });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    animate(e.currentTarget, {
      scale: 1.03,
      duration: 300,
      ease: "outQuad",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    animate(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 500,
      ease: "outExpo",
    });
  };

  return (
    <div ref={wrapperRef}>
      <section
        id="projects"
        ref={setRefs}
        className="md:sticky md:top-0 md:h-screen md:overflow-hidden py-24 md:py-0 px-4 md:px-0 relative"
      >
        {/* Background accents */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/8 to-background pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 md:h-full md:flex md:flex-col md:justify-center">
          {/* Section header */}
          <div className="proj-header text-center mb-10 md:mb-12 px-4 md:px-16" style={{ opacity: 0 }}>
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">
              Selected Work
            </p>
            <h2 ref={h2Ref} className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Projects
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of things I&apos;ve built — from enterprise platforms to open-source tools
            </p>
          </div>

          {/* Cards track — vertical on mobile, horizontal on md+ */}
          <div
            ref={trackRef}
            className="flex flex-col gap-6 md:flex-row md:gap-6 px-4 md:px-16 md:will-change-transform"
          >
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className="proj-card md:flex-shrink-0 md:w-[400px]"
                style={{ opacity: 0 }}
              >
                {/* Inner tilt surface — anime.js rotateX/Y applied here */}
                <div
                  className={`h-full flex flex-col p-6 rounded-xl bg-card border ${
                    project.featured ? "border-primary/40" : "border-border"
                  } hover:border-primary cursor-default select-none`}
                  style={{ transformStyle: "preserve-3d", willChange: "transform" }}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Top row: gradient icon + links */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-2.5 rounded-lg bg-gradient-to-br ${project.gradient} opacity-90`}
                    >
                      <Layers size={20} className="text-white" />
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                      </a>
                      {project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live demo"
                          className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">
                    {project.title}
                    {project.featured && (
                      <span className="ml-2 inline-block text-[10px] font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded align-middle">
                        Featured
                      </span>
                    )}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-foreground/5 text-foreground/60 border border-border/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll hint — desktop only */}
          <p className="hidden md:block text-center text-xs text-muted-foreground/50 mt-6 tracking-widest uppercase">
            scroll to explore →
          </p>
        </div>
      </section>
    </div>
  );
};

export default Projects;
