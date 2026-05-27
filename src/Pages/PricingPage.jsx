import { useState, useEffect, useRef } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Footer from '../components/Footer'
import '../styles/medxl-hero.css'
// import '../styles/medxl.css'  // root tokens — already global

/*
 * PricingPage.jsx — MedXL Design System v2.0
 *
 * Hero shell     → medxl-hero.css (.mh-*)
 * Right column   → .mh-card + price variant (.mh-price-row / .mh-promo / .mh-tag-list)
 *                  + orbital rings (.mh-rings absolute, desktop only)
 * Page sections  → medxl.css (.mx-*)
 * Page-local     → <style> block for plans/addons/table/faq only
 */

/* ── DATA ─────────────────────────────────────────────── */
const plans = [
  {
    id: 'starter', name: 'Starter', price: '₹1L', featured: false,
    desc: 'For small hospitals setting up their digital presence for the first time.',
    cta: { label: 'Get Started', href: 'https://api.whatsapp.com/send/?phone=919884021188' },
    features: [
      { text: 'Professional Hospital Website (5 pages)',       included: true  },
      { text: 'Online Appointment Booking System',             included: true  },
      { text: 'Web Hosting + SSL (99.9% uptime)',              included: true  },
      { text: '3 Social Media Profiles Setup (FB, IG, GMB)',   included: true  },
      { text: 'Professional Domain Email (up to 10 accounts)', included: true  },
      { text: 'WhatsApp Business Integration',                 included: true  },
      { text: 'Basic On-page SEO Setup',                       included: true  },
      { text: 'Monthly Website Performance Report',            included: true  },
      { text: '2 Complimentary IT Consultations/year',         included: true  },
      { text: 'Email Helpdesk Support (48hr response)',        included: true  },
      { text: 'HMS / EHR Software',                            included: false },
      { text: 'Social Media Content Management',               included: false },
      { text: 'Google Ads Management',                         included: false },
      { text: 'Dedicated Account Manager',                     included: false },
      { text: '24×7 Helpdesk',                                 included: false },
    ],
  },
  {
    id: 'growth', name: 'Growth', price: '₹2.5L', badge: '✦ MOST POPULAR', featured: true,
    desc: 'For established hospitals scaling their digital operations and clinical workflows.',
    cta: { label: 'Get Started', href: 'https://api.whatsapp.com/send/?phone=919884021188' },
    features: [
      { text: 'Everything in Starter',                             included: true  },
      { text: 'Hospital Management System (HMS Cloud)',            included: true  },
      { text: 'Electronic Health Records (EHR)',                   included: true  },
      { text: 'OP Billing & Revenue Management',                   included: true  },
      { text: '5 Social Media Profiles + 8 posts/month',           included: true  },
      { text: 'Google Ads & Local SEO Management',                 included: true  },
      { text: 'Google Business Profile Optimization',              included: true  },
      { text: 'IT Helpdesk — 8×6, Phone + Email',                  included: true  },
      { text: 'Dedicated Account Manager',                         included: true  },
      { text: 'Staff IT Onboarding Training (up to 20 staff)',     included: true  },
      { text: '4 Complimentary IT Consultations/year',             included: true  },
      { text: 'Monthly Analytics & KPI Report',                    included: true  },
      { text: 'Domain Email — up to 25 accounts',                  included: true  },
      { text: 'Cybersecurity Basics (SSL, Firewall, RBAC)',        included: true  },
      { text: 'Hospital Mobile App',                               included: false },
    ],
  },
  {
    id: 'enterprise', name: 'Enterprise', price: '₹5L', featured: false,
    desc: 'Full IT transformation for growing multi-specialty hospitals with complex needs.',
    cta: { label: 'Talk to Us', href: 'https://api.whatsapp.com/send/?phone=919884021188' },
    features: [
      { text: 'Everything in Growth',                             included: true },
      { text: 'Hospital Mobile App (Android + iOS)',              included: true },
      { text: 'LMS — Staff Learning Management System',           included: true },
      { text: 'Lab Information System (LIMS)',                    included: true },
      { text: 'Telemedicine Integration',                         included: true },
      { text: 'Data Analytics Dashboard (real-time BI)',          included: true },
      { text: 'IT Helpdesk — 24×7, SLA-backed',                  included: true },
      { text: 'Full Cybersecurity Audit + HIPAA Compliance',     included: true },
      { text: 'ABDM / ABHA Integration',                         included: true },
      { text: 'Monthly IT Strategy Consultation',                included: true },
      { text: 'Unlimited Staff Training Sessions',               included: true },
      { text: 'Custom Software Integrations (on request)',       included: true },
      { text: 'Priority Feature Requests',                       included: true },
      { text: 'NABL / NABH IT Compliance Advisory',              included: true },
      { text: 'Dedicated Senior Account Manager',                included: true },
    ],
  },
]

