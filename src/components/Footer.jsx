import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import OrderNowButton from './OrderNowButton'

// Minecraft tile colors
const minecraftColors = {
  grass1: '#4a6f28',
  grass2: '#5b8731', 
  grass3: '#3e5c20',
  grass4: '#527a2d',
  grass5: '#5b8b32'
}

function Footer() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <footer ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Darkening Minecraft Tiles */}
      <div className="absolute inset-0 z-0">
        <DarkeningTilePattern />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-20 container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white"
          >
            <h3 className="text-2xl font-bold mb-6 text-green-400">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <p className="font-semibold">Pein GbR - UtopiaGaming</p>
              <p>Käthe-Kollwitz-Weg 24</p>
              <p>23558 Lübeck</p>
              <p>Deutschland</p>
              <div className="mt-4 space-y-2">
                <p>info@pein-gbr.de</p>
                <p>+49 (0) 451 / 3050 6865</p>
                <p>www.pein-gbr.de</p>
              </div>
            </div>
          </motion.div>

          {/* Center Column - Order Now Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to Start?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Launch your Minecraft server today
              </p>
            </div>
            <OrderNowButton />
          </motion.div>

          {/* Right Column - Social & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white"
          >
            <h3 className="text-2xl font-bold mb-6 text-green-400">Connect</h3>
            <div className="space-y-4 text-gray-300">
              <a href="#" className="block hover:text-green-400 transition-colors">
                Discord Community
              </a>
              <a href="#" className="block hover:text-green-400 transition-colors">
                Support Portal
              </a>
              <a href="#" className="block hover:text-green-400 transition-colors">
                Documentation
              </a>
            </div>
            
            <div className="mt-8 space-y-2 text-sm text-gray-400">
              <p>USt-Id. Nr.: DE360199196</p>
              <p>PayPal: payment@pein-gbr.de</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar - Copyright & Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
        >
          <div className="mb-4 md:mb-0">
            <p>©2024 Pein GbR - UtopiaGaming</p>
            <p>Persönlich haftende Gesellschafter: Frederic Pein, Elisabeth Sinnesbichler und Johannes Winter</p>
          </div>
          <div className="text-center md:text-right">
            <p>Bank: Deutsche Bank AG | IBAN: DE98 1001 0010 0074 0401 49</p>
            <p>BIC: PBNKDEFF</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-30 w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  )
}

// Darkening Tile Pattern for Footer
function DarkeningTilePattern() {
  const tiles = []
  const tileSize = 32
  const cols = Math.ceil(window.innerWidth / tileSize) + 2
  const rows = Math.ceil(window.innerHeight / tileSize) + 2

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const colorKeys = Object.keys(minecraftColors)
      const randomColor = minecraftColors[colorKeys[Math.floor(Math.random() * colorKeys.length)]]
      
      // Darken tiles towards bottom
      const darkenFactor = Math.min(1, (row / rows) * 0.8)
      const darkenedColor = darkenColorHex(randomColor, darkenFactor)
      
      tiles.push(
        <div
          key={`footer-${row}-${col}`}
          className="absolute"
          style={{
            left: col * tileSize,
            top: row * tileSize,
            width: tileSize,
            height: tileSize,
            backgroundColor: darkenedColor,
            border: '1px solid rgba(0,0,0,0.2)'
          }}
        />
      )
    }
  }

  return <div className="relative w-full h-full">{tiles}</div>
}

// Utility function to darken hex color
function darkenColorHex(hex, factor) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  
  const newR = Math.floor(r * (1 - factor))
  const newG = Math.floor(g * (1 - factor))
  const newB = Math.floor(b * (1 - factor))
  
  return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`
}

export default Footer 