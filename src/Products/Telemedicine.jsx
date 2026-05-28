import ProductDetailPage from '../layouts/ProductDetailPage'

const TELEMEDICINE_CONFIG = {
  slug: 'telemedicine',
  icon: '📡',
  tag: 'Telemedicine Platform',
  badgeLabel: 'Telemedicine',
  accentRgb: '197,45,181',
  title: 'Extend Your Hospital\'s Reach.',
  titleHighlight: 'Beyond Four Walls.',

  subtitle:
    'Enable your doctors to consult patients remotely — from urban homes to rural health centres — with ABDM-compliant video consultation and e-prescription.',

  stats: [
    { value: '99.9%', label: 'Uptime SLA'      },
    { value: 'ABDM',  label: 'Ready'            },
    { value: '3–6',   label: 'Weeks to Go Live' },
    { value: 'Cloud', label: 'SaaS Based'       },
  ],

  features: [
    'HD video consultation (web + app)',
    'Telemedicine appointment scheduling',
    'e-Prescription with digital signature',
    'Post-consultation follow-up scheduling',
    'Patient waiting room & queue management',
    'Multi-device support — phone, tablet, laptop',
    'Rural clinic spoke-hub connectivity',
    'EHR integration — pre-loaded patient history',
    'Payment gateway for consultation fees',
    'WhatsApp-based consultation option',
    'Recording & documentation (with consent)',
    'Telemedicine MCI/NMC compliance guidelines built-in',
    'Analytics — consult volumes, revenue, outcomes',
    'ABDM Health ID linking',
  ],

  modules: [
    {
      icon: '🎥',
      name: 'HD Video Consult',
      desc: 'Stable, encrypted video consultation with screen sharing for radiology image review and document sharing.',
    },
    {
      icon: '💊',
      name: 'e-Prescription',
      desc: "Digitally signed prescriptions issued during or after the consult, delivered to patient's app and WhatsApp.",
    },
    {
      icon: '🏘️',
      name: 'Rural Spoke Connectivity',
      desc: 'Connect your hospital to satellite rural clinics — enabling specialist consultations from district headquarters.',
    },
    {
      icon: '📅',
      name: 'Consult Scheduling',
      desc: 'Patient self-scheduling or receptionist-managed bookings with doctor availability calendar integration.',
    },
    {
      icon: '💰',
      name: 'Revenue Integration',
      desc: 'Consultation fees via UPI/cards, auto-invoice generation, and revenue analytics for the telemedicine department.',
    },
    {
      icon: '📊',
      name: 'Outcomes Tracking',
      desc: 'Track follow-up adherence, patient satisfaction scores, and clinical outcomes for telemedicine consults.',
    },
  ],

  process: [
    {
      num: '01',
      title: 'Platform Setup',
      text: 'We configure your branded telemedicine portal with doctor profiles, specialties, consultation fees, and availability slots.',
    },
    {
      num: '02',
      title: 'EHR Linking',
      text: 'Telemedicine is linked to your EHR so doctors see complete patient history before every video consultation.',
    },
    {
      num: '03',
      title: 'Payment Integration',
      text: 'UPI, card, and net banking payment gateways are integrated and tested. Consultation revenue flows directly to your account.',
    },
    {
      num: '04',
      title: 'Doctor Onboarding',
      text: 'Each doctor is trained on the consult interface, e-prescription, and follow-up scheduling workflows.',
    },
  ],

  faqs: [
    {
      q: 'Is the telemedicine platform compliant with MCI/NMC guidelines?',
      a: 'Yes. MedXL Telemedicine is built in accordance with the Telemedicine Practice Guidelines 2020 issued by the Ministry of Health.',
    },
    {
      q: 'Can patients use WhatsApp for consultation?',
      a: 'Yes. We support WhatsApp-based audio/video calls for patients in low-bandwidth rural areas, with the same prescription and documentation workflow.',
    },
    {
      q: 'Does telemedicine integrate with our hospital\'s EHR?',
      a: 'Yes. Before each teleconsultation, the doctor sees the patient\'s full EHR history — previous visits, prescriptions, lab results — all pre-loaded.',
    },
    {
      q: 'Can we charge patients for telemedicine?',
      a: 'Yes. Consultation fees are collected online via UPI, cards, or net banking. Revenue flows directly to your hospital\'s account.',
    },
  ],

  ctaTitle: 'Ready to See Telemedicine Live?',
  ctaDesc:
    "Book a free 30-minute demo. We'll walk you through video consultation, rural connectivity, and how payments are integrated end-to-end.",
}

export default function TelemedicinePage() {
  return <ProductDetailPage config={TELEMEDICINE_CONFIG} />
}