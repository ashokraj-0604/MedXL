const techs = [
  { name: 'React JS', icon: '⚛️', color: '#61DAFB' },
  { name: 'Node.js', icon: '🟢', color: '#339933' },
  { name: 'MongoDB', icon: '🍃', color: '#47A248' },
  { name: 'Python', icon: '🐍', color: '#3776AB' },
  { name: 'TypeScript', icon: '🔷', color: '#3178C6' },
  { name: 'PostgreSQL', icon: '🐘', color: '#4169E1' },
  { name: 'PHP', icon: '🐘', color: '#777BB4' },
  { name: 'Java', icon: '☕', color: '#ED8B00' },
  { name: 'Swift', icon: '🦅', color: '#F05138' },
  { name: 'Laravel', icon: '🔴', color: '#FF2D20' },
  { name: 'Ruby', icon: '💎', color: '#CC342D' },
  { name: 'Docker', icon: '🐋', color: '#2496ED' },
  { name: 'AWS', icon: '☁️', color: '#FF9900' },
  { name: 'Kubernetes', icon: '⚙️', color: '#326CE5' },
]
 
const tabs = ['Web Platform','Databases','Cloud & DevOps','Mobile Apps','Other Frameworks']
 
export default function Technologies() {
  return (
    <>
      <style>{`
        .tech-section {
          padding: 120px 0;
          background: var(--navy-2); overflow: hidden;
          position: relative;
        }
        .tech-header {
          padding: 0 60px; margin-bottom: 64px;
        }
        .tech-tabs {
          display: flex; gap: 8px; flex-wrap: wrap;
          margin-top: 36px;
        }
        .tech-tab {
          padding: 8px 20px; border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 600;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(59,123,255,0.12);
          color: var(--text-muted); cursor: pointer;
          transition: all 0.25s;
        }
        .tech-tab:first-child, .tech-tab:hover {
          background: rgba(19,84,249,0.12);
          border-color: rgba(19,84,249,0.3);
          color: #93c5fd;
        }
        .tech-marquee-wrap {
          overflow: hidden;
          -webkit-mask: linear-gradient(90deg, transparent, black 12%, black 88%, transparent);
          mask: linear-gradient(90deg, transparent, black 12%, black 88%, transparent);
          margin-bottom: 20px;
        }
        .tech-marquee-row {
          display: flex; gap: 0;
        }
        .tech-marquee-inner {
          display: flex; gap: 0;
          animation: marquee 25s linear infinite;
          flex-shrink: 0;
          min-width: max-content;
        }
        .tech-marquee-inner.reverse {
          animation-direction: reverse;
          animation-duration: 32s;
        }
        .tech-chip {
          display: flex; align-items: center; gap: 10px;
          padding: 14px 28px;
          margin: 0 8px;
          background: rgba(10,22,40,0.8);
          border: 1px solid rgba(59,123,255,0.1);
          border-radius: 12px;
          white-space: nowrap;
          transition: all 0.3s;
          cursor: default;
        }
        .tech-chip:hover {
          border-color: rgba(59,123,255,0.35);
          background: rgba(19,84,249,0.08);
          transform: translateY(-3px);
        }
        .tech-chip-icon { font-size: 20px; }
        .tech-chip-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px; font-weight: 600;
          color: rgba(200,212,240,0.8);
        }
        .tech-trust {
          display: flex; align-items: center; justify-content: center; gap: 40px;
          padding: 48px 60px 0; flex-wrap: wrap;
        }
        .tech-trust-item {
          display: flex; flex-direction: column; align-items: center; gap: 8px;
        }
        .tech-trust-score {
          display: flex; gap: 4px;
          font-size: 18px;
        }
        .tech-trust-label {
          font-size: 13px; color: var(--text-muted);
        }
        .tech-trust-brand {
          font-family: 'Syne', sans-serif; font-size: 15px;
          font-weight: 700; color: #fff;
        }
        @media (max-width: 768px) {
          .tech-header { padding: 0 24px; }
        }
      `}</style>
 
      <section className="tech-section" id="technologies">
        <div className="tech-header">
          <div className="section-label">Our Technologies</div>
          <h2 className="section-title">We Use Technologies</h2>
          <div className="tech-tabs">
            {tabs.map(t => <div className="tech-tab" key={t}>{t}</div>)}
          </div>
        </div>
 
        <div className="tech-marquee-wrap">
          <div className="tech-marquee-row">
            <div className="tech-marquee-inner">
              {[...techs, ...techs].map((t, i) => (
                <div className="tech-chip" key={i}>
                  <span className="tech-chip-icon">{t.icon}</span>
                  <span className="tech-chip-name" style={{color: t.color === '#61DAFB' ? t.color : undefined}}>{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="tech-marquee-wrap">
          <div className="tech-marquee-row">
            <div className="tech-marquee-inner reverse">
              {[...techs.slice(7), ...techs.slice(0,7), ...techs.slice(7), ...techs.slice(0,7)].map((t, i) => (
                <div className="tech-chip" key={i}>
                  <span className="tech-chip-icon">{t.icon}</span>
                  <span className="tech-chip-name">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
 
        <div className="tech-trust">
          {[
            { emoji: '⭐⭐⭐⭐⭐', brand: 'Capterra', reviews: '300+ reviews' },
            { emoji: '⭐⭐⭐⭐⭐', brand: 'G2', reviews: '550+ reviews' },
          ].map(({ emoji, brand, reviews }) => (
            <div className="tech-trust-item" key={brand}>
              <div className="tech-trust-score">{emoji}</div>
              <div className="tech-trust-brand">{brand}</div>
              <div className="tech-trust-label">From {reviews}</div>
            </div>
          ))}
          <div className="tech-trust-item">
            <div style={{fontFamily:'Syne,sans-serif', fontSize:36, fontWeight:800,
              background:'linear-gradient(135deg,#fff,#93c5fd)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>
              1,800+
            </div>
            <div className="tech-trust-label">Hospitals & Clinics Trust Us</div>
          </div>
        </div>
      </section>
    </>
  )
}