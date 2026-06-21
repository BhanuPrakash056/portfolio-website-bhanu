"use client";

import { useEffect, useRef } from "react";
import { animate, createScope, stagger, splitText } from "animejs";
import { useInView } from "react-intersection-observer";
import { Code2, Database, Cloud, Zap, GitBranch, Shield } from "lucide-react";

const Skills = () => {
  const { ref: inViewRef, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const rootRef = useRef<HTMLElement>(null);
  const scopeRef = useRef<ReturnType<typeof createScope> | null>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const splitterRef = useRef<{ chars: Element[]; revert: () => void } | null>(null);

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

      // ── Skill tag stagger pop-in ─────────────────────────────────────────
      animate(".skill-tag", {
        opacity: { from: 0, to: 1 },
        scale: { from: 0.7, to: 1 },
        duration: 350,
        delay: stagger(25, { start: 400 }),
        ease: "outBack(1.5)",
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
      proficiency: 92,
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
      proficiency: 88,
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
      proficiency: 82,
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "S3", "SES", "Docker", "CI/CD", "Linux"],
      color: "from-orange-500 to-red-500",
      proficiency: 85,
    },
    {
      title: "Tools & Testing",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Locust", "Jest", "Playwright", "RHEL"],
      color: "from-indigo-500 to-blue-500",
      proficiency: 80,
    },
    {
      title: "Security",
      icon: Shield,
      skills: ["RHCSA", "Azure Fundamentals", "API Security", "Best Practices"],
      color: "from-amber-500 to-yellow-500",
      proficiency: 75,
    },
  ];

  const handleCardEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const glow = e.currentTarget.querySelector<HTMLElement>(".skill-glow");
    if (glow) animate(glow, { opacity: { from: 0, to: 0.12 }, duration: 400, ease: "outExpo" });
  };
  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const glow = e.currentTarget.querySelector<HTMLElement>(".skill-glow");
    if (glow) animate(glow, { opacity: 0, duration: 300, ease: "outQuad" });
  };

  return (
    <section id="skills" className="py-24 px-4 md:px-8 relative overflow-hidden" ref={setRefs}>
      <div className="max-w-6xl mx-auto">
        <div className="skills-header text-center mb-16" style={{ opacity: 0 }}>
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Technical Skills</p>
          <h2 ref={h2Ref} className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
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
                className="skill-card relative overflow-hidden p-6 rounded-lg bg-card border border-border hover:border-primary hover:-translate-y-2 transition-all duration-300 group"
                style={{ opacity: 0 }}
                onMouseEnter={handleCardEnter}
                onMouseLeave={handleCardLeave}
              >
                {/* Hover glow pulse */}
                <div
                  className="skill-glow absolute inset-0 rounded-lg pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 50% 30%, oklch(0.65 0.22 195 / 0.5), transparent 70%)", opacity: 0 }}
                />
                <div className="relative inline-flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${category.color}`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag px-3 py-1 rounded-full bg-foreground/5 text-foreground/70 text-sm font-medium border border-border/50 group-hover:border-primary/50 hover:scale-105 hover:bg-primary/10 transition-all"
                      style={{ opacity: 0 }}
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
