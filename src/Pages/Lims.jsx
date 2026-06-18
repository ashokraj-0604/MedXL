import ProductDetailPage from '../layouts/Productdetailpage'
import { Helmet } from 'react-helmet-async'

const LIMS_CONFIG = {
  slug: 'lims',
  icon: '🔬',
  tag: 'Lab Information System (LIMS)',
  badgeLabel: 'Hospital LIMS',
  accentRgb: '251,113,133',

  title: 'From Sample to Report.',
  titleHighlight: 'Fully Automated.',

  subtitle:
    'LIMS connects your lab workflow from test ordering right through to digital report delivery — reducing turnaround time and eliminating manual errors.',

  stats: [
    { value: '99.9%', label: 'Uptime SLA'      },
    { value: 'NABL',  label: 'Ready'            },
    { value: '3–6',   label: 'Weeks to Go Live' },
    { value: 'Cloud', label: 'SaaS Based'       },
  ],

  features: [
    'Test order entry from OPD/EHR/counter',
    'Sample collection & barcode labelling',
    'Sample tracking across lab sections',
    'Result entry with normal range flags',
    'Quality control (QC) management',
    'Auto-calculation formulas for panels',
    'Digital report generation & approval workflow',
    'Patient result delivery via SMS/WhatsApp/portal',
    'Referring doctor result sharing',
    'Instrument interface (HL7, ASTM)',
    'NABL-ready documentation',
    'TAT (Turnaround Time) monitoring',
    'Inventory & reagent management',
    'Lab analytics & revenue reports',
  ],

  modules: [
    {
      icon: '🧪',
      name: 'Sample Management',
      desc: 'Barcode-based sample collection, labelling, and tracking across haematology, biochemistry, microbiology, and more.',
    },
    {
      icon: '📋',
      name: 'Result Entry & Validation',
      desc: 'Structured result entry with normal ranges, critical value alerts, and two-level verification workflow.',
    },
    {
      icon: '🔧',
      name: 'Instrument Interface',
      desc: 'Direct bidirectional interface with Mindray, Sysmex, Siemens, and other major analyser brands via HL7/ASTM.',
    },
    {
      icon: '📄',
      name: 'Report Generation',
      desc: 'Professional branded lab reports with doctor sign-off, auto-delivered to patients via SMS and WhatsApp.',
    },
    {
      icon: '📊',
      name: 'QC Management',
      desc: 'Levey-Jennings charts, Westgard rules, and QC lot management for NABL ISO 15189 compliance.',
    },
    {
      icon: '📦',
      name: 'Inventory & Reagent',
      desc: 'Real-time stock tracking, expiry alerts, low-stock notifications, and purchase order management.',
    },
  ],

  process: [
    {
      num: '01',
      title: 'Test Panel Setup',
      text: 'We configure your test menu, normal ranges, reference intervals, and auto-calculation formulas for all panels.',
    },
    {
      num: '02',
      title: 'Instrument Integration',
      text: 'Bidirectional interfaces are set up with your existing analysers — most major brands supported within days.',
    },
    {
      num: '03',
      title: 'QC Configuration',
      text: 'QC controls, Levey-Jennings charts, and Westgard rules are configured per NABL ISO 15189 requirements.',
    },
    {
      num: '04',
      title: 'Go Live & Validation',
      text: 'Parallel run period to validate results, followed by full cutover with dedicated support during the first week.',
    },
  ],

  faqs: [
    {
      q: 'Does LIMS support NABL accreditation?',
      a: 'Yes. MedXL LIMS is designed with NABL ISO 15189 documentation requirements in mind, including QC records, instrument calibration logs, and audit trails.',
    },
    {
      q: 'Can patients access their reports online?',
      a: 'Yes. Reports are delivered via SMS link, WhatsApp, and through the hospital patient portal and mobile app.',
    },
    {
      q: 'Which instruments does LIMS support?',
      a: 'We support most major brands including Mindray, Sysmex, Abbott, Beckman Coulter, and Siemens via HL7 and ASTM interfaces.',
    },
    {
      q: 'Can LIMS work without HMS?',
      a: 'Yes. LIMS can be deployed as a standalone system with manual test order entry, or integrated with MedXL HMS and EHR.',
    },
  ],

  ctaTitle: 'Ready to See LIMS Live?',
  ctaDesc:
    "Book a free 30-minute demo. We'll walk you through sample tracking, instrument integration, and NABL-ready QC management.",
}

export default function LIMSPage() {
  return (
    <>
    <Helmet>

  <title>Laboratory Information Management System | MedXL LIMS India</title>
  <meta name="description" content="MedXL LIMS streamlines lab workflows, test reporting, and sample tracking for hospital laboratories in India. Integrated with HMS for seamless operations." />
  <link rel="canonical" href="https://medxl.in/Lims" />
  {/* ── Open Graph ── */}
  <meta property="og:type"        content="website" />
  <meta property="og:url"         content="https://medxl.in/Lims" />
  <meta property="og:title"       content="Laboratory Information Management System | MedXL LIMS India" />
  <meta property="og:description" content="MedXL LIMS streamlines lab workflows, test reporting, and sample tracking for hospital laboratories in India. Integrated with HMS for seamless operations." />
  <meta property="og:image"       content="https://medxl.in/assets/Favicon-BQuMKZDA.png" />
  <meta property="og:site_name"   content="MedXL" />
  <meta property="og:locale"      content="en_IN" />
  {/* ── Twitter Cards ── */}
  <meta name="twitter:card"        content="summary_large_image" />
  <meta name="twitter:site"        content="@medxl_in" />
  <meta name="twitter:url"         content="https://medxl.in/Lims" />
  <meta name="twitter:title"       content="Laboratory Information Management System | MedXL LIMS India" />
  <meta name="twitter:description" content="MedXL LIMS streamlines lab workflows, test reporting, and sample tracking for hospital laboratories in India. Integrated with HMS for seamless operations." />
  <meta name="twitter:image"       content="https://medxl.in/assets/Favicon-BQuMKZDA.png" />
</Helmet>

      <ProductDetailPage config={LIMS_CONFIG} />
    </>
  )
}