import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import ContentSection from './components/ContentSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      
      <HeroSection />
      
      <ContentSection
        id="ready-to-play"
        title="Ready to Play"
        description="Jump into your Minecraft world instantly with our optimized servers"
        videoSrc="/ready-to-play.webm"
        posterSrc="/ready-to-play-poster.jpg"
        delay={0}
      />

      <ContentSection
        id="with-mods"
        title="With Mods?"
        description="Full mod support with automatic installation and management"
        videoSrc="/with-mods.webm"
        posterSrc="/with-mods-poster.jpg"
        delay={0.2}
      />

      <ContentSection
        id="console-settings"
        title="Console and Settings"
        description="Complete control over your server with our intuitive management panel"
        videoSrc="/console-settings.webm"
        posterSrc="/console-settings-poster.jpg"
        delay={0.4}
      />

      <Footer />
    </div>
  )
}

export default App
