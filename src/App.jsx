import './App.css'
import About from './components/About'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Partners from './components/Partners'
import Project from './components/Project'
import Services from './components/Services'

function App() {

  return (
    <div className='bg-dark '>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Project />
      <Blogs />
      <Partners />
      <Contact />
      <div className='h-20'></div>
      <Footer />
    </div>
  )
}

export default App
