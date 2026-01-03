import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Our Projects - SkylineDigitals',
  description: 'Explore our portfolio of successful projects and innovative solutions',
}

export default function ProjectsPage() {
  const projects = [
    {
      title: 'BackPack Buddies',
      category: 'Mobile Apps',
      description:
        'Cross-platform social travel app built with Flutter, helping users connect with nearby backpackers, find jobs, and communicate in real-time.',
      fullDescription:
        'BackPack Buddies is a Flutter-based social travel app built for a client, helping users connect with nearby backpackers, find jobs, and communicate in real time. Developed the entire frontend including UI/UX, real-time chat, push notifications, onboarding, authentication, and location-based features. Enhanced ~40% of the backend (Firestore structure, Cloud Functions, auth flows). The app delivers a scalable, smooth experience across both Android and iOS with 40+ screens and 6+ major features.',
      technologies: ['Flutter', 'Firebase', 'GetX', 'Google Maps API', 'Cloud Firestore'],
      image: '/images/projects/featured.png', // Using featured image as placeholder
      link: '#',
      features: [
        'Real-time chat and messaging',
        'Location-based features with Google Maps',
        'Push notifications',
        'Job search and posting',
        'User profiles and authentication',
        'Cross-platform (iOS & Android)',
      ],
      client: 'Travel Tech Startup',
      duration: '2 months',
      status: 'Live',
    },
    {
      title: 'Yo.Works',
      category: 'Web Development',
      description:
        'Video-based talent discovery platform for marketing agencies. Features dynamic video profiles, intelligent matching, and real-time collaboration.',
      fullDescription:
        'Engineered a full-stack platform that redefines how marketing agencies discover and collaborate with models. Yo.Works replaces static portfolios with dynamic, video-based profiles, enabling agencies to assess personality, confidence, and communication before hiring. The platform delivers an intelligent, weighted campaign-matching algorithm, real-time chat, and a bilingual experience (English/Italian), creating a seamless workflow from discovery to deal.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Stripe', 'Socket.io', 'Firebase'],
      image: '/images/projects/yoworks.png',
      link: '#',
      features: [
        'Video-based talent profiles',
        'Intelligent campaign-matching algorithm',
        'Real-time chat and collaboration',
        'Bilingual interface (English/Italian)',
        'Stripe payment integration',
        'Secure JWT authentication',
      ],
      client: 'Marketing Agency',
      duration: '2 months',
      status: 'Live',
    },
    {
      title: 'AR Camera App',
      category: 'Mobile Apps',
      description:
        'Hybrid AR camera platform combining React Native with native Kotlin/Swift modules for real-time AR rendering and filters.',
      fullDescription:
        'Architected a hybrid AR camera platform combining React Native\'s declarative UI with native Kotlin/Swift modules for real-time AR rendering. Developed bidirectional bridges exposing ARGear SDK functions to JS through optimized asynchronous channels, reducing JS-to-native overhead by 40%. Implemented GPU-driven rendering, segmentation pipelines, and dynamic filter management for instant asset loading.',
      technologies: ['React Native', 'Kotlin', 'Swift', 'ARGear SDK', 'Firebase'],
      image: '/images/projects/argear.png',
      link: '#',
      features: [
        'Real-time AR rendering',
        'GPU-driven rendering pipeline',
        'Dynamic filter management',
        'High-fidelity media encoding',
        'Cross-platform (iOS & Android)',
        'Performance optimization',
      ],
      client: 'AR Tech Company',
      duration: '2 months',
      status: 'Live',
    },
    {
      title: 'Meetwise',
      category: 'AI & Machine Learning',
      description:
        'AI-powered meeting assistant that automatically attends, records, and transcribes meetings using Whisper AI and Gemini 2.0.',
      fullDescription:
        'Meetwise is an AI-powered platform designed to streamline meetings by automatically attending, recording, and transcribing discussions in real time. It integrates Whisper AI for highly accurate speech-to-text and Gemini 2.0 for intelligent summarization, delivering actionable insights and clear takeaways. With built-in Google Calendar integration, Meetwise joins meetings seamlessly and captures conversations with precision.',
      technologies: ['Node.js', 'Next.js', 'Python', 'AWS EC2', 'Puppeteer', 'SQLite', 'Whisper AI', 'Gemini 2.0'],
      image: '/images/projects/meetwise.png',
      link: '#',
      features: [
        'Automatic meeting attendance',
        'Real-time transcription',
        'AI-powered summarization',
        'Google Calendar integration',
        'Analytics and insights dashboard',
        'AES-256 encryption',
      ],
      client: 'Productivity SaaS',
      duration: '3 months',
      status: 'Live',
    },
    {
      title: 'Omnigen.AI',
      category: 'AI & Machine Learning',
      description:
        'Hyper-scalable SaaS platform for AI generation ecosystem. Integrates OpenAI LLMs and Replicate models for conversational AI, code synthesis, and media generation.',
      fullDescription:
        'Omnigen.AI is a robust, hyper-scalable Software-as-a-Service (SaaS) platform built on a modern Next.js 14 App Router architecture with server components for optimized performance and SEO. This platform facilitates an extensible AI generation ecosystem, seamlessly integrating OpenAI\'s advanced LLMs and Replicate\'s diverse model catalog for dynamic conversational AI, sophisticated code synthesis, high-fidelity image/video generation, and algorithmic music composition.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe', 'Clerk', 'OpenAI', 'Replicate'],
      image: '/images/projects/omnigen.png',
      link: '#',
      features: [
        'Multi-modal AI generation',
        'Conversational AI with LLMs',
        'Code synthesis capabilities',
        'Image and video generation',
        'Music composition',
        'Multi-tenancy with Clerk',
      ],
      client: 'AI SaaS Platform',
      duration: '2 months',
      status: 'Live',
    },
    {
      title: 'Contractly',
      category: 'Software Development',
      description:
        'Full-featured Contract Lifecycle Management platform with advanced document editor, RBAC, and multi-stage approval pipelines.',
      fullDescription:
        'Contractly is a full-featured Contract Lifecycle Management (CLM) platform engineered to streamline complex legal workflows through a modular and scalable architecture. At its core lies a highly customized, ReactQuill-powered document editor that replicates the editing fidelity of Microsoft Word and Google Docs within the browser, supporting native-style pagination, semantic formatting, dynamic page breaks, and Delta-based diffing for precise content manipulation.',
      technologies: ['React', 'TypeScript', 'Material UI', 'Zod', 'Axios', 'ReactQuill'],
      image: '/images/projects/contractly.png',
      link: '#',
      features: [
        'Advanced document editor',
        'Role-Based Access Control (RBAC)',
        'Multi-stage approval pipelines',
        'Dynamic contract templating',
        'Delta-based diffing',
        'Audit-ready environment',
      ],
      client: 'Legal Tech Company',
      duration: '2 months',
      status: 'Live',
    },
    {
      title: 'RAGnet',
      category: 'AI & Machine Learning',
      description:
        'Event-driven RAG pipeline leveraging n8n orchestration, GPT-4o reasoning, and custom scrapers to automate cross-channel content operations.',
      fullDescription:
        'Engineered an event-driven RAG (Retrieval-Augmented Generation) pipeline leveraging n8n orchestration, GPT-4o reasoning, SERP API enrichment, and custom Puppeteer scrapers to automate and optimize cross-channel content operations. Built a modular, low-code architecture that ingests and transforms behavioral metadata from Instagram, Twitter, and Facebook via headless browser scraping, bypassing native APIs.',
      technologies: ['LangChain', 'n8n', 'GPT-4o', 'Puppeteer', 'SERP API', 'JavaScript'],
      image: '/images/projects/ragnet.png',
      link: '#',
      features: [
        'RAG pipeline automation',
        'Cross-channel content optimization',
        'Social media scraping',
        'Semantic memory caching',
        'Human-in-the-loop approvals',
        'Intelligent scheduling',
      ],
      client: 'Content Marketing Agency',
      duration: '1 month',
      status: 'Live',
    },
    {
      title: 'SHIPEASE - Web Application',
      category: 'Web Development',
      description:
        'Comprehensive Bilty management web application for logistics operations. Features dynamic interfaces with React and Material-UI for efficient cargo management.',
      fullDescription:
        'SHIPEASE Web Application is a comprehensive Bilty management system designed to streamline logistics operations. The web application uses React and Material-UI for dynamic interfaces, Node.js and Express.js for server-side logic, and PostgreSQL for data management. It provides a complete solution for managing Bilty bookings, tenant and vehicle searches, and connecting drivers with users for efficient cargo management.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express.js', 'Material-UI'],
      image: '/images/projects/shipease-website.jpg',
      link: '#',
      features: [
        'Bilty booking system',
        'Tenant and vehicle search',
        'Driver-user connection',
        'Comprehensive API testing',
        'Secure authentication',
        'Responsive web interface',
      ],
      client: 'Logistics Company',
      duration: '6 months',
      status: 'Live',
    },
    {
      title: 'SHIPEASE - Mobile App',
      category: 'Mobile Apps',
      description:
        'Cross-platform mobile application for SHIPEASE logistics platform. Enables users to book Bilty through tenant, vehicle, or attribute searches on iOS and Android.',
      fullDescription:
        'SHIPEASE Mobile Application, built with React Native, enables users to book Bilty through tenant, vehicle, or attribute searches, connecting drivers and users for efficient cargo management. The app provides a seamless mobile experience with comprehensive API integration, secure authentication, and real-time updates. It offers the same functionality as the web platform optimized for mobile devices.',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Express.js', 'Firebase'],
      image: '/images/projects/shipease-mobileapp.jpg',
      link: '#',
      features: [
        'Bilty booking on mobile',
        'Tenant and vehicle search',
        'Driver-user connection',
        'Push notifications',
        'Secure authentication',
        'Cross-platform (iOS & Android)',
      ],
      client: 'Logistics Company',
      duration: '6 months',
      status: 'Live',
    },
    {
      title: 'Retail Behavior Analyzer',
      category: 'Data Analysis',
      description:
        'Data analysis and clustering project to optimize department store electronics section, aiming for 25% sales boost and 30% growth.',
      fullDescription:
        'Developed in Python, this project uses data analysis and clustering to optimize a department store\'s electronics section. By examining customer behavior and sales data, it aims to boost sales by 25% and achieve 30% growth in the electronics segment, offering actionable insights for retail improvement.',
      technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-Learn', 'Matplotlib', 'Seaborn'],
      image: '/images/projects/retail-analyzer.jpg',
      link: '#',
      features: [
        'Customer behavior analysis',
        'Sales data clustering',
        'Predictive analytics',
        'Data visualization',
        'Actionable insights generation',
        'Performance optimization recommendations',
      ],
      client: 'Retail Chain',
      duration: '2 months',
      status: 'Completed',
    },
    {
      title: 'E-Voting Mobile App',
      category: 'Mobile Apps',
      description:
        'Secure e-voting mobile application with Admin and Client Dashboards, OTP-based voting, and CNIC verification.',
      fullDescription:
        'Developed with Java and Android Studio SDK, the e-Voting Mobile App features Admin and Client Dashboards, secure OTP-based voting, and CNIC verification. It offers smooth, secure voting with advanced Java functionalities, efficient management, and an intuitive user interface for a seamless experience.',
      technologies: ['Java', 'Android Studio', 'Firebase', 'MVP', 'MVVM'],
      image: '/images/projects/e-voting.jpg',
      link: '#',
      features: [
        'Admin and Client dashboards',
        'OTP-based secure voting',
        'CNIC verification',
        'Real-time vote tracking',
        'Secure authentication',
        'Intuitive user interface',
      ],
      client: 'Government Organization',
      duration: '4 months',
      status: 'Live',
    },
    {
      title: 'Lost & Found Platform',
      category: 'Web Development',
      description:
        'Platform to help recover lost items and support charity by managing lost and found items efficiently with MVC architecture.',
      fullDescription:
        'The Lost & Found Platform helps recover lost items and supports charity by managing lost and found items efficiently. Unclaimed items are donated to promote goodwill. It uses MVC architecture for maintainability and is built with HTML, CSS, and JavaScript to provide a dynamic, engaging user experience.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'MVC'],
      image: '/images/projects/lost-found.jpg',
      link: '#',
      features: [
        'Lost item management',
        'Found item reporting',
        'Charity donation system',
        'User-friendly interface',
        'MVC architecture',
        'Responsive design',
      ],
      client: 'Community Organization',
      duration: '1 month',
      status: 'Live',
    },
    {
      title: 'HotelEase',
      category: 'Mobile Apps',
      description:
        'Sophisticated hotel booking application designed to streamline reservations, meal deliveries, and additional hotel services.',
      fullDescription:
        'HotelEase-Frontend is a sophisticated hotel booking application designed to streamline the reservation process and enhance user experience. It enables users to effortlessly book accommodations, arrange meal deliveries, and request additional hotel services via a user-friendly interface.',
      technologies: ['Flutter', 'Dart'],
      image: '/images/projects/hotelease.jpg',
      link: '#',
      features: [
        'Hotel room booking',
        'Meal delivery ordering',
        'Additional service requests',
        'User-friendly interface',
        'Cross-platform support',
        'Real-time availability',
      ],
      client: 'Hotel Chain',
      duration: '1 month',
      status: 'Live',
    },
    {
      title: 'Inventory Tracker',
      category: 'Software Development',
      description:
        'Desktop application for inventory management with Super Admin Panel, user management, and automated notifications.',
      fullDescription:
        'This desktop application, developed in C#, streamlines inventory management with a Super Admin Panel for oversight, user management, and item assignment. The User Admin component manages items, categories, and alerts. It also supports requirements gathering and Email/SMS notifications.',
      technologies: ['C#', '.NET Framework'],
      image: '/images/projects/inventory-tracker.jpg',
      link: '#',
      features: [
        'Super Admin Panel',
        'User management system',
        'Item and category management',
        'Automated alerts',
        'Email/SMS notifications',
        'Requirements gathering',
      ],
      client: 'Retail Business',
      duration: '3 months',
      status: 'Live',
    },
    {
      title: 'Local SEO Optimization Campaign',
      category: 'SEO',
      description:
        'Comprehensive Local SEO and Google My Business optimization campaign that increased local search visibility by 300%.',
      fullDescription:
        'Executed a comprehensive Local SEO and Google My Business optimization campaign for a local business. The campaign included GMB profile optimization, local citation building, review management, local content creation, and geo-targeted strategies. Results included 300% increase in local search visibility, top 3 GMB ranking, and significant improvement in local foot traffic.',
      technologies: ['Google My Business', 'BrightLocal', 'Moz Local', 'Google Analytics', 'Google Search Console'],
      image: '/images/projects/local-seo-optimization.png',
      link: '#',
      features: [
        'GMB profile optimization',
        'Local citation building',
        'Review management',
        'Local content creation',
        'Geo-targeted SEO strategies',
        'Performance tracking and reporting',
      ],
      client: 'Local Business',
      duration: '3 months',
      status: 'Completed',
    },
    {
      title: 'E-Commerce SEO Optimization',
      category: 'SEO',
      description:
        'Complete SEO overhaul for e-commerce platform resulting in 250% increase in organic traffic and improved search rankings.',
      fullDescription:
        'Performed comprehensive SEO optimization for an e-commerce platform including keyword research, on-page optimization, technical SEO audits, link building strategies, and content optimization. The campaign resulted in 250% increase in organic traffic, improved search rankings for target keywords, and enhanced conversion rates.',
      technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Screaming Frog', 'Google Search Console'],
      image: '/images/projects/E-Commerceseo.png',
      link: '#',
      features: [
        'Keyword research and analysis',
        'On-page SEO optimization',
        'Technical SEO audit',
        'Link building campaign',
        'Content optimization',
        'Performance monitoring',
      ],
      client: 'E-Commerce Platform',
      duration: '4 months',
      status: 'Completed',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Showcasing our expertise through successful projects and innovative
              solutions
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-primary-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-primary-600">
                      {project.category}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        project.status === 'Live'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>Client: {project.client}</span>
                    <span>{project.duration}</span>
                  </div>
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group-hover:gap-2 gap-1"
                  >
                    View Details
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's work together to bring your vision to life
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

