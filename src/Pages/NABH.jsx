import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const heroStats = [
  { num: '10', label: 'Standards Chapters' },
  { num: '100', label: 'Standards' },
  { num: '639', label: 'Objective Elements' },
  { num: '105', label: 'Core (Mandatory)' },
]

const whyPursue = [
  { icon: '💰', title: 'Higher Reimbursement', text: 'NABH-accredited hospitals command 10–15% higher reimbursement rates from insurers, and Entry-Level hospitals get 10% extra on PMJAY claims.' },
  { icon: '🤝', title: 'Patient Trust', text: 'Most accredited hospitals report higher patient-trust scores within the first year of accreditation.' },
  { icon: '📉', title: 'Fewer Complaints', text: 'Accredited hospitals report a significant reduction in patient complaints through standardised, safer processes.' },
  { icon: '🏥', title: 'Empanelment', text: 'NABH accreditation is increasingly required for empanelment with insurers and government health schemes.' },
]

const programmes = [
  { name: 'Full Accreditation', beds: '50+', covers: 'All 10 chapters under the 6th Edition — the complete standard.' },
  { name: 'Entry Level', beds: 'Smaller', covers: '5 key chapters — a stepping stone toward full accreditation.' },
  { name: 'SHCO', beds: '<50', covers: 'Small Healthcare Organisations — clinics & nursing homes.' },
]

const scoring = [
  { num: '105', label: 'Core', sub: 'Mandatory at every assessment', rgb: '239,68,68' },
  { num: '457', label: 'Commitment', sub: 'Assessed at final assessment', rgb: '197,45,181' },
  { num: '60', label: 'Achievement', sub: 'Assessed at surveillance', rgb: '96,165,250' },
  { num: '17', label: 'Excellence', sub: 'Assessed at re-accreditation', rgb: '34,197,94' },
]

const chapters = [
  { code: 'AAC', rgb: '0,175,160', name: 'Access, Assessment & Continuity of Care', elements: 87, std: 13, core: 6,
    desc: 'Registration, OPD queue & patient flow, triage, initial & ongoing assessment, care planning, referrals, patient transfers, and discharge planning with discharge summaries.',
    help: 'Digital registration & OPD queue management, electronic assessment forms, structured care plans, and auto-generated discharge summaries via HMS + EHR.' },
  { code: 'COP', rgb: '56,189,248', name: 'Care of Patients', elements: 135, std: 20, core: 13,
    desc: 'The largest chapter. Clinical care delivery — ICU & emergency protocols, surgical & anaesthesia safety, blood transfusion, and specialty-specific care guidelines.',
    help: 'Electronic order management, clinical documentation, surgical safety checklists, and protocol templates built into the EHR for consistent, recorded care.' },
  { code: 'MOM', rgb: '239,68,68', name: 'Management of Medication', elements: 68, std: 11, core: 13,
    desc: 'Drug safety, formulary management, prescription, storage, dispensing, administration, and adverse drug reaction reporting. NABH explicitly expects pharmacy management software here.',
    help: 'Integrated pharmacy module with e-prescribing, drug-interaction alerts, high-alert medication flags, stock control, and ADR tracking.' },
  { code: 'PRE', rgb: '245,166,35', name: 'Patient Rights & Education', elements: 52, std: 8, core: 12,
    desc: 'Protecting patient & family rights, informed consent, privacy & confidentiality, grievance handling, and patient education.',
    help: 'Digital consent capture, a structured patient-grievance & feedback system, and privacy-controlled records with role-based access.' },
  { code: 'IPC', rgb: '34,197,94', name: 'Infection Prevention & Control', elements: 49, std: 8, core: 13,
    desc: 'A comprehensive infection-control programme — hand hygiene, biomedical waste management, antimicrobial stewardship, surveillance of healthcare-associated infections, and sterilisation.',
    help: 'Infection-tracking dashboards, antibiotic-stewardship reporting, and HAI surveillance data captured and trended automatically through the HMS.' },
  { code: 'PSQ', rgb: '197,45,181', name: 'Patient Safety & Quality Improvement', elements: 46, std: 7, core: 8,
    desc: 'The quality engine of NABH (formerly CQI). Quality indicators, clinical audits, incident reporting, root-cause analysis, and the international patient-safety goals.',
    help: 'Automated quality-indicator tracking with trend analysis, incident-reporting workflows, and audit-ready quality dashboards generated from live data.' },
  { code: 'ROM', rgb: '99,102,241', name: 'Responsibility of Management', elements: 37, std: 6, core: 4,
    desc: "Ethical and responsible leadership — organisational governance, strategic & operational planning, service agreements, and management of the hospital's resources.",
    help: 'Management dashboards & analytics giving leadership real-time visibility of operations, finances, and quality metrics for informed governance.' },
  { code: 'FMS', rgb: '249,115,22', name: 'Facility Management & Safety', elements: 43, std: 7, core: 11,
    desc: 'A safe environment — fire & non-fire emergency planning, operating-theatre management, medical-equipment maintenance & calibration, and utility management.',
    help: 'Equipment-maintenance scheduling, safety-audit checklists, and asset-management tracking so maintenance records are complete and retrievable.' },
  { code: 'HRM', rgb: '6,182,212', name: 'Human Resource Management', elements: 76, std: 13, core: 16,
    desc: 'Your people — staff credentialing & privileging, personal files, training & development, performance appraisal, and health & safety of staff. One of the most Core-heavy chapters.',
    help: 'Staff credentialing database, digital personnel records, and a full Learning Management System that records every training, certification, and competency.' },
  { code: 'IMS', rgb: '124,58,237', name: 'Information Management System', elements: 45, std: 7, core: 9,
    desc: 'The data backbone — medical-records management (MRD), data security & confidentiality, clinical coding, data backup & IT disaster recovery. Increasingly tied to ABDM integration.',
    help: 'Complete MRD management, encrypted & access-controlled records, automated backups, IT disaster recovery, and ABDM/ABHA integration.' },
]

