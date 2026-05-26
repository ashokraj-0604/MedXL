import React from 'react'
const row1 = [
  { name:'React JS',    icon:'⚛️',  color:'#61DAFB' },
  { name:'Node.js',     icon:'🟢',  color:'#68A063' },
  { name:'MongoDB',     icon:'🍃',  color:'#47A248' },
  { name:'Python',      icon:'🐍',  color:'#3776AB' },
  { name:'TypeScript',  icon:'🔷',  color:'#3178C6' },
  { name:'PostgreSQL',  icon:'🐘',  color:'#4169E1' },
  { name:'Docker',      icon:'🐋',  color:'#2496ED' },
]
const row2 = [
  { name:'AWS',         icon:'☁️',  color:'#FF9900' },
  { name:'Swift',       icon:'🦅',  color:'#F05138' },
  { name:'Laravel',     icon:'🔴',  color:'#FF2D20' },
  { name:'Java',        icon:'☕',  color:'#ED8B00' },
  { name:'Kubernetes',  icon:'⎈',   color:'#326CE5' },
  { name:'PHP',         icon:'🐘',  color:'#777BB4' },
  { name:'Flutter',     icon:'💙',  color:'#02569B' },
]

function Chip({ name, icon, color }) {
  return (
    <div className="tech-chip" style={{'--chip-color': color}}>
      <span className="tech-chip-icon">{icon}</span>
      <span className="tech-chip-name">{name}</span>
    </div>
  )
}

export default function Technologies() {
  return (
    <>
      <style>{`
        .tech {
          padding: 100px 0;
          background: var(--ink);
          overflow: hidden; position: relative;
        }
        .tech-header { padding: 0 56px; margin-bottom: 56px; max-width: 1200px; margin-left:auto; margin-right:auto; }
        .tech-grid-header { display:flex; align-items:flex-end; justify-content:space-between; flex-wrap:wrap; gap:24px; margin-bottom:56px; }

        .tech-track { overflow: hidden; margin-bottom: 16px;
          mask: linear-gradient(90deg,transparent,black 10%,black 90%,transparent);
          -webkit-mask: linear-gradient(90deg,transparent,black 10%,black 90%,transparent);
        }
        .tech-row {
          display: flex; gap: 12px; min-width: max-content;
          animation: marquee-ltr 28s linear infinite;
          padding: 4px 0;
        }
        .tech-row.rev { animation: marquee-rtl 36s linear infinite; }
        .tech-row:hover { animation-play-state: paused; }

        .tech-chip {
          display: flex; align-items: center; gap: 10px;
          padding: 12px 22px; border-radius: 100px;
          background: var(--ink-2); border: 1px solid var(--border);
          white-space: nowrap; cursor: default;
          transition: all .3s var(--ease);
        }
        .tech-chip:hover {
          border-color: var(--chip-color);
          background: color-mix(in srgb, var(--chip-color) 10%, var(--ink-2));
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,.3);
        }
        .tech-chip-icon { font-size: 18px; }
        .tech-chip-name {
          font-family: var(--font-body); font-size: 14px; font-weight: 500;
          color: var(--fog-3); transition: color .3s;
        }
        .tech-chip:hover .tech-chip-name { color: var(--chip-color); }

        .tech-trust {
          display: flex; align-items: center; justify-content: center; gap: 48px;
          padding: 48px 56px 0; flex-wrap: wrap; margin-top: 16px;
          border-top: 1px solid var(--border);
        }
        .trust-item { display: flex; align-items: center; gap: 16px; }
        .trust-badge {
          width: 48px; height: 48px; border-radius: 12px;
          background: var(--purple-dim); border: 1px solid var(--border-em);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px;
        }
        .trust-label { font-size: 13px; color: var(--fog-3); font-weight: 400; }
        .trust-val {
          font-family: var(--font-display); font-size: 22px; font-weight: 800;
          color: var(--cream);
        }
        .trust-sep { width: 1px; height: 40px; background: var(--border); }

        @media (max-width: 768px) {
          .tech-header { padding: 0 20px; }
          .tech-trust { gap: 24px; padding: 32px 20px 0; }
          .trust-sep { display: none; }
        }
      `}</style>

      <section className="tech" id="technologies">
        <div className="tech-grid-header" style={{padding:'0 56px', maxWidth:1200, margin:'0 auto 56px'}}>
          <div>
            <div className="section-eyebrow">Our Stack</div>
            <h2 className="section-title">Technologies We <em>Master</em></h2>
          </div>
          <p className="section-desc" style={{maxWidth:360}}>
            We use the right tool for each job — battle-tested stacks chosen
            for reliability, scalability, and long-term maintainability.
          </p>
        </div>

        <div className="tech-track">
          <div className="tech-row">
            {[...row1,...row1,...row1].map((t,i)=><Chip key={i} {...t}/>)}
          </div>
        </div>
        <div className="tech-track">
          <div className="tech-row rev">
            {[...row2,...row2,...row2].map((t,i)=><Chip key={i} {...t}/>)}
          </div>
        </div>

        <div className="tech-trust">
          {[
            { badge:'⭐', val:'4.9/5',  label:'Average Client Rating' },
            { badge:'🏆', val:'300+',   label:'Capterra Reviews' },
            { badge:'💬', val:'550+',   label:'G2 Reviews' },
            { badge:'🌍', val:'1,800+', label:'Institutions Trust Us' },
          ].map((t,i,arr) => (
            <React.Fragment key={t.val}>
              <div className="trust-item">
                <div className="trust-badge">{t.badge}</div>
                <div>
                  <div className="trust-val">{t.val}</div>
                  <div className="trust-label">{t.label}</div>
                </div>
              </div>
              {i < arr.length-1 && (<div className="trust-sep" />)}
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  )
}