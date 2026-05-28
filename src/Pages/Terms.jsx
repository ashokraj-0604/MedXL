import LegalPage from '../layouts/Legaldetailpage'

const noticeText = (
  <p>
    <strong>Important:</strong> These Terms of Use ("Terms") govern your access to and use of the
    website located at <strong>www.medxl.in</strong> and all software products, IT services, and
    related offerings provided by MedXL Ventures Private Limited, a company registered under the
    Companies Act 2013 in Tamil Nadu, India. By accessing our Website or entering into a service
    agreement with MedXL, you ("Client", "you") agree to be bound by these Terms. If you do not
    agree, please discontinue use immediately.
  </p>
)

const TERMS_CONFIG = {
  title: 'Terms of',
  titleHighlight: 'Use',
  description:
    "Please read these Terms of Use carefully before accessing or using MedXL's healthcare technology platform, software products, or services. These Terms govern your relationship with MedXL Ventures Private Limited.",
  accentRgb: '197,45,181',
  noticeIcon: '⚠️',
  noticeText,
  chips: [
    { label: 'Effective: 1 January 2025', dot: '#22C55E' },
    { label: 'Last Updated: 25 May 2025', dot: '#F5A623' },
    { label: 'Version 2.0',               dot: '#C52DB5' },
    { label: 'Governing Law: India',      dot: '#60A5FA' },
  ],
  navCta: { label: 'Legal Queries', href: 'mailto:legal@medxl.in' },
  breadcrumb: 'Terms of Use',
  sections: [
    {
      id: 'acceptance',
      num: '01',
      title: 'Acceptance of Terms',
      content: [
        'By accessing or using any MedXL product, website, software, or service (collectively, the "Services"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, you must not access or use our Services.',
        'These Terms constitute a legally binding agreement between you ("User", "you", or "your") and MedXL Ventures Private Limited, a company incorporated under the Companies Act 2013, with its registered office in Chennai, Tamil Nadu, India ("MedXL", "we", "us", or "our").',
        'We reserve the right to update or modify these Terms at any time. Continued use of the Services after any such changes constitutes your acceptance of the new Terms. We will notify registered users of material changes via email or in-app notification.',
      ],
    },
    {
      id: 'services',
      num: '02',
      title: 'Description of Services',
      content: [
        'MedXL provides healthcare technology services including but not limited to: Hospital Management Systems (HMS), Electronic Health Record (EHR) systems, Learning Management Systems (LMS), Laboratory Information Management Systems (LIMS), telemedicine platforms, digital marketing services, website development, cloud hosting, and related IT consulting for healthcare institutions.',
        "Our Services are intended exclusively for healthcare organisations, medical professionals, and their authorised representatives. Individual consumers accessing healthcare services through a MedXL-powered platform are subject to that platform's separate terms.",
        'We reserve the right to modify, suspend, or discontinue any part of the Services with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of Services.',
      ],
    },
    {
      id: 'payment',
      num: '03',
      title: 'Payment Terms',
      content: [
        'Annual plans are invoiced at the start of the contract year. Payment is due within 15 days of invoice date unless otherwise agreed. Late payments attract interest at 18% per annum. GST is applicable at the prevailing rate on all services.',
        "MedXL reserves the right to suspend services in the event of non-payment after providing 7 days' written notice. Restoration of services following suspension may attract a reinstatement fee.",
      ],
    },
    {
      id: 'ip',
      num: '04',
      title: 'Intellectual Property',
      content: [
        'MedXL Property: All software, code, designs, systems, templates, tools, and proprietary methodologies used by MedXL to deliver services remain the exclusive intellectual property of MedXL Ventures Private Limited. Clients are granted a limited, non-transferable licence to use such software during the active subscription period.',
        'Client Content: Content provided by the client (including logos, text, photographs, and patient data) remains the property of the client. MedXL is granted a limited licence to use such content solely for the purpose of delivering contracted services.',
        'Work Product: Website designs, custom code, and content created specifically for the client under a paid engagement are assigned to the client upon full payment of all outstanding fees. Generic templates and underlying frameworks are not included in this assignment.',
      ],
    },
    {
      id: 'data-protection',
      num: '05',
      title: 'Data Protection and Patient Confidentiality',
      content: [
        'MedXL acknowledges that client data may include sensitive patient health information. We commit to processing all such data in accordance with the Digital Personal Data Protection Act (DPDP Act) 2023, HIPAA-equivalent security standards, and the ABDM Health Data Management Policy.',
        'MedXL will not sell, share, or disclose client or patient data to any third party except as required to deliver the contracted services or as mandated by applicable law.',
      ],
    },
    {
      id: 'sla',
      num: '06',
      title: 'Uptime & Service Level Agreement (SLA)',
      content: [
        'MedXL guarantees 99.9% monthly uptime for hosted services. In the event of downtime exceeding the SLA threshold (excluding scheduled maintenance windows and force majeure events), clients may be eligible for service credits as outlined in the Service Agreement.',
        'Planned maintenance is communicated at least 48 hours in advance and is scheduled during off-peak hours (typically between 2:00 AM – 5:00 AM IST).',
      ],
    },
    {
      id: 'prohibited',
      num: '07',
      title: 'Prohibited Uses',
      content: [
        "You agree not to use MedXL's platforms or services to:",
        'Violate any applicable law or regulation in India or any jurisdiction.',
        'Transmit or store fraudulent, defamatory, or illegal content.',
        'Attempt to breach, hack, or compromise any MedXL system.',
        'Reverse-engineer any MedXL software or extract proprietary code.',
        'Provide false information during onboarding or billing processes.',
        'Use MedXL services to provide competing IT services to third parties.',
      ],
    },
    {
      id: 'termination',
      num: '08',
      title: 'Termination',
      content: [
        "Either party may terminate the service agreement with 30 days' written notice at the end of an annual contract term. Mid-term termination by the client does not entitle the client to a refund of prepaid annual fees unless MedXL is in material breach of its obligations.",
        "MedXL may terminate immediately if: (a) the client breaches these Terms and fails to remedy within 7 days of notice, (b) payment is overdue by more than 30 days, or (c) the client engages in fraudulent, illegal, or harmful activity.",
        'Upon termination, MedXL will provide the client with an export of their data in standard formats (CSV, JSON, or PDF as applicable) within 30 days. Data will be permanently deleted from MedXL systems within 90 days of termination.',
      ],
    },
    {
      id: 'liability',
      num: '09',
      title: 'Limitation of Liability',
      content: [
        "To the maximum extent permitted by applicable law, MedXL's total aggregate liability to the client for any claim arising out of or related to these Terms or the services shall not exceed the total fees paid by the client to MedXL in the 12 months preceding the claim.",
        'MedXL shall not be liable for indirect, incidental, consequential, or punitive damages, including loss of profit, loss of data, or business interruption, even if advised of the possibility of such damages.',
      ],
    },
    {
      id: 'governing-law',
      num: '10',
      title: 'Governing Law and Dispute Resolution',
      content: [
        'These Terms are governed by and construed in accordance with the laws of India. Any dispute arising out of or relating to these Terms shall first be subject to good-faith negotiation. If unresolved within 30 days, disputes shall be referred to arbitration under the Arbitration and Conciliation Act, 1996, with the seat of arbitration in Chennai, Tamil Nadu.',
      ],
    },
    {
      id: 'amendments',
      num: '11',
      title: 'Amendments',
      content: [
        'MedXL reserves the right to update these Terms at any time. Material changes will be communicated to active clients via email at least 30 days before taking effect. Continued use of services after the effective date constitutes acceptance of the updated Terms.',
      ],
    },
    {
      id: 'general',
      num: '12',
      title: 'General Provisions',
      content: [
        <>
          <p>For questions about these Terms, contact our Legal & Compliance team:</p>
          <p>
            📧 <a href="mailto:info@medxl.in">info@medxl.in</a><br />
            📞 <a href="tel:+919884021188">+91 98840 21188</a><br />
            📍 MedXL Ventures Private Limited, Chennai, Tamil Nadu, India
          </p>
        </>,
      ],
    },
  ],
  ctaTag:   'Questions about these Terms?',
  ctaTitle: 'Need Clarification or Legal Assistance?',
  ctaDesc:  "Our legal team is available to address any questions about these Terms, our data processing practices, or compliance requirements specific to your healthcare organisation.",
  ctaPrimary:   { label: '✉ info@medxl.in', href: 'mailto:info@medxl.in' },
  ctaSecondary: { label: '💬 WhatsApp Us', href: 'https://api.whatsapp.com/send/?phone=919884021188' },
  footerLinks: [
    { label: 'Home',          to: '/'        },
    { label: 'About',         to: '/about'   },
    { label: 'Privacy Policy',to: '/privacy' },
    { label: 'Cookie Policy', to: '/cookies' },
    { label: 'Contact Legal', href: 'mailto:legal@medxl.in' },
  ],
}

export default function TermsPage() {
  return <LegalPage config={TERMS_CONFIG} />
}