import { Link } from 'react-router-dom'

const stats = [
  { num: '639', label: 'Objective Elements' },
  { num: '10',  label: 'Standard Chapters' },
  { num: '105', label: 'Core Mandatory' },
]

const features = [
  { icon: '💰', text: '10–15% higher insurer reimbursement' },
  { icon: '📋', text: 'Chapter-by-chapter readiness tools' },
  { icon: '🎓', text: 'LMS with NABH training library' },
  { icon: '✅', text: 'Interactive self-assessment checklist' },
]

const chapters = [
  { name: 'Patient Rights & Education',      done: 64, total: 64 },
  { name: 'Access, Assessment & Continuity', done: 58, total: 58 },
  { name: 'Care of Patients',                done: 74, total: 96 },
  { name: 'Management of Medications',       done: 41, total: 62 },
  { name: 'Hospital Infection Control',      done: 18, total: 80 },
  { name: 'Quality Management System',       done: 6,  total: 50 },
]

function getStatus(done, total) {
  const pct = done / total
  if (pct === 1) return 'done'
  if (pct >= 0.5) return 'prog'
  return 'open'
}

const checkStyle = {
  done: { background: 'rgba(16,185,129,.18)',  border: '1px solid rgba(16,185,129,.3)',  color: '#34d399' },
  prog: { background: 'rgba(245,158,11,.12)',  border: '1px solid rgba(245,158,11,.25)', color: '#fbbf24' },
  open: { background: 'rgba(124,58,237,.10)',  border: '1px solid rgba(124,58,237,.2)',  color: 'transparent' },
}

const checkLabel = { done: '✓', prog: '~', open: '' }

