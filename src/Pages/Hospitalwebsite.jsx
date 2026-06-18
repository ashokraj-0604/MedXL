import ServiceDetailPage from '../layouts/Servicedetailpage'
import { Helmet } from 'react-helmet-async'


const WEBSITE_CONFIG = {
  slug: 'website-booking',
  icon: '🌐',
  tag: 'Website & Appointment Booking',
  accentRgb: '197,45,181',

  title: 'Your Hospital Online.',
  titleHighlight: 'Professional. Fast. Booking-Ready.',
  subtitle:
    'A mobile-first hospital website with integrated online appointment booking — designed, built, and maintained entirely by MedXL.',

  stats: [
    { value: '3–4 Wks', label: 'Go Live Timeline'      },
    { value: '3×',      label: 'More Patient Inquiries' },
    { value: '24/7',    label: 'Booking Available'      },
    { value: 'Mobile',  label: '100% Responsive'        },
  ],

  features: [
    'Professional 5–10 page hospital website (plan dependent)',
    'Online appointment booking with doctor & speciality selection',
    'Doctor & department profile pages',
    'Patient inquiry & feedback forms',
    'Mobile-responsive, accessibility compliant design',
    'WhatsApp click-to-chat integration',
    'Patient testimonial & gallery pages',
    'Integration with Google Maps',
    'Blog / health tips section',
    'Contact page with map embed',
    'Custom domain setup & DNS management',
    'Hospital-branded email setup',
    'Monthly content updates (1 page/month)',
    'Google Search Console & Analytics setup',
  ],

  process: [
    {
      num: '01',
      title: 'Discovery & Design',
      text: "We understand your hospital's identity, gather content (logo, photos, specialities), and present a design mockup within 7 days.",
    },
    {
      num: '02',
      title: 'Build & Develop',
      text: 'Our team builds the full website with all pages, booking engine, and integrations. Quality tested across devices.',
    },
    {
      num: '03',
      title: 'Review & Revisions',
      text: 'You review the staging site. We incorporate feedback with up to 2 revision rounds before go-live.',
    },
    {
      num: '04',
      title: 'Launch & Handover',
      text: 'We launch the live site, submit to Google, and train your team on updating basic content.',
    },
  ],

  faqs: [
    {
      q: 'Can we update the website ourselves?',
      a: 'Yes. We provide a simple CMS for basic updates like adding news, photos, and changing doctor info. For design changes, you raise a request with your account manager.',
    },
    {
      q: 'Will the website rank on Google?',
      a: 'We set up on-page SEO, Google Search Console, and Google Analytics from day one. For active SEO and ads, the SEO & Marketing service is recommended.',
    },
    {
      q: 'Is the booking system fully automated?',
      a: 'Yes. Appointments booked online go directly to a dashboard your reception team manages. SMS/WhatsApp confirmations are sent automatically to patients.',
    },
  ],

  ctaTitle: 'Hospital Website + Appointment Booking is Part of Every MedXL Plan',
  ctaDesc: 'This service is included in our annual IT packages starting at ₹1L/year. No separate quotes needed.',
}

export default function WebsiteBookingPage() {
  return (
    <>
    <Helmet>

  <title>Hospital Website Design & Development India | MedXL</title>
  <meta name="description" content="MedXL designs professional, SEO-optimised websites for hospitals and clinics in India. Fast, mobile-friendly, and built to attract and convert patients." />
  <link rel="canonical" href="https://medxl.in/Hospitalwebsite" />
  {/* ── Open Graph ── */}
  <meta property="og:type"        content="website" />
  <meta property="og:url"         content="https://medxl.in/Hospitalwebsite" />
  <meta property="og:title"       content="Hospital Website Design & Development India | MedXL" />
  <meta property="og:description" content="MedXL designs professional, SEO-optimised websites for hospitals and clinics in India. Fast, mobile-friendly, and built to attract and convert patients." />
  <meta property="og:image"       content="https://medxl.in/assets/Favicon-BQuMKZDA.png" />
  <meta property="og:site_name"   content="MedXL" />
  <meta property="og:locale"      content="en_IN" />
  {/* ── Twitter Cards ── */}
  <meta name="twitter:card"        content="summary_large_image" />
  <meta name="twitter:site"        content="@medxl_in" />
  <meta name="twitter:url"         content="https://medxl.in/Hospitalwebsite" />
  <meta name="twitter:title"       content="Hospital Website Design & Development India | MedXL" />
  <meta name="twitter:description" content="MedXL designs professional, SEO-optimised websites for hospitals and clinics in India. Fast, mobile-friendly, and built to attract and convert patients." />
  <meta name="twitter:image"       content="https://medxl.in/assets/Favicon-BQuMKZDA.png" />
</Helmet>

      <ServiceDetailPage config={WEBSITE_CONFIG} />
    </>
  )
}