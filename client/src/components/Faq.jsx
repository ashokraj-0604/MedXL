import { useState } from 'react'

const faqs = [
  {
    q: 'How to choose a software development company for healthcare institutions?',
    a: 'Selecting the right software development company for healthcare requires focusing on vendors that specialize in the medical industry and understand its unique challenges and regulatory requirements. A company like MedXL offers customized solutions tailored to healthcare institutions, ensuring compliance, efficiency, and improved patient care.',
  },
  {
    q: 'Why should I choose MedXL as my Healthcare Data Analytics and Business Intelligence Partner?',
    a: 'MedXL stands out as a leading healthcare Data Analytics company due to our deep industry expertise, proven track record, and innovative approaches to unlocking actionable insights from complex medical data. We leverage state-of-the-art analytics tools, AI-driven predictive models, and comprehensive business intelligence strategies.',
  },
  {
    q: 'How does MedXL ensure Data Security and regulatory compliance in Healthcare Analytics?',
    a: 'MedXL adheres strictly to HIPAA and other healthcare data protection regulations, implementing advanced encryption methods, secure cloud infrastructures, and robust access controls. Our team of compliance experts routinely audits and updates security protocols, ensuring all patient health information remains confidential and fully compliant.',
  },
  {
    q: 'What types of healthcare organizations can benefit from MedXL\'s Data Analytics solutions?',
    a: 'MedXL\'s data analytics and business intelligence solutions are tailored for a wide range of healthcare providers — including hospitals, clinics, diagnostic centers, and large-scale health networks — looking to enhance patient care, streamline operations, and drive growth through data-driven decision-making.',
  },
  {
    q: 'How do MedXL\'s healthcare Data Analytics Solutions improve patient outcomes?',
    a: 'By integrating structured and unstructured healthcare data into customized dashboards and predictive analytics tools, MedXL empowers healthcare administrators and clinicians to identify care gaps, anticipate patient needs, optimize resource allocation, and standardize best practices — resulting in better outcomes and lower costs.',
  },
  {
    q: 'Can MedXL customize its Healthcare Data Analytics offerings to meet my unique needs?',
    a: 'Absolutely. MedXL\'s approach is highly consultative and adaptable. We collaborate with each client to understand their clinical, operational, and financial objectives, then design bespoke analytics solutions, performance dashboards, and predictive models that align perfectly with the organization\'s strategic goals.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <>
      <style>{`
        .faq-section {
          padding: 120px 60px;
          background: var(--navy-2);
          position: relative;
        }
        .faq-inner {
          display: grid; grid-template-columns: 1fr 1.6fr;
          gap: 80px; align-items: start; max-width: 1200px; margin: 0 auto;
        }
        .faq-left { position: sticky; top: 100px; }
        .faq-left-desc {
          font-size: 15px; color: var(--text-muted); line-height: 1.75;
          margin-top: 20px; font-weight: 300;
        }
        .faq-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg, #1354f9, #3b7bff);
          color: #fff; padding: 13px 28px; border-radius: 10px;
          font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 14px;
          text-decoration: none; margin-top: 32px;
          box-shadow: 0 8px 24px rgba(19,84,249,0.35);
          transition: all 0.3s;
        }
        .faq-cta:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(19,84,249,0.5); }
        .faq-list { display: flex; flex-direction: column; gap: 12px; }
        .faq-item {
          background: rgba(5,13,26,0.7);
          border: 1px solid rgba(59,123,255,0.1);
          border-radius: 16px; overflow: hidden;
          transition: border-color 0.3s;
        }
        .faq-item.open { border-color: rgba(19,84,249,0.3); }
        .faq-question {
          display: flex; align-items: center; justify-content: space-between;
          padding: 22px 28px; cursor: pointer; gap: 16px;
          transition: background 0.3s;
        }
        .faq-question:hover { background: rgba(19,84,249,0.04); }
        .faq-q-text {
          font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 600;
          color: rgba(232,238,255,0.85); line-height: 1.4;
        }
        .faq-item.open .faq-q-text { color: #fff; }
        .faq-icon {
          width: 28px; height: 28px; border-radius: 50%;
          background: rgba(19,84,249,0.1); border: 1px solid rgba(19,84,249,0.2);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; font-size: 16px; color: #3b7bff;
          transition: all 0.3s; font-weight: 700;
        }
        .faq-item.open .faq-icon {
          background: rgba(19,84,249,0.2); transform: rotate(45deg);
        }
        .faq-answer {
          max-height: 0; overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), padding 0.3s;
          padding: 0 28px;
        }
        .faq-item.open .faq-answer { max-height: 300px; padding: 0 28px 24px; }
        .faq-a-text {
          font-size: 14px; color: var(--text-muted); line-height: 1.75; font-weight: 300;
          border-top: 1px solid rgba(59,123,255,0.08); padding-top: 20px;
        }
        @media (max-width: 960px) {
          .faq-section { padding: 80px 24px; }
          .faq-inner { grid-template-columns: 1fr; gap: 48px; }
          .faq-left { position: relative; top: 0; }
        }
      `}</style>

      <section className="faq-section">
        <div className="faq-inner">
          <div className="faq-left">
            <div className="section-label">F.A.Q.</div>
            <h2 className="section-title">Need Support?</h2>
            <p className="faq-left-desc">
              Everything you need to know about MedXL's healthcare technology solutions.
              Can't find the answer you're looking for? Talk to our team.
            </p>
            <a href="#contact" className="faq-cta">Ask a Question →</a>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
                <div className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                  <span className="faq-q-text">{f.q}</span>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-answer">
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