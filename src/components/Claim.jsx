import { Link } from 'react-router-dom'

const stats = [
  { num: '₹26K Cr+', label: 'Claims Rejected/Year' },
  { num: '<10%',     label: 'Auto-Adjudicated' },
  { num: '3–12 mo',  label: 'PMJAY Delays' },
]

const features = [
  { icon: '🛡️', text: 'Pre-submission AI validation' },
  { icon: '📡', text: 'Live settlement tracking' },
  { icon: '↩️', text: 'Auto-built denial appeals' },
  { icon: '📊', text: 'Reconciliation analytics' },
]

const monthlyData = [
  { month: 'Jan', submitted: 142, recovered: 128 },
  { month: 'Feb', submitted: 158, recovered: 146 },
  { month: 'Mar', submitted: 171, recovered: 162 },
  { month: 'Apr', submitted: 165, recovered: 157 },
  { month: 'May', submitted: 184, recovered: 178 },
  { month: 'Jun', submitted: 196, recovered: 191 },
]

const denialReasons = [
  { reason: 'Missing documents',    pct: 34, color: '#c52db5' },
  { reason: 'Code mismatch',        pct: 27, color: '#9333ea' },
  { reason: 'Eligibility errors',   pct: 21, color: '#7c3aed' },
  { reason: 'Duplicate claims',     pct: 18, color: '#6d28d9' },
]

const maxVal = Math.max(...monthlyData.map(d => d.submitted))

