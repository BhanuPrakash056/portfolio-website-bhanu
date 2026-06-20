"use client";

import { useEffect, useRef } from "react";
import { animate, createScope, stagger } from "animejs";
import { useInView } from "react-intersection-observer";
import { Code2, Database, Cloud, Zap, GitBranch, Shield } from "lucide-react";

const Skills = () => {
  const { ref: inViewRef, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const rootRef = useRef<HTMLElement>(null);
  const scopeRef = useRef<ReturnType<typeof createScope> | null>(null);

  const setRefs = (el: HTMLElement | null) => {
    (rootRef as React.MutableRefObject<HTMLElement | null>).current = el;
    inViewRef(el);
  };

  useEffect(() => {
    if (!inView || !rootRef.current) return;
    scopeRef.current = createScope({ root: rootRef }).add(() => {
      animate(".skills-header", {
        opacity: { from: 0, to: 1 },
        translateY: { from: 20, to: 0 },
        duration: 600,
        ease: "outExpo",
      });
      animate(".skill-card", {
        opacity: { from: 0, to: 1 },
        translateY: { from: 20, to: 0 },
        duration: 600,
        delay: stagger(80, { start: 150 }),
        ease: "outExpo",
      });
    });
    return () => scopeRef.current?.revert();
  }, [inView]);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: [
        "React",
        "Next.js",
        "Vue 3",
        "Nuxt 3",
        "Tailwind CSS",
        "TypeScript",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend",
      icon: Zap,
      skills: [
        "Node.js",
        "Express",
        "REST APIs",
        "Authentication",
        "GraphQL",
        "WebSockets",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Prisma ORM",
        "Query Optimization",
      ],
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
  ];

  return (
    <section id="skills" className="py-24 px-4 md:px-8 relative overflow-hidden" ref={setRefs}>
      <div className="max-w-6xl mx-auto">
        <div className="skills-header text-center mb-16" style={{ opacity: 0 }}>
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Technical Skills</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills &amp; Expertise
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="skill-card p-6 rounded-lg bg-card border border-border hover:border-primary hover:-translate-y-2 transition-all duration-300 group"
                style={{ opacity: 0 }}
              >
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{category.title}</h3>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-foreground/5 text-foreground/70 text-sm font-medium border border-border/50 group-hover:border-primary/50 hover:scale-105 hover:bg-primary/10 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
