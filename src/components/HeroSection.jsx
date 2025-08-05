import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import MinecraftTilePattern from './MinecraftTilePattern'

function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
          poster="/minecraft-bg-poster.jpg"
        >
          <source src="/minecraft-bg.webm" type="video/webm" />
          <source src="/minecraft-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Minecraft Tile Pattern */}
      <div className="absolute inset-0 z-10">
        <MinecraftTilePattern isLoaded={isLoaded} />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6 text-white"
        >
          MINECRAFT
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-3xl md:text-5xl font-bold mb-8 text-green-400"
        >
          HOSTING
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto"
        >
          Experience the ultimate Minecraft server hosting with premium performance, 
          mod support, and 24/7 uptime. Your world, our infrastructure.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="px-12 py-6 bg-green-600 hover:bg-green-700 text-white text-2xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          START YOUR SERVER
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection 