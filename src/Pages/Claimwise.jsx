import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const heroStats = [
  { num: '₹26,000Cr+', label: 'Health Claims Rejected / Year' },
  { num: '3–12 mo', label: 'PMJAY Payment Delays' },
  { num: '<10%', label: 'Claims Auto-Adjudicated in India' },
  { num: '₹500', label: 'Govt Incentive / Digital Claim' },
]

const leaks = [
  { leak: 'Pre-auth rejections', detail: 'Cashless requests bounce because a document is missing, a field is wrong, or a policy detail mismatches — delaying care and the claim.' },
  { leak: 'Denials at discharge', detail: 'The dreaded "pay upfront and claim reimbursement" — often because the final bill wasn\'t submitted correctly or on time.' },
  { leak: 'Documentation errors', detail: 'A typo in the discharge summary, an illegible bill, a mismatched date — and an otherwise valid claim is rejected.' },
  { leak: 'Settlement shortfalls', detail: 'The TPA approves less than billed and the gap is never reconciled — silently writing off lakhs.' },
  { leak: 'PMJAY delays', detail: 'Government scheme payments delayed 3 months to a year, leaving hospitals with large sums pending.' },
  { leak: 'Endless follow-up', detail: 'Staff spend hours on portals and phone calls chasing claim status across a dozen different TPA systems.' },
]

const solutionSteps = [
  { num: '01', title: 'Capture & Verify Coverage', text: "At admission, ClaimWise pulls the patient's policy or ABHA, instantly verifying eligibility, sum insured, sub-limits, and exclusions — flagging coverage gaps before treatment, not after." },
  { num: '02', title: 'Validate the Pre-Auth Packet', text: "AI assembles the cashless pre-authorization request and checks it against that payer's specific rules — flagging every gap before submission." },
  { num: '03', title: 'Submit via NHCX / TPA', text: 'The clean, complete claim is submitted through NHCX or the right TPA channel — in the standard format, first time, meeting the 3-hour cashless mandate.' },
  { num: '04', title: 'Track to Settlement — Live', text: 'Real-time status across every payer in one dashboard. No portal-hopping, no follow-up calls.' },
  { num: '05', title: 'Auto-Build Appeals on Denial', text: 'If a claim is denied or short-paid, ClaimWise instantly generates a payer-specific appeal with supporting documents.' },
  { num: '06', title: 'Reconcile What Was Paid', text: 'Matches the settled amount against what was billed and approved, and flags every shortfall.' },
]

const modules = [
  { icon: '🛡️', name: 'Pre-Submission Validator', tag: 'The Core', desc: 'Validates every cashless, TPA, and PMJAY packet against payer-specific rules before submission — preventing the majority of denials at the source.' },
  { icon: '📥', name: 'Unified Claims Queue', desc: 'Every claim across every payer and scheme in one intelligent inbox — auto-classified, prioritised, and integrated with your HMS.' },
  { icon: '📡', name: 'Live Settlement Tracker', desc: 'Real-time status of every claim from pre-auth to bank credit, across all TPAs and NHCX — with ageing alerts for claims stuck too long.' },
  { icon: '↩️', name: 'Denial Recovery Engine', desc: 'Auto-generates payer-specific appeal packets with supporting clinical documents the moment a claim is denied or short-paid.' },
  { icon: '📊', name: 'Reconciliation & Analytics', desc: 'Matches settled amounts to billed and approved, and shows which payers, codes, and gaps drive denials.' },
]

const builtForIndia = [
  { icon: '🏥', title: 'Cashless, TPA & PMJAY', text: 'Handles cashless pre-auth, TPA reimbursement, and government-scheme flows in one platform.' },
  { icon: '📜', title: 'IRDAI & Scheme Rules', text: 'A rules engine encoding IRDAI norms, scheme requirements, and per-TPA quirks.' },
  { icon: '🔖', title: 'India Coding & Packages', text: 'ICD-10 plus Indian scheme package codes and tariff structures, built in.' },
  { icon: '🔗', title: 'NHCX + HMS Integration', text: 'Connects to NHCX, the MedXL HMS/EHR, and TPA portals — no double entry.' },
  { icon: '💬', title: 'WhatsApp & Portal Intake', text: 'Documents flow in via WhatsApp, portal, or HMS — built for how Indian hospitals actually work.' },
  { icon: '🔒', title: 'DPDP-Compliant by Design', text: "Encrypted, India-hosted, consent-based — meeting India's data-protection law from day one." },
]