export default function ClaimWiseSection() {
  return (
    <>
      <style>{`
        .cw-section {
          padding: 100px 56px;
          background: #13071a;
          position: relative;
          overflow: hidden;
          font-family: var(--font-sans, system-ui, sans-serif);
        }
        .cw-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(197,45,181,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(197,45,181,.04) 1px, transparent 1px);
          background-size: 72px 72px; pointer-events: none;
        }
        .cw-glow {
          position: absolute; width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(197,45,181,.18) 0%, transparent 65%);
          top: -180px; right: -120px; pointer-events: none;
        }
        .cw-container {
          max-width: 1140px; margin: 0 auto; position: relative; z-index: 1;
          display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
        }
        .cw-overline {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--font-mono, monospace); font-size: 10px;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: rgb(197,45,181); background: rgba(197,45,181,.10);
          border: 1px solid rgba(197,45,181,.28); padding: 5px 16px;
          border-radius: 100px; margin-bottom: 24px;
        }
        .cw-overline-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: rgb(197,45,181); flex-shrink: 0;
        }
        .cw-title {
          font-size: clamp(28px, 3.4vw, 42px); font-weight: 800; color: #ffffff;
          letter-spacing: -1.6px; line-height: 1.08; margin-bottom: 20px;
        }
        .cw-title-accent {
          background: linear-gradient(135deg, #c52db5, #e86ef2);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .cw-desc {
          font-size: 15px; color: rgba(255,255,255,.65); line-height: 1.75;
          font-weight: 300; margin-bottom: 36px; max-width: 440px;
        }
        .cw-stats {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px;
          background: rgba(197,45,181,.18); border-radius: 16px; overflow: hidden;
          border: 1px solid rgba(197,45,181,.18); margin-bottom: 36px;
        }
        .cw-stat { background: rgba(20,8,28,.9); padding: 18px 14px; text-align: center; }
        .cw-stat-num {
          font-size: 20px; font-weight: 800; color: rgb(197,45,181);
          letter-spacing: -0.5px; line-height: 1; margin-bottom: 5px;
        }
        .cw-stat-label {
          font-family: var(--font-mono, monospace); font-size: 9px;
          letter-spacing: 0.5px; text-transform: uppercase; color: rgba(255,255,255,.40);
        }
        .cw-features { display: flex; flex-direction: column; gap: 10px; margin-bottom: 36px; }
        .cw-feature {
          display: flex; align-items: center; gap: 12px; padding: 12px 16px;
          border-radius: 12px; background: rgba(197,45,181,.06);
          border: 1px solid rgba(197,45,181,.14); font-size: 13.5px; color: rgba(255,255,255,.80);
        }
        .cw-feature-icon {
          width: 28px; height: 28px; border-radius: 8px; background: rgba(197,45,181,.15);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 14px;
        }
        .cw-btn {
          display: inline-flex; align-items: center; gap: 8px; font-size: 14px;
          font-weight: 700; color: #fff; background: linear-gradient(135deg, #c52db5, #7c25a0);
          padding: 14px 28px; border-radius: 100px; text-decoration: none;
          letter-spacing: -0.2px; transition: opacity .2s, transform .2s;
        }
        .cw-btn:hover { opacity: .88; transform: translateY(-1px); }

        /* ── Visual Card ── */
        .cw-card {
          background: linear-gradient(145deg, rgba(28,10,38,.95), rgba(18,5,26,.98));
          border: 1px solid rgba(197,45,181,.25); border-radius: 20px;
          padding: 24px; position: relative; overflow: hidden;
        }
        .cw-card-bar {
          height: 3px; background: linear-gradient(90deg, #c52db5, #7c25a0);
          border-radius: 3px 3px 0 0; position: absolute; top: 0; left: 0; right: 0;
        }
        .cw-card-label {
          font-family: var(--font-mono, monospace); font-size: 9px; letter-spacing: 2px;
          text-transform: uppercase; color: rgba(197,45,181,.7); margin-bottom: 16px; margin-top: 4px;
        }

        /* KPI row */
        .cw-kpi-row { display: flex; gap: 10px; margin-bottom: 20px; }
        .cw-kpi {
          flex: 1; background: rgba(197,45,181,.08); border: 1px solid rgba(197,45,181,.15);
          border-radius: 12px; padding: 14px 12px; text-align: center;
        }
        .cw-kpi-val {
          font-size: 22px; font-weight: 800; color: rgb(197,45,181);
          letter-spacing: -0.8px; line-height: 1; margin-bottom: 4px;
        }
        .cw-kpi-lbl {
          font-family: var(--font-mono, monospace); font-size: 9px;
          text-transform: uppercase; letter-spacing: .5px; color: rgba(255,255,255,.35);
        }

        /* Bar chart */
        .cw-chart-head {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 12px;
        }
        .cw-chart-title { font-size: 11.5px; font-weight: 600; color: rgba(255,255,255,.70); }
        .cw-chart-legend { display: flex; gap: 12px; }
        .cw-legend-item { display: flex; align-items: center; gap: 5px; font-size: 10px; color: rgba(255,255,255,.40); }
        .cw-legend-dot { width: 7px; height: 7px; border-radius: 50%; }

        .cw-bar-chart { display: flex; align-items: flex-end; gap: 8px; height: 80px; margin-bottom: 6px; }
        .cw-bar-group { display: flex; align-items: flex-end; gap: 3px; flex: 1; }
        .cw-bar {
          flex: 1; border-radius: 4px 4px 0 0; min-height: 4px;
          transition: opacity .2s;
        }
        .cw-bar-sub { background: rgba(197,45,181,.25); }
        .cw-bar-rec { background: linear-gradient(180deg, #c52db5, #7c25a0); }
        .cw-bar-months { display: flex; gap: 8px; }
        .cw-bar-mo { flex: 1; text-align: center; font-family: var(--font-mono, monospace); font-size: 9px; color: rgba(255,255,255,.30); }

        /* Denial breakdown */
        .cw-denial-head {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: 18px; margin-bottom: 10px;
        }
        .cw-denial-title { font-size: 11.5px; font-weight: 600; color: rgba(255,255,255,.70); }
        .cw-denial-badge {
          font-family: var(--font-mono, monospace); font-size: 9px; letter-spacing: .5px;
          background: rgba(34,197,94,.12); color: #34d399;
          border: 1px solid rgba(34,197,94,.22); padding: 3px 9px; border-radius: 100px;
        }
        .cw-denial-rows { display: flex; flex-direction: column; gap: 7px; }
        .cw-denial-row { display: flex; align-items: center; gap: 10px; }
        .cw-denial-label { font-size: 11.5px; color: rgba(255,255,255,.55); width: 130px; flex-shrink: 0; }
        .cw-denial-track {
          flex: 1; height: 6px; background: rgba(255,255,255,.07); border-radius: 3px; overflow: hidden;
        }
          .cw-feat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 10px;
}
.cw-feat-card {
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(197,45,181,.18);
  border-radius: 14px;
  padding: 20px 18px;
}
.cw-feat-icon { font-size: 22px; margin-bottom: 12px; }
.cw-feat-title {
  font-size: 14px; font-weight: 700; color: #fff;
  margin-bottom: 5px; letter-spacing: -0.2px; line-height: 1.3;
}
.cw-feat-desc {
  font-size: 12px; color: rgba(255,255,255,.45); line-height: 1.55;
}
.cw-highlight-strip {
  background: rgba(197,45,181,.08);
  border: 1px solid rgba(197,45,181,.22);
  border-radius: 14px;
  padding: 18px 20px;
  display: flex; align-items: flex-start; gap: 14px;
}
  .cw-btn-desktop {
  display: inline-flex;
}

.cw-btn-mobile {
  display: none;
}

@media (max-width: 860px) {
  .cw-btn-desktop {
    display: none;
  }

  .cw-btn-mobile {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
}
.cw-hl-quote {
  color: rgb(197,45,181); font-size: 28px; line-height: 1;
  flex-shrink: 0; margin-top: -4px; font-family: Georgia, serif;
}
.cw-hl-text {
  font-size: 13px; color: rgba(255,255,255,.65);
  line-height: 1.65; font-style: italic;
}
.cw-hl-text strong { color: #fff; font-style: normal; }
        .cw-denial-fill { height: 100%; border-radius: 3px; }
        .cw-denial-pct { font-family: var(--font-mono, monospace); font-size: 10px; color: rgba(255,255,255,.40); width: 28px; text-align: right; flex-shrink: 0; }

        @media (max-width: 860px) {
          .cw-section { padding: 72px 24px; }
          .cw-container { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 480px) {
          .cw-section { padding: 56px 16px; }
          .cw-stats { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="cw-section">
        <div className="cw-grid-bg" />
        <div className="cw-glow" />
        <div className="cw-container">

          {/* ── Left: copy ── */}
          <div>
            <div className="section-eyebrow">
              AI Claims Intelligence
            </div>
            <h2 className="section-title">
              Stop Denials.<em>Recover Fast.</em>
            </h2>
            <p className="cw-desc">
              An AI-powered claims validation platform built for Indian hospitals —
              preventing denials before they happen, and recovering them fast when they do.
            </p>
            <div className="cw-stats">
              {stats.map(s => (
                <div className="cw-stat" key={s.label}>
                  <div className="cw-stat-num">{s.num}</div>
                  <div className="cw-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="cw-features">
              {features.map(f => (
                <div className="cw-feature" key={f.text}>
                  <span className="cw-feature-icon">{f.icon}</span>
                  <span>{f.text}</span>
                </div>
              ))} 
            </div>
            <div className="cw-btn-desktop">
  <Link to="/claimwise" className="cw-btn">
    Know More →
  </Link>
</div>
          </div>

          
          {/* ── Right: feature cards ── */}
          <div className="cw-card">
            <div className="cw-card-bar" />
            <div className="cw-feat-grid">
              {[
                { icon: '🛡️', title: 'Pre-submission validation', desc: 'AI checks every field before you submit — zero surprises from the insurer.' },
                { icon: '📡', title: 'Live settlement tracking',  desc: 'Know exactly where each claim stands, in real time, across all TPAs.' },
                { icon: '↩️', title: 'Auto-built denial appeals', desc: 'When a claim is denied, ClaimWise drafts the appeal instantly — ready to send.' },
                { icon: '📋', title: 'PMJAY & TPA ready',         desc: "Built for India's insurance landscape — cashless, reimbursement, and government schemes." },
              ].map(f => (
                <div className="cw-feat-card" key={f.title}>
                  <div className="cw-feat-icon">{f.icon}</div>
                  <div className="cw-feat-title">{f.title}</div>
                  <div className="cw-feat-desc">{f.desc}</div>
                  
                </div>
              ))}
            </div>

            <div className="cw-highlight-strip">
              <span className="cw-hl-quote">"</span>
              <p className="cw-hl-text">
                Most denials are preventable. ClaimWise catches the errors{' '}
                <strong>before they become rejections</strong> — so your billing team
                spends time on patients, not paperwork.
              </p>
            </div>
          </div>
        </div>
          <div className="cw-btn-mobile">
      <Link to="/claimwise" className="cw-btn">
        Know More →
      </Link>
</div>
        
      </section>
    </>
  )
}