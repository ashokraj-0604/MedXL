const cases = [
  {
    tag: 'Hospitals & Clinics',
    title: 'Arogya General Hospital, Mumbai',
    challenge: 'A 150-bed facility struggling with long patient wait times and inefficient resource allocation.',
    solution: 'MedXL implemented its cloud-based Hospital Management System (HMS) and Resource Management tools.',
    results: [
      { label: 'Reduction in wait times', value: '40%', color: '#1354f9' },
      { label: 'Bed turnover improvement', value: '25%', color: '#00d4ff' },
      { label: 'Annual savings', value: '₹2Cr', color: '#34d399' },
    ],
    accent: '#1354f9',
  },
  {
    tag: 'Digital Transformation',
    title: "Sunshine Children's Hospital, Bangalore",
    challenge: 'An 80-bed pediatric hospital struggling to manage patient records and parent communication.',
    solution: 'MedXL implemented EHR systems and developed a custom patient communication app.',
    results: [
      { label: 'Reduction in paperwork', value: '50%', color: '#7c3aed' },
      { label: 'Patient satisfaction boost', value: '35%', color: '#a78bfa' },
      { label: 'Missed appointments down', value: '25%', color: '#c4b5fd' },
    ],
    accent: '#7c3aed',
  },
  {
    tag: 'Technology for Healthcare',
    title: 'Lakshmi Multispecialty Hospital, Ranchi',
    challenge: 'A 200-bed hospital wanting to expand reach to rural areas and reduce ED burden.',
    solution: 'MedXL implemented EHR, Telemedicine Platform and provided Staff Skill Training.',
    results: [
      { label: 'Rural clinics connected', value: '15', color: '#059669' },
      { label: 'Non-emergency visits down', value: '30%', color: '#34d399' },
      { label: 'Additional revenue', value: '₹75L', color: '#6ee7b7' },
    ],
    accent: '#059669',
  },
]
 
export default function CaseStudies() {
  return (
    <>
      <style>{`
        .cases-section {
          padding: 120px 60px;
          background: var(--navy-2);
          position: relative; overflow: hidden;
        }
        .cases-section::before {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,123,255,0.3), transparent);
        }
        .cases-grid {
          display: grid; grid-template-columns: repeat(3,1fr);
          gap: 28px; max-width: 1200px; margin: 0 auto;
        }
        .case-card {
          background: rgba(5,13,26,0.7);
          border: 1px solid rgba(59,123,255,0.1);
          border-radius: 24px; padding: 36px;
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          position: relative; overflow: hidden;
          display: flex; flex-direction: column;
        }
        .case-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: var(--accent-grad);
          opacity: 0; transition: opacity 0.4s;
        }
        .case-card:hover {
          border-color: rgba(59,123,255,0.25);
          transform: translateY(-8px);
          box-shadow: 0 24px 64px rgba(0,0,0,0.4);
        }
        .case-card:hover::before { opacity: 1; }
        .case-tag {
          display: inline-block; font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 2px;
          padding: 4px 12px; border-radius: 100px;
          background: var(--tag-bg); color: var(--tag-color);
          margin-bottom: 20px;
        }
        .case-title {
          font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 700;
          color: #fff; margin-bottom: 16px; line-height: 1.3;
        }
        .case-label {
          font-size: 11px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: var(--text-muted); margin-bottom: 6px;
        }
        .case-text {
          font-size: 14px; color: rgba(200,212,240,0.65);
          line-height: 1.65; margin-bottom: 20px; font-weight: 300;
        }
        .case-results {
          margin-top: auto; display: flex; flex-direction: column; gap: 12px;
          padding-top: 24px; border-top: 1px solid rgba(59,123,255,0.1);
        }
        .case-result-row {
          display: flex; align-items: center; justify-content: space-between;
        }
        .case-result-label {
          font-size: 13px; color: var(--text-muted);
        }
        .case-result-val {
          font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800;
          background: var(--val-gradient);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .case-read {
          display: inline-flex; align-items: center; gap: 8px;
          margin-top: 24px; color: var(--tag-color);
          font-weight: 600; font-size: 14px; text-decoration: none;
          transition: gap 0.3s;
        }
        .case-read:hover { gap: 14px; }
        .cases-bottom {
          text-align: center; margin-top: 56px;
        }
        @media (max-width: 1024px) { .cases-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 640px) {
          .cases-section { padding: 80px 24px; }
          .cases-grid { grid-template-columns: 1fr; }
        }
      `}</style>
 
      <section className="cases-section" id="case-studies">
        <div className="container">
          <div className="section-header" style={{marginBottom:64}}>
            <div className="section-label">Case Studies</div>
            <h2 className="section-title">Our Latest Case Studies</h2>
          </div>
          <div className="cases-grid">
            {cases.map((c, i) => (
              <div className="case-card" key={i} style={{
                '--accent-grad': `linear-gradient(90deg, ${c.accent}, ${c.results[1].color})`,
                '--tag-bg': `${c.accent}20`,
                '--tag-color': c.accent,
              }}>
                <span className="case-tag" style={{background:`${c.accent}18`, color:c.accent}}>{c.tag}</span>
                <div className="case-title">{c.title}</div>
                <div className="case-label">Challenge</div>
                <div className="case-text">{c.challenge}</div>
                <div className="case-label">Solution</div>
                <div className="case-text">{c.solution}</div>
                <div className="case-results">
                  {c.results.map((r, j) => (
                    <div className="case-result-row" key={j}>
                      <span className="case-result-label">{r.label}</span>
                      <span className="case-result-val" style={{
                        '--val-gradient': `linear-gradient(135deg, ${r.color}, #fff)`
                      }}>{r.value}</span>
                    </div>
                  ))}
                </div>
                <a href="#" className="case-read">Read Case Study →</a>
              </div>
            ))}
          </div>
          <div className="cases-bottom">
            <a href="#" className="btn-secondary" style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'rgba(255,255,255,0.04)',
              border:'1px solid rgba(59,123,255,0.2)',
              color:'#fff', padding:'13px 32px', borderRadius:10,
              fontFamily:'DM Sans,sans-serif', fontWeight:600, fontSize:15,
              textDecoration:'none', transition:'all 0.3s',
            }}>View More Case Studies →</a>
          </div>
        </div>
      </section>
    </>
  )
}