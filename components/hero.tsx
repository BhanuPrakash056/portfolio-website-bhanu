"use client";

import { useEffect, useRef, useState } from "react";
import { animate, createScope, stagger, scrambleText } from "animejs";
import { Github, Linkedin, Mail, ArrowUpRight, ChevronDown } from "lucide-react";

// ── Magnetic "Get In Touch" button — icon launches out of the cursor dot ─────
const MagneticCTAButton = () => {
  const btnRef  = useRef<HTMLAnchorElement>(null);
  const dotRef  = useRef<HTMLSpanElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  // track mouse position for the icon trail
  const mousePos = useRef({ x: 0, y: 0 });
  const launched = useRef(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn  = btnRef.current;
    const dot  = dotRef.current;
    const glow = glowRef.current;
    const icon = iconRef.current;
    if (!btn || !dot || !glow || !icon) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mousePos.current = { x, y };

    // Dot snaps to cursor instantly
    animate(dot, { left: x, top: y, duration: 60, ease: "linear" });

    // Glow lags behind — soft depth
    animate(glow, { left: x, top: y, duration: 280, ease: "outCubic" });

    // Icon trails with the most lag — "chasing" the cursor
    animate(icon, { left: x, top: y, duration: 520, ease: "outCubic" });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn  = btnRef.current;
    const dot  = dotRef.current;
    const glow = glowRef.current;
    const icon = iconRef.current;
    if (!btn || !dot || !glow || !icon) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Place icon right at the cursor entry point first
    icon.style.left = `${x}px`;
    icon.style.top  = `${y}px`;
    dot.style.left  = `${x}px`;
    dot.style.top   = `${y}px`;

    // Dot appears immediately
    animate(dot, { scale: 1, opacity: 1, duration: 200, ease: "outBack(2)" });

    // Glow appears
    animate(glow, { left: x, top: y, scale: 1, opacity: 1, duration: 300, ease: "outBack(1.5)" });

    // Icon launches out from cursor: scale 0 → 1.15 → 1 with rotation
    launched.current = true;
    animate(icon, {
      scale: [0, 1.2, 1],
      rotate: [-45, 10, 0],
      opacity: [0, 1, 1],
      duration: 480,
      ease: "outBack(1.8)",
    });
  };

  const handleMouseLeave = () => {
    const btn  = btnRef.current;
    const dot  = dotRef.current;
    const glow = glowRef.current;
    const icon = iconRef.current;
    if (!btn || !dot || !glow || !icon) return;

    launched.current = false;
    const cx = btn.offsetWidth  / 2;
    const cy = btn.offsetHeight / 2;

    animate(dot,  { left: cx, top: cy, scale: 0, opacity: 0, duration: 350, ease: "outExpo" });
    animate(glow, { left: cx, top: cy, scale: 0, opacity: 0, duration: 450, ease: "outExpo" });
    // Icon shoots off: scale up briefly then vanish upward
    animate(icon, {
      scale: [1, 1.4, 0],
      rotate: [0, 20],
      opacity: [1, 1, 0],
      top: cy - 24,
      duration: 380,
      ease: "outCubic",
    });
  };

  return (
    <a
      ref={btnRef}
      href="#contact"
      className="relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold overflow-hidden transition-[gap] duration-200 select-none"
      style={{ cursor: "none" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow blob */}
      <span
        ref={glowRef}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white/20 blur-2xl"
        style={{ opacity: 0, transform: "translate(-50%,-50%) scale(0)", left: "50%", top: "50%" }}
      />
      {/* Cursor dot */}
      <span
        ref={dotRef}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_6px_2px_rgba(255,255,255,0.9)] z-20"
        style={{ opacity: 0, transform: "translate(-50%,-50%) scale(0)", left: "50%", top: "50%" }}
      />
      {/* Icon that launches out of the cursor dot */}
      <span
        ref={iconRef}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-7 h-7 rounded-full bg-white/90 shadow-lg"
        style={{ opacity: 0, transform: "translate(-50%,-50%) scale(0)", left: "50%", top: "50%" }}
      >
        <ArrowUpRight size={14} className="text-primary" strokeWidth={2.5} />
      </span>

      {/* Label & static icon (hidden once cursor enters) */}
      <span className="relative z-10">Get In Touch</span>
      <ArrowUpRight size={15} className="relative z-10 opacity-60" />
    </a>
  );
};

// Stable deterministic particle data — no re-render flicker
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: (i * 37 + 13) % 97,
  top: (i * 53 + 7) % 93,
  size: ((i * 17 + 3) % 3) + 1.5,
  dx: ((i * 41) % 70) - 35,
  dy: ((i * 29) % 60) - 30,
  duration: 3500 + ((i * 619) % 3000),
  delay: (i * 200) % 2000,
  opacity: (((i * 23) % 30) / 100) + 0.12,
}));

