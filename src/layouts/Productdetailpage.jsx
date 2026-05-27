import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/*
  ProductDetailPage — shared layout for all MedXL product detail pages.
  Usage:
    <ProductDetailPage config={HMS_CONFIG} />

  Config shape:
  {
    slug,
    icon,
    tag,
    accentRgb,        // e.g. '0,175,160'
    badgeLabel,       // e.g. 'Cloud HMS'
    title,            // first line of h1
    titleHighlight,   // gradient em line
    subtitle,
    stats: [{ value, label }],
    features: string[],
    modules: [{ icon, iconVariant, name, desc }],
    process: [{ num, title, text }],
    faqs: [{ q, a }],
    ctaTitle,
    ctaDesc,
  }
*/

export default function ProductDetailPage({ config }) {
  const [openFaq, setOpenFaq] = useState(0)
  const blobRef = useRef(null)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const fn = (e) => {
      if (!blobRef.current) return
      const x = (e.clientX / window.innerWidth  - 0.5) * 40
      const y = (e.clientY / window.innerHeight - 0.5) * 40
      blobRef.current.style.transform =
        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
    }
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])

  const {
    icon, tag, accentRgb, badgeLabel,
    title, titleHighlight,
    subtitle,
    stats, features, modules, process, faqs,
    ctaTitle, ctaDesc,
  } = config

  const acc = (a) => `rgba(${accentRgb},${a})`

  return (
    <>
      <style>{`
        /* ════════════════════════════════════════
           PRODUCT DETAIL PAGE
        ════════════════════════════════════════ */
        .pdp { background: var(--bg-base); min-height: 100vh; }

        /* ── HERO ── */
        .pdp-hero {
          position: relative; overflow: hidden;
          padding: 130px 56px 96px;
          background: var(--bg-base);
          min-height: 80vh;
          display: flex; align-items: center;
        }
        .pdp-hero-mesh {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background:
            radial-gradient(ellipse 60% 55% at 12% 52%, ${acc(.18)} 0%, transparent 65%),
            radial-gradient(ellipse 45% 40% at 88% 18%, ${acc(.12)} 0%, transparent 60%),
            radial-gradient(ellipse 35% 35% at 68% 88%, ${acc(.09)} 0%, transparent 60%);
        }
        .pdp-hero-grid {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image:
            linear-gradient(${acc(.05)} 1px, transparent 1px),
            linear-gradient(90deg, ${acc(.05)} 1px, transparent 1px);
          background-size: 72px 72px;
        }
        .pdp-hero-blob {
          position: absolute; top: 45%; left: 65%;
          transform: translate(-50%, -50%);
          width: 600px; height: 600px;
          background: radial-gradient(circle, ${acc(.12)} 0%, transparent 70%);
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: blob 14s ease-in-out infinite;
          filter: blur(48px);
          transition: transform 1.4s cubic-bezier(.4,0,.2,1);
          pointer-events: none; z-index: 0;
        }
        .pdp-hero-inner {
          position: relative; z-index: 2;
          max-width: 1200px; margin: 0 auto; width: 100%;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 72px; align-items: center;
        }

        /* Left copy */
        .pdp-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: var(--font-mono); font-size: 10px;
          letter-spacing: 3px; text-transform: uppercase;
          color: ${acc(1)};
          background: ${acc(.12)}; border: 1px solid ${acc(.3)};
          padding: 6px 16px; border-radius: 100px;
          width: fit-content; margin-bottom: 24px;
          animation: fade-up .55s var(--ease) both;
        }
        .pdp-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: ${acc(1)};
          box-shadow: 0 0 8px ${acc(.9)};
          position: relative; flex-shrink: 0;
        }
        .pdp-eyebrow-dot::after {
          content: ''; position: absolute; inset: -4px;
          border-radius: 50%; border: 1px solid ${acc(.6)};
          animation: pulse-ring 2s ease-out infinite;
        }
        .pdp-breadcrumb {
          display: flex; align-items: center; gap: 8px;
          font-family: var(--font-mono); font-size: 10px;
          letter-spacing: 2px; text-transform: uppercase;
          color: var(--text-disabled); margin-bottom: 20px;
          animation: fade-up .5s var(--ease) both;
        }
        .pdp-breadcrumb a {
          color: ${acc(.9)}; text-decoration: none; transition: color .2s;
        }
        .pdp-breadcrumb a:hover { color: var(--text-primary); }

        .pdp-hero h1 {
          font-family: var(--font-display); font-weight: 800;
          font-size: clamp(38px, 4.8vw, 68px);
          letter-spacing: -2.5px; line-height: 1.0;
          color: var(--text-primary); margin-bottom: 22px;
          animation: fade-up .6s .1s var(--ease) both;
        }
        .pdp-hero h1 em {
          font-style: normal;
          background: linear-gradient(135deg, ${acc(1)} 0%, rgba(197,45,181,1) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .pdp-hero-desc {
          font-size: 16px; color: var(--text-secondary);
          line-height: 1.8; font-weight: 300;
          max-width: 480px; margin-bottom: 34px;
          animation: fade-up .6s .2s var(--ease) both;
        }
        .pdp-hero-actions {
          display: flex; gap: 14px; flex-wrap: wrap;
          animation: fade-up .6s .3s var(--ease) both;
        }

        /* Right: stats panel */
        .pdp-stats-panel {
          animation: fade-in .7s .35s var(--ease) both;
        }
        .pdp-stats-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 14px;
        }
        .pdp-stat-card {
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 18px; padding: 26px 20px; text-align: center;
          transition: border-color .3s, background .3s, transform .3s;
          position: relative; overflow: hidden;
        }
        .pdp-stat-card::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, ${acc(.06)} 0%, transparent 60%);
          opacity: 0; transition: opacity .3s;
        }
        .pdp-stat-card:hover { border-color: ${acc(.4)}; transform: translateY(-4px); }
        .pdp-stat-card:hover::before { opacity: 1; }
        .pdp-stat-icon {
          font-size: 28px; display: block; margin-bottom: 8px;
          filter: drop-shadow(0 4px 12px ${acc(.35)});
        }
        .pdp-stat-val {
          font-family: var(--font-display); font-size: 26px; font-weight: 800;
          color: ${acc(1)}; letter-spacing: -1px; line-height: 1;
          margin-bottom: 6px;
        }
        .pdp-stat-label {
          font-family: var(--font-mono); font-size: 10px;
          color: var(--text-muted); letter-spacing: 1px; text-transform: uppercase;
        }
        /* Full-width first card */
        .pdp-stat-card-wide {
          grid-column: span 2;
          display: flex; align-items: center; gap: 20px;
          text-align: left; padding: 24px 28px;
        }
        .pdp-stat-card-wide .pdp-stat-icon { font-size: 48px; flex-shrink: 0; margin-bottom: 0; }
        .pdp-stat-card-wide .pdp-stat-val { font-size: 14px; font-weight: 400; color: var(--text-muted); letter-spacing: 0; }
        .pdp-plan-note { font-size: 13px; color: var(--text-muted); line-height: 1.6; }

        /* ── FEATURES + MODULES SECTION ── */
        .pdp-body {
          padding: 80px 56px;
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 64px; align-items: start;
        }
        .pdp-section-label {
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 3px;
          text-transform: uppercase; color: ${acc(1)};
          background: ${acc(.09)}; border: 1px solid ${acc(.25)};
          padding: 5px 14px; border-radius: 100px;
          width: fit-content; margin-bottom: 16px;
        }
        .pdp-section-title {
          font-family: var(--font-display); font-size: 26px; font-weight: 700;
          color: var(--text-primary); letter-spacing: -.6px; margin-bottom: 24px;
        }
        .pdp-features { display: flex; flex-direction: column; gap: 8px; }
        .pdp-feature {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 12px 16px;
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 10px; transition: border-color .25s, background .25s;
        }
        .pdp-feature:hover {
          border-color: ${acc(.35)};
          background: ${acc(.04)};
        }
        .pdp-feature-check {
          width: 20px; height: 20px; border-radius: 6px; flex-shrink: 0;
          background: ${acc(.14)}; border: 1px solid ${acc(.3)};
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; margin-top: 1px; color: ${acc(1)};
        }
        .pdp-feature-text {
          font-size: 13.5px; color: var(--text-secondary); line-height: 1.5;
        }

        /* ── MODULES SECTION ── */
        .pdp-modules-wrap {
          background: var(--bg-surface);
          border-top: 1px solid var(--border-faint);
          border-bottom: 1px solid var(--border-faint);
          padding: 80px 56px;
        }
        .pdp-modules-inner { max-width: 1200px; margin: 0 auto; }
        .pdp-modules-header { text-align: center; margin-bottom: 48px; }
        .pdp-modules-title {
          font-family: var(--font-display); font-size: 32px; font-weight: 700;
          color: var(--text-primary); letter-spacing: -.8px; margin-top: 12px;
        }
        .pdp-modules-title em {
          font-style: normal;
          background: linear-gradient(135deg, ${acc(1)} 0%, rgba(197,45,181,1) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .pdp-modules-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
        }
        .pdp-module-card {
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 20px; padding: 28px 24px;
          transition: border-color .3s, transform .3s, background .3s;
          position: relative; overflow: hidden;
        }
        .pdp-module-card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, ${acc(1)}, rgba(197,45,181,1));
          transform: scaleX(0); transform-origin: left;
          transition: transform .35s var(--ease);
        }
        .pdp-module-card:hover {
          border-color: ${acc(.35)}; transform: translateY(-5px);
          background: var(--bg-elevated);
        }
        .pdp-module-card:hover::after { transform: scaleX(1); }
        .pdp-module-icon {
          width: 48px; height: 48px; border-radius: 12px;
          background: ${acc(.12)}; border: 1px solid ${acc(.25)};
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; margin-bottom: 16px;
        }
        .pdp-module-name {
          font-family: var(--font-display); font-size: 16px; font-weight: 700;
          color: var(--text-primary); letter-spacing: -.3px; margin-bottom: 10px;
        }
        .pdp-module-desc {
          font-size: 13px; color: var(--text-muted); line-height: 1.75;
        }

        /* ── PROCESS SECTION ── */
        .pdp-process-section {
          padding: 80px 56px;
          max-width: 1200px; margin: 0 auto;
        }
        .pdp-process-header { text-align: center; margin-bottom: 48px; }
        .pdp-process-title {
          font-family: var(--font-display); font-size: 32px; font-weight: 700;
          color: var(--text-primary); letter-spacing: -.8px; margin-top: 12px;
        }
        .pdp-process-title em {
          font-style: normal;
          background: linear-gradient(135deg, ${acc(1)} 0%, rgba(197,45,181,1) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .pdp-steps {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 16px;
        }
        .pdp-step {
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 20px; padding: 28px 24px;
          transition: border-color .3s, transform .3s, background .3s;
          position: relative; overflow: hidden;
        }
        .pdp-step::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, ${acc(1)}, rgba(197,45,181,1));
          transform: scaleX(0); transform-origin: left;
          transition: transform .35s var(--ease);
        }
        .pdp-step:hover { border-color: ${acc(.4)}; transform: translateY(-4px); background: var(--bg-elevated); }
        .pdp-step:hover::before { transform: scaleX(1); }
        .pdp-step-num {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 2px;
          color: ${acc(1)}; background: ${acc(.10)};
          border: 1px solid ${acc(.25)};
          padding: 4px 10px; border-radius: 6px;
          width: fit-content; margin-bottom: 16px;
        }
        .pdp-step h4 {
          font-family: var(--font-display); font-size: 16px; font-weight: 700;
          color: var(--text-primary); letter-spacing: -.3px; margin-bottom: 10px;
        }
        .pdp-step p {
          font-size: 13px; color: var(--text-muted); line-height: 1.7;
        }

        /* ── FAQ SECTION ── */
        .pdp-faq-wrap {
          background: var(--bg-surface);
          border-top: 1px solid var(--border-faint);
          padding: 80px 56px;
        }
        .pdp-faq-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 64px; align-items: start;
        }
        .pdp-faq-left { position: sticky; top: 80px; }
        .pdp-faq-title {
          font-family: var(--font-display); font-size: 32px; font-weight: 700;
          color: var(--text-primary); letter-spacing: -.8px; margin-bottom: 16px;
          margin-top: 12px;
        }
        .pdp-faq-desc {
          font-size: 14px; color: var(--text-muted); line-height: 1.75;
        }
        .pdp-faq-list { display: flex; flex-direction: column; gap: 10px; }
        .pdp-faq-item {
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 14px; overflow: hidden; transition: border-color .25s;
        }
        .pdp-faq-item.open { border-color: ${acc(.4)}; }
        .pdp-faq-q {
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 20px; cursor: pointer;
          font-size: 14px; font-weight: 600; color: var(--text-primary);
          gap: 12px; user-select: none;
          transition: color .2s;
        }
        .pdp-faq-q:hover { color: ${acc(1)}; }
        .pdp-faq-ico {
          width: 24px; height: 24px; border-radius: 6px; flex-shrink: 0;
          background: ${acc(.10)}; border: 1px solid ${acc(.25)};
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; font-weight: 700; color: ${acc(1)};
          transition: transform .3s;
        }
        .pdp-faq-item.open .pdp-faq-ico { transform: rotate(45deg); }
        .pdp-faq-a {
          max-height: 0; overflow: hidden;
          transition: max-height .4s cubic-bezier(.4,0,.2,1), padding .4s;
          font-size: 13.5px; color: var(--text-muted); line-height: 1.75;
          padding: 0 20px;
        }
        .pdp-faq-item.open .pdp-faq-a { max-height: 300px; padding: 0 20px 18px; }

        /* ── CTA BANNER ── */
        .pdp-cta-wrap { padding: 80px 56px; max-width: 1200px; margin: 0 auto; }
        .pdp-cta {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, ${acc(.18)} 0%, rgba(197,45,181,.22) 100%);
          border: 1px solid ${acc(.35)};
          border-radius: 28px; padding: 52px 56px;
        }
        .pdp-cta::before {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(${acc(.07)} 1px, transparent 1px);
          background-size: 32px 32px; pointer-events: none;
        }
        .pdp-cta::after {
          content: ''; position: absolute; top: -80px; right: -80px;
          width: 360px; height: 360px; border-radius: 50%;
          background: ${acc(.14)}; filter: blur(60px); pointer-events: none;
        }
        .pdp-cta-inner { position: relative; z-index: 1; max-width: 640px; }
        .pdp-cta-chip {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--text-muted);
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          padding: 5px 14px; border-radius: 100px; margin-bottom: 18px;
        }
        .pdp-cta h2 {
          font-family: var(--font-display); font-size: clamp(24px,3vw,38px);
          font-weight: 800; color: var(--text-primary);
          letter-spacing: -1px; margin-bottom: 12px;
        }
        .pdp-cta p {
          font-size: 14.5px; color: var(--text-secondary);
          line-height: 1.75; margin-bottom: 28px;
        }
        .pdp-cta-btns { display: flex; gap: 14px; flex-wrap: wrap; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .pdp-modules-grid { grid-template-columns: 1fr 1fr; }
          .pdp-steps { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 900px) {
          .pdp-hero { padding: 110px 20px 80px; }
          .pdp-hero-inner { grid-template-columns: 1fr; gap: 48px; }
        }
        @media (max-width: 768px) {
          .pdp-body { grid-template-columns: 1fr; gap: 40px; padding: 48px 20px; }
          .pdp-modules-wrap, .pdp-faq-wrap, .pdp-cta-wrap { padding-left: 20px; padding-right: 20px; }
          .pdp-process-section { padding: 48px 20px; }
          .pdp-faq-inner { grid-template-columns: 1fr; gap: 36px; }
          .pdp-faq-left { position: static; }
          .pdp-cta { padding: 36px 28px; }
        }
        @media (max-width: 540px) {
          .pdp-modules-grid { grid-template-columns: 1fr; }
          .pdp-steps { grid-template-columns: 1fr; }
          .pdp-stats-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div className="pdp">
        <Navbar />

        {/* ══════════════════════════════════════
            HERO
        ══════════════════════════════════════ */}
        <section className="pdp-hero">
          <div className="pdp-hero-mesh" />
          <div className="pdp-hero-grid" />
          <div className="pdp-hero-blob" ref={blobRef} />

          <div className="pdp-hero-inner">

            {/* Left: copy */}
            <div>
              <div className="pdp-breadcrumb">
                <Link to="/">Home</Link>
                <span>›</span>
                <Link to="/products">Products</Link>
                <span>›</span>
                <span>{tag}</span>
              </div>

              <div className="pdp-eyebrow">
                <span className="pdp-eyebrow-dot" />
                {badgeLabel}
              </div>

              <h1>
                {title}<br />
                <em>{titleHighlight}</em>
              </h1>

              <p className="pdp-hero-desc">{subtitle}</p>

              <div className="pdp-hero-actions">
                <Link to="/price" className="mx-btn-primary">See Pricing →</Link>
                <a
                  href="https://api.whatsapp.com/send/?phone=919884021188"
                  className="mx-btn-ghost"
                  target="_blank"
                  rel="noreferrer"
                >
                  📅 Request Demo
                </a>
              </div>
            </div>

            {/* Right: stats panel */}
            <div className="pdp-stats-panel">
              <div className="pdp-stats-grid">
                {/* Wide card — icon + plan note */}
                <div className="pdp-stat-card pdp-stat-card-wide">
                  <span className="pdp-stat-icon">{icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6, letterSpacing: '-.3px' }}>
                      {tag}
                    </div>
                    <div className="pdp-plan-note">
                      Available in Growth & Enterprise plans.<br />Add-on available for Starter.
                    </div>
                  </div>
                </div>
                {/* Stats */}
                {stats.map(s => (
                  <div className="pdp-stat-card" key={s.label}>
                    {s.icon && <span className="pdp-stat-icon">{s.icon}</span>}
                    <div className="pdp-stat-val">{s.value}</div>
                    <div className="pdp-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════
            FEATURES + FAQ (two-col)
        ══════════════════════════════════════ */}
        <div className="pdp-body">
          {/* Features */}
          <div>
            <div className="pdp-section-label">Key Features</div>
            <h2 className="pdp-section-title">What {tag} Includes</h2>
            <ul className="pdp-features" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {features.map(f => (
                <li className="pdp-feature" key={f}>
                  <span className="pdp-feature-check">✓</span>
                  <span className="pdp-feature-text">{f}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 28 }}>
              <Link to="/price" className="mx-btn-primary">Get This in Your Plan →</Link>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div className="pdp-section-label">FAQ</div>
            <h2 className="pdp-section-title">Frequently Asked</h2>
            <div className="pdp-faq-list">
              {faqs.map((faq, i) => (
                <div
                  className={`pdp-faq-item${openFaq === i ? ' open' : ''}`}
                  key={i}
                >
                  <div className="pdp-faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                    <span>{faq.q}</span>
                    <span className="pdp-faq-ico">+</span>
                  </div>
                  <div className="pdp-faq-a">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            CORE MODULES
        ══════════════════════════════════════ */}
        <div className="pdp-modules-wrap">
          <div className="pdp-modules-inner">
            <div className="pdp-modules-header">
              <div className="pdp-section-label" style={{ margin: '0 auto 12px' }}>Modules</div>
              <h2 className="pdp-modules-title">Core <em>Modules</em></h2>
            </div>
            <div className="pdp-modules-grid">
              {modules.map(m => (
                <div className="pdp-module-card" key={m.name}>
                  <div className="pdp-module-icon">{m.icon}</div>
                  <div className="pdp-module-name">{m.name}</div>
                  <div className="pdp-module-desc">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            IMPLEMENTATION PROCESS
        ══════════════════════════════════════ */}
        <div className="pdp-process-section">
          <div className="pdp-process-header">
            <div className="pdp-section-label" style={{ margin: '0 auto 12px' }}>Go Live</div>
            <h2 className="pdp-process-title">How We <em>Implement This</em></h2>
          </div>
          <div className="pdp-steps">
            {process.map(step => (
              <div className="pdp-step" key={step.num}>
                <div className="pdp-step-num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            CTA BANNER
        ══════════════════════════════════════ */}
        <div className="pdp-cta-wrap">
          <div className="pdp-cta">
            <div className="pdp-cta-inner">
              <div className="pdp-cta-chip">
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: acc(1) }} />
                Growth & Enterprise Plans
              </div>
              <h2>{ctaTitle}</h2>
              <p>{ctaDesc}</p>
              <div className="pdp-cta-btns">
                <Link to="/price" className="mx-btn-primary">View Plans & Pricing →</Link>
                <a
                  href="https://api.whatsapp.com/send/?phone=919884021188"
                  className="mx-btn-ghost"
                  target="_blank"
                  rel="noreferrer"
                >
                  📅 Book a Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}