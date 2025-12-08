import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const BrandingLogo = () => {
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
    <section id="branding-logo" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
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
            Branding & Logo Design
          </h1>
          <p className="text-2xl text-pink-400 font-semibold mb-4">
            Complete brand identity that communicates expertise and professionalism.
          </p>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            FolseTech AI Solutions creates cohesive visual systems that blend innovation, precision, and authenticity. We build brand identities that make your business stand out with clean modern design and high-tech professionalism.
          </p>
        </div>

        {/* Brand Identity Overview */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-8">Brand Identity Overview</h2>
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              FolseTech AI Solutions is a forward-thinking digital agency specializing in AI-driven web design, intelligent automation systems, and next-generation creative technology. The brand blends innovation, precision, and local Louisiana authenticity, presenting itself as a premium partner for small businesses that need modern, automated, high-performing digital tools.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Your identity should communicate:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 text-center">
                <span className="text-white font-semibold">✅ Expertise</span>
              </div>
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 text-center">
                <span className="text-white font-semibold">✅ High-tech precision</span>
              </div>
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 text-center">
                <span className="text-white font-semibold">✅ Local trust</span>
              </div>
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 text-center">
                <span className="text-white font-semibold">✅ Clean design</span>
              </div>
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 text-center">
                <span className="text-white font-semibold">✅ Professionalism</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Positioning */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-8">Brand Positioning Statement</h2>
          <div className="bg-gradient-to-r from-pink-600/10 to-rose-600/10 border border-pink-500/20 rounded-2xl p-10 text-center">
            <p className="text-2xl md:text-3xl text-white font-semibold leading-relaxed">
              FolseTech AI Solutions transforms businesses with intelligent design, automation, and digital systems built to scale.
            </p>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with modern aesthetics to create websites, brand systems, and automation workflows that look stunning, perform flawlessly, and make our clients' lives easier.
            </p>
          </div>
        </div>

        {/* Logo Description */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Logo Design Elements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Primary Logo</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                The FolseTech AI Solutions logo is a sleek, modern emblem featuring a stylized AI microchip paired with bold, minimal typography. The design represents both innovation and precision engineering, clearly signaling our focus on automation, AI-powered tools, and future-ready digital solutions.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-3">•</span>
                  <span>The microchip icon symbolizes intelligence, structure, and technical mastery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-3">•</span>
                  <span>The "FolseTech" wordmark is clean, sharp, and modern</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-3">•</span>
                  <span>The "Solutions" tagline sits beneath with subtle spacing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-3">•</span>
                  <span>Soft glow and layered depth evoke high-end technology</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Logo Style Attributes</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🔷</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Clean geometric lines</h4>
                    <p className="text-gray-400">Trust, clarity, reliability</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-3xl mr-4">✨</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Shaded or glowing accents</h4>
                    <p className="text-gray-400">High-tech, premium feel</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-3xl mr-4">📐</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Modern sans-serif typography</h4>
                    <p className="text-gray-400">Current, scalable, versatile</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🎨</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Dark + electric blue palette</h4>
                    <p className="text-gray-400">Intelligence, strength, digital innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Voice */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-8">Brand Voice & Messaging</h2>
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">Tone</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-blue-600/20 rounded-lg p-4 text-center">
                <span className="text-white font-semibold">Professional</span>
              </div>
              <div className="bg-blue-600/20 rounded-lg p-4 text-center">
                <span className="text-white font-semibold">Friendly & confident</span>
              </div>
              <div className="bg-blue-600/20 rounded-lg p-4 text-center">
                <span className="text-white font-semibold">Tech-savvy</span>
              </div>
              <div className="bg-blue-600/20 rounded-lg p-4 text-center">
                <span className="text-white font-semibold">Results-focused</span>
              </div>
              <div className="bg-blue-600/20 rounded-lg p-4 text-center md:col-span-2 lg:col-span-2">
                <span className="text-white font-semibold">Louisiana authenticity</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Brand Voice Example</h3>
            <p className="text-xl text-gray-300 italic leading-relaxed">
              "Smart technology shouldn't feel complicated. FolseTech AI Solutions builds digital tools that work for you — websites that convert, automations that save time, and AI systems that help your business grow."
            </p>
          </div>
        </div>

        {/* Slogan Options */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Slogan Options</h2>
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-pink-400 mb-4">High-Tech Professional</h3>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>"Designing the Future, One Intelligent System at a Time."</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>"Where Smart Design Meets Smart Automation."</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-4">Small-Business Friendly</h3>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>"AI Solutions Built for Real Businesses."</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>"Smarter Websites. Better Systems. Less Stress."</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Bold & Modern</h3>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>"Powered by Intelligence. Designed for Impact."</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>"AI-Driven. Results Focused."</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Brand Pillars */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Brand Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">1. AI-Driven Web Design</h3>
              <p className="text-gray-300 leading-relaxed">
                Websites built with automation, intelligence, and real business goals in mind. From clean modern designs to advanced interactive systems, your website becomes a powerful tool — not just a page.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-white mb-4">2. Automation & Workflow Systems</h3>
              <p className="text-gray-300 leading-relaxed">
                From client onboarding to payments to messaging, FolseTech builds automated flows that save time, reduce errors, and increase productivity.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">3. Machine Learning & AI Tools</h3>
              <p className="text-gray-300 leading-relaxed">
                Custom models, voice synthesis systems, speech-to-singing conversion apps, predictive analytics, and natural language processing for businesses that want to operate at the next level.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-pink-500 transition-all duration-300">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-4">4. Branding & Creative Direction</h3>
              <p className="text-gray-300 leading-relaxed">
                Complete brand identity creation: logos, typography, color palettes, signage concepts, digital assets, and cohesive visual systems.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Logo Usage Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-green-400 mb-6">✓ Do Use</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Clear space around the logo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Light or dark backgrounds for contrast</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>High-resolution files only</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Consistent color palette</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-red-400 mb-6">✗ Avoid</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">✗</span>
                  <span>Stretching or warping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">✗</span>
                  <span>Altering proportions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">✗</span>
                  <span>Excessive shadows or filters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">✗</span>
                  <span>Placing over busy backgrounds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Brand Colors */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Brand Colors</h2>
          <p className="text-center text-gray-300 text-lg mb-8">Premium tech-forward color palette</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700">
              <div className="h-32" style={{backgroundColor: '#1A7CFF'}}></div>
              <div className="p-4">
                <h4 className="text-white font-semibold mb-1">Electric Blue</h4>
                <p className="text-gray-400 text-sm mb-2">#1A7CFF</p>
                <p className="text-gray-500 text-xs">Innovation, clarity</p>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700">
              <div className="h-32" style={{backgroundColor: '#0A1B2E'}}></div>
              <div className="p-4">
                <h4 className="text-white font-semibold mb-1">Deep Navy</h4>
                <p className="text-gray-400 text-sm mb-2">#0A1B2E</p>
                <p className="text-gray-500 text-xs">Trust, professionalism</p>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700">
              <div className="h-32 border border-gray-600" style={{backgroundColor: '#F5F8FC'}}></div>
              <div className="p-4">
                <h4 className="text-white font-semibold mb-1">Ice White</h4>
                <p className="text-gray-400 text-sm mb-2">#F5F8FC</p>
                <p className="text-gray-500 text-xs">Clean, modern</p>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700">
              <div className="h-32" style={{backgroundColor: '#1C1C20'}}></div>
              <div className="p-4">
                <h4 className="text-white font-semibold mb-1">Graphite Black</h4>
                <p className="text-gray-400 text-sm mb-2">#1C1C20</p>
                <p className="text-gray-500 text-xs">Bold contrast</p>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700">
              <div className="h-32" style={{backgroundColor: '#4FB8FF'}}></div>
              <div className="p-4">
                <h4 className="text-white font-semibold mb-1">Neon Accent</h4>
                <p className="text-gray-400 text-sm mb-2">#4FB8FF</p>
                <p className="text-gray-500 text-xs">Energy, futurism</p>
              </div>
            </div>
          </div>
        </div>

        {/* Marketing Descriptions */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Marketing Copy</h2>
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Short Description</h3>
              <p className="text-gray-300 text-lg leading-relaxed italic">
                "FolseTech AI Solutions builds modern websites, automations, and AI-powered tools for small businesses across the River Parishes and Gulf South. We design smarter systems that save time, increase revenue, and elevate your digital presence."
              </p>
              <p className="text-gray-500 text-sm mt-4">Perfect for: Social media, bios, email footers</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Long Description</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                FolseTech AI Solutions is a Louisiana-based digital technology company specializing in AI-driven web design, custom automation workflows, and advanced machine-learning systems. We help small businesses streamline operations, enhance customer experiences, and build brand identities that stand out.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                Our services range from website design and branding to cutting-edge AI applications like voice-to-singing engines, content generation, and intelligent business automation. Whether you're a startup, local business, or creative professional, FolseTech delivers tools built for real-world performance and long-term growth.
              </p>
              <p className="text-gray-500 text-sm mt-4">Perfect for: Brochures, About pages, proposals</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-600/20 to-rose-600/20 border border-pink-500/30 rounded-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Brand?
            </h2>
            <p className="text-2xl text-gray-300 mb-8">
              Let's create a brand identity that reflects your vision and drives results.
            </p>
            <p className="text-xl text-pink-400 font-semibold mb-8">
              Professional branding that makes your business unforgettable.
            </p>
            <a 
              href="mailto:jon@folsetech.net?subject=Branding%20%26%20Logo%20Design%20Inquiry" 
              className="inline-block bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-12 py-5 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Brand Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandingLogo
