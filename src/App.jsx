import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skill from './components/Skill'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#121212] '>
      
          <Navbar />
          <Hero />  
          <Projects/>
          <Skill/>
          <Experience/>
          <Contact/>
       
    </div>
  )
}

export default App
