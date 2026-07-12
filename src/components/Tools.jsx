import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiPython, SiPostgresql,
  SiReact, SiJavascript, SiHtml5,
  SiGit, SiGithub, SiJupyter, SiMysql, SiFlask, SiLinux,
} from 'react-icons/si'
import { BarChart3, PieChart, Sheet, FileCode2, TerminalSquare } from 'lucide-react'
import './Tools.css'

const tools = [
  { name: 'Python',      icon: <SiPython size={22} /> },
  { name: 'SQL',         icon: <SiPostgresql size={22} /> },
  { name: 'Tableau',     icon: <BarChart3 size={22} strokeWidth={1.5} /> },
  { name: 'Power BI',    icon: <PieChart size={22} strokeWidth={1.5} /> },
  { name: 'Excel',       icon: <Sheet size={22} strokeWidth={1.5} /> },
  { name: 'React.js',    icon: <SiReact size={22} /> },
  { name: 'JavaScript',  icon: <SiJavascript size={22} /> },
  { name: 'HTML & CSS',  icon: <SiHtml5 size={22} /> },
  { name: 'Git',         icon: <SiGit size={22} /> },
  { name: 'GitHub',      icon: <SiGithub size={22} /> },
  { name: 'Jupyter',     icon: <SiJupyter size={22} /> },
  { name: 'MySQL',       icon: <SiMysql size={22} /> },
  { name: 'Flask',       icon: <SiFlask size={22} /> },
  { name: 'Linux',       icon: <SiLinux size={22} /> },
  { name: 'VS Code',     icon: <FileCode2 size={22} strokeWidth={1.5} /> },
  { name: 'Terminal',    icon: <TerminalSquare size={22} strokeWidth={1.5} /> },
]

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Tools() {
  return (
    <section className="tools" id="tools">
      <div className="section">
        <FadeUp>
          <span className="tools__eyebrow">TECH STACK</span>
          <h2 className="tools__heading serif-heading">The utilities that power the systems.</h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="tools__grid">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                className="tools__item"
                title={tool.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.4 }}
                whileHover={{ y: -3 }}
              >
                <div className="tools__icon">{tool.icon}</div>
                <span className="tools__name">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

