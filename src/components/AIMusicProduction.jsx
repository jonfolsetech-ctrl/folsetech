import React from 'react'
import { Link } from 'react-router-dom'
import { Music, AudioWaveform, Disc3, Mic, AudioLines, Radio, Sparkles, Zap } from 'lucide-react'

const AIMusicProduction = () => {
  const services = [
    {
      icon: <AudioWaveform className="w-12 h-12" />,
      title: "AI-Powered Beat Generation",
      description: "Create unique, royalty-free beats using cutting-edge AI algorithms tailored to your genre and style preferences.",
      features: ["Custom genre selection", "BPM control", "Instant generation", "Unlimited variations"]
    },
    {
      icon: <Mic className="w-12 h-12" />,
      title: "Vocal Processing & Enhancement",
      description: "Professional-grade vocal processing using AI to enhance clarity, remove noise, and perfect pitch.",
      features: ["Auto-tuning", "Noise reduction", "Vocal harmonization", "Real-time effects"]
    },
    {
      icon: <AudioLines className="w-12 h-12" />,
      title: "Smart Mixing & Mastering",
      description: "AI-driven mixing and mastering that brings your tracks to professional studio quality automatically.",
      features: ["Automatic EQ", "Dynamic range optimization", "Loudness normalization", "Stem separation"]
    },
    {
      icon: <Disc3 className="w-12 h-12" />,
      title: "Music Composition Assistant",
      description: "Get AI-powered suggestions for chord progressions, melodies, and arrangements to overcome creative blocks.",
      features: ["Chord suggestions", "Melody generation", "Arrangement ideas", "Genre-specific patterns"]
    }
  ]

  const benefits = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Professional Quality",
      description: "Studio-grade results without expensive equipment or years of training"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Create, edit, and finalize tracks in a fraction of the traditional time"
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Unlimited Creativity",
      description: "Experiment endlessly with no additional costs or limitations"
    }
  ]

  const useCases = [
    "Independent Artists & Producers",
    "Content Creators & YouTubers",
    "Podcast Producers",
    "Film & Video Game Soundtracks",
    "Commercial & Advertising Music",
    "Live Performance Enhancement"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-20">
      {/* FolseTech Pro AI Music Studio Announcement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <a 
          href="https://main.d1nacdggybplre.amplifyapp.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block relative overflow-hidden rounded-lg p-4 transition-all duration-300 transform hover:scale-[1.01] cursor-pointer"
        >
          {/* Floating Musical Notes */}
          <div className="absolute inset-0 pointer-events-none">
            <span className="absolute text-2xl opacity-30 animate-float" style={{left: '10%', top: '20%', animationDelay: '0s'}}>🎵</span>
            <span className="absolute text-xl opacity-20 animate-float" style={{left: '85%', top: '60%', animationDelay: '1s'}}>🎶</span>
            <span className="absolute text-lg opacity-25 animate-float" style={{left: '15%', top: '70%', animationDelay: '2s'}}>🎼</span>
            <span className="absolute text-2xl opacity-20 animate-float" style={{left: '90%', top: '25%', animationDelay: '1.5s'}}>♪</span>
            <span className="absolute text-xl opacity-30 animate-float" style={{left: '5%', top: '45%', animationDelay: '0.5s'}}>♫</span>
          </div>
          
          {/* Floating Dollar Signs */}
          <div className="absolute inset-0 pointer-events-none">
            <span className="absolute text-2xl opacity-30 text-green-400 animate-float-slow" style={{left: '20%', top: '15%', animationDelay: '0s'}}>💰</span>
            <span className="absolute text-xl opacity-25 text-green-400 animate-float-slow" style={{left: '80%', top: '70%', animationDelay: '2s'}}>💵</span>
            <span className="absolute text-lg opacity-20 text-green-400 animate-float-slow" style={{left: '25%', top: '80%', animationDelay: '1s'}}>💸</span>
            <span className="absolute text-2xl opacity-25 text-green-400 animate-float-slow" style={{left: '75%', top: '30%', animationDelay: '1.5s'}}>💲</span>
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-3xl animate-bounce">🎵</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                  Coming Soon - Try Our Beta
                </span>
              </h2>
              <span className="text-3xl animate-bounce" style={{animationDelay: '0.2s'}}>🎨</span>
            </div>
            <p className="text-xl md:text-2xl text-white font-bold mb-3 text-center">
              🚀 FolseTech Pro AI-Driven Music Studio
            </p>
            <p className="text-base md:text-lg text-gray-200 text-center mb-3">
              Every futuristic AI tool to mix and master your dreams
            </p>
            <p className="text-base md:text-lg text-purple-300 font-bold text-center mb-4">
              ✨ The only speech-to-singing voice song generator ever
            </p>
            <div className="flex justify-center">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm md:text-base font-bold hover:from-blue-600 hover:to-purple-600 transition-all">
                Launch Studio Now →
              </span>
            </div>
          </div>
        </a>
      </section>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Music className="w-20 h-20 text-blue-500 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            AI Music Production
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your musical vision into reality with FolseTech's revolutionary AI-powered music production tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:jon@folsetech.net?subject=AI%20Music%20Production%20Inquiry" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              Start Creating Music
            </a>
            <button 
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors border border-gray-700"
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our AI Music Services</h2>
          <p className="text-xl text-gray-400">Comprehensive solutions for every aspect of music production</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all transform hover:scale-105"
            >
              <div className="text-blue-500 mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="text-blue-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose AI Music Production?</h2>
            <p className="text-xl text-gray-400">The future of music creation is here</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-blue-500">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Perfect For</h2>
          <p className="text-xl text-gray-400">No matter your role in music, we have solutions for you</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-all text-center"
            >
              <p className="text-lg font-semibold">{useCase}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Revolutionize Your Music?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the next generation of music producers using AI to create incredible sounds
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:jon@folsetech.net?subject=AI%20Music%20Production%20Inquiry" 
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Started Now
            </a>
            <Link 
              to="/pricing-availability"
              className="bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors border-2 border-white"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AIMusicProduction
