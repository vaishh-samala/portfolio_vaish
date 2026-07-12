import { useState } from 'react'
import './components/Navbar.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Tools from './components/Tools'
import Contact from './components/Contact'
import Preloader from './components/Preloader'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <Preloader onComplete={() => setLoading(false)} />
      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Projects />
            <About />
            <Tools />
            <Contact />
          </main>
        </>
      )}
    </>
  )
}



