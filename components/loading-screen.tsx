"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const spinnerOuterRef = useRef<HTMLDivElement>(null);
  const spinnerInnerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Entrance animations
  useEffect(() => {
    if (logoRef.current) {
      animate(logoRef.current, {
        scale: { from: 0, to: 1 },
        duration: 500,
        delay: 200,
        ease: "outBack(1.5)",
      });
    }
    if (spinnerOuterRef.current) {
      animate(spinnerOuterRef.current, {
        scale: { from: 0, to: 1 },
        duration: 500,
        delay: 400,
        ease: "outBack(1.5)",
      });
    }
    if (spinnerInnerRef.current) {
      animate(spinnerInnerRef.current, {
        rotate: -360,
        loop: true,
        duration: 1500,
        ease: "linear",
      });
    }
    // Spinner outer clockwise
    if (spinnerOuterRef.current) {
      animate(spinnerOuterRef.current.querySelector(".spin-cw") as HTMLElement, {
        rotate: 360,
        loop: true,
        duration: 1000,
        ease: "linear",
      });
    }
  }, []);

  // Progress bar animation
  useEffect(() => {
    if (progressBarRef.current) {
      animate(progressBarRef.current, {
        width: `${progress}%`,
        duration: 300,
        ease: "outQuad",
      });
    }
  }, [progress]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setIsComplete(true), 500);
    }, 2000);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (isComplete) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="text-center space-y-8">
        {/* Logo/Brand */}
        <div
          ref={logoRef}
          className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          style={{ scale: "0" } as React.CSSProperties}
        >
          BP
        </div>

        {/* Loading Animation */}
        <div className="relative w-32 h-32 mx-auto">
          <div
            ref={spinnerOuterRef}
            className="w-32 h-32"
            style={{ scale: "0" } as React.CSSProperties}
          >
            <div className="w-32 h-32 border-4 border-primary/20 rounded-full absolute top-0 left-0" />
            <div className="spin-cw absolute top-0 left-0 w-32 h-32 border-4 border-transparent border-t-primary rounded-full" />
          </div>
          <div
            ref={spinnerInnerRef}
            className="absolute top-2 left-2 w-28 h-28 border-4 border-transparent border-t-accent rounded-full"
          />
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="relative w-full bg-muted rounded-full h-2">
            <div
              ref={progressBarRef}
              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
              style={{ width: "0%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
