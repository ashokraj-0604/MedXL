import ServiceDetailPage from '../layouts/Servicedetailpage'

const EMAIL_CONFIG = {
  slug: 'email-comms',
  icon: '📧',
  tag: 'Email & Communication Setup',
  accentRgb: '245,166,35',

  title: 'Professional Communication,',
  titleHighlight: 'Your Brand. Your Domain.',
  subtitle:
    'Domain-based professional email accounts, WhatsApp Business API, internal team communication tools, and branded templates — all configured and managed for your hospital.',

  stats: [
    { value: '20+',    label: 'Email Accounts'     },
    { value: 'Custom', label: 'Domain Emails'      },
    { value: 'WA Biz', label: 'API Integration'    },
    { value: '100%',   label: 'Spam Protected'     },
  ],

  features: [
    'Professional domain emails (e.g. dr.sharma@yourhospital.com)',
    'Up to 20 staff email accounts (expandable)',
    'Email hosting on secure Indian servers',
    'Spam filtering, phishing protection & email security',
    'WhatsApp Business API setup & integration',
    'Automated patient appointment reminders via WhatsApp',
    'Branded email signature templates for all staff',
    'Shared inboxes for departments (e.g. billing@, appointments@)',
    'Email forwarding & alias configuration',
    'Mobile & desktop email client setup (Outlook, Gmail, etc.)',
    'Internal communication tool setup (Google Workspace or Microsoft 365)',
    'Patient inquiry auto-responder configuration',
    'Email newsletter template (for health tips or hospital updates)',
    'Staff onboarding email provisioning workflow',
  ],

  process: [
    {
      num: '01',
      title: 'Domain & DNS Setup',
      text: 'We configure your domain\'s DNS records (MX, SPF, DKIM, DMARC) to ensure reliable, secure email delivery and maximum inbox placement.',
    },
    {
      num: '02',
      title: 'Account Provisioning',
      text: 'All staff email accounts are created, configured, and tested — including role-based shared inboxes for departments like billing, OPD, and admin.',
    },
    {
      num: '03',
      title: 'WhatsApp & Templates',
      text: 'WhatsApp Business API is integrated with your booking and HMS systems. Branded email signatures and auto-responder templates are set up for every staff role.',
    },
    {
      num: '04',
      title: 'Handover & Training',
      text: 'Staff are trained on accessing email across devices. Ongoing support handles new joiner provisioning, password resets, and configuration changes.',
    },
  ],

  faqs: [
    {
      q: 'What does a professional domain email look like?',
      a: 'Instead of drsmith123@gmail.com, your doctors and staff get addresses like dr.smith@cityhospital.com — building patient trust and brand credibility.',
    },
    {
      q: 'Is WhatsApp Business different from a regular WhatsApp account?',
      a: 'Yes. WhatsApp Business API allows automated messages, appointment confirmations, and multi-agent access — all linked to your hospital\'s official number.',
    },
    {
      q: 'What if we need more than 20 email accounts?',
      a: 'Additional accounts can be added at any time. Your account manager handles provisioning with no disruption to existing users.',
    },
    {
      q: 'Can staff access email on their phones?',
      a: 'Yes. We configure email on all devices — iPhone, Android, and desktop — using standard protocols (IMAP/SMTP) or Microsoft 365 / Google Workspace apps.',
    },
  ],

  ctaTitle: 'Email & Communication Setup is Part of Every MedXL Plan',
  ctaDesc: 'This service is included in our annual IT packages starting at ₹1L/year. No separate quotes needed.',
}

export default function EmailCommsPage() {
  return <ServiceDetailPage config={EMAIL_CONFIG} />
}