"use client";

import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { animate } from "animejs";
import { ChevronUp } from "lucide-react";
import LoadingScreen from "@/components/loading-screen";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";

// Lazy load components below the fold for better initial load performance
const About = lazy(() => import("@/components/about"));
const Experience = lazy(() => import("@/components/experience"));
const Projects = lazy(() => import("@/components/projects"));
const Skills = lazy(() => import("@/components/skills"));
const Contact = lazy(() => import("@/components/contact"));
const Footer = lazy(() => import("@/components/footer"));

export default function Home() {
  const [loading, setLoading] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);
  const [scrollPct, setScrollPct] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const topBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(total > 0 ? (scrolled / total) * 100 : 0);
      setShowTop(scrolled > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animate scroll-to-top button in/out
  useEffect(() => {
    const btn = topBtnRef.current;
    if (!btn) return;
    if (showTop) {
      btn.style.pointerEvents = "auto";
      animate(btn, { scale: { from: 0, to: 1 }, opacity: { from: 0, to: 1 }, duration: 350, ease: "outBack(2)" });
    } else {
      btn.style.pointerEvents = "none";
      animate(btn, { scale: { from: 1, to: 0 }, opacity: { from: 1, to: 0 }, duration: 250, ease: "inBack" });
    }
  }, [showTop]);

  useEffect(() => {
    if (!loading && mainRef.current) {
      animate(mainRef.current, {
        opacity: { from: 0, to: 1 },
        duration: 700,
        ease: "inQuad",
      });
    }
  }, [loading]);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 z-[200] h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 pointer-events-none"
        style={{ width: `${scrollPct}%`, transition: "width 0.05s linear" }}
      />

      {/* Scroll-to-top button */}
      <button
        ref={topBtnRef}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-110 transition-shadow"
        style={{ opacity: 0, scale: "0", pointerEvents: "none" }}
      >
        <ChevronUp size={20} />
      </button>

      {loading && <LoadingScreen />}
      <div ref={mainRef} style={{ opacity: 0 }}>
        <div className="bg-background" id="home">
          <Navigation />
          <Hero />
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <About />
          </Suspense>
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <Contact />
          </Suspense>
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </>
  );
}
