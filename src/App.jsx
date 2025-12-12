import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AIWebDesign from './components/AIWebDesign'
import BrandingLogo from './components/BrandingLogo'
import ComputerVision from './components/ComputerVision'
import ITHardware from './components/ITHardware'
import AIStrategyConsulting from './components/AIStrategyConsulting'
import PricingAvailability from './components/PricingAvailability'
import AIMusicProduction from './components/AIMusicProduction'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ai-web-design" element={<AIWebDesign />} />
          <Route path="/branding-logo" element={<BrandingLogo />} />
          <Route path="/computer-vision" element={<ComputerVision />} />
          <Route path="/it-hardware" element={<ITHardware />} />
          <Route path="/ai-strategy-consulting" element={<AIStrategyConsulting />} />
          <Route path="/pricing-availability" element={<PricingAvailability />} />
          <Route path="/ai-music-production" element={<AIMusicProduction />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App