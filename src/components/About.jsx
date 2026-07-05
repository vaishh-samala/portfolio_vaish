import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const education = [
  {
    initials: 'GC',
    name: 'Geethanjali College of Engineering and Technology',
    degree: 'Bachelor of Technology - BTech, Cybersecurity',
    period: 'Sep 2022 - Mar 2026',
  },
  {
    initials: 'LF',
    name: 'Little Flower Junior College, Uppal',
    degree: 'MPC, Junior High / Intermediate',
    period: '2020 - 2022',
  },
]

const experience = [
  {
    initials: 'ST',
    name: 'Supraja Technologies',
    role: 'Cybersecurity Intern',
    period: 'May 2025 - Aug 2025',
    location: 'Hyderabad, Telangana',
    bullets: [
      'Collaborated in a team of 4 to develop a Python-based steganography tool that encodes and conceals text within image files and transmits them securely via SMTP email.',
      'Enhanced the tool with File Hide, Image Preview, and an intuitive GUI, improving usability.',
      'Integrated a user database to manage credentials and usage data, gaining hands-on experience with data storage and user management systems.',
      'Contributed across the full development lifecycle - brainstorming, testing, debugging, and iterative improvement using version control.',
    ],
  },
]


function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section">

        {/* About */}
        <FadeUp>
          <h2 className="about__heading">About Me</h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="about__bio">
            B.Tech CSE (Cyber Security) student at Geethanjali College of Engineering &
            Technology, graduating March 2026. I interned at Supraja Technologies as a
            Cybersecurity Intern, building Python-based security tools and working with
            databases and version control across a full development lifecycle. Alongside
            security, I've built a strong foundation in data analysis - cleaning datasets,
            writing complex SQL queries with CTEs and window functions, and building
            interactive Tableau dashboards. Aspiring to work where security and data meet
            to drive real decisions.
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="about__ctas">
            <a href="#work" className="about__cta" onClick={(e) => {
              e.preventDefault()
              document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              View Projects
            </a>
            <a href="#" className="about__cta about__cta--arrow">
              Download Resume <span>↓</span>
            </a>
          </div>
        </FadeUp>

        {/* Education */}
        <FadeUp delay={0.18}>
          <div className="about__block">
            <h3 className="about__block-heading">Education</h3>
            <div className="about__cards">
              {education.map((item) => (
                <div key={item.name} className="about__card">
                  <div className="about__card-logo">{item.initials}</div>
                  <div className="about__card-body">
                    <h4 className="about__card-name">{item.name}</h4>
                    <p className="about__card-sub">{item.degree}</p>
                    <span className="about__card-period">{item.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Experience */}
        <FadeUp delay={0.22}>
          <div className="about__block">
            <h3 className="about__block-heading">Experience</h3>
            <div className="about__cards">
              {experience.map((item) => (
                <div key={item.name} className="about__card about__card--exp">
                  <div className="about__card-logo">{item.initials}</div>
                  <div className="about__card-body">
                    <h4 className="about__card-name">{item.name}</h4>
                    <p className="about__card-sub">{item.role} · {item.location}</p>
                    <span className="about__card-period">{item.period}</span>
                    <ul className="about__card-bullets">
                      {item.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
