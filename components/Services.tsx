'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const services = [
    {
      title: 'Software Development',
      description:
        'Custom software solutions tailored to your business needs. From enterprise applications to specialized tools.',
      illustration: '/images/services/softwaredev.png',
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
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50',
    },
    {
      title: 'Mobile Apps',
      description:
        'Native and cross-platform mobile applications for iOS and Android. Beautiful, performant, and user-friendly.',
      illustration: '/images/services/mobiledev.png',
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
      gradient: 'from-amber-500 to-yellow-500',
      bgGradient: 'from-amber-50 to-yellow-50',
    },
    {
      title: 'Web Development',
      description:
        'Modern, responsive websites and web applications. Built with the latest technologies for optimal performance.',
      illustration: '/images/services/webdev.png',
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
      gradient: 'from-orange-600 to-orange-400',
      bgGradient: 'from-orange-50 to-orange-100/50',
    },
    {
      title: 'AI & Machine Learning',
      description:
        'Intelligent solutions powered by AI and ML. Automation, predictive analytics, and smart decision-making systems.',
      illustration: '/images/services/aiandmachine.avif',
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
      gradient: 'from-amber-600 to-orange-500',
      bgGradient: 'from-amber-50 to-orange-50',
    },
    {
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure and deployment. AWS, Azure, GCP expertise for reliable and secure solutions.',
      illustration: '/images/services/cloud.png',
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
      gradient: 'from-yellow-500 to-amber-500',
      bgGradient: 'from-yellow-50 to-amber-50',
    },
    {
      title: 'UI/UX Design',
      description:
        'Beautiful, intuitive user interfaces and experiences. Design that engages users and drives conversions.',
      illustration: '/images/services/uiux.png',
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
      gradient: 'from-orange-500 to-yellow-500',
      bgGradient: 'from-orange-50 to-yellow-50',
    },
    {
      title: 'SEO',
      description:
        'Search Engine Optimization to improve your website visibility and rankings. Drive organic traffic and increase conversions.',
      illustration: '/images/services/seo.avif',
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
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-50 to-orange-50',
    },
    {
      title: 'Local SEO / GMB',
      description:
        'Google My Business optimization and local SEO strategies to dominate local search results and attract nearby customers.',
      illustration: '/images/services/localseo.png',
      showPopularTag: true,
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
      gradient: 'from-orange-600 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50',
    },
    {
      title: 'Medical Billing',
      description:
        'Comprehensive medical billing solutions and revenue cycle management. Streamline healthcare billing processes and maximize revenue.',
      illustration: '/images/services/medicalbilling.jpg',
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
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50',
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
      gradient: 'from-amber-600 to-yellow-500',
      bgGradient: 'from-amber-50 to-yellow-50',
    },
  ]

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-white via-orange-50/20 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium mb-6 border border-orange-200/50">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            What We Offer
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to transform your business and drive growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <a
              key={index}
              href="/services"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className={`
                relative h-full rounded-2xl 
                bg-white border border-orange-100/60
                transition-all duration-500 ease-out
                hover:shadow-xl hover:shadow-orange-200/20 hover:-translate-y-2
                hover:border-orange-200
                ${hoveredIndex === index ? 'scale-[1.02] ring-2 ring-orange-200/50' : 'scale-100'}
                overflow-hidden
              `}>
                {/* Sunset glow ring on hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-orange-200/0 via-amber-100/0 to-orange-300/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none group-hover:blur-0" style={{ boxShadow: '0 0 32px rgba(251,146,60,0.12)' }} />
                {/* Soft gradient overlay on hover */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${service.gradient} 
                  opacity-0 group-hover:opacity-[0.06] 
                  transition-opacity duration-500 pointer-events-none
                `} />
                {/* Popular Badge - overlays card */}
                {(service as any).showPopularTag && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-400 to-amber-400 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      POPULAR
                    </span>
                  </div>
                )}
                <div className="relative p-6 sm:p-8">
                {/* Service Image - hero style with sunset glow (image first) */}
                <div className={`
                  relative h-44 mb-6 rounded-xl overflow-hidden
                  bg-gradient-to-br ${service.bgGradient}
                  border border-orange-100 group-hover:border-orange-200
                  shadow-inner
                  transition-all duration-500
                  group-hover:shadow-lg group-hover:shadow-orange-200/30
                `}>
                  {/* Sunset glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-400/0 via-transparent to-amber-300/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-orange-300/0 via-transparent to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" style={{ boxShadow: '0 0 24px rgba(251,146,60,0.15)' }} />
                  {/\.(png|jpg|jpeg|svg|avif)$/i.test(service.illustration) ? (
                    <Image
                      src={service.illustration}
                      alt={service.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-orange-400 opacity-50 mb-2">?</div>
                        <p className="text-xs text-orange-600 font-medium">Add Illustration</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Icon + Content */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`
                    flex-shrink-0 w-12 h-12 rounded-xl 
                    bg-gradient-to-br ${service.bgGradient}
                    flex items-center justify-center
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <div className="text-orange-600">{service.icon}</div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mt-1 line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a
            href="/services"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <span>Explore All Services</span>
            <svg
              className="w-6 h-6 transition-transform group-hover:translate-x-2"
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
