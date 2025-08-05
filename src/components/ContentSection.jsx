import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function ContentSection({ id, title, description, videoSrc, posterSrc, delay }) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section
      id={id}
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
          poster={posterSrc}
        >
          <source src={videoSrc} type="video/webm" />
          <source src={videoSrc.replace('.webm', '.mp4')} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1, delay }}
        className="relative z-20 text-center px-8 max-w-4xl mx-auto"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">{title}</h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12">{description}</p>
      </motion.div>
    </section>
  )
}

export default ContentSection 