import ServiceDetailPage from '../layouts/Servicedetailpage'
import { Helmet } from 'react-helmet-async'

const HOSTING_CONFIG = {
  slug: 'hosting',
  icon: '☁️',
  tag: 'Cloud Hosting & Maintenance',
  accentRgb: '96,165,250',

  title: '99.9% Uptime. Zero',
  titleHighlight: 'IT Headaches.',
  subtitle:
    "Fully managed, HIPAA-compliant cloud hosting for your hospital's website and software. We handle everything — servers, backups, security, and updates.",

  stats: [
    { value: '99.9%',   label: 'Uptime SLA'        },
    { value: 'Daily',   label: 'Backups'            },
    { value: '30 Days', label: 'Backup Retention'   },
    { value: '24×7',    label: 'Monitoring'         },
  ],

  features: [
    '99.9% uptime SLA with penalty provisions',
    'Hosting on Indian cloud infrastructure (AWS / Azure India)',
    'Free SSL certificate (auto-renewed)',
    'Global CDN for fast page loads',
    'Daily automated backups with 30-day retention',
    '24×7 server monitoring & incident alerts',
    'Monthly security patches & CMS updates',
    'Malware scanning & firewall protection',
    'DDoS protection',
    'Database performance optimisation',
    'Staging environment for testing updates',
    'Load balancing for high traffic periods',
    'Disaster recovery plan & documentation',
    'Monthly uptime & performance report',
  ],

  process: [
    {
      num: '01',
      title: 'Server Setup',
      text: "We provision your hospital's dedicated cloud environment with appropriate resources based on traffic and software needs.",
    },
    {
      num: '02',
      title: 'Security Hardening',
      text: 'Firewall rules, fail2ban, SSL, RBAC, and access control policies are configured and documented.',
    },
    {
      num: '03',
      title: 'Monitoring Setup',
      text: 'We configure 24×7 uptime monitoring with alerting so any downtime is detected and resolved within our SLA window.',
    },
    {
      num: '04',
      title: 'Monthly Maintenance',
      text: 'Monthly security patches, WordPress/CMS updates, database optimisation, and backup verification.',
    },
  ],

  faqs: [
    {
      q: 'What happens if my website goes down?',
      a: 'We monitor uptime 24×7. If downtime exceeds SLA thresholds, our team is alerted and begins resolution immediately. Enterprise plan customers get a dedicated emergency line.',
    },
    {
      q: 'Where is my data physically hosted?',
      a: 'On AWS India (Mumbai region) or Azure India (Pune/Chennai) — all data remains within Indian territory, compliant with DPDP Act.',
    },
    {
      q: 'Can I migrate my existing hosting to MedXL?',
      a: 'Yes. We handle full website and database migration from your current host to MedXL infrastructure with zero expected downtime.',
    },
  ],

  ctaTitle: 'Cloud Hosting & Maintenance is Part of Every MedXL Plan',
  ctaDesc: 'This service is included in our annual IT packages starting at ₹1L/year. No separate quotes needed.',
}

export default function CloudHostingPage() {
  return (
    <>
    <Helmet>

  <title>Cloud Hosting for Hospitals India | MedXL Secure Healthcare Cloud</title>
  <meta name="description" content="MedXL provides secure, HIPAA-aligned cloud hosting for hospitals and healthcare applications in India. High uptime, data backup, and 24/7 support." />
  <link rel="canonical" href="https://medxl.in/CloudHosting" />
  {/* ── Open Graph ── */}
  <meta property="og:type"        content="website" />
  <meta property="og:url"         content="https://medxl.in/CloudHosting" />
  <meta property="og:title"       content="Cloud Hosting for Hospitals India | MedXL Secure Healthcare Cloud" />
  <meta property="og:description" content="MedXL provides secure, HIPAA-aligned cloud hosting for hospitals and healthcare applications in India. High uptime, data backup, and 24/7 support." />
  <meta property="og:image"       content="https://medxl.in/assets/Favicon-BQuMKZDA.png" />
  <meta property="og:site_name"   content="MedXL" />
  <meta property="og:locale"      content="en_IN" />
  {/* ── Twitter Cards ── */}
  <meta name="twitter:card"        content="summary_large_image" />
  <meta name="twitter:site"        content="@medxl_in" />
  <meta name="twitter:url"         content="https://medxl.in/CloudHosting" />
  <meta name="twitter:title"       content="Cloud Hosting for Hospitals India | MedXL Secure Healthcare Cloud" />
  <meta name="twitter:description" content="MedXL provides secure, HIPAA-aligned cloud hosting for hospitals and healthcare applications in India. High uptime, data backup, and 24/7 support." />
  <meta name="twitter:image"       content="https://medxl.in/assets/Favicon-BQuMKZDA.png" />
</Helmet>

      <ServiceDetailPage config={HOSTING_CONFIG} />
    </>
  )
}