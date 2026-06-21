"use client";

import { useEffect, useRef } from "react";
import { animate, createScope, stagger, splitText } from "animejs";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Rocket,
  Target,
  Users,
  Award,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const { ref: inViewRef, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const rootRef = useRef<HTMLElement>(null);
  const scopeRef = useRef<ReturnType<typeof createScope> | null>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const splitterRef = useRef<{ chars: Element[]; revert: () => void } | null>(null);

  const coreValues = [
    { icon: Code2, title: "Clean Code", desc: "Write maintainable, elegant solutions" },
    { icon: TrendingUp, title: "Growth Mindset", desc: "Continuous learning and improvement" },
    { icon: Users, title: "Collaboration", desc: "Team-driven problem solving" },
    { icon: Rocket, title: "Performance", desc: "Optimize for speed and scalability" },
  ];

  const certifications = [
    { title: "Red Hat Certified System Administrator", code: "RHCSA - EX200", color: "from-red-500 to-orange-500" },
    { title: "Microsoft Certified", code: "Azure Fundamentals", color: "from-blue-500 to-cyan-500" },
    { title: "AWS Certified", code: "Cloud Practitioner", color: "from-orange-500 to-yellow-500" },
  ];

  // Combine refs
  const setRefs = (el: HTMLElement | null) => {
    (rootRef as React.MutableRefObject<HTMLElement | null>).current = el;
    inViewRef(el);
  };

  useEffect(() => {
    if (!inView || !rootRef.current) return;
    scopeRef.current = createScope({ root: rootRef }).add(() => {
      animate(".about-header", {
        opacity: { from: 0, to: 1 },
        translateY: { from: 20, to: 0 },
        duration: 600,
        ease: "outExpo",
      });
      animate(".about-card", {
        opacity: { from: 0, to: 1 },
        translateY: { from: 30, to: 0 },
        duration: 600,
        delay: stagger(150, { start: 150 }),
        ease: "outExpo",
      });
      animate(".about-value", {
        opacity: { from: 0, to: 1 },
        translateY: { from: 30, to: 0 },
        duration: 600,
        delay: stagger(80, { start: 450 }),
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

  return (
    <section
      id="about"
      ref={setRefs}
      className="py-24 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/10 to-background pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="about-header text-center mb-16" style={{ opacity: 0 }}>
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">About Me</p>
          <h2 ref={h2Ref} className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Building Digital Excellence
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming ideas into elegant, high-performance applications
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Story */}
          <Card className="about-card h-full bg-card/50 backdrop-blur-xl border-border" style={{ opacity: 0 }}>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a passionate{" "}
                <span className="text-blue-400 font-semibold">full-stack software engineer</span>{" "}
                with over 2 years of experience building scalable web applications and DevOps
                solutions. Currently working at{" "}
                <span className="text-purple-400 font-semibold">Elanco</span> as a Software
                Engineer, I focus on crafting efficient, maintainable code that makes a real impact.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My journey has taken me through cutting-edge technologies including{" "}
                <span className="text-cyan-400 font-semibold">React, Next.js, Node.js</span>, and
                cloud platforms. I'm particularly enthusiastic about DevOps practices, CI/CD
                pipelines, and optimizing application performance.
              </p>
              <div className="pt-4 space-y-3">
                {[
                  "2+ years of professional development experience",
                  "Multiple successful enterprise projects delivered",
                  "Strong focus on DevOps and cloud architecture",
                  "Active contributor to open-source community",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-foreground/70">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="about-card h-full bg-card/50 backdrop-blur-xl border-border" style={{ opacity: 0 }}>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <Award className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:translate-x-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-blue-400 transition-colors">
                          {cert.title}
                        </h4>
                        <p className={`text-sm font-mono bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                          {cert.code}
                        </p>
                      </div>
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${cert.color} opacity-10 group-hover:opacity-20 transition-opacity`}>
                        <Award className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Core Values</h3>
          <p className="text-foreground/60">Principles that guide my work</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, i) => (
            <div key={i} className="about-value group" style={{ opacity: 0 }}>
              <Card className="h-full bg-card/50 backdrop-blur-xl border-border hover:border-primary/50 hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{value.title}</h4>
                  <p className="text-sm text-foreground/60">{value.desc}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
