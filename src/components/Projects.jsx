import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Projects.css'

const projects = [
  {
    title: 'AI-Driven Cloud Security Threat Predictor',
    tags: ['Python', 'Flask', 'React.js', 'MySQL', 'ML'],
    year: '2026',
    desc: 'Built a cloud security system using ML models (Random Forest, XGBoost, Isolation Forest) to detect anomalous user behaviour in real time. Integrated Explainable AI (XAI) to surface interpretable anomaly explanations and role-based dashboards with real-time alerts.',
    type: 'security',
  },
  {
    title: 'Sales Performance Analysis',
    tags: ['SQL', 'PostgreSQL', 'CTEs', 'Window Functions'],
    year: '2025',
    desc: 'Queried the Northwind relational database (14 tables, 830+ orders) with business-focused SQL using joins, CTEs, and window functions. Used LAG() for MoM revenue trends, identified 11 dormant customers, and calculated a 4.57% late-shipment rate.',
    type: 'data',
  },
  {
    title: 'Customer Churn & Retention Analysis',
    tags: ['Python', 'Pandas', 'Tableau Public'],
    year: '2025',
    desc: 'Cleaned a 7,043-row Telco churn dataset in Pandas and built a 4-chart interactive Tableau dashboard. Found month-to-month customers churn at ~43% vs ~3% for two-year contracts, and churned customers pay ~$13/month more than retained ones.',
    type: 'data',
  },
]

function ProjectVisual({ type }) {
  if (type === 'security') {
    return (
      <div className="project__mockup project__mockup--dark">
        <div className="project__mockup-bar">
          <span /><span /><span />
        </div>
        <div className="project__mockup-terminal">
          {['> anomaly_score: 0.87  [HIGH RISK]', '> model: XGBoost  · features: 14', '> alert triggered — user_id: 4821', '> XAI explanation: unusual_access_time'].map((line, i) => (
            <div key={i} className="project__mockup-line" style={{ opacity: 1 - i * 0.15 }}>{line}</div>
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className="project__mockup project__mockup--chart">
      <div className="project__mockup-bar">
        <span /><span /><span />
      </div>
      <div className="project__mockup-chart">
        {[65, 88, 52, 94, 71, 83, 60].map((h, i) => (
          <div key={i} className="project__mockup-bar-col" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  )
}

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

export default function Projects() {
  return (
    <section className="projects" id="work">
      <div className="section">
        <FadeUp>
          <h2 className="projects__heading">Projects</h2>
        </FadeUp>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <FadeUp key={project.title} delay={0.1 + i * 0.07}>
              <motion.div
                className="projects__card"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <div className="projects__card-meta">
                  <div className="projects__tags">
                    {project.tags.map(t => (
                      <span key={t} className="projects__tag">{t}</span>
                    ))}
                  </div>
                  <span className="projects__year">{project.year}</span>
                </div>

                <ProjectVisual type={project.type} />

                <div className="projects__card-body">
                  <h3 className="projects__card-title">{project.title}</h3>
                  <p className="projects__card-desc">{project.desc}</p>
                  <div className="projects__card-link">
                    View on GitHub <span className="projects__arrow">↗</span>
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