const addOns = [
  { icon:'📱', name:'Hospital Mobile App (Android + iOS)',  desc:'Branded patient app with appointments, reports, payments & telemedicine', price:'₹1.2L/yr' },
  { icon:'📡', name:'Telemedicine Platform',               desc:'Video consult, e-prescription, follow-up scheduling — ABDM ready',        price:'₹80K/yr'  },
  { icon:'📚', name:'LMS — Staff Learning Management',     desc:'CME, compliance training, CPD tracking for all hospital staff',            price:'₹60K/yr'  },
  { icon:'🔬', name:'Lab Information System (LIMS)',        desc:'Full lab workflow from test ordering to digital report delivery',          price:'₹75K/yr'  },
  { icon:'📊', name:'Advanced Analytics & BI Dashboard',   desc:'Real-time hospital KPIs, revenue analytics, patient flow insights',        price:'₹50K/yr'  },
  { icon:'🔒', name:'Full Cybersecurity Audit & HIPAA',    desc:'Annual penetration testing, audit report, compliance certification support',price:'₹40K/yr'  },
]

const compareRows = [
  { feature:'Hospital Website (pages)',   starter:'5 pages',      growth:'10 pages',       enterprise:'Unlimited'     },
  { feature:'Appointment Booking',        starter:'✓',            growth:'✓',              enterprise:'✓'             },
  { feature:'Cloud Hosting (uptime SLA)', starter:'99.9%',        growth:'99.9%',          enterprise:'99.95%'        },
  { feature:'Social Media Profiles',      starter:'3 profiles',   growth:'5 + 8 posts/mo', enterprise:'All + Managed' },
  { feature:'Professional Email',         starter:'10',           growth:'25',             enterprise:'Unlimited'     },
  { feature:'HMS (Cloud)',                starter:'–',            growth:'✓',              enterprise:'✓'             },
  { feature:'EHR',                        starter:'–',            growth:'✓',              enterprise:'✓'             },
  { feature:'LMS',                        starter:'–',            growth:'–',              enterprise:'✓'             },
  { feature:'IT Helpdesk',               starter:'Email 48hr',   growth:'8×6 Phone',      enterprise:'24×7 SLA'      },
  { feature:'IT Consultations/year',      starter:'2',            growth:'4',              enterprise:'Monthly'       },
  { feature:'Dedicated Account Manager',  starter:'–',            growth:'✓',              enterprise:'Senior'        },
  { feature:'Mobile App',                 starter:'–',            growth:'–',              enterprise:'✓'             },
]

const faqs = [
  { q:'Are there any hidden charges or setup fees?',          a:'No. All plans are fully inclusive — there are no setup fees, onboarding fees, or hidden charges. The annual price you see is everything. GST is applicable as per government norms.' },
  { q:'Can I pay monthly instead of annually?',              a:'Our plans are structured as annual contracts for the best value. However, we do offer quarterly payment options for hospitals that prefer smaller instalments. Please speak to our team for a custom payment schedule.' },
  { q:'Can I upgrade mid-year?',                             a:'Yes. You can upgrade your plan at any time during the contract year, and we pro-rate the cost difference. Downgrades happen at annual renewal.' },
  { q:'Is there a free trial?',                              a:"We offer a complimentary 30-minute IT consultation and a live software demo before any commitment. We don't offer a generic free trial, but the demo is tailored to your hospital's specific needs — which is far more useful." },
  { q:'What happens when my contract ends?',                 a:'You can renew at the same rate (subject to annual price revision), upgrade to a higher plan, or choose to exit. All your data can be exported and handed over in standard formats. No data lock-in.' },
]

