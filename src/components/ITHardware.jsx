import React from 'react'

const ITHardware = () => {
  return (
    <section id="it-hardware" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IT & Hardware Solutions
          </h1>
          <p className="text-2xl text-indigo-400 font-semibold mb-4">
            Reliable systems, seamless performance, and professional support for your business.
          </p>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            FolseTech AI Solutions provides complete IT and hardware services designed to keep your business running smoothly. From computers and networking to servers, security, and professional setup, we deliver the technical foundation your business needs to grow with confidence.
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-6 leading-relaxed">
            We handle everything — installation, optimization, troubleshooting, and upgrades — so you can focus on what matters most: running your business.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Computer Setup */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">Computer Setup & Configuration</h3>
              <p className="text-gray-300 leading-relaxed">
                Professional workstation installation, optimization, and software configuration for peak performance.
              </p>
            </div>

            {/* Networking */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-white mb-4">Networking & Wi-Fi Systems</h3>
              <p className="text-gray-300 leading-relaxed">
                Secure, high-speed networks built for reliability, coverage, and everyday business demands.
              </p>
            </div>

            {/* Hardware Repair */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-white mb-4">Hardware Repair & Upgrades</h3>
              <p className="text-gray-300 leading-relaxed">
                Diagnose issues, replace components, and upgrade systems to extend lifespan and improve speed.
              </p>
            </div>

            {/* Servers & Storage */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
              <div className="text-4xl mb-4">🗄️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Servers & Storage Solutions</h3>
              <p className="text-gray-300 leading-relaxed">
                Local, cloud, or hybrid systems tailored for your organization's data, workflow, and security needs.
              </p>
            </div>

            {/* Security */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-white mb-4">Security & Cyber Protection</h3>
              <p className="text-gray-300 leading-relaxed">
                Firewalls, antivirus, backup systems, and monitoring to safeguard your business from digital threats.
              </p>
            </div>

            {/* Point-of-Sale */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-orange-500 transition-all duration-300">
              <div className="text-4xl mb-4">🖨️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Point-of-Sale & Retail Hardware</h3>
              <p className="text-gray-300 leading-relaxed">
                Professional setup of printers, scanners, terminals, and peripherals for smooth day-to-day operations.
              </p>
            </div>

            {/* Business IT Support */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Business IT Support</h3>
              <p className="text-gray-300 leading-relaxed">
                On-call troubleshooting, maintenance, remote assistance, and continuous optimization.
              </p>
            </div>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Why It Matters</h2>
          <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-2xl p-10">
            <p className="text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto mb-8">
              Your technology is the backbone of your business. With professional IT and hardware support, you're protected from downtime, security issues, and performance bottlenecks — giving you a faster, safer, more productive workplace.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="text-white font-semibold mb-2">Reliability</h4>
                <p className="text-gray-400 text-sm">Minimize downtime with professional support</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🔒</div>
                <h4 className="text-white font-semibold mb-2">Security</h4>
                <p className="text-gray-400 text-sm">Protect against threats and data loss</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="text-white font-semibold mb-2">Performance</h4>
                <p className="text-gray-400 text-sm">Optimized systems for maximum productivity</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">💼</div>
                <h4 className="text-white font-semibold mb-2">Peace of Mind</h4>
                <p className="text-gray-400 text-sm">Expert support when you need it</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Pricing & Service Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* One-Time Projects */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-indigo-400 mb-2">One-Time Projects</h3>
                <div className="text-4xl font-bold text-white mb-2">$125<span className="text-xl text-gray-400">/hr</span></div>
                <p className="text-gray-400 text-sm">Or flat project rate</p>
              </div>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">✓</span>
                  <span>New system setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">✓</span>
                  <span>Hardware upgrades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-2">✓</span>
                  <span>Office relocation</span>
                </li>
              </ul>
              <a 
                href="mailto:jon@folsetech.net?subject=One-Time%20Project%20Quote" 
                className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Get Quote
              </a>
            </div>

            {/* On-Demand Support */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 transform scale-105">
              <div className="text-center mb-6">
                <div className="inline-block bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">MOST POPULAR</div>
                <h3 className="text-2xl font-bold text-purple-400 mb-2">On-Demand Support</h3>
                <div className="text-4xl font-bold text-white mb-2">$100<span className="text-xl text-gray-400">/hr</span></div>
                <p className="text-gray-400 text-sm">Pay as you go</p>
              </div>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Troubleshooting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Remote assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Emergency repairs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>System diagnostics</span>
                </li>
              </ul>
              <a 
                href="mailto:jon@folsetech.net?subject=On-Demand%20Support%20Request" 
                className="block w-full text-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Get Support
              </a>
            </div>

            {/* Managed IT Services */}
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">Managed IT Services</h3>
                <div className="text-4xl font-bold text-white mb-2">Custom</div>
                <p className="text-gray-400 text-sm">Monthly retainer</p>
              </div>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Ongoing monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Proactive maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Security updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Priority support</span>
                </li>
              </ul>
              <a 
                href="mailto:jon@folsetech.net?subject=Managed%20IT%20Services%20Inquiry" 
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Upgrade Your IT Infrastructure?
            </h2>
            <p className="text-2xl text-gray-300 mb-8">
              Professional IT and hardware solutions tailored to your business needs.
            </p>
            <p className="text-xl text-indigo-400 font-semibold mb-8">
              Let FolseTech keep your systems running smoothly and securely.
            </p>
            <a 
              href="mailto:jon@folsetech.net?subject=IT%20%26%20Hardware%20Inquiry" 
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-12 py-5 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started with IT Support
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ITHardware