export default function NABHSection() {
  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════
           NABH SECTION
        ═══════════════════════════════════════ */
        .nb-section {
          padding: 100px 56px;
          background: #0e0b1a;
          position: relative;
          overflow: hidden;
          font-family: var(--font-sans, system-ui, sans-serif);
        }
        .nb-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(124,58,237,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,.04) 1px, transparent 1px);
          background-size: 72px 72px;
          pointer-events: none;
        }
        .nb-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(124,58,237,.16) 0%, transparent 65%);
          top: -160px;
          right: -140px;
          pointer-events: none;
        }
        .nb-container {
          max-width: 1140px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        /* overline */
        .nb-overline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono, monospace);
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgb(139,92,246);
          background: rgba(124,58,237,.10);
          border: 1px solid rgba(124,58,237,.28);
          padding: 5px 16px;
          border-radius: 100px;
          margin-bottom: 24px;
        }
        .nb-overline-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgb(139,92,246);
          flex-shrink: 0;
        }
        /* title */
        .nb-title {
          font-size: clamp(28px, 3.4vw, 42px);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -1.6px;
          line-height: 1.08;
          margin-bottom: 20px;
        }
        .nb-title-accent {
          background: linear-gradient(135deg, #7c3aed, #c52db5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nb-desc {
          font-size: 15px;
          color: rgba(255,255,255,.65);
          line-height: 1.75;
          font-weight: 300;
          margin-bottom: 36px;
          max-width: 440px;
        }
        /* stats */
        .nb-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(124,58,237,.18);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(124,58,237,.18);
          margin-bottom: 36px;
        }
        .nb-stat {
          background: rgba(14,11,26,.9);
          padding: 18px 14px;
          text-align: center;
        }
        .nb-stat-num {
          font-size: 20px;
          font-weight: 800;
          color: rgb(139,92,246);
          letter-spacing: -0.5px;
          line-height: 1;
          margin-bottom: 5px;
        }
        .nb-stat-label {
          font-family: var(--font-mono, monospace);
          font-size: 9px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,.38);
        }
        /* features */
        .nb-features {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 36px;
        }
        .nb-feature {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          background: rgba(124,58,237,.06);
          border: 1px solid rgba(124,58,237,.14);
          font-size: 13.5px;
          color: rgba(255,255,255,.80);
        }
        .nb-feature-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: rgba(124,58,237,.16);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 14px;
        }
        /* CTA row */
        .nb-cta-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .nb-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(135deg, #7c3aed, #c52db5);
          padding: 14px 28px;
          border-radius: 100px;
          text-decoration: none;
          letter-spacing: -0.2px;
          transition: opacity .2s, transform .2s;
        }
        .nb-btn-primary:hover { opacity: .88; transform: translateY(-1px); }
        .nb-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: rgba(255,255,255,.45);
          text-decoration: none;
          transition: color .2s;
        }
        .nb-btn-ghost:hover { color: rgba(255,255,255,.80); }
        /* visual card */
        .nb-card {
          background: linear-gradient(145deg, rgba(22,14,38,.95), rgba(14,11,26,.98));
          border: 1px solid rgba(124,58,237,.22);
          border-radius: 20px;
          padding: 28px;
          position: relative;
          overflow: hidden;
        }
        .nb-card-bar {
          height: 3px;
          background: linear-gradient(90deg, #7c3aed, #c52db5);
          border-radius: 3px 3px 0 0;
          position: absolute;
          top: 0; left: 0; right: 0;
        }
        .nb-card-label {
          font-family: var(--font-mono, monospace);
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(139,92,246,.7);
          margin-bottom: 16px;
          margin-top: 4px;
        }
        /* chapter rows */
        .nb-chapter-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(124,58,237,.10);
        }
        .nb-chapter-row:last-child { border-bottom: none; }
        .nb-check {
          width: 20px;
          height: 20px;
          border-radius: 6px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
        }
        .nb-chapter-name {
          flex: 1;
          font-size: 12.5px;
          color: rgba(255,255,255,.78);
        }
        .nb-chapter-prog {
          font-family: var(--font-mono, monospace);
          font-size: 10px;
          color: rgba(255,255,255,.38);
          flex-shrink: 0;
        }
        .nb-bar-wrap {
          width: 60px;
          height: 4px;
          background: rgba(124,58,237,.15);
          border-radius: 4px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .nb-bar-fill {
          height: 100%;
          border-radius: 4px;
          background: linear-gradient(90deg, #7c3aed, #c52db5);
        }
        /* bottom badge */
        .nb-bottom-badge {
          margin-top: 18px;
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(124,58,237,.10);
          border: 1px solid rgba(124,58,237,.18);
          border-radius: 12px;
          padding: 12px 16px;
        }
        .nb-bottom-badge-icon { font-size: 22px; }
        .nb-bottom-badge-text {
          font-size: 12px;
          color: rgba(255,255,255,.60);
          line-height: 1.5;
          margin: 0;
        }
        .nb-bottom-badge-text strong {
          color: rgb(167,139,250);
          font-weight: 600;
        }
          .nb-feat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 10px;
}
.nb-feat-card {
  background: rgba(124,58,237,.06);
  border: 1px solid rgba(124,58,237,.18);
  border-radius: 14px;
  padding: 18px 16px;
}
.nb-feat-icon { font-size: 20px; margin-bottom: 12px; }
.nb-feat-title {
  font-size: 13.5px; font-weight: 700; color: #fff;
  margin-bottom: 5px; letter-spacing: -0.2px; line-height: 1.3;
}
.nb-feat-desc {
  font-size: 11.5px; color: rgba(255,255,255,.42); line-height: 1.55;
}
.nb-highlight-strip {
  background: rgba(124,58,237,.08);
  border: 1px solid rgba(124,58,237,.22);
  border-radius: 14px;
  padding: 18px 20px;
  display: flex; align-items: flex-start; gap: 14px;
}
.nb-hl-quote {
  color: rgb(139,92,246); font-size: 28px; line-height: 1;
  flex-shrink: 0; margin-top: -4px; font-family: Georgia, serif;
}
.nb-hl-text {
  font-size: 12.5px; color: rgba(255,255,255,.60);
  line-height: 1.65; font-style: italic;
}
.nb-hl-text strong { color: rgb(167,139,250); font-style: normal; }
        /* responsive */
        @media (max-width: 860px) {
          .nb-section { padding: 72px 24px; }
          .nb-container { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 480px) {
          .nb-section { padding: 56px 16px; }
          .nb-stats { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="nb-section">
        <div className="nb-grid-bg" />
        <div className="nb-glow" />

        <div className="nb-container">
          {/* ── Left: copy (mirrored to match ClaimWise layout) ── */}
          <div>
            
              <div className="section-eyebrow">Accreditation Suite</div>
            <h2 className="section-title">Get Accredited.<em>Stay Accredited.</em>
            </h2>

            <p className="nb-desc">
              A practical, chapter-by-chapter guide to NABH 6th Edition — with the exact
              MedXL tools that turn each requirement from a burden into a check.
            </p>

            {/* stats */}
            <div className="nb-stats">
              {stats.map(s => (
                <div className="nb-stat" key={s.label}>
                  <div className="nb-stat-num">{s.num}</div>
                  <div className="nb-stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            {/* features */}
            <div className="nb-features">
              {features.map(f => (
                <div className="nb-feature" key={f.text}>
                  <span className="nb-feature-icon">{f.icon}</span>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: feature cards ── */}
          <div className="nb-card">
            <div className="nb-card-bar" />
            <div className="nb-card-label">NABH · MedXL Readiness Suite</div>

            <div className="nb-feat-grid">
              {[
                { icon: '📋', title: 'Chapter-by-chapter tools',   desc: 'Every one of the 10 NABH standards mapped to a specific MedXL module.' },
                { icon: '🎓', title: 'LMS with NABH library',      desc: 'Pre-loaded training modules, competency records, and one-click audit reports.' },
                { icon: '✅', title: 'Continuous evidence',         desc: 'HMS and EHR generate assessment-ready documentation automatically — not just before audits.' },
                { icon: '💰', title: 'Higher reimbursement',        desc: 'NABH-accredited hospitals get 10–15% more from insurers and an extra 10% on PMJAY claims.' },
              ].map(f => (
                <div className="nb-feat-card" key={f.title}>
                  <div className="nb-feat-icon">{f.icon}</div>
                  <div className="nb-feat-title">{f.title}</div>
                  <div className="nb-feat-desc">{f.desc}</div>
                </div>
              ))}
            </div>

            <div className="nb-highlight-strip">
              <span className="nb-hl-quote">"</span>
              <p className="nb-hl-text">
                Most hospitals train their staff — they just can't{' '}
                <strong>prove it when the assessor walks in</strong>.
                MedXL's LMS closes that gap before it becomes a failure.
              </p>
            </div>
          </div>
        </div>
        <div className="nb-cta-row">
              <Link to="/nabh" className="nb-btn-primary">Know More →</Link>
              <a
                href="https://api.whatsapp.com/send/?phone=9884021188&text=I'd%20like%20a%20free%20NABH%20readiness%20assessment"
                className="nb-btn-ghost"
                target="_blank"
                rel="noreferrer"
              >
                Free Assessment ↗
              </a>
            </div>
      </section>
    </>
  )
}