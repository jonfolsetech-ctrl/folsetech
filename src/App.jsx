import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import AIWebDesign from './components/AIWebDesign'
import BrandingLogo from './components/BrandingLogo'
import ComputerVision from './components/ComputerVision'
import ITHardware from './components/ITHardware'
import PricingAvailability from './components/PricingAvailability'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <AIWebDesign />
      <BrandingLogo />
      <ComputerVision />
      <ITHardware />
      <PricingAvailability />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App