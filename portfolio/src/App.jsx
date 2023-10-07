
import './App.css'
import AboutMe from './components/Aboutme/AboutMe'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import { Toaster } from 'react-hot-toast'

function App() {
 

  return (
    <>
    <Toaster/>
    <Navbar />
    <Header />
    <AboutMe />
    <Services />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App
