import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: 'BackPack Buddies',
      category: 'Mobile Apps',
      description:
        'Cross-platform social travel app built with Flutter, helping users connect with nearby backpackers, find jobs, and communicate in real-time.',
      technologies: ['Flutter', 'Firebase', 'GetX', 'Google Maps API', 'Cloud Firestore'],
      image: '/images/projects/featured.png', // Using featured image as placeholder
      link: '#',
    },
    {
      title: 'Yo.Works',
      category: 'Web Development',
      description:
        'Video-based talent discovery platform for marketing agencies. Features dynamic video profiles, intelligent matching, and real-time collaboration.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Stripe', 'Socket.io'],
      image: '/images/projects/yoworks.png',
      link: '#',
    },
    {
      title: 'Omnigen.AI',
      category: 'AI & Machine Learning',
      description:
        'Hyper-scalable SaaS platform for AI generation ecosystem. Integrates OpenAI LLMs and Replicate models for conversational AI, code synthesis, and media generation.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe', 'Clerk'],
      image: '/images/projects/omnigen.png',
      link: '#',
    },
    {
      title: 'Meetwise',
      category: 'AI & Machine Learning',
      description:
        'AI-powered meeting assistant that automatically attends, records, and transcribes meetings using Whisper AI and Gemini 2.0 for intelligent summarization.',
      technologies: ['Node.js', 'Next.js', 'Python', 'AWS EC2', 'Puppeteer', 'SQLite'],
      image: '/images/projects/meetwise.png',
      link: '#',
    },
    {
      title: 'Contractly',
      category: 'Software Development',
      description:
        'Full-featured Contract Lifecycle Management platform with advanced document editor, RBAC, multi-stage approval pipelines, and dynamic contract templating.',
      technologies: ['React', 'TypeScript', 'Material UI', 'Zod', 'Axios'],
      image: '/images/projects/contractly.png',
      link: '#',
    },
    {
      title: 'Local SEO Optimization Campaign',
      category: 'SEO',
      description:
        'Comprehensive Local SEO and Google My Business optimization campaign that increased local search visibility by 300% and improved GMB ranking to top 3.',
      technologies: ['Google My Business', 'BrightLocal', 'Moz Local', 'Google Analytics'],
      image: '/images/projects/local-seo-optimization.png',
      link: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our expertise through successful projects and innovative
            solutions
          </p>
        </div>

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
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group-hover:gap-2 gap-1"
                >
                  View Project
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
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            More Projects
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

