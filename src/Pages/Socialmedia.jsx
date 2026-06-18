import ServiceDetailPage from '../layouts/Servicedetailpage'
import { Helmet } from 'react-helmet-async'

const SOCIAL_CONFIG = {
  slug: 'social-media',
  icon: '📱',
  tag: 'Social Media Management',
  accentRgb: '245,166,35',

  title: 'Your Hospital on Every',
  titleHighlight: 'Platform Patients Use.',
  subtitle:
    'We create, brand, and actively manage your hospital\'s social media presence — so patients find you, trust you, and choose you.',

  stats: [
    { value: '3×',     label: 'Avg. Reach Increase' },
    { value: '8+',     label: 'Posts/Month'          },
    { value: '5',      label: 'Platforms Managed'    },
    { value: 'Reviews', label: 'Actively Managed'   },
  ],

  features: [
    'Facebook Business Page setup & optimisation',
    'Instagram Business Profile setup',
    'LinkedIn Company Page',
    'Google My Business (GMB) optimisation',
    'WhatsApp Business API setup',
    'Hospital cover photos & profile images (branded)',
    '8 branded social media posts per month (Growth+)',
    'Health awareness day posts & campaigns',
    'Patient testimonial posts (with consent)',
    'Doctor introduction reels/shorts',
    'Monthly content calendar planning',
    'Review management & response',
    'Follower growth tracking',
    'Monthly social analytics report',
  ],

  process: [
    {
      num: '01',
      title: 'Profile Creation',
      text: "We create all profiles with your hospital's branding — logo, cover photos, bio, contact details, and services listed.",
    },
    {
      num: '02',
      title: 'Content Planning',
      text: 'Each month we plan a content calendar with health tips, doctor features, patient testimonials, and awareness campaigns.',
    },
    {
      num: '03',
      title: 'Post & Publish',
      text: 'Branded posts are created and published on schedule. All posts are approved by your team before going live.',
    },
    {
      num: '04',
      title: 'Monitor & Report',
      text: 'We track engagement, respond to comments/reviews, and deliver a monthly report showing growth and reach.',
    },
  ],

  faqs: [
    {
      q: 'How many posts per month?',
      a: 'Growth plan includes 8 posts/month across all platforms. Enterprise includes 12+ posts/month including reels and stories.',
    },
    {
      q: 'Who approves the content?',
      a: 'We prepare a monthly content calendar and send it for your approval before anything is posted. Nothing goes live without your sign-off.',
    },
    {
      q: 'Do you handle negative reviews?',
      a: 'Yes. Negative reviews are flagged to your team, and we draft professional, empathetic responses for your approval before replying.',
    },
  ],

  ctaTitle: 'Social Media Management is Part of Every MedXL Plan',
  ctaDesc: 'This service is included in our annual IT packages starting at ₹1L/year. No separate quotes needed.',
}

export default function SocialMediaPage() {
  return (
    <>
<Helmet>

  <title>Social Media Marketing for Hospitals | MedXL India</title>
  <meta name="description" content="Build your hospital's brand on social media with MedXL. We manage Facebook, Instagram, and LinkedIn campaigns tailored for healthcare providers in India." />
  <link rel="canonical" href="https://medxl.in/SocialMedia" />
  {/* ── Open Graph ── */}
  <meta property="og:type"        content="website" />
  <meta property="og:url"         content="https://medxl.in/SocialMedia" />
  <meta property="og:title"       content="Social Media Marketing for Hospitals | MedXL India" />
  <meta property="og:description" content="Build your hospital's brand on social media with MedXL. We manage Facebook, Instagram, and LinkedIn campaigns tailored for healthcare providers in India." />
  <meta property="og:image"       content="https://medxl.in/assets/Favicon-BQuMKZDA.png" />
  <meta property="og:site_name"   content="MedXL" />
  <meta property="og:locale"      content="en_IN" />
  {/* ── Twitter Cards ── */}
  <meta name="twitter:card"        content="summary_large_image" />
  <meta name="twitter:site"        content="@medxl_in" />
  <meta name="twitter:url"         content="https://medxl.in/SocialMedia" />
  <meta name="twitter:title"       content="Social Media Marketing for Hospitals | MedXL India" />
  <meta name="twitter:description" content="Build your hospital's brand on social media with MedXL. We manage Facebook, Instagram, and LinkedIn campaigns tailored for healthcare providers in India." />
  <meta name="twitter:image"       content="https://medxl.in/assets/Favicon-BQuMKZDA.png" />
</Helmet>

      <ServiceDetailPage config={SOCIAL_CONFIG} />
    </>
  )
}