import ProductDetailPage from '../layouts/ProductDetailPage'

const OP_BILLING_CONFIG = {
  slug: 'op-billing',
  icon: '💰',
  tag: 'OP Billing & Revenue Management',
  badgeLabel: 'Smart Billing',
  accentRgb: '245,166,35',

  title: 'Zero Billing Errors.',
  titleHighlight: 'Maximum Revenue.',

  subtitle:
    'Smart outpatient billing with GST compliance, insurance claim preparation, revenue analytics, and automated invoicing — reducing billing errors by up to 80%.',

  stats: [
    { value: '80%',   label: 'Fewer Billing Errors' },
    { value: 'GST',   label: 'Compliant'             },
    { value: '3–5',   label: 'Weeks to Go Live'      },
    { value: 'Cloud', label: 'SaaS Based'            },
  ],

  features: [
    'OPD consultation & procedure billing',
    'Package billing with auto-itemisation',
    'GST-compliant invoices & receipts',
    'Insurance & TPA claim preparation',
    'UPI, card, cash & credit payment modes',
    'Advance deposit & refund management',
    'Discount & concession approval workflows',
    'Daily, weekly & monthly revenue reports',
    'Doctor-wise & department-wise revenue split',
    'Outstanding dues tracking & reminders',
    'Automatic invoice numbering & series',
    'Duplicate bill prevention & audit trail',
    'Integration with HMS, EHR & pharmacy',
    'Real-time revenue dashboard for management',
  ],

  modules: [
    {
      icon: '🧾',
      name: 'OPD Billing Counter',
      desc: 'Fast billing interface for front desk — generate consultation, procedure, and package invoices in under 30 seconds.',
    },
    {
      icon: '🏥',
      name: 'Insurance & TPA',
      desc: 'Prepare and track insurance pre-authorisation requests, TPA claim submissions, and settlement reconciliation.',
    },
    {
      icon: '📊',
      name: 'Revenue Dashboard',
      desc: 'Real-time management dashboard — daily collections, outstanding dues, department-wise revenue, and trend charts.',
    },
    {
      icon: '💳',
      name: 'Payment Gateway',
      desc: 'Accept UPI, debit/credit cards, and net banking directly at the billing counter. Auto-reconciled with the ledger.',
    },
    {
      icon: '🔖',
      name: 'Package Billing',
      desc: 'Create health packages and wellness plans — auto-itemise components on invoice with clear GST breakup.',
    },
    {
      icon: '🔍',
      name: 'Audit Trail',
      desc: 'Every bill, edit, discount, and cancellation is logged with user, timestamp, and reason — fully NABH audit-ready.',
    },
  ],

  process: [
    {
      num: '01',
      title: 'Fee Schedule Setup',
      text: 'We configure your consultation fees, procedure charges, packages, and discount rules based on your current rate card.',
    },
    {
      num: '02',
      title: 'GST & TPA Config',
      text: 'GST heads, SAC codes, and TPA/insurance panel details are configured. Pre-authorisation templates are set up.',
    },
    {
      num: '03',
      title: 'Counter Training',
      text: 'Billing staff are trained on the counter interface, payment collection, refunds, and end-of-day reconciliation.',
    },
    {
      num: '04',
      title: 'Go Live & Reports',
      text: 'Live billing from day one. Management gets access to revenue dashboards and automated daily collection reports.',
    },
  ],

  faqs: [
    {
      q: 'Does the billing module handle insurance claims?',
      a: 'Yes. OP Billing supports TPA and insurance panel billing — including pre-authorisation requests, claim submission documents, and settlement tracking.',
    },
    {
      q: 'Can we apply discounts and concessions?',
      a: 'Yes. Discounts can be configured with approval workflows — for example, requiring a senior manager to approve discounts above a certain percentage.',
    },
    {
      q: 'Is billing integrated with the pharmacy and lab?',
      a: 'Yes. When a doctor orders medicines or investigations from EHR, the charges flow automatically into the patient\'s billing account — no duplicate entry.',
    },
    {
      q: 'Can the billing work standalone without HMS?',
      a: 'Yes. OP Billing can be deployed as a standalone module with manual patient registration, or integrated with the full MedXL HMS and EHR.',
    },
  ],

  ctaTitle: 'Ready to See OP Billing Live?',
  ctaDesc:
    'Book a free 30-minute demo. We\'ll walk you through the billing counter, insurance claim workflow, and the revenue dashboard — tailored to your hospital.',
}

export default function OPBillingPage() {
  return <ProductDetailPage config={OP_BILLING_CONFIG} />
}