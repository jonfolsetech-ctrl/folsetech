import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ComputerVision = () => {
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
    <section id="computer-vision" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
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
            Computer Vision
          </h1>
          <p className="text-2xl text-purple-400 font-semibold mb-4">
            Teach your systems to see, understand, and react to the world.
          </p>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            FolseTech AI Solutions builds advanced computer vision models that turn images and video into actionable intelligence. From object detection to facial recognition, custom training, automation workflows, and real-time analysis, we help businesses unlock next-level capabilities through visual AI.
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-6 leading-relaxed">
            Our computer vision tools improve accuracy, speed, and efficiency — allowing you to automate tasks, enhance decision-making, and transform everyday processes.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Image & Video Recognition */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <div className="text-4xl mb-4">📷</div>
              <h3 className="text-2xl font-bold text-white mb-4">Image & Video Recognition</h3>
              <p className="text-gray-300 leading-relaxed">
                Identify products, people, objects, and scenes with high accuracy. Perfect for inventory management, security systems, and content analysis.
              </p>
            </div>

            {/* Custom Vision Model Training */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Vision Model Training</h3>
              <p className="text-gray-300 leading-relaxed">
                Tailored datasets and models built for your industry, environment, or workflow. Train AI to recognize what matters most to your business.
              </p>
            </div>

            {/* Facial & Feature Detection */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-pink-500 transition-all duration-300">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-2xl font-bold text-white mb-4">Facial & Feature Detection</h3>
              <p className="text-gray-300 leading-relaxed">
                Authentication, emotion analysis, attendance systems, and more. Secure, fast, and accurate identity verification.
              </p>
            </div>

            {/* Real-Time Monitoring */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-2xl font-bold text-white mb-4">Real-Time Monitoring & Automation</h3>
              <p className="text-gray-300 leading-relaxed">
                AI that triggers actions, alerts, or workflows based on visual events. Monitor facilities, track assets, or automate responses instantly.
              </p>
            </div>

            {/* OCR */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-orange-500 transition-all duration-300">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-2xl font-bold text-white mb-4">Document & Text Extraction (OCR)</h3>
              <p className="text-gray-300 leading-relaxed">
                Convert invoices, IDs, and paperwork into usable digital data automatically. Eliminate manual data entry and errors.
              </p>
            </div>

            {/* Quality Control */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quality Control & Inspection</h3>
              <p className="text-gray-300 leading-relaxed">
                Detect defects, inconsistencies, or irregularities in real time. Ensure product quality and reduce waste with automated visual inspection.
              </p>
            </div>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Why It Matters</h2>
          <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 rounded-2xl p-10">
            <p className="text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto mb-8">
              Computer vision eliminates manual processes, reduces errors, strengthens security, and opens the door to intelligent automation. Whether you run a small business or a large operation, visual AI helps you operate smarter and faster.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="text-white font-semibold mb-2">Speed</h4>
                <p className="text-gray-400 text-sm">Process thousands of images in seconds</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="text-white font-semibold mb-2">Accuracy</h4>
                <p className="text-gray-400 text-sm">Reduce human error with precise detection</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🔒</div>
                <h4 className="text-white font-semibold mb-2">Security</h4>
                <p className="text-gray-400 text-sm">Strengthen access control and monitoring</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">💰</div>
                <h4 className="text-white font-semibold mb-2">Cost Savings</h4>
                <p className="text-gray-400 text-sm">Automate tasks and reduce labor costs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Real-World Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Retail & E-commerce</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Visual product search</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Inventory tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Customer behavior analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Automated checkout systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Manufacturing & Quality Control</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Defect detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Assembly line monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Parts verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Predictive maintenance</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-4">Security & Access Control</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Facial recognition entry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Intrusion detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>License plate recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Suspicious activity alerts</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Healthcare & Diagnostics</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Medical imaging analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Patient monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Diagnostic assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Compliance verification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to See What's Possible?
            </h2>
            <p className="text-2xl text-gray-300 mb-8">
              Transform your business with intelligent visual AI systems.
            </p>
            <p className="text-xl text-purple-400 font-semibold mb-8">
              Let FolseTech build computer vision solutions that work for you.
            </p>
            <a 
              href="mailto:jon@folsetech.net?subject=Computer%20Vision%20Inquiry" 
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-5 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started with Computer Vision
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComputerVision
