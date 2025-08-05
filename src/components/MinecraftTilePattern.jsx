import { motion } from 'framer-motion'

// Minecraft tile colors
const minecraftColors = {
  grass1: '#4a6f28',
  grass2: '#5b8731', 
  grass3: '#3e5c20',
  grass4: '#527a2d',
  grass5: '#5b8b32'
}

function MinecraftTilePattern({ isLoaded }) {
  const tiles = []
  const tileSize = 32
  const cols = Math.ceil(window.innerWidth / tileSize) + 2
  const rows = Math.ceil(window.innerHeight / tileSize) + 2

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const colorKeys = Object.keys(minecraftColors)
      const randomColor = minecraftColors[colorKeys[Math.floor(Math.random() * colorKeys.length)]]
      
      tiles.push(
        <motion.div
          key={`${row}-${col}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{
            duration: 0.3,
            delay: (row + col) * 0.02,
            ease: "easeOut"
          }}
          className="absolute"
          style={{
            left: col * tileSize,
            top: row * tileSize,
            width: tileSize,
            height: tileSize,
            backgroundColor: randomColor,
            border: '1px solid rgba(0,0,0,0.1)'
          }}
        />
      )
    }
  }

  return <div className="relative w-full h-full">{tiles}</div>
}

export default MinecraftTilePattern 