const serviceMap = [
  { chapter: 'AAC', elements: 87, service: 'HMS — registration, queue, discharge', score: 4 },
  { chapter: 'COP', elements: 135, service: 'EHR — orders, clinical documentation', score: 4 },
  { chapter: 'MOM', elements: 68, service: 'Pharmacy module + e-prescribing', score: 5 },
  { chapter: 'PRE', elements: 52, service: 'Digital consent + feedback system', score: 3 },
  { chapter: 'IPC', elements: 49, service: 'Infection dashboards + stewardship', score: 4 },
  { chapter: 'PSQ', elements: 46, service: 'Quality-indicator analytics + audits', score: 5 },
  { chapter: 'ROM', elements: 37, service: 'Leadership dashboards + analytics', score: 3 },
  { chapter: 'FMS', elements: 43, service: 'Equipment & maintenance tracking', score: 3 },
  { chapter: 'HRM', elements: 76, service: 'LMS + credentialing database', score: 5 },
  { chapter: 'IMS', elements: 45, service: 'Full MRD + security + ABDM', score: 5 },
]

const trainingExpectations = [
  'Every staff member receives induction & orientation training, recorded and dated.',
  'Ongoing training on patient safety, infection control, BLS/CPR, fire safety, and biomedical waste.',
  'Documented competency assessment — not just attendance, but evidence the staff member can perform.',
  'Training records maintained in individual personnel files, retrievable on demand during assessment.',
  'Mock drills (e.g. Code Blue, fire) conducted and documented at defined intervals.',
]

const trainingLibrary = [
  'Patient Safety Goals', 'Infection Prevention & Control', 'BLS / CPR & Code Blue', 'Fire & Emergency Safety',
  'Biomedical Waste Management', 'Hand Hygiene', 'Medication Safety', 'Patient Rights & Consent',
  'Quality & Incident Reporting', 'Hospital Policies & SOPs',
]

const readinessPackage = [
  { item: 'Cloud HMS + EHR', chapters: 'AAC, COP, IMS, ROM, MOM' },
  { item: 'Pharmacy Management Module', chapters: 'MOM' },
  { item: 'Learning Management System + NABH library', chapters: 'HRM + training across all' },
  { item: 'Quality & Analytics Dashboards', chapters: 'PSQ, ROM' },
  { item: 'Infection-Control Tracking', chapters: 'IPC' },
  { item: 'Data Security, Backup & DR', chapters: 'IMS' },
  { item: 'ABDM / ABHA Integration', chapters: 'IMS, AAC' },
  { item: 'Equipment & Maintenance Tracking', chapters: 'FMS' },
  { item: 'Digital Consent & Feedback System', chapters: 'PRE' },
  { item: 'Staff Training & Onboarding (in-person)', chapters: 'HRM, all' },
  { item: 'Dedicated Account Manager + IT Support', chapters: 'Ongoing readiness' },
]

