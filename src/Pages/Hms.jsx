import ProductDetailPage from '../layouts/Productdetailpage'

const HMS_CONFIG = {
  slug: 'hms',
  icon: '🏥',
  tag: 'Hospital Management System (HMS)',
  badgeLabel: 'Cloud HMS',
  accentRgb: '0,175,160',

  title: 'Manage Every Department',
  titleHighlight: 'From One Dashboard.',

  subtitle:
    'A comprehensive cloud HMS that connects OPD, IPD, pharmacy, billing, lab, and administration into one seamless workflow — built ground-up for Indian hospitals.',

  stats: [
    { value: '99.9%', label: 'Uptime SLA'      },
    { value: 'ABDM',  label: 'Ready'            },
    { value: '3–6',   label: 'Weeks to Go Live' },
    { value: 'Cloud', label: 'SaaS Based'       },
  ],

  features: [
    'OPD patient registration & queue management',
    'IPD admission, ward management & discharge',
    'Pharmacy inventory & dispensing',
    'Integrated billing (OP, IP, package billing)',
    'Doctor-wise appointment scheduling',
    'Administration & HR module',
    'Role-based access control for every staff role',
    'Real-time analytics dashboard for management',
    'GST-compliant billing & financial reports',
    'ABDM / ABHA integration',
    'Bed availability & transfer management',
    'Dietary & nursing module',
    'Emergency management workflow',
    'Diet management & kitchen orders',
  ],

  modules: [
    {
      icon: '🪑',
      name: 'OPD Management',
      desc: 'Digital token queue, doctor schedules, patient flow tracking, and real-time OPD dashboard with wait-time visibility.',
    },
    {
      icon: '🛏️',
      name: 'IPD & Ward Management',
      desc: 'Admission, bed allocation, ward rounds, nursing notes, discharge summary, and clinical documentation in one place.',
    },
    {
      icon: '💊',
      name: 'Pharmacy Module',
      desc: 'Inventory management, drug dispensing, expiry alerts, purchase orders, and consumption reports — fully integrated.',
    },
    {
      icon: '💰',
      name: 'Billing & Finance',
      desc: 'Package billing, insurance claims, GST invoicing, receipts, and complete revenue analytics in real time.',
    },
    {
      icon: '👥',
      name: 'HR & Admin',
      desc: 'Staff management, attendance, payroll integration, and department-wise reporting for hospital administration.',
    },
    {
      icon: '📊',
      name: 'Analytics Dashboard',
      desc: 'Real-time hospital KPIs — bed occupancy, revenue, OPD volumes, and patient satisfaction scores at a glance.',
    },
  ],

  process: [
    {
      num: '01',
      title: 'Discovery & Config',
      text: "We map your hospital's workflows, departments, and roles. Every module is configured to match your existing processes.",
    },
    {
      num: '02',
      title: 'Data Migration',
      text: 'We migrate existing patient records, pharmacy inventory, and staff data into MedXL with zero downtime.',
    },
    {
      num: '03',
      title: 'Staff Training',
      text: 'Role-based training for doctors, nurses, billing staff, and administrators. Includes hands-on walkthroughs.',
    },
    {
      num: '04',
      title: 'Go Live & Support',
      text: 'Dedicated go-live support team on-site for the first week, followed by 24×7 remote support and SLA monitoring.',
    },
  ],

  faqs: [
    {
      q: 'Is HMS available as a standalone product?',
      a: 'Yes. HMS is available as a standalone add-on to any MedXL plan, and is included in Growth and Enterprise annual plans.',
    },
    {
      q: 'How long does HMS implementation take?',
      a: 'Typically 4–6 weeks including data migration, configuration, and staff training. We handle the entire process.',
    },
    {
      q: 'Can HMS integrate with our existing lab equipment?',
      a: 'Yes, MedXL HMS supports HL7 and DICOM interfaces for integration with most laboratory and radiology equipment.',
    },
    {
      q: 'Is patient data stored in India?',
      a: 'Yes. All data is stored on India-based cloud servers in compliance with DPDP Act requirements.',
    },
  ],

  ctaTitle: 'Ready to See HMS Live?',
  ctaDesc:
    "Book a free 30-minute demo. We'll walk you through every module tailored to your hospital's workflows — OPD to discharge.",
}

export default function HMSPage() {
  return <ProductDetailPage config={HMS_CONFIG} />
}