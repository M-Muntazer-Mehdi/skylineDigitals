'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: 'BackPack Buddies',
      category: 'Mobile Apps',
      description:
        'Cross-platform social travel app built with Flutter, helping users connect with nearby backpackers, find jobs, and communicate in real-time.',
      technologies: ['Flutter', 'Firebase', 'GetX', 'Google Maps API', 'Cloud Firestore'],
      image: '/images/projects/featured.png',
      link: '#',
      featured: true,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    },
    {
      title: 'Yo.Works',
      category: 'Web Development',
      description:
        'Video-based talent discovery platform for marketing agencies. Features dynamic video profiles, intelligent matching, and real-time collaboration.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Stripe', 'Socket.io'],
      image: '/images/projects/yoworks.png',
      link: '#',
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
    },
    {
      title: 'Omnigen.AI',
      category: 'AI & Machine Learning',
      description:
        'Hyper-scalable SaaS platform for AI generation ecosystem. Integrates OpenAI LLMs and Replicate models for conversational AI, code synthesis, and media generation.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe', 'Clerk'],
      image: '/images/projects/omnigen.png',
      link: '#',
      gradient: 'from-orange-500 via-red-500 to-pink-500',
    },
    {
      title: 'Meetwise',
      category: 'AI & Machine Learning',
      description:
        'AI-powered meeting assistant that automatically attends, records, and transcribes meetings using Whisper AI and Gemini 2.0 for intelligent summarization.',
      technologies: ['Node.js', 'Next.js', 'Python', 'AWS EC2', 'Puppeteer', 'SQLite'],
      image: '/images/projects/meetwise.png',
      link: '#',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
    },
    {
      title: 'Contractly',
      category: 'Software Development',
      description:
        'Full-featured Contract Lifecycle Management platform with advanced document editor, RBAC, multi-stage approval pipelines, and dynamic contract templating.',
      technologies: ['React', 'TypeScript', 'Material UI', 'Zod', 'Axios'],
      image: '/images/projects/contractly.png',
      link: '#',
      gradient: 'from-indigo-500 via-blue-500 to-cyan-500',
    },
  ]

  const featuredProject = projects.find(p => (p as any).featured) || projects[0]
  const otherProjects = projects.filter(p => !(p as any).featured)

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></span>
            Our Work
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions and successful implementations that drive real results
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          <a
            href={featuredProject.link}
            onMouseEnter={() => setHoveredIndex(-1)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative block"
          >
            <div className={`
              relative rounded-3xl overflow-hidden
              bg-gradient-to-br ${featuredProject.gradient}
              shadow-2xl
              transition-all duration-700
              ${hoveredIndex === -1 ? 'scale-[1.02] shadow-3xl' : 'scale-100'}
            `}>
              {/* Image Container */}
              <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${featuredProject.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-700`}></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-semibold mb-4 border border-white/30">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      {featuredProject.category}
                    </div>
                    <h3 className="text-4xl md:text-6xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                      {featuredProject.title}
                    </h3>
                    <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed max-w-2xl">
                      {featuredProject.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProject.technologies.slice(0, 5).map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-white/20 backdrop-blur-md text-white text-sm font-medium rounded-lg border border-white/30 hover:bg-white/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {featuredProject.technologies.length > 5 && (
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-md text-white text-sm font-medium rounded-lg border border-white/30">
                          +{featuredProject.technologies.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* View Project Button */}
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white text-primary-600 rounded-xl font-semibold group-hover:gap-5 transition-all duration-300 hover:scale-105 shadow-xl">
                      <span>Explore Project</span>
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
                    </div>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine pointer-events-none"></div>
              </div>
            </div>
          </a>
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {otherProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative block"
            >
              <div className={`
                relative h-full rounded-2xl overflow-hidden
                bg-white border border-gray-200/50
                shadow-lg
                transition-all duration-500
                hover:shadow-2xl hover:-translate-y-2
                ${hoveredIndex === index ? 'scale-[1.02]' : 'scale-100'}
              `}>
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-primary-700 rounded-lg text-xs font-semibold border border-white/50 shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-lg border border-primary-100"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Project Link */}
                  <div className="flex items-center text-primary-600 font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                    <span>View Details</span>
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-2"
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
                </div>

                {/* Hover Border Effect */}
                <div className={`
                  absolute inset-0 rounded-2xl border-2 border-transparent
                  group-hover:border-primary-300/50
                  transition-all duration-500
                  pointer-events-none
                `}></div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a
            href="/projects"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold text-lg hover:from-primary-700 hover:to-primary-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-primary-500/50"
          >
            <span>View All Projects</span>
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
