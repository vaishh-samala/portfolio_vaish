import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import './Preloader.css'

export default function Preloader({ onComplete }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      handleComplete()
    }, 2800)
    return () => clearTimeout(timer)
  }, [])

  const handleComplete = () => {
    setVisible(false)
    setTimeout(onComplete, 600) // Wait for fade transition
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <button className="preloader__skip" onClick={handleComplete}>
            Skip intro
          </button>

          <div className="preloader__content">
            <motion.div
              className="preloader__tagline-wrapper"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="preloader__line" />
              <span className="preloader__tagline">CYBERSECURITY & DATA ANALYTICS</span>
              <span className="preloader__line" />
            </motion.div>

            <motion.h1
              className="preloader__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Vaishnavi <span className="preloader__title-script">Samala</span>
            </motion.h1>

            <motion.p
              className="preloader__bio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              B.Tech CSE (Cyber Security) student translating complex data into secure, trusted solutions.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
