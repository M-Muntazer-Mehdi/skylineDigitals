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
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
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

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent cursor-pointer">
                SkylineDigitals
              </h1>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`transition-colors font-medium ${
                isHomePage
                  ? 'text-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 top-16 bg-white z-40 transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Backdrop */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}

          {/* Menu Content */}
          <div className="h-full overflow-y-auto bg-white shadow-xl">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                onClick={handleLinkClick}
                className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                  isHomePage
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={handleLinkClick}
                className="block py-3 px-4 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                href="/projects"
                onClick={handleLinkClick}
                className="block py-3 px-4 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/about"
                onClick={handleLinkClick}
                className="block py-3 px-4 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="block py-3 px-4 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