const whyNowStats = [
  { icon: '⚡', num: '3-Hour', label: 'Cashless Mandate' },
  { icon: '💰', num: '₹500', label: 'Govt Incentive / Claim' },
  { icon: '🔗', num: '47+', label: 'Payers Live on NHCX' },
  { icon: '📈', num: 'Expanding', label: 'To OPD & Pharmacy' },
]

const whoBenefits = [
  { icon: '🏛️', title: 'PMJAY & Scheme Hospitals', text: 'Facing 3–12 month payment delays and high rejection rates from documentation gaps.' },
  { icon: '🛏️', title: 'High-Cashless Hospitals (50–150 beds)', text: '50–60% of revenue is cashless — denials and shortfalls hit cash flow hardest here.' },
  { icon: '🔬', title: 'Single-Specialty Surgical Centres', text: 'Ortho, cardiac, eye, maternity — high-value claims where one denial means lakhs.' },
  { icon: '🆕', title: 'New Hospitals Setting Up', text: 'Want claims done right from day one, bundled naturally with MedXL HMS.' },
  { icon: '🏠', title: 'Nursing Homes & Smaller Clinics', text: 'Lower claim volume but little in-house claims expertise — value the automation.' },
]

export default function ClaimWisePage() {
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

  return (
    <>
      <style>{`
        .cw-page { background: var(--bg-base); color: var(--text-primary); font-family: var(--font-body); }

        /* ════════════════════════════════════════
           HERO
        ════════════════════════════════════════ */
        .cw-hero { position: relative; overflow: hidden; padding: 130px 56px 70px; }
        .cw-hero-mesh {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background:
            radial-gradient(ellipse 60% 55% at 14% 50%, rgba(197,45,181,.18) 0%, transparent 65%),
            radial-gradient(ellipse 45% 40% at 86% 18%, rgba(92,37,132,.16) 0%, transparent 60%);
        }
        .cw-hero-grid {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image:
            linear-gradient(rgba(197,45,181,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(197,45,181,.05) 1px, transparent 1px);
          background-size: 72px 72px;
        }
        .cw-hero-blob {
          position: absolute; top: 38%; left: 82%; transform: translate(-50%, -50%);
          width: 560px; height: 560px;
          background: radial-gradient(circle, rgba(197,45,181,.12) 0%, transparent 70%);
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: blob 13s ease-in-out infinite; filter: blur(50px);
          transition: transform 1.4s cubic-bezier(.4,0,.2,1); pointer-events: none; z-index: 0;
        }
        .cw-hero-inner { position: relative; z-index: 2; max-width: 800px; margin: 0 auto; text-align: center; }
        .cw-breadcrumb {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--text-disabled); margin-bottom: 22px;
        }
        .cw-breadcrumb a { color: var(--brand-light); text-decoration: none; }
        .cw-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
          color: var(--brand-light); background: rgba(197,45,181,.12); border: 1px solid rgba(197,45,181,.28);
          padding: 6px 16px; border-radius: 100px; margin: 0 auto 24px; width: fit-content;
        }
        .cw-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--brand-hot); position: relative; }
        .cw-eyebrow-dot::after {
          content: ''; position: absolute; inset: -4px; border-radius: 50%; border: 1px solid var(--brand-hot);
          animation: pulse-ring 2s ease-out infinite;
        }
        .cw-hero-title {
          font-family: var(--font-display); font-weight: 800; font-size: clamp(36px, 5.4vw, 60px);
          letter-spacing: -2.2px; line-height: 1.08; color: var(--text-primary); margin-bottom: 18px;
        }
        .cw-hero-title em {
          font-style: normal; background: var(--brand-grad);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .cw-hero-kicker { font-size: 18px; color: var(--text-secondary); font-weight: 500; margin-bottom: 18px; }
        .cw-hero-desc {
          font-size: 16px; color: var(--text-secondary); line-height: 1.8; font-weight: 300;
          max-width: 620px; margin: 0 auto 32px;
        }
        .cw-hero-actions { display: flex; gap: 14px; flex-wrap: wrap; justify-content: center; margin-bottom: 44px; }

        .cw-hero-stats { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: var(--border-faint); border: 1px solid var(--border-faint); border-radius: 18px; overflow: hidden; }
        .cw-hero-stat { background: var(--bg-raised); padding: 22px 16px; text-align: center; transition: background .25s; }
        .cw-hero-stat:hover { background: var(--bg-elevated); }
        .cw-hero-stat-num { font-family: var(--font-display); font-size: 22px; font-weight: 800; color: var(--brand-hot); letter-spacing: -.6px; line-height: 1; margin-bottom: 6px; }
        .cw-hero-stat-label { font-family: var(--font-mono); font-size: 9px; color: var(--text-muted); letter-spacing: .5px; text-transform: uppercase; }

        /* ════════════════════════════════════════
           SECTION LABEL / SHARED
        ════════════════════════════════════════ */
        .cw-section-label {
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
          color: var(--brand-light); background: rgba(197,45,181,.09); border: 1px solid rgba(197,45,181,.25);
          padding: 5px 14px; border-radius: 100px; width: fit-content; margin-bottom: 16px;
        }
        .cw-section-title { font-family: var(--font-display); font-size: clamp(24px,3vw,34px); font-weight: 700; color: var(--text-primary); letter-spacing: -.7px; margin-bottom: 16px; }
        .cw-section-desc { font-size: 15px; color: var(--text-secondary); line-height: 1.8; font-weight: 300; max-width: 700px; margin-bottom: 36px; }

        /* ════════════════════════════════════════
           LEAK TABLE
        ════════════════════════════════════════ */
        .cw-leak-table { display: flex; flex-direction: column; gap: 10px; }
        .cw-leak-row {
          display: grid; grid-template-columns: 220px 1fr; gap: 20px;
          padding: 18px 22px; background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 14px; transition: border-color .25s, background .25s;
        }
        .cw-leak-row:hover { border-color: rgba(197,45,181,.35); background: var(--bg-elevated); }
        .cw-leak-name { font-family: var(--font-display); font-size: 14.5px; font-weight: 700; color: var(--text-primary); }
        .cw-leak-detail { font-size: 13.5px; color: var(--text-secondary); line-height: 1.7; font-weight: 300; }

        /* ════════════════════════════════════════
           SOLUTION STEPS
        ════════════════════════════════════════ */
        .cw-steps { display: flex; flex-direction: column; gap: 4px; }
        .cw-step {
          display: grid; grid-template-columns: 56px 1fr; gap: 22px;
          padding: 20px 4px; position: relative;
        }
        .cw-step:not(:last-child)::before {
          content: ''; position: absolute; left: 27px; top: 56px; bottom: -8px; width: 1px;
          background: var(--border-default);
        }
        .cw-step-num {
          width: 56px; height: 56px; border-radius: 50%; flex-shrink: 0;
          background: var(--brand-grad); display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display); font-weight: 800; font-size: 16px; color: #fff;
          box-shadow: 0 8px 20px rgba(197,45,181,.3); position: relative; z-index: 1;
        }
        .cw-step-title { font-family: var(--font-display); font-size: 17px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px; letter-spacing: -.3px; }
        .cw-step-text { font-size: 14px; color: var(--text-secondary); line-height: 1.75; font-weight: 300; }

        /* ════════════════════════════════════════
           MODULE / FEATURE / BENEFIT GRIDS
        ════════════════════════════════════════ */
        .cw-grid-5 { display: grid; grid-template-columns: repeat(5, 1fr); gap: 18px; }
        .cw-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .cw-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }

        .cw-card {
          background: var(--bg-raised); border: 1px solid var(--border-faint); border-radius: 18px;
          padding: 26px 22px; position: relative; overflow: hidden; transition: all .3s var(--ease);
        }
        .cw-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: var(--brand-grad); transform: scaleX(0); transform-origin: left; transition: transform .35s var(--ease);
        }
        .cw-card:hover { transform: translateY(-5px); border-color: rgba(197,45,181,.35); background: var(--bg-elevated); }
        .cw-card:hover::before { transform: scaleX(1); }
        .cw-card-icon {
          width: 44px; height: 44px; border-radius: 12px; background: rgba(197,45,181,.12);
          border: 1px solid rgba(197,45,181,.25); display: flex; align-items: center; justify-content: center;
          font-size: 20px; margin-bottom: 14px;
        }
        .cw-card-tag {
          display: inline-block; font-family: var(--font-mono); font-size: 8.5px; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--brand-hot); background: rgba(197,45,181,.12);
          border: 1px solid rgba(197,45,181,.3); padding: 3px 9px; border-radius: 100px; margin-bottom: 10px;
        }
        .cw-card-name { font-family: var(--font-display); font-size: 14.5px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px; letter-spacing: -.2px; }
        .cw-card-desc { font-size: 12.5px; color: var(--text-muted); line-height: 1.7; }

        /* ════════════════════════════════════════
           CALLOUT
        ════════════════════════════════════════ */
        .cw-callout {
          margin-top: 28px; padding: 22px 26px; border-radius: 16px;
          background: linear-gradient(120deg, rgba(197,45,181,.14), rgba(92,37,132,.18));
          border: 1px solid rgba(197,45,181,.3);
        }
        .cw-callout-label { font-family: var(--font-mono); font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: var(--brand-light); margin-bottom: 8px; }
        .cw-callout p { font-size: 14px; color: var(--text-secondary); line-height: 1.75; margin: 0; font-weight: 300; }
        .cw-callout strong { color: var(--text-primary); }

        /* ════════════════════════════════════════
           CTA BANNER
        ════════════════════════════════════════ */
        .cw-cta-wrap { padding: 80px 56px; max-width: 1200px; margin: 0 auto; }
        .cw-cta {
          position: relative; overflow: hidden; text-align: center;
          background: linear-gradient(135deg, rgba(197,45,181,.18) 0%, rgba(92,37,132,.22) 100%);
          border: 1px solid rgba(197,45,181,.3); border-radius: 28px; padding: 56px 56px;
        }
        .cw-cta::before {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(rgba(197,45,181,.07) 1px, transparent 1px);
          background-size: 32px 32px; pointer-events: none;
        }
        .cw-cta::after {
          content: ''; position: absolute; top: -80px; left: 50%; transform: translateX(-50%);
          width: 360px; height: 360px; border-radius: 50%; background: rgba(197,45,181,.14); filter: blur(60px); pointer-events: none;
        }
        .cw-cta-inner { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; }
        .cw-cta-chip {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
          color: var(--text-muted); background: var(--bg-raised); border: 1px solid var(--border-faint);
          padding: 5px 14px; border-radius: 100px; margin-bottom: 18px;
        }
        .cw-cta h2 { font-family: var(--font-display); font-size: clamp(24px,3vw,36px); font-weight: 800; color: var(--text-primary); letter-spacing: -1px; margin-bottom: 12px; }
        .cw-cta p { font-size: 14.5px; color: var(--text-secondary); line-height: 1.75; margin-bottom: 28px; }
        .cw-cta-btns { display: flex; gap: 14px; flex-wrap: wrap; justify-content: center; }

        @media (max-width: 1024px) {
          .cw-grid-5 { grid-template-columns: repeat(3, 1fr); }
          .cw-grid-3 { grid-template-columns: repeat(2, 1fr); }
          .cw-hero-stats { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 768px) {
          .cw-hero { padding: 110px 20px 50px; }
          .cw-grid-5, .cw-grid-3, .cw-grid-2 { grid-template-columns: 1fr; }
          .cw-leak-row { grid-template-columns: 1fr; gap: 8px; }
          .cw-cta-wrap { padding: 56px 20px; }
          .cw-cta { padding: 40px 24px; }
        }
      `}</style>

      <div className="cw-page">
        <Navbar />

        {/* ── HERO ── */}
        <section className="cw-hero">
          <div className="cw-hero-mesh" />
          <div className="cw-hero-grid" />
          <div className="cw-hero-blob" ref={blobRef} />

          <div className="cw-hero-inner">
            <div className="cw-breadcrumb">
              <Link to="/">Home</Link><span>›</span><span>ClaimWise</span>
            </div>

            <div className="cw-eyebrow">
              <span className="cw-eyebrow-dot" />
              Coming Soon · AI Claims Intelligence
            </div>

            <h1 className="cw-hero-title">
              The Claim That <em>Doesn't Come Back</em>
            </h1>

            <p className="cw-hero-kicker">Introducing MedXL ClaimWise</p>

            <p className="cw-hero-desc">
              An AI-powered claims validation and denial-prevention platform, purpose-built
              for Indian hospitals — engineered to win back the single biggest source of
              lost revenue in Indian healthcare: delayed and denied insurance, TPA, and
              PMJAY claims.
            </p>

            <div className="cw-hero-actions">
              <a
                href="https://api.whatsapp.com/send/?phone=918148181288&text=I'd%20like%20to%20join%20the%20ClaimWise%20waitlist"
                className="mx-btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Join the Waitlist →
              </a>
              <a href="#how-it-works" className="mx-btn-ghost">See How It Works</a>
            </div>

            <div className="cw-hero-stats">
              {heroStats.map(s => (
                <div className="cw-hero-stat" key={s.label}>
                  <div className="cw-hero-stat-num">{s.num}</div>
                  <div className="cw-hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE PROBLEM ── */}
        <section className="mx-section">
          <div className="mx-container">
            <div className="cw-section-label">The Problem</div>
            <h2 className="cw-section-title">The Cash-Flow Wound</h2>
            <p className="cw-section-desc">
              More than half of a private hospital's revenue now flows through insurance,
              TPAs, and government schemes — and it's the slowest, most fragile money the
              hospital handles. Here's exactly where it bleeds.
            </p>

            <div className="cw-leak-table">
              {leaks.map(l => (
                <div className="cw-leak-row" key={l.leak}>
                  <div className="cw-leak-name">{l.leak}</div>
                  <div className="cw-leak-detail">{l.detail}</div>
                </div>
              ))}
            </div>

            <div className="cw-callout">
              <div className="cw-callout-label">The Human Reality</div>
              <p>
                A mid-sized hospital can have <strong>₹20–30 lakh — even crores — locked in
                pending and disputed claims</strong> at any time. That's salaries unpaid,
                medicines unbought, growth frozen.
              </p>
            </div>
          </div>
        </section>

        {/* ── THE SOLUTION ── */}
        <section className="mx-section-surface" id="how-it-works">
          <div className="mx-container">
            <div className="cw-section-label">The Solution</div>
            <h2 className="cw-section-title">From Admission to Bank Credit — Automatically</h2>
            <p className="cw-section-desc">
              ClaimWise validates, submits, tracks, and recovers every cashless, TPA, and
              PMJAY claim — so fewer denials happen, and the ones that do get recovered fast.
            </p>

            <div className="cw-steps">
              {solutionSteps.map(s => (
                <div className="cw-step" key={s.num}>
                  <div className="cw-step-num">{s.num}</div>
                  <div>
                    <div className="cw-step-title">{s.title}</div>
                    <div className="cw-step-text">{s.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FIVE MODULES ── */}
        <section className="mx-section">
          <div className="mx-container">
            <div className="cw-section-label">Five Connected Modules</div>
            <h2 className="cw-section-title">Start With Validation. Grow Into the Platform.</h2>
            <p className="cw-section-desc">
              ClaimWise ships as five connected modules. A hospital can start with
              validation alone and expand — easy to adopt, simple to grow into.
            </p>

            <div className="cw-grid-5">
              {modules.map(m => (
                <div className="cw-card" key={m.name}>
                  <div className="cw-card-icon">{m.icon}</div>
                  {m.tag && <span className="cw-card-tag">{m.tag}</span>}
                  <div className="cw-card-name">{m.name}</div>
                  <div className="cw-card-desc">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BUILT FOR INDIA ── */}
        <section className="mx-section-surface">
          <div className="mx-container">
            <div className="cw-section-label">Built for Indian Healthcare</div>
            <h2 className="cw-section-title">Every Payer. Every Scheme. Every Quirk.</h2>

            <div className="cw-grid-3">
              {builtForIndia.map(f => (
                <div className="cw-card" key={f.title}>
                  <div className="cw-card-icon">{f.icon}</div>
                  <div className="cw-card-name">{f.title}</div>
                  <div className="cw-card-desc">{f.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY NOW ── */}
        <section className="mx-section">
          <div className="mx-container">
            <div className="cw-section-label">Why Now</div>
            <h2 className="cw-section-title">The Government Just Rebuilt the Rails</h2>
            <p className="cw-section-desc">
              The National Health Claims Exchange (NHCX) is a single gateway connecting
              hospitals, insurers, TPAs, and government schemes — moving claims from a
              dozen portals to one standard format.
            </p>

            <div className="cw-grid-2" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {whyNowStats.map(s => (
                <div className="cw-card" key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 22, marginBottom: 8 }}>{s.icon}</div>
                  <div className="cw-card-name" style={{ fontSize: 17 }}>{s.num}</div>
                  <div className="cw-card-desc">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="cw-callout">
              <div className="cw-callout-label">Why This Matters</div>
              <p>
                NHCX standardizes the rails — but it doesn't tell a hospital whether their
                claim is correct, complete, and denial-proof <strong>before</strong> they hit
                submit. That validation layer is exactly where MedXL ClaimWise lives.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHO BENEFITS ── */}
        <section className="mx-section-surface">
          <div className="mx-container">
            <div className="cw-section-label">Who Benefits Most</div>
            <h2 className="cw-section-title">Built for Hospitals Like Yours</h2>

            <div className="cw-grid-3">
              {whoBenefits.map(w => (
                <div className="cw-card" key={w.title}>
                  <div className="cw-card-icon">{w.icon}</div>
                  <div className="cw-card-name">{w.title}</div>
                  <div className="cw-card-desc">{w.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}