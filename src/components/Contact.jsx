import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, ArrowUpRight } from 'lucide-react'
import './Contact.css'



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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Cybersecurity',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Trigger standard mailto or show alert
    const subject = `Portfolio Contact from ${formData.name} (${formData.company})`
    const body = `Hi Vaishnavi,\n\n${formData.message}\n\nProject Type: ${formData.projectType}\nEmail: ${formData.email}`
    window.location.href = `mailto:samalavaish77@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="contact" id="contact">
      <div className="section">
        <div className="contact__grid">
          {/* Left Column */}
          <div className="contact__info">
            <FadeUp>
              <span className="contact__eyebrow">CONTACT</span>
              <h2 className="contact__heading serif-heading">
                Have a challenging security or data problem? That is my favorite kind of problem.
              </h2>
              <p className="contact__subheading">
                Send the role, the challenge, or the data project. I reply fastest when the context is specific.
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="contact__badges">
                <a href="mailto:samalavaish77@gmail.com" className="contact__badge contact__badge--email">
                  samalavaish77@gmail.com
                </a>
                <a 
                  href="https://www.linkedin.com/in/vaishnavi-samala/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact__badge"
                >
                  LinkedIn
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Contact Card Form */}
          <div className="contact__form-container">
            <FadeUp delay={0.2}>
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-row">
                  <div className="contact__input-group">
                    <label htmlFor="name" className="contact__label">NAME</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                    />
                  </div>
                  <div className="contact__input-group">
                    <label htmlFor="email" className="contact__label">EMAIL</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address" 
                    />
                  </div>
                </div>

                <div className="contact__form-row">
                  <div className="contact__input-group">
                    <label htmlFor="company" className="contact__label">COMPANY</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name" 
                    />
                  </div>
                  <div className="contact__input-group">
                    <label htmlFor="projectType" className="contact__label">PROJECT TYPE</label>
                    <select 
                      id="projectType" 
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="Cybersecurity">Cybersecurity Project</option>
                      <option value="Data Analytics">Data Analytics Dashboard</option>
                      <option value="Python Dev">Python Scripting</option>
                      <option value="General Inquiry">General Query</option>
                    </select>
                  </div>
                </div>

                <div className="contact__input-group">
                  <label htmlFor="message" className="contact__label">MESSAGE</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the project, role, or problem..." 
                  />
                </div>

                <button type="submit" className="contact__submit-btn">
                  <Send size={15} />
                  <span>Send note</span>
                </button>
              </form>
            </FadeUp>
          </div>
        </div>

        {/* Footer */}
        <div className="contact__footer">
          <p className="contact__copyright">
            &copy; 2026 Vaishnavi Samala &bull; Cybersecurity & Data Analyst
          </p>
        </div>
      </div>
    </section>
  )
}

