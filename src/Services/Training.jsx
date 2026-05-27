import ServiceDetailPage from '../layouts/ServiceDetailPage'

const TRAINING_CONFIG = {
  slug: 'staff-training',
  icon: '🎓',
  tag: 'Staff IT Training & Onboarding',
  accentRgb: '34,197,94',

  title: 'Every Staff Member,',
  titleHighlight: 'Confident with Technology.',
  subtitle:
    'Structured onboarding and role-specific IT training for doctors, nurses, and admin staff — so your team gets the most out of every system MedXL deploys.',

  stats: [
    { value: 'Role',      label: 'Specific Tracks'    },
    { value: 'Recorded',  label: 'Training Modules'   },
    { value: 'Quarterly', label: 'Refresher Sessions' },
    { value: '3 Lang',    label: 'EN / HI / TA'       },
  ],

  features: [
    'Role-specific onboarding: doctors, nurses, admin, billing staff',
    'HMS (Hospital Management System) end-user training',
    'EHR (Electronic Health Record) clinical workflow training',
    'LIMS (Lab Information System) training for lab technicians',
    'LMS (Learning Management System) staff onboarding module',
    'Telemedicine platform training for doctors and support staff',
    'Recorded video modules accessible any time via LMS',
    'Step-by-step SOPs (Standard Operating Procedures) for each system',
    'Dedicated onboarding sessions for new joiners',
    'Quarterly refresher sessions for software updates',
    'Cybersecurity & data privacy awareness training',
    'Train-the-trainer program for your internal IT champion',
    'Training available in English, Hindi, and Tamil',
    'Post-training assessment & competency tracking',
  ],

  process: [
    {
      num: '01',
      title: 'Training Needs Assessment',
      text: 'We map each staff role to the systems they use and define a training plan — ensuring no one is overtrained or undertrained for their daily workflow.',
    },
    {
      num: '02',
      title: 'Live Onboarding Sessions',
      text: 'Structured live sessions (on-site or virtual) are conducted role by role at go-live. Sessions are kept to 90 minutes max per group to maintain focus.',
    },
    {
      num: '03',
      title: 'Recorded Modules & SOPs',
      text: 'Every training session is recorded and uploaded to your LMS. Written SOPs with screenshots are provided for every key workflow so staff can self-refer.',
    },
    {
      num: '04',
      title: 'Ongoing Support & Refreshers',
      text: 'New joiners are onboarded via recorded modules within their first week. Quarterly refresher sessions cover software updates, new features, and common mistakes.',
    },
  ],

  faqs: [
    {
      q: 'How long does the initial training take?',
      a: 'Initial onboarding typically takes 1–2 days across all departments. Sessions are scheduled around shift timings to minimise disruption to hospital operations.',
    },
    {
      q: 'What if a new employee joins after go-live?',
      a: 'All recorded modules and SOPs are available in the LMS immediately. Your account manager can also schedule a live catch-up session for larger batches of new joiners.',
    },
    {
      q: 'Is training available in Tamil or Hindi?',
      a: 'Yes. Training sessions are conducted in English by default, with Tamil and Hindi options available on request — particularly useful for nursing and support staff.',
    },
    {
      q: 'Do you provide training for doctors specifically?',
      a: 'Yes. Doctor training is kept concise and focused on clinical workflows — prescribing in the EHR, viewing lab results, and telemedicine — typically 45–60 minutes.',
    },
  ],

  ctaTitle: 'Staff IT Training & Onboarding is Part of Every MedXL Plan',
  ctaDesc: 'This service is included in our annual IT packages starting at ₹1L/year. No separate quotes needed.',
}

export default function StaffTrainingPage() {
  return <ServiceDetailPage config={TRAINING_CONFIG} />
}