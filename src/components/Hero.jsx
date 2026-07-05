import { motion } from 'framer-motion'
import { Linkedin, Mail, FileText } from 'lucide-react'
import { SiInstagram, SiGithub } from 'react-icons/si'
import './Hero.css'

const socialLinks = [
  { label: 'LinkedIn',  href: '#', icon: <Linkedin size={20} strokeWidth={1.5} /> },
  { label: 'GitHub',    href: '#', icon: <SiGithub size={20} /> },
  { label: 'Instagram', href: '#', icon: <SiInstagram size={20} /> },
  { label: 'Mail',      href: 'mailto:samalavaish77@gmail.com', icon: <Mail size={20} strokeWidth={1.5} /> },
  { label: 'Resume',    href: '#', icon: <FileText size={20} strokeWidth={1.5} /> },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <motion.h1 className="hero__heading" {...fadeUp(0.15)}>
          Vaishnavi<br />
          Samala
        </motion.h1>

        <div className="hero__bottom">
          <motion.div className="hero__intro" {...fadeUp(0.3)}>
            <p className="hero__intro-role">B.Tech CSE (Cyber Security) Student</p>
            <p className="hero__intro-bio">
              Cybersecurity Trainee | Python | SQL | Tableau | PowerBI | Aspiring Cybersecurity Analyst | Aspiring Data Analyst | Data Visualization | Business Insights | Excel
            </p>
          </motion.div>

          <motion.div className="hero__socials" {...fadeUp(0.45)}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="hero__social-link"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <img src="/main.png" className="hero__mobile-photo" alt="Vaishnavi Samala" />
    </section>
  )
}
