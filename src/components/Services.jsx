// import '../medxl.css';
import '../index.css';
const services = [
  { icon:'🌐', color:'#C52DB5', bg:'rgba(197,45,181,.1)', border:'rgba(197,45,181,.22)', title:'Hospital Website + Appointment Booking', desc:'A professional, mobile-first hospital website with integrated online appointment booking, doctor profiles, speciality pages, and patient portal.', tags:['EHR Systems','HMS','Data Migration','Web Dev'] },
  { icon:'☁️', color:'#F5A623', bg:'rgba(245,166,35,.1)',  border:'rgba(245,166,35,.22)',  title:'Cloud Hosting & Maintenance',     desc:'Strategic technology roadmaps that accelerate your hospital\'s digital transformation journey.', tags:['Tech Assessment','Digital Transformation','Cybersecurity','ROI'] },
  { icon:'📱', color:'#60A5FA', bg:'rgba(96,165,250,.1)',  border:'rgba(96,165,250,.22)',  title:'Social Media Setup & Management',          desc:'Engaging digital learning ecosystems and medical content built for modern healthcare education.', tags:['LMS','Content Dev','Medical Writing','Training'] },
  { icon:'🔍', color:'#A855F7', bg:'rgba(168,85,247,.1)',  border:'rgba(168,85,247,.22)',  title:'SEO & Digital Marketing',       desc:'Intuitive, HIPAA-compliant mobile experiences for both patients and clinical providers.', tags:['Android','iOS','Patient Apps','Telemedicine'] },
  { icon:'📧', color:'#F87171', bg:'rgba(248,113,113,.1)', border:'rgba(248,113,113,.22)', title:'Professional Email & Communication Setup',          desc:'Transform raw healthcare data into strategic insights that drive smarter clinical decisions.', tags:['Predictive Models','Dashboards','Real-time BI','AI'] },
  { icon:'🛡️', color:'#4ADE80', bg:'rgba(74,222,128,.1)',  border:'rgba(74,222,128,.22)',  title:'Cyber Security & Compliance',            desc:'Purpose-built strategies that grow your hospital\'s digital presence and patient acquisition.', tags:['SEO','Brand Strategy','Content','Analytics'] },
  { icon:'📊', color:'#0f1de7', bg:'rgba(168,85,247,.1)',  border:'rgba(168,85,247,.22)',  title:'Data Analytics & Reporting',       desc:'Monthly performance dashboards covering website traffic, patient acquisition, social reach, and operational KPIs — insights that drive decisions.', tags:['Android','iOS','Patient Apps','Telemedicine'] },
  { icon:'🎓', color:'#810202', bg:'rgba(248,113,113,.1)', border:'rgba(248,113,113,.22)', title:'Staff IT Training & Onboarding ',          desc:'Structured onboarding sessions for all software tools, ongoing training modules, and documentation to ensure your team is always up to speed.', tags:['Predictive Models','Dashboards','Real-time BI','AI'] },
  { icon:'💬', color:'#e2ed0e', bg:'rgba(74,222,128,.1)',  border:'rgba(74,222,128,.22)',  title:'Complimentary IT Consultation',            desc:'Quarterly (or monthly on higher plans) strategy sessions with our healthcare IT experts — roadmap reviews, technology assessments, and growth advisory.', tags:['SEO','Brand Strategy','Content','Analytics'] },
]
export default function Services() {
  return (
    <>
      <style>{`
        .services {
          padding: 100px 56px;
          background: var(--bg-base);
          position: relative; overflow: hidden;
        }
        .services-header {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 48px; align-items: end;
          max-width: 1200px; margin: 0 auto 64px;
        }
        .services-grid {
          display: grid; grid-template-columns: repeat(3,1fr);
          gap: 2px; max-width: 1200px; margin: 0 auto;
          border: 1px solid var(--border-faint); border-radius: 20px; overflow: hidden;
        }
        .svc-card {
          background: var(--bg-surface); padding: 36px 32px;
          position: relative; overflow: hidden;
          transition: background .3s var(--ease);
          border-right: 1px solid var(--border-faint);
          border-bottom: 1px solid var(--border-faint);
          cursor: default;
        }
        .svc-card:nth-child(3n) { border-right: none; }
        .svc-card:nth-last-child(-n+3) { border-bottom: none; }
        .svc-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: var(--brand-grad); transform: scaleX(0); transform-origin: left;
          transition: transform .4s var(--ease);
        }
        .svc-card:hover { background: var(--bg-raised); }
        .svc-card:hover::before { transform: scaleX(1); }
        .svc-card:hover .svc-icon { transform: scale(1.1) rotate(-5deg); }
        .svc-card:hover .svc-glow { opacity: 1; }
        .svc-card:hover .svc-arrow { opacity: 1; transform: translateX(0); }
        .svc-glow {
          position: absolute; bottom: -50px; right: -50px;
          width: 180px; height: 180px; border-radius: 50%;
          filter: blur(50px); opacity: 0; transition: opacity .5s;
          pointer-events: none; background: var(--g-glow);
        }
        .svc-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; }
        .svc-icon {
          width: 52px; height: 52px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center; font-size: 24px;
          border: 1px solid var(--g-border); background: var(--g-bg);
          transition: transform .35s var(--spring); flex-shrink: 0;
        }
        .svc-arrow {
          width: 30px; height: 30px; border-radius: 50%;
          background: var(--g-bg); border: 1px solid var(--g-border);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; color: var(--text-primary);
          opacity: 0; transform: translateX(-8px);
          transition: all .3s var(--ease);
        }
        .svc-title {
          font-family: var(--font-display); font-size: 17px; font-weight: 700;
          color: var(--text-primary); margin-bottom: 10px; letter-spacing: -.3px;
        }
        .svc-desc {
          font-size: 13.5px; color: var(--text-muted); line-height: 1.7;
          font-weight: 400; margin-bottom: 20px;
        }
        .svc-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .svc-tag {
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 1px;
          padding: 3px 9px; border-radius: 4px; text-transform: uppercase;
          background: var(--g-bg); border: 1px solid var(--g-border);
          color: var(--g-color);
        }
        @media (max-width: 1024px) { .services-grid { grid-template-columns: 1fr 1fr; } .svc-card:nth-child(3n) { border-right: 1px solid var(--border-faint); } .svc-card:nth-child(2n) { border-right: none; } }
        @media (max-width: 640px) { .services { padding: 80px 20px; } .services-header { grid-template-columns: 1fr; } .services-grid { grid-template-columns: 1fr; } .svc-card:nth-child(n) { border-right: none; } }
      `}</style>
      <section className="services" id="services">
        <div className="services-header">
          <div>
            <div className="section-eyebrow">Our Services</div>
            <h2 className="section-title">Everything Your Hospital <em>Needs - Under One Roof</em></h2>
          </div>
          <p className="section-desc">From your website to your ward software, we handle it all so your clinical team can focus on patients.</p>
        </div>
        <div className="services-grid">
          {services.map((s,i)=>(
            <div className="svc-card" key={i} style={{'--g-color':s.color,'--g-bg':s.bg,'--g-border':s.border,'--g-glow':s.bg.replace('.1','.5')}}>
              <div className="svc-glow" style={{background:s.bg.replace('.1','.4')}}/>
              <div className="svc-top">
                <div className="svc-icon">{s.icon}</div>
              </div>
              <div className="svc-title">{s.title}</div>
              <div className="svc-desc">{s.desc}</div>
              <div className="svc-tags">{s.tags.map(t=><span className="svc-tag" key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}