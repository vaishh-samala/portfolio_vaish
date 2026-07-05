import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Testimonials.css'

const testimonials = [
  {
    quality: 'User-First Thinking',
    qualityB: 'Fast Iteration',
    quoteA: "Vaishnavi has an incredible ability to distill complex problems into elegant, intuitive designs. Her research-led approach and attention to detail sets her apart - she doesn't just make things look good, she makes them work.",
    quoteB: "She delivered polished designs ahead of schedule and was proactive with edge cases we hadn't even thought of. A true collaborator.",
    personA: { name: 'Placeholder Name', role: 'PM at Startup', initials: 'PN' },
    personB: { name: 'Placeholder Name', role: 'Founder, Agency', initials: 'PN' },
  },
  {
    quality: 'Systems Thinking',
    qualityB: 'Clear Communication',
    quoteA: "She built a design system from scratch that scaled across 4 products. The documentation was thorough and developers loved working with her handoffs.",
    quoteB: "Every sync with Vaishnavi was productive. She came prepared, asked sharp questions, and always connected design decisions back to the business goal.",
    personA: { name: 'Placeholder Name', role: 'Lead Engineer', initials: 'PN' },
    personB: { name: 'Placeholder Name', role: 'Product Lead', initials: 'PN' },
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

function AsteriskIcon() {
  return (
    <svg className="testimonials__asterisk" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export default function Testimonials() {
  const [slide, setSlide] = useState(0)
  const t = testimonials[slide]

  return (
    <section className="testimonials" id="testimonials">
      <div className="section">
        <FadeUp>
          <h2 className="testimonials__heading">
            Hear it from the people<br />
            who totally didn't get paid to say this.
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="testimonials__grid">
            <div className="testimonials__col">
              <div className="testimonials__quality-row">
                <AsteriskIcon />
                <span className="testimonials__quality">{t.quality}</span>
              </div>
              <p className="testimonials__quote">{t.quoteA}</p>
              <div className="testimonials__person">
                <div className="testimonials__avatar">{t.personA.initials}</div>
                <div>
                  <p className="testimonials__person-name">{t.personA.name}</p>
                  <p className="testimonials__person-role">{t.personA.role}</p>
                </div>
              </div>
            </div>

            <div className="testimonials__col">
              <div className="testimonials__quality-row">
                <AsteriskIcon />
                <span className="testimonials__quality">{t.qualityB}</span>
              </div>
              <p className="testimonials__quote">{t.quoteB}</p>
              <div className="testimonials__person">
                <div className="testimonials__avatar">{t.personB.initials}</div>
                <div>
                  <p className="testimonials__person-name">{t.personB.name}</p>
                  <p className="testimonials__person-role">{t.personB.role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials__controls">
            <button
              className="testimonials__btn"
              onClick={() => setSlide((slide - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous"
            >
              ←
            </button>
            <button
              className="testimonials__btn"
              onClick={() => setSlide((slide + 1) % testimonials.length)}
              aria-label="Next"
            >
              →
            </button>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
