import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import MedXLLogo from './MedXLLogo'
import '../styles/medxl-hero.css'  // ← all hero primitives live here now
// import '../styles/medxl.css'     // ← root tokens (already global)

/*
 * Hero.jsx — MedXL Design System v2.0
 *
 * All hero styles come from medxl-hero.css (.mh-*).
 * This file has ZERO inline <style> — it's pure JSX.
 *
 * If you need to tweak the home hero specifically without
 * affecting other pages, add a scoped override here:
 *   <style>{` .mh-hero { min-height: 100vh; } `}</style>
 * (home uses 100vh; inner pages use 92vh via the shared sheet)
 */

export default function Hero() {
  const blobRef = useRef(null)

  useEffect(() => {
    const fn = (e) => {
      if (!blobRef.current) return
      const x = (e.clientX / window.innerWidth  - 0.5) * 50
      const y = (e.clientY / window.innerHeight - 0.5) * 50
      blobRef.current.style.transform =
        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
    }
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])

  return (
    <>
      {/* Home-only override: full viewport height instead of 92vh */}
      <style>{`
        #home.mh-hero { min-height: 100vh; }
      `}</style>

      <section className="mh-hero" id="home">

        {/* Background layers */}
        <div className="mh-hero-mesh" />
        <div className="mh-hero-grid" />
        <div className="mh-hero-blob" ref={blobRef} />

        {/* Orbital rings — desktop only */}
        <div className="mh-rings">
          <div className="mh-ring mh-ring-4" />
          <div className="mh-ring mh-ring-3" />
          <div className="mh-ring mh-ring-2"><div className="mh-ring-dot mh-ring-dot-alt" /></div>
          <div className="mh-ring mh-ring-1"><div className="mh-ring-dot" /></div>
          <div className="mh-ring-center">
            <MedXLLogo size={52} />
          </div>
        </div>

        <div className="mh-inner">

          {/* ── LEFT: COPY ── */}
          <div>
            <div className="mh-eyebrow">
              <span className="mh-pulse" />
              India's #1 Dedicated Hospital IT Partner
            </div>

            <h1 className="mh-h1">
              Your Hospital's<br />
              Complete IT Team<br />
              <em>One Annual Plan</em>
            </h1>

            <p className="mh-desc">
              End-to-end IT service &amp; support crafted exclusively for 30–150 bedded
              hospitals. Website, HMS, EHR, Social Media, LMS &amp; more — all managed for you.
            </p>

            <div className="mh-actions">
              <Link to="/price#plans" className="mh-btn-primary">
                See Plans From ₹1L/yr →
              </Link>
              <a href="tel:+919884021188" className="mh-btn-secondary">
                📞 +91 98840 21188
              </a>
            </div>

            <div className="mh-trust">
              {[
                { icon: '🏥', num: '1,800+', label: 'Hospitals Served' },
                { icon: '✅', num: '20+',    label: 'Yrs Expertise'    },
                { icon: '⭐', num: '99.9%',  label: 'Uptime SLA'       },
              ].map(b => (
                <div className="mh-trust-badge" key={b.label}>
                  <div className="mh-trust-icon">{b.icon}</div>
                  <div>
                    <div className="mh-trust-num">{b.num}</div>
                    <div className="mh-trust-label">{b.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: PRICING CARD ── */}
          <div className="mh-card-wrap">
            <div className="mh-card">

              {/* Card header */}
              <div className="mh-card-header">
                <div className="mh-card-hl">
                  <div className="mh-card-icon">🏥</div>
                  <div>
                    <div className="mh-card-title">MedXL Annual IT Package</div>
                    <div className="mh-card-sub">
                      <span className="mh-card-dot" />
                      All-inclusive · Zero Hiring · Zero Headache
                    </div>
                  </div>
                </div>
                <div className="mh-card-chip">FY 2025–26</div>
              </div>

              {/* Card body — price variant */}
              <div className="mh-card-body">
                <div className="mh-price-row">
                  <span className="mh-price">₹1L</span>
                  <span className="mh-price-suffix">/ year onwards</span>
                </div>

                <div className="mh-promo">
                  <span className="mh-promo-icon">✦</span>
                  Complimentary IT Consultations Included
                </div>

                <div className="mh-tag-list">
                  {['Website + Booking', 'Hosting', 'Social Media', 'HMS', 'EHR', 'LMS'].map(tag => (
                    <span className="mh-tag-chip" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div className="mh-card-footer">
                <div className="mh-card-status">
                  <span className="mh-card-status-dot" />
                  All Systems Operational
                </div>
                <Link to="/price#plans" className="mh-card-footer-btn">View Full Details →</Link>
              </div>
            </div>

            {/* Floating badge — purple */}
            <div className="mh-float mh-float-1">
              <span className="mh-float-icon">⭐</span>
              <div>
                <div className="mh-float-num">40% ↓</div>
                <div className="mh-float-label">Wait Times</div>
              </div>
            </div>

            {/* Floating badge — gold */}
            <div className="mh-float mh-float-2">
              <span className="mh-float-icon">🚀</span>
              <div>
                <div className="mh-float-num">₹2 Cr</div>
                <div className="mh-float-label">Saved / Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}