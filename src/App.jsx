import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ServicesPage from './Pages/ServicesPage'
import PricingPage from './Pages/PricingPage'
import ProductsPage from './Pages/ProductPage'
import Terms from './Footer/Terms'
import Privacy from './Footer/Privacy'
import Analytics from './Services/Analytics'
import CyberSecurity from './Services/Cybersecurity'
import SeoMarketing from './Services/SeoMarketing'
import Hospitalwebsite from './Services/Hospitalwebsite'
import SocialMedia from './Services/Socialmedia'
import CloudHosting from './Services/Cloudhosting'
import ITconsulting from './Services/ITconsulting'
import Hms from './Products/Hms'
import Ehr from './Products/Ehr'
import Lims from './Products/Lims'
import Lms from './Products/Lms'
import Telemedicine from './Products/Telemedicine'
import Mobileapp from './Products/Mobileapp'
import Email from './Services/Email'
import Training from './Services/Training'
import Opbilling from './Products/Opbilling'
import Cookies from './Footer/cookies'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"home       element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/price" element={<PricingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path= "/Terms" element={<Terms />} />
        <Route path= "/Privacy" element={<Privacy />} />
        <Route path= "/Analytics" element={<Analytics />} />
        <Route path= "/CyberSecurity" element={<CyberSecurity />} />
        <Route path= "/SeoMarketing" element={<SeoMarketing />} />
        <Route path= "/Hospitalwebsite" element={<Hospitalwebsite />} />
        <Route path= "/SocialMedia" element={<SocialMedia />} />
        <Route path= "/CloudHosting" element={<CloudHosting />} />
        <Route path= "/ITconsulting" element={<ITconsulting />} />
        <Route path= "/Hms" element={<Hms />} />
        <Route path= "/Ehr" element={<Ehr />} />
        <Route path= "/Lims" element={<Lims />} />
        <Route path= "/Lms" element={<Lms />} />
        <Route path= "/Telemedicine" element={<Telemedicine />} />
        <Route path= "/Mobileapp" element={<Mobileapp />} />
        <Route path= "/Email" element={<Email />} />
        <Route path= "/Training" element={<Training />} />
        <Route path= "/Opbilling" element={<Opbilling />} />
        <Route path= "/Cookies" element={<Cookies />} />
      </Routes>
    </BrowserRouter>
  )
}