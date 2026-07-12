import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

import './About.css'

const education = [
  {
    initials: 'GC',
    name: 'Geethanjali College of Engineering & Technology',
    degree: 'B.Tech - CSE, Cybersecurity Focus',
    period: 'Sep 2022 - Mar 2026',
  },
  {
    initials: 'LF',
    name: 'Little Flower Junior College, Uppal',
    degree: 'MPC, Intermediate Studies',
    period: '2020 - 2022',
  },
  {
    initials: 'VR',
    name: 'Vijaya Ratna High School, Boduppal',
    degree: '10th Standard',
    period: 'Completed 2020',
  },
]

const experience = [
  {
    initials: 'ST',
    name: 'Supraja Technologies',
    role: 'Cybersecurity Intern',
    period: 'May 2025 - Aug 2025',
    location: 'Hyderabad, TS',
    bullets: [
      'Built a python steganography utility encoding text data inside images, transmitted securely via SMTP protocols.',
      'Designed database security layers and custom user role management panels, optimizing credential storage.',
      'Collaborated within Git versioning workflows across iterative design, testing, and vulnerability auditing cycles.'
    ],
  },
]



function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
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
        <FadeUp>
          <span className="about__eyebrow">ABOUT ME</span>
          <h2 className="about__heading serif-heading">The person behind the security judgment.</h2>
          <p className="about__subheading">Short, human context on academic background and real-world experience.</p>
        </FadeUp>

        <div className="about__grid">
          {/* Left Column: Biography */}
          <div className="about__bio-col">
            <FadeUp delay={0.15}>
              <span className="about__card-tag">BIOGRAPHY</span>
              <h3 className="about__profile-headline serif-heading">
                I analyze systems, write secure scripts, and turn cluttered data logs into clear visual metrics.
              </h3>
              <p className="about__profile-text">
                Currently pursuing a Bachelor of Technology in Cybersecurity at Geethanjali College of Engineering and Technology (graduating March 2026). My background bridges the gap between active threat defense and detailed data analytics—from coding cryptographic image encodings in Python to architecting interactive dashboards in Tableau and writing optimized SQL queries.
              </p>
            </FadeUp>
          </div>

          {/* Right Column: Education & Experience timelines */}
          <div className="about__timeline-col">
            {/* Education Sub-block */}
            <FadeUp delay={0.2}>
              <div className="about__sub-block" style={{ borderTop: 'none', paddingTop: 0 }}>
                <h4 className="about__block-title serif-heading" style={{ marginBottom: '16px' }}>Education</h4>
                <div className="about__timeline">
                  {education.map((edu, idx) => (
                    <div key={edu.name} className="about__timeline-item">
                      <div className="about__timeline-badge">{edu.initials}</div>
                      <div className="about__timeline-details">
                        <h5 className="about__timeline-name">{edu.name}</h5>
                        <p className="about__timeline-degree">{edu.degree}</p>
                        <span className="about__timeline-date">{edu.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Experience Sub-block */}
            <FadeUp delay={0.25}>
              <div className="about__sub-block">
                <h4 className="about__block-title serif-heading" style={{ marginBottom: '16px' }}>Experience</h4>
                <div className="about__timeline">
                  {experience.map((exp, idx) => (
                    <div key={exp.name} className="about__timeline-item">
                      <div className="about__timeline-badge">{exp.initials}</div>
                      <div className="about__timeline-details">
                        <h5 className="about__timeline-name">{exp.name}</h5>
                        <p className="about__timeline-degree">{exp.role} · {exp.location}</p>
                        <span className="about__timeline-date">{exp.period}</span>
                        <ul className="about__timeline-bullets">
                          {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>


      </div>
    </section>
  )
}

