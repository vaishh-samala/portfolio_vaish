import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Work', 'Skills', 'Contact']

  const idMap = { Skills: 'tools' }
  const scrollTo = (id) => {
    const target = idMap[id] || id.toLowerCase()
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar__logo">
        <div className="navbar__logo-icon">V</div>
        <span className="navbar__name">Vaishnavi</span>
      </div>

      {/* Desktop nav links */}
      <nav className="navbar__links">
        {links.map((l) => (
          <button key={l} onClick={() => scrollTo(l)} className="navbar__link">
            {l}
          </button>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        className="navbar__menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="navbar__dots">
          <span /><span /><span /><span />
        </span>
      </button>

      {menuOpen && (
        <motion.div
          className="navbar__dropdown"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="navbar__dropdown-link">
              {l}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
