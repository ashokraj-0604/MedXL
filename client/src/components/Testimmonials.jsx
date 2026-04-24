import { useState, useEffect } from 'react'
 
const testimonials = [
  {
    quote: 'MedXL\'s dedication to digital transformation has been transformative for us. Their customized software applications led to a 30% reduction in non-emergency hospital visits and a 25% increase in overall patient outreach.',
    name: 'Dr. Alejandro Gómez',
    role: 'Chief Operations Officer',
    org: 'Buenos Aires Health Center',
    country: '🇦🇷 Buenos Aires, Argentina',
    initials: 'AG',
    color: '#1354f9',
  },
  {
    quote: 'Implementing MedXL\'s digital marketing and software solutions has greatly benefited our hospital. We saw a 28% increase in patient satisfaction scores and generated an additional 7.5 million CAD in revenue in the first year.',
    name: 'Dr. Matthew Thompson',
    role: 'Director — Operations',
    org: 'Northern Ontario Healthcare Institute',
    country: '🇨🇦 Ontario, Canada',
    initials: 'MT',
    color: '#7c3aed',
  },
  {
    quote: 'Partnering with MedXL has revolutionized our hospital\'s operations. Their data analytics solutions reduced our paperwork by 50% and improved patient data accuracy by 35%, significantly enhancing our efficiency and patient care.',
    name: 'Dr. Carlos Mendes',
    role: 'Operations Director',
    org: 'São Paulo City Hospital',
    country: '🇧🇷 São Paulo, Brazil',
    initials: 'CM',
    color: '#059669',
  },
]
 
export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
 
  useEffect(() => {
    const timer = setInterval(() => goTo((active + 1) % testimonials.length), 6000)
    return () => clearInterval(timer)
  }, [active])
 
  const goTo = (idx) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => { setActive(idx); setAnimating(false) }, 350)
  }
 
  const t = testimonials[active]
 
  return (
    <>
      <style>{`
        .testimonials-section {
          padding: 120px 60px;
          background: var(--navy);
          position: relative; overflow: hidden;
        }
        .testimonials-section::before {
          content: '';
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 800px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(19,84,249,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .testimonials-inner { max-width: 800px; margin: 0 auto; }
        .testimonials-card {
          background: rgba(10,22,40,0.8);
          border: 1px solid rgba(59,123,255,0.15);
          border-radius: 28px; padding: 56px;
          position: relative; overflow: hidden;
          transition: opacity 0.35s, transform 0.35s;
        }
        .testimonials-card.animating { opacity: 0; transform: translateY(12px); }
        .quote-icon {
          font-size: 64px; line-height: 1; color: rgba(19,84,249,0.2);
          font-family: Georgia, serif; position: absolute;
          top: 28px; left: 40px; pointer-events: none;
        }
        .testimonial-quote {
          font-size: 18px; line-height: 1.8;
          color: rgba(232,238,255,0.85); font-weight: 300;
          margin-bottom: 36px; position: relative; z-index: 1;
          font-style: italic;
        }
        .testimonial-author {
          display: flex; align-items: center; gap: 16px;
        }
        .author-avatar {
          width: 52px; height: 52px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 800;
          color: #fff; flex-shrink: 0;
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }
        .author-name {
          font-family: 'Syne', sans-serif; font-size: 17px;
          font-weight: 700; color: #fff;
        }
        .author-role { font-size: 13px; color: var(--text-muted); margin-top: 2px; }
        .author-country { font-size: 12px; color: var(--text-muted); margin-top: 4px; }
        .testimonials-nav {
          display: flex; align-items: center; justify-content: center;
          gap: 12px; margin-top: 36px;
        }
        .nav-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: rgba(255,255,255,0.15); cursor: pointer;
          transition: all 0.3s;
        }
        .nav-dot.active {
          background: #1354f9; width: 28px; border-radius: 4px;
        }
        .nav-arrows {
          display: flex; gap: 8px; margin-left: 20px;
        }
        .nav-arrow {
          width: 40px; height: 40px; border-radius: 50%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(59,123,255,0.2);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #fff; font-size: 16px;
          transition: all 0.25s;
        }
        .nav-arrow:hover {
          background: rgba(19,84,249,0.2);
          border-color: rgba(19,84,249,0.4);
        }
        @media (max-width: 768px) {
          .testimonials-section { padding: 80px 24px; }
          .testimonials-card { padding: 36px 28px; }
          .testimonial-quote { font-size: 16px; }
        }
      `}</style>
 
      <section className="testimonials-section">
        <div className="container" style={{textAlign:'center', marginBottom:56}}>
          <div className="section-label">Testimonials</div>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="testimonials-inner">
          <div className={`testimonials-card ${animating ? 'animating' : ''}`}>
            <div className="quote-icon">"</div>
            <p className="testimonial-quote">{t.quote}</p>
            <div className="testimonial-author">
              <div className="author-avatar" style={{background:`linear-gradient(135deg, ${t.color}, #fff2)`}}>
                {t.initials}
              </div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-role">{t.role}, {t.org}</div>
                <div className="author-country">{t.country}</div>
              </div>
            </div>
          </div>
          <div className="testimonials-nav">
            {testimonials.map((_, i) => (
              <div key={i} className={`nav-dot ${i === active ? 'active' : ''}`}
                onClick={() => goTo(i)} />
            ))}
            <div className="nav-arrows">
              <div className="nav-arrow" onClick={() => goTo((active - 1 + testimonials.length) % testimonials.length)}>←</div>
              <div className="nav-arrow" onClick={() => goTo((active + 1) % testimonials.length)}>→</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}