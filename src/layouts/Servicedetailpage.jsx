import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/*
  ServiceDetailPage — shared layout for all MedXL service detail pages.
  Usage:
    <ServiceDetailPage config={ANALYTICS_CONFIG} />

  Config shape:
  {
    slug, icon, tag, accentVar,  // accentVar = CSS var name like '--brand-hot'
    accentRgb,                   // e.g. '0,175,160'
    title, titleHighlight,
    subtitle,
    stats: [{ value, label }],
    features: string[],
    process: [{ num, title, text }],
    faqs: [{ q, a }],
    ctaTitle, ctaDesc,
  }
*/

export default function ServiceDetailPage({ config }) {
  const [openFaq, setOpenFaq] = useState(0)
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const {
    icon, tag, accentRgb,
    title, titleHighlight,
    subtitle,
    stats, features, process, faqs,
    ctaTitle, ctaDesc,
  } = config

  const acc = (a) => `rgba(${accentRgb},${a})`

  return (
    <>
      <style>{`
        /* ── SERVICE DETAIL PAGE ── */
        .sdp { background: var(--bg-base); min-height: 100vh; }

        /* ── HERO ── */
        .sdp-hero {
          position: relative; overflow: hidden;
          padding: 130px 56px 80px;
          background: var(--bg-base);
        }
        .sdp-hero-mesh {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background:
            radial-gradient(ellipse 55% 55% at 10% 55%, ${acc(.14)} 0%, transparent 65%),
            radial-gradient(ellipse 40% 40% at 90% 15%, ${acc(.10)} 0%, transparent 60%),
            radial-gradient(ellipse 30% 30% at 65% 90%, ${acc(.08)} 0%, transparent 60%);
        }
        .sdp-hero-grid {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image:
            linear-gradient(${acc(.04)} 1px, transparent 1px),
            linear-gradient(90deg, ${acc(.04)} 1px, transparent 1px);
          background-size: 72px 72px;
        }
        .sdp-hero-inner {
          position: relative; z-index: 1;
          max-width: 860px; margin: 0 auto;
        }
        .sdp-breadcrumb {
          display: flex; align-items: center; gap: 8px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--text-disabled);
          margin-bottom: 24px;
        }
        .sdp-breadcrumb a {
          color: var(--brand-light); text-decoration: none; transition: color .2s;
        }
        .sdp-breadcrumb a:hover { color: var(--text-primary); }
        .sdp-tag {
          display: inline-flex; align-items: center; gap: 9px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 2.5px;
          text-transform: uppercase; color: var(--text-muted);
          background: ${acc(.10)}; border: 1px solid ${acc(.3)};
          padding: 6px 16px; border-radius: 100px;
          margin-bottom: 22px; width: fit-content;
        }
        .sdp-tag-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: ${acc(1)};
          box-shadow: 0 0 8px ${acc(.8)};
        }
        .sdp-hero-icon {
          font-size: 48px; display: block; margin-bottom: 16px;
          filter: drop-shadow(0 8px 24px ${acc(.4)});
          animation: fade-up .5s var(--ease) both;
        }
        .sdp-hero h1 {
          font-family: var(--font-display); font-weight: 800;
          font-size: clamp(40px, 5.5vw, 72px);
          letter-spacing: -2.5px; line-height: 1.0;
          color: var(--text-primary); margin-bottom: 20px;
          animation: fade-up .55s .1s var(--ease) both;
        }
        .sdp-hero h1 em {
          font-style: normal;
          background: linear-gradient(135deg, rgba(${accentRgb},1) 0%, rgba(197,45,181,1) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .sdp-hero-desc {
          font-size: 16px; color: var(--text-secondary); line-height: 1.8;
          font-weight: 300; max-width: 620px; margin-bottom: 32px;
          animation: fade-up .55s .2s var(--ease) both;
        }
        .sdp-hero-actions {
          display: flex; gap: 14px; flex-wrap: wrap;
          animation: fade-up .55s .3s var(--ease) both;
        }

        /* ── STATS ROW ── */
        .sdp-stats {
          display: grid; grid-template-columns: repeat(4,1fr);
          gap: 1px; background: var(--border-faint);
          border: 1px solid var(--border-faint);
          border-radius: 20px; overflow: hidden;
          margin: 56px auto 0; max-width: 860px;
          animation: fade-up .6s .4s var(--ease) both;
        }
        .sdp-stat {
          background: var(--bg-raised); padding: 28px 24px;
          text-align: center; transition: background .25s;
        }
        .sdp-stat:hover { background: var(--bg-elevated); }
        .sdp-stat-val {
          font-family: var(--font-display); font-size: 28px; font-weight: 800;
          color: ${acc(1)}; letter-spacing: -1px; line-height: 1;
          margin-bottom: 6px;
        }
        .sdp-stat-label {
          font-family: var(--font-mono); font-size: 10px;
          color: var(--text-muted); letter-spacing: 1px; text-transform: uppercase;
        }

        /* ── BODY SECTION: two-col grid ── */
        .sdp-body {
          padding: 80px 56px;
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 64px;
          align-items: start;
        }

        /* Feature list panel */
        .sdp-panel-label {
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 3px;
          text-transform: uppercase; color: ${acc(1)};
          background: ${acc(.09)}; border: 1px solid ${acc(.25)};
          padding: 5px 14px; border-radius: 100px; width: fit-content;
          margin-bottom: 16px;
        }
        .sdp-panel-title {
          font-family: var(--font-display); font-size: 26px; font-weight: 700;
          color: var(--text-primary); letter-spacing: -.6px; margin-bottom: 24px;
        }
        .sdp-features { display: flex; flex-direction: column; gap: 10px; }
        .sdp-feature {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 14px 18px;
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 12px; transition: border-color .25s, background .25s;
        }
        .sdp-feature:hover {
          border-color: ${acc(.35)};
          background: ${acc(.04)};
        }
        .sdp-feature-check {
          width: 20px; height: 20px; border-radius: 6px; flex-shrink: 0;
          background: ${acc(.14)}; border: 1px solid ${acc(.3)};
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; margin-top: 1px;
        }
        .sdp-feature-text {
          font-size: 13.5px; color: var(--text-secondary); line-height: 1.5;
        }

        /* ── PROCESS SECTION ── */
        .sdp-process-wrap { background: var(--bg-surface); border-top: 1px solid var(--border-faint); border-bottom: 1px solid var(--border-faint); }
        .sdp-process {
          padding: 80px 56px;
          max-width: 1200px; margin: 0 auto;
        }
        .sdp-process-header {
          text-align: center; margin-bottom: 48px;
        }
        .sdp-process-title {
          font-family: var(--font-display); font-size: 32px; font-weight: 700;
          color: var(--text-primary); letter-spacing: -.8px; margin-top: 12px;
        }
        .sdp-process-title em {
          font-style: normal;
          background: linear-gradient(135deg, rgba(${accentRgb},1) 0%, rgba(197,45,181,1) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .sdp-steps {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 16px;
        }
        .sdp-step {
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 20px; padding: 28px 24px;
          transition: border-color .3s, transform .3s, background .3s;
          position: relative; overflow: hidden;
        }
        .sdp-step::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 2px; background: linear-gradient(90deg, rgba(${accentRgb},1), rgba(197,45,181,1));
          transform: scaleX(0); transform-origin: left; transition: transform .35s var(--ease);
        }
        .sdp-step:hover { border-color: ${acc(.35)}; transform: translateY(-4px); background: var(--bg-elevated); }
        .sdp-step:hover::before { transform: scaleX(1); }
        .sdp-step-num {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 2px;
          color: ${acc(1)}; background: ${acc(.10)};
          border: 1px solid ${acc(.25)};
          padding: 4px 10px; border-radius: 6px; width: fit-content;
          margin-bottom: 16px;
        }
        .sdp-step h4 {
          font-family: var(--font-display); font-size: 16px; font-weight: 700;
          color: var(--text-primary); letter-spacing: -.3px; margin-bottom: 10px;
        }
        .sdp-step p {
          font-size: 13px; color: var(--text-muted); line-height: 1.7;
        }

        /* ── FAQ SECTION ── */
        .sdp-faq-wrap {
          padding: 80px 56px;
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start;
        }
        .sdp-faq-left { position: sticky; top: 80px; }
        .sdp-faq-super {
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 3px;
          text-transform: uppercase; color: ${acc(1)};
          background: ${acc(.09)}; border: 1px solid ${acc(.25)};
          padding: 5px 14px; border-radius: 100px; width: fit-content;
          margin-bottom: 16px;
        }
        .sdp-faq-title {
          font-family: var(--font-display); font-size: 32px; font-weight: 700;
          color: var(--text-primary); letter-spacing: -.8px; margin-bottom: 16px;
        }
        .sdp-faq-desc {
          font-size: 14px; color: var(--text-muted); line-height: 1.75;
        }
        .sdp-faq-list { display: flex; flex-direction: column; gap: 10px; }
        .sdp-faq-item {
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 14px; overflow: hidden; transition: border-color .25s;
        }
        .sdp-faq-item.open { border-color: ${acc(.35)}; }
        .sdp-faq-q {
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 20px; cursor: pointer;
          font-size: 14px; font-weight: 600; color: var(--text-primary);
          gap: 12px; user-select: none;
        }
        .sdp-faq-q:hover { color: ${acc(1)}; }
        .sdp-faq-ico {
          width: 24px; height: 24px; border-radius: 6px; flex-shrink: 0;
          background: ${acc(.10)}; border: 1px solid ${acc(.25)};
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; font-weight: 700; color: ${acc(1)};
          transition: transform .3s;
        }
        .sdp-faq-item.open .sdp-faq-ico { transform: rotate(45deg); }
        .sdp-faq-a {
          max-height: 0; overflow: hidden;
          transition: max-height .4s cubic-bezier(.4,0,.2,1), padding .4s;
          font-size: 13.5px; color: var(--text-muted); line-height: 1.75;
          padding: 0 20px;
        }
        .sdp-faq-item.open .sdp-faq-a { max-height: 300px; padding: 0 20px 18px; }

        /* ── CTA BANNER ── */
        .sdp-cta-wrap { padding: 0 56px 80px; max-width: 1200px; margin: 0 auto; }
        .sdp-cta {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, rgba(${accentRgb},.18) 0%, rgba(197,45,181,.22) 100%);
          border: 1px solid ${acc(.3)};
          border-radius: 28px; padding: 52px 56px;
        }
        .sdp-cta::before {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(${acc(.06)} 1px, transparent 1px);
          background-size: 32px 32px; pointer-events: none;
        }
        .sdp-cta::after {
          content: ''; position: absolute; top: -80px; right: -80px;
          width: 320px; height: 320px; border-radius: 50%;
          background: ${acc(.12)}; filter: blur(60px); pointer-events: none;
        }
        .sdp-cta-inner { position: relative; z-index: 1; max-width: 640px; }
        .sdp-cta-chip {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--text-muted);
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          padding: 5px 14px; border-radius: 100px; margin-bottom: 18px;
        }
        .sdp-cta h2 {
          font-family: var(--font-display); font-size: clamp(24px,3vw,36px);
          font-weight: 800; color: var(--text-primary); letter-spacing: -1px;
          margin-bottom: 12px;
        }
        .sdp-cta p {
          font-size: 14.5px; color: var(--text-secondary); line-height: 1.75;
          margin-bottom: 28px;
        }
        .sdp-cta-btns { display: flex; gap: 14px; flex-wrap: wrap; }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .sdp-hero, .sdp-process, .sdp-faq-wrap, .sdp-cta-wrap { padding-left: 20px; padding-right: 20px; }
          .sdp-body { grid-template-columns: 1fr; gap: 40px; padding: 48px 20px; }
          .sdp-steps { grid-template-columns: 1fr 1fr; }
          .sdp-faq-wrap { grid-template-columns: 1fr; gap: 36px; }
          .sdp-faq-left { position: static; }
          .sdp-stats { grid-template-columns: 1fr 1fr; }
          .sdp-cta { padding: 36px 28px; }
        }
        @media (max-width: 540px) {
          .sdp-steps { grid-template-columns: 1fr; }
          .sdp-stats { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div className="sdp">
        <Navbar />

        {/* ── HERO ── */}
        <section className="sdp-hero">
          <div className="sdp-hero-mesh" />
          <div className="sdp-hero-grid" />
          <div className="sdp-hero-inner">
            <div className="sdp-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <Link to="/services">Services</Link>
              <span>›</span>
              <span>{tag}</span>
            </div>

            <div className="sdp-tag">
              <span className="sdp-tag-dot" />
              {tag}
            </div>

            <span className="sdp-hero-icon">{icon}</span>

            <h1>
              {title}<br />
              <em>{titleHighlight}</em>
            </h1>

            <p className="sdp-hero-desc">{subtitle}</p>

            <div className="sdp-hero-actions">
              <Link to="/price" className="mx-btn-primary">See Which Plan Includes This →</Link>
              <a
                href="https://api.whatsapp.com/send/?phone=919884021188"
                className="mx-btn-ghost"
                target="_blank"
                rel="noreferrer"
              >
                💬 Chat on WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="sdp-stats">
              {stats.map(s => (
                <div className="sdp-stat" key={s.label}>
                  <div className="sdp-stat-val">{s.value}</div>
                  <div className="sdp-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES + (empty right col placeholder for extension) ── */}
        <div className="sdp-body">
          {/* Left: Features */}
          <div>
            <div className="sdp-panel-label">What's Included</div>
            <h2 className="sdp-panel-title">Everything in This Service</h2>
            <ul className="sdp-features" style={{ listStyle: 'none', padding: 0 }}>
              {features.map(f => (
                <li className="sdp-feature" key={f}>
                  <span className="sdp-feature-check">✓</span>
                  <span className="sdp-feature-text">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: FAQ teaser cards (first 3) */}
          <div>
            <div className="sdp-panel-label">Quick Answers</div>
            <h2 className="sdp-panel-title">Common Questions</h2>
            <div className="sdp-faq-list">
              {faqs.map((faq, i) => (
                <div
                  className={`sdp-faq-item${openFaq === i ? ' open' : ''}`}
                  key={i}
                >
                  <div className="sdp-faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                    <span>{faq.q}</span>
                    <span className="sdp-faq-ico">+</span>
                  </div>
                  <div className="sdp-faq-a">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PROCESS ── */}
        <div className="sdp-process-wrap">
          <div className="sdp-process">
            <div className="sdp-process-header">
              <div className="sdp-panel-label" style={{ margin: '0 auto 12px' }}>Our Process</div>
              <h2 className="sdp-process-title">How We <em>Deliver This</em></h2>
            </div>
            <div className="sdp-steps">
              {process.map(step => (
                <div className="sdp-step" key={step.num}>
                  <div className="sdp-step-num">{step.num}</div>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA BANNER ── */}
        <div className="sdp-cta-wrap">
          <div className="sdp-cta">
            <div className="sdp-cta-inner">
              <div className="sdp-cta-chip">
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: acc(1) }} />
                Included in All Plans
              </div>
              <h2>{ctaTitle}</h2>
              <p>{ctaDesc}</p>
              <div className="sdp-cta-btns">
                <Link to="/price" className="mx-btn-primary">View Plans & Pricing →</Link>
                <a
                  href="https://api.whatsapp.com/send/?phone=919884021188"
                  className="mx-btn-ghost"
                  target="_blank"
                  rel="noreferrer"
                >
                  💬 Talk to Us
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