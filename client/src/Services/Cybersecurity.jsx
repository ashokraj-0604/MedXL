import ServiceDetailPage from '../layouts/ServiceDetailPage'

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
  return <ServiceDetailPage config={CYBERSECURITY_CONFIG} />
}