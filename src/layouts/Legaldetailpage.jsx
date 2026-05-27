import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MedXLLogo from '../components/MedXLLogo'

/*
  LegalPage — shared layout for Terms, Privacy, and Cookie Policy pages.

  Config shape:
  {
    title: string,          // e.g. 'Privacy'
    titleHighlight: string, // e.g. 'Policy'
    description: string,    // hero subtitle
    accentRgb: string,      // e.g. '0,175,160'
    noticeIcon: string,     // emoji
    noticeText: ReactNode,  // notice block body
    chips: [{ label, dot }],  // hero meta chips
    sections: [
      {
        id: string,
        num: string,        // '01', '02' …
        title: string,
        content: (string | ReactNode)[],
      }
    ],
    ctaTag: string,
    ctaTitle: string,
    ctaDesc: string,
    ctaPrimary: { label, href },
    ctaSecondary: { label, to?, href? },
    navCta: { label, href },
    breadcrumb: string,     // last crumb label
    footerLinks: [{ label, to?, href? }],
  }
*/

export default function LegalPage({ config }) {
  const {
    title, titleHighlight, description,
    accentRgb, noticeIcon, noticeText, chips,
    sections,
    ctaTag, ctaTitle, ctaDesc, ctaPrimary, ctaSecondary,
    navCta, breadcrumb, footerLinks,
  } = config

  const acc = (a) => `rgba(${accentRgb},${a})`

  return (
    <>
      <style>{`
        /* ══════════════════════════════════════════
           LEGAL PAGE — shared layout styles
           Accent colour injected via CSS custom props
           set on .lp-root at render time.
        ══════════════════════════════════════════ */

        .lp-root { background: var(--bg-base); min-height: 100vh; }

        /* ── HERO ── */
        .lp-hero {
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border-faint);
          padding: 64px 56px 56px;
          position: relative; overflow: hidden;
        }
        .lp-hero-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(var(--lp-acc-faint) 1px, transparent 1px);
          background-size: 36px 36px;
        }
        .lp-hero-glow {
          position: absolute; top: -100px; right: -100px;
          width: 400px; height: 400px; border-radius: 50%;
          background: var(--lp-acc-glow);
          filter: blur(60px); pointer-events: none;
        }
        .lp-hero-inner { max-width: 860px; position: relative; z-index: 1; }

        .lp-breadcrumb {
          display: flex; align-items: center; gap: 8px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--text-disabled);
          margin-bottom: 20px;
        }
        .lp-breadcrumb a { color: var(--brand-light); text-decoration: none; transition: color .2s; }
        .lp-breadcrumb a:hover { color: var(--text-primary); }

        .lp-hero h1 {
          font-family: var(--font-display); font-weight: 800;
          font-size: clamp(36px, 5vw, 60px); letter-spacing: -1.5px;
          line-height: 1.06; color: var(--text-primary); margin-bottom: 16px;
        }
        .lp-hero h1 em {
          font-style: normal;
          background: var(--brand-grad);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .lp-hero-desc {
          font-size: 15px; color: var(--text-secondary); line-height: 1.75;
          max-width: 640px; margin-bottom: 28px;
        }
        .lp-chips { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
        .lp-chip {
          display: flex; align-items: center; gap: 7px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 1px;
          text-transform: uppercase; color: var(--text-muted);
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          padding: 6px 14px; border-radius: 100px;
        }
        .lp-chip-dot { width: 5px; height: 5px; border-radius: 50%; }

        /* ── BODY LAYOUT ── */
        .lp-layout {
          display: grid; grid-template-columns: 240px 1fr;
          max-width: 1200px; margin: 0 auto; padding: 0 56px;
        }

        /* ── SIDEBAR TOC ── */
        .lp-toc {
          padding: 40px 24px 40px 0;
          border-right: 1px solid var(--border-faint);
          position: sticky; top: 64px;
          height: calc(100vh - 64px); overflow-y: auto;
          align-self: start;
        }
        .lp-toc-label {
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 3px;
          text-transform: uppercase; color: var(--text-disabled);
          margin-bottom: 16px; padding-left: 4px;
        }
        .lp-toc-list { list-style: none; display: flex; flex-direction: column; gap: 2px; }
        .lp-toc-item a {
          display: flex; align-items: center; gap: 10px;
          padding: 8px 10px; border-radius: 8px;
          font-family: var(--font-body); font-size: 12.5px;
          color: var(--text-muted); text-decoration: none;
          transition: all .2s; border: 1px solid transparent; line-height: 1.3;
        }
        .lp-toc-item a:hover {
          color: var(--text-primary); background: var(--bg-raised);
          border-color: var(--border-faint);
        }
        .lp-toc-num {
          font-family: var(--font-mono); font-size: 9px;
          color: var(--brand-hot); min-width: 20px; letter-spacing: .5px;
        }

        /* ── CONTENT ── */
        .lp-content { padding: 40px 0 80px 48px; }

        /* Notice */
        .lp-notice {
          border-radius: 14px; padding: 20px 24px;
          margin-bottom: 48px;
          display: flex; gap: 14px; align-items: flex-start;
          background: var(--lp-acc-notice-bg);
          border: 1px solid var(--lp-acc-notice-border);
        }
        .lp-notice-icon { font-size: 20px; flex-shrink: 0; margin-top: 1px; }
        .lp-notice-body { font-size: 13px; color: var(--text-secondary); line-height: 1.7; }
        .lp-notice-body strong { color: var(--text-primary); font-weight: 600; }

        /* Notice sub-chips */
        .lp-notice-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
        .lp-notice-chip {
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--text-muted);
          background: var(--lp-acc-chip-bg); border: 1px solid var(--lp-acc-chip-border);
          padding: 4px 12px; border-radius: 6px;
        }

        /* Section */
        .lp-section { margin-bottom: 56px; scroll-margin-top: 84px; }
        .lp-section-header {
          display: flex; align-items: center; gap: 16px;
          margin-bottom: 20px; padding-bottom: 16px;
          border-bottom: 1px solid var(--border-faint);
        }
        .lp-section-num {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 2px;
          color: var(--brand-hot);
          background: rgba(197,45,181,.1); border: 1px solid rgba(197,45,181,.22);
          padding: 4px 10px; border-radius: 6px; flex-shrink: 0;
        }
        .lp-section-title {
          font-family: var(--font-display); font-size: 22px; font-weight: 700;
          color: var(--text-primary); letter-spacing: -.4px;
        }
        .lp-paras { display: flex; flex-direction: column; gap: 14px; }
        .lp-para {
          font-size: 14px; color: var(--text-secondary); line-height: 1.8;
          padding-left: 16px; border-left: 2px solid var(--border-faint);
          transition: border-color .2s;
        }
        .lp-para:hover { border-left-color: var(--border-default); }
        .lp-para a { color: var(--brand-light); text-decoration: none; }
        .lp-para a:hover { text-decoration: underline; }
        .lp-para p { margin: 0 0 8px; }
        .lp-para p:last-child { margin-bottom: 0; }

        /* CTA */
        .lp-cta {
          background: var(--brand-grad); border-radius: 20px;
          padding: 40px 44px; margin-top: 48px;
          position: relative; overflow: hidden;
        }
        .lp-cta::before {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(rgba(255,255,255,.06) 1px, transparent 1px);
          background-size: 28px 28px; pointer-events: none;
        }
        .lp-cta-tag {
          display: inline-flex; align-items: center;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 2px;
          text-transform: uppercase; color: rgba(255,255,255,.7);
          background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.2);
          padding: 4px 12px; border-radius: 100px; margin-bottom: 14px;
        }
        .lp-cta h3 {
          font-family: var(--font-display); font-size: 26px; font-weight: 800;
          color: #fff; letter-spacing: -.5px; margin-bottom: 10px;
          position: relative; z-index: 1;
        }
        .lp-cta p {
          font-size: 14px; color: rgba(255,255,255,.75); margin-bottom: 22px;
          max-width: 440px; line-height: 1.65; position: relative; z-index: 1;
        }
        .lp-cta-btns { display: flex; gap: 12px; flex-wrap: wrap; position: relative; z-index: 1; }
        .lp-cta-btn-white {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff; color: var(--brand-deep);
          padding: 11px 24px; border-radius: 100px;
          font-weight: 700; font-size: 13px; text-decoration: none;
          transition: all .3s; box-shadow: 0 4px 16px rgba(0,0,0,.2);
        }
        .lp-cta-btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.25); }
        .lp-cta-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,.12); color: #fff;
          padding: 10px 22px; border-radius: 100px; font-size: 13px; font-weight: 600;
          text-decoration: none; border: 1.5px solid rgba(255,255,255,.3); transition: all .3s;
        }
        .lp-cta-btn-ghost:hover { background: rgba(255,255,255,.2); border-color: rgba(255,255,255,.6); }

        /* ── FOOTER ── */
        .lp-footer {
          background: var(--bg-surface); border-top: 1px solid var(--border-faint);
          padding: 32px 56px;
          display: flex; align-items: center;
          justify-content: space-between; flex-wrap: wrap; gap: 16px;
        }
        .lp-footer p {
          font-family: var(--font-mono); font-size: 11px;
          color: var(--text-disabled); letter-spacing: .5px;
        }
        .lp-footer-links { display: flex; }
        .lp-footer-links a {
          font-family: var(--font-mono); font-size: 11px; color: var(--text-disabled);
          text-decoration: none; padding: 0 16px;
          border-right: 1px solid var(--border-faint);
          transition: color .2s; letter-spacing: .5px;
        }
        .lp-footer-links a:last-child { border-right: none; }
        .lp-footer-links a:hover { color: var(--brand-light); }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .lp-nav, .lp-hero { padding-left: 20px; padding-right: 20px; }
          .lp-layout { grid-template-columns: 1fr; padding: 0 20px; }
          .lp-toc { display: none; }
          .lp-content { padding: 32px 0 60px; }
          .lp-footer { padding: 28px 20px; }
        }
      `}</style>

      <div
        className="lp-root"
        style={{
          '--lp-acc-faint':         acc(.06),
          '--lp-acc-glow':          `radial-gradient(circle, ${acc(.10)} 0%, transparent 70%)`,
          '--lp-acc-notice-bg':     acc(.07),
          '--lp-acc-notice-border': acc(.22),
          '--lp-acc-chip-bg':       acc(.10),
          '--lp-acc-chip-border':   acc(.25),
        }}
      >
    
        {/* HERO */}
        <div className="lp-hero">
          <div className="lp-hero-grid" />
          <div className="lp-hero-glow" />
          <div className="lp-hero-inner">
            <div className="lp-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>Legal</span>
              <span>›</span>
              <span>{breadcrumb}</span>
            </div>
            <h1>{title} <em>{titleHighlight}</em></h1>
            <p className="lp-hero-desc">{description}</p>
            <div className="lp-chips">
              {chips.map(c => (
                <div className="lp-chip" key={c.label}>
                  <span className="lp-chip-dot" style={{ background: c.dot }} />
                  {c.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="lp-layout">

          {/* TOC */}
          <aside className="lp-toc">
            <div className="lp-toc-label">Contents</div>
            <ul className="lp-toc-list">
              {sections.map(s => (
                <li className="lp-toc-item" key={s.id}>
                  <a href={`#${s.id}`}>
                    <span className="lp-toc-num">{s.num}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* CONTENT */}
          <main className="lp-content">

            {/* Notice */}
            <div className="lp-notice">
              <span className="lp-notice-icon">{noticeIcon}</span>
              <div className="lp-notice-body">{noticeText}</div>
            </div>

            {/* Sections */}
            {sections.map(s => (
              <div className="lp-section" key={s.id} id={s.id}>
                <div className="lp-section-header">
                  <span className="lp-section-num">{s.num}</span>
                  <h2 className="lp-section-title">{s.title}</h2>
                </div>
                <div className="lp-paras">
                  {s.content.map((para, i) => (
                    <p className="lp-para" key={i}>{para}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="lp-cta">
              <div className="lp-cta-tag">{ctaTag}</div>
              <h3>{ctaTitle}</h3>
              <p>{ctaDesc}</p>
              <div className="lp-cta-btns">
                <a href={ctaPrimary.href} className="lp-cta-btn-white">{ctaPrimary.label}</a>
                {ctaSecondary.to
                  ? <Link to={ctaSecondary.to} className="lp-cta-btn-ghost">{ctaSecondary.label}</Link>
                  : <a href={ctaSecondary.href} target="_blank" rel="noreferrer" className="lp-cta-btn-ghost">{ctaSecondary.label}</a>
                }
              </div>
            </div>
          </main>
        </div>

        {/* FOOTER */}
        <footer className="lp-footer">
          <p>© 2026 MedXL Ventures Private Limited · All rights reserved · Chennai, Tamil Nadu, India</p>
          <div className="lp-footer-links">
            {footerLinks.map(l => (
              l.to
                ? <Link to={l.to} key={l.label}>{l.label}</Link>
                : <a href={l.href} key={l.label}>{l.label}</a>
            ))}
          </div>
        </footer>
      </div>
    </>
  )
}