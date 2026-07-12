import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, Scissors, ShieldAlert, Sparkles } from 'lucide-react'
import './Process.css'

const steps = [
  {
    title: 'Evidence before opinions',
    desc: 'Research and data validation come first, then security structures, then the actual execution. I build on verifiable facts.',
    icon: <Search size={22} strokeWidth={1.5} />
  },
  {
    title: 'Cuts reveal the seniority',
    desc: 'What I leave out matters as much as what is written. I keep scripts, schemas, and dashboards clean, removing unnecessary clutter.',
    icon: <Scissors size={22} strokeWidth={1.5} />
  },
  {
    title: 'AI should show its evidence',
    desc: 'If using ML models or classifiers, the features, thresholds, and predictions must be clear and explainable for security audits.',
    icon: <ShieldAlert size={22} strokeWidth={1.5} />
  },
  {
    title: 'Ship the usable path',
    desc: 'I target the cleanest, most direct design that lets analysts and administrators react immediately without friction.',
    icon: <Sparkles size={22} strokeWidth={1.5} />
  },
]

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
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
          <span className="process__eyebrow">HOW I WORK</span>
          <h2 className="process__heading serif-heading">
            Trust is a workflow, not a coat of paint.
          </h2>
          <p className="process__subheading">
            A working style shaped by security guidelines, rigorous analysis, and actionable dashboards where confidence is earned inside the tool.
          </p>
        </FadeUp>

        <div className="process__grid">
          {steps.map((step, i) => (
            <FadeUp key={step.title} delay={0.1 + i * 0.08}>
              <div className="process__card">
                <div className="process__card-icon">
                  {step.icon}
                </div>
                <h3 className="process__card-title serif-heading">{step.title}</h3>
                <p className="process__card-desc">{step.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
