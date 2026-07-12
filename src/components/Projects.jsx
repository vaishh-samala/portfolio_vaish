import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import './Projects.css'

const projects = [
  {
    title: 'AI-Driven Cloud Security Threat Predictor',
    category: 'SECURITY ML SYSTEM • 2026',
    desc: 'Built an autonomous security engine using machine learning models (Random Forest, XGBoost, Isolation Forest) to detect anomalous behavior patterns in cloud system logs. Integrated Explainable AI (XAI) for interpretable log explanations and live React dashboards with instant alert triggers.',
    github: 'https://github.com/vaishh-samala/AI-driven-Cloud-Security-Threat-Predictor',
    metrics: [
      { value: '94%', label: 'anomaly precision' },
      { value: 'Real-time', label: 'alerts dispatch' },
      { value: 'XAI', label: 'explainable feedback' }
    ],
    type: 'security'
  },
  {
    title: 'Sales Performance Analytics (Northwind DB)',
    category: 'DATA INFRASTRUCTURE & SQL • 2025',
    desc: 'Wrote robust, production-grade SQL (joins, CTEs, and window functions) to analyze a relational database with over 830 orders. Engineered monthly growth analytics using LAG(), identified dormant customers, and isolated key operational bottlenecks.',
    github: 'https://github.com/vaishh-samala/sales-performance-analysis',
    metrics: [
      { value: '14', label: 'tables cross-joined' },
      { value: 'MoM', label: 'revenue trends' },
      { value: '4.57%', label: 'late shipment flags' }
    ],
    type: 'data-sql'
  },
  {
    title: 'Customer Churn & Retention Analytics Dashboard',
    category: 'DATA ANALYTICS & DASHBOARD • 2025',
    desc: 'Analyzed a 7,000+ row customer dataset in Python, then designed a detailed, interactive Tableau dashboard to visualize retention factors. Discovered high-correlation customer behaviors (e.g., month-to-month contracts vs. long term contract churn).',
    github: 'https://github.com/vaishh-samala/customer-churn-analysis',
    metrics: [
      { value: '7,043', label: 'customer profiles' },
      { value: '43%', label: 'high-risk contract churn' },
      { value: '4', label: 'interactive dashboard panels' }
    ],
    type: 'data-tableau'
  }
]

function ProjectVisual({ type }) {
  if (type === 'security') {
    return (
      <div className="project-visual project-visual--terminal">
        <div className="project-visual__browser-bar">
          <span /><span /><span />
        </div>
        <div className="project-visual__terminal-body">
          <div className="project-visual__terminal-line project-visual__terminal-line--green">&gt; threat_monitor --run</div>
          <div className="project-visual__terminal-line">&gt; analyzing cloud logs...</div>
          <div className="project-visual__terminal-line project-visual__terminal-line--warning">&gt; anomaly_score: 0.87 [HIGH RISK]</div>
          <div className="project-visual__terminal-line">&gt; features: unusual_time, root_access</div>
          <div className="project-visual__terminal-line project-visual__terminal-line--alert">&gt; active threat block triggered.</div>
        </div>
      </div>
    )
  }
  
  if (type === 'data-sql') {
    return (
      <div className="project-visual project-visual--sql">
        <div className="project-visual__browser-bar">
          <span /><span /><span />
        </div>
        <div className="project-visual__sql-body">
          <div className="project-visual__sql-line"><span className="sql-keyword">WITH</span> MonthlySales <span className="sql-keyword">AS</span> (</div>
          <div className="project-visual__sql-line" style={{ paddingLeft: '20px' }}><span className="sql-keyword">SELECT</span> DATE_TRUNC(<span className="sql-string">'month'</span>, OrderDate)</div>
          <div className="project-visual__sql-line" style={{ paddingLeft: '40px' }}><span className="sql-keyword">SUM</span>(UnitPrice * Quantity) <span className="sql-keyword">AS</span> Revenue</div>
          <div className="project-visual__sql-line" style={{ paddingLeft: '20px' }}><span className="sql-keyword">FROM</span> OrderDetails</div>
          <div className="project-visual__sql-line">) <span className="sql-keyword">SELECT</span> Revenue, <span className="sql-keyword">LAG</span>(Revenue) OVER() <span className="sql-keyword">FROM</span> MonthlySales</div>
        </div>
      </div>
    )
  }

  return (
    <div className="project-visual project-visual--chart">
      <div className="project-visual__browser-bar">
        <span /><span /><span />
      </div>
      <div className="project-visual__chart-body">
        <div className="project-visual__bar-chart">
          {[40, 75, 55, 95, 30, 85, 60].map((h, i) => (
            <div key={i} className="project-visual__bar-col" style={{ height: `${h}%` }}>
              <span className="project-visual__bar-tooltip">{h}%</span>
            </div>
          ))}
        </div>
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
      initial={{ opacity: 0, y: 32 }}
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
          <span className="projects__eyebrow">SELECTED CASE STUDIES</span>
          <h2 className="projects__heading serif-heading">
            Case studies that show security & data judgment, not just code.
          </h2>
          <p className="projects__subheading">
            Three core product stories grounded in analytics models, real codebases, and verified metrics.
          </p>
        </FadeUp>

        <div className="projects__list">
          {projects.map((project, i) => (
            <div key={project.title} className={`projects__item ${i % 2 !== 0 ? 'projects__item--reverse' : ''}`}>
              <FadeUp delay={0.15}>
                <ProjectVisual type={project.type} />
              </FadeUp>

              <FadeUp delay={0.25}>
                <div className="projects__details">
                  <span className="projects__category">{project.category}</span>
                  <h3 className="projects__item-title serif-heading">{project.title}</h3>
                  <p className="projects__item-desc">{project.desc}</p>
                  
                  <div className="projects__metrics-grid">
                    {project.metrics.map(m => (
                      <div key={m.label} className="projects__metric">
                        <span className="projects__metric-val serif-heading">{m.value}</span>
                        <span className="projects__metric-label">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="projects__cta"
                  >
                    <span>View project on GitHub</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </FadeUp>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

