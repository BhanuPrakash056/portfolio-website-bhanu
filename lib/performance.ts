"use client"

import { useEffect } from 'react'

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production and if web vitals are supported
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        // Core Web Vitals
        onCLS(console.log)
        onINP(console.log)
        onFCP(console.log)
        onLCP(console.log)
        onTTFB(console.log)
      })
    }
  }, [])

  return null
}

// Custom hook for measuring component performance
export function usePerformanceMeasurement(name: string) {
  useEffect(() => {
    const startTime = performance.now()

    return () => {
      const endTime = performance.now()
      const duration = endTime - startTime
      console.log(`${name} render time:`, duration.toFixed(2), 'ms')
    }
  }, [name])
}

// Utility function to measure function execution time
export function measureExecutionTime<T>(fn: () => T, label: string): T {
  const startTime = performance.now()
  const result = fn()
  const endTime = performance.now()
  console.log(`${label} execution time:`, (endTime - startTime).toFixed(2), 'ms')
  return result
}