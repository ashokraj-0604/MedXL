import { useState } from 'react'

const steps = [
  { num:'01', icon:'🔍', title:'Discovery Call',    color:'var(--purple)', desc:"We understand your hospital's size, specialities, and current IT challenges. Complimentary, no-obligation." },
  { num:'02', icon:'🎨', title:'Customer Plan', color:'#f0b429', desc:'We craft a tailored IT roadmap and package that fits your exact needs and budget.' },
  { num:'03', icon:'🧪', title:'Design & Build ', color:'#5eb8ff', desc:'Our team builds your website, configures software, sets up accounts, and creates brand assets' },
  { num:'04', icon:'🚀', title:'Go Live & Train',   color:'#a78bfa', desc:'We go live, onboard your staff, and ensure everyone is confident using every system.' },
  { num:'05', icon:'⚙️', title:'Ongoing Support',  color:'#ff6b6b', desc:'Your dedicated account manager handles everything. Monthly reviews, updates, and strategic consultations.' },
]

export default function Process() {
  const [active, setActive] = useState(0)
  const s = steps[active]

  return (
    <>
      <style>{`
        .process {
          padding: 120px 56px;
          background: var(--ink-2);
          position: relative; overflow: hidden;
        }
        .process-inner {
          display: grid; grid-template-columns: 1fr 1.1fr;
          gap: 72px; align-items: start;
          max-width: 1200px; margin: 0 auto;
        }

        /* Step list */
        .process-steps { display: flex; flex-direction: column; gap: 4px; margin-top: 40px; }
        .process-step {
          display: flex; align-items: center; gap: 18px;
          padding: 18px 20px; border-radius: 12px;
          cursor: pointer; transition: all .3s var(--ease);
          border: 1px solid transparent; position: relative;
        }
        .process-step.active {
          background: var(--s-bg); border-color: var(--s-border);
        }
        .process-step:not(.active):hover {
          background: var(--fog); border-color: var(--border);
        }
        .process-step-num {
          font-family: var(--font-mono); font-size: 11px;
          color: var(--fog-3); min-width: 24px; letter-spacing: 1px;
          transition: color .3s;
        }
        .process-step.active .process-step-num { color: var(--s-color); }
        .process-step-icon {
          width: 36px; height: 36px; border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; background: var(--fog); border: 1px solid var(--border);
          transition: all .3s; flex-shrink: 0;
        }
        .process-step.active .process-step-icon {
          background: var(--s-bg); border-color: var(--s-border);
        }
        .process-step-title {
          font-family: var(--font-body); font-size: 15px; font-weight: 600;
          color: var(--fog-3); transition: color .3s;
        }
        .process-step.active .process-step-title { color: var(--cream); }
        .process-step-arrow {
          margin-left: auto; color: var(--s-color); font-size: 18px;
          opacity: 0; transform: translateX(-6px);
          transition: all .3s var(--ease);
        }
        .process-step.active .process-step-arrow { opacity: 1; transform: translateX(0); }

        /* Detail card */
        .process-detail { position: sticky; top: 100px; }
        .process-card {
          background: var(--ink-3); border: 1px solid var(--border);
          border-radius: 24px; padding: 48px; position: relative; overflow: hidden;
        }
        .process-card::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 3px;
          background: var(--s-color);
          transition: background .4s;
        }
        .process-card-bg-num {
          position: absolute; bottom: -20px; right: 20px;
          font-family: var(--font-display); font-size: 130px; font-weight: 900;
          color: rgba(245,240,232,.03); line-height: 1; pointer-events: none;
          user-select: none;
        }
        .process-card-icon {
          font-size: 52px; margin-bottom: 24px; display: block;
          animation: float-y 4s ease-in-out infinite;
        }
        .process-card-eyebrow {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 3px;
          text-transform: uppercase; margin-bottom: 12px;
          transition: color .4s;
        }
        .process-card-title {
          font-family: var(--font-display); font-size: 32px; font-weight: 700;
          color: var(--cream); margin-bottom: 20px; line-height: 1.1;
          letter-spacing: -1px;
        }
        .process-card-desc {
          font-size: 15px; color: var(--fog-3); line-height: 1.8; font-weight: 300;
        }
        .process-dots {
          display: flex; gap: 8px; margin-top: 36px;
        }
        .pdot {
          height: 3px; border-radius: 2px; flex: 1;
          background: var(--border); cursor: pointer;
          transition: background .3s;
        }
        .pdot.active { background: var(--s-color); }

        @media (max-width: 960px) {
          .process { padding: 80px 20px; }
          .process-inner { grid-template-columns: 1fr; gap: 40px; }
          .process-detail { position: relative; top: 0; }
        }
      `}</style>

      <section className="process" id="process">
        <div className="process-inner">
          <div>
            <div className="section-eyebrow">How We Works</div>
            <h2 className="section-title">Your Journey <em>With MedXL</em></h2>
            <div className="process-steps">
              {steps.map((st, i) => (
                <div
                  key={i}
                  className={`process-step ${active === i ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                  style={{
                    '--s-color':  st.color,
                    '--s-bg':     st.color + '14',
                    '--s-border': st.color + '35',
                  }}
                >
                  <span className="process-step-num">{st.num}</span>
                  <div className="process-step-icon">{st.icon}</div>
                  <span className="process-step-title">{st.title}</span>
                  <span className="process-step-arrow">›</span>
                </div>
              ))}
            </div>
          </div>

          <div className="process-detail">
            <div className="process-card" key={active} style={{
              '--s-color':  s.color,
              '--s-bg':     s.color + '14',
              '--s-border': s.color + '35',
            }}>
              <div className="process-card-bg-num">{s.num}</div>
              <span className="process-card-icon">{s.icon}</span>
              <div className="process-card-eyebrow" style={{color: s.color}}>
                Step {s.num} — {s.title}
              </div>
              <div className="process-card-title">{s.title}</div>
              <div className="process-card-desc">{s.desc}</div>
              <div className="process-dots">
                {steps.map((_, i) => (
                  <div key={i}
                    className={`pdot ${i === active ? 'active' : ''}`}
                    style={i === active ? {'--s-color': s.color, background: s.color} : {}}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}