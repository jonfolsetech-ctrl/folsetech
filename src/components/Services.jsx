import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      title: "AI-Driven Web Design",
      description: "Smart, automated websites that learn from user behavior, optimize SEO in real-time, and integrate AI tools. Built with Next.js, Tailwind CSS, and AWS Amplify for Louisiana small businesses and fast-scaling brands.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500",
      link: "/ai-web-design"
    },
    {
      title: "Computer Vision",
      description: "Teach your systems to see and understand. Advanced vision models for object detection, facial recognition, real-time monitoring, OCR, quality control, and automation workflows that turn images into actionable intelligence.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      color: "from-purple-500 to-pink-500",
      link: "/computer-vision"
    },
    {
      title: "Branding & Logo Design",
      description: "Complete brand identity creation including logos, typography, color palettes, signage concepts, and digital assets. We build cohesive visual systems that communicate expertise and professionalism.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      color: "from-pink-500 to-rose-500",
      link: "/branding-logo"
    },
    {
      title: "IT & Hardware Solutions",
      description: "Complete IT infrastructure support, hardware upgrades, network configuration, system maintenance, and technical troubleshooting for businesses of all sizes.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: "from-indigo-500 to-purple-500",
      link: "/it-hardware"
    },
    {
      title: "AI Strategy Consulting",
      description: "Expert guidance on AI adoption, implementation roadmaps, and digital transformation strategies.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "from-orange-500 to-red-500",
      link: "/ai-strategy-consulting"
    },
    {
      title: "Pricing & Availability",
      description: "Transparent pricing for AI-driven websites, branding, logos, and automation solutions. Limited monthly slots with fast turnaround times.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-teal-500 to-blue-500",
      link: "/pricing-availability"
    },
    {
      title: "SEO Analytics & SQL Playbook",
      description: "SQL-powered SEO analytics platform with pre-built queries to identify opportunities, fix technical issues, and drive organic growth with data-driven insights.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: "from-blue-500 to-purple-500",
      link: "/seo-analytics"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our AI Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive artificial intelligence solutions designed to transform your business 
            and give you a competitive edge in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer block"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-purple-500 transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center text-orange-400 group-hover:text-orange-300 transition-colors duration-300">
                <span className="font-medium">🔥 Learn More</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600/10 to-yellow-400/10 border border-orange-500/20 rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive innovation and growth for your organization.
            </p>
            <a href="mailto:jon@folsetech.net?subject=Consultation%20Request" className="inline-block bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-400/60 hover:from-orange-700 hover:via-orange-600 hover:to-yellow-500/70 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/50">
              🔥 Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services