/* ── COMPONENT ────────────────────────────────────────── */
export default function PricingPage() {
  const blobRef   = useRef(null)
  const [openFaq, setOpenFaq] = useState(null)
  const location  = useLocation()

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

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) el.scrollIntoView({ behavior:'smooth' })
    }
  }, [location])

  return (
    <>
      <style>{`
        /* ── Plans ── */
        .pr-plans-section { padding:80px 0; background:var(--bg-base); }
        .pr-plans-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:28px; align-items:start; }
        .pr-tier { background:var(--bg-raised); border:1px solid var(--border-faint); border-radius:20px; padding:36px 28px; position:relative; transition:transform .3s var(--ease), border-color .3s; }
        .pr-tier:hover { transform:translateY(-6px); border-color:var(--border-default); }
        .pr-tier.featured { border-color:var(--border-default); background:linear-gradient(160deg,rgba(197,45,181,.1),var(--bg-raised)); }
        .pr-tier.featured::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:var(--brand-grad); border-radius:20px 20px 0 0; }
        .pr-tier-badge { position:absolute; top:-13px; left:50%; transform:translateX(-50%); background:var(--brand-grad); color:#fff; font-family:var(--font-mono); font-size:10px; font-weight:500; letter-spacing:1.5px; text-transform:uppercase; padding:5px 18px; border-radius:100px; white-space:nowrap; }
        .pr-tier-name  { font-family:var(--font-mono); font-size:10px; font-weight:500; color:var(--text-muted); letter-spacing:3px; text-transform:uppercase; margin-bottom:12px; }
        .pr-tier-price { font-family:var(--font-display); font-size:2.6rem; font-weight:800; color:var(--text-primary); letter-spacing:-1.5px; margin-bottom:4px; line-height:1; }
        .pr-tier-price small { font-size:1rem; color:var(--text-muted); font-family:var(--font-body); font-weight:300; letter-spacing:0; }
        .pr-tier-desc  { color:var(--text-muted); font-size:13.5px; font-weight:300; margin:12px 0 20px; padding-bottom:20px; border-bottom:1px solid var(--border-faint); line-height:1.65; }
        .pr-feat-list  { display:flex; flex-direction:column; gap:8px; margin-bottom:28px; }
        .pr-feat-item  { display:flex; align-items:flex-start; gap:9px; font-size:13px; line-height:1.5; color:var(--text-secondary); }
        .pr-feat-item.off { opacity:.35; }
        .pr-feat-check { font-size:11px; font-weight:700; flex-shrink:0; margin-top:2px; width:16px; }
        .pr-feat-item:not(.off) .pr-feat-check { color:var(--brand-light); }
        .pr-feat-item.off      .pr-feat-check { color:var(--text-disabled); }
        .pr-tier-btn   { width:100%; text-align:center; justify-content:center; text-decoration:none; }
        .pr-custom-note { margin-top:28px; padding:20px 24px; background:rgba(197,45,181,.06); border:1px solid var(--border-faint); border-radius:12px; font-size:14px; color:var(--text-muted); text-align:center; }
        .pr-custom-note strong { color:var(--text-primary); }
        .pr-custom-note a { color:var(--brand-light); font-weight:600; text-decoration:none; margin-left:6px; }

        /* ── Add-ons ── */
        .pr-addons-section { padding:80px 0; background:var(--bg-surface); border-top:1px solid var(--border-faint); border-bottom:1px solid var(--border-faint); }
        .pr-addon-list { display:flex; flex-direction:column; gap:14px; }
        .pr-addon { background:var(--bg-raised); border:1px solid var(--border-faint); border-radius:14px; padding:20px 24px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px; transition:border-color .25s, background .25s; }
        .pr-addon:hover { border-color:var(--border-default); background:var(--bg-elevated); }
        .pr-addon-left { display:flex; align-items:center; gap:14px; }
        .pr-addon-icon { width:44px; height:44px; border-radius:12px; background:rgba(197,45,181,.1); border:1px solid var(--border-faint); display:flex; align-items:center; justify-content:center; font-size:20px; flex-shrink:0; }
        .pr-addon-name { font-family:var(--font-display); font-weight:600; font-size:14.5px; color:var(--text-primary); margin-bottom:3px; }
        .pr-addon-desc { font-size:13px; color:var(--text-muted); font-weight:300; }
        .pr-addon-price { font-family:var(--font-display); font-size:1.3rem; font-weight:800; color:var(--brand-light); white-space:nowrap; letter-spacing:-.5px; }

        /* ── Compare table ── */
        .pr-compare-section { padding:80px 0; background:var(--bg-base); }
        .pr-table-wrap { overflow-x:auto; }
        .pr-table { width:100%; border-collapse:collapse; font-size:13.5px; }
        .pr-table thead tr { background:var(--bg-raised); border-bottom:2px solid var(--border-default); }
        .pr-table th { padding:16px 20px; font-family:var(--font-display); font-weight:700; font-size:13px; letter-spacing:-.3px; }
        .pr-table th:first-child { text-align:left; color:var(--text-primary); }
        .pr-table th.col-starter { text-align:center; color:var(--text-muted); }
        .pr-table th.col-growth  { text-align:center; color:var(--brand-light); }
        .pr-table th.col-ent     { text-align:center; color:var(--text-muted); }
        .pr-table tbody tr { border-bottom:1px solid var(--border-faint); transition:background .2s; }
        .pr-table tbody tr:hover { background:var(--bg-raised); }
        .pr-table tbody tr:nth-child(even) { background:rgba(197,45,181,.02); }
        .pr-table tbody tr:nth-child(even):hover { background:var(--bg-raised); }
        .pr-table td { padding:13px 20px; }
        .pr-table td:first-child { color:var(--text-secondary); font-weight:500; }
        .pr-table td:not(:first-child) { text-align:center; color:var(--text-muted); font-size:13px; }
        .pr-table td.growth-col { color:var(--brand-light); font-weight:600; }
        .pr-table td.dash { color:var(--text-disabled); }

        /* ── FAQ ── */
        .pr-faq-section { padding:80px 0; background:var(--bg-surface); border-top:1px solid var(--border-faint); }
        .pr-faq-list { max-width:680px; margin:0 auto; display:flex; flex-direction:column; gap:10px; }
        .pr-faq-item { background:var(--bg-raised); border:1px solid var(--border-faint); border-radius:14px; overflow:hidden; transition:border-color .25s; }
        .pr-faq-item.open { border-color:var(--border-default); }
        .pr-faq-q { display:flex; align-items:center; justify-content:space-between; padding:18px 22px; cursor:pointer; font-family:var(--font-display); font-size:14.5px; font-weight:600; color:var(--text-primary); gap:12px; user-select:none; }
        .pr-faq-q:hover { color:var(--brand-light); }
        .pr-faq-icon { font-size:20px; font-weight:300; flex-shrink:0; color:var(--brand-light); transition:transform .3s var(--ease); line-height:1; }
        .pr-faq-item.open .pr-faq-icon { transform:rotate(45deg); }
        .pr-faq-a { max-height:0; overflow:hidden; transition:max-height .35s var(--ease), padding .3s; font-size:14px; color:var(--text-muted); font-weight:300; line-height:1.75; }
        .pr-faq-item.open .pr-faq-a { max-height:300px; padding:0 22px 20px; }

        /* Pricing-page ring center override (shows ₹1L text not a logo) */
        .pr-ring-center-text {
          position:absolute; top:50%; left:50%;
          transform:translate(-50%,-50%);
          width:110px; height:110px; border-radius:50%;
          background:var(--bg-raised);
          border:2px solid var(--border-default);
          display:flex; align-items:center; justify-content:center;
          font-family:var(--font-display); font-size:18px; font-weight:800;
          box-shadow:0 0 60px rgba(197,45,181,.25), inset 0 0 24px rgba(197,45,181,.08);
        }
        .pr-ring-center-text span {
          background:var(--brand-grad);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }

        /* Responsive */
        @media (max-width:1024px) { .pr-plans-grid { grid-template-columns:1fr 1fr; } .pr-tier:last-child { grid-column:1/-1; max-width:480px; margin:0 auto; width:100%; } }
        @media (max-width:680px)  { .pr-plans-grid { grid-template-columns:1fr; }    .pr-tier:last-child { grid-column:auto; max-width:none; } }
      `}</style>

      <div style={{ background:'var(--bg-base)', color:'var(--text-primary)', fontFamily:'var(--font-body)', paddingTop:70 }}>

        {/* ══ HERO ══════════════════════════════════════════════ */}
        <section className="mh-hero" id="pricing-hero">
          <div className="mh-hero-mesh" />
          <div className="mh-hero-grid" />
          <div className="mh-hero-blob" ref={blobRef} />

          {/* Orbital rings — desktop, absolute positioned, text center */}
          <div className="mh-rings">
            <div className="mh-ring mh-ring-4" />
            <div className="mh-ring mh-ring-3" />
            <div className="mh-ring mh-ring-2"><div className="mh-ring-dot mh-ring-dot-alt" /></div>
            <div className="mh-ring mh-ring-1"><div className="mh-ring-dot" /></div>
            {/* Text badge center instead of logo */}
            <div className="pr-ring-center-text"><span>₹1L</span></div>
          </div>

          <div className="mh-inner">

            {/* ── LEFT: COPY ── */}
            <div>
              <div className="mh-breadcrumb">
                <Link to="/">Home</Link> › <span>Pricing</span>
              </div>

              <div className="mh-eyebrow">
                <span className="mh-pulse" />
                Transparent Annual Pricing
              </div>

              <h1 className="mh-h1">
                One Annual Plan.<br />
                <em>Your Entire IT</em><br />
                Department.
              </h1>

              <p className="mh-desc">
                No surprise bills. No fragmented vendors. One transparent annual price covers
                your hospital's complete IT needs — from website to HMS to cybersecurity.
              </p>

              <div className="mh-actions">
                <a href="https://api.whatsapp.com/send/?phone=919884021188" className="mh-btn-primary" target="_blank" rel="noreferrer">
                  Start From ₹1L/yr →
                </a>
                <a href="tel:+919884021188" className="mh-btn-secondary">
                  📞 +91 98840 21188
                </a>
              </div>

              <div className="mh-trust">
                {[
                  { icon:'✓',  num:'No Setup Fees', label:'Zero hidden costs' },
                  { icon:'🏥', num:'1,800+',         label:'Hospitals Served'  },
                  { icon:'⭐', num:'99.9%',           label:'Uptime SLA'        },
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

            {/* ── RIGHT: PRICE CARD ── */}
            <div className="mh-card-wrap">
              <div className="mh-card">
                {/* Header */}
                <div className="mh-card-header">
                  <div className="mh-card-hl">
                    <div className="mh-card-icon">💼</div>
                    <div>
                      <div className="mh-card-title">MedXL Annual IT Package</div>
                      <div className="mh-card-sub">
                        <span className="mh-card-dot" />
                        3 Plans · All Inclusive
                      </div>
                    </div>
                  </div>
                  <div className="mh-card-chip">FY 2025–26</div>
                </div>

                {/* Body — price variant */}
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
                    {['Starter ₹1L','Growth ₹2.5L','Enterprise ₹5L','No Setup Fees','Upgrade Anytime'].map(t => (
                      <span className="mh-tag-chip" key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="mh-card-footer">
                  <div className="mh-card-status">
                    <span className="mh-card-status-dot" />
                    All Plans Available
                  </div>
                  <a href="https://api.whatsapp.com/send/?phone=919884021188" className="mh-card-footer-btn" target="_blank" rel="noreferrer">
                    Get a Quote →
                  </a>
                </div>
              </div>

              {/* Floating badges */}
              <div className="mh-float mh-float-1">
                <span className="mh-float-icon">⭐</span>
                <div>
                  <div className="mh-float-num">99.9%</div>
                  <div className="mh-float-label">Uptime SLA</div>
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

        {/* ══ PLANS ══ */}
        <section className="pr-plans-section">
          <div className="mx-container">
            <div className="mx-text-center" style={{ marginBottom:48 }}>
              <div className="mx-tag">All Plans</div>
              <h2 className="mx-section-title">Choose Your Plan</h2>
              <p className="mx-section-sub">All plans include complimentary IT consultations, cloud hosting, and dedicated support.</p>
            </div>
            <div id="plans" className="pr-plans-grid">
              {plans.map(plan => (
                <div key={plan.id} className={`pr-tier${plan.featured ? ' featured' : ''}`}>
                  {plan.badge && <div className="pr-tier-badge">{plan.badge}</div>}
                  <div className="pr-tier-name">{plan.name}</div>
                  <div className="pr-tier-price">{plan.price}<small> /year</small></div>
                  <div className="pr-tier-desc">{plan.desc}</div>
                  <ul className="pr-feat-list">
                    {plan.features.map((f, i) => (
                      <li key={i} className={`pr-feat-item${!f.included ? ' off' : ''}`}>
                        <span className="pr-feat-check">{f.included ? '✓' : '–'}</span>
                        {f.text}
                      </li>
                    ))}
                  </ul>
                  <a href={plan.cta.href} target="_blank" rel="noreferrer"
                    className={`pr-tier-btn ${plan.featured ? 'mx-btn-primary' : 'mx-btn-ghost'}`}>
                    {plan.cta.label}
                  </a>
                </div>
              ))}
            </div>
            <div className="pr-custom-note">
              <strong>Need a custom plan?</strong>{' '}
              We tailor packages for hospitals with specific requirements, multi-branch setups, or AYUSH facilities.
              <a href="mailto:info@medxl.in">Contact us →</a>
            </div>
          </div>
        </section>

        {/* ══ ADD-ONS ══ */}
        <section className="pr-addons-section">
          <div className="mx-container">
            <div style={{ marginBottom:40 }}>
              <div className="mx-tag">Optional Add-ons</div>
              <h2 className="mx-section-title">Enhance Any Plan</h2>
              <p className="mx-section-sub">Available as annual add-ons to any base plan. Prices are per year.</p>
            </div>
            <div className="pr-addon-list">
              {addOns.map(a => (
                <div className="pr-addon" key={a.name}>
                  <div className="pr-addon-left">
                    <div className="pr-addon-icon">{a.icon}</div>
                    <div>
                      <div className="pr-addon-name">{a.name}</div>
                      <div className="pr-addon-desc">{a.desc}</div>
                    </div>
                  </div>
                  <div className="pr-addon-price">{a.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ COMPARE TABLE ══ */}
        <section className="pr-compare-section">
          <div className="mx-container">
            <div className="mx-text-center" style={{ marginBottom:40 }}>
              <div className="mx-tag">Compare Plans</div>
              <h2 className="mx-section-title">What's in Each Plan</h2>
            </div>
            <div className="pr-table-wrap">
              <table className="pr-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="col-starter">Starter ₹1L</th>
                    <th className="col-growth">Growth ₹2.5L</th>
                    <th className="col-ent">Enterprise ₹5L</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, i) => (
                    <tr key={i}>
                      <td>{row.feature}</td>
                      <td className={row.starter === '–' ? 'dash' : ''}>{row.starter}</td>
                      <td className={`growth-col${row.growth === '–' ? ' dash' : ''}`}>{row.growth}</td>
                      <td className={row.enterprise === '–' ? 'dash' : ''}>{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section className="pr-faq-section">
          <div className="mx-container">
            <div className="mx-text-center" style={{ marginBottom:40 }}>
              <div className="mx-tag">FAQ</div>
              <h2 className="mx-section-title">Pricing Questions Answered</h2>
            </div>
            <div className="pr-faq-list">
              {faqs.map((faq, i) => (
                <div key={i} className={`pr-faq-item${openFaq === i ? ' open' : ''}`}>
                  <div className="pr-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {faq.q}
                    <span className="pr-faq-icon">+</span>
                  </div>
                  <div className="pr-faq-a">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}