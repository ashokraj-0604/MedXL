import ServiceDetailPage from '../layouts/Servicedetailpage'
import { Helmet } from 'react-helmet-async'


const CYBERSECURITY_CONFIG = {
  slug: 'cybersecurity',
  icon: '🛡️',
  tag: 'Cybersecurity & Compliance',
  accentRgb: '239,68,68',       // rose-red — signals security / protection

  title: 'Patient Data Protected.',
  titleHighlight: 'Compliance Guaranteed.',
  subtitle:
    'We protect your hospital\'s digital infrastructure and ensure compliance with HIPAA, India\'s DPDP Act, and ABDM security standards.',

  stats: [
    { value: 'HIPAA',     label: 'Equivalent Standards'  },
    { value: 'DPDP',      label: 'Act Compliant'          },
    { value: 'Quarterly', label: 'Vulnerability Scan'     },
    { value: 'Annual',    label: 'Penetration Test'       },
  ],

  features: [
    'SSL certificate & HTTPS enforcement',
    'Web application firewall (WAF) setup',
    'Intrusion detection & prevention (IDS/IPS)',
    'Role-based access control (RBAC) implementation',
    'End-to-end data encryption (at rest & in transit)',
    'Two-factor authentication for all admin portals',
    'Audit log management & review',
    'HIPAA compliance assessment & gap report',
    'DPDP Act privacy policy & data handling compliance',
    'Annual cybersecurity penetration test (Enterprise)',
    'Vulnerability scanning (quarterly)',
    'Staff security awareness training',
    'Incident response plan documentation',
    'ABDM security standard compliance',
  ],

  process: [
    {
      num: '01',
      title: 'Security Audit',
      text: 'We assess your current digital infrastructure for vulnerabilities — websites, servers, software, and access controls.',
    },
    {
      num: '02',
      title: 'Hardening & Setup',
      text: 'Firewalls, WAF, encryption, RBAC, and MFA are configured across all systems.',
    },
    {
      num: '03',
      title: 'Policy Documentation',
      text: "We draft and deliver your hospital's IT Security Policy, HIPAA/DPDP compliance documents, and incident response plan.",
    },
    {
      num: '04',
      title: 'Ongoing Monitoring',
      text: 'Continuous log monitoring, quarterly vulnerability scans, and annual penetration testing keep you protected year-round.',
    },
  ],

  faqs: [
    {
      q: 'Do we need HIPAA compliance if we\'re an Indian hospital?',
      a: 'While HIPAA is a US regulation, MedXL follows HIPAA-equivalent standards as best practice. For Indian compliance, we specifically address the DPDP Act 2023 and ABDM security guidelines.',
    },
    {
      q: 'What is covered in the annual security audit?',
      a: 'The audit covers web application testing, server configuration review, access control verification, staff phishing simulation, and a written report with remediation plan.',
    },
    {
      q: 'How do you train staff on security?',
      a: 'We conduct a 2-hour security awareness workshop covering phishing, password hygiene, data handling, and reporting incidents — available in English, Hindi, and Tamil.',
    },
  ],

  ctaTitle: 'Cybersecurity & Compliance is Part of Every MedXL Plan',
  ctaDesc:
    'This service is included in our annual IT packages starting at ₹1L/year. No separate quotes needed.',
}

export default function CybersecurityPage() {
  return (
    <>
     <Helmet>

  <title>Healthcare Cybersecurity Solutions | MedXL India</title>
  <meta name="description" content="Protect your hospital's patient data with MedXL's cybersecurity solutions. HIPAA-aligned data security, threat monitoring, and compliance for healthcare organisations in India." />
  <link rel="canonical" href="https://medxl.in/CyberSecurity" />
  {/* ── Open Graph ── */}
  <meta property="og:type"        content="website" />
  <meta property="og:url"         content="https://medxl.in/CyberSecurity" />
  <meta property="og:title"       content="Healthcare Cybersecurity Solutions | MedXL India" />
  <meta property="og:description" content="Protect your hospital's patient data with MedXL's cybersecurity solutions. HIPAA-aligned data security, threat monitoring, and compliance for healthcare organisations in India." />
  <meta property="og:image"       content="https://medxl.in/assets/Favicon-BQuMKZDA.png" />
  <meta property="og:site_name"   content="MedXL" />
  <meta property="og:locale"      content="en_IN" />
  {/* ── Twitter Cards ── */}
  <meta name="twitter:card"        content="summary_large_image" />
  <meta name="twitter:site"        content="@medxl_in" />
  <meta name="twitter:url"         content="https://medxl.in/CyberSecurity" />
  <meta name="twitter:title"       content="Healthcare Cybersecurity Solutions | MedXL India" />
  <meta name="twitter:description" content="Protect your hospital's patient data with MedXL's cybersecurity solutions. HIPAA-aligned data security, threat monitoring, and compliance for healthcare organisations in India." />
  <meta name="twitter:image"       content="https://medxl.in/assets/Favicon-BQuMKZDA.png" />
</Helmet>

      <ServiceDetailPage config={CYBERSECURITY_CONFIG} />
    </>
  )
}