"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/loading-screen";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    // Simulate loading for 1.5s
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7 } }}
        >
          <LoadingScreen />
        </motion.div>
      ) : (
        <motion.div
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.7 } }}
        >
          <div
            className="min-h-screen bg-background relative overflow-hidden"
            id="home"
          >
            <div className="fixed inset-0 pointer-events-none z-0">
              <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/15 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-purple-500/15 to-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
              <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-teal-500/15 to-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
              <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-gradient-to-tr from-indigo-500/15 to-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-3000" />
            </div>
            <Navigation />
            <Hero />
            <About />
            <Experience /> 
            <Skills />
            <Contact />
            <Footer />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
