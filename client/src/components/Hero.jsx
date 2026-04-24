import { useEffect, useRef } from 'react'
 
export default function Hero() {
  const orb1 = useRef(null)
  const orb2 = useRef(null)
 
  useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      if (orb1.current) {
        orb1.current.style.transform = `translate(${x * 40 - 20}px, ${y * 40 - 20}px)`
      }
      if (orb2.current) {
        orb2.current.style.transform = `translate(${-x * 30 + 15}px, ${-y * 30 + 15}px)`
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])
 
  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh;
          background: radial-gradient(ellipse 80% 60% at 50% -10%, rgba(19,84,249,0.35) 0%, transparent 60%),
                      radial-gradient(ellipse 40% 40% at 85% 60%, rgba(0,212,255,0.12) 0%, transparent 60%),
                      #050d1a;
          display: flex; align-items: center;
          padding: 120px 60px 80px;
          position: relative; overflow: hidden;
        }
        .hero-bg-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(59,123,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,123,255,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .hero-orb {
          position: absolute; border-radius: 50%;
          filter: blur(80px); pointer-events: none;
          transition: transform 0.8s cubic-bezier(0.4,0,0.2,1);
        }
        .hero-orb-1 {
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(19,84,249,0.25) 0%, transparent 70%);
          top: -100px; right: -100px;
          animation: float 8s ease-in-out infinite;
        }
        .hero-orb-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%);
          bottom: -50px; right: 20%;
          animation: float 10s ease-in-out infinite reverse;
        }
 
        /* Rings */
        .hero-rings {
          position: absolute; right: 8%; top: 50%;
          transform: translateY(-50%);
          width: 520px; height: 520px;
        }
        .ring {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(59,123,255,0.15);
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
        }
        .ring-1 { width: 200px; height: 200px; border-color: rgba(59,123,255,0.4); animation: spin-slow 20s linear infinite; }
        .ring-2 { width: 320px; height: 320px; animation: spin-reverse 30s linear infinite; }
        .ring-3 { width: 440px; height: 440px; animation: spin-slow 40s linear infinite; }
        .ring-4 { width: 520px; height: 520px; border-color: rgba(59,123,255,0.06); }
        .ring-dot {
          position: absolute; width: 8px; height: 8px;
          border-radius: 50%; background: #1354f9;
          box-shadow: 0 0 12px #1354f9;
          top: 50%; left: 0;
          transform: translate(-50%,-50%);
        }
        .ring-dot-2 {
          background: #00d4ff; box-shadow: 0 0 12px #00d4ff;
          top: 0; left: 50%;
        }
        .ring-center {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          width: 100px; height: 100px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(19,84,249,0.3), rgba(0,212,255,0.2));
          border: 1px solid rgba(59,123,255,0.5);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 800;
          color: #fff;
          box-shadow: 0 0 40px rgba(19,84,249,0.4), inset 0 0 20px rgba(19,84,249,0.1);
        }
 
        .hero-content { position: relative; z-index: 2; max-width: 620px; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(19,84,249,0.12);
          border: 1px solid rgba(19,84,249,0.3);
          padding: 6px 16px; border-radius: 100px;
          font-size: 12px; font-weight: 600;
          color: #93c5fd; text-transform: uppercase; letter-spacing: 1.5px;
          margin-bottom: 28px;
          animation: fadeUp 0.6s ease both;
        }
        .hero-badge::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: #00d4ff;
          box-shadow: 0 0 8px #00d4ff;
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(40px, 5.5vw, 72px);
          font-weight: 800; line-height: 1.08;
          color: #fff; margin-bottom: 24px;
          letter-spacing: -1.5px;
          animation: fadeUp 0.6s 0.1s ease both;
        }
        .hero-title .gradient-text {
          background: linear-gradient(135deg, #1354f9 0%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-desc {
          font-size: 17px; color: rgba(200,212,240,0.8);
          line-height: 1.75; margin-bottom: 40px;
          animation: fadeUp 0.6s 0.2s ease both;
          font-weight: 300;
        }
        .hero-bullets {
          display: flex; flex-direction: column; gap: 10px;
          margin-bottom: 40px;
          animation: fadeUp 0.6s 0.25s ease both;
        }
        .hero-bullet {
          display: flex; align-items: center; gap: 10px;
          font-size: 15px; color: rgba(200,212,240,0.85);
        }
        .hero-bullet::before {
          content: ''; width: 18px; height: 18px; border-radius: 50%;
          background: linear-gradient(135deg, #1354f9, #00d4ff);
          flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 10px;
          box-shadow: 0 0 10px rgba(19,84,249,0.5);
        }
        .hero-actions {
          display: flex; gap: 16px; flex-wrap: wrap;
          animation: fadeUp 0.6s 0.35s ease both;
        }
        .btn-primary {
          background: linear-gradient(135deg, #1354f9, #3b7bff);
          color: #fff; padding: 15px 32px; border-radius: 10px;
          font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 15px;
          text-decoration: none; border: none; cursor: pointer;
          box-shadow: 0 8px 32px rgba(19,84,249,0.45);
          transition: all 0.3s; display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 48px rgba(19,84,249,0.55);
        }
        .btn-secondary {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.15);
          color: #fff; padding: 15px 32px; border-radius: 10px;
          font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 15px;
          text-decoration: none; cursor: pointer;
          transition: all 0.3s; display: inline-flex; align-items: center; gap: 8px;
          backdrop-filter: blur(10px);
        }
        .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(59,123,255,0.4);
          transform: translateY(-2px);
        }
        .hero-stats {
          display: flex; gap: 40px; margin-top: 56px;
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.06);
          animation: fadeUp 0.6s 0.45s ease both;
        }
        .hero-stat-num {
          font-family: 'Syne', sans-serif; font-size: 32px; font-weight: 800;
          background: linear-gradient(135deg, #fff, #93c5fd);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          line-height: 1;
        }
        .hero-stat-label {
          font-size: 13px; color: var(--grey-3); margin-top: 4px; font-weight: 400;
        }
        @media (max-width: 960px) {
          .hero { padding: 110px 24px 80px; }
          .hero-rings { display: none; }
          .hero-stats { gap: 24px; }
        }
      `}</style>
 
      <section className="hero" id="home">
        <div className="hero-bg-grid" />
        <div className="hero-orb hero-orb-1" ref={orb1} />
        <div className="hero-orb hero-orb-2" ref={orb2} />
 
        <div className="hero-content">
          <div className="hero-badge">Best Software Solutions for Hospitals</div>
          <h1 className="hero-title">
            Empowering Hospitals<br />
            Through <span className="gradient-text">Technology.</span>
          </h1>
          <p className="hero-desc">
            Our innovative technology solutions streamline hospital operations,
            boosting efficiency and productivity across all departments — enabling
            healthcare providers to focus on what matters most.
          </p>
          <div className="hero-bullets">
            <div className="hero-bullet">Focus on quality healthcare</div>
            <div className="hero-bullet">Deliver exceptional patient care</div>
          </div>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Contact Us Now →</a>
            <a href="tel:+918148181288" className="btn-secondary">📞 (+91) 8148181288</a>
          </div>
          <div className="hero-stats">
            {[['1800+','Hospitals Served'],['20+','Years Experience'],['6K+','Happy Clients']].map(([n,l]) => (
              <div key={l}>
                <div className="hero-stat-num">{n}</div>
                <div className="hero-stat-label">{l}</div>
              </div>
            ))}
          </div>
        </div>
 
        <div className="hero-rings">
          <div className="ring ring-4" />
          <div className="ring ring-3" />
          <div className="ring ring-2"><div className="ring-dot ring-dot-2" /></div>
          <div className="ring ring-1"><div className="ring-dot" /></div>
          <div className="ring-center">Med<span style={{color:'#00d4ff'}}>XL</span></div>
        </div>
      </section>
    </>
  )
}