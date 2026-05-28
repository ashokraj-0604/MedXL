import LegalPage from '../layouts/Legaldetailpage'

const noticeText = (
  <>
    <p>
      <strong>MedXL Ventures Private Limited</strong> ("MedXL", "we", "us") is committed to
      protecting the privacy and security of personal data entrusted to us. This Privacy Policy
      explains how we collect, use, store, share, and protect information gathered through{' '}
      <strong>www.medxl.in</strong> and through the IT services and software products we provide
      to hospital clients.
    </p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
      {['DPDP Act 2023', 'ABDM Health Data Management Policy', 'HIPAA-Equivalent Standards'].map(c => (
        <span key={c} style={{
          fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '1.5px',
          textTransform: 'uppercase', color: 'var(--text-muted)',
          background: 'rgba(0,175,160,.10)', border: '1px solid rgba(0,175,160,.25)',
          padding: '4px 12px', borderRadius: 6,
        }}>{c}</span>
      ))}
    </div>
  </>
)

const PRIVACY_CONFIG = {
  title: 'Privacy',
  titleHighlight: 'Policy',
  description:
    'How MedXL collects, uses, protects, and handles your data — and your rights as a data principal. This policy governs all personal and patient data entrusted to MedXL Ventures Private Limited.',
  accentRgb: '0,175,160',
  noticeIcon: '🔒',
  noticeText,
  chips: [
    { label: 'Effective: 1 January 2025', dot: '#22C55E' },
    { label: 'Last Updated: 1 May 2025',  dot: '#F5A623' },
    { label: 'DPDP Act 2023',             dot: '#C52DB5' },
    { label: 'HIPAA Standards',           dot: '#60A5FA' },
  ],
  navCta: { label: 'Privacy Queries', href: 'mailto:privacy@medxl.in' },
  breadcrumb: 'Privacy Policy',
  sections: [
    {
      id: 'who-this-applies',
      num: '01',
      title: 'Who This Policy Applies To',
      content: [
        'Website visitors — anyone browsing medxl.in.',
        'Prospective clients — hospital administrators or decision-makers submitting enquiry forms.',
        'Client organisations — hospitals, clinics, and healthcare institutions that have contracted MedXL services.',
        'End users of client systems — patients, doctors, nurses, and admin staff using MedXL-powered software deployed at client hospitals.',
      ],
    },
    {
      id: 'data-we-collect',
      num: '02',
      title: 'Data We Collect',
      content: [
        'Contact Data: Name, email, phone number, hospital name, and designation — collected via enquiry forms, WhatsApp, and email.',
        'Usage Data: Browser type, IP address, pages visited, session duration, and referrer URL — collected via Google Analytics and server logs.',
        'Business Data: Hospital registration details, GST number, billing address, and contract details — collected during the onboarding process.',
        'Patient Data (via client systems): Name, ABHA ID, contact details, diagnosis, prescriptions, and lab results — processed on behalf of the client hospital via their HMS, EHR, or LIMS.',
        'Staff Data (via client systems): Name, designation, email, training records, and login credentials — sourced from LMS and HMS user management.',
      ],
    },
    {
      id: 'how-we-use',
      num: '03',
      title: 'How We Use Your Data',
      content: [
        'To respond to website enquiries and schedule consultations.',
        'To deliver contracted IT services and software products.',
        'To manage billing, payments, and service agreements.',
        'To provide technical support and helpdesk services.',
        'To send service-related communications (not marketing, unless opted in).',
        'To improve our website, services, and software through aggregate analytics.',
        'To comply with applicable legal obligations.',
        'We do not use patient health data for any purpose other than delivering the specific service contracted by the client hospital. We do not train AI models on patient data.',
      ],
    },
    {
      id: 'legal-basis',
      num: '04',
      title: 'Legal Basis for Processing',
      content: [
        'Under the DPDP Act 2023, we process personal data on the following bases:',
        'Consent — for marketing communications and optional features.',
        'Contractual necessity — to deliver services under a signed Service Agreement.',
        'Legal obligation — to comply with applicable Indian law (tax, audit, court orders).',
        "Legitimate interests — website analytics and service improvement (not overriding data principals' rights).",
      ],
    },
    {
      id: 'data-storage',
      num: '05',
      title: 'Data Storage & Security',
      content: [
        'All data is stored on servers located within India (AWS Mumbai or Azure India regions).',
        'AES-256 encryption at rest; TLS 1.3 in transit.',
        'Role-based access control (RBAC) — staff access only what they need.',
        'Multi-factor authentication for all admin systems.',
        'Annual penetration testing and quarterly vulnerability scans.',
        'Audit logs retained for a minimum of 2 years.',
        'ISO 27001-aligned information security management practices.',
      ],
    },
    {
      id: 'data-sharing',
      num: '06',
      title: 'Data Sharing',
      content: [
        'MedXL does not sell personal data to any third party. We share data only in the following circumstances:',
        'Service delivery partners — cloud infrastructure providers (AWS/Azure), payment gateways (Razorpay/PayU), SMS/WhatsApp API providers — each bound by data processing agreements.',
        'Client hospital — patient and staff data is accessible to the contracted hospital and is owned by them.',
        'ABDM / NHA — for ABHA-linked records, as mandated by government guidelines.',
        'Legal authorities — when required by a court order, government directive, or applicable law.',
      ],
    },
    {
      id: 'data-retention',
      num: '07',
      title: 'Data Retention',
      content: [
        'Client business data: retained for the duration of the service contract plus 7 years, as required by Indian tax law.',
        "Patient health data: retained as per the client hospital's data retention policy (MedXL follows the hospital's instruction as a data processor).",
        'Website analytics data: retained for 26 months (Google Analytics default).',
        'Server logs: retained for 12 months.',
        'Upon contract termination, MedXL provides a full data export to the client within 30 days and permanently deletes data from its systems within 90 days, subject to legal retention obligations.',
      ],
    },
    {
      id: 'your-rights',
      num: '08',
      title: 'Your Rights (Data Principal Rights)',
      content: [
        'Under the DPDP Act 2023, you have the following rights:',
        'Right to access — request a copy of your personal data held by MedXL.',
        'Right to correction — request correction of inaccurate or incomplete data.',
        'Right to erasure — request deletion of your data (subject to legal retention obligations).',
        "Right to grievance redressal — raise a complaint with MedXL's Data Protection Officer.",
        'Right to nominate — nominate a person to exercise rights on your behalf in case of incapacity or death.',
        'To exercise these rights, contact our Data Protection Officer at privacy@medxl.in.',
      ],
    },
    {
      id: 'cookies',
      num: '09',
      title: 'Cookies',
      content: [
        'Our website uses cookies for the following purposes:',
        'Essential cookies — required for basic website functionality (session management, security).',
        'Analytics cookies — Google Analytics (anonymised) for understanding website usage.',
        'Preference cookies — remembering language or display preferences.',
        'We do not use advertising or tracking cookies. You can manage cookie preferences through your browser settings. For full details, see our Cookie Policy.',
      ],
    },
    {
      id: 'childrens-data',
      num: '10',
      title: "Children's Data",
      content: [
        "MedXL's website is not directed at children under 18.",
        'For paediatric patient data processed through client hospital systems, the client hospital (as data fiduciary) is responsible for obtaining appropriate parental/guardian consent in accordance with applicable law.',
      ],
    },
    {
      id: 'policy-changes',
      num: '11',
      title: 'Changes to This Policy',
      content: [
        'We may update this Privacy Policy periodically.',
        'Material changes will be communicated to active clients by email at least 30 days in advance.',
        'The "Last Updated" date at the top of this page reflects the most recent revision.',
      ],
    },
    {
      id: 'dpo',
      num: '12',
      title: 'Grievance Officer & Data Protection Officer',
      content: [
        <>
          <p>For privacy-related queries, complaints, or to exercise your data rights, contact our Data Protection Officer:</p>
          <p>
            📧 <a href="mailto:info@medxl.in">info@medxl.in</a><br />
            📞 <a href="tel:+919884021188">+91 98840 21188</a><br />
            📍 MedXL Ventures Private Limited, Chennai, Tamil Nadu — 600 001
          </p>
          <p>We will acknowledge your request within 3 business days and endeavour to resolve it within 30 days.</p>
        </>,
      ],
    },
  ],
  ctaTag:   'Questions about your data?',
  ctaTitle: 'Contact Our Data Protection Officer',
  ctaDesc:  'Your privacy matters to us. Reach out for any queries about data access, correction, erasure, or your rights under the DPDP Act 2023.',
  ctaPrimary:   { label: '✉ info@medxl.in', href: 'mailto:info@medxl.in' },
  ctaSecondary: { label: '💬 WhatsApp Us', href: 'https://api.whatsapp.com/send/?phone=918148181288' },
  footerLinks: [
    { label: 'Home',         to: '/'       },
    { label: 'About',        to: '/about'  },
    { label: 'Terms of Use', to: '/terms'  },
    { label: 'Cookie Policy',to: '/cookies'},
    { label: 'Contact DPO',  href: 'mailto:info@medxl.in' },
  ],
}

export default function PrivacyPage() {
  return <LegalPage config={PRIVACY_CONFIG} />
}