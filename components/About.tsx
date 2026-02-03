import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-orange-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium mb-6 border border-orange-200/50">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">SkylineDigitals</span>
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              We are a full-service software house and digital agency dedicated to
              transforming your ideas into powerful digital solutions. With expertise
              spanning across software development, mobile apps, web technologies, and
              artificial intelligence, we deliver comprehensive solutions that drive
              business growth.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Our team of skilled developers, designers, and strategists work
              collaboratively to create innovative products that not only meet your
              requirements but exceed expectations. We believe in building long-term
              partnerships with our clients, providing ongoing support and continuous
              improvement.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Us
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-gray-700 font-medium">
                    Innovation-Driven Approach
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-gray-700 font-medium">
                    Cutting-Edge Technology Stack
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-gray-700 font-medium">
                    Agile Development Methodology
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-gray-700 font-medium">
                    Client-Centric Solutions
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-gray-700 font-medium">
                    Quality Assurance & Testing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
