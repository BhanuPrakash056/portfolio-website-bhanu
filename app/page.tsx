"use client";

import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { animate } from "animejs";
import LoadingScreen from "@/components/loading-screen";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";

// Lazy load components below the fold for better initial load performance
const About = lazy(() => import("@/components/about"));
const Experience = lazy(() => import("@/components/experience"));
const Skills = lazy(() => import("@/components/skills"));
const Contact = lazy(() => import("@/components/contact"));
const Footer = lazy(() => import("@/components/footer"));

export default function Home() {
  const [loading, setLoading] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

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
