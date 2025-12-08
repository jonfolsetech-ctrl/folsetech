import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AIStrategyConsulting = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBackClick = () => {
    navigate('/')
    setTimeout(() => {
      const element = document.getElementById('services')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <section id="ai-strategy" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button onClick={handleBackClick} className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Services
        </button>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Strategy Consulting
          </h1>
          <p className="text-2xl text-orange-400 font-semibold mb-4">
            Expert guidance on AI adoption, implementation, and digital transformation.
          </p>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            FolseTech AI Solutions provides strategic consulting to help businesses navigate the AI landscape, identify opportunities, and build actionable roadmaps for successful AI integration.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-orange-500 transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Readiness Assessment</h3>
              <p className="text-gray-300 leading-relaxed">
                Evaluate your organization's current capabilities, data infrastructure, and readiness for AI adoption. Identify gaps and opportunities.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom AI Roadmap</h3>
              <p className="text-gray-300 leading-relaxed">
                Tailored implementation plans with prioritized initiatives, timelines, resource requirements, and expected ROI for each AI project.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-amber-500 transition-all duration-300">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Use Case Identification</h3>
              <p className="text-gray-300 leading-relaxed">
                Discover high-impact AI applications specific to your industry and business model. From automation to predictive analytics.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-yellow-500 transition-all duration-300">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">Vendor & Technology Selection</h3>
              <p className="text-gray-300 leading-relaxed">
                Navigate the complex AI ecosystem. Get expert guidance on choosing the right tools, platforms, and partners for your needs.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Data Strategy & Governance</h3>
              <p className="text-gray-300 leading-relaxed">
                Build robust data collection, storage, and governance frameworks essential for successful AI implementation and compliance.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-white mb-4">Training & Change Management</h3>
              <p className="text-gray-300 leading-relaxed">
                Prepare your team for AI adoption with training programs, workshops, and change management strategies for smooth transitions.
              </p>
            </div>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Why Strategic Planning Matters</h2>
          <div className="bg-gradient-to-r from-orange-600/10 to-red-600/10 border border-orange-500/20 rounded-2xl p-10">
            <p className="text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto mb-8">
              AI transformation isn't just about technology—it's about strategy, people, and process. Without a clear roadmap, organizations risk wasted resources, failed projects, and missed opportunities. Strategic consulting ensures you invest in the right AI solutions that deliver real business value.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">💰</div>
                <h4 className="text-white font-semibold mb-2">Maximize ROI</h4>
                <p className="text-gray-400 text-sm">Focus on high-impact initiatives first</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="text-white font-semibold mb-2">Reduce Risk</h4>
                <p className="text-gray-400 text-sm">Avoid costly mistakes and false starts</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="text-white font-semibold mb-2">Accelerate Adoption</h4>
                <p className="text-gray-400 text-sm">Clear path from strategy to execution</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="text-white font-semibold mb-2">Competitive Edge</h4>
                <p className="text-gray-400 text-sm">Stay ahead in your industry</p>
              </div>
            </div>
          </div>
        </div>

        {/* Consulting Process */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Consulting Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center">
              <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-orange-400 mb-3">Discovery</h3>
              <p className="text-gray-300 text-sm">Understand your business, goals, and current state</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-red-400 mb-3">Analysis</h3>
              <p className="text-gray-300 text-sm">Assess capabilities, identify opportunities and challenges</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center">
              <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-amber-400 mb-3">Strategy</h3>
              <p className="text-gray-300 text-sm">Develop custom roadmap with prioritized initiatives</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center">
              <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Implementation Support</h3>
              <p className="text-gray-300 text-sm">Guide execution and provide ongoing advisory</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your AI Strategy?
            </h2>
            <p className="text-2xl text-gray-300 mb-8">
              Let's create a roadmap for your AI-powered future.
            </p>
            <p className="text-xl text-orange-400 font-semibold mb-8">
              Schedule a strategic consultation with FolseTech today.
            </p>
            <a 
              href="mailto:jon@folsetech.net?subject=AI%20Strategy%20Consulting%20Inquiry" 
              className="inline-block bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-5 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIStrategyConsulting
