const cases = [
  { tag:'🏥 Hospitals Management', color:'#C52DB5', title:'Arogya General Hospital, Mumbai',         challenge:'A 150-bed facility struggling with long patient wait times and inefficient resource allocation across departments.', solution:'MedXL implemented cloud-based HMS and Resource Management tools with real-time analytics.', results:[{label:'Reduction in wait times',val:'40%'},{label:'Bed turnover improvement',val:'25%'},{label:'Annual cost savings',val:'₹2Cr'}] },
  { tag:'📱 Digital Transformation',color:'#F5A623', title:"Sunshine Children's Hospital, Bangalore", challenge:'An 80-bed pediatric hospital struggling to manage patient records and parent communication efficiently.', solution:'MedXL implemented EHR systems and developed a custom patient communication mobile app.', results:[{label:'Reduction in paperwork',val:'50%'},{label:'Patient satisfaction boost',val:'35%'},{label:'Missed appointments down',val:'25%'}] },
  { tag:'🌐 Telemedicine',color:'#60A5FA',title:'Lakshmi Multispecialty Hospital, Ranchi',       challenge:'A 200-bed hospital wanting to expand rural reach and reduce emergency department overcrowding.', solution:'MedXL implemented EHR, Telemedicine Platform and provided comprehensive staff skill training.', results:[{label:'Rural clinics connected',val:'15'},{label:'Non-emergency visits down',val:'30%'},{label:'Additional revenue',val:'₹75L'}] },
]
export default function CaseStudies() {
  return (
    <>
      <style>{`
        .cases { padding: 100px 56px; background: var(--bg-base); }
        .cases-header {
          display: flex; align-items: flex-end; justify-content: space-between;
          flex-wrap: wrap; gap: 24px; max-width: 1200px; margin: 0 auto 56px;
        }
        // .cases-view {
        //   font-family: var(--font-mono); font-size: 10px; letter-spacing: 2px;
        //   text-transform: uppercase; color: var(--brand-light);
        //   text-decoration: none; display: flex; align-items: center; gap: 8px;
        //   transition: gap .3s;
        // }
        // .cases-view:hover { gap: 14px; }
        .cases-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; max-width: 1200px; margin: 0 auto; }
        .case-card {
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 18px; padding: 32px;
          display: flex; flex-direction: column;
          transition: all .4s var(--ease); position: relative; overflow: hidden;
        }
        .case-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: var(--brand-grad); transform: scaleX(0); transform-origin: left;
          transition: transform .4s var(--ease);
        }
        .case-card:hover { transform: translateY(-6px); border-color: var(--border-default); box-shadow: 0 24px 60px rgba(0,0,0,.4); }
        .case-card:hover::before { transform: scaleX(1); }
        .case-card:hover .case-glow { opacity: 1; }
        .case-glow {
          position: absolute; bottom: -50px; right: -50px;
          width: 200px; height: 200px; border-radius: 50%;
          filter: blur(50px); opacity: 0; transition: opacity .5s;
          pointer-events: none; background: var(--c-glow);
        }
        .case-tag {
          display: inline-flex; align-items: center;
          font-family: var(--font-mono); font-size: 9px; font-weight: 500;
          letter-spacing: 2px; text-transform: uppercase;
          padding: 4px 10px; border-radius: 100px; margin-bottom: 18px; width: fit-content;
          background: var(--c-bg); color: var(--c-color); border: 1px solid var(--c-border);
        }
        .case-title { font-family: var(--font-display); font-size: 17px; font-weight: 700; color: var(--text-primary); margin-bottom: 18px; line-height: 1.3; letter-spacing: -.3px; }
        .case-sec-label { font-family: var(--font-mono); font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: var(--c-color); margin-bottom: 5px; }
        .case-text { font-size: 13px; color: var(--text-muted); line-height: 1.7; margin-bottom: 18px; }
        .case-results { margin-top: auto; padding-top: 20px; border-top: 1px solid var(--border-faint); display: flex; flex-direction: column; gap: 10px; }
        .case-result { display: flex; align-items: center; justify-content: space-between; }
        .case-result-label { font-size: 12.5px; color: var(--text-muted); }
        .case-result-val { font-family: var(--font-display); font-size: 20px; font-weight: 800; color: var(--c-color); letter-spacing: -.5px; }
        .case-link { display: inline-flex; align-items: center; gap: 6px; margin-top: 20px; font-family: var(--font-mono); font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: var(--c-color); text-decoration: none; transition: gap .3s; }
        .case-link:hover { gap: 12px; }
        @media (max-width: 1024px) { .cases-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 640px) { .cases { padding: 80px 20px; } .cases-grid { grid-template-columns: 1fr; } }
      `}</style>
      <section className="cases" id="case-studies">
        <div className="cases-header">
          <div>
            <div className="section-eyebrow">Case Studies</div>
            <h2 className="section-title">Real Results for <em>Real Hospitals</em></h2>
          </div>
          {/* <a href="#" className="cases-view">View all studies →</a> */}
        </div>
        <div className="cases-grid">
          {cases.map((c,i)=>(
            <div className="case-card" key={i} style={{'--c-color':c.color,'--c-bg':c.color+'18','--c-border':c.color+'35','--c-glow':c.color+'33'}}>
              <div className="case-glow"/>
              <span className="case-tag">{c.tag}</span>
              <div className="case-title">{c.title}</div>
              <div className="case-sec-label">Challenge</div>
              <div className="case-text">{c.challenge}</div>
              <div className="case-sec-label">Solution</div>
              <div className="case-text">{c.solution}</div>
              <div className="case-results">
                {c.results.map(r=>(
                  <div className="case-result" key={r.label}>
                    <span className="case-result-label">{r.label}</span>
                    <span className="case-result-val">{r.val}</span>
                  </div>
                ))}
              </div>
              <a href="#" className="case-link">Read full case study →</a>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}