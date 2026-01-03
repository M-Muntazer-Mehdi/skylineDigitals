import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Go to Homepage
          </Link>
          <Link
            href="/projects"
            className="px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <Link
            href="/services"
            className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-bold text-gray-900 mb-2">Our Services</h3>
            <p className="text-gray-600 text-sm">
              Explore our comprehensive range of services
            </p>
          </Link>
          <Link
            href="/about"
            className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-bold text-gray-900 mb-2">About Us</h3>
            <p className="text-gray-600 text-sm">
              Learn more about SkylineDigitals
            </p>
          </Link>
          <Link
            href="/contact"
            className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-bold text-gray-900 mb-2">Contact Us</h3>
            <p className="text-gray-600 text-sm">
              Get in touch with our team
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

