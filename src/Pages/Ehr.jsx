import ProductDetailPage from '../layouts/Productdetailpage'

const EHR_CONFIG = {
  slug: 'ehr',
  icon: '📋',
  tag: 'Electronic Health Records (EHR)',
  badgeLabel: 'ABDM Ready EHR',
  accentRgb: '56,189,248',

  title: 'Complete Patient History.',
  titleHighlight: 'Anywhere. Anytime.',

  subtitle:
    'Structured, interoperable EHR that gives clinicians complete patient context at every touchpoint — from OPD consultation to discharge summary.',

  stats: [
    { value: '99.9%', label: 'Uptime SLA'      },
    { value: 'ABDM',  label: 'Ready'            },
    { value: '3–6',   label: 'Weeks to Go Live' },
    { value: 'Cloud', label: 'SaaS Based'       },
  ],

  features: [
    'SOAP-structured clinical notes',
    'ICD-10 / ICD-11 diagnosis coding',
    'e-Prescription with drug database',
    'Investigation ordering & result integration',
    'Allergy & medication history tracking',
    'Chronic disease management templates',
    'Referral & second opinion workflow',
    'Discharge summary auto-generation',
    'Patient health timeline view',
    'ABDM / ABHA health record linking',
    'Voice-to-text clinical notes (optional)',
    'Radiology & imaging result integration',
    'Consent management & documentation',
    'Offline access for ward use',
  ],

  modules: [
    {
      icon: '📝',
      name: 'Clinical Notes',
      desc: 'Structured SOAP notes with specialty-specific templates for medicine, surgery, paediatrics, gynaecology, and more.',
    },
    {
      icon: '💊',
      name: 'e-Prescription',
      desc: 'Digital prescriptions with a 10,000+ drug database, dosage checks, allergy alerts, and direct pharmacy routing.',
    },
    {
      icon: '🔬',
      name: 'Investigation Orders',
      desc: 'Lab and radiology order generation, result receipt, and integration with LIMS for seamless test reporting.',
    },
    {
      icon: '📜',
      name: 'Patient Timeline',
      desc: 'Complete longitudinal health record — every visit, diagnosis, prescription, and result in chronological order.',
    },
    {
      icon: '📄',
      name: 'Discharge Summary',
      desc: 'Auto-generated discharge summaries from clinical notes — saving 30+ minutes per discharge on average.',
    },
    {
      icon: '🔗',
      name: 'ABDM Integration',
      desc: 'Link patient records to their ABHA ID for full interoperability with the national health ecosystem.',
    },
  ],

  process: [
    {
      num: '01',
      title: 'Template Setup',
      text: 'We configure specialty-specific clinical note templates, drug database, ICD-10 codes, and investigation panels for your hospital.',
    },
    {
      num: '02',
      title: 'EHR Migration',
      text: 'Historical patient data from existing systems or paper records is digitised and imported into the timeline.',
    },
    {
      num: '03',
      title: 'Clinician Training',
      text: 'Department-wise training sessions for doctors and nurses. Voice-to-text setup and workflow walkthroughs included.',
    },
    {
      num: '04',
      title: 'ABDM Onboarding',
      text: 'We handle ABHA integration registration and ABDM sandbox testing, ensuring full national health stack compliance.',
    },
  ],

  faqs: [
    {
      q: 'Who can access patient EHR records?',
      a: 'Access is role-based. Treating doctors see full records. Nurses see relevant clinical data. Admin staff have no access to clinical content. All access is logged.',
    },
    {
      q: 'Can EHR work offline?',
      a: 'Yes. The EHR supports offline mode for ward use. Data syncs automatically when connectivity is restored.',
    },
    {
      q: 'How does the drug database work?',
      a: 'The integrated drug database includes over 10,000 branded and generic Indian medications with dosage guidelines, contraindications, and interaction alerts.',
    },
    {
      q: 'Is EHR NABH compliant?',
      a: 'Yes, MedXL EHR is designed to meet NABH documentation requirements and can support your NABH accreditation process.',
    },
  ],

  ctaTitle: 'Ready to See EHR Live?',
  ctaDesc:
    "Book a free 30-minute demo. We'll walk you through clinical note templates, e-prescription, and ABDM integration — tailored to your specialties.",
}

export default function EHRPage() {
  return <ProductDetailPage config={EHR_CONFIG} />
}