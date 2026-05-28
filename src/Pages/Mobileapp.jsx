import ProductDetailPage from '../layouts/Productdetailpage'

const MOBILE_APP_CONFIG = {
  slug: 'mobile-app',
  icon: '📱',
  tag: 'Hospital Mobile App',
  badgeLabel: 'Android & iOS',
  accentRgb: '99,102,241',

  title: 'Your Hospital. In',
  titleHighlight: 'Every Patient\'s Pocket.',

  subtitle:
    'A fully branded Android & iOS patient app — appointment booking, report download, bill payment, and telemedicine. No third-party branding, 100% yours.',

  stats: [
    { value: '99.9%', label: 'Uptime SLA'          },
    { value: 'iOS &', label: 'Android'              },
    { value: '4–8',   label: 'Weeks to App Store'   },
    { value: 'White', label: 'Label Branded'        },
  ],

  features: [
    'Fully white-labelled app with your hospital logo & colours',
    'Patient appointment booking & cancellation',
    'Doctor availability & slot selection',
    'OPD token & queue status updates',
    'Lab report download (PDF)',
    'Bill viewing & online payment (UPI, cards)',
    'Medication reminders & health tips',
    'Telemedicine video consultation',
    'In-app chat with care coordinators',
    'Push notifications for appointments, results, bills',
    'ABHA health ID linking',
    'Patient health record timeline',
    'Discharge summary & prescription download',
    'Feedback & rating for visits',
  ],

  modules: [
    {
      icon: '📅',
      name: 'Appointment Booking',
      desc: 'Patients book, reschedule, and cancel appointments directly from the app. Real-time slot availability shown per doctor.',
    },
    {
      icon: '🔬',
      name: 'Report Access',
      desc: 'Lab and radiology reports are pushed to the app the moment they are approved — downloadable as PDF.',
    },
    {
      icon: '💳',
      name: 'Bill Payment',
      desc: 'View itemised bills and pay via UPI, debit/credit card, or net banking. Payment confirmation sent instantly.',
    },
    {
      icon: '📡',
      name: 'Telemedicine',
      desc: 'HD video consultation within the app. Prescription is delivered to the same app post-consult.',
    },
    {
      icon: '🔔',
      name: 'Push Notifications',
      desc: 'Appointment reminders, report ready alerts, bill due notices, and health tips delivered as push notifications.',
    },
    {
      icon: '🔗',
      name: 'ABHA Linking',
      desc: 'Patients can link their ABHA health ID to access and share records with any ABDM-connected provider.',
    },
  ],

  process: [
    {
      num: '01',
      title: 'Branding Setup',
      text: "We apply your hospital's logo, brand colours, and app name. The app is 100% white-labelled — no MedXL branding visible.",
    },
    {
      num: '02',
      title: 'Feature Configuration',
      text: 'We enable the modules relevant to your hospital — appointments, lab reports, billing, telemedicine — and configure integrations.',
    },
    {
      num: '03',
      title: 'App Store Submission',
      text: 'We submit the app to Google Play Store and Apple App Store under your hospital\'s developer account. 1–2 week review cycle.',
    },
    {
      num: '04',
      title: 'Patient Onboarding',
      text: 'We create QR codes, posters, and patient communication materials to drive app downloads from your OPD and discharge desk.',
    },
  ],

  faqs: [
    {
      q: 'Will the app have our hospital\'s name on the App Store?',
      a: 'Yes. The app is published under your hospital\'s developer account with your name, logo, and screenshots. No MedXL branding anywhere.',
    },
    {
      q: 'Can patients pay bills through the app?',
      a: 'Yes. UPI, debit/credit card, and net banking are supported. Payment reconciliation happens automatically in your HMS billing module.',
    },
    {
      q: 'How do lab reports reach the app?',
      a: 'Reports are pushed automatically from LIMS the moment they are approved. Patients receive a push notification and can download the PDF.',
    },
    {
      q: 'Does the app work with telemedicine?',
      a: 'Yes. The same app supports in-app video consultations. Patients book, consult, and receive e-prescriptions — all within one app.',
    },
  ],

  ctaTitle: 'Ready to Launch Your Hospital\'s App?',
  ctaDesc:
    "Book a free 30-minute demo. We'll show you the branded app experience and walk through appointment booking, report delivery, and payments.",
}

export default function MobileAppPage() {
  return <ProductDetailPage config={MOBILE_APP_CONFIG} />
}