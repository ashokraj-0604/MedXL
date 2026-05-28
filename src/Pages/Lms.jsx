import ProductDetailPage from '../layouts/Productdetailpage'

const LMS_CONFIG = {
  slug: 'lms',
  icon: '📚',
  tag: 'LMS for Hospitals',
  badgeLabel: 'Healthcare LMS',
  accentRgb: '245,166,35',

  title: 'Train Every Staff Member.',
  titleHighlight: 'Track Every Certification.',

  subtitle:
    'A dedicated LMS built for hospital teams — from doctors doing CME to nurses completing infection control compliance. All in one platform.',

  stats: [
    { value: '99.9%',  label: 'Uptime SLA'      },
    { value: 'SCORM',  label: 'Compatible'       },
    { value: '3–6',    label: 'Weeks to Go Live' },
    { value: 'Mobile', label: 'Friendly'         },
  ],

  features: [
    'CME (Continuing Medical Education) module',
    'Compliance training — POSH, fire safety, infection control',
    'Skill assessment & quiz engine',
    'CPD (Continuing Professional Development) tracking',
    'Role-based course assignments',
    'Certificate generation & expiry alerts',
    'Video, PDF & SCORM content support',
    'Mobile-friendly learning on any device',
    'Trainer dashboard & batch management',
    'New joiner onboarding programme',
    'Attendance & progress tracking',
    'Integration with HR module',
    'Custom hospital branding',
    'Offline content download for learning',
  ],

  modules: [
    {
      icon: '🎓',
      name: 'CME Courses',
      desc: 'Curated medical education modules covering clinical topics, updated quarterly with MCI/NMC-recognised content.',
    },
    {
      icon: '✅',
      name: 'Compliance Training',
      desc: 'Pre-built POSH, fire safety, infection control, and biomedical waste management courses with pass/fail assessment.',
    },
    {
      icon: '📊',
      name: 'Progress Tracking',
      desc: 'Individual and department-wise training progress dashboards for HR managers and training coordinators.',
    },
    {
      icon: '📜',
      name: 'Certification Engine',
      desc: 'Auto-generate and email certificates on course completion. Track renewal dates and send expiry reminders.',
    },
    {
      icon: '📱',
      name: 'Mobile Learning',
      desc: 'Responsive design allows staff to complete training on smartphones during breaks, on-call periods, or at home.',
    },
    {
      icon: '🔗',
      name: 'HR Integration',
      desc: 'Sync with your HR module — new joiners are automatically enrolled in onboarding programmes on day one.',
    },
  ],

  process: [
    {
      num: '01',
      title: 'Content Setup',
      text: 'We upload your existing training materials — videos, PDFs, slides — and structure them into courses and learning paths.',
    },
    {
      num: '02',
      title: 'Role Configuration',
      text: 'Course assignments are mapped to job roles so every staff member sees the training relevant to their position.',
    },
    {
      num: '03',
      title: 'Compliance Tracks',
      text: 'Pre-built compliance tracks for POSH, NABH, fire safety, and infection control are activated and customised.',
    },
    {
      num: '04',
      title: 'Launch & Reporting',
      text: 'Staff are onboarded, department heads get their dashboards, and monthly compliance reports are auto-scheduled.',
    },
  ],

  faqs: [
    {
      q: 'What types of content can be uploaded?',
      a: 'The LMS supports MP4 videos, PDFs, SCORM packages, PowerPoint slides, and H5P interactive content.',
    },
    {
      q: 'Can we create our own courses?',
      a: 'Yes. The LMS includes a built-in course builder with video uploads, quizzes, and assessments — no technical knowledge required.',
    },
    {
      q: 'Is LMS available in regional languages?',
      a: 'The platform supports multilingual content. You can upload training material in Hindi, Tamil, Telugu, or any regional language.',
    },
    {
      q: 'How does CME tracking work for doctors?',
      a: 'Each doctor has a personal CME dashboard showing completed credits, pending requirements, and certificate history.',
    },
  ],

  ctaTitle: 'Ready to See the Hospital LMS Live?',
  ctaDesc:
    "Book a free 30-minute demo. We'll show you CME tracking, compliance modules, and how onboarding is automated for new joiners.",
}

export default function LMSPage() {
  return <ProductDetailPage config={LMS_CONFIG} />
}