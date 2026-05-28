import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

/* ─────────────────────────────────────────────────────────
   DATA  (unchanged)
───────────────────────────────────────────────────────── */
const primaryProducts = [
  {
    id: 'hms',
    icon: '🏥',
    iconVariant: 'brand',
    name: 'Hospital Management System (HMS)',
    badge: 'SaaS · Cloud',
    desc: 'Comprehensive cloud-based HMS covering OPD, IPD, emergency, billing, pharmacy, lab, and administration. Real-time dashboards and role-based access for every department.',
    tags: ['OPD Management', 'IPD & Ward Mgmt', 'Pharmacy', 'Billing', 'Admin Dashboard'],
    href: '/Hms',
    cta: 'Explore HMS →',
  },
  {
    id: 'ehr',
    icon: '📋',
    iconVariant: 'info',
    name: 'Electronic Health Records (EHR)',
    badge: 'ABDM Ready',
    desc: 'Structured, interoperable EHR with SOAP notes, investigation ordering, ICD-10 coding, prescription management, and complete patient history — accessible anywhere, anytime.',
    tags: ['SOAP Notes', 'ICD-10 Coding', 'e-Prescription', 'Patient History'],
    href: '/Ehr',
    cta: 'Explore EHR →',
  },
]

const secondaryProducts = [
  {
    id: 'lms',
    icon: '📚',
    iconVariant: 'gold',
    name: 'LMS for Hospitals',
    desc: 'Dedicated Learning Management System for hospital staff — CME modules, compliance training, skill assessments, and CPD certification tracking.',
    href: '/Lms',
    cta: 'Explore LMS →',
  },
  {
    id: 'lims',
    icon: '🔬',
    iconVariant: 'rose',
    name: 'Lab Information System (LIMS)',
    desc: 'End-to-end lab workflow — test ordering, sample tracking, result entry, QC, and auto-generated reports with digital delivery to patients and referring doctors.',
    href: '/Lims',
    cta: 'Explore LIMS →',
  },
  {
    id: 'tele',
    icon: '📡',
    iconVariant: 'brand',
    name: 'Telemedicine Platform',
    desc: "Video consultation, e-prescription, and follow-up scheduling — extending your hospital's reach to rural communities and homebound patients.",
    href: '/Telemedicine',
    cta: 'Explore Telemedicine →',
  },
]

const compactProducts = [
  {
    id: 'app',
    icon: '📱',
    iconVariant: 'info',
    name: 'Hospital Mobile App',
    desc: 'Android & iOS patient app with appointment booking, report download, bill payment, and telemedicine. Branded to your hospital.',
    href: '/Mobileapp',
    cta: 'Learn More →',
  },
  {
    id: 'billing',
    icon: '💰',
    iconVariant: 'gold',
    name: 'OP Billing & Revenue Management',
    desc: 'Smart outpatient billing with GST, insurance claim preparation, revenue analytics, and automated invoicing. Reduces billing errors by up to 80%.',
    href: '/Opbilling',
    cta: 'Learn More →',
  },
]

const integrationNodes = [
  { icon: '🏥', label: 'HMS' },
  { icon: '📋', label: 'EHR' },
  { icon: '🔬', label: 'LIMS' },
  { icon: '📱', label: 'Mobile App' },
  { icon: '📡', label: 'Telemedicine' },
]

/* Product stats shown as trust badges in hero */
const heroStats = [
  { icon: '📦', num: '7+',    label: 'Products'      },
  { icon: '🔗', num: '100%',  label: 'Interoperable' },
  { icon: '☁️', num: 'Cloud', label: 'Native SaaS'   },
]

