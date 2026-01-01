"use client"

import { useEffect } from 'react'

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production and if web vitals are supported
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        // Core Web Vitals
        getCLS(console.log)
        getFID(console.log)
        getFCP(console.log)
        getLCP(console.log)
        getTTFB(console.log)
      })
    }

    // Performance observer for additional metrics
    if ('PerformanceObserver' in window) {
      try {
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          console.log('LCP:', lastEntry.startTime)
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry) => {
            console.log('FID:', entry.processingStart - entry.startTime)
          })
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0
          const entries = list.getEntries()
          entries.forEach((entry) => {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
            }
          })
          console.log('CLS:', clsValue)
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })

        return () => {
          lcpObserver.disconnect()
          fidObserver.disconnect()
          clsObserver.disconnect()
        }
      } catch (error) {
        console.warn('Performance monitoring not fully supported:', error)
      }
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