import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Clients from '../components/Clients'
import Services from '../components/Services'
import About from '../components/About'
import CaseStudies from '../components/CaseStudies'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/Faq'
import Blogs from '../components/Price'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Product from '../components/Product'
export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <>
      <Helmet>
        {/* ── Primary SEO ── */}
        <title>MedXL | Hospital Management Software for Private Hospitals – India</title>
        <meta name="description" content="MedXL offers an All-in-One HMS, EMR/EHR, OPD & LIS suite for private hospitals in India. Trusted by hospitals across Chennai & beyond. Request a free demo today." />
        <link rel="canonical" href="https://medxl.in/" />

        {/* ── Open Graph ── */}
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://medxl.in/" />
        <meta property="og:title"       content="MedXL | Hospital Management Software for Private Hospitals – India" />
        <meta property="og:description" content="MedXL offers an All-in-One HMS, EMR/EHR, OPD & LIS suite for private hospitals in India. Trusted by hospitals across Chennai & beyond. Request a free demo today." />
        <meta property="og:image"       content="https://medxl.in/assets/Favicon-BQuMKZDA.png" />
        <meta property="og:site_name"   content="MedXL" />
        <meta property="og:locale"      content="en_IN" />

        {/* ── Twitter Cards ── */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:site"        content="@medxl_in" />
        <meta name="twitter:url"         content="https://medxl.in/" />
        <meta name="twitter:title"       content="MedXL | Hospital Management Software for Private Hospitals – India" />
        <meta name="twitter:description" content="MedXL offers an All-in-One HMS, EMR/EHR, OPD & LIS suite for private hospitals in India. Trusted by hospitals across Chennai & beyond. Request a free demo today." />
        <meta name="twitter:image"       content="https://medxl.in/assets/Favicon-BQuMKZDA.png" />

        {/* ── Organization Schema ── */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MedXL",
            "alternateName": "MedXL Healthcare IT",
            "url": "https://medxl.in",
            "logo": "https://medxl.in/assets/Favicon-BQuMKZDA.png",
            "description": "MedXL offers an All-in-One HMS, EMR/EHR, OPD & LIS suite for private hospitals in India.",
            "foundingLocation": {
              "@type": "Place",
              "name": "Chennai, Tamil Nadu, India"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Anna Incubation Center, Second Floor, No 311, Platinum Jubilee Building, AC Tech Loop, Anna University Campus",
              "addressLocality": "Guindy, Chennai",
              "addressRegion": "Tamil Nadu",
              "postalCode": "600025",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 98840 21188",
              "contactType": "sales",
              "areaServed": "IN",
              "availableLanguage": ["English", "Tamil"]
            },
            "sameAs": [
              "https://x.com/medxl_in",
              "https://www.linkedin.com/company/medxl/",
              "https://www.instagram.com/medxl/",
              "https://www.youtube.com/@medxl"
            ]
          }
        `}</script>

        {/* ── LocalBusiness Schema ── */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "MedXL",
            "image": "https://medxl.in/assets/Favicon-BQuMKZDA.png",
            "url": "https://medxl.in",
            "telephone": "+91 98840 21188",
            "priceRange": "₹₹",
            "description": "Chennai-based healthcare IT company providing Hospital Management Software, EMR, LIMS, Telemedicine and digital health solutions for private hospitals across India.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Anna Incubation Center, Second Floor, No 311, Platinum Jubilee Building, AC Tech Loop, Anna University Campus",
              "addressLocality": "Guindy, Chennai",
              "addressRegion": "Tamil Nadu",
              "postalCode": "600025",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 13.0827,
              "longitude": 80.2707
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
              "opens": "10:00",
              "closes": "17:00"
            },
            "sameAs": [
              "https://x.com/medxl_in",
              "https://www.linkedin.com/company/medxl/",
              "https://www.instagram.com/medxl/",
              "https://www.youtube.com/@medxl"
            ]
          }
        `}</script>

        {/* ── SoftwareApplication Schema ── */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "MedXL HMS",
            "operatingSystem": "Web, Android, iOS",
            "applicationCategory": "HealthApplication",
            "url": "https://medxl.in/products",
            "description": "All-in-One Hospital Management Software with HMS, EMR/EHR, OPD Billing, LIMS, LMS and Telemedicine modules for private hospitals in India.",
            "screenshot": "https://medxl.in/assets/Favicon-BQuMKZDA.png",
            "featureList": [
              "Hospital Management System (HMS)",
              "Electronic Health Records (EHR/EMR)",
              "OPD Billing & Management",
              "Laboratory Information System (LIMS)",
              "Telemedicine",
              "Learning Management System (LMS)",
              "Healthcare Analytics",
              "Mobile App"
            ],
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
        
              "description": "Contact for pricing"
            },
            "author": {
              "@type": "Organization",
              "name": "MedXL",
              "url": "https://medxl.in"
            }
          }
        `}</script>
      </Helmet>

      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <Product />
      <About />
      <CaseStudies />
      <Process />
      <Testimonials />
      <FAQ />
      <Blogs />
      <Contact />
      <Footer />
    </>
  )
}