const checklistItems = [
  'Patient registration, OPD flow, and discharge summaries are digital and recorded (AAC)',
  'Clinical orders and care documentation are captured electronically (COP)',
  'Pharmacy runs on software with drug-interaction & high-alert checks (MOM)',
  'Patient consent and grievances are captured and trackable (PRE)',
  'Infection-control surveillance data is tracked and trended (IPC)',
  'Quality indicators are measured and reviewed regularly (PSQ)',
  'Leadership has dashboard visibility of operations & quality (ROM)',
  'Equipment maintenance & calibration records are complete (FMS)',
  "Every staff member's training & competency is documented and retrievable (HRM)",
  'Medical records are secure, backed up, and ABDM-ready (IMS)',
  'You can produce evidence for any chapter on demand, without scrambling',
  'Your systems keep you audit-ready between assessments, not just before them',
]

function ScoreDots({ score, rgb = '197,45,181' }) {
  return (
    <span style={{ display: 'inline-flex', gap: 4 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          style={{
            width: 8, height: 8, borderRadius: '50%',
            background: i < score ? `rgb(${rgb})` : 'var(--border-default)',
          }}
        />
      ))}
    </span>
  )
}

export default function NABHAccreditationPage() {
  const [openChapter, setOpenChapter] = useState(0)
  const [checked, setChecked] = useState(() => new Set())
  const blobRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const fn = (e) => {
      if (!blobRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 40
      const y = (e.clientY / window.innerHeight - 0.5) * 40
      blobRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
    }
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])

  function toggleCheck(i) {
    setChecked(prev => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  const tickedCount = checked.size

  return (
    <>
      <style>{`
        .nabh-page { background: var(--bg-base); color: var(--text-primary); font-family: var(--font-body); }

        /* ════════════════════════════════════════
           HERO
        ════════════════════════════════════════ */
        .nabh-hero { position: relative; overflow: hidden; padding: 130px 56px 70px; }
        .nabh-hero-mesh {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background:
            radial-gradient(ellipse 60% 55% at 14% 50%, rgba(124,58,237,.16) 0%, transparent 65%),
            radial-gradient(ellipse 45% 40% at 86% 18%, rgba(197,45,181,.12) 0%, transparent 60%);
        }
        .nabh-hero-grid {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image:
            linear-gradient(rgba(124,58,237,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,.05) 1px, transparent 1px);
          background-size: 72px 72px;
        }
        .nabh-hero-blob {
          position: absolute; top: 40%; left: 80%; transform: translate(-50%, -50%);
          width: 540px; height: 540px;
          background: radial-gradient(circle, rgba(124,58,237,.12) 0%, transparent 70%);
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: blob 14s ease-in-out infinite; filter: blur(50px);
          transition: transform 1.4s cubic-bezier(.4,0,.2,1); pointer-events: none; z-index: 0;
        }
        .nabh-hero-inner { position: relative; z-index: 2; max-width: 800px; margin: 0 auto; text-align: center; }
        .nabh-breadcrumb {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--text-disabled); margin-bottom: 22px;
        }
        .nabh-breadcrumb a { color: rgb(124,58,237); text-decoration: none; }
        .nabh-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
          color: rgb(124,58,237); background: rgba(124,58,237,.12); border: 1px solid rgba(124,58,237,.28);
          padding: 6px 16px; border-radius: 100px; margin: 0 auto 24px; width: fit-content;
        }
        .nabh-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: rgb(124,58,237); }
        .nabh-hero-title {
          font-family: var(--font-display); font-weight: 800; font-size: clamp(34px, 5vw, 54px);
          letter-spacing: -2px; line-height: 1.1; color: var(--text-primary); margin-bottom: 20px;
        }
        .nabh-hero-title em {
          font-style: normal; background: linear-gradient(135deg, rgb(124,58,237), rgb(197,45,181));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .nabh-hero-desc {
          font-size: 16px; color: var(--text-secondary); line-height: 1.8; font-weight: 300;
          max-width: 620px; margin: 0 auto 32px;
        }
        .nabh-hero-actions { display: flex; gap: 14px; flex-wrap: wrap; justify-content: center; margin-bottom: 44px; }

        .nabh-hero-stats { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: var(--border-faint); border: 1px solid var(--border-faint); border-radius: 18px; overflow: hidden; }
        .nabh-hero-stat { background: var(--bg-raised); padding: 22px 16px; text-align: center; transition: background .25s; }
        .nabh-hero-stat:hover { background: var(--bg-elevated); }
        .nabh-hero-stat-num { font-family: var(--font-display); font-size: 24px; font-weight: 800; color: rgb(124,58,237); letter-spacing: -.6px; line-height: 1; margin-bottom: 6px; }
        .nabh-hero-stat-label { font-family: var(--font-mono); font-size: 9px; color: var(--text-muted); letter-spacing: .5px; text-transform: uppercase; }

        /* ════════════════════════════════════════
           SHARED
        ════════════════════════════════════════ */
        .nabh-section-label {
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
          color: rgb(124,58,237); background: rgba(124,58,237,.09); border: 1px solid rgba(124,58,237,.25);
          padding: 5px 14px; border-radius: 100px; width: fit-content; margin-bottom: 16px;
        }
        .nabh-section-title { font-family: var(--font-display); font-size: clamp(24px,3vw,32px); font-weight: 700; color: var(--text-primary); letter-spacing: -.7px; margin-bottom: 16px; }
        .nabh-section-desc { font-size: 15px; color: var(--text-secondary); line-height: 1.8; font-weight: 300; max-width: 700px; margin-bottom: 32px; }

        .nabh-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .nabh-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }

        .nabh-card {
          background: var(--bg-raised); border: 1px solid var(--border-faint); border-radius: 18px;
          padding: 24px 22px; position: relative; overflow: hidden; transition: all .3s var(--ease);
        }
        .nabh-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, rgb(124,58,237), rgb(197,45,181));
          transform: scaleX(0); transform-origin: left; transition: transform .35s var(--ease);
        }
        .nabh-card:hover { transform: translateY(-4px); border-color: rgba(124,58,237,.35); background: var(--bg-elevated); }
        .nabh-card:hover::before { transform: scaleX(1); }
        .nabh-card-icon { font-size: 22px; margin-bottom: 12px; }
        .nabh-card-title { font-family: var(--font-display); font-size: 14.5px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px; }
        .nabh-card-text { font-size: 12.5px; color: var(--text-muted); line-height: 1.7; }

        .nabh-stat-tile { background: var(--bg-raised); border: 1px solid var(--border-faint); border-radius: 16px; padding: 22px 18px; text-align: center; }
        .nabh-stat-num { font-family: var(--font-display); font-size: 28px; font-weight: 800; letter-spacing: -1px; line-height: 1; margin-bottom: 6px; }
        .nabh-stat-label { font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: var(--text-primary); margin-bottom: 4px; }
        .nabh-stat-sub { font-size: 11px; color: var(--text-muted); }

        .nabh-table-wrap { overflow-x: auto; border-radius: 16px; border: 1px solid var(--border-faint); margin-bottom: 8px; }
        .nabh-table { width: 100%; border-collapse: collapse; font-size: 13.5px; }
        .nabh-table th { text-align: left; padding: 14px 18px; background: rgba(124,58,237,.10); color: var(--text-primary); font-family: var(--font-display); font-weight: 700; border-bottom: 1px solid var(--border-default); }
        .nabh-table td { padding: 14px 18px; border-bottom: 1px solid var(--border-faint); color: var(--text-secondary); }
        .nabh-table tr:last-child td { border-bottom: none; }

        .nabh-chapter-list { display: flex; flex-direction: column; gap: 10px; }
        .nabh-chapter-item { background: var(--bg-raised); border: 1px solid var(--border-faint); border-radius: 16px; overflow: hidden; transition: border-color .25s; }
        .nabh-chapter-item.open { border-color: rgba(var(--ch-accent), .4); }
        .nabh-chapter-head { display: flex; align-items: center; gap: 16px; padding: 18px 22px; cursor: pointer; user-select: none; }
        .nabh-chapter-code {
          font-family: var(--font-mono); font-size: 11px; font-weight: 700; letter-spacing: 1px;
          color: rgb(var(--ch-accent)); background: rgba(var(--ch-accent),.14); border: 1px solid rgba(var(--ch-accent),.3);
          padding: 5px 10px; border-radius: 8px; flex-shrink: 0; min-width: 46px; text-align: center;
        }
        .nabh-chapter-name { font-family: var(--font-display); font-size: 15px; font-weight: 700; color: var(--text-primary); flex: 1; }
        .nabh-chapter-counts { display: flex; gap: 14px; font-family: var(--font-mono); font-size: 10.5px; color: var(--text-muted); flex-shrink: 0; }
        .nabh-chapter-counts b { color: var(--text-primary); }
        .nabh-chapter-ico {
          width: 24px; height: 24px; border-radius: 6px; flex-shrink: 0;
          background: rgba(var(--ch-accent),.10); border: 1px solid rgba(var(--ch-accent),.25);
          display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700;
          color: rgb(var(--ch-accent)); transition: transform .3s;
        }
        .nabh-chapter-item.open .nabh-chapter-ico { transform: rotate(45deg); }
        .nabh-chapter-body { max-height: 0; overflow: hidden; transition: max-height .4s var(--ease); padding: 0 22px; }
        .nabh-chapter-item.open .nabh-chapter-body { max-height: 260px; padding: 0 22px 20px; }
        .nabh-chapter-desc { font-size: 13.5px; color: var(--text-secondary); line-height: 1.75; margin-bottom: 12px; font-weight: 300; }
        .nabh-chapter-help { font-size: 13px; color: var(--text-secondary); line-height: 1.75; padding: 12px 16px; border-left: 2px solid rgba(var(--ch-accent),.5); background: rgba(var(--ch-accent),.05); border-radius: 0 10px 10px 0; }
        .nabh-chapter-help b { color: rgb(var(--ch-accent)); }

        .nabh-pill-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 20px; }
        .nabh-pill {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: .5px;
          color: rgb(124,58,237); background: rgba(124,58,237,.10); border: 1px solid rgba(124,58,237,.25);
          padding: 7px 14px; border-radius: 100px;
        }

        .nabh-checklist { display: flex; flex-direction: column; gap: 8px; }
        .nabh-check-row {
          display: flex; align-items: flex-start; gap: 14px; padding: 14px 18px;
          background: var(--bg-raised); border: 1px solid var(--border-faint); border-radius: 12px;
          cursor: pointer; transition: border-color .2s, background .2s;
        }
        .nabh-check-row:hover { border-color: rgba(124,58,237,.3); }
        .nabh-checkbox {
          width: 20px; height: 20px; border-radius: 6px; flex-shrink: 0; margin-top: 1px;
          border: 1.5px solid var(--border-default); display: flex; align-items: center; justify-content: center;
          font-size: 11px; transition: all .2s;
        }
        .nabh-checkbox.checked { background: linear-gradient(135deg, rgb(124,58,237), rgb(197,45,181)); border-color: transparent; color: #fff; }
        .nabh-check-text { font-size: 13.5px; color: var(--text-secondary); line-height: 1.6; }
        .nabh-check-text.checked-text { color: var(--text-primary); }
        .nabh-checklist-summary { margin-top: 20px; padding: 18px 22px; border-radius: 14px; font-size: 13.5px; line-height: 1.7; }
        .nabh-checklist-summary.ok { background: rgba(34,197,94,.10); border: 1px solid rgba(34,197,94,.3); color: var(--text-secondary); }
        .nabh-checklist-summary.warn { background: rgba(239,68,68,.08); border: 1px solid rgba(239,68,68,.25); color: var(--text-secondary); }
        .nabh-checklist-summary b { color: var(--text-primary); }

        .nabh-cta-wrap { padding: 80px 56px; max-width: 1200px; margin: 0 auto; }
        .nabh-cta {
          position: relative; overflow: hidden; text-align: center;
          background: linear-gradient(135deg, rgba(124,58,237,.18) 0%, rgba(197,45,181,.18) 100%);
          border: 1px solid rgba(124,58,237,.3); border-radius: 28px; padding: 56px 56px;
        }
        .nabh-cta::after {
          content: ''; position: absolute; top: -80px; left: 50%; transform: translateX(-50%);
          width: 360px; height: 360px; border-radius: 50%; background: rgba(124,58,237,.14); filter: blur(60px); pointer-events: none;
        }
        .nabh-cta-inner { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; }
        .nabh-cta-chip {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
          color: var(--text-muted); background: var(--bg-raised); border: 1px solid var(--border-faint);
          padding: 5px 14px; border-radius: 100px; margin-bottom: 18px;
        }
        .nabh-cta h2 { font-family: var(--font-display); font-size: clamp(22px,3vw,32px); font-weight: 800; color: var(--text-primary); letter-spacing: -1px; margin-bottom: 12px; }
        .nabh-cta p { font-size: 14.5px; color: var(--text-secondary); line-height: 1.75; margin-bottom: 28px; }
        .nabh-cta-btns { display: flex; gap: 14px; flex-wrap: wrap; justify-content: center; }

        @media (max-width: 1024px) {
          .nabh-grid-4 { grid-template-columns: repeat(2, 1fr); }
          .nabh-grid-3 { grid-template-columns: repeat(2, 1fr); }
          .nabh-hero-stats { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 768px) {
          .nabh-hero { padding: 110px 20px 50px; }
          .nabh-grid-4, .nabh-grid-3 { grid-template-columns: 1fr; }
          .nabh-chapter-counts { display: none; }
          .nabh-cta-wrap { padding: 56px 20px; }
          .nabh-cta { padding: 40px 24px; }
        }
      `}</style>

      <div className="nabh-page">
        <Navbar />

        {/* ── HERO ── */}
        <section className="nabh-hero">
          <div className="nabh-hero-mesh" />
          <div className="nabh-hero-grid" />
          <div className="nabh-hero-blob" ref={blobRef} />

          <div className="nabh-hero-inner">
            <div className="nabh-breadcrumb">
              <Link to="/">Home</Link><span>›</span><span>NABH Accreditation Guide</span>
            </div>

            <div className="nabh-eyebrow">
              <span className="nabh-eyebrow-dot" />
              Free Guide · For Hospital Leadership
            </div>

            <h1 className="nabh-hero-title">
              NABH Accreditation: The Requirements <em>& How MedXL Helps</em>
            </h1>

            <p className="nabh-hero-desc">
              A practical checklist of what hospitals must put in place for NABH 6th
              Edition accreditation — and the exact MedXL services, including staff
              Learning & Development, that help you get there faster.
            </p>

            <div className="nabh-hero-actions">
              <a
                href="https://api.whatsapp.com/send/?phone=918148181288&text=I'd%20like%20a%20free%20NABH%20readiness%20assessment"
                className="mx-btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                📋 Book Free Readiness Assessment
              </a>
              <a href="#checklist" className="mx-btn-ghost">Jump to Checklist ↓</a>
            </div>

            <div className="nabh-hero-stats">
              {heroStats.map(s => (
                <div className="nabh-hero-stat" key={s.label}>
                  <div className="nabh-hero-stat-num">{s.num}</div>
                  <div className="nabh-hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY PURSUE NABH ── */}
        <section className="mx-section">
          <div className="mx-container">
            <div className="nabh-section-label">At a Glance</div>
            <h2 className="nabh-section-title">Why Hospitals Pursue NABH</h2>
            <p className="nabh-section-desc">
              NABH — the National Accreditation Board for Hospitals & Healthcare Providers
              — is India's gold standard for healthcare quality. Accreditation signals to
              patients, insurers, and government schemes that your hospital meets
              rigorous, internationally-benchmarked standards of care and safety.
            </p>

            <div className="nabh-grid-4">
              {whyPursue.map(w => (
                <div className="nabh-card" key={w.title}>
                  <div className="nabh-card-icon">{w.icon}</div>
                  <div className="nabh-card-title">{w.title}</div>
                  <div className="nabh-card-text">{w.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROGRAMMES ── */}
        <section className="mx-section-surface">
          <div className="mx-container">
            <div className="nabh-section-label">Which Fits Your Hospital</div>
            <h2 className="nabh-section-title">Choosing a Programme</h2>

            <div className="nabh-table-wrap">
              <table className="nabh-table">
                <thead>
                  <tr><th>Programme</th><th>Beds</th><th>What It Covers</th></tr>
                </thead>
                <tbody>
                  {programmes.map(p => (
                    <tr key={p.name}>
                      <td style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{p.name}</td>
                      <td>{p.beds}</td>
                      <td>{p.covers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 16, lineHeight: 1.7 }}>
              NABH 6th Edition moves to a four-year accreditation cycle with a midterm
              surveillance assessment at two years — accreditation requires systems that
              maintain quality and documentation continuously, not just once.
            </p>
          </div>
        </section>

        {/* ── SCORING ── */}
        <section className="mx-section">
          <div className="mx-container">
            <div className="nabh-section-label">How Scoring Works</div>
            <h2 className="nabh-section-title">639 Objective Elements, Four Tiers</h2>
            <p className="nabh-section-desc">
              Not all requirements carry equal weight. The <strong style={{ color: 'var(--text-primary)' }}>Core</strong> elements
              are non-negotiable — mandatory at every single assessment.
            </p>

            <div className="nabh-grid-4">
              {scoring.map(s => (
                <div className="nabh-stat-tile" key={s.label}>
                  <div className="nabh-stat-num" style={{ color: `rgb(${s.rgb})` }}>{s.num}</div>
                  <div className="nabh-stat-label">{s.label}</div>
                  <div className="nabh-stat-sub">{s.sub}</div>
                </div>
              ))}
            </div>

            <div className="nabh-card" style={{ marginTop: 24, borderLeft: '3px solid rgb(124,58,237)' }}>
              <div className="nabh-card-title" style={{ fontSize: 13, marginBottom: 10 }}>The Critical Insight</div>
              <div className="nabh-card-text" style={{ fontSize: 13.5 }}>
                A large share of Core requirements involve documentation, records,
                medication safety, infection tracking, and information management —
                precisely the areas where a good Hospital Management System and structured
                staff training do the heavy lifting. Get your systems right, and a
                substantial portion of the mandatory burden is handled by design.
              </div>
            </div>
          </div>
        </section>

        {/* ── 10 CHAPTERS ── */}
        <section className="mx-section-surface">
          <div className="mx-container">
            <div className="nabh-section-label">The Requirements</div>
            <h2 className="nabh-section-title">The 10 Chapters — Checklist</h2>
            <p className="nabh-section-desc">
              The first five chapters are patient-centric; the last five are
              organisation-centric. Tap a chapter to see what it requires and how MedXL helps.
            </p>

            <div className="nabh-chapter-list">
              {chapters.map((c, i) => (
                <div
                  className={`nabh-chapter-item${openChapter === i ? ' open' : ''}`}
                  key={c.code}
                  style={{ '--ch-accent': c.rgb }}
                >
                  <div className="nabh-chapter-head" onClick={() => setOpenChapter(openChapter === i ? -1 : i)}>
                    <span className="nabh-chapter-code">{c.code}</span>
                    <span className="nabh-chapter-name">{c.name}</span>
                    <span className="nabh-chapter-counts">
                      <span><b>{c.elements}</b> elements</span>
                      <span><b>{c.core}</b> core</span>
                    </span>
                    <span className="nabh-chapter-ico">+</span>
                  </div>
                  <div className="nabh-chapter-body">
                    <p className="nabh-chapter-desc">{c.desc}</p>
                    <div className="nabh-chapter-help">
                      <b>How MedXL Helps:</b> {c.help}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICE MAP ── */}
        <section className="mx-section">
          <div className="mx-container">
            <div className="nabh-section-label">Service Map</div>
            <h2 className="nabh-section-title">What MedXL Provides, Chapter by Chapter</h2>
            <p className="nabh-section-desc">
              A direct map of every NABH chapter to the MedXL service that supports it.
              No chapter scores zero — MedXL contributes to all ten.
            </p>

            <div className="nabh-table-wrap">
              <table className="nabh-table">
                <thead>
                  <tr><th>Chapter</th><th>Elements</th><th>Primary MedXL Service</th><th>Support</th></tr>
                </thead>
                <tbody>
                  {serviceMap.map(s => {
                    const ch = chapters.find(c => c.code === s.chapter)
                    return (
                      <tr key={s.chapter}>
                        <td style={{ fontWeight: 700, color: `rgb(${ch?.rgb})` }}>{s.chapter}</td>
                        <td>{s.elements}</td>
                        <td>{s.service}</td>
                        <td><ScoreDots score={s.score} rgb={ch?.rgb} /></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── LMS TRAINING ── */}
        <section className="mx-section-surface">
          <div className="mx-container">
            <div className="nabh-section-label">Learning & Development</div>
            <h2 className="nabh-section-title">LMS: The Training Engine for NABH</h2>
            <p className="nabh-section-desc">
              NABH's HRM chapter is one of the most Core-heavy in the entire standard —
              and training & competency sit at its centre. An LMS turns that proof from a
              scramble into a click.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 0 }}>
              {trainingExpectations.map(t => (
                <li key={t} style={{ display: 'flex', gap: 12, fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  <span style={{ color: 'rgb(124,58,237)', flexShrink: 0 }}>✓</span>{t}
                </li>
              ))}
            </ul>

            <div className="nabh-pill-row">
              {trainingLibrary.map(t => <span className="nabh-pill" key={t}>{t}</span>)}
            </div>

            <div className="nabh-card" style={{ marginTop: 24, borderLeft: '3px solid rgb(124,58,237)' }}>
              <div className="nabh-card-title" style={{ fontSize: 13, marginBottom: 10 }}>Why This Wins Deals</div>
              <div className="nabh-card-text" style={{ fontSize: 13.5 }}>
                Training documentation is one of the most common gaps NABH assessors flag.
                The MedXL LMS gives every hospital pre-loaded NABH training modules,
                automated assignment by role, online competency assessments, digital
                certificates, and a one-click training register — so when an assessor asks
                to see your records, it's instant.
              </div>
            </div>
          </div>
        </section>

        {/* ── READINESS PACKAGE ── */}
        <section className="mx-section">
          <div className="mx-container">
            <div className="nabh-section-label">The Offer</div>
            <h2 className="nabh-section-title">The MedXL NABH Readiness Package</h2>
            <p className="nabh-section-desc">
              Everything a hospital needs to digitise for accreditation, bundled into one
              partnership — while your NABH consultant guides the clinical specifics.
            </p>

            <div className="nabh-table-wrap">
              <table className="nabh-table">
                <thead>
                  <tr><th>What's Included</th><th>NABH Chapters Served</th></tr>
                </thead>
                <tbody>
                  {readinessPackage.map(r => (
                    <tr key={r.item}>
                      <td style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{r.item}</td>
                      <td>{r.chapters}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── CHECKLIST ── */}
        <section className="mx-section-surface" id="checklist">
          <div className="mx-container">
            <div className="nabh-section-label">Action</div>
            <h2 className="nabh-section-title">Your NABH Readiness Checklist</h2>
            <p className="nabh-section-desc">
              A quick self-assessment. Tap each item your hospital can confidently tick.
            </p>
            <div className="nabh-checklist">
              {checklistItems.map((item, i) => {
                const isChecked = checked.has(i)
                return (
                  <div className="nabh-check-row" key={i} onClick={() => toggleCheck(i)}>
                    <span className={`nabh-checkbox${isChecked ? ' checked' : ''}`}>{isChecked ? '✓' : ''}</span>
                    <span className={`nabh-check-text${isChecked ? ' checked-text' : ''}`}>{item}</span>
                  </div>
                )
              })}
            </div>
            <div className={`nabh-checklist-summary ${tickedCount >= 10 ? 'ok' : 'warn'}`}>
              <b>{tickedCount} of 12 ticked.</b>{' '}
              {tickedCount >= 10
                ? "You're in strong shape for an NABH assessment — MedXL can help close any remaining gaps."
                : 'Your hospital likely has technology and documentation gaps that could slow your NABH journey. Every unticked item is exactly what the MedXL NABH Readiness Package is built to close.'}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}