/* Floating accent badges */
const floatBadges = [
  {
    cls: 'phf-1',
    icon: '🔗',
    num: '1 DB',
    label: 'Unified Record',
    style: {
      top: '-4px', right: '-20px',
      background: 'linear-gradient(135deg,rgba(197,45,181,.22),rgba(197,45,181,.07))',
      border: '1px solid rgba(197,45,181,.45)',
    },
    delay: '0s',
  },
  {
    cls: 'phf-2',
    icon: '⚡',
    num: '< 2s',
    label: 'Avg Load Time',
    style: {
      bottom: '8px', left: '-20px',
      background: 'linear-gradient(135deg,rgba(245,166,35,.18),rgba(245,166,35,.06))',
      border: '1px solid rgba(245,166,35,.35)',
    },
    delay: '1.2s',
  },
]

/* ─────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────── */
export default function ProductsPage() {
  const blobRef = useRef(null)

  /* Parallax blob — identical to Hero.jsx */
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
        /* ════════════════════════════════════════
           HERO — mirrors Hero.jsx visual language
        ════════════════════════════════════════ */

        .ph-section {
          min-height: 100vh;
          background: var(--bg-base);
          display: flex;
          align-items: center;
          padding: 120px 56px 80px;
          position: relative;
          overflow: hidden;
        }

        /* Ambient mesh — same radial stack as Hero.jsx */
        .ph-mesh {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 60% 55% at 15% 50%, rgba(197,45,181,.16) 0%, transparent 65%),
            radial-gradient(ellipse 45% 40% at 85% 20%, rgba(92,37,132,.14)  0%, transparent 60%),
            radial-gradient(ellipse 35% 35% at 70% 85%, rgba(140,42,158,.12) 0%, transparent 60%);
        }

        /* Dot-grid overlay */
        .ph-grid {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(197,45,181,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(197,45,181,.05) 1px, transparent 1px);
          background-size: 72px 72px;
        }

        /* Morphing blob */
        .ph-blob {
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

        /* Two-column inner layout */
        .ph-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          max-width: 1240px;
          margin: 0 auto;
          position: relative; z-index: 2; width: 100%;
        }

        /* ── LEFT: COPY ── */
        .ph-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--brand-light);
          margin-bottom: 24px;
          background: rgba(197,45,181,.12);
          border: 1px solid rgba(197,45,181,.28);
          padding: 6px 14px;
          border-radius: 100px;
          width: fit-content;
          animation: fade-up .6s var(--ease) both;
        }
        .ph-pulse {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--brand-hot);
          position: relative; flex-shrink: 0;
        }
        .ph-pulse::after {
          content: '';
          position: absolute; inset: -4px; border-radius: 50%;
          border: 1px solid var(--brand-hot);
          animation: pulse-ring 2s ease-out infinite;
        }

        .ph-title {
          font-family: var(--font-display);
          font-size: clamp(40px, 5vw, 72px);
          font-weight: 800;
          line-height: 1.0;
          color: var(--text-primary);
          letter-spacing: -2.5px;
          margin-bottom: 24px;
          animation: fade-up .6s .1s var(--ease) both;
        }
        .ph-title em {
          font-style: normal;
          background: var(--brand-grad);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ph-desc {
          font-size: 16.5px;
          color: var(--text-secondary);
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 36px;
          max-width: 480px;
          animation: fade-up .6s .2s var(--ease) both;
        }

        .ph-actions {
          display: flex; gap: 14px; flex-wrap: wrap;
          animation: fade-up .6s .3s var(--ease) both;
        }

        /* Trust badges — identical pattern to Hero.jsx */
        .ph-trust {
          display: flex; gap: 12px; flex-wrap: wrap;
          margin-top: 44px;
          padding-top: 36px;
          border-top: 1px solid var(--border-faint);
          animation: fade-up .6s .45s var(--ease) both;
        }
        .ph-trust-badge {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 16px; border-radius: 12px;
          background: var(--bg-raised);
          border: 1px solid var(--border-faint);
          transition: border-color .3s, background .3s;
        }
        .ph-trust-badge:hover {
          border-color: var(--border-default);
          background: var(--bg-elevated);
        }
        .ph-trust-icon {
          width: 32px; height: 32px; border-radius: 8px;
          background: rgba(197,45,181,.12);
          border: 1px solid rgba(197,45,181,.25);
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; flex-shrink: 0;
        }
        .ph-trust-num {
          font-family: var(--font-display);
          font-size: 17px; font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -.5px; line-height: 1;
        }
        .ph-trust-label {
          font-family: var(--font-mono);
          font-size: 10px; color: var(--text-muted);
          margin-top: 3px; letter-spacing: .5px;
          text-transform: uppercase;
        }

        /* ── RIGHT: ORBITAL RINGS ── */
        .ph-rings-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 500px;
          animation: fade-in .8s .3s var(--ease) both;
        }
        .ph-rings {
          position: relative;
          width: 500px; height: 500px;
          flex-shrink: 0;
        }
        .ph-ring {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(197,45,181,.12);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
        .ph-ring-1 {
          width: 160px; height: 160px;
          border-color: rgba(197,45,181,.35);
          animation: spin-cw 18s linear infinite;
        }
        .ph-ring-2 {
          width: 280px; height: 280px;
          animation: spin-ccw 26s linear infinite;
        }
        .ph-ring-3 {
          width: 400px; height: 400px;
          animation: spin-cw 38s linear infinite;
        }
        .ph-ring-4 {
          width: 500px; height: 500px;
          border-color: rgba(197,45,181,.05);
        }
        .ph-ring-dot {
          position: absolute;
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--brand-grad);
          box-shadow: 0 0 14px var(--brand-hot);
          top: 50%; left: 0;
          transform: translate(-50%, -50%);
        }
        .ph-ring-dot-2 {
          background: var(--brand-light);
          box-shadow: 0 0 14px var(--brand-light);
          top: 0; left: 50%;
        }

        /* Center: product count badge */
        .ph-ring-center {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 120px; height: 120px; border-radius: 50%;
          background: var(--bg-raised);
          border: 2px solid var(--border-default);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          box-shadow:
            0 0 60px rgba(197,45,181,.25),
            inset 0 0 24px rgba(197,45,181,.08);
          text-align: center;
          gap: 2px;
        }
        .ph-center-num {
          font-family: var(--font-display);
          font-size: 28px; font-weight: 800;
          background: var(--brand-grad);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1; letter-spacing: -1px;
        }
        .ph-center-label {
          font-family: var(--font-mono);
          font-size: 9px; color: var(--text-muted);
          letter-spacing: 1px; text-transform: uppercase;
        }

        /* Orbit icons — products floating around rings */
        .ph-orbit-icon {
          position: absolute;
          width: 44px; height: 44px; border-radius: 12px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
          box-shadow: 0 4px 20px rgba(0,0,0,.4);
          transition: transform .3s var(--ease), border-color .3s;
          cursor: default;
        }
        .ph-orbit-icon:hover {
          transform: scale(1.15) !important;
          border-color: var(--border-default);
        }
        /* positioned on ring-3 (r=200) via inline style */

        /* Floating accent badges */
        .ph-float {
          position: absolute;
          border-radius: 16px; padding: 14px 18px;
          display: flex; align-items: center; gap: 12px;
          backdrop-filter: blur(16px); z-index: 3;
          box-shadow: 0 20px 48px rgba(0,0,0,.45);
        }
        .ph-float-icon { font-size: 26px; flex-shrink: 0; }
        .ph-float-num {
          font-family: var(--font-display);
          font-size: 20px; font-weight: 700;
          color: var(--text-primary); line-height: 1; letter-spacing: -.5px;
        }
        .ph-float-label {
          font-family: var(--font-mono);
          font-size: 10px; color: var(--text-muted);
          margin-top: 4px; letter-spacing: .5px; text-transform: uppercase;
        }

        /* ════════════════════════════════════════
           REST OF PAGE (unchanged from original)
        ════════════════════════════════════════ */

        .pd-page { background: var(--bg-base); color: var(--text-primary); font-family: var(--font-body); }

        .pd-primary-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 24px; margin-bottom: 24px;
        }
        .pd-primary-card {
          background: var(--bg-raised);
          border: 1px solid var(--border-faint);
          border-left: 3px solid var(--brand-hot);
          border-radius: 20px; padding: 32px;
          display: flex; align-items: flex-start; gap: 20px;
          transition: all .35s var(--ease);
          position: relative; overflow: hidden;
        }
        .pd-primary-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: var(--brand-grad);
          transform: scaleX(0); transform-origin: left;
          transition: transform .35s var(--ease);
        }
        .pd-primary-card:hover {
          transform: translateY(-5px);
          border-color: var(--border-default);
          border-left-color: var(--brand-hot);
          background: var(--bg-elevated);
        }
        .pd-primary-card:hover::before { transform: scaleX(1); }
        .pd-primary-body { flex: 1; }
        .pd-primary-header {
          display: flex; justify-content: space-between;
          align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 10px;
        }
        .pd-primary-name {
          font-family: var(--font-display); font-size: 18px;
          font-weight: 700; color: var(--text-primary); letter-spacing: -.4px;
        }
        .pd-badge {
          background: rgba(197,45,181,.1); color: var(--brand-light);
          border: 1px solid var(--border-faint); border-radius: 100px;
          padding: 3px 12px; font-family: var(--font-mono); font-size: 10px;
          letter-spacing: 1px; white-space: nowrap;
        }
        .pd-desc { color: var(--text-muted); font-size: 13.5px; line-height: 1.75; font-weight: 300; margin-bottom: 16px; }
        .pd-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
        .pd-tag {
          background: var(--bg-elevated); border: 1px solid var(--border-faint);
          border-radius: 8px; padding: 4px 11px; font-size: 12px;
          color: var(--text-muted); font-weight: 500;
        }

        .pd-secondary-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; margin-bottom: 24px; }

        .pd-compact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .pd-compact-card {
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 20px; padding: 28px 24px;
          display: flex; align-items: center; gap: 20px;
          transition: all .3s var(--ease);
        }
        .pd-compact-card:hover { transform: translateY(-4px); border-color: var(--border-default); background: var(--bg-elevated); }
        .pd-compact-name { font-family: var(--font-display); font-size: 15px; font-weight: 700; color: var(--text-primary); margin-bottom: 6px; letter-spacing: -.3px; }
        .pd-compact-desc { font-size: 13px; color: var(--text-muted); line-height: 1.7; font-weight: 300; margin-bottom: 12px; }

        .pd-integration-section {
          padding: 80px 0; background: var(--bg-surface);
          border-top: 1px solid var(--border-faint);
          border-bottom: 1px solid var(--border-faint);
        }
        .pd-integration-box {
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 24px; padding: 48px 40px; text-align: center;
        }
        .pd-integration-nodes {
          display: flex; justify-content: center;
          align-items: center; flex-wrap: wrap; gap: 16px; margin-bottom: 24px;
        }
        .pd-int-node {
          padding: 14px 22px; background: rgba(197,45,181,.1);
          border: 1px solid var(--border-subtle); border-radius: 12px;
          font-family: var(--font-display); font-size: 14px;
          font-weight: 600; color: var(--text-primary);
          display: flex; align-items: center; gap: 8px;
          transition: all .25s var(--ease);
        }
        .pd-int-node:hover { background: rgba(197,45,181,.18); border-color: var(--border-default); transform: translateY(-3px); }
        .pd-int-arrow { color: var(--brand-light); font-size: 1.4rem; opacity: .7; }
        .pd-integration-note { font-size: 14px; color: var(--text-muted); font-weight: 300; margin-top: 4px; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .pd-secondary-grid { grid-template-columns: 1fr 1fr; }
          .ph-rings-wrap      { height: 420px; }
          .ph-rings           { width: 400px; height: 400px; }
          .ph-ring-3          { width: 320px; height: 320px; }
          .ph-ring-4          { width: 400px; height: 400px; }
        }
        @media (max-width: 900px) {
          .ph-section  { padding: 110px 20px 80px; }
          .ph-inner    { grid-template-columns: 1fr; gap: 48px; }
          .ph-rings-wrap { display: none; }
        }
        @media (max-width: 768px) {
          .pd-primary-grid  { grid-template-columns: 1fr; }
          .pd-compact-grid  { grid-template-columns: 1fr; }
          .pd-primary-card  { flex-direction: column; }
          .pd-integration-box { padding: 32px 24px; }
        }
        @media (max-width: 600px) {
          .pd-secondary-grid { grid-template-columns: 1fr; }
          .pd-int-arrow { display: none; }
          .ph-trust { gap: 8px; }
          .ph-trust-badge { padding: 8px 12px; }
        }
      `}</style>

      <div className="pd-page">

        {/* ══════════════════════════════════════════
            HERO — Hero.jsx visual language
        ══════════════════════════════════════════ */}
        <section className="ph-section">

          {/* Ambient layers */}
          <div className="ph-mesh" />
          <div className="ph-grid" />
          <div className="ph-blob" ref={blobRef} />

          <div className="ph-inner">

            {/* ── LEFT: COPY ── */}
            <div>
              <div className="mx-breadcrumb" style={{ marginBottom: 20, animation: 'fade-up .5s var(--ease) both' }}>
                <Link to="/">Home</Link> › <span>Products</span>
              </div>

              <div className="ph-eyebrow">
                <span className="ph-pulse" />
                Software Products
              </div>

              <h1 className="ph-title">
                Purpose-Built<br />
                Software for<br />
                <em>Hospital Ops</em>
              </h1>

              <p className="ph-desc">
                Every product designed from the ground up for Indian hospitals —
                ABDM-ready, HIPAA-compliant, and built around real clinical workflows.
              </p>

              <div className="ph-actions">
                <Link to="/price" className="mx-btn-primary">View Pricing →</Link>
                <a href="/#contact" className="mx-btn-ghost">Request a Demo</a>
              </div>

              {/* Trust badges */}
              <div className="ph-trust">
                {heroStats.map(b => (
                  <div className="ph-trust-badge" key={b.label}>
                    <div className="ph-trust-icon">{b.icon}</div>
                    <div>
                      <div className="ph-trust-num">{b.num}</div>
                      <div className="ph-trust-label">{b.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: ORBITAL RINGS ── */}
            <div className="ph-rings-wrap">

              {/* Floating accent badges */}
              {floatBadges.map(b => (
                <div
                  key={b.cls}
                  className="ph-float"
                  style={{
                    ...b.style,
                    animation: `float-y 5s ${b.delay} ease-in-out infinite`,
                  }}
                >
                  <span className="ph-float-icon">{b.icon}</span>
                  <div>
                    <div className="ph-float-num">{b.num}</div>
                    <div className="ph-float-label">{b.label}</div>
                  </div>
                </div>
              ))}

              <div className="ph-rings">

                {/* Rings */}
                <div className="ph-ring ph-ring-4" />
                <div className="ph-ring ph-ring-3" />
                <div className="ph-ring ph-ring-2">
                  <div className="ph-ring-dot ph-ring-dot-2" />
                </div>
                <div className="ph-ring ph-ring-1">
                  <div className="ph-ring-dot" />
                </div>

                {/* Center badge */}
                <div className="ph-ring-center">
                  <div className="ph-center-num">7+</div>
                  <div className="ph-center-label">Products</div>
                </div>

                {/* Product icons orbiting ring-3 (radius ≈ 200px from center = 250-8=242px offset)
                    Placed at angles: 0°, 72°, 144°, 216°, 288° for 5 items */}
                {[
                  { icon: '🏥', label: 'HMS',          angle: 0   },
                  { icon: '📋', label: 'EHR',          angle: 72  },
                  { icon: '🔬', label: 'LIMS',         angle: 144 },
                  { icon: '📱', label: 'Mobile',       angle: 216 },
                  { icon: '📡', label: 'Telemedicine', angle: 288 },
                ].map(({ icon, label, angle }) => {
                  const r = 200  // ring-3 radius
                  const rad = (angle - 90) * (Math.PI / 180)
                  const x = 250 + r * Math.cos(rad) - 22   // center 250, half-icon 22
                  const y = 250 + r * Math.sin(rad) - 22
                  return (
                    <div
                      key={label}
                      className="ph-orbit-icon"
                      title={label}
                      style={{ left: x, top: y }}
                    >
                      {icon}
                    </div>
                  )
                })}

              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            ALL PRODUCTS
        ══════════════════════════════════════════ */}
        <section className="mx-section">
          <div className="mx-container">
            <div className="mx-text-center" style={{ marginBottom: 48 }}>
              <div className="mx-tag">All Products</div>
              <h2 className="mx-section-title">One Ecosystem. Every Department.</h2>
              <p className="mx-section-sub">
                All MedXL products are cloud-native, interoperable, and integrate
                seamlessly with each other — no data silos.
              </p>
            </div>

            {/* Primary — large 2-col */}
            <div className="pd-primary-grid">
              {primaryProducts.map(p => (
                <div className="pd-primary-card" key={p.id}>
                  <div className={`mx-icon-box ${p.iconVariant}`} style={{ fontSize: '2rem', width: 64, height: 64, flexShrink: 0 }}>
                    {p.icon}
                  </div>
                  <div className="pd-primary-body">
                    <div className="pd-primary-header">
                      <div className="pd-primary-name">{p.name}</div>
                      <span className="pd-badge">{p.badge}</span>
                    </div>
                    <p className="pd-desc">{p.desc}</p>
                    <div className="pd-tags">
                      {p.tags.map(t => <span className="pd-tag" key={t}>{t}</span>)}
                    </div>
                    <Link to={p.href} className="mx-btn-primary" style={{ fontSize: '0.82rem', padding: '10px 20px' }}>
                      {p.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Secondary — 3-col */}
            <div className="pd-secondary-grid">
              {secondaryProducts.map(p => (
                <div className="mx-card" key={p.id}>
                  <div className={`mx-icon-box ${p.iconVariant}`}>{p.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, marginBottom: 10, letterSpacing: '-.3px' }}>
                    {p.name}
                  </h3>
                  <p className="mx-muted" style={{ marginBottom: 20 }}>{p.desc}</p>
                  <Link to={p.href} className="mx-btn-ghost" style={{ fontSize: '0.8rem', padding: '9px 18px' }}>
                    {p.cta}
                  </Link>
                </div>
              ))}
            </div>

            {/* Compact — 2-col horizontal */}
            <div className="pd-compact-grid">
              {compactProducts.map(p => (
                <div className="pd-compact-card" key={p.id}>
                  <div className={`mx-icon-box ${p.iconVariant}`} style={{ flexShrink: 0, marginBottom: 0 }}>
                    {p.icon}
                  </div>
                  <div>
                    <div className="pd-compact-name">{p.name}</div>
                    <div className="pd-compact-desc">{p.desc}</div>
                    <Link to={p.href} className="mx-btn-ghost" style={{ fontSize: '0.76rem', padding: '7px 16px' }}>
                      {p.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            INTEGRATION
        ══════════════════════════════════════════ */}
        <section className="pd-integration-section">
          <div className="mx-container">
            <div className="mx-text-center" style={{ marginBottom: 40 }}>
              <div className="mx-tag">Integration</div>
              <h2 className="mx-section-title">All Products Work Together</h2>
              <p className="mx-section-sub">
                Every MedXL product shares a single patient database — no duplicate
                entry, no data silos, complete clinical picture at every touchpoint.
              </p>
            </div>
            <div className="pd-integration-box">
              <div className="pd-integration-nodes">
                {integrationNodes.map((node, i) => (
                  <div key={node.label} className="pd-int-wrapper">
                    <div className="pd-int-node" key={node.label}>
                      {node.icon} {node.label}
                    </div>
                    {i < integrationNodes.length - 1 && (
                      <div className="pd-int-arrow" key={`arr-${i}`}>⇄</div>
                    )}
                  </div>
                ))}
              </div>
              <p className="pd-integration-note">
                One patient. One record. Every department sees the same real-time data.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}