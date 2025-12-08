import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PricingAvailability = () => {
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
    <section id="pricing-availability" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
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
            💸 Pricing & Availability
          </h1>
          <p className="text-2xl text-teal-400 font-semibold mb-4">
            AI-Driven Web Design, Branding, Logos & AI Solutions
          </p>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At FolseTech AI Solutions, every project is built with next-gen automation, professional design systems, and personalized strategy for Louisiana small businesses, creatives, and real estate brands. Below is a clear, transparent pricing structure your clients can trust.
          </p>
        </div>

        {/* AI-Driven Web Design Packages */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">🌐 AI-Driven Web Design Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Starter */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-teal-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-teal-400 mb-2">Starter AI Website</h3>
              <div className="text-4xl font-bold text-white mb-4">$750–$1,200</div>
              <p className="text-gray-400 mb-6">Perfect for small businesses needing a clean, modern online presence fast.</p>
              <p className="text-sm text-teal-400 font-semibold mb-4">Turnaround: 5–7 days</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">✓</span>
                  <span>1–3 pages (Home, About, Services)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">✓</span>
                  <span>Mobile-optimized</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">✓</span>
                  <span>AI-assisted copywriting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">✓</span>
                  <span>Professional layout + branding integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">✓</span>
                  <span>Contact form + social links</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">✓</span>
                  <span>Basic SEO structure</span>
                </li>
              </ul>
            </div>

            {/* Business */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border-2 border-blue-500 hover:border-blue-400 transition-all duration-300 transform scale-105">
              <div className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">POPULAR</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Business AI Website</h3>
              <div className="text-4xl font-bold text-white mb-4">$1,500–$3,000</div>
              <p className="text-gray-400 mb-6">For growing companies who want automation, booking tools, and a branded experience.</p>
              <p className="text-sm text-blue-400 font-semibold mb-4">Turnaround: 7–14 days</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>5–7 pages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>AI-generated content + imagery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Advanced design system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Booking, forms, or lead capture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Local SEO optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Branding integration + iconography</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Blog setup</span>
                </li>
              </ul>
            </div>

            {/* Premium */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">Premium AI Website</h3>
              <div className="text-4xl font-bold text-white mb-4">$3,500–$10,000+</div>
              <p className="text-gray-400 mb-6">Ideal for luxury real estate, large service companies, and tech-forward brands.</p>
              <p className="text-sm text-purple-400 font-semibold mb-4">Turnaround: 2–6 weeks</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>8+ pages + landing pages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Custom animations & modern UI components</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>AI automation tools (chatbots, workflows, forms)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Interactive maps, galleries, or data systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>High-end branding implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Full analytics + SEO systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Branding & Logo Design Packages */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">🎨 Branding & Logo Design Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Logo Essentials */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-pink-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-pink-400 mb-2">Logo Essentials</h3>
              <div className="text-4xl font-bold text-white mb-4">$250–$500</div>
              <p className="text-gray-400 mb-6">A clean, professional logo for small businesses.</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">✓</span>
                  <span>2–3 concept mockups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">✓</span>
                  <span>Typography + icon pairing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">✓</span>
                  <span>Color palette</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">✓</span>
                  <span>Transparent + vector files</span>
                </li>
              </ul>
            </div>

            {/* Premium Branding Suite */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-rose-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-rose-400 mb-2">Premium Branding Suite</h3>
              <div className="text-4xl font-bold text-white mb-4">$650–$1,200</div>
              <p className="text-gray-400 mb-6">A full visual identity for businesses ready to stand out.</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-rose-400 mr-2">✓</span>
                  <span>5+ logo variations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-400 mr-2">✓</span>
                  <span>Wordmark + icon set</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-400 mr-2">✓</span>
                  <span>Brand colors, fonts, styling rules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-400 mr-2">✓</span>
                  <span>Social media profile + cover graphics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-400 mr-2">✓</span>
                  <span>Business card design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-400 mr-2">✓</span>
                  <span>Exported assets pack (PNG, SVG, PDF)</span>
                </li>
              </ul>
            </div>

            {/* Luxury Real Estate */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-amber-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-amber-400 mb-2">Luxury Real Estate Branding</h3>
              <div className="text-4xl font-bold text-white mb-4">$1,500–$5,000</div>
              <p className="text-gray-400 mb-6">Tailored for upscale neighborhoods, developers, and premium markets.</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">✓</span>
                  <span>Custom illustration work (oak tree, architecture, signage)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">✓</span>
                  <span>Luxury serif + script logo sets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">✓</span>
                  <span>Signage layouts (brick, stone, gates)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">✓</span>
                  <span>Full brand story + usage guide</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">✓</span>
                  <span>All design files</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* AI Solutions & Automation Packages */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">🤖 AI Solutions & Automation Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* AI Workflow Automation */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">AI Workflow Automation</h3>
              <div className="text-4xl font-bold text-white mb-4">$300–$2,000+</div>
              <p className="text-gray-400 mb-6">Streamline daily operations with automated systems.</p>
              <p className="text-sm text-gray-500 font-semibold mb-4">Examples:</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span>Lead capture → auto-email → CRM</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span>AI chatbots for websites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span>Appointment scheduling automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span>Invoice or task automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span>Data cleanup + reporting pipelines</span>
                </li>
              </ul>
            </div>

            {/* AI Content Generation */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-indigo-400 mb-2">AI Content Generation Tools</h3>
              <div className="text-4xl font-bold text-white mb-4">$250–$1,500</div>
              <p className="text-gray-400 mb-6">Custom tools for content creation.</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">✓</span>
                  <span>Social post generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">✓</span>
                  <span>Blog writing automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">✓</span>
                  <span>Script → video workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">✓</span>
                  <span>Image generation guidelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">✓</span>
                  <span>Email/marketing automation</span>
                </li>
              </ul>
            </div>

            {/* Voice & Audio AI */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-violet-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-violet-400 mb-2">Voice, Audio & Multimedia AI</h3>
              <div className="text-4xl font-bold text-white mb-4">$500–$5,000+</div>
              <p className="text-gray-400 mb-6">Perfect for artists, influencers, and studios.</p>
              <p className="text-sm text-gray-500 font-semibold mb-4">FolseTech AI Studio options:</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  <span>Speech-to-singing models</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  <span>Beat marketplace integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  <span>Vocal transformation pipelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  <span>Audio mixing AI workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">✓</span>
                  <span>Custom music-tech dashboards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Monthly Plans */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">📦 Monthly Plans (Optional)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* AI Support & Updates */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-2">AI Support & Updates</h3>
              <div className="text-4xl font-bold text-white mb-4">$99–$299<span className="text-xl text-gray-400">/mo</span></div>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Website updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Content refreshes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Analytics reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Hosting + uptime monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>AI tool improvements</span>
                </li>
              </ul>
            </div>

            {/* Full Digital Partner Plan */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border-2 border-emerald-500 hover:border-emerald-400 transition-all duration-300">
              <div className="inline-block bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">BEST VALUE</div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-2">Full Digital Partner Plan</h3>
              <div className="text-4xl font-bold text-white mb-4">$350–$850<span className="text-xl text-gray-400">/mo</span></div>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>New pages each month</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Automated workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Ongoing SEO</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Branding refreshes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Landing pages for ads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span>
                  <span>Priority support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Availability */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">📆 Availability</h2>
          <div className="bg-gradient-to-r from-teal-600/10 to-blue-600/10 border border-teal-500/20 rounded-2xl p-10">
            <p className="text-xl text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mb-8">
              FolseTech AI Solutions takes on only a limited number of projects per month to guarantee quality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">2 slots</div>
                <p className="text-gray-300 font-semibold">AI Website Projects</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">3 slots</div>
                <p className="text-gray-300 font-semibold">Branding / Logo Design</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">2 slots</div>
                <p className="text-gray-300 font-semibold">AI Automation Builds</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-violet-400 mb-2">1 slot</div>
                <p className="text-gray-300 font-semibold">Audio/Voice AI System</p>
              </div>
            </div>
            <p className="text-center text-gray-400 mt-8">
              <span className="font-semibold text-teal-400">Current Availability:</span> December 2025
            </p>
            <p className="text-center text-gray-400 mt-2">
              <span className="font-semibold">Average Start Time:</span> Projects begin within 3–5 business days after deposit.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-teal-600/20 to-blue-600/20 border border-teal-500/30 rounded-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-2xl text-gray-300 mb-8">
              Let's build something extraordinary together.
            </p>
            <p className="text-xl text-teal-400 font-semibold mb-8">
              Request a quote or book your project slot today.
            </p>
            <a 
              href="mailto:jon@folsetech.net?subject=Pricing%20%26%20Quote%20Request" 
              className="inline-block bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-12 py-5 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingAvailability
