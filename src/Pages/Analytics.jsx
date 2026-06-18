import ServiceDetailPage from '../layouts/Servicedetailpage'
import { Helmet } from 'react-helmet-async'

const ANALYTICS_CONFIG = {
  slug: 'analytics',
  icon: '📊',
  tag: 'Data Analytics & Reporting',
  accentRgb: '0,175,160',       // teal — matches MedXL primary

  title: 'Turn Data into',
  titleHighlight: 'Hospital Decisions.',
  subtitle:
    'MedXL delivers monthly analytics reports covering every key metric — from website visitors to patient acquisition cost — so hospital leadership makes data-driven decisions.',

  stats: [
    { value: 'Monthly',   label: 'Report Delivery'      },
    { value: '10+',       label: 'Data Sources'          },
    { value: 'Real-Time', label: 'Enterprise Dashboard'  },
    { value: 'PDF',       label: 'Branded Reports'       },
  ],

  features: [
    'Monthly website traffic & source analysis',
    'Patient acquisition funnel — visit → booking → admission',
    'Google Ads performance & ROI report',
    'Social media reach, engagement & growth',
    'Search engine ranking position tracking',
    'Hospital OPD/IPD volume trends',
    'Revenue analytics & payer mix analysis',
    'Patient satisfaction score tracking',
    'Department-wise performance metrics',
    'Appointment booking conversion rate',
    'Lead source attribution (how patients find you)',
    'Bed occupancy & efficiency metrics (Enterprise)',
    'Real-time BI dashboard (Enterprise plan)',
    'Executive summary for management',
  ],

  process: [
    {
      num: '01',
      title: 'Data Connection',
      text: 'We connect Google Analytics, Search Console, CRM, Ads, and HMS data sources to our reporting pipeline.',
    },
    {
      num: '02',
      title: 'Dashboard Build',
      text: 'A custom dashboard is built for your hospital — reflecting your KPIs, departments, and reporting cadence.',
    },
    {
      num: '03',
      title: 'Monthly Report Delivery',
      text: 'A branded PDF + live dashboard link is delivered to your management team on the 5th of every month.',
    },
    {
      num: '04',
      title: 'Review & Strategy',
      text: 'Each report is accompanied by a brief commentary — what changed, why, and what to do about it.',
    },
  ],

  faqs: [
    {
      q: 'What format are the reports in?',
      a: 'A branded PDF report is emailed monthly. Enterprise plans also get a live web-based dashboard updated in real time.',
    },
    {
      q: 'Which data sources does MedXL connect?',
      a: 'Google Analytics 4, Search Console, Google Ads, Facebook Insights, Instagram, MedXL HMS, and appointment booking data.',
    },
    {
      q: 'Can the reports be customised?',
      a: "Yes. Your account manager can configure the report to show only the metrics relevant to your management team's priorities.",
    },
  ],

  ctaTitle: 'Data Analytics & Reporting is Part of Every MedXL Plan',
  ctaDesc:
    'This service is included in our annual IT packages starting at ₹1L/year. No separate quotes needed.',
}

export default function AnalyticsPage() {
  return (
    <>
    <Helmet>
 
  <title>Healthcare Analytics & Reporting | MedXL Hospital Insights India</title>
  <meta name="description" content="MedXL's healthcare analytics platform gives hospital administrators real-time insights into revenue, patient flow, clinical outcomes, and operational efficiency." />
  <link rel="canonical" href="https://medxl.in/Analytics" />
  {/* ── Open Graph ── */}
  <meta property="og:type"        content="website" />
  <meta property="og:url"         content="https://medxl.in/Analytics" />
  <meta property="og:title"       content="Healthcare Analytics & Reporting | MedXL Hospital Insights India" />
  <meta property="og:description" content="MedXL's healthcare analytics platform gives hospital administrators real-time insights into revenue, patient flow, clinical outcomes, and operational efficiency." />
  <meta property="og:image"       content="https://medxl.in/assets/Favicon-BQuMKZDA.png" />
  <meta property="og:site_name"   content="MedXL" />
  <meta property="og:locale"      content="en_IN" />
  {/* ── Twitter Cards ── */}
  <meta name="twitter:card"        content="summary_large_image" />
  <meta name="twitter:site"        content="@medxl_in" />
  <meta name="twitter:url"         content="https://medxl.in/Analytics" />
  <meta name="twitter:title"       content="Healthcare Analytics & Reporting | MedXL Hospital Insights India" />
  <meta name="twitter:description" content="MedXL's healthcare analytics platform gives hospital administrators real-time insights into revenue, patient flow, clinical outcomes, and operational efficiency." />
  <meta name="twitter:image"       content="https://medxl.in/assets/Favicon-BQuMKZDA.png" />
</Helmet>

      <ServiceDetailPage config={ANALYTICS_CONFIG} />
    </>
  )
}