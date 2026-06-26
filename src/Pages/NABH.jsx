import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
// import './medxl.css'  ← already loaded once at your app root, same as HomePage

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const heroStats = [
  { num: '10',   label: 'Standards chapters' },
  { num: '639',  label: 'Objective elements' },
  { num: '105',  label: 'Core · mandatory every time' },
  { num: '4-yr', label: 'Accreditation cycle' },
]

const readinessChecks = [
  { type: 'check', label: 'HMS + EHR',            detail: 'AAC, COP & IMS covered' },
  { type: 'check', label: 'Pharmacy module',       detail: 'MOM core requirement met' },
  { type: 'check', label: 'LMS + training records', detail: 'HRM — most Core-heavy chapter' },
  { type: 'warn',  label: 'Infection logs',        detail: '— still on paper, move to dashboard' },
]

const whyCards = [
  { icon: '💰', title: 'Higher reimbursement', body: 'NABH-accredited hospitals command 10–15% higher reimbursement rates from insurers, and Entry-Level hospitals get 10% extra on PMJAY claims.' },
  { icon: '🤝', title: 'Patient trust',         body: 'Most accredited hospitals report higher patient-trust scores within the first year — accreditation is a visible mark of quality.' },
  { icon: '📉', title: 'Fewer complaints',      body: 'Accredited hospitals report a significant reduction in patient complaints through standardised, safer processes.' },
  { icon: '🏥', title: 'Empanelment',           body: 'NABH accreditation is increasingly required for empanelment with insurers and government health schemes.' },
]

const programmes = [
  { name: 'Full Accreditation', beds: '50+',     covers: 'All 10 chapters under the 6th Edition — the complete standard' },
  { name: 'Entry Level',        beds: 'Smaller',  covers: '5 key chapters — a stepping stone toward full accreditation' },
  { name: 'SHCO',               beds: '<50',      covers: 'Small Healthcare Organisations — clinics & nursing homes' },
]

const scoringTiers = [
  { n: '105', label: 'Core',       note: 'Mandatory at every assessment', color: 'red'    },
  { n: '457', label: 'Commitment', note: 'Assessed at final assessment',  color: 'brand'  },
  { n: '60',  label: 'Achievement',note: 'Assessed at surveillance',      color: 'blue'   },
  { n: '17',  label: 'Excellence', note: 'Assessed at re-accreditation',  color: 'green'  },
]

const chapters = [
  { code: 'AAC', title: 'Access, Assessment & Continuity of Care', elements: 87,  std: 13, core: 6,
    desc: 'Registration, OPD queue & patient flow, triage, initial & ongoing assessment, care planning, referrals, patient transfers, and discharge planning with discharge summaries.',
    help: 'Digital registration & OPD queue management, electronic assessment forms, structured care plans, and auto-generated discharge summaries via HMS + EHR.' },
  { code: 'COP', title: 'Care of Patients', elements: 135, std: 20, core: 13,
    desc: 'The largest chapter. Clinical care delivery — ICU & emergency protocols, surgical & anaesthesia safety, blood transfusion, and specialty-specific care guidelines.',
    help: 'Electronic order management, clinical documentation, surgical safety checklists, and protocol templates built into the EHR for consistent, recorded care.' },
  { code: 'MOM', title: 'Management of Medication', elements: 68, std: 11, core: 13,
    desc: 'Drug safety, formulary management, prescription, storage, dispensing, administration, and adverse drug reaction reporting. NABH explicitly expects pharmacy management software here.',
    help: 'Integrated pharmacy module with e-prescribing, drug-interaction alerts, high-alert medication flags, stock control, and ADR tracking.' },
  { code: 'PRE', title: 'Patient Rights & Education', elements: 52, std: 8, core: 12,
    desc: 'Protecting patient & family rights, informed consent, privacy & confidentiality, grievance handling, and patient education.',
    help: 'Digital consent capture, a structured patient-grievance & feedback system, and privacy-controlled records with role-based access.' },
  { code: 'IPC', title: 'Infection Prevention & Control', elements: 49, std: 8, core: 13,
    desc: 'A comprehensive infection-control programme — hand hygiene, biomedical waste management, antimicrobial stewardship, surveillance of healthcare-associated infections, and sterilisation.',
    help: 'Infection-tracking dashboards, antibiotic-stewardship reporting, and HAI surveillance data captured and trended automatically through the HMS.' },
  { code: 'PSQ', title: 'Patient Safety & Quality Improvement', elements: 46, std: 7, core: 8,
    desc: 'The quality engine of NABH (formerly CQI). Quality indicators, clinical audits, incident reporting, root-cause analysis, and the international patient-safety goals.',
    help: 'Automated quality-indicator tracking with trend analysis, incident-reporting workflows, and audit-ready quality dashboards generated from live data.' },
  { code: 'ROM', title: 'Responsibility of Management', elements: 37, std: 6, core: 4,
    desc: "Ethical and responsible leadership — organisational governance, strategic & operational planning, service agreements, and management of the hospital's resources.",
    help: 'Management dashboards & analytics giving leadership real-time visibility of operations, finances, and quality metrics for informed governance.' },
  { code: 'FMS', title: 'Facility Management & Safety', elements: 43, std: 7, core: 11,
    desc: 'A safe environment — fire & non-fire emergency planning, operating-theatre management, medical-equipment maintenance & calibration, and utility management.',
    help: 'Equipment-maintenance scheduling, safety-audit checklists, and asset-management tracking so maintenance records are complete and retrievable.' },
  { code: 'HRM', title: 'Human Resource Management', elements: 76, std: 13, core: 16,
    desc: 'Your people — staff credentialing & privileging, personal files, training & development, performance appraisal, and health & safety of staff. One of the most Core-heavy chapters.',
    help: 'Staff credentialing database, digital personnel records, and a full Learning Management System that records every training, certification, and competency.' },
  { code: 'IMS', title: 'Information Management System', elements: 45, std: 7, core: 9,
    desc: 'The data backbone — medical-records management, data security & confidentiality, clinical coding, data backup & IT disaster recovery. Increasingly tied to ABDM integration.',
    help: 'Complete MRD management, encrypted & access-controlled records, automated backups, IT disaster recovery, and ABDM/ABHA integration — the entire chapter is core MedXL territory.' },
]

