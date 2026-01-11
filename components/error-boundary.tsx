"use client";

import React from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { motion } from "framer-motion";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return (
          <FallbackComponent
            error={this.state.error}
            resetError={this.resetError}
          />
        );
      }

      return (
        <DefaultErrorFallback
          error={this.state.error}
          resetError={this.resetError}
        />
      );
    }

    return this.props.children;
  }
}

const DefaultErrorFallback: React.FC<{
  error?: Error;
  resetError: () => void;
}> = ({ error, resetError }) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <AlertTriangle className="w-10 h-10 text-red-500" />
        </motion.div>

        <h1 className="text-2xl font-bold text-foreground mb-2">
          Oops! Something went wrong
        </h1>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          We encountered an unexpected error. This has been reported and we're
          working to fix it.
        </p>

        {process.env.NODE_ENV === "development" && error && (
          <details className="mb-6 text-left bg-muted/50 rounded-lg p-4">
            <summary className="cursor-pointer font-medium text-foreground mb-2">
              Error Details (Development)
            </summary>
            <pre className="text-xs text-red-400 overflow-auto">
              {error.stack}
            </pre>
          </details>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <motion.button
            onClick={resetError}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RefreshCw size={18} />
            Try Again
          </motion.button>

          <motion.a
            href="/"
            className="px-6 py-3 bg-muted text-muted-foreground rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-muted/80 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home size={18} />
            Go Home
          </motion.a>
        </div>

        <p className="text-xs text-muted-foreground mt-6">
          If this problem persists, please contact support.
        </p>
      </motion.div>
    </div>
  );
};

export default ErrorBoundary;
