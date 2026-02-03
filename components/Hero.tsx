'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Lottie = dynamic(
  () => import('lottie-react').catch(() => ({ default: () => null })),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 animate-pulse rounded-3xl flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-amber-300 border-t-orange-600 rounded-full animate-spin"></div>
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
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      {/* Professional Warm Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-white to-amber-50/30"></div>
        
        {/* Warm gradient orbs - professional and subtle */}
        <div 
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-orange-200/40 to-amber-200/30 rounded-full filter blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-[450px] h-[450px] bg-gradient-to-br from-amber-200/30 to-yellow-200/20 rounded-full filter blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
          }}
        ></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ea580c_1px,transparent_1px),linear-gradient(to_bottom,#ea580c_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-[0.015]"></div>
        
        {/* Minimal floating accents */}
        <div className="absolute top-24 right-16 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-amber-400 rounded-full opacity-30"></div>
        <div className="absolute top-1/3 left-12 w-1.5 h-1.5 bg-orange-500 rounded-full opacity-25"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium border border-orange-200/60">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              Transforming Ideas Into Reality
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
              <span className="block">Skyline</span>
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Digitals
              </span>
            </h1>
            
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-gray-700 max-w-xl mx-auto lg:mx-0 font-medium">
                Your trusted partner for{' '}
                <span className="text-orange-600 font-semibold">innovative</span>{' '}
                technology solutions
              </p>
              <p className="text-base md:text-lg text-gray-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                We deliver premium software, web development, AI solutions, and digital products that drive business growth and innovation.
              </p>
            </div>

            {/* Professional Tech Stack */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {['Web Development', 'Mobile Apps', 'AI & ML', 'Cloud Solutions'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 bg-white text-gray-600 rounded-lg text-sm font-medium border border-gray-200 shadow-sm hover:border-orange-300 hover:text-orange-600 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons - Professional */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="#services"
                className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-0.5"
              >
                <span className="flex items-center justify-center gap-2">
                  Our Services
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="group px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-orange-400 hover:text-orange-600 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Get in Touch
                <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 justify-center lg:justify-start pt-4 border-t border-gray-100">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-500">Projects</div>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-500">Clients</div>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-500">Years</div>
              </div>
            </div>
          </div>

          {/* Hero Animation - Light and bright */}
          <div className="relative h-96 lg:h-[520px] rounded-3xl overflow-hidden flex items-center justify-center group shadow-lg shadow-orange-100/30">
            {/* Very light background */}
            <div className="absolute inset-0 bg-white rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-white to-amber-50/20 rounded-3xl"></div>
            
            {/* Subtle border */}
            <div className="absolute inset-0 rounded-3xl border border-orange-100/40 group-hover:border-orange-200/60 transition-colors duration-500"></div>
            
            {isLoading ? (
              <div className="w-full h-full bg-gradient-to-br from-orange-50 to-amber-50 animate-pulse rounded-3xl flex items-center justify-center">
                <div className="w-14 h-14 border-3 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
              </div>
            ) : hasError ? (
              <div className="w-full h-full bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-orange-600 font-medium">Animation unavailable</p>
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
                {/* Light gradient overlay for depth */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(200,120,60,0.15) 0%, rgba(255,180,120,0.08) 40%, rgba(255,255,255,0.1) 100%)'
                  }}
                ></div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Scroll indicator - Clean and professional */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <a href="#services" className="flex flex-col items-center gap-2 group cursor-pointer">
          <span className="text-xs text-gray-400 font-medium group-hover:text-orange-500 transition-colors">
            Scroll to explore
          </span>
          <div className="w-8 h-12 rounded-full border-2 border-gray-200 flex items-start justify-center p-2 group-hover:border-orange-400 transition-colors">
            <div className="w-1 h-2 bg-orange-500 rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  )
}
