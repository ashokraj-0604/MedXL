import { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../medxl.css'

/* ─────────────────────────────────────────────────────
   ServicesPage — MedXL Design System v2.0
   Shared tokens & base classes come from medxl.css
   Only page-specific overrides live in <style> below
───────────────────────────────────────────────────── */

const SERVICES = [
  {
    icon: '🌐', color: 'brand',
    title: 'Hospital Website + Appointment Booking',
    desc: 'Professional, mobile-first hospital website with integrated online appointment booking, doctor profiles, speciality pages, and patient inquiry forms. Built and maintained by MedXL.',
    features: [
      '5-page professional hospital website',
      'Online appointment booking engine',
      'Doctor & department profiles',
      'Mobile responsive + accessibility compliant',
      'Patient inquiry & feedback forms',
    ],
    href: '/Hospitalwebsite',
  },
  {
    icon: '☁️', color: 'info',
    title: 'Cloud Hosting & Maintenance',
    desc: 'Secure, HIPAA-compliant cloud hosting with 99.9% uptime SLA, daily automated backups, SSL certificate, global CDN, and round-the-clock server monitoring — fully managed by us.',
    features: [
      '99.9% uptime SLA guarantee',
      'Daily automated backups (30-day retention)',
      'Free SSL certificate + CDN',
      '24×7 server monitoring & incident response',
      'Monthly security patches & updates',
    ],
    href: '/Cloudhosting',
  },
  {
    icon: '📱', color: 'gold',
    title: 'Social Media Setup & Management',
    desc: 'Creation and active management of Facebook, Instagram, LinkedIn, YouTube & Google My Business — complete with content calendars, branded posts, and patient engagement.',
    features: [
      'Facebook, Instagram, LinkedIn, GMB setup',
      'Monthly content calendar & branded posts',
      'WhatsApp Business API setup',
      'Patient review management',
      'Monthly analytics report',
    ],
    href: '/Socialmedia',
  },
  {
    icon: '🔍', color: 'brand',
    title: 'SEO & Digital Marketing',
    desc: 'Local SEO, Google Ads management, health content marketing, and online reputation management to drive more patients to your hospital through organic and paid channels.',
    features: [
      'Local SEO for "hospital near me" searches',
      'Google Ads campaign management',
      'Monthly health blog content (2 articles)',
      'Google Business optimization',
      'Online reputation management',
    ],
    href: '/SeoMarketing',
  },
  {
    icon: '🛡️', color: 'rose',
    title: 'Cybersecurity & Compliance',
    desc: 'SSL, firewall setup, data encryption, access control policies, HIPAA/DPDP compliance implementation, and periodic security audits to protect sensitive patient data.',
    features: [
      'HIPAA & DPDP Act compliance',
      'End-to-end data encryption',
      'Role-based access control (RBAC)',
      'Quarterly cybersecurity audit',
      'Staff security awareness training',
    ],
    href: '/CyberSecurity',
  },
  {
    icon: '💬', color: 'brand',
    title: 'IT Consulting & Strategy',
    desc: 'Complimentary quarterly IT strategy sessions (monthly on higher plans) — roadmap reviews, technology assessments, digital transformation planning, and vendor evaluation.',
    features: [
      'Digital transformation roadmap',
      'Technology assessment & audit',
      'Vendor evaluation support',
      'NABH/NABL IT compliance advisory',
      'Budget planning for IT investments',
    ],
    href: '/ITconsulting',
  },
  {
    icon: '📊', color: 'info',
    title: 'Data Analytics & Reporting',
    desc: 'Monthly performance dashboards covering website traffic, patient acquisition, social media reach, and operational KPIs — delivered as clear, actionable reports to hospital leadership.',
    features: [
      'Monthly website & marketing analytics',
      'Patient acquisition funnel tracking',
      'Operational KPI dashboards',
      'Revenue analytics & forecasting',
      'Executive summary reports',
    ],
    href: '/Analytics',
  },
  {
    icon: '📧', color: 'gold',
    title: 'Email & Communication Setup',
    desc: 'Domain-based professional email accounts, WhatsApp Business API, internal team communication setup, and branded email templates — all configured and managed for your hospital.',
    features: [
      'Professional domain emails (e.g. dr@hospital.com)',
      'Up to 20 email accounts',
      'WhatsApp Business API integration',
      'Branded email signature templates',
      'Spam filtering & security',
    ],
    href: '/Email',
  },
  {
    icon: '🎓', color: 'green',
    title: 'Staff IT Training & Onboarding',
    desc: 'Structured onboarding for all deployed software, role-specific training sessions for doctors, nurses, and admin staff, plus recorded modules and documentation they can reference any time.',
    features: [
      'Role-specific onboarding (doctors, nurses, admin)',
      'Recorded training modules & SOPs',
      'HMS, EHR & LMS user training',
      'Ongoing support for new joiners',
      'Quarterly refresher sessions',
    ],
    href: '/Training',
  },
]

const PROCESS = [
  { num: '01', title: 'Discovery',        text: "We understand your hospital's size, specialities, and current pain points in a free consultation." },
  { num: '02', title: 'Design & Build',   text: "Our team designs, builds, and configures every deliverable to your hospital's specific brand and workflows." },
  { num: '03', title: 'Go Live & Train',  text: 'We launch every service, onboard your staff, and ensure a smooth transition with minimal disruption.' },
  { num: '04', title: 'Ongoing Support',  text: 'Your dedicated account manager handles everything — updates, reports, strategy, and support — all year round.' },
]

const TICKER_ITEMS = [
  'Website + Appointment Booking',
  'Cloud Hosting & Maintenance',
  'Social Media Management',
  'SEO & Google Ads',
  'Cybersecurity & Compliance',
  'IT Helpdesk Support',
  'Data Analytics & Reports',
  'Staff IT Training',
  'IT Consulting & Strategy',
]

export default function ServicesPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const blobRef = useRef(null)
useEffect(() => {
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
        /* ── PAGE-SPECIFIC STYLES ONLY ── */

        /* Service card: extends mx-card with extra spacing for feature list */
        .svc-card { padding: 32px; }
        .svc-card h3 {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 10px;
          letter-spacing: -.3px;
          line-height: 1.25;
        }
        .svc-card p.svc-desc {
          color: var(--text-secondary);
          font-size: 13.5px;
          line-height: 1.75;
          margin-bottom: 16px;
          font-weight: 300;
        }
        .svc-card .mx-feature-list { margin-bottom: 20px; }
        .svc-card .mx-feature-list li { font-size: 13px; padding: 8px 12px; }
        .svc-learn-more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          color: var(--brand-light);
          text-decoration: none;
          transition: gap .2s, color .2s;
        }
        .svc-learn-more:hover { gap: 10px; color: var(--text-primary); }

        /* Ticker hover pause */
        .mx-ticker:hover .mx-ticker-inner { animation-play-state: paused; }
      `}</style>

      <div className="mx-page">
        <Navbar />

        {/*
  ══════════════════════════════════════════════════════════
  STEP 1 — change your import at the top of ServicesPage.jsx:
    FROM: import { useEffect } from 'react'
    TO:   import { useEffect, useRef } from 'react'

  STEP 2 — add this ref + effect INSIDE ServicesPage(),
            before the return() (alongside your existing useEffect):

    const blobRef = useRef(null)
    useEffect(() => {
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

  STEP 3 — replace the existing <section className="mx-hero">…</section>
            with everything below this comment block.
  ══════════════════════════════════════════════════════════
*/}

{/* ── HERO ── */}
<>
  <style>{`
    /* ── SERVICES HERO SHELL ── */
    .sh-section {
      min-height: 100vh;
      background: var(--bg-base);
      display: flex;
      align-items: center;
      padding: 120px 56px 80px;
      position: relative;
      overflow: hidden;
    }

    /* Ambient mesh */
    .sh-mesh {
      position: absolute; inset: 0; z-index: 0; pointer-events: none;
      background:
        radial-gradient(ellipse 60% 55% at 15% 50%, rgba(197,45,181,.16) 0%, transparent 65%),
        radial-gradient(ellipse 45% 40% at 85% 20%, rgba(92,37,132,.14)  0%, transparent 60%),
        radial-gradient(ellipse 35% 35% at 70% 85%, rgba(140,42,158,.12) 0%, transparent 60%);
    }

    /* Dot-grid */
    .sh-grid {
      position: absolute; inset: 0; z-index: 0; pointer-events: none;
      background-image:
        linear-gradient(rgba(197,45,181,.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(197,45,181,.05) 1px, transparent 1px);
      background-size: 72px 72px;
    }

    /* Morphing blob */
    .sh-blob {
      position: absolute; top: 45%; left: 62%;
      transform: translate(-50%, -50%);
      width: 700px; height: 700px;
      background: radial-gradient(circle, rgba(197,45,181,.1) 0%, transparent 70%);
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      animation: blob 12s ease-in-out infinite;
      filter: blur(50px);
      transition: transform 1.4s cubic-bezier(.4,0,.2,1);
      pointer-events: none; z-index: 0;
    }

    /* Two-column inner */
    .sh-inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 64px;
      align-items: center;
      max-width: 1240px;
      margin: 0 auto;
      position: relative; z-index: 2; width: 100%;
    }

    /* ── LEFT COPY ── */
    .sh-eyebrow {
      display: inline-flex; align-items: center; gap: 10px;
      font-family: var(--font-mono); font-size: 10px;
      letter-spacing: 3px; text-transform: uppercase;
      color: var(--brand-light); margin-bottom: 24px;
      background: rgba(197,45,181,.12);
      border: 1px solid rgba(197,45,181,.28);
      padding: 6px 14px; border-radius: 100px;
      width: fit-content;
      animation: fade-up .6s var(--ease) both;
    }
    .sh-pulse {
      width: 6px; height: 6px; border-radius: 50%;
      background: var(--brand-hot); position: relative; flex-shrink: 0;
    }
    .sh-pulse::after {
      content: ''; position: absolute; inset: -4px; border-radius: 50%;
      border: 1px solid var(--brand-hot);
      animation: pulse-ring 2s ease-out infinite;
    }

    .sh-title {
      font-family: var(--font-display);
      font-size: clamp(40px, 5vw, 72px);
      font-weight: 800; line-height: 1.0;
      color: var(--text-primary); letter-spacing: -2.5px;
      margin-bottom: 24px;
      animation: fade-up .6s .1s var(--ease) both;
    }
    .sh-title em {
      font-style: normal;
      background: var(--brand-grad);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .sh-desc {
      font-size: 16.5px; color: var(--text-secondary);
      line-height: 1.8; font-weight: 300;
      margin-bottom: 36px; max-width: 480px;
      animation: fade-up .6s .2s var(--ease) both;
    }

    .sh-actions {
      display: flex; gap: 14px; flex-wrap: wrap;
      animation: fade-up .6s .3s var(--ease) both;
    }

    /* Trust badges */
    .sh-trust {
      display: flex; gap: 12px; flex-wrap: wrap;
      margin-top: 44px; padding-top: 36px;
      border-top: 1px solid var(--border-faint);
      animation: fade-up .6s .45s var(--ease) both;
    }
    .sh-trust-badge {
      display: flex; align-items: center; gap: 10px;
      padding: 10px 16px; border-radius: 12px;
      background: var(--bg-raised);
      border: 1px solid var(--border-faint);
      transition: border-color .3s, background .3s;
    }
    .sh-trust-badge:hover { border-color: var(--border-default); background: var(--bg-elevated); }
    .sh-trust-icon {
      width: 32px; height: 32px; border-radius: 8px;
      background: rgba(197,45,181,.12);
      border: 1px solid rgba(197,45,181,.25);
      display: flex; align-items: center; justify-content: center;
      font-size: 15px; flex-shrink: 0;
    }
    .sh-trust-num {
      font-family: var(--font-display); font-size: 17px; font-weight: 700;
      color: var(--text-primary); letter-spacing: -.5px; line-height: 1;
    }
    .sh-trust-label {
      font-family: var(--font-mono); font-size: 10px; color: var(--text-muted);
      margin-top: 3px; letter-spacing: .5px; text-transform: uppercase;
    }

    /* ── RIGHT: SERVICE ICON GRID CARD ── */
    .sh-card-wrap {
      position: relative;
      padding: 32px 0 28px;
      animation: fade-in .8s .3s var(--ease) both;
    }
    .sh-card {
      background: var(--bg-raised);
      border: 1px solid var(--border-subtle);
      border-radius: 28px; overflow: hidden; position: relative;
      box-shadow:
        0 0 0 1px var(--border-faint),
        0 40px 80px rgba(0,0,0,.55),
        0 0 80px rgba(197,45,181,.08);
    }
    .sh-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0;
      height: 3px; background: var(--brand-grad);
    }
    .sh-card::after {
      content: ''; position: absolute; inset: 0; pointer-events: none;
      background: radial-gradient(ellipse 80% 40% at 50% 0%, rgba(197,45,181,.07) 0%, transparent 70%);
      border-radius: 28px;
    }

    /* Card header */
    .sh-card-header {
      display: flex; align-items: center; justify-content: space-between;
      padding: 22px 28px 18px;
      border-bottom: 1px solid var(--border-faint);
      position: relative; z-index: 1;
    }
    .sh-card-title {
      font-family: var(--font-display); font-size: 16px;
      font-weight: 700; color: var(--text-primary); letter-spacing: -.3px;
    }
    .sh-card-sub {
      font-family: var(--font-mono); font-size: 10px;
      color: var(--text-muted); margin-top: 4px;
      display: flex; align-items: center; gap: 6px;
      letter-spacing: .5px; text-transform: uppercase;
    }
    .sh-live-dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: #22C55E; box-shadow: 0 0 8px #22C55E; flex-shrink: 0;
      animation: pulse-ring 2s ease-out infinite;
    }
    .sh-count-chip {
      font-family: var(--font-mono); font-size: 10px;
      letter-spacing: 1px; color: var(--text-muted);
      background: rgba(197,45,181,.08);
      border: 1px solid var(--border-faint);
      padding: 5px 10px; border-radius: 6px;
    }

    /* Service icon grid — 3×3 */
    .sh-svc-grid {
      display: grid; grid-template-columns: repeat(3, 1fr);
      gap: 0; position: relative; z-index: 1;
    }
    .sh-svc-cell {
      display: flex; flex-direction: column; align-items: center;
      justify-content: center; gap: 8px;
      padding: 20px 12px;
      border-right: 1px solid var(--border-faint);
      border-bottom: 1px solid var(--border-faint);
      transition: background .25s var(--ease);
      cursor: default;
    }
    .sh-svc-cell:nth-child(3n) { border-right: none; }
    .sh-svc-cell:nth-child(7),
    .sh-svc-cell:nth-child(8),
    .sh-svc-cell:nth-child(9) { border-bottom: none; }
    .sh-svc-cell:hover { background: var(--bg-elevated); }
    .sh-svc-icon {
      width: 44px; height: 44px; border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      font-size: 20px; border: 1px solid;
      transition: transform .25s var(--ease);
    }
    .sh-svc-cell:hover .sh-svc-icon { transform: scale(1.12); }
    .sh-svc-name {
      font-family: var(--font-mono); font-size: 9px;
      letter-spacing: .8px; text-transform: uppercase;
      color: var(--text-muted); text-align: center; line-height: 1.4;
    }

    /* Card footer */
    .sh-card-footer {
      display: flex; align-items: center; justify-content: space-between;
      padding: 14px 28px 18px;
      border-top: 1px solid var(--border-faint);
      background: rgba(197,45,181,.04);
      position: relative; z-index: 1;
    }
    .sh-footer-status {
      display: flex; align-items: center; gap: 8px;
      font-family: var(--font-mono); font-size: 10px;
      color: var(--text-muted); letter-spacing: .5px; text-transform: uppercase;
    }
    .sh-footer-dot { width: 5px; height: 5px; border-radius: 50%; background: #22C55E; }
    .sh-footer-btn {
      font-family: var(--font-mono); font-size: 10px;
      letter-spacing: 1.5px; text-transform: uppercase;
      color: var(--brand-light);
      background: rgba(197,45,181,.1);
      border: 1px solid rgba(197,45,181,.22);
      padding: 6px 14px; border-radius: 100px;
      cursor: pointer; transition: all .25s; text-decoration: none;
    }
    .sh-footer-btn:hover {
      background: rgba(197,45,181,.22);
      border-color: var(--border-default); color: var(--text-primary);
    }

    /* Floating badges */
    .sh-float {
      position: absolute; border-radius: 16px; padding: 14px 18px;
      display: flex; align-items: center; gap: 12px;
      backdrop-filter: blur(16px); z-index: 3;
      box-shadow: 0 20px 48px rgba(0,0,0,.45);
    }
    .sh-float-1 {
      top: 4px; right: -20px;
      background: linear-gradient(135deg,rgba(197,45,181,.22),rgba(197,45,181,.07));
      border: 1px solid rgba(197,45,181,.45);
      animation: float-y 5s ease-in-out infinite;
    }
    .sh-float-2 {
      bottom: 8px; left: -20px;
      background: linear-gradient(135deg,rgba(245,166,35,.18),rgba(245,166,35,.06));
      border: 1px solid rgba(245,166,35,.35);
      animation: float-y 6s 1.2s ease-in-out infinite;
    }
    .sh-float-icon { font-size: 26px; flex-shrink: 0; }
    .sh-float-num {
      font-family: var(--font-display); font-size: 20px; font-weight: 700;
      color: var(--text-primary); line-height: 1; letter-spacing: -.5px;
    }
    .sh-float-label {
      font-family: var(--font-mono); font-size: 10px; color: var(--text-muted);
      margin-top: 4px; letter-spacing: .5px; text-transform: uppercase;
    }

    /* ── RESPONSIVE ── */
    @media (max-width: 900px) {
      .sh-section  { padding: 110px 20px 80px; }
      .sh-inner    { grid-template-columns: 1fr; gap: 48px; }
      .sh-card-wrap { padding: 0; }
      .sh-float-1, .sh-float-2 { display: none; }
    }
    @media (max-width: 480px) {
      .sh-trust { gap: 8px; }
      .sh-trust-badge { padding: 8px 12px; }
    }
  `}</style>

  <section className="sh-section">
    <div className="sh-mesh" />
    <div className="sh-grid" />
    <div className="sh-blob" ref={blobRef} />

    <div className="sh-inner">

      {/* ── LEFT: COPY ── */}
      <div>
        <div className="mx-breadcrumb" style={{ marginBottom: 20, animation: 'fade-up .5s var(--ease) both' }}>
          <a href="/home">Home</a> › <span>Services</span>
        </div>

        <div className="sh-eyebrow">
          <span className="sh-pulse" />
          All Services
        </div>

        <h1 className="sh-title">
          Everything<br />
          Your Hospital<br />
          <em>Needs — One Roof</em>
        </h1>

        <p className="sh-desc">
          Nine comprehensive IT services, one annual plan, one dedicated team.
          Starting at ₹1 Lakh per year for hospitals of 20–150 beds.
        </p>

        <div className="sh-actions">
          <a href="/price" className="mx-btn-primary">View Pricing Plans →</a>
          <a href="/#contact" className="mx-btn-ghost">Free Consultation</a>
        </div>

        {/* Trust badges */}
        <div className="sh-trust">
          {[
            { icon: '🛠️', num: '9',      label: 'Services'    },
            { icon: '📅', num: '1 Plan', label: 'Annual'      },
            { icon: '⭐', num: '99.9%',  label: 'Uptime SLA'  },
          ].map(b => (
            <div className="sh-trust-badge" key={b.label}>
              <div className="sh-trust-icon">{b.icon}</div>
              <div>
                <div className="sh-trust-num">{b.num}</div>
                <div className="sh-trust-label">{b.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT: SERVICE CARD ── */}
      <div className="sh-card-wrap">

        {/* Floating badges */}
        <div className="sh-float sh-float-1">
          <span className="sh-float-icon">🛡️</span>
          <div>
            <div className="sh-float-num">HIPAA</div>
            <div className="sh-float-label">Compliant</div>
          </div>
        </div>
        <div className="sh-float sh-float-2">
          <span className="sh-float-icon">💰</span>
          <div>
            <div className="sh-float-num">₹1L</div>
            <div className="sh-float-label">From / Year</div>
          </div>
        </div>

        <div className="sh-card">
          {/* Header */}
          <div className="sh-card-header">
            <div>
              <div className="sh-card-title">MedXL Service Suite</div>
              <div className="sh-card-sub">
                <span className="sh-live-dot" />
                All services active &amp; managed
              </div>
            </div>
            <div className="sh-count-chip">9 Services</div>
          </div>

          {/* 3×3 service icon grid */}
          <div className="sh-svc-grid">
            {[
              { icon: '🌐', label: 'Website',    bg: 'rgba(197,45,181,.12)', border: 'rgba(197,45,181,.28)' },
              { icon: '☁️', label: 'Hosting',    bg: 'rgba(96,165,250,.10)',  border: 'rgba(96,165,250,.25)' },
              { icon: '📱', label: 'Social',     bg: 'rgba(245,166,35,.12)',  border: 'rgba(245,166,35,.28)' },
              { icon: '🔍', label: 'SEO & Ads',  bg: 'rgba(197,45,181,.12)', border: 'rgba(197,45,181,.28)' },
              { icon: '🛡️', label: 'Security',   bg: 'rgba(239,68,68,.10)',   border: 'rgba(239,68,68,.22)'  },
              { icon: '💬', label: 'Consulting', bg: 'rgba(197,45,181,.12)', border: 'rgba(197,45,181,.28)' },
              { icon: '📊', label: 'Analytics',  bg: 'rgba(96,165,250,.10)',  border: 'rgba(96,165,250,.25)' },
              { icon: '📧', label: 'Email',      bg: 'rgba(245,166,35,.12)',  border: 'rgba(245,166,35,.28)' },
              { icon: '🎓', label: 'Training',   bg: 'rgba(34,197,94,.10)',   border: 'rgba(34,197,94,.25)'  },
            ].map(s => (
              <div className="sh-svc-cell" key={s.label}>
                <div
                  className="sh-svc-icon"
                  style={{ background: s.bg, borderColor: s.border }}
                >
                  {s.icon}
                </div>
                <span className="sh-svc-name">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="sh-card-footer">
            <div className="sh-footer-status">
              <span className="sh-footer-dot" />
              All Systems Operational
            </div>
            <a href="/pricing" className="sh-footer-btn">View Full Plans →</a>
          </div>
        </div>

      </div>
    </div>
  </section>
</>

        {/* ── TICKER ── */}
        <div className="mx-ticker">
          <div className="mx-ticker-inner">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span className="mx-ticker-item" key={i}>
                {item} <span className="mx-ticker-sep">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── SERVICES GRID ── */}
        <section className="mx-section">
          <div className="mx-container">
            <div className="mx-text-center" style={{ marginBottom: 48 }}>
              <div className="mx-tag">Our Services</div>
              <h2 className="mx-section-title">Comprehensive IT. <em>One Partner.</em></h2>
              <p className="mx-section-sub">
                Click any service to learn more about what's included, timelines, and expected outcomes for your hospital.
              </p>
            </div>

            <div className="mx-grid-3">
              {SERVICES.map(svc => (
                <div className="mx-card svc-card" key={svc.title}>
                  <div className={`mx-icon-box ${svc.color}`}>{svc.icon}</div>
                  <h3>{svc.title}</h3>
                  <p className="svc-desc">{svc.desc}</p>
                  <ul className="mx-feature-list">
                    {svc.features.map(f => <li key={f}>{f}</li>)}
                  </ul>
                  <a className="svc-learn-more" href={svc.href}>Learn More →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="mx-section-surface">
          <div className="mx-container">
            <div className="mx-text-center" style={{ marginBottom: 48 }}>
              <div className="mx-tag">Our Approach</div>
              <h2 className="mx-section-title">How We <em>Deliver</em> Every Service</h2>
            </div>
            <div className="mx-grid-4">
              {PROCESS.map(step => (
                <div className="mx-step" key={step.num}>
                  <div className="mx-step-num">{step.num}</div>
                  <h4>{step.title}</h4>
                  <p className="mx-muted" style={{ fontSize: 13.5 }}>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {[
  {
    stars: 5,
    service: '🌐 Website + Appointment Booking',
    quote: 'Our old website was embarrassing. MedXL rebuilt it in 3 weeks — mobile-friendly, appointment booking live on day one. Our walk-ins dropped 20% because patients now book online before coming in.',
    name: 'Dr. Priya Venkatesh',
    role: 'Director',
    hospital: 'Nikhil Children\'s Care Centre, Hyderabad',
    avatar: '👩‍⚕️',
  },
  {
    stars: 5,
    service: '🔍 SEO & Digital Marketing',
    quote: 'Within 4 months of MedXL handling our SEO and Google Ads, we were ranking #1 for "multispecialty hospital Coimbatore". New patient registrations went up 38% — numbers we can actually track.',
    name: 'Mr. Karthik Sundaram',
    role: 'Hospital Administrator',
    hospital: 'Kaveri Multispecialty Hospital, Coimbatore',
    avatar: '👨‍💼',
  },
  {
    stars: 5,
    service: '🛡️ Cybersecurity & Compliance',
    quote: 'After a ransomware scare at a nearby hospital, we called MedXL. They completed our full security audit, set up RBAC, and got us DPDP-compliant in under 6 weeks. We sleep better now.',
    name: 'Dr. Amit Srivastava',
    role: 'CEO',
    hospital: 'Madhya Pradesh Trauma & Care Centre, Bhopal',
    avatar: '👨‍⚕️',
  },
  {
    stars: 5,
    service: '📱 Social Media Management',
    quote: 'MedXL set up and now manages all our social channels. Within two months our Facebook page had 4,000 followers and we started getting direct appointment enquiries through Instagram DMs. Remarkable turnaround.',
    name: 'Mr. Hassan Al-Farsi',
    role: 'Operations Director',
    hospital: 'Al Shifa Medical Centre, Dubai, UAE',
    avatar: '👨‍💼',
    foreign: true,
  },
  {
    stars: 5,
    service: '📊 Data Analytics & Reporting',
    quote: 'The monthly dashboard MedXL sends us is the first thing I open every month. Patient acquisition source, top-performing departments, revenue trends — all in one clean report. Priceless.',
    name: 'Dr. Rajiv Malhotra',
    role: 'Medical Director',
    hospital: 'Rajputana General Hospital, Jaipur',
    avatar: '👨‍⚕️',
  },
  {
    stars: 5,
    service: '🎓 Staff IT Training & Onboarding',
    quote: 'Our team had zero prior experience with digital hospital tools. MedXL\'s trainers conducted remote onboarding sessions across time zones and had our full staff of 60 confident within 10 days. Exceptional delivery.',
    name: 'Ms. Priscilla Owusu',
    role: 'Hospital CEO',
    hospital: 'Accra Central Clinic, Accra, Ghana',
    avatar: '👩‍💼',
    foreign: true,
  },
].map(r => (
  <div className="mx-card" key={r.name} style={{ display:'flex', flexDirection:'column', gap:14 }}>
    {/* Service label */}
    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:8 }}>
      <div style={{
        fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'1px',
        color:'var(--brand-light)', background:'rgba(197,45,181,.1)',
        border:'1px solid rgba(197,45,181,.22)', borderRadius:100,
        padding:'3px 12px', textTransform:'uppercase'
      }}>{r.service}</div>
      {r.foreign && (
        <div style={{
          fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'1px',
          color:'#60a5fa', background:'rgba(96,165,250,.1)',
          border:'1px solid rgba(96,165,250,.22)', borderRadius:100,
          padding:'3px 10px', textTransform:'uppercase'
        }}>🌍 International</div>
      )}
    </div>

    {/* Stars */}
    <div style={{ display:'flex', gap:3 }}>
      {Array(r.stars).fill(0).map((_,i) => (
        <span key={i} style={{ color:'#f59e0b', fontSize:13 }}>★</span>
      ))}
    </div>

    {/* Quote */}
    <p className="mx-muted" style={{ fontSize:13.5, lineHeight:1.75, flexGrow:1 }}>
      "{r.quote}"
    </p>

    {/* Author */}
    <div style={{ display:'flex', alignItems:'center', gap:12, paddingTop:14, borderTop:'1px solid var(--border-faint)' }}>
      <div style={{
        width:40, height:40, borderRadius:'50%',
        background:'var(--bg-elevated)', border:'1px solid var(--border-default)',
        display:'flex', alignItems:'center', justifyContent:'center',
        fontSize:19, flexShrink:0
      }}>{r.avatar}</div>
      <div>
        <div style={{ fontFamily:'var(--font-body)', fontSize:13, fontWeight:700, color:'var(--text-primary)' }}>{r.name}</div>
        <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text-muted)', letterSpacing:'.3px' }}>{r.role}</div>
        <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--brand-hot)', letterSpacing:'.5px', marginTop:2 }}>{r.hospital}</div>
      </div>
    </div>
  </div>
))}
        <Footer />
      </div>
    </>
  )
}
