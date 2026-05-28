import { useEffect, useRef, useState } from 'react'

function useCountUp(target, started) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!started) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / 2000, 1)
      const e = 1 - Math.pow(1 - p, 4)
      setVal(Math.floor(e * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, started])
  return val
}

export default function About() {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  const c0 = useCountUp(20,started)
  const c1 = useCountUp(150, started)
  const c2 = useCountUp(40,   started)
  const c3 = useCountUp(2,   started)
  const counts = [c0, c1, c2, c3]

  return (
    <>
      <style>{`
        .about {
          padding: 100px 56px;
          background: var(--bg-surface);
          position: relative; overflow: hidden;
        }
        .about-inner {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: center;
          max-width: 1200px; margin: 0 auto;
        }
        /* Left */
        .about-items { display: flex; flex-direction: column; gap: 12px; margin-top: 28px; }
        .about-item {
          display: flex; align-items: flex-start; gap: 16px;
          padding: 18px 20px; border-radius: 14px;
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          transition: all .3s var(--ease);
        }
        .about-item:hover {
          border-color: var(--border-default);
          background: var(--bg-elevated);
          transform: translateX(6px);
        }
        .about-item-icon {
          width: 38px; height: 38px; border-radius: 10px; flex-shrink: 0;
          background: rgba(197,45,181,.12); border: 1px solid var(--border-subtle);
          display: flex; align-items: center; justify-content: center; font-size: 16px;
        }
        .about-item-title {
          font-family: var(--font-display); font-size: 14px; font-weight: 700;
          color: var(--text-primary); margin-bottom: 4px;
        }
        .about-item-desc { font-size: 13px; color: var(--text-muted); line-height: 1.6; }
        /* Right — counters */
        .about-counters { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .about-counter {
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 18px; padding: 28px 24px;
          position: relative; overflow: hidden;
          transition: border-color .3s, transform .3s var(--spring);
        }
        .about-counter:hover {
          border-color: var(--border-default);
          transform: translateY(-5px);
          box-shadow: 0 20px 48px rgba(0,0,0,.3);
        }
        .about-counter::after {
          content: ''; position: absolute; bottom: -30px; right: -30px;
          width: 110px; height: 110px; border-radius: 50%;
          background: var(--c-glow); filter: blur(28px);
          pointer-events: none; opacity: 0; transition: opacity .4s;
        }
        .about-counter:hover::after { opacity: 1; }
        .about-counter-icon { font-size: 26px; margin-bottom: 14px; display: block; }
        .about-counter-num {
          font-family: var(--font-display); font-weight: 800; font-size: 42px;
          background: var(--brand-grad);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; line-height: 1; letter-spacing: -1.5px;
          display: flex; align-items: baseline; gap: 3px;
        }
        .about-counter-suf {
          font-size: 22px;
          background: var(--brand-grad);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .about-counter-label {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--text-muted); margin-top: 8px;
        }
        .about-quote {
          margin-top: 20px; padding: 22px;
          background: rgba(197,45,181,.07);
          border: 1px solid var(--border-subtle);
          border-radius: 14px; position: relative;
        }
        .about-quote::before {
          content: '"'; font-family: var(--font-display); font-size: 56px;
          color: var(--brand-hot); position: absolute; top: -8px; left: 14px;
          line-height: 1; opacity: .3;
        }
        .about-quote p {
          font-size: 13.5px; color: var(--text-secondary);
          line-height: 1.75; font-style: italic; padding-top: 8px;
        }
        @media (max-width: 960px) {
          .about { padding: 80px 20px; }
          .about-inner { grid-template-columns: 1fr; gap: 48px; }
        }
      `}</style>
      <section className="about" id="about" ref={ref}>
        <div className="about-inner">
          <div>
            <div className="section-eyebrow">About MedXL</div>
            <h2 className="section-title">Mission &amp; <em>Vision</em></h2>
            <p className="section-desc"> We understand that mid-sized hospitals have complex needs but lack a dedicated IT team. MedXL fills that gap — completely. Whether you're a single-speciality hospital, a community health centre, or a growing multi-specialty facility, we have a plan for you.</p>
            <div className="about-items">
              {[
                { icon:'🎯', title:'Single-speciality & super-speciality hospitals', },
                { icon:'🔒', title:'Community hospitals & nursing homes in Tier 2/3 cities',},
                { icon:'🤝', title:'Multi-speciality hospitals looking to digitise operations', },
                { icon:'⭐', title:'Diagnostic centres, maternity hospitals & surgical centres', },
              ].map(i=>(
                <div className="about-item" key={i.title}>
                  <div className="about-item-icon">{i.icon}</div>
                  <div>
                    <div className="about-item-title">{i.title}</div>
                    <div className="about-item-desc">{i.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="about-counters">
              {[
                { icon:'🏥', num:c0, suf:'+', label:'Min. Bed Strength', glow:'rgba(197,45,181,.3)' },
                { icon:'✅', num:c1, suf:'+', label:'Max Beds(Core)',  glow:'rgba(245,166,35,.3)' },
                { icon:'⭐', num:c2, suf:'%', label:'Wait Times', glow:'rgba(96,165,250,.3)'  },
                { icon:'📅', num:c3, suf:'cr',label:'Avg. Annual Savings',  glow:'rgba(168,85,247,.3)'  },
              ].map((a,i)=>(
                <div className="about-counter" key={a.label} style={{'--c-glow':a.glow}}>
                  <span className="about-counter-icon">{a.icon}</span>
                  <div className="about-counter-num">
                    {counts[i].toLocaleString()}
                    <span className="about-counter-suf">{a.suf}</span>
                  </div>
                  <div className="about-counter-label">{a.label}</div>
                </div>
              ))}
            </div>
            <div className="about-quote">
              <p>99.9% Uptime SLA. MedXL's solutions led to a Guaranteed for all plans. Backed by cloud infrastructure.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}