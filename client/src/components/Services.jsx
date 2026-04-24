const services = [
  {
    icon: '⚙️',
    gradient: 'linear-gradient(135deg,#1354f9,#3b7bff)',
    glow: 'rgba(19,84,249,0.3)',
    title: 'Custom Software Development',
    desc: 'Tailor-made software architected for the healthcare industry\'s unique demands.',
    items: ['Software architecture design','System integration services','Data migration services','Hospital Website Development'],
  },
  {
    icon: '📈',
    gradient: 'linear-gradient(135deg,#7c3aed,#a78bfa)',
    glow: 'rgba(124,58,237,0.3)',
    title: 'IT & Business Consulting',
    desc: 'Strategic technology guidance to navigate digital transformation confidently.',
    items: ['Strategic Technology Assessment','Digital Transformation Planning','Cybersecurity Risk Management','Operational Efficiency'],
  },
  {
    icon: '🎓',
    gradient: 'linear-gradient(135deg,#0891b2,#22d3ee)',
    glow: 'rgba(8,145,178,0.3)',
    title: 'eLearning & Content Development',
    desc: 'Engaging digital learning ecosystems built for modern healthcare education.',
    items: ['Learning Management System','eLearning Content Development','Medical Content Writing','LMS for Healthcare'],
  },
  {
    icon: '📱',
    gradient: 'linear-gradient(135deg,#059669,#34d399)',
    glow: 'rgba(5,150,105,0.3)',
    title: 'Mobile App Development',
    desc: 'Intuitive, HIPAA-compliant mobile experiences for patients and providers.',
    items: ['Android development','iOS app development','Mobile app design','Hospital mobile apps'],
  },
  {
    icon: '🔬',
    gradient: 'linear-gradient(135deg,#dc2626,#f87171)',
    glow: 'rgba(220,38,38,0.3)',
    title: 'Data Analytics & Business Intelligence',
    desc: 'Transform raw healthcare data into strategic insights that drive decisions.',
    items: ['Predictive Performance Modeling','Advanced Data Visualization','Real-Time Insight Generation','Decision Intelligence'],
  },
  {
    icon: '📣',
    gradient: 'linear-gradient(135deg,#d97706,#fbbf24)',
    glow: 'rgba(217,119,6,0.3)',
    title: 'Digital Marketing',
    desc: 'Purpose-built marketing strategies that grow your hospital\'s digital presence.',
    items: ['Strategic Content Creation','Brand Engagement Optimization','Performance Analytics','Advanced SEO Optimization'],
  },
]
 
export default function Services() {
  return (
    <>
      <style>{`
        .services-section {
          padding: 120px 60px;
          background: var(--navy);
          position: relative; overflow: hidden;
        }
        .services-section::before {
          content: '';
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 600px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,123,255,0.4), transparent);
        }
        .section-label {
          font-size: 12px; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: #1354f9;
          margin-bottom: 16px;
        }
        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(32px,4vw,52px); font-weight: 800;
          color: #fff; line-height: 1.1; letter-spacing: -1px;
          margin-bottom: 20px;
        }
        .section-desc {
          font-size: 16px; color: var(--text-muted);
          max-width: 560px; line-height: 1.7; font-weight: 300;
        }
        .section-header { margin-bottom: 72px; }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px; max-width: 1200px; margin: 0 auto;
        }
        .service-card {
          background: rgba(10,22,40,0.7);
          border: 1px solid rgba(59,123,255,0.1);
          border-radius: 20px; padding: 36px;
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          position: relative; overflow: hidden;
          cursor: default;
        }
        .service-card::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: var(--card-gradient);
          opacity: 0; transition: opacity 0.4s;
        }
        .service-card:hover {
          border-color: rgba(59,123,255,0.3);
          transform: translateY(-8px);
          background: rgba(15,32,68,0.8);
        }
        .service-card:hover::before { opacity: 1; }
        .service-card:hover .service-glow {
          opacity: 1;
        }
        .service-glow {
          position: absolute; bottom: -60px; right: -60px;
          width: 200px; height: 200px; border-radius: 50%;
          filter: blur(60px); opacity: 0;
          transition: opacity 0.4s;
          background: var(--glow-color);
          pointer-events: none;
        }
        .service-icon {
          width: 56px; height: 56px; border-radius: 14px;
          background: var(--icon-gradient);
          display: flex; align-items: center; justify-content: center;
          font-size: 24px; margin-bottom: 24px;
          box-shadow: 0 8px 24px var(--icon-glow);
          position: relative; z-index: 1;
        }
        .service-title {
          font-family: 'Syne', sans-serif; font-size: 19px; font-weight: 700;
          color: #fff; margin-bottom: 12px; line-height: 1.3;
        }
        .service-desc {
          font-size: 14px; color: var(--text-muted); line-height: 1.65;
          margin-bottom: 24px; font-weight: 300;
        }
        .service-items { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .service-item {
          display: flex; align-items: center; gap: 10px;
          font-size: 13px; color: rgba(200,212,240,0.65);
        }
        .service-item-dot {
          width: 5px; height: 5px; border-radius: 50%;
          flex-shrink: 0; background: var(--icon-gradient);
        }
        @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 640px) {
          .services-section { padding: 80px 24px; }
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
 
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Our Services</div>
            <h2 className="section-title">How We Can Help You</h2>
            <p className="section-desc">
              MEDXL delivers cutting-edge digital solutions that transform healthcare
              operations through advanced data intelligence and analytics — with over
              20 years of specialized expertise.
            </p>
          </div>
 
          <div className="services-grid">
            {services.map((s, i) => (
              <div
                className="service-card"
                key={i}
                style={{
                  '--card-gradient': s.gradient,
                  '--icon-gradient': s.gradient,
                  '--icon-glow': s.glow,
                  '--glow-color': s.glow,
                }}
              >
                <div className="service-glow" style={{background: s.glow}} />
                <div className="service-icon" style={{background: s.gradient, boxShadow: `0 8px 24px ${s.glow}`}}>
                  {s.icon}
                </div>
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
                <ul className="service-items">
                  {s.items.map((item, j) => (
                    <li className="service-item" key={j}>
                      <div className="service-item-dot" style={{background: s.gradient}} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}