import Image from 'next/image'

export default function Services() {
  const services = [
    {
      title: 'Software Development',
      description:
        'Custom software solutions tailored to your business needs. From enterprise applications to specialized tools.',
      illustration: '/images/services/software-development.png',
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: 'Mobile Apps',
      description:
        'Native and cross-platform mobile applications for iOS and Android. Beautiful, performant, and user-friendly.',
      illustration: '/images/services/mobileapp.png',
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Web Development',
      description:
        'Modern, responsive websites and web applications. Built with the latest technologies for optimal performance.',
      illustration: '/images/services/web.png',
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      title: 'AI & Machine Learning',
      description:
        'Intelligent solutions powered by AI and ML. Automation, predictive analytics, and smart decision-making systems.',
      illustration: '/images/services/aiandmachine.png',
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure and deployment. AWS, Azure, GCP expertise for reliable and secure solutions.',
      illustration: '/images/services/cloudsolution.png',
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
    },
    {
      title: 'UI/UX Design',
      description:
        'Beautiful, intuitive user interfaces and experiences. Design that engages users and drives conversions.',
      illustration: '/images/services/uiux.svg',
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      title: 'SEO',
      description:
        'Search Engine Optimization to improve your website visibility and rankings. Drive organic traffic and increase conversions.',
      illustration: '/images/services/seo.svg',
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Local SEO / GMB',
      description:
        'Google My Business optimization and local SEO strategies to dominate local search results and attract nearby customers.',
      illustration: '/images/services/localseo.png',
      showPopularTag: true, // Show POPULAR tag without highlighting
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Medical Billing',
      description:
        'Comprehensive medical billing solutions and revenue cycle management. Streamline healthcare billing processes and maximize revenue.',
      illustration: '/images/services/medicalblling.png',
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Animation',
      description:
        'Professional 2D and 3D animation services. Engaging motion graphics, video animations, and interactive visual content.',
      illustration: '/images/services/animation.png',
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href="/services"
              className={`group p-8 rounded-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 block relative ${
                (service as any).isHighlighted
                  ? 'bg-gradient-to-br from-primary-500 to-primary-600 border-primary-400 shadow-lg'
                  : 'bg-gradient-to-br from-white to-primary-50 border-primary-100 hover:border-primary-300'
              }`}
            >
              {((service as any).isHighlighted || (service as any).showPopularTag) && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                  POPULAR
                </div>
              )}
              {/* Service Illustration */}
              <div className="relative h-48 mb-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg overflow-hidden">
                {service.illustration.includes('.png') || service.illustration.includes('.jpg') || service.illustration.includes('.jpeg') || service.illustration.includes('.svg') ? (
                  <Image
                    src={service.illustration}
                    alt={service.title}
                    fill
                    className="object-contain scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-primary-400 opacity-50 mb-2">
                        ?
                      </div>
                      <p className="text-xs text-primary-600 font-medium">
                        Add Illustration
                      </p>
                      <p className="text-xs text-primary-500 mt-1">
                        {service.illustration}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div
                className={`mb-4 group-hover:scale-110 transition-transform duration-300 ${
                  (service as any).isHighlighted ? 'text-white' : 'text-primary-600'
                }`}
              >
                {service.icon}
              </div>
              <h3
                className={`text-2xl font-bold mb-3 ${
                  (service as any).isHighlighted ? 'text-white' : 'text-gray-900'
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`leading-relaxed ${
                  (service as any).isHighlighted ? 'text-primary-50' : 'text-gray-600'
                }`}
              >
                {service.description}
              </p>
              <div
                className={`mt-4 flex items-center font-semibold group-hover:gap-2 gap-1 ${
                  (service as any).isHighlighted ? 'text-white' : 'text-primary-600'
                }`}
              >
                Learn More
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Services
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
          </a>
        </div>
      </div>
    </section>
  )
}

