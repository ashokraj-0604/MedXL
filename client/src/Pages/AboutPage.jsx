import { useEffect, useRef } from 'react'
import MedXLLogo from '../components/MedXLLogo'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/medxl-hero.css'  // ← shared hero primitives
// import '../styles/medxl.css'     // ← root tokens + section primitives (already global)

/*
 * AboutPage.jsx — MedXL Design System v2.0
 *
 * ── HOW THIS PAGE WORKS ──
 *   Hero shell  → 100% from medxl-hero.css (.mh-*)
 *   Sections    → medxl.css primitives (.mx-*)
 *   Page-only   → tiny <style> block below for parts that
 *                 don't belong in the shared stylesheet
 *
 * ── REUSE PATTERN ──
 *   Copy the hero JSX below (everything inside <section className="mh-hero">)
 *   into ProductPage.jsx / PricePage.jsx, swap:
 *     • .mh-card-body children  (stats / price display / feature list)
 *     • eyebrow text, h1, desc, CTAs
 *     • floating badge numbers/labels
 *     • .mh-card-chip top-right text
 *   Everything else (rings, blob, mesh, buttons, trust, card frame) stays identical.
 */

export default function AboutPage() {
  const blobRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const fn = (e) => {
      if (!blobRef.current) return
      const x = (e.clientX / window.innerWidth  - 0.5) * 40
      const y = (e.clientY / window.innerHeight - 0.5) * 40
      blobRef.current.style.transform =
        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
    }
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])

  return (
    <>
      {/*
       * PAGE-SPECIFIC STYLES ONLY
       * Nothing here that belongs to the hero shell — that lives in medxl-hero.css.
       * Only about-page section styles go here.
       */}
      <style>{`
        /* ── Why-item slide-in row ── */
        .ab-why-item {
          display:flex; align-items:flex-start; gap:16px;
          padding:18px 20px;
          background:var(--bg-raised); border:1px solid var(--border-faint);
          border-radius:14px; transition:all .3s; margin-bottom:12px;
        }
        .ab-why-item:hover {
          border-color:var(--border-default);
          transform:translateX(8px);
          background:var(--bg-elevated);
        }
        .ab-why-icon { font-size:22px; flex-shrink:0; margin-top:2px; }
        .ab-why-title {
          font-family:var(--font-body); font-size:14.5px; font-weight:700;
          color:var(--text-primary); margin-bottom:4px;
        }

        /* ── Case study card ── */
        .ab-case {
          background:var(--bg-raised); border:1px solid var(--border-faint);
          border-radius:16px; padding:22px; margin-bottom:12px; transition:all .3s;
          position:relative; overflow:hidden;
        }
        .ab-case::before {
          content:''; position:absolute; top:0; left:0; right:0; height:2px;
          background:var(--brand-grad); transform:scaleX(0); transform-origin:left;
          transition:transform .35s var(--ease);
        }
        .ab-case:hover { border-color:var(--border-default); background:var(--bg-elevated); }
        .ab-case:hover::before { transform:scaleX(1); }
        .ab-case-loc {
          font-family:var(--font-mono); font-size:10px; letter-spacing:2px;
          color:var(--brand-hot); margin-bottom:6px; text-transform:uppercase;
        }
        .ab-case-name {
          font-family:var(--font-display); font-size:16px; font-weight:700;
          color:var(--text-primary); margin-bottom:4px;
        }
        .ab-case-service {
          font-size:12.5px; color:var(--text-muted);
          font-family:var(--font-mono); letter-spacing:.3px; margin-bottom:12px;
        }
        .ab-case-tags { display:flex; gap:7px; flex-wrap:wrap; }
        .ab-case-tag {
          background:rgba(197,45,181,.12); color:var(--brand-light);
          border:1px solid rgba(197,45,181,.26); border-radius:100px;
          padding:3px 11px; font-size:10px; font-weight:500;
          font-family:var(--font-mono); letter-spacing:.5px; text-transform:uppercase;
        }

        /* Feature list bullet override */
        .ab-feature-list li::before {
          content: '✦'; color: var(--brand-hot); font-size:10px; flex-shrink:0;
        }
      `}</style>

      <div style={{ paddingTop: 70, background: 'var(--bg-base)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
        <Navbar />

        {/* ══════════════════════════════════════════════════════
            HERO
            Reuse this entire <section> block in other pages.
            Only swap the marked CUSTOMISE zones.
        ══════════════════════════════════════════════════════ */}
        <section className="mh-hero" id="about-hero">

          {/* Background — never touch these */}
          <div className="mh-hero-mesh" />
          <div className="mh-hero-grid" />
          <div className="mh-hero-blob" ref={blobRef} />

          {/* Orbital rings — never touch */}
          <div className="mh-rings">
            <div className="mh-ring mh-ring-4" />
            <div className="mh-ring mh-ring-3" />
            <div className="mh-ring mh-ring-2"><div className="mh-ring-dot mh-ring-dot-alt" /></div>
            <div className="mh-ring mh-ring-1"><div className="mh-ring-dot" /></div>
            <div className="mh-ring-center"><MedXLLogo size={50} /></div>
          </div>

          <div className="mh-inner">

            {/* ── LEFT: COPY ─────────────────────────────────
                CUSTOMISE: breadcrumb, eyebrow, h1, desc, CTAs, trust badges
            ─────────────────────────────────────────────── */}
            <div>
              {/* Breadcrumb */}
              <div className="mh-breadcrumb">
                <a href="/">Home</a> › <span>About Us</span>
              </div>

              {/* Eyebrow */}
              <div className="mh-eyebrow">
                <span className="mh-pulse" />
                Our Story
              </div>

              {/* Headline */}
              <h1 className="mh-h1">
                Technology Built<br />
                for <span className="grad">Hospital Hearts</span>
              </h1>

              {/* Description */}
              <p className="mh-desc">
                We started with one mission: give every hospital — regardless of size —
                access to enterprise-grade IT without the enterprise complexity or cost.
                Founded in Chennai, built for all of India.
              </p>

              {/* CTAs */}
              <div className="mh-actions">
                <a href="/contact" className="mh-btn-primary">Book Free Consultation →</a>
                <a href="/price"   className="mh-btn-secondary">View Pricing</a>
              </div>

              {/* Trust strip */}
              <div className="mh-trust">
                {[
                  { icon:'🏥', num:'1,800+', label:'Hospitals Served' },
                  { icon:'⭐', num:'20+',    label:'Yrs Experience'   },
                  { icon:'✅', num:'99.9%',  label:'Uptime SLA'       },
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

            {/* ── RIGHT: CARD ────────────────────────────────
                CUSTOMISE: card-chip, card-title, card-sub,
                           card-body children, card-footer-btn href/label,
                           floating badge numbers/labels
            ─────────────────────────────────────────────── */}
            <div className="mh-card-wrap">
              <div className="mh-card">

                {/* Card header */}
                <div className="mh-card-header">
                  <div className="mh-card-hl">
                    <div className="mh-card-icon">🏥</div>
                    <div>
                      <div className="mh-card-title">MedXL Ventures Pvt. Ltd.</div>
                      <div className="mh-card-sub">
                        <span className="mh-card-dot" />
                        Chennai · Pan-India Delivery
                      </div>
                    </div>
                  </div>
                  <div className="mh-card-chip">Est. 2004</div>  {/* ← CUSTOMISE */}
                </div>

                {/* Card body — CUSTOMISE this section per page */}
                <div className="mh-card-body">

                  {/* Stat grid (About / Product pages) */}
                  <div className="mh-stat-grid">
                    {[
                      { num:'20+',   label:'Years Experience', gold:false },
                      { num:'1800+', label:'Hospitals Served', gold:false },
                      { num:'99.9%', label:'Uptime SLA',       gold:true  },
                      { num:'₹1L',   label:'Plans Start From', gold:false },
                    ].map(s => (
                      <div className="mh-stat-cell" key={s.label}>
                        <div className={`mh-stat-num${s.gold ? ' gold' : ''}`}>{s.num}</div>
                        <div className="mh-stat-lbl">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Service tags */}
                  <div className="mh-tag-list">
                    {['HMS','EHR','LMS','SEO','Hosting','Social Media','Cybersecurity'].map(t => (
                      <span className="mh-tag-chip" key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Card footer */}
                <div className="mh-card-footer">
                  <div className="mh-card-status">
                    <span className="mh-card-status-dot" />
                    All Systems Operational
                  </div>
                  <a href="/contact" className="mh-card-footer-btn">Get Started →</a>  {/* ← CUSTOMISE */}
                </div>
              </div>

              {/* Floating badges — CUSTOMISE num/label */}
              <div className="mh-float mh-float-1">
                <span className="mh-float-icon">⭐</span>
                <div>
                  <div className="mh-float-num">40% ↓</div>
                  <div className="mh-float-label">Wait Times</div>
                </div>
              </div>
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
        {/* ══ END REUSABLE HERO ══ */}


        {/* ══════════════════════════════════════════════════════
            SECTION: MISSION / VISION / HISTORY
            medxl.css: .mx-section .mx-grid-3 .mx-card .mx-icon-box
        ══════════════════════════════════════════════════════ */}
        <section className="mx-section">
          <div className="mx-container">
            <div className="mx-grid-3">
              {[
                {
                  icon:'🕰️', cls:'brand',
                  title:'Our History',
                  text:'Founded in Chennai, MedXL Ventures was born from 20+ years of combined healthcare IT experience. We witnessed first-hand how mid-sized hospitals struggled with fragmented IT — siloed vendors, no accountability, and no one who truly understood clinical workflows.',
                },
                {
                  icon:'🎯', cls:'gold',
                  title:'Our Mission',
                  text:'To empower 30–150 bedded hospitals across India with affordable, end-to-end IT services — so clinical teams spend every minute on patient care, not IT firefighting. One annual plan, one dedicated team, zero IT headaches.',
                },
                {
                  icon:'🔭', cls:'brand',
                  title:'Our Vision',
                  text:'A future where every Indian hospital — from a 30-bed nursing home to a 150-bed multi-specialty facility — operates with the digital efficiency of a world-class institution. MedXL will be the backbone of that transformation.',
                },
              ].map(c => (
                <div className="mx-card" key={c.title}>
                  <div className={`mx-icon-box ${c.cls}`}>{c.icon}</div>
                  <h3 style={{ fontFamily:'var(--font-display)', fontSize:18, fontWeight:700, color:'var(--text-primary)', marginBottom:10, letterSpacing:'-.3px' }}>{c.title}</h3>
                  <p className="mx-muted">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════
            SECTION: STORY + STATS
            medxl.css: .mx-section-surface .mx-grid-2 .mx-stat-card
        ══════════════════════════════════════════════════════ */}
        <section className="mx-section-surface">
          <div className="mx-container">
            <div className="mx-grid-2">

              <div>
                <div className="mx-tag">Why We Exist</div>
                <h2 className="mx-section-title">
                  We Saw the Gap.<br />We Built the <em>Bridge.</em>
                </h2>
                <p className="mx-muted" style={{ marginBottom:14 }}>
                  India's large hospital chains have dedicated IT departments. Small clinics make do with basic tools.
                  But the 30–150 bedded hospital — the backbone of Indian healthcare — is caught in the middle.
                  Too big for basic tools, too small to hire an IT team.
                </p>
                <p className="mx-muted" style={{ marginBottom:24 }}>
                  MedXL was created to serve exactly this segment — acting as the hospital's full IT department,
                  from website and social media to HMS, EHR, and LMS, all under one annual package from ₹1 Lakh/year.
                </p>
                <ul className="mx-feature-list ab-feature-list">
                  {[
                    '20+ years of specialized healthcare IT expertise',
                    '1,800+ hospitals and clinics served',
                    'Headquartered in Chennai with pan-India delivery',
                    'Dedicated to hospitals — no other industry verticals',
                    'HIPAA, DPDP Act & ABDM compliance built-in',
                  ].map(i => <li key={i}>{i}</li>)}
                </ul>
              </div>

              <div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
                  {[
                    { num:'20+',   label:'Years of Experience', gold:false },
                    { num:'1800+', label:'Hospitals Served',    gold:false },
                    { num:'99.9%', label:'Uptime SLA',          gold:true  },
                    { num:'₹1L',   label:'Plans Start From',    gold:false },
                  ].map(s => (
                    <div className="mx-stat-card" key={s.label}>
                      <div className={`mx-stat-num${s.gold ? ' gold' : ''}`}>{s.num}</div>
                      <div className="mx-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════
            SECTION: VALUES
            medxl.css: .mx-section .mx-grid-3 .mx-card
        ══════════════════════════════════════════════════════ */}
        <section className="mx-section">
          <div className="mx-container">
            <div className="mx-text-center" style={{ marginBottom:52 }}>
              <div className="mx-tag">Our Values</div>
              <h2 className="mx-section-title">What We <em>Stand For</em></h2>
              <p className="mx-section-sub">Six principles that guide every product we build and every service we deliver.</p>
            </div>
            <div className="mx-grid-3">
              {[
                { icon:'🏥', title:'Healthcare First',      text:'Every decision is filtered through one question: does this help hospitals deliver better patient care?' },
                { icon:'🔒', title:'Privacy & Security',    text:'Patient data is sacred. End-to-end encryption, zero-trust architecture, and regulatory compliance at the core.' },
                { icon:'💡', title:'Radical Simplicity',    text:'Healthcare is complex enough. Our software is simple, intuitive, and easy to adopt without heavy training.' },
                { icon:'🤝', title:'Accountability',        text:'One dedicated account manager. One number to call. We own every outcome for our hospital partners.' },
                { icon:'📈', title:'Measurable Impact',     text:'We track real outcomes — reduced wait times, improved satisfaction, cost savings — not just uptime.' },
                { icon:'🌱', title:'Long-Term Partnership', text:'We grow with our hospitals. As bed strength grows from 30 to 150+, our services scale alongside you.' },
              ].map(v => (
                <div className="mx-card" key={v.title}>
                  <span style={{ fontSize:30, marginBottom:14, display:'block' }}>{v.icon}</span>
                  <div style={{ fontFamily:'var(--font-display)', fontSize:16, fontWeight:700, color:'var(--text-primary)', marginBottom:9, letterSpacing:'-.3px' }}>{v.title}</div>
                  <p className="mx-muted" style={{ fontSize:13.5 }}>{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ══════════════════════════════════════════════════════
            SECTION: WHY BETTER + CASE STUDIES
            medxl.css: .mx-section-surface .mx-grid-2
        ══════════════════════════════════════════════════════ */}
        <section className="mx-section-surface">
          <div className="mx-container">
            <div className="mx-grid-2">

              <div>
                <div className="mx-tag">Why MedXL</div>
                <h2 className="mx-section-title">
                  Why Our Services are<br /><em>Better Than Others</em>
                </h2>
                <div style={{ marginTop:28 }}>
                  {[
                    { icon:'✅', title:'Healthcare-Only Focus',               text:'We serve only hospitals. No retail, no logistics — pure healthcare IT expertise.' },
                    { icon:'🎯', title:'One Annual Plan, Everything Included', text:'No surprise bills. No fragmented vendors. One transparent price covers everything.' },
                    { icon:'⏱️', title:'Go Live in Weeks, Not Months',        text:'Our onboarding gets your full digital setup live in 3–6 weeks.' },
                    { icon:'📊', title:'Transparent Monthly Reports',          text:'Monthly performance reports — traffic, patient acquisition, system usage, all included.' },
                  ].map(w => (
                    <div className="ab-why-item" key={w.title}>
                      <span className="ab-why-icon">{w.icon}</span>
                      <div>
                        <div className="ab-why-title">{w.title}</div>
                        <p className="mx-muted" style={{ fontSize:13.5 }}>{w.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mx-tag">Case Studies</div>
                <h2 className="mx-section-title">Results That <em>Speak</em></h2>
                <div style={{ marginTop:28 }}>
                  {[
                    { loc:'// MUMBAI · 150 BEDS',   name:'Arogya General Hospital',        service:'Cloud HMS + Resource Management',    tags:['40% ↓ Wait Times','₹2Cr Saved/yr'] },
                    { loc:'// BANGALORE · 80 BEDS', name:"Sunshine Children's Hospital",    service:'EHR + Patient Communication App',    tags:['50% ↓ Paperwork','35% ↑ Satisfaction'] },
                    { loc:'// RANCHI · 200 BEDS',   name:'Lakshmi Multispecialty Hospital', service:'EHR + Telemedicine + Staff Training', tags:['30% ↓ ER Visits','₹75L Added Revenue'] },
                  ].map(c => (
                    <div className="ab-case" key={c.name}>
                      <div className="ab-case-loc">{c.loc}</div>
                      <div className="ab-case-name">{c.name}</div>
                      <div className="ab-case-service">{c.service}</div>
                      <div className="ab-case-tags">
                        {c.tags.map(t => <span className="ab-case-tag" key={t}>{t}</span>)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}