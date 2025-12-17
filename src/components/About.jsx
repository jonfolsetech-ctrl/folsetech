import React from 'react'

const About = () => {
  const stats = [
    { number: "50+", label: "AI Projects Delivered" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "10+", label: "Industries Served" },
    { number: "24/7", label: "Support Available" }
  ]

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About FolseTech AI Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are pioneers in artificial intelligence, dedicated to transforming businesses 
            through innovative AI solutions and cutting-edge technology.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Our Story</h3>
            <p className="text-gray-300 leading-relaxed">
              Founded in 2020, FolseTech AI Solutions emerged from a vision to democratize artificial 
              intelligence and make advanced AI technologies accessible to businesses of all sizes. 
              Our journey began with a simple belief: AI should enhance human potential, not replace it.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Today, we're proud to be at the forefront of AI innovation, having delivered 
              transformative solutions across healthcare, finance, retail, and manufacturing 
              industries. Our commitment to ethical AI and responsible innovation guides every 
              project we undertake.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                Innovation
              </span>
              <span className="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">
                Ethics
              </span>
              <span className="bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                Excellence
              </span>
              <span className="bg-orange-600/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium">
                Impact
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-orange-600/20 to-purple-600/20 rounded-2xl p-8 border border-orange-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
              <blockquote className="text-lg text-gray-300 italic leading-relaxed">
                "To empower businesses with intelligent solutions that drive innovation, 
                enhance efficiency, and create sustainable competitive advantages in an 
                AI-powered world."
              </blockquote>
              <div className="mt-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">FT</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-medium">FolseTech AI Solutions Leadership Team</p>
                    <p className="text-gray-400 text-sm">Committed to AI Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Innovation</h4>
              <p className="text-gray-300 text-sm">Pushing boundaries in AI technology</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Security</h4>
              <p className="text-gray-300 text-sm">Ensuring data privacy and protection</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Quality</h4>
              <p className="text-gray-300 text-sm">Delivering excellence in every solution</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Collaboration</h4>
              <p className="text-gray-300 text-sm">Working together for mutual success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About