"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

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
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center space-y-8">
        {/* Logo/Brand */}
        <motion.div
          className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          BP
        </motion.div>

        {/* Loading Animation */}
        <div className="relative">
          <motion.div
            className="w-32 h-32 border-4 border-primary/20 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />

          <motion.div
            className="absolute top-0 left-0 w-32 h-32 border-4 border-transparent border-t-primary rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="absolute top-2 left-2 w-28 h-28 border-4 border-transparent border-t-accent rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Progress Bar with Milestones */}
        <div className="w-64 mx-auto">
          <div className="relative w-full bg-muted rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
