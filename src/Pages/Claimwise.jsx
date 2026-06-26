import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
// import './medxl.css'  ← import once at your app root

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const heroStats = [
  { num: '₹26,000Cr+', label: 'Claims rejected yearly in India' },
  { num: '50–60%',     label: 'Of hospital revenue is claims'   },
  { num: 'Before',     label: 'Denials stopped at the source'   },
]

const claimChecks = [
  { type: 'check', label: 'Policy & eligibility',   detail: 'verified'              },
  { type: 'check', label: 'Documents',               detail: 'complete & legible'    },
  { type: 'check', label: 'Procedure codes',         detail: 'matched to package'    },
  { type: 'warn',  label: 'Discharge summary',       detail: '— signature added'     },
]

const accredCards = [
  { icon: '📋', title: 'Complete digital records',        body: 'Both standards require thorough, retrievable medical records. Our HMS and EHR keep every patient record complete, secure, and accessible on demand — exactly what assessors look for.' },
  { icon: '💊', title: 'Medication safety',               body: 'Pharmacy management with drug-interaction alerts, high-alert flags, and full e-prescription tracking — directly supporting the medication-management chapters of NABH and JCI.' },
  { icon: '📊', title: 'Quality indicators & audits',     body: 'Automated quality dashboards, incident reporting, and trend analysis give you the measurable quality data accreditation requires — generated continuously, not scrambled before an audit.' },
  { icon: '🔒', title: 'Data security & access control',  body: 'Encrypted, India-hosted infrastructure with role-based access and audit logging — meeting the information-security and patient-confidentiality requirements of both standards.' },
  { icon: '🎓', title: 'Staff training records (LMS)',    body: 'Our Learning Management System documents every staff training, competency, and certification — closing one of the most common gaps assessors flag in the HR chapters.' },
  { icon: '🏥', title: 'Infection control & facility data', body: 'Track infection surveillance, equipment maintenance, and facility-safety records in one place — supporting the infection-control and facility-management standards.' },
]

const products = [
  { icon: '🏥', name: 'HMS',          tag: 'Cloud',           desc: 'Complete hospital management — OPD, IPD, billing, pharmacy, wards, and analytics in one cloud system.' },
  { icon: '📋', name: 'EHR',          tag: 'ABDM Ready',      desc: 'Electronic health records with SOAP notes, ICD-10 coding, e-prescriptions, and a full patient timeline.' },
  { icon: '🛡️', name: 'ClaimWise',   tag: 'New · AI',        desc: 'AI claims validation and denial-prevention for cashless, TPA, and PMJAY — get paid faster, in full.' },
  { icon: '🔬', name: 'LIMS',         tag: 'NABL Ready',      desc: 'Lab information system with order management, barcoding, quality control, and digital reports.' },
  { icon: '📱', name: 'Hospital App', tag: 'Android · iOS',   desc: 'Patient app for appointments, reports, payments, and telemedicine — branded for your hospital.' },
  { icon: '📚', name: 'LMS',          tag: 'Training',        desc: 'Staff learning and competency tracking — CME, compliance training, and accreditation-ready records.' },
]

const services = [
  { icon: '🌐', name: 'Website + Booking', desc: 'Mobile-first hospital website with online appointment booking and doctor profiles.' },
  { icon: '☁️', name: 'Cloud Hosting',     desc: '99.9% uptime, SSL, daily backups, and 24×7 monitoring — fully managed.' },
  { icon: '📣', name: 'Social & SEO',      desc: 'Social media management, local SEO, and content that brings patients to you.' },
  { icon: '🛡️', name: 'Security & Compliance', desc: 'DPDP & ABDM compliance, cybersecurity, and patient-data protection built in.' },
]

