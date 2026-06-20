"use client";

import { useEffect, useRef, useState } from "react";
import { animate, createScope, stagger } from "animejs";
import { Github, Linkedin, Mail, ArrowUpRight, ChevronDown } from "lucide-react";

const ModernHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rootRef = useRef<HTMLElement>(null);
  const scopeRef = useRef<ReturnType<typeof createScope> | null>(null);

  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "15+", label: "Projects Delivered" },
    { value: "20+", label: "Technologies" },
    { value: "5+", label: "Certifications" },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;
    scopeRef.current = createScope({ root: rootRef }).add(() => {
      animate(".hero-badge", { opacity: { from: 0, to: 1 }, translateY: { from: 10, to: 0 }, duration: 600, delay: 200, ease: "outExpo" });
      animate(".hero-name", { opacity: { from: 0, to: 1 }, translateY: { from: 30, to: 0 }, duration: 800, delay: 350, ease: "outExpo" });
      animate(".hero-subtitle", { opacity: { from: 0, to: 1 }, translateY: { from: 20, to: 0 }, duration: 700, delay: 500, ease: "outExpo" });
      animate(".hero-desc", { opacity: { from: 0, to: 1 }, translateY: { from: 20, to: 0 }, duration: 700, delay: 600, ease: "outExpo" });
      animate(".hero-cta", { opacity: { from: 0, to: 1 }, translateY: { from: 15, to: 0 }, duration: 600, delay: 700, ease: "outExpo" });
      animate(".hero-social", { opacity: { from: 0, to: 1 }, translateY: { from: 10, to: 0 }, duration: 500, delay: stagger(60, { start: 850 }), ease: "outExpo" });
      animate(".hero-stat", { opacity: { from: 0, to: 1 }, translateY: { from: 10, to: 0 }, duration: 500, delay: stagger(80, { start: 1050 }), ease: "outExpo" });
    });
    return () => scopeRef.current?.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden bg-background"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

      {/* Single soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Mouse spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99,102,241,0.06), transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto w-full flex flex-col items-center">
        {/* Status badge */}
        <div
          className="hero-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-card/60 text-muted-foreground text-sm font-medium mb-10"
          style={{ opacity: 0 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for new opportunities
        </div>

        {/* Name */}
        <h1
          className="hero-name text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-5"
          style={{ opacity: 0 }}
        >
          Bhanu Prakash R
        </h1>

        {/* Role */}
        <div
          className="hero-subtitle flex items-center gap-4 mb-6"
          style={{ opacity: 0 }}
        >
          <span className="h-px w-8 bg-border" />
          <span className="text-base sm:text-lg font-medium text-primary tracking-wide">
            Full Stack Software Engineer
          </span>
          <span className="h-px w-8 bg-border" />
        </div>

        {/* Description */}
        <p
          className="hero-desc text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10"
          style={{ opacity: 0 }}
        >
          Building scalable web applications and DevOps solutions at{" "}
          <span className="text-foreground font-medium">Elanco</span>. Passionate
          about clean architecture, performance, and developer experience.
        </p>

        {/* CTAs */}
        <div
          className="hero-cta flex flex-wrap gap-3 justify-center mb-10"
          style={{ opacity: 0 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 hover:gap-3 transition-all"
          >
            Get In Touch
            <ArrowUpRight size={15} />
          </a>
          <a
            href="#experience"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-foreground text-sm font-semibold hover:bg-card hover:border-primary/40 transition-all"
          >
            View Experience
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-2 mb-16">
          {[
            { icon: Github, href: "https://github.com/BhanuPrakash056", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/bhanu-prakash-r", label: "LinkedIn" },
            { icon: Mail, href: "mailto:bp71712@gmail.com", label: "Email" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="hero-social p-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-card transition-all"
              style={{ opacity: 0 }}
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>

        {/* Stats bar */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="hero-stat py-6 px-4 text-center bg-card/70"
              style={{ opacity: 0 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/40">Scroll</span>
        <ChevronDown size={14} className="text-muted-foreground/30 animate-bounce" />
      </div>
    </section>
  );
};

export default ModernHero;
