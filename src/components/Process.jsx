import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Process.css'

const steps = [
  {
    title: 'Understanding the Brief',
    desc: 'I break down the problem - aligning business goals, user needs, and constraints to set a clear direction before touching any design tool.',
  },
  {
    title: 'Research & Exploration',
    desc: 'I explore user behavior, data, and patterns to uncover insights that actually influence decisions - not just validate them.',
  },
  {
    title: 'Design & Iteration',
    desc: 'From rough wireframes to polished prototypes, each iteration is informed by feedback, tested assumptions, and refined clarity.',
  },
  {
    title: 'Handoff & Optimization',
    desc: 'Clean specs, annotated flows, and close collaboration with engineers ensure the vision is built exactly as intended.',
  },
]

function OrbIcon({ variant }) {
  const fills = [
    ['#4a4a4a', '#888', '#ccc'],
    ['#333', '#666', '#aaa'],
    ['#555', '#888', '#bbb'],
    ['#3a3a3a', '#777', '#aaa'],
  ]
  const [d, m, l] = fills[variant] || fills[0]
  return (
    <svg viewBox="0 0 60 60" className="process__orb" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={`g${variant}`} cx="35%" cy="30%" r="60%">
          <stop offset="0%" stopColor={l} />
          <stop offset="50%" stopColor={m} />
          <stop offset="100%" stopColor={d} />
        </radialGradient>
      </defs>
      <circle cx="30" cy="30" r="28" fill={`url(#g${variant})`} />
      <path d="M30 8 Q48 22 42 38 Q28 52 14 40 Q6 24 30 8Z" fill="rgba(255,255,255,0.07)" />
    </svg>
  )
}

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

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="section">
        <FadeUp>
          <h2 className="process__heading">
            Process? Yeah... I Have One.<br />
            And creative toolkit.
          </h2>
        </FadeUp>

        <div className="process__grid">
          {steps.map((step, i) => (
            <FadeUp key={step.title} delay={0.1 + i * 0.08}>
              <div className="process__card">
                <div className="process__card-icon">
                  <OrbIcon variant={i} />
                </div>
                <h3 className="process__card-title">{step.title}</h3>
                <p className="process__card-desc">{step.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
