import { useState } from 'react'
import { motion } from 'framer-motion'

// Minecraft tile colors
const minecraftColors = {
  grass1: '#4a6f28',
  grass2: '#5b8731', 
  grass3: '#3e5c20',
  grass4: '#527a2d',
  grass5: '#5b8b32'
}

function OrderNowButton() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <div
      className="relative group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pixel border tiles */}
      <div className="absolute -inset-4">
        {Array.from({ length: 16 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2"
            style={{
              left: `${(i % 4) * 25}%`,
              top: `${Math.floor(i / 4) * 25}%`,
              backgroundColor: minecraftColors.grass1,
              opacity: isHovered ? 0.8 : 0.4,
              transition: 'opacity 0.3s ease'
            }}
          />
        ))}
      </div>

      {/* Main button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative px-16 py-8 bg-green-600 hover:bg-green-700 text-white text-3xl font-bold rounded-lg transition-all duration-300 shadow-2xl border-4 border-green-800"
      >
        ORDER NOW
      </motion.button>

      {/* Spotlight effect */}
      {isHovered && (
        <div
          className="absolute pointer-events-none rounded-full opacity-20"
          style={{
            left: mousePosition.x - 50,
            top: mousePosition.y - 50,
            width: 100,
            height: 100,
            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)'
          }}
        />
      )}
    </div>
  )
}

export default OrderNowButton 