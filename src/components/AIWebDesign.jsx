import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AIWebDesign = () => {
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
    <section id="ai-web-design" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
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
            AI-Driven Web Design Services
          </h1>
          <p className="text-2xl text-blue-400 font-semibold mb-4">
            Smart, automated, and built for growth.
          </p>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At FolseTech AI Solutions, we combine modern web development with advanced AI automation to create websites that don't just look good — they work harder for your business. Your site becomes a living system that adapts, optimizes, and grows with your brand, providing measurable results and seamless customer experiences.
          </p>
        </div>

        {/* What Is AI-Driven Web Design */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-8">What Is AI-Driven Web Design?</h2>
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              AI-driven web design uses intelligent technology to streamline development, enhance user experience, and automate the tasks that most businesses struggle to keep up with.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Instead of a static website, you get a smart digital platform that:
            </p>
            <ul className="space-y-4 text-gray-300 text-lg">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">✓</span>
                <span>Learns from user behavior</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">✓</span>
                <span>Enhances performance automatically</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">✓</span>
                <span>Optimizes SEO in real time</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">✓</span>
                <span>Personalizes content for better conversions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">✓</span>
                <span>Integrates AI tools that save time and boost productivity</span>
              </li>
            </ul>
            <p className="text-blue-400 font-semibold text-xl mt-8">
              This is next-generation web design built for Louisiana small businesses and fast-scaling brands.
            </p>
          </div>
        </div>

        {/* Core Features */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Core Features of Our AI-Driven Websites</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Smart UX & UI */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart UX & UI Optimization</h3>
              <p className="text-gray-300 leading-relaxed">
                Our system analyzes user patterns to improve layout, readability, speed, and engagement. Your site keeps evolving for maximum performance without needing constant manual updates.
              </p>
            </div>

            {/* Lightning-Fast */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning-Fast, Modern Architecture</h3>
              <p className="text-gray-300 leading-relaxed">
                Built with Next.js, Tailwind CSS, and AWS Amplify for high speed, top-notch reliability, and automatic scaling — perfect for service businesses, creators, and e-commerce.
              </p>
            </div>

            {/* AI Chat */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Chat & Customer Automation</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Integrate custom AI tools directly into your website:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>AI chatbots for customer support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Automated FAQs and support workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Lead qualification workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Appointment scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Personalized product or service recommendations</span>
                </li>
              </ul>
              <p className="text-green-400 font-semibold mt-4">
                Your business runs smoother — even while you sleep.
              </p>
            </div>

            {/* SEO */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-orange-500 transition-all duration-300">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-white mb-4">Search Engine Optimization (SEO) Powered by AI</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                AI scans your site and competitors to automatically improve:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Keywords</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Metadata</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Page structure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Load speed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Mobile responsiveness</span>
                </li>
              </ul>
              <p className="text-orange-400 font-semibold mt-4">
                This gives your business a real competitive advantage without traditional SEO headaches.
              </p>
            </div>

            {/* Brand Design */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-pink-500 transition-all duration-300 md:col-span-2">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-4">Brand-Consistent Intelligent Design</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Your design is generated to fit your brand's voice:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>Clean, modern, minimal layouts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>High-end color palettes</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>Luxury, corporate, artistic, or bold styles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>Automatically optimized for desktop & mobile</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Capabilities */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Advanced Capabilities</h2>
          <div className="space-y-8">
            
            {/* Analytics */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
              <div className="flex items-start">
                <div className="text-4xl mr-6">🧠</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Predictive Analytics & Insights</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Our websites actively collect non-intrusive data to show:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">→</span>
                      <span>What customers interact with most</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">→</span>
                      <span>Where they fall off the page</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">→</span>
                      <span>How to improve conversions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">→</span>
                      <span>Content opportunities you're missing</span>
                    </li>
                  </ul>
                  <p className="text-blue-400 font-semibold mt-4">This means smarter decisions for your business.</p>
                </div>
              </div>
            </div>

            {/* Integrations */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
              <div className="flex items-start">
                <div className="text-4xl mr-6">🔧</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Seamless Integrations</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We connect your website to:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-300">
                    <div className="flex items-center">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>CRM systems</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>Marketing platforms</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>Payment processors</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>Inventory systems</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>AI tools</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>Email and SMS automation</span>
                    </div>
                  </div>
                  <p className="text-purple-400 font-semibold mt-4">Everything stays in one smooth ecosystem.</p>
                </div>
              </div>
            </div>

            {/* Hosting */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
              <div className="flex items-start">
                <div className="text-4xl mr-6">🛠️</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Fully Managed Hosting & Updates</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Using AWS Amplify, your website receives:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>Continuous deployment from GitHub</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>Automatic security patches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>Version control</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>Near-instant updates</span>
                    </li>
                  </ul>
                  <p className="text-green-400 font-semibold mt-4">No downtime. No stress.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose FolseTech */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Choose FolseTech AI Solutions?</h2>
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300 text-lg">
              <li className="flex items-start">
                <span className="text-blue-400 text-2xl mr-4">✓</span>
                <span>Local Louisiana expertise with global-quality tech</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 text-2xl mr-4">✓</span>
                <span>Fast turnaround using optimized AI workflows</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 text-2xl mr-4">✓</span>
                <span>Custom automation that eliminates manual tasks</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 text-2xl mr-4">✓</span>
                <span>Brand-first design for real estate, contractors, creators, and small businesses</span>
              </li>
              <li className="flex items-start md:col-span-2">
                <span className="text-blue-400 text-2xl mr-4">✓</span>
                <span>Scalable solutions that grow with your goals</span>
              </li>
            </ul>
            <p className="text-center text-2xl text-white font-bold mt-8">
              Your website becomes not just a digital storefront —<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                but a fully automated business asset.
              </span>
            </p>
          </div>
        </div>

        {/* Perfect For */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center">
              <p className="text-gray-300 text-lg">Small businesses who want a modern, high-performing website</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center">
              <p className="text-gray-300 text-lg">Real estate developers and contractors</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center">
              <p className="text-gray-300 text-lg">Creative brands</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center">
              <p className="text-gray-300 text-lg">Service companies needing automation</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center md:col-span-2 lg:col-span-2">
              <p className="text-gray-300 text-lg">Anyone wanting a website that generates leads, not just views</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Your AI-Powered Website
            </h2>
            <p className="text-2xl text-gray-300 mb-8">
              Your business deserves a website that works as hard as you do.
            </p>
            <p className="text-xl text-blue-400 font-semibold mb-8">
              FolseTech AI Solutions delivers the future — today.
            </p>
            <a 
              href="mailto:jon@folsetech.net?subject=AI-Driven%20Web%20Design%20Inquiry" 
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-5 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIWebDesign
