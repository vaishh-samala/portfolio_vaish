import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Contact.css'

const socials = [
  { label: 'LinkedIn',  href: 'https://linkedin.com/in/' },
  { label: 'GitHub',    href: 'https://github.com/' },
  { label: 'Instagram', href: '#' },
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

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__inner">

        <FadeUp>
          <p className="contact__label">Get in Touch</p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="contact__tagline">
            Data-driven.<br />
            Security-minded.<br />
            Ready to contribute.
          </h2>
        </FadeUp>

        <FadeUp delay={0.18}>
          <p className="contact__sub">
            Open to roles in cybersecurity, data analytics, and
            anything at the intersection of the two.
          </p>
        </FadeUp>

        <FadeUp delay={0.26}>
          <a href="mailto:samalavaish77@gmail.com" className="contact__email">
            samalavaish77@gmail.com
          </a>
        </FadeUp>

        <FadeUp delay={0.34}>
          <div className="contact__socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="contact__social">{s.label}</a>
            ))}
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
