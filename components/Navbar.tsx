'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault()
      setIsMobileMenuOpen(false)
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      setIsMobileMenuOpen(false)
    }
  }

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  const isHomePage = pathname === '/'

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link href="/" className="group flex items-center gap-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold cursor-pointer">
                <span className="text-gray-900 group-hover:text-gray-700 transition-colors">
                  Skyline
                </span>
                <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                  Digitals
                </span>
              </h1>
            </Link>

            {/* Available Badge - Desktop & Tablet */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200/60">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-medium text-orange-700">
                Available
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* CTA Button */}
            <a
              href="#contact"
              onClick={handleContactClick}
              className="ml-4 px-5 py-2.5 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200"
            >
              Start Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Available dot */}
            <span className="relative flex h-2.5 w-2.5 sm:hidden" title="Available for Projects">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-orange-600 transition-colors p-2 -mr-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed left-0 right-0 bottom-0 z-40 transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '64px' }}
        >
          {/* Backdrop */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              style={{ top: '64px', zIndex: 39 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}

          {/* Menu Content */}
          <div
            className="h-full overflow-y-auto bg-white shadow-xl relative z-50 border-l border-gray-100"
            style={{ height: 'calc(100vh - 64px)' }}
          >
            <div className="px-4 py-6 space-y-2">
              {/* Available Badge in Mobile Menu */}
              <div className="flex items-center gap-2 px-4 py-3 mb-4 rounded-lg bg-orange-50 border border-orange-200/60">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-sm font-medium text-orange-700">
                  Available for Projects
                </span>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`block py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="#contact"
                  onClick={handleContactClick}
                  className="block w-full py-3 px-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-200"
                >
                  Start Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
