import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: 'MedXL completely transformed how we manage patients across our multi-specialty chain. Their HMS cut our OPD wait times by 45% and the real-time dashboard finally gave our administrators and doctors a single source of truth. Genuinely feels like a partner who understands Indian healthcare.',
    name: 'Dr. Priya Nair',
    role: 'Chief Operations Officer',
    org: 'Bengaluru HealthFirst Hospitals',
    flag: '🇮🇳',
    initials: 'PN',
    color: '#f05a28',
    rating: 5,
  },
  {
    quote: 'Within 10 months of going live with MedXL, patient satisfaction scores jumped 31% and we unlocked ₹6.2 Cr in additional annual revenue. Their team mapped our clinical workflows from day one and built something our nurses and front-desk staff genuinely enjoy using every day.',
    name: 'Dr. Ramesh Iyer',
    role: 'Director of Hospital Operations',
    org: 'Apollo Tier-2 Care Network, Coimbatore',
    flag: '🇮🇳',
    initials: 'RI',
    color: '#1a9c5b',
    rating: 5,
  },
  {
    quote: 'MedXL\'s analytics module slashed our administrative paperwork by 52% and improved billing accuracy by 38%. We integrated it with our existing Ayushman Bharat workflows in under two weeks. The ROI was clearly visible within the first quarter — remarkable for a public-private hospital our size.',
    name: 'Dr. Sneha Kulkarni',
    role: 'Operations Head',
    org: 'Pune District Medical Centre',
    flag: '🇮🇳',
    initials: 'SK',
    color: '#5b6af5',
    rating: 5,
  },
]

