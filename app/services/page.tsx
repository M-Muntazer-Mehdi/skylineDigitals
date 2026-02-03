import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Our Services - SkylineDigitals',
  description: 'Comprehensive digital solutions for your business needs',
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Software Development',
      shortDescription:
        'Custom software solutions tailored to your business needs. From enterprise applications to specialized tools.',
      fullDescription:
        'We develop custom software solutions that are perfectly aligned with your business objectives. Our team specializes in building scalable, maintainable, and high-performance applications using the latest technologies and best practices. From enterprise-level systems to specialized tools, we deliver solutions that drive business growth.',
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
      features: [
        'Custom application development',
        'Enterprise software solutions',
        'Legacy system modernization',
        'API development and integration',
        'Microservices architecture',
        'Code review and optimization',
      ],
      technologies: ['Java', 'Python', '.NET', 'Node.js', 'Go', 'Ruby'],
      deliverables: [
        'Fully functional software application',
        'Comprehensive documentation',
        'Source code and repository access',
        'Deployment and setup guides',
        'Training and support materials',
      ],
    },
    {
      title: 'Mobile Apps',
      shortDescription:
        'Native and cross-platform mobile applications for iOS and Android. Beautiful, performant, and user-friendly.',
      fullDescription:
        'We create stunning mobile applications that provide exceptional user experiences across iOS and Android platforms. Whether you need a native app for maximum performance or a cross-platform solution for faster deployment, we deliver apps that users love and businesses rely on.',
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
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions (React Native, Flutter)',
        'App Store and Play Store optimization',
        'Push notifications and analytics',
        'Offline functionality',
        'Biometric authentication',
      ],
      technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Xamarin'],
      deliverables: [
        'Published app on App Store and Play Store',
        'App source code',
        'App Store optimization',
        'User documentation',
        'Maintenance and update plan',
      ],
    },
    {
      title: 'Web Development',
      shortDescription:
        'Modern, responsive websites and web applications. Built with the latest technologies for optimal performance.',
      fullDescription:
        'We build modern, responsive websites and web applications that deliver exceptional user experiences. From simple business websites to complex web applications, we use cutting-edge technologies to create fast, secure, and scalable solutions that work seamlessly across all devices.',
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
      features: [
        'Responsive web design',
        'Progressive Web Apps (PWA)',
        'E-commerce solutions',
        'Content Management Systems',
        'Single Page Applications (SPA)',
        'Server-side rendering (SSR)',
      ],
      technologies: [
        'React',
        'Next.js',
        'Vue.js',
        'Angular',
        'Node.js',
        'TypeScript',
      ],
      deliverables: [
        'Fully responsive website',
        'SEO optimization',
        'Performance optimization',
        'Cross-browser compatibility',
        'Content management access',
        'Analytics integration',
      ],
    },
    {
      title: 'AI & Machine Learning',
      shortDescription:
        'Intelligent solutions powered by AI and ML. Automation, predictive analytics, and smart decision-making systems.',
      fullDescription:
        'We leverage artificial intelligence and machine learning to create intelligent solutions that automate processes, provide predictive insights, and enable data-driven decision making. From chatbots to complex predictive models, we help businesses harness the power of AI.',
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
      features: [
        'Machine learning model development',
        'Natural Language Processing (NLP)',
        'Computer vision solutions',
        'Predictive analytics',
        'Chatbots and virtual assistants',
        'Recommendation systems',
      ],
      technologies: [
        'Python',
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
        'OpenAI',
        'AWS SageMaker',
      ],
      deliverables: [
        'Trained ML models',
        'Model deployment infrastructure',
        'API endpoints for predictions',
        'Model documentation',
        'Training datasets',
        'Performance metrics and reports',
      ],
    },
    {
      title: 'Cloud Solutions',
      shortDescription:
        'Scalable cloud infrastructure and deployment. AWS, Azure, GCP expertise for reliable and secure solutions.',
      fullDescription:
        'We design and implement scalable cloud infrastructure solutions that ensure high availability, security, and cost-effectiveness. Our expertise spans across AWS, Azure, and Google Cloud Platform, helping businesses migrate to the cloud and optimize their infrastructure.',
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
      features: [
        'Cloud migration and strategy',
        'Infrastructure as Code (IaC)',
        'Container orchestration (Kubernetes)',
        'Serverless architecture',
        'DevOps and CI/CD pipelines',
        'Cloud security and compliance',
      ],
      technologies: [
        'AWS',
        'Azure',
        'Google Cloud',
        'Docker',
        'Kubernetes',
        'Terraform',
      ],
      deliverables: [
        'Cloud infrastructure setup',
        'Migration plan and execution',
        'CI/CD pipeline configuration',
        'Monitoring and alerting setup',
        'Security configurations',
        'Cost optimization recommendations',
      ],
    },
    {
      title: 'UI/UX Design',
      shortDescription:
        'Beautiful, intuitive user interfaces and experiences. Design that engages users and drives conversions.',
      fullDescription:
        'We create beautiful, intuitive user interfaces and experiences that not only look great but also drive user engagement and conversions. Our design process focuses on understanding user needs and creating solutions that are both aesthetically pleasing and highly functional.',
      illustration: '/images/services/ui.png',
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
      features: [
        'User research and persona development',
        'Wireframing and prototyping',
        'Visual design and branding',
        'Interaction design',
        'Usability testing',
        'Design system creation',
      ],
      technologies: [
        'Figma',
        'Adobe XD',
        'Sketch',
        'InVision',
        'Principle',
        'Framer',
      ],
      deliverables: [
        'Complete design mockups',
        'Interactive prototypes',
        'Design system and style guide',
        'User flow diagrams',
        'Asset library',
        'Design handoff documentation',
      ],
    },
    {
      title: 'SEO',
      shortDescription:
        'Search Engine Optimization to improve your website visibility and rankings. Drive organic traffic and increase conversions.',
      fullDescription:
        'We provide comprehensive SEO services to improve your website visibility in search engine results. Our strategies include keyword research, on-page optimization, technical SEO, link building, and content optimization. We help businesses rank higher on Google and other search engines, driving organic traffic and increasing conversions.',
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
      features: [
        'Keyword research and analysis',
        'On-page SEO optimization',
        'Technical SEO audits',
        'Link building strategies',
        'Content optimization',
        'Local SEO optimization',
      ],
      technologies: [
        'Google Analytics',
        'Google Search Console',
        'SEMrush',
        'Ahrefs',
        'Moz',
        'Screaming Frog',
      ],
      deliverables: [
        'SEO audit report',
        'Keyword research document',
        'Optimized website content',
        'Backlink strategy plan',
        'Monthly performance reports',
        'SEO implementation guide',
      ],
    },
    {
      title: 'Local SEO / GMB',
      shortDescription:
        'Google My Business optimization and local SEO strategies to dominate local search results and attract nearby customers.',
      fullDescription:
        'We specialize in Local SEO and Google My Business (GMB) optimization to help businesses dominate local search results. Our services include GMB profile optimization, local citation building, review management, local content creation, and geo-targeted strategies. Perfect for businesses targeting customers in specific geographic areas.',
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
      features: [
        'Google My Business optimization',
        'Local citation building',
        'Review management and response',
        'Local content creation',
        'Geo-targeted SEO strategies',
        'Local link building',
      ],
      technologies: [
        'Google My Business',
        'Google Maps',
        'BrightLocal',
        'Moz Local',
        'Yext',
        'Whitespark',
      ],
      deliverables: [
        'Optimized GMB profile',
        'Local citation audit',
        'Review management system',
        'Local SEO strategy document',
        'Monthly local ranking reports',
        'Competitor analysis',
      ],
    },
    {
      title: 'Medical Billing',
      shortDescription:
        'Comprehensive medical billing solutions and revenue cycle management. Streamline healthcare billing processes and maximize revenue.',
      fullDescription:
        'We provide comprehensive medical billing services and revenue cycle management solutions for healthcare providers. Our services include claim submission, payment posting, denial management, patient billing, and revenue optimization. We help healthcare practices streamline their billing processes, reduce errors, and maximize revenue collection.',
      illustration: '/images/services/medcalbil.svg',
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
      features: [
        'Medical claim submission',
        'Payment posting and reconciliation',
        'Denial management and appeals',
        'Patient billing and statements',
        'Revenue cycle optimization',
        'HIPAA compliant processes',
      ],
      technologies: [
        'EPIC',
        'Cerner',
        'Medisoft',
        'AdvancedMD',
        'Kareo',
        'Athenahealth',
      ],
      deliverables: [
        'Billing system setup',
        'Claim processing workflow',
        'Revenue reports',
        'Denial analysis reports',
        'Patient billing statements',
        'Compliance documentation',
      ],
    },
    {
      title: 'Animation',
      shortDescription:
        'Professional 2D and 3D animation services. Engaging motion graphics, video animations, and interactive visual content.',
      fullDescription:
        'We create professional 2D and 3D animations that bring your brand to life. Our animation services include motion graphics, explainer videos, product animations, character animation, and interactive visual content. We help businesses communicate complex ideas through engaging animated content that captivates audiences and drives engagement.',
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
      features: [
        '2D and 3D animation',
        'Motion graphics design',
        'Explainer video creation',
        'Character animation',
        'Product animation',
        'Interactive animations',
      ],
      technologies: [
        'After Effects',
        'Blender',
        'Cinema 4D',
        'Maya',
        'Adobe Animate',
        'Premiere Pro',
      ],
      deliverables: [
        'Animated video files',
        'Motion graphics assets',
        'Animation style guide',
        'Source files',
        'Multiple format exports',
        'Animation storyboard',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-orange-600 to-amber-500 text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              What We Offer
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
              Comprehensive digital solutions for your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image/Illustration */}
                <div
                  className={`relative h-96 rounded-2xl overflow-hidden ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  } bg-gradient-to-br from-orange-50 to-amber-50`}
                >
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
                        <div className="text-7xl font-bold text-orange-400 opacity-50 mb-4">
                          ?
                        </div>
                        <p className="text-lg text-orange-600 font-medium mb-2">
                          Add Illustration
                        </p>
                        <p className="text-sm text-orange-500">
                          {service.illustration}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-orange-600">
                      {service.icon}
                    </div>
                    {(service as any).showPopularTag && (
                      <span className="bg-gradient-to-r from-orange-400 to-amber-400 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                        POPULAR SERVICE
                      </span>
                    )}
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Key Features
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-3"
                        >
                          <svg
                            className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-orange-50 text-orange-700 text-sm font-medium rounded-lg border border-orange-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      What You'll Get
                    </h3>
                    <ul className="space-y-2">
                      {service.deliverables.map((deliverable, delIndex) => (
                        <li
                          key={delIndex}
                          className="flex items-center space-x-3 text-gray-700"
                        >
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's discuss how we can help transform your business
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