const serviceMap = [
  { code: 'AAC', label: 'Access & Care',     elements: 87,  service: 'HMS — registration, queue, discharge', score: 4 },
  { code: 'COP', label: 'Care of Patients',  elements: 135, service: 'EHR — orders, clinical documentation',  score: 4 },
  { code: 'MOM', label: 'Medication',        elements: 68,  service: 'Pharmacy module + e-prescribing',       score: 5 },
  { code: 'PRE', label: 'Patient Rights',    elements: 52,  service: 'Digital consent + feedback system',     score: 3 },
  { code: 'IPC', label: 'Infection Control', elements: 49,  service: 'Infection dashboards + stewardship',    score: 4 },
  { code: 'PSQ', label: 'Quality',           elements: 46,  service: 'Quality-indicator analytics + audits',  score: 5 },
  { code: 'ROM', label: 'Management',        elements: 37,  service: 'Leadership dashboards + analytics',    score: 3 },
  { code: 'FMS', label: 'Facility Safety',   elements: 43,  service: 'Equipment & maintenance tracking',     score: 3 },
  { code: 'HRM', label: 'Human Resources',   elements: 76,  service: 'LMS + credentialing database',         score: 5 },
  { code: 'IMS', label: 'Information',       elements: 45,  service: 'Full MRD + security + ABDM',           score: 5 },
]

const primaryEnablers = [
  { code: 'MOM', title: 'Pharmacy software' },
  { code: 'PSQ', title: 'Quality analytics' },
  { code: 'HRM', title: 'LMS & training records' },
  { code: 'IMS', title: 'Records, security, ABDM' },
]

const valueServices = [
  { service: 'Hospital Management System (HMS)', sub: 'Registration, billing, OPD/IPD, queue, MRD',  chapters: 'AAC, COP, IMS, ROM', value: 10 },
  { service: 'Electronic Health Records (EHR)',   sub: 'Clinical notes, orders, care plans',          chapters: 'COP, AAC, IMS',      value: 10 },
  { service: 'Pharmacy Management Module',        sub: 'E-prescribing, drug alerts, ADR, stock',      chapters: 'MOM',                value: 9  },
  { service: 'Learning Management System (LMS)',  sub: 'Staff training, competency, certifications', chapters: 'HRM, IPC, PSQ, all', value: 9  },
  { service: 'Quality & Analytics Dashboards',     sub: 'Quality indicators, audits, trends',          chapters: 'PSQ, ROM, IPC',      value: 9  },
  { service: 'Data Security & Backup / DR',        sub: 'Encryption, access control, recovery',        chapters: 'IMS',                value: 8  },
  { service: 'ABDM / ABHA Integration',            sub: 'Health ID linking, record sharing',           chapters: 'IMS, AAC',           value: 8  },
  { service: 'LIMS (Lab Information System)',      sub: 'Lab orders, results, QC',                     chapters: 'COP, AAC',           value: 7  },
  { service: 'Infection-Control Module',           sub: 'HAI surveillance, stewardship reports',       chapters: 'IPC',                value: 7  },
  { service: 'Equipment & Asset Tracking',         sub: 'Maintenance schedules, calibration logs',     chapters: 'FMS',                value: 6  },
  { service: 'Digital Consent & Feedback',         sub: 'Consent capture, grievance tracking',         chapters: 'PRE',                value: 6  },
]

const lmsExpectations = [
  'Every staff member receives induction & orientation training, recorded and dated.',
  'Ongoing training on patient safety, infection control, BLS/CPR, fire safety, and biomedical waste.',
  'Documented competency assessment — not just attendance, but evidence the staff member can perform.',
  'Training records maintained in individual personnel files, retrievable on demand during assessment.',
  'Mock drills (e.g. Code Blue, fire) conducted and documented at defined intervals.',
]

const lmsLibrary = [
  'Patient Safety Goals', 'Infection Prevention & Control', 'BLS / CPR & Code Blue', 'Fire & Emergency Safety',
  'Biomedical Waste Management', 'Hand Hygiene', 'Medication Safety', 'Patient Rights & Consent',
  'Quality & Incident Reporting', 'Hospital Policies & SOPs',
]

const packageItems = [
  { item: 'Cloud HMS + EHR',                              chapters: 'AAC, COP, IMS, ROM, MOM' },
  { item: 'Pharmacy Management Module',                   chapters: 'MOM' },
  { item: 'Learning Management System + NABH library',   chapters: 'HRM + training across all' },
  { item: 'Quality & Analytics Dashboards',               chapters: 'PSQ, ROM' },
  { item: 'Infection-Control Tracking',                   chapters: 'IPC' },
  { item: 'Data Security, Backup & DR',                   chapters: 'IMS' },
  { item: 'ABDM / ABHA Integration',                      chapters: 'IMS, AAC' },
  { item: 'Equipment & Maintenance Tracking',             chapters: 'FMS' },
  { item: 'Digital Consent & Feedback System',            chapters: 'PRE' },
  { item: 'Staff Training & Onboarding (in-person)',      chapters: 'HRM, all' },
  { item: 'Dedicated Account Manager + IT Support',       chapters: 'Ongoing readiness' },
]

const checklistItems = [
  { text: 'Patient registration, OPD flow, and discharge summaries are digital and recorded', tag: 'AAC' },
  { text: 'Clinical orders and care documentation are captured electronically', tag: 'COP' },
  { text: 'Pharmacy runs on software with drug-interaction & high-alert checks', tag: 'MOM' },
  { text: 'Patient consent and grievances are captured and trackable', tag: 'PRE' },
  { text: 'Infection-control surveillance data is tracked and trended', tag: 'IPC' },
  { text: 'Quality indicators are measured and reviewed regularly', tag: 'PSQ' },
  { text: 'Leadership has dashboard visibility of operations & quality', tag: 'ROM' },
  { text: 'Equipment maintenance & calibration records are complete', tag: 'FMS' },
  { text: "Every staff member's training & competency is documented and retrievable", tag: 'HRM' },
  { text: 'Medical records are secure, backed up, and ABDM-ready', tag: 'IMS' },
  { text: 'You can produce evidence for any chapter on demand, without scrambling', tag: null },
  { text: 'Your systems keep you audit-ready between assessments, not just before them', tag: null },
]

/* dot-score helper, e.g. score 4 of 5 → "●●●●○" rendered as styled spans */
function ScoreDots({ score, total = 5 }) {
  return (
    <span className="np-dots" aria-label={`${score} of ${total}`}>
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} className={i < score ? 'np-dot np-dot-on' : 'np-dot'} />
      ))}
    </span>
  )
}

