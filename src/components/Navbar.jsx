import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, ArrowUpRight, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const scrollPosition = window.scrollY + 250
      const sections = ['work', 'about', 'contact']
      let current = ''

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = section
          }
        }
      }

      const idMapReverse = {
        work: 'Work',
        about: 'About',
        contact: 'Contact'
      }
      setActiveSection(idMapReverse[current] || '')
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Work', 'About', 'Contact']

  const idMap = {
    Work: 'work',
    About: 'about',
    Contact: 'contact'
  }

  const scrollTo = (id) => {
    const target = idMap[id]
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
      <div className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className="navbar__logo-name">
          Vaishnavi <span className="navbar__logo-script">Samala</span>
        </span>
      </div>

      {/* Desktop nav links */}
      <nav className="navbar__links">
        {links.map((l) => (
          <button
            key={l}
            onClick={() => scrollTo(l)}
            className={`navbar__link ${activeSection === l ? 'navbar__link--active' : ''}`}
          >
            {l}
          </button>
        ))}
      </nav>

      {/* Right actions (Resume, LinkedIn) */}
      <div className="navbar__actions">
        <a href="/resume.pdf" download="Vaishnavi_Samala_Resume.pdf" className="navbar__action-btn">
          <Download size={14} />
          <span>Resume</span>
        </a>

        <a
          href="https://www.linkedin.com/in/vaishnavi-samala/"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__action-btn navbar__action-btn--primary"
        >
          <span>LinkedIn</span>
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Mobile menu controls */}
      <div className="navbar__mobile-controls">
        <button
          className="navbar__menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="navbar__dropdown-links">
              {links.map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  className={`navbar__dropdown-link ${activeSection === l ? 'navbar__dropdown-link--active' : ''}`}
                >
                  {l}
                </button>
              ))}
            </div>

            <div className="navbar__dropdown-actions">
              <a href="/resume.pdf" download="Vaishnavi_Samala_Resume.pdf" className="navbar__dropdown-action">
                <Download size={15} />
                <span>Resume</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vaishnavi-samala/"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar__dropdown-action navbar__dropdown-action--primary"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}


