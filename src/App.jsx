import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ServicesPage from './Pages/ServicesPage'
import PricingPage from './Pages/PricingPage'
import ProductsPage from './Pages/ProductPage'
import Terms from './Pages/Terms'
import Privacy from './Pages/Privacy'
import Analytics from './Pages/Analytics'
import CyberSecurity from './Pages/Cybersecurity'
import SeoMarketing from './Pages/SeoMarketing'
import Hospitalwebsite from './Pages/Hospitalwebsite'
import SocialMedia from './Pages/Socialmedia'
import CloudHosting from './Pages/Cloudhosting'
import ITconsulting from './Pages/ITconsulting'
import Hms from './Pages/Hms'
import Ehr from './Pages/Ehr'
import Lims from './Pages/Lims'
import Lms from './Pages/Lms'
import Telemedicine from './Pages/Telemedicine'
import Mobileapp from './Pages/Mobileapp'
import Email from './Pages/Email'
import Training from './Pages/Training'
import Opbilling from './Pages/Opbilling'
import Cookies from './Pages/cookies'
import BlogPage from './Pages/Blogpage'
import BlogPostPage from './Pages/Blogpostpage'
import TeamPage from './Pages/TeamPage'
import CareerPage from './Pages/CareerPage'
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/price" element={<PricingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/CyberSecurity" element={<CyberSecurity />} />
          <Route path="/SeoMarketing" element={<SeoMarketing />} />
          <Route path="/Hospitalwebsite" element={<Hospitalwebsite />} />
          <Route path="/SocialMedia" element={<SocialMedia />} />
          <Route path="/CloudHosting" element={<CloudHosting />} />
          <Route path="/ITconsulting" element={<ITconsulting />} />
          <Route path="/Hms" element={<Hms />} />
          <Route path="/Ehr" element={<Ehr />} />
          <Route path="/Lims" element={<Lims />} />
          <Route path="/Lms" element={<Lms />} />
          <Route path="/Telemedicine" element={<Telemedicine />} />
          <Route path="/Mobileapp" element={<Mobileapp />} />
          <Route path="/Email" element={<Email />} />
          <Route path="/Training" element={<Training />} />
          <Route path="/Opbilling" element={<Opbilling />} />
          <Route path="/Cookies" element={<Cookies />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/Blog/:id" element={<BlogPostPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/careers" element={<CareerPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}