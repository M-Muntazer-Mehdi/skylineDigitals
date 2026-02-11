import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-orange-50 via-amber-50/50 to-orange-100/80 relative overflow-hidden border-t-2 border-orange-200">
      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
      
      {/* Decorative Sunset Glow Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main sunset glow - top center */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-orange-300/40 via-amber-200/30 to-transparent rounded-full blur-3xl"></div>
        
        {/* Right glow */}
        <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-bl from-orange-300/30 via-amber-200/20 to-transparent rounded-full blur-3xl"></div>
        
        {/* Left glow */}
        <div className="absolute top-40 -left-40 w-96 h-96 bg-gradient-to-br from-amber-300/30 via-orange-200/20 to-transparent rounded-full blur-3xl"></div>
        
        {/* Bottom ambient glow */}
        <div className="absolute -bottom-20 left-1/4 w-[500px] h-[200px] bg-gradient-to-t from-orange-200/40 via-amber-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/4 w-[400px] h-[200px] bg-gradient-to-t from-amber-200/40 via-orange-100/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <h3 className="text-2xl font-bold">
                <span className="text-gray-900">Skyline</span>
                <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">Digitals</span>
              </h3>
            </Link>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your trusted partner for innovative technology solutions. We transform
              ideas into powerful digital products.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/in/sidra-r-408314316?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white transition-all duration-300 border border-orange-200 hover:border-transparent hover:scale-110 text-gray-600 shadow-sm"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></span>
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Software Development', href: '/services' },
                { name: 'Mobile Apps', href: '/services' },
                { name: 'Web Development', href: '/services' },
                { name: 'SEO & Local SEO/GMB', href: '/services' },
                { name: 'Medical Billing', href: '/services' },
                { name: 'Animation', href: '/services' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-orange-600 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all duration-300 rounded-full"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></span>
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Projects', href: '/projects' },
                { name: 'Contact', href: '/#contact' },
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-orange-600 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all duration-300 rounded-full"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></span>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-orange-200 shadow-sm">
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:skylinedigitals.tech@gmail.com" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                    skylinedigitals.tech@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-orange-200 shadow-sm">
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:+923120614503" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                    +92312-0614503
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-orange-200 shadow-sm">
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-700 font-medium">Worldwide Remote</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-200/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} <span className="text-gray-900 font-medium">SkylineDigitals</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-gray-600 text-sm hover:text-orange-600 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-600 text-sm hover:text-orange-600 transition-colors">
                Terms
              </Link>
              <span className="text-gray-500 text-sm">
                Made with{' '}
                <span className="text-orange-500">♥</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