export default function Testimonials() {
  const [active, setActive]     = useState(0)
  const [fading, setFading]     = useState(false)

  useEffect(() => {
    const t = setInterval(() => transition((active + 1) % testimonials.length), 7000)
    return () => clearInterval(t)
  }, [active])

  const transition = (idx) => {
    setFading(true)
    setTimeout(() => { setActive(idx); setFading(false) }, 350)
  }

  const t = testimonials[active]

  return (
    <>
      <style>{`
        .testimonials {
          padding: 120px 56px;
          background: var(--ink-2);
          position: relative; overflow: hidden;
        }
        .testimonials::before {
          content: '';
          position: absolute; top: -200px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(155,39,175,.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .testimonials-layout {
          display: grid; grid-template-columns: 1fr 1.4fr;
          gap: 72px; align-items: center;
          max-width: 1200px; margin: 0 auto;
        }

        /* Left */
        .testi-tabs { display: flex; flex-direction: column; gap: 12px; margin-top: 36px; }
        .testi-tab {
          display: flex; align-items: center; gap: 14px;
          padding: 16px 18px; border-radius: 14px;
          cursor: pointer; border: 1px solid transparent;
          transition: all .3s var(--ease);
        }
        .testi-tab.active {
          background: var(--t-bg); border-color: var(--t-border);
        }
        .testi-tab:not(.active):hover {
          background: var(--fog); border-color: var(--border);
        }
        .testi-avatar {
          width: 44px; height: 44px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display); font-size: 16px; font-weight: 800;
          color: var(--ink); flex-shrink: 0;
          transition: all .3s;
        }
        .testi-tab-info {}
        .testi-tab-name {
          font-family: var(--font-body); font-size: 14px; font-weight: 600;
          color: var(--fog-3); transition: color .3s; line-height: 1.2;
        }
        .testi-tab.active .testi-tab-name { color: var(--cream); }
        .testi-tab-org { font-size: 12px; color: var(--fog-3); margin-top: 2px; opacity: .6; }
        .testi-tab-flag { margin-left: auto; font-size: 20px; }

        /* Right — card */
        .testi-card-wrap { position: relative; }
        .testi-card {
          background: var(--ink-3); border: 1px solid var(--border);
          border-radius: 24px; padding: 48px;
          transition: opacity .35s, transform .35s var(--ease);
          position: relative; overflow: hidden;
        }
        .testi-card.fading { opacity: 0; transform: translateY(12px); }
        .testi-card::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
          background: var(--t-color); transition: background .4s;
        }
        .testi-quote-icon {
          font-family: var(--font-display); font-size: 80px;
          color: var(--t-color); opacity: .15; line-height: 1;
          position: absolute; top: 20px; left: 36px; pointer-events: none;
          transition: color .4s;
        }
        .testi-stars {
          display: flex; gap: 4px; margin-bottom: 24px;
          font-size: 16px; position: relative; z-index: 1;
        }
        .testi-text {
          font-family: var(--font-body); font-size: 17px; font-weight: 300;
          font-style: italic; color: rgba(245,240,232,.85);
          line-height: 1.8; margin-bottom: 32px; position: relative; z-index: 1;
          letter-spacing: 0.1px;
        }
        .testi-author {
          display: flex; align-items: center; gap: 14px;
          padding-top: 24px; border-top: 1px solid var(--border);
        }
        .testi-author-avatar {
          width: 48px; height: 48px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display); font-size: 17px; font-weight: 800;
          color: var(--ink); flex-shrink: 0;
        }
        .testi-author-name {
          font-family: var(--font-body); font-size: 15px; font-weight: 700;
          color: var(--cream);
        }
        .testi-author-role { font-size: 13px; color: var(--fog-3); margin-top: 2px; }
        .testi-author-org  { font-size: 12px; color: var(--fog-3); opacity: .6; }
        .testi-flag { margin-left: auto; font-size: 28px; }

        /* Nav dots */
        .testi-nav {
          display: flex; gap: 8px; margin-top: 24px; justify-content: flex-end;
        }
        .testi-dot {
          height: 3px; border-radius: 2px; flex: 1; max-width: 40px;
          background: var(--border); cursor: pointer; transition: all .3s;
        }
        .testi-dot.active { background: var(--t-color); max-width: 60px; }

        @media (max-width: 960px) {
          .testimonials { padding: 80px 20px; }
          .testimonials-layout { grid-template-columns: 1fr; gap: 40px; }
          .testi-text { font-size: 16px; }
        }
      `}</style>

      <section className="testimonials">
        <div className="testimonials-layout">
          {/* Left */}
          <div>
            <div className="section-eyebrow">Testimonials</div>
            <h2 className="section-title">Clients <em>Love</em> Us</h2>
            <div className="testi-tabs">
              {testimonials.map((tm, i) => (
                <div
                  key={i}
                  className={`testi-tab ${i === active ? 'active' : ''}`}
                  onClick={() => transition(i)}
                  style={{
                    '--t-color':  tm.color,
                    '--t-bg':     tm.color + '14',
                    '--t-border': tm.color + '35',
                  }}
                >
                  <div className="testi-avatar" style={{background: tm.color}}>
                    {tm.initials}
                  </div>
                  <div className="testi-tab-info">
                    <div className="testi-tab-name">{tm.name}</div>
                    <div className="testi-tab-org">{tm.org}</div>
                  </div>
                  <span className="testi-tab-flag">{tm.flag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="testi-card-wrap">
            <div
              className={`testi-card ${fading ? 'fading' : ''}`}
              style={{ '--t-color': t.color }}
            >
              <div className="testi-quote-icon">"</div>
              <div className="testi-stars">
                {Array(t.rating).fill('⭐').map((s,i)=><span key={i}>{s}</span>)}
              </div>
              <p className="testi-text">{t.quote}</p>
              <div className="testi-author">
                <div className="testi-author-avatar" style={{background:t.color}}>
                  {t.initials}
                </div>
                <div>
                  <div className="testi-author-name">{t.name}</div>
                  <div className="testi-author-role">{t.role}</div>
                  <div className="testi-author-org">{t.org}</div>
                </div>
                <span className="testi-flag">{t.flag}</span>
              </div>
            </div>
            <div className="testi-nav">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`testi-dot ${i === active ? 'active' : ''}`}
                  style={i === active ? {background: t.color} : {}}
                  onClick={() => transition(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}