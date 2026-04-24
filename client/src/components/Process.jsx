import { useState } from 'react'
 
const steps = [
  {
    num: '01',
    title: 'Discovery Phase',
    desc: 'We collaborate with hospitals to understand their unique needs in Data Analytics, Software Development, Branding, Digital Marketing, Skill Development and Digital Transformation.',
    icon: '🔍',
  },
  {
    num: '02',
    title: 'Design & Development',
    desc: 'Based on insights gathered, our team designs and develops customized software solutions tailored specifically to the medical industry\'s requirements, ensuring they are user-friendly and efficient.',
    icon: '🎨',
  },
  {
    num: '03',
    title: 'Testing & QA',
    desc: 'We conduct rigorous testing and quality assurance to verify that the software performs reliably in the real-world environment, meeting all regulatory compliance and security standards.',
    icon: '🧪',
  },
  {
    num: '04',
    title: 'Deployment',
    desc: 'Our team seamlessly deploys the developed solutions into healthcare institutions\' existing systems, ensuring minimal disruption and optimal integration with their operational workflows.',
    icon: '🚀',
  },
  {
    num: '05',
    title: 'Maintenance',
    desc: 'We provide ongoing maintenance services to keep software applications running smoothly, implementing updates and improvements as needed to adapt to evolving healthcare standards.',
    icon: '⚙️',
  },
]
 
export default function Process() {
  const [active, setActive] = useState(0)
 
  return (
    <>
      <style>{`
        .process-section {
          padding: 120px 60px;
          background: var(--navy);
          position: relative; overflow: hidden;
        }
        .process-inner {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: start; max-width: 1200px; margin: 0 auto;
        }
        .process-steps { display: flex; flex-direction: column; gap: 4px; }
        .process-step {
          display: flex; gap: 20px; padding: 20px 24px;
          border-radius: 14px; cursor: pointer;
          transition: all 0.3s; border: 1px solid transparent;
          position: relative;
        }
        .process-step.active {
          background: rgba(19,84,249,0.08);
          border-color: rgba(19,84,249,0.2);
        }
        .process-step:hover:not(.active) {
          background: rgba(255,255,255,0.03);
        }
        .process-num {
          font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 800;
          color: var(--text-muted); min-width: 28px; padding-top: 2px;
          transition: color 0.3s;
        }
        .process-step.active .process-num { color: #1354f9; }
        .process-step-title {
          font-family: 'Syne', sans-serif; font-size: 17px; font-weight: 700;
          color: rgba(232,238,255,0.6); transition: color 0.3s;
        }
        .process-step.active .process-step-title { color: #fff; }
 
        .process-detail {
          position: sticky; top: 100px;
        }
        .process-detail-card {
          background: rgba(10,22,40,0.8);
          border: 1px solid rgba(59,123,255,0.15);
          border-radius: 24px; padding: 48px;
          position: relative; overflow: hidden;
          animation: scaleIn 0.4s ease;
        }
        .process-detail-card::before {
          content: ''; position: absolute;
          top: -80px; right: -80px;
          width: 250px; height: 250px; border-radius: 50%;
          background: radial-gradient(circle, rgba(19,84,249,0.15) 0%, transparent 70%);
          filter: blur(40px);
        }
        .process-icon {
          font-size: 48px; margin-bottom: 24px;
          display: block;
        }
        .process-detail-num {
          font-family: 'Syne', sans-serif; font-size: 80px; font-weight: 800;
          color: rgba(19,84,249,0.1); line-height: 1;
          position: absolute; top: 24px; right: 32px;
          pointer-events: none;
        }
        .process-detail-title {
          font-family: 'Syne', sans-serif; font-size: 28px; font-weight: 800;
          color: #fff; margin-bottom: 20px; line-height: 1.2;
        }
        .process-detail-desc {
          font-size: 16px; color: var(--text-muted); line-height: 1.75; font-weight: 300;
        }
        .process-progress {
          display: flex; gap: 8px; margin-top: 36px;
        }
        .progress-dot {
          height: 3px; border-radius: 2px;
          background: rgba(255,255,255,0.1);
          flex: 1; transition: background 0.3s;
        }
        .progress-dot.active {
          background: linear-gradient(90deg, #1354f9, #00d4ff);
        }
        @media (max-width: 960px) {
          .process-section { padding: 80px 24px; }
          .process-inner { grid-template-columns: 1fr; gap: 40px; }
          .process-detail { position: relative; top: 0; }
        }
      `}</style>
 
      <section className="process-section" id="process">
        <div className="container">
          <div className="section-header" style={{marginBottom:72}}>
            <div className="section-label">Working Process</div>
            <h2 className="section-title">Our Approach</h2>
          </div>
          <div className="process-inner">
            <div className="process-steps">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className={`process-step ${active === i ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <div className="process-num">{s.num}</div>
                  <div className="process-step-title">{s.title}</div>
                </div>
              ))}
            </div>
            <div className="process-detail">
              <div className="process-detail-card" key={active}>
                <span className="process-icon">{steps[active].icon}</span>
                <div className="process-detail-num">{steps[active].num}</div>
                <div className="process-detail-title">{steps[active].title}</div>
                <div className="process-detail-desc">{steps[active].desc}</div>
                <div className="process-progress">
                  {steps.map((_, i) => (
                    <div key={i} className={`progress-dot ${i === active ? 'active' : ''}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}