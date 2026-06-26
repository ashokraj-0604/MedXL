import { Link } from 'react-router-dom'

// ── ClaimWise card data ──────────────────────────────────────────
const claimwiseStats = [
  { num: '₹26K Cr+', label: 'Claims Rejected/Year' },
  { num: '<10%',     label: 'Auto-Adjudicated' },
  { num: '3–12 mo',  label: 'PMJAY Delays' },
]

const claimwiseFeatures = [
  { icon: '🛡️', text: 'Pre-submission AI validation' },
  { icon: '📡', text: 'Live settlement tracking' },
  { icon: '↩️', text: 'Auto-built denial appeals' },
  { icon: '📊', text: 'Reconciliation analytics' },
]

// ── NABH card data ───────────────────────────────────────────────
const nabhStats = [
  { num: '639', label: 'Objective Elements' },
  { num: '10',  label: 'Standard Chapters' },
  { num: '105', label: 'Core (Mandatory)' },
]

const nabhFeatures = [
  { icon: '💰', text: '10–15% higher insurer reimbursement' },
  { icon: '📋', text: 'Chapter-by-chapter readiness tools' },
  { icon: '🎓', text: 'LMS with NABH training library' },
  { icon: '✅', text: 'Interactive self-assessment checklist' },
]

export default function ProductsSection() {
  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════
           PRODUCTS SECTION  
        ═══════════════════════════════════════════════ */
        .ps-section {
          padding: 96px 56px;
          background: var(--bg-base);
          position: relative;
          overflow: hidden;
        }

        /* subtle ambient grid */
        .ps-section::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(197,45,181,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(197,45,181,.03) 1px, transparent 1px);
          background-size: 80px 80px;
          z-index: 0;
        }

        .ps-container {
          max-width: 1180px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── Section header ── */
        .ps-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .ps-overline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 9.5px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--text-muted);
          background: var(--bg-raised);
          border: 1px solid var(--border-faint);
          padding: 5px 16px;
          border-radius: 100px;
          margin-bottom: 20px;
        }
        .ps-overline-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--brand-hot);
        }
        .ps-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 3.6vw, 42px);
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -1.4px;
          line-height: 1.1;
          margin-bottom: 16px;
        }
        .ps-title em {
          font-style: normal;
          background: var(--brand-grad);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ps-subtitle {
          font-size: 15.5px;
          color: var(--text-secondary);
          line-height: 1.75;
          max-width: 560px;
          margin: 0 auto;
          font-weight: 300;
        }

        /* ── Card grid ── */
        .ps-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        /* ── Base card ── */
        .ps-card {
          position: relative;
          border-radius: 24px;
          border: 1px solid var(--border-faint);
          background: var(--bg-raised);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform .35s cubic-bezier(.22,.68,0,1.2), border-color .3s, box-shadow .35s;
        }
        .ps-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 56px rgba(0,0,0,.18);
        }

        /* top accent bar */
        .ps-card-bar {
          height: 3px;
          width: 100%;
          flex-shrink: 0;
        }

        /* card glow blob */
        .ps-card-glow {
          position: absolute;
          top: -80px;
          right: -80px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          filter: blur(70px);
          pointer-events: none;
          z-index: 0;
          opacity: .55;
          transition: opacity .4s;
        }
        .ps-card:hover .ps-card-glow { opacity: .85; }

        .ps-card-body {
          padding: 32px 32px 28px;
          position: relative;
          z-index: 1;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        /* product badge */
        .ps-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 100px;
          border: 1px solid;
          width: fit-content;
          margin-bottom: 20px;
        }
        .ps-badge-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          position: relative;
        }
        .ps-badge-dot::after {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          border: 1px solid currentColor;
          animation: pulse-ring 2s ease-out infinite;
        }

        .ps-card-eyebrow {
          font-family: var(--font-mono);
          font-size: 9.5px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 10px;
        }

        .ps-card-name {
          font-family: var(--font-display);
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.8px;
          margin-bottom: 10px;
          line-height: 1.15;
        }

        .ps-card-tagline {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.75;
          font-weight: 300;
          margin-bottom: 24px;
          max-width: 380px;
        }

        /* stats strip */
        .ps-stats {
          display: flex;
          gap: 0;
          border: 1px solid var(--border-faint);
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 26px;
          background: var(--bg-base);
        }
        .ps-stat {
          flex: 1;
          padding: 14px 12px;
          text-align: center;
          border-right: 1px solid var(--border-faint);
          transition: background .2s;
        }
        .ps-stat:last-child { border-right: none; }
        .ps-stat:hover { background: var(--bg-elevated); }
        .ps-stat-num {
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 800;
          letter-spacing: -.5px;
          line-height: 1;
          margin-bottom: 4px;
        }
        .ps-stat-label {
          font-family: var(--font-mono);
          font-size: 8.5px;
          text-transform: uppercase;
          letter-spacing: .5px;
          color: var(--text-muted);
        }

        /* feature list */
        .ps-features {
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin-bottom: 30px;
          flex: 1;
        }
        .ps-feature {
          display: flex;
          align-items: center;
          gap: 11px;
          font-size: 13px;
          color: var(--text-secondary);
          padding: 9px 12px;
          border-radius: 10px;
          background: rgba(0,0,0,.015);
          border: 1px solid var(--border-faint);
          transition: background .2s, border-color .2s;
        }
        .ps-feature:hover {
          background: var(--bg-elevated);
        }
        .ps-feature-icon {
          font-size: 15px;
          flex-shrink: 0;
          width: 26px;
          text-align: center;
        }

        /* CTA row */
        .ps-cta-row {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        .ps-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: -.2px;
          padding: 11px 22px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: opacity .2s, transform .2s;
          color: #fff;
        }
        .ps-btn-primary:hover {
          opacity: .88;
          transform: translateY(-1px);
        }
        .ps-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-muted);
          text-decoration: none;
          transition: color .2s;
        }
        .ps-btn-ghost:hover { color: var(--text-primary); }

        /* divider between cards  */
        .ps-divider {
          display: none;
        }

        @media (max-width: 900px) {
          .ps-section { padding: 72px 24px; }
          .ps-grid { grid-template-columns: 1fr; gap: 22px; }
          .ps-card-body { padding: 26px 22px 22px; }
        }
        @media (max-width: 480px) {
          .ps-section { padding: 56px 16px; }
          .ps-stats { flex-direction: column; }
          .ps-stat { border-right: none; border-bottom: 1px solid var(--border-faint); }
          .ps-stat:last-child { border-bottom: none; }
        }
      `}</style>

      <section className="ps-section">
        <div className="ps-container">

          {/* ── Header ── */}
          <div className="ps-header">
            <div className="ps-overline">
              <span className="ps-overline-dot" />
              Purpose-Built Products
            </div>
            <h2 className="ps-title">
              Two Products. One <em>Unfair Advantage.</em>
            </h2>
            <p className="ps-subtitle">
              Beyond the HMS — specialised platforms that tackle the two biggest revenue
              and compliance challenges facing Indian hospitals right now.
            </p>
          </div>

          {/* ── Cards ── */}
          <div className="ps-grid">

            {/* ════ ClaimWise Card ════ */}
            <div
              className="ps-card"
              style={{ borderColor: 'rgba(197,45,181,.22)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(197,45,181,.45)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(197,45,181,.22)'}
            >
              {/* accent bar */}
              <div
                className="ps-card-bar"
                style={{ background: 'linear-gradient(90deg, #c52db5, #7c25a0)' }}
              />

              {/* ambient glow */}
              <div
                className="ps-card-glow"
                style={{ background: 'radial-gradient(circle, rgba(197,45,181,.22) 0%, transparent 70%)' }}
              />

              <div className="ps-card-body">
                {/* badge */}
                <span
                  className="ps-badge"
                  style={{
                    color: 'rgb(197,45,181)',
                    background: 'rgba(197,45,181,.10)',
                    borderColor: 'rgba(197,45,181,.30)',
                  }}
                >
                  <span className="ps-badge-dot" style={{ background: 'rgb(197,45,181)', color: 'rgb(197,45,181)' }} />
                  AI Claims Intelligence
                </span>

                <div className="ps-card-eyebrow">MedXL ClaimWise</div>
                <div className="ps-card-name">
                  Stop Denials.<br />Recover Fast.
                </div>
                <p className="ps-card-tagline">
                  An AI-powered claims validation platform built for Indian hospitals —
                  preventing denials before they happen, and recovering them fast when they do.
                </p>

                {/* stats */}
                <div className="ps-stats">
                  {claimwiseStats.map(s => (
                    <div className="ps-stat" key={s.label}>
                      <div className="ps-stat-num" style={{ color: 'rgb(197,45,181)' }}>{s.num}</div>
                      <div className="ps-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* features */}
                <div className="ps-features">
                  {claimwiseFeatures.map(f => (
                    <div className="ps-feature" key={f.text}>
                      <span className="ps-feature-icon">{f.icon}</span>
                      <span>{f.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="ps-cta-row">
                  <Link
                    to="/claimwise"
                    className="ps-btn-primary"
                    style={{ background: 'linear-gradient(135deg, #c52db5, #7c25a0)' }}
                  >
                    Know More →
                  </Link>
                </div>
              </div>
            </div>

            {/* ════ NABH Card ════ */}
            <div
              className="ps-card"
              style={{ borderColor: 'rgba(124,58,237,.22)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,.45)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(124,58,237,.22)'}
            >
              {/* accent bar */}
              <div
                className="ps-card-bar"
                style={{ background: 'linear-gradient(90deg, #7c3aed, #c52db5)' }}
              />

              {/* ambient glow */}
              <div
                className="ps-card-glow"
                style={{ background: 'radial-gradient(circle, rgba(124,58,237,.20) 0%, transparent 70%)' }}
              />

              <div className="ps-card-body">
                {/* badge */}
                <span
                  className="ps-badge"
                  style={{
                    color: 'rgb(124,58,237)',
                    background: 'rgba(124,58,237,.10)',
                    borderColor: 'rgba(124,58,237,.30)',
                  }}
                >
                  <span className="ps-badge-dot" style={{ background: 'rgb(124,58,237)', color: 'rgb(124,58,237)' }} />
                  Free Guide · For Hospital Leadership
                </span>

                <div className="ps-card-eyebrow">NABH Accreditation</div>
                <div className="ps-card-name">
                  Get Accredited.<br />Stay Accredited.
                </div>
                <p className="ps-card-tagline">
                  A practical, chapter-by-chapter guide to NABH 6th Edition — with the
                  exact MedXL tools that turn each requirement from a burden into a check.
                </p>

                {/* stats */}
                <div className="ps-stats">
                  {nabhStats.map(s => (
                    <div className="ps-stat" key={s.label}>
                      <div className="ps-stat-num" style={{ color: 'rgb(124,58,237)' }}>{s.num}</div>
                      <div className="ps-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* features */}
                <div className="ps-features">
                  {nabhFeatures.map(f => (
                    <div className="ps-feature" key={f.text}>
                      <span className="ps-feature-icon">{f.icon}</span>
                      <span>{f.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="ps-cta-row">
                  <Link
                    to="/nabh"
                    className="ps-btn-primary"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #c52db5)' }}
                  >
                    Know More →
                  </Link>
                  <a
                    href="https://api.whatsapp.com/send/?phone=9884021188&text=I'd%20like%20a%20free%20NABH%20readiness%20assessment"
                    className="ps-btn-ghost"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Free Assessment ↗
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}