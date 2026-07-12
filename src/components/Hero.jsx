import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import './Hero.css'

<<<<<<< HEAD
const competencies = [
  { name: 'Threat Detection', detail: 'ML-based anomaly predictors' },
  { name: 'Data Visualization', detail: 'Tableau & PowerBI dashboards' },
  { name: 'SQL & Database Design', detail: 'Complex queries & structures' },
  { name: 'Python Engineering', detail: 'Steganography & security script' }
]

const stats = [
  { value: '+4', label: 'years academic foundation' },
  { value: '100%', label: 'hands-on project commitment' },
  { value: '3+', label: 'security tools designed' },
  { value: '15+', label: 'data dashboards compiled' },
=======
const socialLinks = [
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/vaishnavi-samala/', icon: <Linkedin size={20} strokeWidth={1.5} /> },
  { label: 'GitHub',    href: 'https://github.com/vaishh-samala', icon: <SiGithub size={20} /> },
  { label: 'Instagram', href: 'https://www.instagram.com/vaishnavi_samala/', icon: <SiInstagram size={20} /> },
  { label: 'Mail',      href: 'mailto:samalavaish77@gmail.com', icon: <Mail size={20} strokeWidth={1.5} /> },
  { label: 'Resume',    href: '/resume.pdf', icon: <FileText size={20} strokeWidth={1.5} /> },
>>>>>>> a79cd903fcf9baf14ff6c8544eecae1456bf0a47
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__top-grid">
        {/* Left Column Content */}
        <motion.div className="hero__left" {...fadeUp(0.1)}>
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span className="hero__badge-text">AVAILABLE FOR CYBERSECURITY & DATA ROLES</span>
          </div>

          <h1 className="hero__heading serif-heading">
            I'm Vaishnavi Samala, a <span className="italic-script">Cybersecurity student</span>
          </h1>

          <p className="hero__description">
            B.Tech CSE (Cyber Security) student graduating March 2026. Skilled in building python-based steganography tools, managing secure database infrastructures, and generating analytics dashboards that influence decisions.
          </p>

          <div className="hero__actions">
            <a 
              href="#work" 
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="hero__btn hero__btn--primary"
            >
              <span>See my work</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </motion.div>

        {/* Right Column Image Frame */}
        <motion.div className="hero__right" {...fadeUp(0.25)}>
          <div className="hero__image-container">
            <img src="/vaishu.png" className="hero__photo" alt="Vaishnavi Samala" />
          </div>
        </motion.div>
      </div>

      {/* Stats fold row matching inspiration */}
      <div className="hero__stats-fold">
        <div className="hero__stats-grid">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label} 
              className="hero__stat-card"
              {...fadeUp(0.1 + i * 0.05)}
            >
              <h2 className="hero__stat-val serif-heading">{stat.value}</h2>
              <p className="hero__stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Core Competencies bar */}
      <div className="hero__competencies-fold">
        <motion.p className="hero__comp-heading" {...fadeUp(0.1)}>
          CORE SKILL FIELDS & PRACTICE
        </motion.p>
        <div className="hero__competencies-grid">
          {competencies.map((comp, i) => (
            <motion.div 
              key={comp.name} 
              className="hero__comp-card"
              {...fadeUp(0.15 + i * 0.05)}
            >
              <h3 className="hero__comp-name serif-heading">{comp.name}</h3>
              <p className="hero__comp-detail">{comp.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


