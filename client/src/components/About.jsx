import { useEffect, useRef, useState } from 'react'
 
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}
 
export default function About() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
 
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
 
  const projects = useCountUp(500, 2000, visible)
  const results = useCountUp(98, 2000, visible)
  const hospitals = useCountUp(1800, 2200, visible)
 
  return (
    <>
      <style>{`
        .about-section {
          padding: 120px 60px;
          background: linear-gradient(180deg, var(--navy) 0%, var(--navy-2) 100%);
          position: relative; overflow: hidden;
        }
        .about-inner {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: center; max-width: 1200px; margin: 0 auto;
        }
        .about-visual {
          position: relative; display: flex; align-items: center; justify-content: center;
        }
        .about-card-main {
          background: rgba(10,22,40,0.9);
          border: 1px solid rgba(59,123,255,0.2);
          border-radius: 24px; padding: 48px;
          position: relative; z-index: 2;
          width: 100%;
          box-shadow: 0 40px 80px rgba(0,0,0,0.4);
        }
        .about-stat-row {
          display: flex; gap: 0;
          border-radius: 16px; overflow: hidden;
          border: 1px solid rgba(59,123,255,0.15);
          margin-bottom: 20px;
        }
        .about-stat {
          flex: 1; padding: 24px 20px; text-align: center;
          border-right: 1px solid rgba(59,123,255,0.1);
          background: rgba(19,84,249,0.04);
          transition: background 0.3s;
        }
        .about-stat:last-child { border-right: none; }
        .about-stat:hover { background: rgba(19,84,249,0.1); }
        .about-stat-num {
          font-family: 'Syne', sans-serif; font-size: 36px; font-weight: 800;
          background: linear-gradient(135deg, #fff, #93c5fd);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          line-height: 1;
        }
        .about-stat-suffix {
          font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800;
          background: linear-gradient(135deg, #1354f9, #00d4ff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .about-stat-label {
          font-size: 12px; color: var(--text-muted); margin-top: 6px;
          text-transform: uppercase; letter-spacing: 1px; font-weight: 500;
        }
        .about-avatars {
          display: flex; align-items: center; gap: 16px;
          padding: 20px 24px;
          background: rgba(19,84,249,0.06);
          border: 1px solid rgba(59,123,255,0.15);
          border-radius: 14px;
        }
        .avatar-stack { display: flex; }
        .avatar {
          width: 36px; height: 36px; border-radius: 50%;
          border: 2px solid var(--navy-2);
          margin-left: -10px; overflow: hidden;
          background: linear-gradient(135deg, #1354f9, #00d4ff);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; font-weight: 700; color: #fff;
          font-family: 'Syne', sans-serif;
        }
        .avatar:first-child { margin-left: 0; }
        .avatar-text { font-size: 13px; color: rgba(200,212,240,0.8); }
        .avatar-text strong { color: #fff; font-weight: 600; }
 
        /* Floating badge */
        .floating-badge {
          position: absolute; top: -20px; right: -20px;
          background: linear-gradient(135deg, #1354f9, #3b7bff);
          border-radius: 14px; padding: 16px 20px; z-index: 3;
          box-shadow: 0 16px 40px rgba(19,84,249,0.4);
          animation: float 5s ease-in-out infinite;
        }
        .floating-badge-num {
          font-family: 'Syne', sans-serif; font-size: 28px; font-weight: 800; color: #fff;
        }
        .floating-badge-text { font-size: 11px; color: rgba(255,255,255,0.75); font-weight: 500; }
 
        /* Decorative glow */
        .about-glow {
          position: absolute; width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(19,84,249,0.15) 0%, transparent 70%);
          filter: blur(60px); top: 50%; left: 50%;
          transform: translate(-50%,-50%); pointer-events: none;
        }
 
        .about-content {}
        .about-mission {
          background: rgba(10,22,40,0.6); border: 1px solid rgba(59,123,255,0.12);
          border-radius: 16px; padding: 28px; margin-top: 32px;
        }
        .about-mission-title {
          font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700;
          color: #1354f9; text-transform: uppercase; letter-spacing: 2px;
          margin-bottom: 12px;
        }
        .about-mission p {
          font-size: 15px; color: var(--text-muted); line-height: 1.7; font-weight: 300;
        }
        .about-link {
          display: inline-flex; align-items: center; gap: 8px;
          color: #3b7bff; font-weight: 600; font-size: 15px;
          text-decoration: none; margin-top: 24px;
          transition: gap 0.3s;
        }
        .about-link:hover { gap: 14px; }
        @media (max-width: 960px) {
          .about-section { padding: 80px 24px; }
          .about-inner { grid-template-columns: 1fr; gap: 48px; }
          .floating-badge { top: -10px; right: 10px; }
        }
      `}</style>
 
      <section className="about-section" id="about" ref={ref}>
        <div className="about-inner">
          <div className="about-visual">
            <div className="about-glow" />
            <div className="about-card-main">
              <div className="about-stat-row">
                <div className="about-stat">
                  <div className="about-stat-num">{projects}<span className="about-stat-suffix">+</span></div>
                  <div className="about-stat-label">Projects Done</div>
                </div>
                <div className="about-stat">
                  <div className="about-stat-num">{results}<span className="about-stat-suffix">%</span></div>
                  <div className="about-stat-label">Results Guaranteed</div>
                </div>
              </div>
              <div className="about-stat-row">
                <div className="about-stat" style={{flex:'1 1 100%'}}>
                  <div className="about-stat-num">{hospitals}<span className="about-stat-suffix">+</span></div>
                  <div className="about-stat-label">Hospitals & Clinics Trust Us</div>
                </div>
              </div>
              <div className="about-avatars">
                <div className="avatar-stack">
                  {['A','B','C'].map((l,i) => (
                    <div className="avatar" key={i} style={{
                      background: `linear-gradient(135deg, ${['#1354f9','#7c3aed','#059669'][i]}, ${['#3b7bff','#a78bfa','#34d399'][i]})`
                    }}>{l}</div>
                  ))}
                </div>
                <div className="avatar-text"><strong>6,000+</strong> Happy Customers</div>
              </div>
            </div>
            <div className="floating-badge">
              <div className="floating-badge-num">20+</div>
              <div className="floating-badge-text">Years of Expertise</div>
            </div>
          </div>
 
          <div className="about-content">
            <div className="section-label">About Us</div>
            <h2 className="section-title">MEDXL Mission &amp; Goal</h2>
            <p style={{fontSize:16, color:'var(--text-muted)', lineHeight:1.75, fontWeight:300}}>
              At MedXL, we help hospitals and clinics work smarter with our innovative
              software. Our solutions make daily operations easier, help healthcare
              organizations grow, and support their success.
            </p>
            <div className="about-mission">
              <div className="about-mission-title">Our Commitment</div>
              <p>
                We're committed to delivering quality tools that make healthcare better
                for everyone. Our technology simplifies complex tasks, giving medical
                teams more time to focus on what matters most: patient care.
              </p>
            </div>
            <a href="#contact" className="about-link">Learn More →</a>
          </div>
        </div>
      </section>
    </>
  )
}