const pricingPlans = [
  {
    id: 'starter', name: 'Starter', price: '₹1 Lakh', featured: false,
    features: ['Hospital website + booking', 'Cloud hosting + SSL', '3 social media profiles', 'Domain email + basic SEO', '2 IT consultations / year'],
    cta: 'Get started' ,
  },
  {
    id: 'growth', name: 'Growth', price: '₹2.5 Lakh', featured: true,
    features: ['Everything in Starter', 'HMS + EHR + OP billing', 'Social management + Google Ads', 'Dedicated account manager', 'Staff training + IT helpdesk'],
    cta: 'Choose Growth',
  },
  {
    id: 'enterprise', name: 'Enterprise', price: '₹5 Lakh', featured: false,
    features: ['Everything in Growth', 'Hospital mobile app + LMS', 'LIMS + telemedicine', '24×7 IT helpdesk', 'NABH / JCI readiness support'],
    cta: 'Talk to us',
  },
]

/* ─────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────── */
export default function HomePage() {
  const blobRef = useRef(null)

  useEffect(() => {
     window.scrollTo(0, 0)
    const fn = (e) => {
      if (!blobRef.current) return
      const x = (e.clientX / window.innerWidth  - 0.5) * 50
      const y = (e.clientY / window.innerHeight - 0.5) * 50
      blobRef.current.style.transform =
        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
    }
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])

  return (
    <>
      <style>{`
        /* ── KEYFRAMES ── */
        @keyframes hp-blob {
          0%,100%{ border-radius:60% 40% 30% 70%/60% 30% 70% 40%; }
          33%    { border-radius:30% 60% 70% 40%/50% 60% 30% 60%; }
          66%    { border-radius:50% 40% 60% 30%/40% 70% 40% 60%; }
        }
        @keyframes hp-spin-cw  { to{ transform:translate(-50%,-50%) rotate(360deg); } }
        @keyframes hp-spin-ccw { to{ transform:translate(-50%,-50%) rotate(-360deg); } }
        @keyframes hp-pulse    { 0%{transform:scale(1);opacity:.8;} 100%{transform:scale(2.4);opacity:0;} }
        @keyframes hp-float    { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-12px);} }
        @keyframes hp-fade-up  { from{opacity:0;transform:translateY(24px);} to{opacity:1;transform:translateY(0);} }
        @keyframes hp-fade-in  { from{opacity:0;transform:scale(.97);} to{opacity:1;transform:scale(1);} }

        /* ══ HERO ══════════════════════════════════════════════ */
        .hp-hero {
          min-height: 100vh;
          background: var(--bg-base);
          display: flex; align-items: center;
          padding: 120px 56px 80px;
          position: relative; overflow: hidden;
        }
        .hp-hero-mesh {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 60% 55% at 15% 50%, rgba(197,45,181,.18) 0%, transparent 65%),
            radial-gradient(ellipse 45% 40% at 85% 20%, rgba(92,37,132,.15) 0%, transparent 60%),
            radial-gradient(ellipse 35% 35% at 70% 85%, rgba(140,42,158,.12) 0%, transparent 60%);
        }
        .hp-hero-grid {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(197,45,181,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(197,45,181,.05) 1px, transparent 1px);
          background-size: 72px 72px;
        }
        .hp-hero-blob {
          position: absolute; top: 45%; left: 62%;
          transform: translate(-50%, -50%);
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(197,45,181,.12) 0%, transparent 70%);
          border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
          animation: hp-blob 12s ease-in-out infinite;
          filter: blur(50px);
          transition: transform 1.4s cubic-bezier(.4,0,.2,1);
          pointer-events: none; z-index: 0;
        }

        /* Orbital rings */
        .hp-rings {
          position: absolute; right: 5%; top: 50%;
          transform: translateY(-50%);
          width: 500px; height: 500px;
          z-index: 1; pointer-events: none;
        }
        .hp-ring {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(197,45,181,.12);
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
        }
        .hp-ring-1{ width:160px; height:160px; border-color:rgba(197,45,181,.35); animation:hp-spin-cw  18s linear infinite; }
        .hp-ring-2{ width:280px; height:280px;                                    animation:hp-spin-ccw 26s linear infinite; }
        .hp-ring-3{ width:400px; height:400px;                                    animation:hp-spin-cw  38s linear infinite; }
        .hp-ring-4{ width:500px; height:500px; border-color:rgba(197,45,181,.05); }
        .hp-ring-dot {
          position: absolute; width: 8px; height: 8px; border-radius: 50%;
          background: var(--brand-grad); box-shadow: 0 0 14px var(--brand-hot);
          top: 50%; left: 0; transform: translate(-50%,-50%);
        }
        .hp-ring-dot-2 {
          background: var(--brand-light); box-shadow: 0 0 14px var(--brand-light);
          top: 0; left: 50%;
        }
        .hp-ring-center {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          width: 110px; height: 110px; border-radius: 50%;
          background: var(--bg-raised);
          border: 2px solid var(--border-default);
          display: flex; align-items: center; justify-content: center;
          font-size: 32px;
          box-shadow: 0 0 60px rgba(197,45,181,.25), inset 0 0 24px rgba(197,45,181,.08);
        }

        /* Hero inner layout */
        .hp-hero-inner {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 64px; align-items: center;
          max-width: 1240px; margin: 0 auto;
          position: relative; z-index: 2; width: 100%;
        }

        /* Hero copy */
        .hp-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: var(--font-mono); font-size: 10px;
          letter-spacing: 3px; text-transform: uppercase;
          color: var(--brand-light); margin-bottom: 24px;
          background: rgba(197,45,181,.12);
          border: 1px solid rgba(197,45,181,.28);
          padding: 6px 14px; border-radius: 100px; width: fit-content;
          animation: hp-fade-up .6s var(--ease) both;
        }
        .hp-eyebrow-pulse {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--brand-hot); position: relative; flex-shrink: 0;
        }
        .hp-eyebrow-pulse::after {
          content: ''; position: absolute; inset: -4px; border-radius: 50%;
          border: 1px solid var(--brand-hot);
          animation: hp-pulse 2s ease-out infinite;
        }
        .hp-product-label {
          font-family: var(--font-mono); font-size: 12px; letter-spacing: 3px;
          text-transform: uppercase; color: var(--brand-light);
          margin-bottom: 14px; font-weight: 500;
          animation: hp-fade-up .6s .05s var(--ease) both;
        }
        .hp-hero-title {
          font-family: var(--font-display);
          font-size: clamp(40px, 4.8vw, 72px);
          font-weight: 800; line-height: 1.0;
          color: var(--text-primary); letter-spacing: -2.5px;
          margin-bottom: 24px;
          animation: hp-fade-up .6s .1s var(--ease) both;
        }
        .hp-hero-title em {
          font-style: normal;
          background: var(--brand-grad);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hp-hero-desc {
          font-family: var(--font-body); font-size: 17px;
          color: var(--text-secondary); line-height: 1.8;
          font-weight: 300; margin-bottom: 36px; max-width: 540px;
          animation: hp-fade-up .6s .2s var(--ease) both;
        }
        .hp-hero-desc strong { color: var(--text-primary); font-weight: 600; }
        .hp-hero-actions {
          display: flex; gap: 14px; flex-wrap: wrap;
          margin-bottom: 40px;
          animation: hp-fade-up .6s .3s var(--ease) both;
        }
        .hp-hero-stats {
          display: flex; gap: 28px; flex-wrap: wrap;
          padding-top: 32px;
          border-top: 1px solid var(--border-faint);
          animation: hp-fade-up .6s .4s var(--ease) both;
        }
        .hp-stat { display: flex; flex-direction: column; }
        .hp-stat-num {
          font-family: var(--font-display); font-size: 22px;
          font-weight: 800; color: var(--text-primary); line-height: 1;
          letter-spacing: -0.5px;
        }
        .hp-stat-label {
          font-size: 12px; color: var(--text-muted); margin-top: 5px;
          font-family: var(--font-mono); letter-spacing: .5px;
        }

        /* ── HERO CLAIM CARD ── */
        .hp-card-wrap { position: relative; padding: 28px 28px 24px; animation: hp-fade-in .8s .3s var(--ease) both; }
        .hp-claim-card {
          background: var(--bg-raised);
          border: 1px solid var(--border-subtle);
          border-radius: 20px; padding: 24px;
          box-shadow: 0 30px 70px rgba(0,0,0,.5), 0 0 60px rgba(197,45,181,.08);
          position: relative; z-index: 2;
        }
        .hp-cc-head {
          display: flex; align-items: center; justify-content: space-between;
          padding-bottom: 16px; border-bottom: 1px solid var(--border-faint);
          margin-bottom: 16px;
        }
        .hp-cc-title {
          font-family: var(--font-display); font-weight: 700;
          font-size: 15px; color: var(--text-primary);
        }
        .hp-cc-badge {
          background: rgba(34,197,94,.12); color: #22C55E;
          font-size: 11px; font-weight: 700; padding: 5px 12px;
          border-radius: 100px; display: flex; align-items: center; gap: 5px;
          font-family: var(--font-mono); letter-spacing: .5px;
        }
        .hp-cc-row {
          display: flex; align-items: center; gap: 12px; padding: 9px 0;
        }
        .hp-cc-icon {
          width: 26px; height: 26px; border-radius: 50%;
          background: rgba(34,197,94,.12); color: #22C55E;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 800; flex-shrink: 0;
        }
        .hp-cc-icon.warn { background: rgba(245,166,35,.12); color: var(--accent); }
        .hp-cc-label {
          font-size: 13.5px; color: var(--text-secondary); flex: 1;
          font-family: var(--font-body);
        }
        .hp-cc-label strong { color: var(--text-primary); font-weight: 600; }
        .hp-cc-foot {
          margin-top: 16px; padding-top: 16px;
          border-top: 1px solid var(--border-faint);
          display: flex; align-items: center; justify-content: space-between;
        }
        .hp-cc-foot-label { font-size: 12px; color: var(--text-muted); }
        .hp-cc-foot-label strong { color: #22C55E; }
        .hp-cc-amt {
          font-family: var(--font-display); font-size: 22px;
          font-weight: 800; letter-spacing: -0.5px;
          background: var(--brand-grad);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Floating badges */
        .hp-float {
          position: absolute; border-radius: 14px; padding: 11px 15px;
          display: flex; align-items: center; gap: 10px;
          backdrop-filter: blur(16px); z-index: 3;
          box-shadow: 0 16px 40px rgba(0,0,0,.4);
        }
        .hp-float-1 {
          top: 0; left: 0;
          background: linear-gradient(135deg, rgba(34,197,94,.18), rgba(34,197,94,.06));
          border: 1px solid rgba(34,197,94,.28);
          animation: hp-float 5s ease-in-out infinite;
        }
        .hp-float-2 {
          bottom: 0; right: 0;
          background: linear-gradient(135deg, rgba(197,45,181,.2), rgba(197,45,181,.07));
          border: 1px solid var(--border-default);
          animation: hp-float 6s 1.2s ease-in-out infinite;
        }
        .hp-float-ico { font-size: 22px; flex-shrink: 0; }
        .hp-float-t { font-size: 10px; color: var(--text-muted); font-family: var(--font-mono); letter-spacing: .5px; text-transform: uppercase; }
        .hp-float-v { font-family: var(--font-display); font-size: 14px; font-weight: 700; color: var(--text-primary); }

        /* ══ ACCREDITATION ════════════════════════════════════ */
        .hp-accred-section {
          padding: 88px 0;
          background: var(--bg-surface);
          border-top: 1px solid var(--border-faint);
          border-bottom: 1px solid var(--border-faint);
        }
        .hp-accred-chips {
          display: flex; justify-content: center; gap: 14px;
          margin-bottom: 44px; flex-wrap: wrap;
        }
        .hp-accred-chip {
          display: inline-flex; align-items: center; gap: 12px;
          background: var(--bg-raised); border: 1px solid var(--border-subtle);
          border-radius: 100px; padding: 12px 24px;
          box-shadow: 0 4px 16px rgba(197,45,181,.1);
          transition: border-color .25s;
        }
        .hp-accred-chip:hover { border-color: var(--border-default); }
        .hp-accred-seal {
          width: 32px; height: 32px; border-radius: 50%;
          background: var(--brand-grad); color: #fff;
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 800;
          box-shadow: 0 4px 12px rgba(197,45,181,.3);
        }
        .hp-accred-chip-title {
          font-family: var(--font-display); font-weight: 700;
          font-size: 15px; color: var(--text-primary);
        }
        .hp-accred-chip-sub { font-size: 11px; color: var(--text-muted); margin-top: 2px; }
        .hp-accred-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 20px; margin-bottom: 40px;
        }
        .hp-accred-card {
          background: var(--bg-raised);
          border: 1px solid var(--border-faint);
          border-radius: 16px; padding: 28px 24px;
          transition: all .3s var(--ease); position: relative; overflow: hidden;
        }
        .hp-accred-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 2px; background: var(--brand-grad);
          transform: scaleX(0); transform-origin: left;
          transition: transform .35s var(--ease);
        }
        .hp-accred-card:hover { transform: translateY(-4px); border-color: var(--border-default); background: var(--bg-elevated); }
        .hp-accred-card:hover::before { transform: scaleX(1); }
        .hp-accred-card h3 {
          font-family: var(--font-display); font-size: 17px;
          font-weight: 700; color: var(--text-primary);
          margin-bottom: 10px; letter-spacing: -0.3px;
        }
        .hp-accred-card p { font-size: 14px; color: var(--text-muted); line-height: 1.65; font-weight: 300; }

        /* Accred CTA bar */
        .hp-accred-cta {
          display: flex; align-items: center; justify-content: space-between;
          gap: 24px; flex-wrap: wrap;
          background: var(--bg-raised); border: 1px solid var(--border-subtle);
          border-radius: 18px; padding: 28px 36px;
          box-shadow: 0 8px 24px rgba(197,45,181,.08);
        }
        .hp-accred-cta h3 {
          font-family: var(--font-display); font-size: 19px;
          font-weight: 700; color: var(--text-primary); margin-bottom: 5px; letter-spacing: -0.3px;
        }
        .hp-accred-cta p { font-size: 14px; color: var(--text-muted); font-weight: 300; }

        /* ══ PRODUCTS ═════════════════════════════════════════ */
        .hp-prod-section { padding: 88px 0; background: var(--bg-base); }
        .hp-prod-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px;
        }
        .hp-prod-card {
          background: var(--bg-raised);
          border: 1px solid var(--border-faint);
          border-radius: 16px; padding: 26px;
          transition: all .3s var(--ease); position: relative; overflow: hidden;
        }
        .hp-prod-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 2px; background: var(--brand-grad);
          transform: scaleX(0); transform-origin: left;
          transition: transform .35s var(--ease);
        }
        .hp-prod-card:hover { transform: translateY(-5px); border-color: var(--border-default); background: var(--bg-elevated); }
        .hp-prod-card:hover::before { transform: scaleX(1); }
        .hp-prod-name {
          font-family: var(--font-display); font-size: 17px;
          font-weight: 700; color: var(--text-primary);
          margin-bottom: 8px; letter-spacing: -0.3px;
          display: flex; align-items: center; gap: 8px;
        }
        .hp-prod-tag {
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 1px;
          text-transform: uppercase;
          background: rgba(197,45,181,.12); color: var(--brand-light);
          border: 1px solid rgba(197,45,181,.22);
          padding: 3px 8px; border-radius: 6px; font-weight: 500;
        }
        .hp-prod-desc { font-size: 13.5px; color: var(--text-muted); line-height: 1.6; font-weight: 300; }

        /* ══ SERVICES ═════════════════════════════════════════ */
        .hp-services-section {
          padding: 88px 0;
          background: var(--bg-surface);
          border-top: 1px solid var(--border-faint);
          border-bottom: 1px solid var(--border-faint);
        }
        .hp-serv-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .hp-serv-card {
          background: rgba(197,45,181,.06);
          border: 1px solid var(--border-faint);
          border-radius: 14px; padding: 24px;
          transition: all .25s var(--ease);
        }
        .hp-serv-card:hover { background: rgba(197,45,181,.1); border-color: var(--border-default); }
        .hp-serv-ico { font-size: 26px; margin-bottom: 14px; }
        .hp-serv-name {
          font-family: var(--font-display); font-size: 15px;
          font-weight: 700; color: var(--text-primary);
          margin-bottom: 7px; letter-spacing: -0.2px;
        }
        .hp-serv-desc { font-size: 13px; color: var(--text-muted); line-height: 1.55; font-weight: 300; }

        /* ══ PRICING ══════════════════════════════════════════ */
        .hp-pricing-section { padding: 88px 0; background: var(--bg-base); }
        .hp-price-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: stretch; }
        .hp-price-card {
          background: var(--bg-raised);
          border: 1px solid var(--border-faint);
          border-radius: 20px; padding: 30px 26px;
          display: flex; flex-direction: column; position: relative;
          transition: all .3s var(--ease);
        }
        .hp-price-card:hover { border-color: var(--border-default); transform: translateY(-4px); background: var(--bg-elevated); }
        .hp-price-card.featured {
          background: linear-gradient(165deg, rgba(92,37,132,.6), rgba(140,42,158,.4));
          border-color: var(--border-default);
          box-shadow: 0 24px 56px rgba(140,42,158,.28);
          transform: scale(1.03);
        }
        .hp-price-card.featured:hover { transform: scale(1.03) translateY(-4px); }
        .hp-price-badge {
          position: absolute; top: -13px; left: 50%; transform: translateX(-50%);
          background: var(--accent); color: var(--bg-base);
          font-family: var(--font-mono); font-size: 10px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          padding: 5px 16px; border-radius: 100px; white-space: nowrap;
        }
        .hp-price-name {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--text-muted);
          font-weight: 500; margin-bottom: 12px;
        }
        .hp-price-card.featured .hp-price-name { color: var(--brand-light); }
        .hp-price-amt {
          font-family: var(--font-display); font-size: 38px;
          font-weight: 800; line-height: 1; letter-spacing: -1.5px;
          background: var(--brand-grad);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hp-price-card.featured .hp-price-amt {
          background: none; -webkit-text-fill-color: var(--text-primary);
        }
        .hp-price-per {
          font-size: 13px; color: var(--text-muted); margin: 6px 0 20px;
        }
        .hp-price-feat { display: flex; flex-direction: column; gap: 8px; flex: 1; margin-bottom: 24px; }
        .hp-price-feat li {
          font-size: 13.5px; color: var(--text-secondary); display: flex; gap: 9px;
          align-items: flex-start; font-weight: 400;
        }
        .hp-price-card.featured .hp-price-feat li { color: rgba(242,234,255,.85); }
        .hp-price-feat li::before { content: '✓'; color: var(--brand-light); font-weight: 800; flex-shrink: 0; }
        .hp-price-btn {
          text-align: center; padding: 13px; border-radius: 100px;
          font-family: var(--font-body); font-weight: 700; font-size: 14px;
          border: 1.5px solid var(--border-default);
          color: var(--brand-light); text-decoration: none;
          transition: all .2s; display: block;
        }
        .hp-price-btn:hover { background: rgba(197,45,181,.12); border-color: var(--border-strong); }
        .hp-price-card.featured .hp-price-btn {
          background: #fff; color: var(--bg-base);
          border-color: #fff; box-shadow: 0 4px 14px rgba(255,255,255,.2);
        }
        .hp-price-card.featured .hp-price-btn:hover {
          background: rgba(255,255,255,.9);
        }

        /* ══ CTA BAND ═════════════════════════════════════════ */
        .hp-cta-band {
          padding: 80px 0;
          background: var(--bg-surface);
          border-top: 1px solid var(--border-faint);
        }

        /* ══ RESPONSIVE ═══════════════════════════════════════ */
        @media (max-width: 960px) {
          .hp-hero { padding: 110px 20px 80px; }
          .hp-hero-inner { grid-template-columns: 1fr; gap: 48px; }
          .hp-rings { display: none; }
          .hp-float-1, .hp-float-2 { display: none; }
          .hp-accred-grid { grid-template-columns: 1fr 1fr; }
          .hp-prod-grid { grid-template-columns: 1fr 1fr; }
          .hp-serv-grid { grid-template-columns: 1fr 1fr; }
          .hp-price-grid { grid-template-columns: 1fr; max-width: 420px; margin: 0 auto; }
          .hp-price-card.featured { transform: none; }
        }
        @media (max-width: 600px) {
          .hp-accred-grid, .hp-prod-grid, .hp-serv-grid { grid-template-columns: 1fr; }
          .hp-hero-stats { gap: 20px; }
          .hp-accred-cta { flex-direction: column; }
        }
      `}</style>

      <div style={{ background: 'var(--bg-base)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', paddingTop: 70 }}>

        {/* ══ HERO — CLAIMWISE ══ */}
        <section className="hp-hero">
          <div className="hp-hero-mesh" />
          <div className="hp-hero-grid" />
          <div className="hp-hero-blob" ref={blobRef} />

          {/* Orbital rings */}
          <div className="hp-rings">
            <div className="hp-ring hp-ring-4" />
            <div className="hp-ring hp-ring-3" />
            <div className="hp-ring hp-ring-2"><div className="hp-ring-dot hp-ring-dot-2" /></div>
            <div className="hp-ring hp-ring-1"><div className="hp-ring-dot" /></div>
            <div className="hp-ring-center">🛡️</div>
          </div>

          <div className="hp-hero-inner">
            {/* Left: copy */}
            <div>
              <div className="hp-eyebrow">
                <span className="hp-eyebrow-pulse" />
                New from MedXL
              </div>
              <div className="hp-product-label">MedXL ClaimWise</div>
              <h1 className="hp-hero-title">
                Fewer denials.<br />
                Faster settlements.<br />
                <em>Full payment.</em>
              </h1>
              <p className="hp-hero-desc">
                AI-powered claims validation for Indian hospitals. MedXL ClaimWise checks every
                cashless, TPA, and PMJAY claim <strong>before</strong> you submit it — preventing
                denials, speeding settlements, and recovering the revenue your hospital is losing today.
              </p>
              <div className="hp-hero-actions">
                <Link to="/products" className="mx-btn-primary">Know more →</Link>
                <a href="/#contact" className="mx-btn-ghost">Book a demo</a>
              </div>
              <div className="hp-hero-stats">
                {heroStats.map(s => (
                  <div className="hp-stat" key={s.label}>
                    <span className="hp-stat-num">{s.num}</span>
                    <span className="hp-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: claim card */}
            <div className="hp-card-wrap">
              <div className="hp-claim-card">
                <div className="hp-cc-head">
                  <div className="hp-cc-title">Pre-Auth · Cashless</div>
                  <div className="hp-cc-badge">● Validated</div>
                </div>
                {claimChecks.map((c, i) => (
                  <div className="hp-cc-row" key={i}>
                    <div className={`hp-cc-icon${c.type === 'warn' ? ' warn' : ''}`}>
                      {c.type === 'warn' ? '!' : '✓'}
                    </div>
                    <div className="hp-cc-label">
                      <strong>{c.label}</strong> {c.detail}
                    </div>
                  </div>
                ))}
                <div className="hp-cc-foot">
                  <div className="hp-cc-foot-label">Denial risk · <strong>Low</strong></div>
                  <div className="hp-cc-amt">₹1,92,400</div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="hp-float hp-float-1">
                <div className="hp-float-ico">✅</div>
                <div>
                  <div className="hp-float-t">Validated</div>
                  <div className="hp-float-v">Ready to submit</div>
                </div>
              </div>
              <div className="hp-float hp-float-2">
                <div className="hp-float-ico">↩️</div>
                <div>
                  <div className="hp-float-t">Recovered</div>
                  <div className="hp-float-v">₹1.4L appeal won</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ ACCREDITATION ══ */}
        <section className="hp-accred-section" id="accreditation">
          <div className="mx-container">
            <div className="mx-text-center" style={{ marginBottom: 44 }}>
              <div className="mx-tag">NABH & JCI Accreditation</div>
              <h2 className="mx-section-title">
                Get accreditation-ready with the<br />
                <em>right IT foundation</em>
              </h2>
              <p className="mx-section-sub">
                NABH and JCI both demand robust documentation, secure records, medication safety,
                and measurable quality. MedXL gives your hospital the technology backbone that makes
                meeting those standards far simpler.
              </p>
            </div>

            <div className="hp-accred-chips">
              {[
                { seal: 'N', title: 'NABH', sub: 'National accreditation, India' },
                { seal: 'J', title: 'JCI',  sub: 'Joint Commission International' },
              ].map(c => (
                <div className="hp-accred-chip" key={c.title}>
                  <div className="hp-accred-seal">{c.seal}</div>
                  <div>
                    <div className="hp-accred-chip-title">{c.title}</div>
                    <div className="hp-accred-chip-sub">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hp-accred-grid">
              {accredCards.map(card => (
                <div className="hp-accred-card" key={card.title}>
                  <div className="mx-icon-box brand" style={{ marginBottom: 18 }}>{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              ))}
            </div>

            <div className="hp-accred-cta">
              <div>
                <h3>Planning for NABH or JCI accreditation?</h3>
                <p>Get our free readiness guide and a session on where your hospital stands today.</p>
              </div>
              <a href="/nabh" className="mx-btn-primary">Get the accreditation guide</a>
            </div>
          </div>
        </section>

        {/* ══ PRODUCTS ══ */}
        <section className="hp-prod-section" id="products">
          <div className="mx-container">
            <div className="mx-text-center" style={{ marginBottom: 48 }}>
              <div className="mx-tag">Software Products</div>
              <h2 className="mx-section-title">One platform for your <em>entire hospital</em></h2>
              <p className="mx-section-sub">
                Purpose-built, ABDM-ready software designed for Indian clinical workflows —
                not repurposed generic tools.
              </p>
            </div>
            <div className="hp-prod-grid">
              {products.map(p => (
                <div className="hp-prod-card" key={p.name}>
                  <div className="mx-icon-box brand" style={{ marginBottom: 16 }}>{p.icon}</div>
                  <div className="hp-prod-name">
                    {p.name}
                    <span className="hp-prod-tag">{p.tag}</span>
                  </div>
                  <p className="hp-prod-desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SERVICES ══ */}
        <section className="hp-services-section" id="services">
          <div className="mx-container">
            <div className="mx-text-center" style={{ marginBottom: 48 }}>
              <div className="mx-tag">IT Services & Support</div>
              <h2 className="mx-section-title">Your complete IT department</h2>
              <p className="mx-section-sub" style={{ color: 'var(--text-secondary)' }}>
                Everything beyond software — website, marketing, security, and support —
                under one annual partnership.
              </p>
            </div>
            <div className="hp-serv-grid">
              {services.map(s => (
                <div className="hp-serv-card" key={s.name}>
                  <div className="hp-serv-ico">{s.icon}</div>
                  <div className="hp-serv-name">{s.name}</div>
                  <div className="hp-serv-desc">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PRICING ══ */}
        <section className="hp-pricing-section" id="pricing">
          <div className="mx-container">
            <div className="mx-text-center" style={{ marginBottom: 48 }}>
              <div className="mx-tag">Annual Plans</div>
              <h2 className="mx-section-title">Transparent pricing, <em>no surprises</em></h2>
              <p className="mx-section-sub">
                One annual plan covers your hospital's entire IT.
                No setup fees, no hidden charges. GST applicable.
              </p>
            </div>
            <div className="hp-price-grid">
              {pricingPlans.map(plan => (
                <div key={plan.id} className={`hp-price-card${plan.featured ? ' featured' : ''}`}>
                  {plan.featured && <div className="hp-price-badge">Most Popular</div>}
                  <div className="hp-price-name">{plan.name}</div>
                  <div className="hp-price-amt">{plan.price}</div>
                  <div className="hp-price-per">per year</div>
                  <ul className="hp-price-feat">
                    {plan.features.map(f => <li key={f}>{f}</li>)}
                  </ul>
                  <a href="/price#plans" className="hp-price-btn">{plan.cta}</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}