const NAME_CHARS = "Bhanu Prakash R".split("");

const STATS = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Projects Delivered" },
  { value: 20, suffix: "+", label: "Technologies" },
  { value: 5, suffix: "+", label: "Certifications" },
];

const ModernHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rootRef = useRef<HTMLElement>(null);
  const scopeRef = useRef<ReturnType<typeof createScope> | null>(null);
  const subtitleSpanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;
    scopeRef.current = createScope({ root: rootRef }).add(() => {
      // Badge entrance
      animate(".hero-badge", {
        opacity: { from: 0, to: 1 },
        translateY: { from: 10, to: 0 },
        duration: 600,
        delay: 200,
        ease: "outExpo",
      });

      // ── NEW: 3D letter cascade for name ──────────────────────────────────
      animate(".hero-letter", {
        opacity: { from: 0, to: 1 },
        translateY: { from: 50, to: 0 },
        rotateX: { from: -90, to: 0 },
        duration: 700,
        delay: stagger(35, { start: 350 }),
        ease: "outExpo",
      });

      animate(".hero-subtitle", {
        opacity: { from: 0, to: 1 },
        translateY: { from: 20, to: 0 },
        duration: 700,
        delay: 960,
        ease: "outExpo",
      });

      // ── scrambleText on subtitle span — hacker-terminal reveal ──────────
      if (subtitleSpanRef.current) {
        animate(subtitleSpanRef.current, {
          innerHTML: scrambleText({ duration: 1400, ease: "out(3)", chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" }),
          delay: 1100,
        });
      }
      animate(".hero-desc", {
        opacity: { from: 0, to: 1 },
        translateY: { from: 20, to: 0 },
        duration: 700,
        delay: 1060,
        ease: "outExpo",
      });
      animate(".hero-cta", {
        opacity: { from: 0, to: 1 },
        translateY: { from: 15, to: 0 },
        duration: 600,
        delay: 1160,
        ease: "outExpo",
      });
      animate(".hero-social", {
        opacity: { from: 0, to: 1 },
        translateY: { from: 10, to: 0 },
        duration: 500,
        delay: stagger(60, { start: 1260 }),
        ease: "outExpo",
      });
      animate(".hero-stat", {
        opacity: { from: 0, to: 1 },
        translateY: { from: 10, to: 0 },
        duration: 500,
        delay: stagger(80, { start: 1410 }),
        ease: "outExpo",
      });

      // ── NEW: counter animation for stats ─────────────────────────────────
      const statEls = rootRef.current!.querySelectorAll(".hero-stat-number");
      STATS.forEach((stat, i) => {
        const obj = { v: 0 };
        animate(obj, {
          v: stat.value,
          duration: 1800,
          delay: 1450 + i * 80,
          ease: "outExpo",
          onUpdate: () => {
            const el = statEls[i];
            if (el) el.textContent = Math.round(obj.v) + stat.suffix;
          },
        });
      });

      // ── NEW: floating particle drift ─────────────────────────────────────
      PARTICLES.forEach((p) => {
        const el = rootRef.current?.querySelector(`.hero-particle-${p.id}`);
        if (!el) return;
        animate(el as HTMLElement, {
          translateX: p.dx,
          translateY: p.dy,
          loop: true,
          direction: "alternate",
          duration: p.duration,
          delay: p.delay,
          ease: "inOutSine",
        });
      });
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

      {/* ── NEW: floating particles ── */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className={`hero-particle-${p.id} absolute rounded-full bg-primary pointer-events-none`}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
          }}
        />
      ))}

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
        {/* <div
          className="hero-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-card/60 text-muted-foreground text-sm font-medium mb-10"
          style={{ opacity: 0 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for new opportunities
        </div> */}

        {/* ── NEW: Name split into letters for 3D cascade ── */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-5"
          style={{ perspective: "600px" }}
        >
          {NAME_CHARS.map((char, i) => (
            <span
              key={i}
              className="hero-letter inline-block"
              style={{ opacity: 0 }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Role */}
        <div
          className="hero-subtitle flex items-center gap-4 mb-6"
          style={{ opacity: 0 }}
        >
          <span className="h-px w-8 bg-border" />
          <span ref={subtitleSpanRef} className="text-base sm:text-lg font-medium text-primary tracking-wide">
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
          <MagneticCTAButton />
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
            { icon: Linkedin, href: "https://linkedin.com/in/bhanuprakash-r", label: "LinkedIn" },
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

        {/* Stats bar — numbers count up via anime.js */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="hero-stat py-6 px-4 text-center bg-card/70"
              style={{ opacity: 0 }}
            >
              <div className="hero-stat-number text-2xl sm:text-3xl font-bold text-foreground mb-1">
                0{stat.suffix}
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
