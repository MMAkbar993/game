import { motion } from 'framer-motion'

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl font-bold text-white"
      >
        UtopiaGaming
      </motion.div>
      
      <div className="flex items-center space-x-6">
        <motion.a
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          href="#servers"
          className="text-white hover:text-green-400 transition-colors hidden md:block"
        >
          Servers
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          href="#about"
          className="text-white hover:text-green-400 transition-colors hidden md:block"
        >
          About
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          href="mailto:info@pein-gbr.de"
          className="text-white hover:text-green-400 transition-colors hidden lg:block"
        >
          Contact
        </motion.a>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Discord
        </motion.button>
      </div>
    </nav>
  )
}

export default Navigation 