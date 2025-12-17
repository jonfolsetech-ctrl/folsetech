import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Transform Your Business with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400/60">
                Artificial Intelligence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              FolseTech AI Solutions delivers cutting-edge artificial intelligence technologies 
              to revolutionize your business operations and drive unprecedented growth.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:jon@folsetech.net?subject=AI%20Solutions%20Inquiry" className="bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-400/60 hover:from-orange-700 hover:via-orange-600 hover:to-yellow-500/70 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/50 inline-block">
              🔥 Start Your AI Journey
            </a>
            <a href="#services" className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-800 inline-block">
              View Our Solutions
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Innovation</h3>
              <p className="text-gray-400">Cutting-edge AI solutions tailored to your business needs</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-yellow-400/60 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-400/60 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Optimized performance with real-time processing capabilities</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400/60 to-orange-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-gray-400">Track record of successful AI implementations across industries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero