import { useState } from 'react'

const faqs = [
  { q: 'What does the ₹1L/year plan actually include?', a: 'The Starter plan at ₹1L/year includes a professional 5-page hospital website with online appointment booking, web hosting (99.9% uptime SLA), SSL certificate, 3 social media profile setups (Facebook, Instagram, Google My Business), domain email setup, WhatsApp Business integration, basic SEO, 2 complimentary IT consultation sessions, and monthly performance reports. Everything is managed end-to-end by MedXL — no technical knowledge needed from your side.'},
  { q: "Is my patient data secure with MedXL's cloud solutions?", a: 'Absolutely. MedXL adheres to HIPAA, DPDP Act (India), and ABDM guidelines. All data is encrypted at rest and in transit, hosted on secure Indian cloud infrastructure, with role-based access controls, audit logs, and regular cybersecurity audits. Enterprise plans include a dedicated cybersecurity audit and compliance review.' },
  { q: 'How long does it take to go live?', a: 'Most hospitals are live within 3–6 weeks from contract signing. The Starter plan (website + social setup) typically takes 2–3 weeks. HMS and EHR implementations on Growth/Enterprise plans take 4–8 weeks depending on complexity, data migration needs, and staff training schedules.' },
  { q: 'Do you provide support after go-live?', a: "Yes — ongoing support is the core of MedXL's value. All plans include a dedicated account manager for your hospital. Starter plans get email + ticket support. Growth plans include 8×6 phone helpdesk. Enterprise plans include 24×7 support with escalation SLAs. Monthly strategy consultations are included in Growth and Enterprise plans." },
  { q: 'Can I upgrade my plan mid-year?', a: "Yes. You can upgrade from Starter to Growth or Growth to Enterprise at any point during the contract year, and we'll pro-rate the difference. There are no lock-in penalties for upgrading. Downgrading can be done at the time of annual renewal." },
  { q: 'What types of hospitals does MedXL serve?', a: "Our core focus is 30–150 bedded hospitals in India — single-speciality, multi-speciality, community hospitals, nursing homes, maternity hospitals, surgical centres, and diagnostic centres. We have special packages for Tier 2 and Tier 3 city hospitals and are experienced with NABL, NABH, and Ayushman Bharat-empanelled facilities." },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <>
      <style>{`
        .faq {
          padding: 120px 56px;
          background: var(--ink);
          position: relative; overflow: hidden;
        }
        .faq-inner {
          display: grid; grid-template-columns: 1fr 1.6fr;
          gap: 80px; align-items: start;
          max-width: 1200px; margin: 0 auto;
        }
        .faq-left { position: sticky; top: 100px; }
        .faq-left-desc {
          font-size: 15px; color: var(--fog-3); line-height: 1.8;
          margin-top: 20px; font-weight: 300;
        }
        .faq-cta {
          display: inline-flex; align-items: center; gap: 10px;
          margin-top: 32px;
        }

        /* Decorative */
        .faq-decoration {
          margin-top: 40px; padding: 24px;
          background: var(--purple-dim); border: 1px solid var(--border-em);
          border-radius: 16px;
        }
        .faq-deco-title {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 3px;
          text-transform: uppercase; color: var(--purple-light); margin-bottom: 12px;
        }
        .faq-deco-items { display: flex; flex-direction: column; gap: 8px; }
        .faq-deco-item {
          display: flex; align-items: center; gap: 10px;
          font-size: 13px; color: var(--fog-3);
        }
        .faq-deco-dot {
          width: 6px; height: 6px; border-radius: 50%; background: var(--purple-light); flex-shrink: 0;
        }

        /* Accordion */
        .faq-list { display: flex; flex-direction: column; gap: 10px; }
        .faq-item {
          background: var(--ink-2); border: 1px solid var(--border);
          border-radius: 16px; overflow: hidden; transition: border-color .3s;
        }
        .faq-item.open { border-color: var(--border-em); }
        .faq-q {
          display: flex; align-items: center; justify-content: space-between;
          padding: 22px 26px; cursor: pointer; gap: 16px;
          transition: background .25s;
        }
        .faq-q:hover { background: var(--fog); }
        .faq-q-text {
          font-family: var(--font-body); font-size: 15px; font-weight: 600;
          color: var(--fog-3); line-height: 1.4; transition: color .25s;
        }
        .faq-item.open .faq-q-text { color: var(--cream); }
        .faq-toggle {
          width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0;
          background: var(--fog); border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; font-weight: 300; color: var(--fog-3);
          transition: all .35s var(--spring);
          line-height: 1;
        }
        .faq-item.open .faq-toggle {
          background: var(--purple-dim); border-color: var(--border-em);
          color: var(--purple-light); transform: rotate(45deg);
        }
        .faq-a {
          max-height: 0; overflow: hidden;
          transition: max-height .4s var(--ease), padding .3s;
          padding: 0 26px;
        }
        .faq-item.open .faq-a { max-height: 300px; padding: 0 26px 24px; }
        .faq-a-text {
          font-size: 14px; color: var(--fog-3); line-height: 1.8; font-weight: 300;
          border-top: 1px solid var(--border); padding-top: 18px;
        }

        @media (max-width: 960px) {
          .faq { padding: 80px 20px; }
          .faq-inner { grid-template-columns: 1fr; gap: 48px; }
          .faq-left { position: relative; top: 0; }
        }
      `}</style>

      <section className="faq" id="faq">
        <div className="faq-inner">
          <div className="faq-left">
            <div className="section-eyebrow">F.A.Q.</div>
            <h2 className="section-title">Got <em>Questions?</em></h2>
            <p className="faq-left-desc">
              Everything you need to know about working with MedXL.
              Can't find the answer? Our team responds within 2 hours.
            </p>
            <div className="faq-cta">
              <a href="#contact" className="btn-primary">Ask Us Anything →</a>
            </div>
            <div className="faq-decoration">
              <div className="faq-deco-title">What you get</div>
              <div className="faq-deco-items">
                {['Free initial consultation','24-hour response guarantee','Dedicated project manager','Post-launch support included'].map(i => (
                  <div className="faq-deco-item" key={i}>
                    <div className="faq-deco-dot" />
                    {i}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
                <div className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                  <span className="faq-q-text">{f.q}</span>
                  <span className="faq-toggle">+</span>
                </div>
                <div className="faq-a">
                  <p className="faq-a-text">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}