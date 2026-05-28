import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Clients from '../components/Clients'
import Services from '../components/Services'
import About from '../components/About'
import CaseStudies from '../components/CaseStudies'
import Process from '../components/Process'
import Technologies from '../components/Technologies'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/Faq'
import Blogs from '../components/Price'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import {useLocation} from 'react-router-dom'
import {useEffect} from 'react'

export default function HomePage() {
  const location = useLocation()

 useEffect(() => {
  if (location.hash) {
    const element = document.querySelector(location.hash)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  } else {
    window.scrollTo(0, 0)
  }
}, [location])

  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <About />
      <CaseStudies />
      <Process />
      <Technologies />
      <Testimonials />
      <FAQ />
      <Blogs />
      <Contact />
      <Footer />
    </>
  )
}