const plans = [
  {
    name: 'STARTER',
    price: '₹1L',
    tagColor: '#a78bfa',
    iconBg: 'linear-gradient(135deg, #1a0d2e, #3b1f6b)',
    icon: '🏥',
    subtitle: 'For small hospitals setting up their digital presence.',
    features: [
      'Professional Hospital Website (5 pages)',
      'Online Appointment Booking System',
      'Web Hosting + SSL (99.9% uptime)',
      '3 Social Media Profiles Setup (FB, IG, GMB)',
      'Professional Domain Email Setup',
      'WhatsApp Business Integration',
      'Basic SEO Setup',
      '2 Complimentary IT Consultations/yr',
      'Monthly Performance Reports',
    ],
    popular: false,
  },
  {
    name: 'GROWTH',
    price: '₹2.5L',
    tagColor: '#2dd4bf',
    iconBg: 'linear-gradient(135deg, #022c22, #065f46)',
    icon: '📈',
    subtitle: 'For established hospitals scaling operations digitally.',
    features: [
      'Everything in Starter',
      'Hospital Management System (HMS – Cloud)',
      'Electronic Health Records (EHR)',
      '5 Social Media Profiles + Monthly Posts',
      'Google Ads + SEO Management',
      'IT Helpdesk (8×6 Support)',
      'Dedicated Account Manager',
      'Staff IT Onboarding Training',
      '4 Complimentary IT Consultations/yr',
      'OP Billing Software',
    ],
    popular: true,
  },
  {
    name: 'ENTERPRISE',
    price: '₹5L',
    tagColor: '#f472b6',
    iconBg: 'linear-gradient(135deg, #2d0a1a, #6b1f3b)',
    icon: '🏢',
    subtitle: 'Full-stack IT transformation for growing multi-specialty hospitals.',
    features: [
      'Everything in Growth',
      'Hospital Mobile App (Android + iOS)',
      'LMS (Learning Management System)',
      'Lab Information System (LIMS)',
      'Telemedicine Integration',
      'Data Analytics Dashboard',
      'IT Helpdesk (24×7)',
      'Cybersecurity Audit + HIPAA Compliance',
      'Monthly IT Consultation + Strategy Session',
      'Custom Integrations on Request',
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <>
      <style>{`
        .pricing {
          padding: 120px 56px;
          background: var(--ink-2);
          position: relative; overflow: hidden;
        }
        .pricing-header {
          display: flex; align-items: flex-end;
          justify-content: space-between; flex-wrap: wrap; gap: 24px;
          max-width: 1200px; margin: 0 auto 64px;
        }
        .pricing-cta-link {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--purple-light);
          text-decoration: none; display: flex; align-items: center; gap: 8px;
          transition: gap .3s;
        }
        .pricing-cta-link:hover { gap: 14px; }

        .pricing-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 24px; max-width: 1200px; margin: 0 auto;
        }

        .plan-card {
          background: var(--ink-3); border: 1px solid var(--border);
          border-radius: 24px; overflow: hidden;
          display: flex; flex-direction: column;
          transition: all .4s var(--ease); cursor: pointer;
          position: relative;
        }
        .plan-card.popular {
          border-color: var(--p-color);
          box-shadow: 0 0 0 1px var(--p-color);
        }
        .plan-card:hover {
          transform: translateY(-8px);
          border-color: var(--p-color);
          box-shadow: 0 32px 64px rgba(0,0,0,.4), 0 0 0 1px var(--p-color);
        }
        .plan-card:hover .plan-thumb-icon { transform: scale(1.15); }
        .plan-card:hover .plan-name { color: var(--p-color); }

        .popular-badge {
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          background: var(--p-color); color: #0d0f0e;
          font-family: var(--font-mono); font-size: 9px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          padding: 4px 14px; border-radius: 0 0 10px 10px;
          z-index: 2;
        }

        .plan-thumb {
          height: 160px; position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }
        .plan-thumb-bg { position: absolute; inset: 0; }
        .plan-thumb-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(13,15,14,.95) 100%);
        }
        .plan-thumb-icon {
          font-size: 48px; position: relative; z-index: 1;
          transition: transform .4s var(--spring);
          filter: drop-shadow(0 8px 20px rgba(0,0,0,.5));
        }

        .plan-body { padding: 28px; display: flex; flex-direction: column; flex: 1; }

        .plan-name {
          font-family: var(--font-mono); font-size: 11px; font-weight: 600;
          letter-spacing: 2.5px; color: var(--p-color);
          margin-bottom: 10px; transition: color .3s;
        }

        .plan-price {
          font-family: var(--font-display); font-size: 42px; font-weight: 700;
          color: var(--cream); line-height: 1; margin-bottom: 4px;
          letter-spacing: -1px;
        }
        .plan-price span {
          font-size: 14px; font-weight: 400; color: var(--fog-3);
          letter-spacing: 0; margin-left: 4px;
        }

        .plan-subtitle {
          font-size: 13px; color: var(--fog-3); line-height: 1.6;
          font-weight: 300; margin-bottom: 24px; margin-top: 8px;
        }

        .plan-divider {
          height: 1px; background: var(--border); margin-bottom: 20px;
        }

        .plan-features {
          list-style: none; padding: 0; margin: 0; flex: 1;
          display: flex; flex-direction: column; gap: 10px;
        }
        .plan-feature {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 13px; color: var(--fog-3); line-height: 1.5; font-weight: 300;
        }
        .plan-feature-check {
          color: var(--p-color); font-size: 11px; margin-top: 2px;
          flex-shrink: 0; font-weight: 700;
        }

        .plan-footer {
          margin-top: 24px; padding-top: 20px;
          border-top: 1px solid var(--border);
        }
        .plan-btn {
          width: 100%; padding: 12px 20px; border-radius: 10px;
          font-family: var(--font-mono); font-size: 11px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase; cursor: pointer;
          border: 1px solid var(--p-color); transition: all .3s;
          background: transparent; color: var(--p-color);
          text-decoration: none; 
        }
        .plan-card.popular .plan-btn {
          background: var(--p-color); color: #0d0f0e;
        }
        .plan-btn:hover {
          background: var(--p-color); color: #0d0f0e;
        }

        @media (max-width: 1024px) { .pricing-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 640px) {
          .pricing { padding: 80px 20px; }
          .pricing-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="pricing" id="pricing">
        <div className="pricing-header">
          <div>
            <div className="section-eyebrow">Annual IT Packages</div>
            <h2 className="section-title">One Plan. <em>Your Entire IT Department.</em></h2>
            <p style={{fontSize:'14px', color:'var(--fog-3)', marginTop:'12px', maxWidth:'480px', lineHeight:'1.7', fontWeight:300}}>
              Transparent, all-inclusive annual pricing. No surprise bills. No vendor chaos.<br/>
              Just a single dedicated IT partner that knows hospitals.
            </p>
          </div>
          <a href="/price" className="pricing-cta-link">Get a custom quote →</a>
        </div>

        <div className="pricing-grid">
          {plans.map((p, i) => (
            <div
              className={`plan-card${p.popular ? ' popular' : ''}`}
              key={i}
              style={{ '--p-color': p.tagColor }}
            >
              {p.popular && <div className="popular-badge">Most Popular</div>}

              <div className="plan-thumb">
                <div className="plan-thumb-bg" style={{ background: p.iconBg }} />
                <div className="plan-thumb-overlay" />
                <span className="plan-thumb-icon">{p.icon}</span>
              </div>

              <div className="plan-body">
                <div className="plan-name">{p.name}</div>
                <div className="plan-price">
                  {p.price}<span>/ year</span>
                </div>
                <p className="plan-subtitle">{p.subtitle}</p>
                <div className="plan-divider" />
                <ul className="plan-features">
                  {p.features.map((f, j) => (
                    <li className="plan-feature" key={j}>
                      <span className="plan-feature-check">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="plan-footer">
                  <a href="/price" className="plan-btn"> Get Started →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}