import ServiceDetailPage from '../layouts/Servicedetailpage'

const CONSULTING_CONFIG = {
  slug: 'it-consulting',
  icon: '💬',
  tag: 'IT Consulting & Strategy',
  accentRgb: '96,165,250',

  title: 'Strategic IT Guidance.',
  titleHighlight: 'Included in Every Plan.',
  subtitle:
    "Every MedXL plan includes complimentary IT consultations — strategy sessions where our experts assess your hospital's technology roadmap and advise on investments.",

  stats: [
    { value: '2–Monthly', label: 'Sessions by Plan'    },
    { value: '60–90 Min', label: 'Per Session'         },
    { value: 'Written',   label: 'Recommendations'     },
    { value: 'Free',      label: 'No Extra Cost'       },
  ],

  features: [
    'Digital transformation roadmap planning',
    'Technology stack assessment & audit',
    'IT budget planning & optimisation',
    'NABH / NABL IT compliance advisory',
    'EHR & HMS selection guidance',
    'Vendor evaluation & negotiation support',
    'Cloud migration strategy',
    'Cybersecurity posture review',
    'Data strategy & analytics roadmap',
    'Staff productivity tools assessment',
    'ABDM / Ayushman Bharat readiness advisory',
    'Inter-departmental workflow analysis',
    'IT ROI measurement framework',
    'Quarterly technology briefings',
  ],

  process: [
    {
      num: '01',
      title: 'Preparation',
      text: 'We review your current IT setup, systems, and pain points before the session so time is well spent.',
    },
    {
      num: '02',
      title: 'Strategy Session',
      text: 'A structured 60–90 minute session covering your immediate IT challenges and 12-month digital roadmap.',
    },
    {
      num: '03',
      title: 'Recommendations Report',
      text: 'A written report summarising our recommendations, prioritised by impact and investment required.',
    },
    {
      num: '04',
      title: 'Follow Through',
      text: 'Your account manager tracks implementation of recommendations and flags deviations at the next session.',
    },
  ],

  faqs: [
    {
      q: 'How many consultation sessions are included?',
      a: 'Starter plans include 2 sessions/year, Growth includes 4 sessions/year, and Enterprise includes monthly sessions. Additional sessions can be purchased.',
    },
    {
      q: 'Is the consultation really free?',
      a: 'Yes. IT consultation sessions are fully complimentary as part of your annual plan. No separate billing.',
    },
    {
      q: 'What topics can we discuss in the consultation?',
      a: 'Anything IT-related to your hospital — new software evaluation, NABH preparation, budget planning, staff productivity, cybersecurity, or digital marketing strategy.',
    },
  ],

  ctaTitle: 'IT Consulting & Strategy is Part of Every MedXL Plan',
  ctaDesc: 'This service is included in our annual IT packages starting at ₹1L/year. No separate quotes needed.',
}

export default function ItConsultingPage() {
  return <ServiceDetailPage config={CONSULTING_CONFIG} />
}