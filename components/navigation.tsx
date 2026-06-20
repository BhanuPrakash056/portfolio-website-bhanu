"use client";

import { useState, useEffect, useRef, memo } from "react";
import { animate } from "animejs";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

// Throttle function for scroll events
function throttle<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const isFirstOpen = useRef(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Nav entrance
  useEffect(() => {
    if (navRef.current) {
      animate(navRef.current, {
        translateY: { from: -100, to: 0 },
        opacity: { from: 0, to: 1 },
        duration: 500,
        ease: "outExpo",
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 50);
    }, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu open/close animation
  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;

    if (isFirstOpen.current && !isOpen) {
      // Don't animate on first render when closed
      menu.style.maxHeight = "0px";
      menu.style.opacity = "0";
      menu.style.overflow = "hidden";
      isFirstOpen.current = false;
      return;
    }
    isFirstOpen.current = false;

    if (isOpen) {
      menu.style.display = "block";
      animate(menu, {
        maxHeight: { from: 0, to: 400 },
        opacity: { from: 0, to: 1 },
        duration: 300,
        ease: "outQuad",
      });
    } else {
      animate(menu, {
        maxHeight: { to: 0 },
        opacity: { to: 0 },
        duration: 250,
        ease: "inQuad",
        onComplete: () => {
          if (menu) menu.style.display = "none";
        },
      });
    }
  }, [isOpen]);

  const navItems = ["Home", "About", "Experience", "Skills", "Contact"];

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
      style={{ opacity: 0 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div
          className="text-xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer tracking-tight"
          onClick={() => scrollToSection("home")}
        >
          BP
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-foreground/70 hover:text-foreground hover:translate-x-0.5 transition-all"
            >
              {item}
            </button>
          ))}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-foreground hover:scale-110 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="md:hidden overflow-hidden"
        style={{ maxHeight: 0, opacity: 0 }}
      >
        <div className="bg-background/95 backdrop-blur-md border-b border-border px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="block w-full text-left text-foreground/70 hover:text-foreground hover:translate-x-1 transition-all py-2"
            >
              {item}
            </button>
          ))}
          {mounted && (
            <Button
              variant="outline"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-full justify-start"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="h-4 w-4 mr-2" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4 mr-2" />
                  Dark Mode
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default memo(Navigation);
