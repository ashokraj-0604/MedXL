import ServiceDetailPage from '../layouts/Servicedetailpage'
import { Helmet } from 'react-helmet-async'

const SEO_CONFIG = {
  slug: 'seo-marketing',
  icon: '🔍',
  tag: 'SEO & Digital Marketing',
  accentRgb: '197,45,181',

  title: 'Be Found When Patients',
  titleHighlight: 'Search for You.',
  subtitle:
    'We position your hospital at the top of Google search results for patients in your area — through local SEO, Google Ads, and health content marketing.',

  stats: [
    { value: 'Top 3',  label: 'Google Local Ranking Goal' },
    { value: '3–6 Mo', label: 'Organic Results'           },
    { value: 'Day 1',  label: 'Ads Go Live'               },
    { value: '2/Mo',   label: 'Blog Articles'             },
  ],

  features: [
    "Local SEO — optimise for 'hospital near me' searches",
    'Google Business Profile (GBP) optimisation & posts',
    'Google Ads campaign setup & management',
    'Monthly keyword research & rank tracking',
    'On-page SEO — meta tags, schema markup, headings',
    '2 health blog articles per month',
    'Patient review generation strategy',
    'Competitor SEO analysis',
    'Backlink building from health directories',
    'Google Analytics 4 setup & monthly report',
    'Search Console monitoring',
    'Page speed optimisation',
    'Schema markup for doctors, services & reviews',
    'Monthly ROI report (traffic, leads, conversions)',
  ],

  process: [
    {
      num: '01',
      title: 'Audit & Research',
      text: 'We audit your current online presence, research high-intent local keywords, and map competitor rankings.',
    },
    {
      num: '02',
      title: 'On-Page Optimisation',
      text: 'All website pages are optimised — meta tags, headings, schema, images, and content quality.',
    },
    {
      num: '03',
      title: 'Google Ads & GMB',
      text: 'We set up and manage Google Search Ads and optimise your GMB listing for maximum local visibility.',
    },
    {
      num: '04',
      title: 'Content & Reporting',
      text: 'Monthly blog posts are published, backlinks built, and a ranking + ROI report delivered to management.',
    },
  ],

  faqs: [
    {
      q: 'How long before I see results?',
      a: 'SEO results typically become visible within 3–6 months. Google Ads deliver traffic from day one of launch.',
    },
    {
      q: 'How much is the Google Ads budget?',
      a: 'The ad budget is separate from the MedXL service fee and is paid directly to Google. We recommend ₹10,000–₹30,000/month based on your city and competition.',
    },
    {
      q: 'Do you write the blog content?',
      a: 'Yes. Two health blog articles per month are written by our content team — medically reviewed before publishing.',
    },
  ],

  ctaTitle: 'SEO & Digital Marketing is Part of Every MedXL Plan',
  ctaDesc: 'This service is included in our annual IT packages starting at ₹1L/year. No separate quotes needed.',
}

export default function SeoMarketingPage() {
  return (
    <>
    <Helmet>
 
  <title>Digital Marketing for Hospitals India | MedXL SEO Services</title>
  <meta name="description" content="MedXL offers SEO and digital marketing services exclusively for hospitals and healthcare providers in India. Grow your patient base with data-driven online marketing." />
  <link rel="canonical" href="https://medxl.in/SeoMarketing" />
  {/* ── Open Graph ── */}
  <meta property="og:type"        content="website" />
  <meta property="og:url"         content="https://medxl.in/SeoMarketing" />
  <meta property="og:title"       content="Digital Marketing for Hospitals India | MedXL SEO Services" />
  <meta property="og:description" content="MedXL offers SEO and digital marketing services exclusively for hospitals and healthcare providers in India. Grow your patient base with data-driven online marketing." />
  <meta property="og:image"       content="https://medxl.in/assets/Favicon-BQuMKZDA.png" />
  <meta property="og:site_name"   content="MedXL" />
  <meta property="og:locale"      content="en_IN" />
  {/* ── Twitter Cards ── */}
  <meta name="twitter:card"        content="summary_large_image" />
  <meta name="twitter:site"        content="@medxl_in" />
  <meta name="twitter:url"         content="https://medxl.in/SeoMarketing" />
  <meta name="twitter:title"       content="Digital Marketing for Hospitals India | MedXL SEO Services" />
  <meta name="twitter:description" content="MedXL offers SEO and digital marketing services exclusively for hospitals and healthcare providers in India. Grow your patient base with data-driven online marketing." />
  <meta name="twitter:image"       content="https://medxl.in/assets/Favicon-BQuMKZDA.png" />
</Helmet>

      <ServiceDetailPage config={SEO_CONFIG} />
    </>
  )
}