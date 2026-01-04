'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Lottie = dynamic(
  () => import('lottie-react').catch(() => ({ default: () => null })),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-gradient-to-br from-primary-100 via-primary-50 to-primary-200 animate-pulse rounded-3xl flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary-300 border-t-primary-600 rounded-full animate-spin"></div>
      </div>
    )
  }
)

export default function Hero() {
  const [animationData, setAnimationData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        setIsLoading(true)
        setHasError(false)
        const response = await fetch('/images/hero/sphere.json')
        if (!response.ok) {
          throw new Error('Failed to load animation')
        }
        const data = await response.json()
        setAnimationData(data)
      } catch (err) {
        console.error('Error loading animation:', err)
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }
    
    loadAnimation()
  }, [])

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden"
    >
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
          style={{
            transform: `translate(calc(-50% + ${mousePosition.x * 0.01}px), calc(-50% + ${mousePosition.y * 0.01}px))`,
          }}
        ></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c7_1px,transparent_1px),linear-gradient(to_bottom,#0284c7_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary-500 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-primary-300 rounded-full animate-pulse opacity-70 animation-delay-4000"></div>
        <div className="absolute bottom-20 right-1/3 w-2.5 h-2.5 bg-primary-600 rounded-full animate-pulse opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></span>
              Transforming Ideas Into Reality
            </div>
            
            <h1 className="hidden md:block text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 bg-clip-text text-transparent animate-gradient">
                SkylineDigitals
              </span>
            </h1>
            
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto lg:mx-0 pt-16 md:pt-0 font-semibold">
                Your trusted partner for{' '}
                <span className="text-primary-600 relative inline-block">
                  innovative
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-400 opacity-30 -rotate-1"></span>
                </span>{' '}
                technology solutions
              </p>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                We do everything related to software, apps, web development, AI, and
                digital solutions. Transforming ideas into reality with cutting-edge technology.
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-2">
              <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-primary-700 rounded-md text-xs font-medium border border-primary-200 shadow-sm">
                Web Development
              </span>
              <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-primary-700 rounded-md text-xs font-medium border border-primary-200 shadow-sm">
                Mobile Apps
              </span>
              <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-primary-700 rounded-md text-xs font-medium border border-primary-200 shadow-sm">
                AI & ML
              </span>
              <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-primary-700 rounded-md text-xs font-medium border border-primary-200 shadow-sm">
                Cloud Solutions
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#services"
                className="group relative px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-primary-500/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Our Services
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <a
                href="#contact"
                className="group px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold text-lg border-2 border-primary-600 hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                Get in Touch
                <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hero Animation */}
          <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20 blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            
            {/* Border glow */}
            <div className="absolute inset-0 rounded-3xl border-2 border-primary-200/50 group-hover:border-primary-400/50 transition-colors duration-500"></div>
            
            {isLoading ? (
              <div className="w-full h-full bg-gradient-to-br from-primary-100 via-primary-50 to-primary-200 animate-pulse rounded-3xl flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-primary-300 border-t-primary-600 rounded-full animate-spin"></div>
              </div>
            ) : hasError ? (
              <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary-200 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-primary-600 font-medium">Animation unavailable</p>
                </div>
              </div>
            ) : animationData ? (
              <div className="relative w-full h-full">
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  className="w-full h-full"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-50/50 via-transparent to-transparent pointer-events-none"></div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator - Centered */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full flex justify-center">
        <a href="#services" className="flex flex-col items-center gap-2 group cursor-pointer">
          <span className="text-xs text-primary-600 font-medium opacity-70 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Scroll to explore
          </span>
          <div className="w-10 h-16 rounded-full border-2 border-primary-300 flex items-start justify-center p-2 group-hover:border-primary-500 transition-colors">
            <svg
              className="w-4 h-4 text-primary-600 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </a>
      </div>
    </section>
  )
}