/* ─────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────── */
export default function NabhPage() {
  const blobRef = useRef(null)
  const [checked, setChecked] = useState(() => Array(checklistItems.length).fill(false))

  useEffect(() => {
    window.scrollTo(0, 0)
    const fn = (e) => {
      if (!blobRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 50
      const y = (e.clientY / window.innerHeight - 0.5) * 50
      blobRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
    }
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])

  const tickedCount = checked.filter(Boolean).length
  const toggleCheck = (i) => setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)))

  return (
    <>
      <style>{`
        @keyframes np-blob {
          0%,100%{ border-radius:60% 40% 30% 70%/60% 30% 70% 40%; }
          33%    { border-radius:30% 60% 70% 40%/50% 60% 30% 60%; }
          66%    { border-radius:50% 40% 60% 30%/40% 70% 40% 60%; }
        }
        @keyframes np-spin-cw  { to{ transform:translate(-50%,-50%) rotate(360deg); } }
        @keyframes np-spin-ccw { to{ transform:translate(-50%,-50%) rotate(-360deg); } }
        @keyframes np-pulse    { 0%{transform:scale(1);opacity:.8;} 100%{transform:scale(2.4);opacity:0;} }
        @keyframes np-float    { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-12px);} }
        @keyframes np-fade-up  { from{opacity:0;transform:translateY(24px);} to{opacity:1;transform:translateY(0);} }
        @keyframes np-fade-in  { from{opacity:0;transform:scale(.97);} to{opacity:1;transform:scale(1);} }
        @keyframes np-fill     { from{ width:0; } }

        /* ══ HERO ══════════════════════════════════════════════ */
        .np-hero {
          min-height: 92vh;
          background: var(--bg-base);
          display: flex; align-items: center;
          padding: 120px 56px 80px;
          position: relative; overflow: hidden;
        }
        .np-hero-mesh {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 60% 55% at 15% 50%, rgba(197,45,181,.18) 0%, transparent 65%),
            radial-gradient(ellipse 45% 40% at 85% 20%, rgba(92,37,132,.15) 0%, transparent 60%),
            radial-gradient(ellipse 35% 35% at 70% 85%, rgba(140,42,158,.12) 0%, transparent 60%);
        }
        .np-hero-grid {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(197,45,181,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(197,45,181,.05) 1px, transparent 1px);
          background-size: 72px 72px;
        }
        .np-hero-blob {
          position: absolute; top: 45%; left: 62%;
          transform: translate(-50%, -50%);
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(197,45,181,.12) 0%, transparent 70%);
          border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
          animation: np-blob 12s ease-in-out infinite;
          filter: blur(50px);
          transition: transform 1.4s cubic-bezier(.4,0,.2,1);
          pointer-events: none; z-index: 0;
        }
        .np-rings {
          position: absolute; right: 5%; top: 50%;
          transform: translateY(-50%);
          width: 460px; height: 460px;
          z-index: 1; pointer-events: none;
        }
        .np-ring {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(197,45,181,.12);
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
        }
        .np-ring-1{ width:150px; height:150px; border-color:rgba(197,45,181,.35); animation:np-spin-cw  18s linear infinite; }
        .np-ring-2{ width:260px; height:260px;                                    animation:np-spin-ccw 26s linear infinite; }
        .np-ring-3{ width:370px; height:370px;                                    animation:np-spin-cw  38s linear infinite; }
        .np-ring-4{ width:460px; height:460px; border-color:rgba(197,45,181,.05); }
        .np-ring-dot {
          position: absolute; width: 8px; height: 8px; border-radius: 50%;
          background: var(--brand-grad); box-shadow: 0 0 14px var(--brand-hot);
          top: 50%; left: 0; transform: translate(-50%,-50%);
        }
        .np-ring-dot-2 {
          background: var(--brand-light); box-shadow: 0 0 14px var(--brand-light);
          top: 0; left: 50%;
        }
        .np-ring-center {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          width: 104px; height: 104px; border-radius: 50%;
          background: var(--bg-raised);
          border: 2px solid var(--border-default);
          display: flex; align-items: center; justify-content: center;
          font-size: 30px;
          box-shadow: 0 0 60px rgba(197,45,181,.25), inset 0 0 24px rgba(197,45,181,.08);
        }

        .np-hero-inner {
          display: grid; grid-template-columns: 1.05fr 0.95fr;
          gap: 64px; align-items: center;
          max-width: 1240px; margin: 0 auto;
          position: relative; z-index: 2; width: 100%;
        }
        .np-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: var(--font-mono); font-size: 10px;
          letter-spacing: 3px; text-transform: uppercase;
          color: var(--brand-light); margin-bottom: 24px;
          background: rgba(197,45,181,.12);
          border: 1px solid rgba(197,45,181,.28);
          padding: 6px 14px; border-radius: 100px; width: fit-content;
          animation: np-fade-up .6s var(--ease) both;
        }
        .np-eyebrow-pulse {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--brand-hot); position: relative; flex-shrink: 0;
        }
        .np-eyebrow-pulse::after {
          content: ''; position: absolute; inset: -4px; border-radius: 50%;
          border: 1px solid var(--brand-hot);
          animation: np-pulse 2s ease-out infinite;
        }
        .np-product-label {
          font-family: var(--font-mono); font-size: 12px; letter-spacing: 3px;
          text-transform: uppercase; color: var(--brand-light);
          margin-bottom: 14px; font-weight: 500;
          animation: np-fade-up .6s .05s var(--ease) both;
        }
        .np-hero-title {
          font-family: var(--font-display);
          font-size: clamp(38px, 4.4vw, 66px);
          font-weight: 800; line-height: 1.05;
          color: var(--text-primary); letter-spacing: -2.5px;
          margin-bottom: 24px;
          animation: np-fade-up .6s .1s var(--ease) both;
        }
        .np-hero-title em {
          font-style: normal;
          background: var(--brand-grad);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .np-hero-desc {
          font-family: var(--font-body); font-size: 17px;
          color: var(--text-secondary); line-height: 1.8;
          font-weight: 300; margin-bottom: 36px; max-width: 540px;
          animation: np-fade-up .6s .2s var(--ease) both;
        }
        .np-hero-desc strong { color: var(--text-primary); font-weight: 600; }
        .np-hero-actions {
          display: flex; gap: 14px; flex-wrap: wrap;
          margin-bottom: 40px;
          animation: np-fade-up .6s .3s var(--ease) both;
        }
        .np-hero-stats {
          display: flex; gap: 24px; flex-wrap: wrap;
          padding-top: 32px;
          border-top: 1px solid var(--border-faint);
          animation: np-fade-up .6s .4s var(--ease) both;
        }
        .np-stat { display: flex; flex-direction: column; }
        .np-stat-num {
          font-family: var(--font-display); font-size: 22px;
          font-weight: 800; color: var(--text-primary); line-height: 1;
          letter-spacing: -0.5px;
        }
        .np-stat-label {
          font-size: 11.5px; color: var(--text-muted); margin-top: 5px;
          font-family: var(--font-mono); letter-spacing: .5px;
        }

        .np-card-wrap { position: relative; padding: 28px 28px 24px; animation: np-fade-in .8s .3s var(--ease) both; }
        .np-ready-card {
          background: var(--bg-raised);
          border: 1px solid var(--border-subtle);
          border-radius: 20px; padding: 24px;
          box-shadow: 0 30px 70px rgba(0,0,0,.5), 0 0 60px rgba(197,45,181,.08);
          position: relative; z-index: 2;
        }
        .np-cc-head {
          display: flex; align-items: center; justify-content: space-between;
          padding-bottom: 16px; border-bottom: 1px solid var(--border-faint);
          margin-bottom: 16px;
        }
        .np-cc-title { font-family: var(--font-display); font-weight: 700; font-size: 15px; color: var(--text-primary); }
        .np-cc-badge {
          background: rgba(34,197,94,.12); color: #22C55E;
          font-size: 11px; font-weight: 700; padding: 5px 12px;
          border-radius: 100px; display: flex; align-items: center; gap: 5px;
          font-family: var(--font-mono); letter-spacing: .5px;
        }
        .np-cc-row { display: flex; align-items: center; gap: 12px; padding: 9px 0; }
        .np-cc-icon {
          width: 26px; height: 26px; border-radius: 50%;
          background: rgba(34,197,94,.12); color: #22C55E;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 800; flex-shrink: 0;
        }
        .np-cc-icon.warn { background: rgba(245,166,35,.12); color: var(--accent); }
        .np-cc-label { font-size: 13.5px; color: var(--text-secondary); flex: 1; font-family: var(--font-body); }
        .np-cc-label strong { color: var(--text-primary); font-weight: 600; }
        .np-cc-foot {
          margin-top: 16px; padding-top: 16px;
          border-top: 1px solid var(--border-faint);
          display: flex; align-items: center; justify-content: space-between;
        }
        .np-cc-foot-label { font-size: 12px; color: var(--text-muted); }
        .np-cc-foot-label strong { color: #22C55E; }
        .np-cc-amt {
          font-family: var(--font-display); font-size: 22px;
          font-weight: 800; letter-spacing: -0.5px;
          background: var(--brand-grad);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .np-float {
          position: absolute; border-radius: 14px; padding: 11px 15px;
          display: flex; align-items: center; gap: 10px;
          backdrop-filter: blur(16px); z-index: 3;
          box-shadow: 0 16px 40px rgba(0,0,0,.4);
        }
        .np-float-1 {
          top: 0; left: 0;
          background: linear-gradient(135deg, rgba(34,197,94,.18), rgba(34,197,94,.06));
          border: 1px solid rgba(34,197,94,.28);
          animation: np-float 5s ease-in-out infinite;
        }
        .np-float-2 {
          bottom: 0; right: 0;
          background: linear-gradient(135deg, rgba(197,45,181,.2), rgba(197,45,181,.07));
          border: 1px solid var(--border-default);
          animation: np-float 6s 1.2s ease-in-out infinite;
        }
        .np-float-ico { font-size: 22px; flex-shrink: 0; }
        .np-float-t { font-size: 10px; color: var(--text-muted); font-family: var(--font-mono); letter-spacing: .5px; text-transform: uppercase; }
        .np-float-v { font-family: var(--font-display); font-size: 14px; font-weight: 700; color: var(--text-primary); }

        /* ══ SHARED SECTION RHYTHM ════════════════════════════ */
        .np-section { padding: 80px 0; background: var(--bg-base); }
        .np-section.alt {
          background: var(--bg-surface);
          border-top: 1px solid var(--border-faint);
          border-bottom: 1px solid var(--border-faint);
        }
        .np-eyebrow-step {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--brand-light); margin-bottom: 10px; font-weight: 600;
        }

        /* ══ WHY CARDS ════════════════════════════════════════ */
        .np-why-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .np-why-card {
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 16px; padding: 24px; transition: all .3s var(--ease);
        }
        .np-why-card:hover { transform: translateY(-4px); border-color: var(--border-default); background: var(--bg-elevated); }
        .np-why-card h3 { font-family: var(--font-display); font-size: 15.5px; font-weight: 700; color: var(--text-primary); margin: 12px 0 8px; letter-spacing: -.2px; }
        .np-why-card p { font-size: 13px; color: var(--text-muted); line-height: 1.6; font-weight: 300; }

        /* ══ PROGRAMME TABLE / GENERIC TABLE ══════════════════ */
        .np-table-wrap {
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 16px; overflow: hidden; margin-top: 28px;
        }
        .np-table { width: 100%; border-collapse: collapse; }
        .np-table thead tr { background: var(--brand-grad); }
        .np-table thead th {
          color: #fff; font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 1.2px;
          text-transform: uppercase; text-align: left; padding: 14px 22px; font-weight: 600;
        }
        .np-table tbody td {
          padding: 16px 22px; color: var(--text-secondary); font-size: 13.5px;
          border-bottom: 1px solid var(--border-faint); vertical-align: top;
        }
        .np-table tbody tr:last-child td { border-bottom: none; }
        .np-table tbody tr:hover { background: rgba(197,45,181,.04); }
        .np-table td.np-strong { color: var(--text-primary); font-weight: 600; font-family: var(--font-display); }
        .np-table td.np-mono { font-family: var(--font-mono); font-size: 12px; color: var(--brand-light); }

        /* ══ CALLOUTS (mirrors the guide's colour-coded notes) ═ */
        .np-callout { border-radius: 14px; padding: 22px 26px; margin-top: 24px; }
        .np-callout h4 {
          font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 1.5px; text-transform: uppercase;
          margin-bottom: 8px; font-weight: 700;
        }
        .np-callout p { font-size: 13.5px; line-height: 1.7; font-weight: 300; }
        .np-callout strong { font-weight: 700; }
        .np-callout--info  { background: rgba(59,130,246,.08);  border-left: 3px solid #3B82F6; }
        .np-callout--info  h4 { color: #3B82F6; }
        .np-callout--info  p, .np-callout--info strong { color: var(--text-secondary); }
        .np-callout--warn  { background: rgba(220,38,38,.07);   border-left: 3px solid #DC2626; }
        .np-callout--warn  h4 { color: #DC2626; }
        .np-callout--warn  p, .np-callout--warn strong { color: var(--text-secondary); }
        .np-callout--success { background: rgba(34,197,94,.08); border-left: 3px solid #22C55E; }
        .np-callout--success h4 { color: #22C55E; }
        .np-callout--success p, .np-callout--success strong { color: var(--text-secondary); }
        .np-callout--note  { background: rgba(245,166,35,.08);  border-left: 3px solid var(--accent); }
        .np-callout--note  h4 { color: var(--accent); }
        .np-callout--note  p, .np-callout--note strong { color: var(--text-secondary); }
        .np-callout--brand {
          background: linear-gradient(165deg, rgba(92,37,132,.55), rgba(140,42,158,.38));
          border: 1px solid var(--border-default);
        }
        .np-callout--brand h4 { color: var(--brand-light); }
        .np-callout--brand p, .np-callout--brand strong { color: rgba(242,234,255,.9); }

        /* ══ SCORING ══════════════════════════════════════════ */
        .np-score-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 28px; }
        .np-score-card {
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 14px; padding: 22px; position: relative; overflow: hidden;
        }
        .np-score-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; }
        .np-score-card.red::before    { background:#DC2626; }
        .np-score-card.brand::before  { background: var(--brand-grad); }
        .np-score-card.blue::before   { background:#3B82F6; }
        .np-score-card.green::before  { background:#22C55E; }
        .np-score-num { font-family: var(--font-display); font-size: 34px; font-weight: 800; letter-spacing: -1px; color: var(--text-primary); }
        .np-score-label { font-family: var(--font-mono); font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; margin: 6px 0 4px; font-weight: 700; }
        .np-score-card.red    .np-score-label { color: #DC2626; }
        .np-score-card.brand  .np-score-label { color: var(--brand-light); }
        .np-score-card.blue   .np-score-label { color: #3B82F6; }
        .np-score-card.green  .np-score-label { color: #22C55E; }
        .np-score-note { font-size: 12px; color: var(--text-muted); font-weight: 300; }

        .np-score-bar { display: flex; height: 14px; border-radius: 100px; overflow: hidden; margin: 4px 0 32px; border: 1px solid var(--border-faint); }
        .np-score-bar span { display: block; height: 100%; }

        .np-tier-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-bottom: 8px; }
        .np-tier-item { display: flex; gap: 12px; padding: 14px 16px; background: var(--bg-raised); border: 1px solid var(--border-faint); border-radius: 12px; }
        .np-tier-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; margin-top: 5px; }
        .np-tier-item p { font-size: 13px; color: var(--text-muted); line-height: 1.6; font-weight: 300; }
        .np-tier-item strong { color: var(--text-primary); font-weight: 700; }

        /* ══ CHAPTERS ═════════════════════════════════════════ */
        .np-chapters-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .np-chapter-card {
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 16px; padding: 24px; transition: all .3s var(--ease); position: relative; overflow: hidden;
        }
        .np-chapter-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--brand-grad);
          transform: scaleX(0); transform-origin: left; transition: transform .35s var(--ease);
        }
        .np-chapter-card:hover { transform: translateY(-3px); border-color: var(--border-default); background: var(--bg-elevated); }
        .np-chapter-card:hover::before { transform: scaleX(1); }
        .np-chapter-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 12px; }
        .np-chapter-code {
          font-family: var(--font-mono); font-size: 11px; font-weight: 800; letter-spacing: 1px;
          background: rgba(197,45,181,.12); color: var(--brand-light); border: 1px solid rgba(197,45,181,.25);
          padding: 4px 9px; border-radius: 7px; flex-shrink: 0;
        }
        .np-chapter-counts { display: flex; gap: 10px; flex-shrink: 0; text-align: right; }
        .np-chapter-counts span { display: block; font-family: var(--font-mono); font-size: 10px; color: var(--text-muted); }
        .np-chapter-counts strong { display: block; font-family: var(--font-display); font-size: 14px; color: var(--text-primary); }
        .np-chapter-title { font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px; letter-spacing: -.2px; }
        .np-chapter-desc { font-size: 13px; color: var(--text-muted); line-height: 1.6; font-weight: 300; margin-bottom: 14px; }
        .np-chapter-help {
          font-size: 12.5px; color: var(--text-secondary); line-height: 1.6; font-weight: 300;
          background: rgba(197,45,181,.06); border-radius: 10px; padding: 12px 14px;
        }
        .np-chapter-help strong { color: var(--brand-light); font-weight: 700; }

        /* ══ ENABLER CHIPS ════════════════════════════════════ */
        .np-enabler-chips { display: flex; justify-content: center; gap: 14px; margin: 28px 0 8px; flex-wrap: wrap; }
        .np-enabler-chip {
          display: inline-flex; align-items: center; gap: 12px;
          background: var(--bg-raised); border: 1px solid var(--border-subtle);
          border-radius: 100px; padding: 10px 20px;
          box-shadow: 0 4px 16px rgba(197,45,181,.1);
        }
        .np-enabler-seal {
          width: 30px; height: 30px; border-radius: 50%; background: var(--brand-grad); color: #fff;
          display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 800; flex-shrink: 0;
        }
        .np-enabler-title { font-family: var(--font-display); font-weight: 700; font-size: 13.5px; color: var(--text-primary); }

        /* ══ DOTS ═════════════════════════════════════════════ */
        .np-dots { display: inline-flex; gap: 4px; align-items: center; }
        .np-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--border-default); display: inline-block; }
        .np-dot-on { background: var(--brand-grad); }

        /* ══ VALUE BADGE ══════════════════════════════════════ */
        .np-value-badge {
          font-family: var(--font-display); font-weight: 800; font-size: 14px;
          color: var(--brand-light); background: rgba(197,45,181,.12);
          border: 1px solid rgba(197,45,181,.25); border-radius: 8px;
          padding: 3px 11px; display: inline-block;
        }

        /* ══ LMS ══════════════════════════════════════════════ */
        .np-lms-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
        .np-lms-list { display: flex; flex-direction: column; gap: 14px; }
        .np-lms-list li { display: flex; gap: 12px; align-items: flex-start; font-size: 14px; color: var(--text-secondary); line-height: 1.6; font-weight: 300; }
        .np-lms-list li::before {
          content: '✓'; flex-shrink: 0; width: 22px; height: 22px; border-radius: 50%;
          background: rgba(34,197,94,.12); color: #22C55E; font-size: 11px; font-weight: 800;
          display: flex; align-items: center; justify-content: center; margin-top: 1px;
        }
        .np-lms-tags { display: flex; flex-wrap: wrap; gap: 10px; }
        .np-lms-tag {
          font-size: 12.5px; font-weight: 500; color: var(--text-secondary);
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 100px; padding: 8px 16px;
        }

        /* ══ CHECKLIST ════════════════════════════════════════ */
        .np-check-list { display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }
        .np-check-row {
          display: flex; align-items: center; gap: 14px; padding: 14px 18px;
          background: var(--bg-raised); border: 1px solid var(--border-faint); border-radius: 12px;
          cursor: pointer; transition: all .2s var(--ease); text-align: left; width: 100%;
        }
        .np-check-row:hover { border-color: var(--border-default); background: var(--bg-elevated); }
        .np-checkbox {
          width: 22px; height: 22px; border-radius: 6px; border: 1.5px solid var(--border-default);
          flex-shrink: 0; display: flex; align-items: center; justify-content: center;
          font-size: 12px; color: #fff; transition: all .15s var(--ease);
        }
        .np-checkbox.on { background: var(--brand-grad); border-color: transparent; }
        .np-check-text { font-size: 13.5px; color: var(--text-secondary); flex: 1; font-weight: 400; }
        .np-check-row.on .np-check-text { color: var(--text-primary); }
        .np-check-tag {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 1px; color: var(--text-muted);
          background: var(--bg-surface); border: 1px solid var(--border-faint); padding: 3px 8px; border-radius: 6px; flex-shrink: 0;
        }
        .np-progress-row { display: flex; align-items: center; gap: 16px; margin-bottom: 18px; }
        .np-progress-track { flex: 1; height: 8px; border-radius: 100px; background: var(--bg-surface); border: 1px solid var(--border-faint); overflow: hidden; }
        .np-progress-fill { height: 100%; background: var(--brand-grad); transition: width .3s var(--ease); }
        .np-progress-count { font-family: var(--font-mono); font-size: 12px; color: var(--text-muted); white-space: nowrap; }

        /* ══ CTA BAND ═════════════════════════════════════════ */
        .np-cta-band {
          padding: 72px 0; background: var(--bg-surface); border-top: 1px solid var(--border-faint);
        }
        .np-cta-card {
          background: linear-gradient(165deg, rgba(92,37,132,.6), rgba(140,42,158,.4));
          border: 1px solid var(--border-default); border-radius: 22px;
          padding: 48px 56px; text-align: center; box-shadow: 0 24px 56px rgba(140,42,158,.28);
        }
        .np-cta-card h2 { font-family: var(--font-display); font-size: 30px; font-weight: 800; color: #fff; letter-spacing: -1px; margin-bottom: 12px; }
        .np-cta-card p { font-size: 15px; color: rgba(242,234,255,.85); font-weight: 300; max-width: 560px; margin: 0 auto 28px; line-height: 1.6; }
        .np-cta-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 24px; }
        .np-cta-card .mx-btn-primary { background: #fff; color: var(--bg-base); }
        .np-cta-contacts { display: flex; gap: 28px; justify-content: center; flex-wrap: wrap; font-size: 13.5px; color: rgba(242,234,255,.85); }
        .np-cta-contacts a { color: rgba(242,234,255,.95); text-decoration: none; font-weight: 500; }
        .np-cta-contacts a:hover { text-decoration: underline; }

        /* ══ RESPONSIVE ═══════════════════════════════════════ */
        @media (max-width: 960px) {
          .np-hero { padding: 110px 20px 80px; }
          .np-hero-inner { grid-template-columns: 1fr; gap: 48px; }
          .np-rings { display: none; }
          .np-float-1, .np-float-2 { display: none; }
          .np-why-grid { grid-template-columns: 1fr 1fr; }
          .np-score-grid { grid-template-columns: 1fr 1fr; }
          .np-tier-list { grid-template-columns: 1fr; }
          .np-chapters-grid { grid-template-columns: 1fr; }
          .np-lms-grid { grid-template-columns: 1fr; gap: 32px; }
          .np-table-wrap { overflow-x: auto; }
        }
        @media (max-width: 600px) {
          .np-why-grid, .np-score-grid { grid-template-columns: 1fr; }
          .np-hero-stats { gap: 18px; }
          .np-cta-card { padding: 36px 24px; }
          .np-chapter-head { flex-direction: column; }
          .np-chapter-counts { text-align: left; flex-direction: row; gap: 16px; }
        }
      `}</style>

      <div style={{ background: 'var(--bg-base)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', paddingTop: 70 }}>

        {/* ══ HERO ══ */}
        <section className="np-hero">
          <div className="np-hero-mesh" />
          <div className="np-hero-grid" />
          <div className="np-hero-blob" ref={blobRef} />

          <div className="np-rings">
            <div className="np-ring np-ring-4" />
            <div className="np-ring np-ring-3" />
            <div className="np-ring np-ring-2"><div className="np-ring-dot np-ring-dot-2" /></div>
            <div className="np-ring np-ring-1"><div className="np-ring-dot" /></div>
            <div className="np-ring-center">🏅</div>
          </div>

          <div className="np-hero-inner">
            <div>
              <div className="np-eyebrow">
                <span className="np-eyebrow-pulse" />
                NABH 6th Edition · 2025
              </div>
              <div className="np-product-label">MedXL NABH Readiness</div>
              <h1 className="np-hero-title">
                Accreditation-ready,<br />
                not accreditation-<em>scramble.</em>
              </h1>
              <p className="np-hero-desc">
                NABH demands 10 chapters, 639 objective elements, and continuous evidence — not
                a once-a-year paper chase. See exactly what the standard requires, and how
                MedXL's HMS, EHR, pharmacy and LMS modules <strong>generate that evidence
                automatically</strong>, so you walk into every assessment already ready.
              </p>
              <div className="np-hero-actions">
                <a href="/#contact" className="mx-btn-primary">Book a free readiness assessment →</a>
                <a href="#checklist" className="mx-btn-ghost">Take the readiness checklist</a>
              </div>
              <div className="np-hero-stats">
                {heroStats.map((s) => (
                  <div className="np-stat" key={s.label}>
                    <span className="np-stat-num">{s.num}</span>
                    <span className="np-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="np-card-wrap">
              <div className="np-ready-card">
                <div className="np-cc-head">
                  <div className="np-cc-title">NABH Readiness Snapshot</div>
                  <div className="np-cc-badge">● 9 / 10 chapters</div>
                </div>
                {readinessChecks.map((c, i) => (
                  <div className="np-cc-row" key={i}>
                    <div className={`np-cc-icon${c.type === 'warn' ? ' warn' : ''}`}>
                      {c.type === 'warn' ? '!' : '✓'}
                    </div>
                    <div className="np-cc-label"><strong>{c.label}</strong> {c.detail}</div>
                  </div>
                ))}
                <div className="np-cc-foot">
                  <div className="np-cc-foot-label">Core readiness · <strong>High</strong></div>
                  <div className="np-cc-amt">96%</div>
                </div>
              </div>
              <div className="np-float np-float-1">
                <div className="np-float-ico">📋</div>
                <div>
                  <div className="np-float-t">Evidence</div>
                  <div className="np-float-v">Ready on demand</div>
                </div>
              </div>
              <div className="np-float np-float-2">
                <div className="np-float-ico">🎓</div>
                <div>
                  <div className="np-float-t">LMS</div>
                  <div className="np-float-v">1-click training register</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ WHY NABH ══ */}
        <section className="np-section">
          <div className="mx-container">
            <div className="mx-text-center" style={{ marginBottom: 40 }}>
              <div className="mx-tag">Why It Matters</div>
              <h2 className="mx-section-title">Why hospitals pursue <em>NABH</em></h2>
              <p className="mx-section-sub">
                NABH — the National Accreditation Board for Hospitals & Healthcare Providers —
                is India's gold standard for healthcare quality and safety.
              </p>
            </div>
            <div className="np-why-grid">
              {whyCards.map((c) => (
                <div className="np-why-card" key={c.title}>
                  <div className="mx-icon-box brand">{c.icon}</div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>

            <div className="np-table-wrap">
              <table className="np-table">
                <thead>
                  <tr><th>Programme</th><th>Beds</th><th>What it covers</th></tr>
                </thead>
                <tbody>
                  {programmes.map((p) => (
                    <tr key={p.name}>
                      <td className="np-strong">{p.name}</td>
                      <td>{p.beds}</td>
                      <td>{p.covers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="np-callout np-callout--info">
              <h4>The Cycle</h4>
              <p>
                NABH 6th Edition moves to a <strong>four-year accreditation cycle</strong> with a
                midterm surveillance assessment at two years. Accreditation isn't a one-time event
                — it requires systems that maintain quality and documentation continuously. That's
                where the right technology makes the difference between scrambling before each
                assessment and being perpetually ready.
              </p>
            </div>
          </div>
        </section>

        {/* ══ SCORING ══ */}
        <section className="np-section alt" id="scoring">
          <div className="mx-container">
            <div className="mx-text-center" style={{ marginBottom: 40 }}>
              <div className="mx-tag">How Scoring Works</div>
              <h2 className="mx-section-title">Core elements are <em>non-negotiable</em></h2>
              <p className="mx-section-sub">
                Each of the 639 objective elements is graded into one of four categories — and
                they don't all carry equal weight or urgency.
              </p>
            </div>

            <div className="np-score-grid">
              {scoringTiers.map((t) => (
                <div className={`np-score-card ${t.color}`} key={t.label}>
                  <div className="np-score-num">{t.n}</div>
                  <div className="np-score-label">{t.label}</div>
                  <div className="np-score-note">{t.note}</div>
                </div>
              ))}
            </div>

            <div className="np-score-bar">
              <span style={{ width: '16.4%', background: '#DC2626' }} />
              <span style={{ width: '71.5%', background: 'var(--brand-grad)' }} />
              <span style={{ width: '9.4%',  background: '#3B82F6' }} />
              <span style={{ width: '2.7%',  background: '#22C55E' }} />
            </div>

            <div className="np-tier-list">
              <div className="np-tier-item">
                <span className="np-tier-dot" style={{ background: '#DC2626' }} />
                <p><strong>Core (105):</strong> the foundation of patient safety — mandatorily assessed every single time, and the fastest way to fail accreditation if unmet.</p>
              </div>
              <div className="np-tier-item">
                <span className="np-tier-dot" style={{ background: 'var(--brand-light)' }} />
                <p><strong>Commitment (457):</strong> the bulk of the standard — your hospital's commitment to quality systems, assessed at the final accreditation assessment.</p>
              </div>
              <div className="np-tier-item">
                <span className="np-tier-dot" style={{ background: '#3B82F6' }} />
                <p><strong>Achievement (60):</strong> a higher level of maturity, assessed during surveillance — quality sustained, not just achieved once.</p>
              </div>
              <div className="np-tier-item">
                <span className="np-tier-dot" style={{ background: '#22C55E' }} />
                <p><strong>Excellence (17):</strong> the highest tier, assessed at re-accreditation — for hospitals pushing beyond the baseline.</p>
              </div>
            </div>

            <div className="np-callout np-callout--warn">
              <h4>The Critical Insight</h4>
              <p>
                Your first priority is the <strong>105 Core objective elements</strong> — mandatory
                and assessed every time. A large share involve documentation, records, medication
                safety, infection tracking, and information management — precisely where a good
                Hospital Management System and structured staff training do the heavy lifting.
              </p>
            </div>
            <div className="np-callout np-callout--brand">
              <h4>How MedXL Helps</h4>
              <p>
                MedXL's HMS, EHR, and LMS are built to generate the records, audit trails, quality
                indicators, and training documentation NABH assessors look for. Instead of
                manually preparing evidence before each assessment, your systems produce it
                continuously — so you walk into every assessment audit-ready.
              </p>
            </div>
          </div>
        </section>

        {/* ══ CHAPTERS ══ */}
        <section className="np-section" id="chapters">
          <div className="mx-container">
            <div className="mx-text-center" style={{ marginBottom: 40 }}>
              <div className="mx-tag">The Standard</div>
              <h2 className="mx-section-title">The 10 chapters, <em>checklist by checklist</em></h2>
              <p className="mx-section-sub">
                The first five chapters are patient-centric; the last five are organisation-centric.
                Here's what each covers and exactly where MedXL helps.
              </p>
            </div>

            <div className="np-chapters-grid">
              {chapters.map((c) => (
                <div className="np-chapter-card" key={c.code}>
                  <div className="np-chapter-head">
                    <span className="np-chapter-code">{c.code}</span>
                    <div className="np-chapter-counts">
                      <span>Elements<strong>{c.elements}</strong></span>
                      <span>Std<strong>{c.std}</strong></span>
                      <span>Core<strong>{c.core}</strong></span>
                    </div>
                  </div>
                  <div className="np-chapter-title">{c.title}</div>
                  <p className="np-chapter-desc">{c.desc}</p>
                  <div className="np-chapter-help"><strong>How MedXL helps —</strong> {c.help}</div>
                </div>
              ))}
            </div>

            <div className="np-callout np-callout--note">
              <h4>Pattern You'll Notice</h4>
              <p>
                Almost every chapter has a documentation and data backbone. NABH assessors don't
                just want to hear that you do something — they want to see records, trends, and
                evidence. That's the single biggest reason hospitals digitise before pursuing
                accreditation: paper makes evidence-gathering painful, while a good HMS makes it
                automatic.
              </p>
            </div>
          </div>
        </section>

        {/* ══ SERVICE MAP ══ */}
        <section className="np-section alt" id="service-map">
          <div className="mx-container">
            <div className="mx-text-center" style={{ marginBottom: 40 }}>
              <div className="mx-tag">Service Map</div>
              <h2 className="mx-section-title">What MedXL provides, <em>chapter by chapter</em></h2>
              <p className="mx-section-sub">
                A direct map of every NABH chapter to the MedXL service that supports it, with a
                support score showing how strongly MedXL contributes.
              </p>
            </div>

            <div className="np-table-wrap">
              <table className="np-table">
                <thead>
                  <tr><th>Chapter</th><th>Elements</th><th>Primary MedXL service</th><th>Support</th></tr>
                </thead>
                <tbody>
                  {serviceMap.map((row) => (
                    <tr key={row.code}>
                      <td className="np-strong">{row.code} · {row.label}</td>
                      <td>{row.elements}</td>
                      <td>{row.service}</td>
                      <td><ScoreDots score={row.score} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 14, fontWeight: 300 }}>
              ●●●●● — MedXL is the primary enabler; our systems do most of the heavy lifting.
              ●●●○○ — MedXL provides strong supporting tools, with the hospital and NABH consultant
              handling process &amp; policy. No chapter scores zero — MedXL contributes to all ten.
            </p>

            <div className="np-enabler-chips">
              {primaryEnablers.map((e) => (
                <div className="np-enabler-chip" key={e.code}>
                  <div className="np-enabler-seal">{e.code}</div>
                  <div className="np-enabler-title">{e.title}</div>
                </div>
              ))}
            </div>

            <div className="np-callout np-callout--success">
              <h4>The Headline</h4>
              <p>
                Of the 10 chapters, MedXL technology directly supports compliance work in all 10 —
                and is the primary enabler for several of the most Core-heavy ones. A modern HMS
                doesn't just help you run the hospital; it generates the evidence NABH requires
                across the entire standard.
              </p>
            </div>
          </div>
        </section>

        {/* ══ VALUE POINTS ══ */}
        <section className="np-section">
          <div className="mx-container">
            <div className="mx-text-center" style={{ marginBottom: 40 }}>
              <div className="mx-tag">Prioritise</div>
              <h2 className="mx-section-title">MedXL services & <em>NABH value</em></h2>
              <p className="mx-section-sub">
                Each service carries a NABH Value Score out of 10 — our assessment of how much it
                contributes to accreditation readiness across the whole standard.
              </p>
            </div>

            <div className="np-table-wrap">
              <table className="np-table">
                <thead>
                  <tr><th>MedXL service</th><th>Supports chapters</th><th>Value</th></tr>
                </thead>
                <tbody>
                  {valueServices.map((v) => (
                    <tr key={v.service}>
                      <td>
                        <div className="np-strong" style={{ marginBottom: 3 }}>{v.service}</div>
                        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{v.sub}</div>
                      </td>
                      <td className="np-mono">{v.chapters}</td>
                      <td><span className="np-value-badge">{v.value}/10</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="np-callout np-callout--note">
              <h4>How to Read Value Points</h4>
              <p>
                These scores weigh how many chapters a service touches and how central it is to
                the mandatory Core elements. HMS and EHR score highest because they underpin
                multiple chapters; specialised modules score lower only because they target a
                single chapter — within that chapter, they're essential.
              </p>
            </div>
          </div>
        </section>

        {/* ══ LMS ══ */}
        <section className="np-section alt" id="lms">
          <div className="mx-container">
            <div className="mx-text-center" style={{ marginBottom: 40 }}>
              <div className="mx-tag">Learning &amp; Development</div>
              <h2 className="mx-section-title">LMS: the <em>training engine</em> for NABH</h2>
              <p className="mx-section-sub">
                HRM is one of the most Core-heavy chapters in the entire standard — and training
                &amp; competency sit at its centre. An LMS turns proof of training from a scramble
                into a click.
              </p>
            </div>

            <div className="np-lms-grid">
              <div>
                <div className="np-eyebrow-step">What NABH expects</div>
                <ul className="np-lms-list">
                  {lmsExpectations.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div>
                <div className="np-eyebrow-step">MedXL LMS — NABH training library</div>
                <div className="np-lms-tags">
                  {lmsLibrary.map((tag) => <span className="np-lms-tag" key={tag}>{tag}</span>)}
                </div>
              </div>
            </div>

            <div className="np-callout np-callout--brand" style={{ marginTop: 32 }}>
              <h4>How MedXL LMS Delivers This</h4>
              <p>
                A complete, audit-ready training infrastructure: pre-loaded NABH training modules,
                automated assignment by role, online assessments with pass/fail competency scoring,
                digital certificates, and a one-click training register showing exactly who
                completed what and when. When an assessor asks "show me your infection-control
                training records," it's instant.
              </p>
            </div>
            <div className="np-callout np-callout--success">
              <h4>Why This Wins Deals</h4>
              <p>
                Training documentation is one of the most common gaps NABH assessors flag.
                Hospitals know they train staff — but proving it with organised records is hard on
                paper. The MedXL LMS closes this gap completely, and on its own is often enough
                reason for a NABH-seeking hospital to sign.
              </p>
            </div>
          </div>
        </section>

        {/* ══ READINESS PACKAGE ══ */}
        <section className="np-section" id="package">
          <div className="mx-container">
            <div className="mx-text-center" style={{ marginBottom: 40 }}>
              <div className="mx-tag">The Offer</div>
              <h2 className="mx-section-title">The MedXL NABH <em>Readiness Package</em></h2>
              <p className="mx-section-sub">
                Everything a hospital needs to digitise for accreditation, bundled into one annual
                partnership — so the technology side of NABH is handled end-to-end.
              </p>
            </div>

            <div className="np-table-wrap">
              <table className="np-table">
                <thead><tr><th>What's included</th><th>NABH chapters served</th></tr></thead>
                <tbody>
                  {packageItems.map((p) => (
                    <tr key={p.item}>
                      <td className="np-strong">{p.item}</td>
                      <td className="np-mono">{p.chapters}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ══ CHECKLIST ══ */}
        <section className="np-section alt" id="checklist">
          <div className="mx-container">
            <div className="mx-text-center" style={{ marginBottom: 36 }}>
              <div className="mx-tag">Self-Assessment</div>
              <h2 className="mx-section-title">Your NABH <em>readiness checklist</em></h2>
              <p className="mx-section-sub">
                Tap anything you can't confidently tick — that's a gap MedXL can help close.
              </p>
            </div>

            <div className="np-progress-row">
              <div className="np-progress-track">
                <div className="np-progress-fill" style={{ width: `${(tickedCount / checklistItems.length) * 100}%` }} />
              </div>
              <div className="np-progress-count">{tickedCount} / {checklistItems.length} ticked</div>
            </div>

            <div className="np-check-list">
              {checklistItems.map((item, i) => (
                <button
                  key={i}
                  type="button"
                  className={`np-check-row${checked[i] ? ' on' : ''}`}
                  onClick={() => toggleCheck(i)}
                >
                  <span className={`np-checkbox${checked[i] ? ' on' : ''}`}>{checked[i] ? '✓' : ''}</span>
                  <span className="np-check-text">{item.text}</span>
                  {item.tag && <span className="np-check-tag">{item.tag}</span>}
                </button>
              ))}
            </div>

            {tickedCount < 10 ? (
              <div className="np-callout np-callout--warn">
                <h4>If You Ticked Fewer Than Ten</h4>
                <p>
                  Your hospital has technology and documentation gaps that will slow — or stall —
                  your NABH journey. Every one of these is exactly what the MedXL NABH Readiness
                  Package is built to close.
                </p>
              </div>
            ) : (
              <div className="np-callout np-callout--success">
                <h4>You're Tracking Well</h4>
                <p>
                  Most of the technology backbone is already in place. Talk to us about closing the
                  remaining gaps and keeping your systems audit-ready between assessments, not just
                  before them.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}