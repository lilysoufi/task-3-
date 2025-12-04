import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Benefits from './components/Benefits/Benefits'
import Hero from './components/Hero/Hero'
import SectionHeader from './components/SectionHeader/SectionHeader'

import Navigate from './components/Navigate/Navigate'
import Footer from './components/Footer/Footer'
import FAQ from './components/FAQ/FAQ'
import TestimonialCardSlider from './components/Testimonial/TestimonialCarsSlider.jsx'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Academics from './pages/Academics.jsx'
import Admissions from './components/Admissions/Admissions.jsx'
import StudentLife from './pages/StudentLife.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/about' element ={<About />} />
        <Route path='/academics' element ={<Academics />} />
        <Route path='/admissions' element={<Admissions />} />
        <Route path='/studentlife' element={<StudentLife />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
