import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import MedXLLogo from '../components/MedXLLogo'

const sections = [
  {
    id: 'acceptance',
    num: '01',
    title: 'Acceptance of Terms',
    content: [
      'By accessing or using any MedXL product, website, software, or service (collectively, the "Services"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, you must not access or use our Services.',
      'These Terms constitute a legally binding agreement between you ("User", "you", or "your") and MedXL Ventures Private Limited, a company incorporated under the Companies Act 2013, with its registered office in Chennai, Tamil Nadu, India ("MedXL", "we", "us", or "our").',
      'We reserve the right to update or modify these Terms at any time. Continued use of the Services after any such changes constitutes your acceptance of the new Terms. We will notify registered users of material changes via email or in-app notification.',
    ],
  },
  {
    id: 'services',
    num: '02',
    title: 'Description of Services',
    content: [
      'MedXL provides healthcare technology services including but not limited to: Hospital Management Systems (HMS), Electronic Health Record (EHR) systems, Learning Management Systems (LMS), Laboratory Information Management Systems (LIMS), telemedicine platforms, digital marketing services, website development, cloud hosting, and related IT consulting for healthcare institutions.',
      'Our Services are intended exclusively for healthcare organisations, medical professionals, and their authorised representatives. Individual consumers accessing healthcare services through a MedXL-powered platform are subject to that platform\'s separate terms.',
      'We reserve the right to modify, suspend, or discontinue any part of the Services with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of Services.',
    ],
  },
  {
    id: 'eligibility',
    num: '03',
    title: 'Payment Terms',
    content: [
      "Annual plans are invoiced at the start of the contract year. Payment is due within 15 days of invoice date unless otherwise agreed. Late payments attract interest at 18% per annum. GST is applicable at the prevailing rate on all services.",
      "MedXL reserves the right to suspend services in the event of non-payment after providing 7 days' written notice. Restoration of services following suspension may attract a reinstatement fee."],
  },
  {
    id: 'data-privacy',
    num: '04',
    title: '4. Intellectual Property',
    content: [
      '4.1 MedXL Property: All software, code, designs, systems, templates, tools, and proprietary methodologies used by MedXL to deliver services remain the exclusive intellectual property of MedXL Ventures Private Limited. Clients are granted a limited, non-transferable licence to use such software during the active subscription period.',
      '4.2 Client Content:Content provided by the client (including but not limited to logos, text, photographs, and patient data) remains the property of the client. MedXL is granted a limited licence to use such content solely for the purpose of delivering contracted services.',
      '4.3 Work Product: Website designs, custom code, and content created specifically for the client under a paid engagement are assigned to the client upon full payment of all outstanding fees. Generic templates and underlying frameworks are not included in this assignment.',
    ],
  },
  {
    id: 'acceptable-use',
    num: '05',
    title: 'Data Protection and Patient Confidentiality',
    content: [
      'MedXL acknowledges that client data may include sensitive patient health information. We commit to processing all such data in accordance with:',
      'The Digital Personal Data Protection Act (DPDP Act), 2023',
      'HIPAA-equivalent security standards',
      'ABDM Health Data Management Policy',
      'MedXL will not sell, share, or disclose client or patient data to any third party except as required to deliver the contracted services or as mandated by applicable law.',
    ],
  },
  {
    id: 'ip',
    num: '06',
    title: 'Uptime And Service Level Agreement (SLA)',
    content: [
      'MedXL guarantees 99.9% monthly uptime for hosted services. In the event of downtime exceeding the SLA threshold (excluding scheduled maintenance windows and force majeure events), clients may be eligible for service credits as outlined in the Service Agreement.',
      'Planned maintenance is communicated at least 48 hours in advance and is scheduled during off-peak hours (typically between 2:00 AM – 5:00 AM IST).',
    ],
  },
  {
    id: 'payment',
    num: '07',
    title: 'Prohibited Uses',
    content: [
      "You agree not to use MedXL's platforms or services to:",
      'Violate any applicable law or regulation in India or any jurisdiction',
      'Transmit or store fraudulent, defamatory, or illegal content',
      'Attempt to breach, hack, or compromise any MedXL system',
      'Reverse-engineer any MedXL software or extract proprietary code',
      'Provide false information during onboarding or billing processes',
      'Use MedXL services to provide competing IT services to third parties',
    ],
  },
  {
    id: 'sla',
    num: '08',
    title: 'Termination',
    content: [
      "Either party may terminate the service agreement with 30 days' written notice at the end of an annual contract term. Mid-term termination by the client does not entitle the client to a refund of prepaid annual fees unless MedXL is in material breach of its obligations.",
      "MedXL may terminate immediately if: (a) the client breaches these Terms and fails to remedy within 7 days of notice, (b) payment is overdue by more than 30 days, or (c) the client engages in fraudulent, illegal, or harmful activity.",
      "Upon termination, MedXL will provide the client with an export of their data in standard formats (CSV, JSON, or PDF as applicable) within 30 days. Data will be permanently deleted from MedXL systems within 90 days of termination.",
],
  },
  {
    id: 'limitation',
    num: '09',
    title: 'Limitation of Liability',
    content: [
      "To the maximum extent permitted by applicable law, MedXL's total aggregate liability to the client for any claim arising out of or related to these Terms or the services shall not exceed the total fees paid by the client to MedXL in the 12 months preceding the claim.",
      "MedXL shall not be liable for indirect, incidental, consequential, or punitive damages, including loss of profit, loss of data, or business interruption, even if advised of the possibility of such damages.",
],
  },
  {
    id: 'termination',
    num: '10',
    title: 'Governing Law and Dispute Resolution',
    content: [
      "These Terms are governed by and construed in accordance with the laws of India. Any dispute arising out of or relating to these Terms shall first be subject to good-faith negotiation. If unresolved within 30 days, disputes shall be referred to arbitration under the Arbitration and Conciliation Act, 1996, with the seat of arbitration in Chennai, Tamil Nadu.",
],
  },
  {
    id: 'governing-law',
    num: '11',
    title: 'Amendments',
    content: [
      "MedXL reserves the right to update these Terms at any time. Material changes will be communicated to active clients via email at least 30 days before taking effect. Continued use of services after the effective date constitutes acceptance of the updated Terms.",],
  },
  {
    id: 'general',
    num: '12',
    title: 'General Provisions',
    content: [
  <>
    <p>
      For questions about these Terms, contact our Legal & Compliance team:
    </p>
    <p>
      📧 <a href="mailto:info@medxl.in">info@medxl.in</a>
      <br />
      📞 <a href="tel:+918148181288">+91 81481 81288</a>
      <br />
      📍 MedXL Ventures Private Limited, Chennai, Tamil Nadu, India
    </p>
  </>,
],
  },
]

export default function TermsPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <style>{`
        .terms-page { background: var(--bg-base); min-height: 100vh; }

        /* ── HERO BANNER ── */
        .terms-hero {
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border-faint);
          padding: 64px 56px 56px;
          position: relative; overflow: hidden;
        }
        .terms-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(197,45,181,.06) 1px, transparent 1px);
          background-size: 36px 36px; pointer-events: none;
        }
        .terms-hero::after {
          content: '';
          position: absolute; top: -100px; right: -100px;
          width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(197,45,181,.1) 0%, transparent 70%);
          filter: blur(60px); pointer-events: none;
        }
        .terms-hero-inner {
          max-width: 860px; position: relative; z-index: 1;
        }
        .terms-breadcrumb {
          display: flex; align-items: center; gap: 8px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--text-disabled);
          margin-bottom: 20px;
        }
        .terms-breadcrumb a { color: var(--brand-light); text-decoration: none; transition: color .2s; }
        .terms-breadcrumb a:hover { color: var(--text-primary); }
        .terms-breadcrumb span { color: var(--text-disabled); }
        .terms-hero h1 {
          font-family: var(--font-display); font-weight: 800;
          font-size: clamp(36px, 5vw, 60px); letter-spacing: -1.5px;
          line-height: 1.06; color: var(--text-primary); margin-bottom: 16px;
        }
        .terms-hero h1 em {
          font-style: normal;
          background: var(--brand-grad);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .terms-hero-desc {
          font-size: 15px; color: var(--text-secondary); line-height: 1.75;
          max-width: 640px; margin-bottom: 28px;
        }
        .terms-meta-row {
          display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
        }
        .terms-meta-chip {
          display: flex; align-items: center; gap: 7px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 1px;
          text-transform: uppercase; color: var(--text-muted);
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          padding: 6px 14px; border-radius: 100px;
        }
        .terms-meta-dot { width: 5px; height: 5px; border-radius: 50%; }

        /* ── LAYOUT ── */
        .terms-layout {
          display: grid; grid-template-columns: 240px 1fr;
          gap: 0; max-width: 1200px; margin: 0 auto;
          padding: 0 56px;
        }

        /* ── SIDEBAR TOC ── */
        .terms-toc {
          padding: 40px 24px 40px 0;
          border-right: 1px solid var(--border-faint);
          position: sticky; top: 64px;
          height: calc(100vh - 64px);
          overflow-y: auto;
          align-self: start;
        }
        .toc-label {
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 3px;
          text-transform: uppercase; color: var(--text-disabled); margin-bottom: 16px;
          padding-left: 4px;
        }
        .toc-list { list-style: none; display: flex; flex-direction: column; gap: 2px; }
        .toc-item a {
          display: flex; align-items: center; gap: 10px;
          padding: 8px 10px; border-radius: 8px;
          font-family: var(--font-body); font-size: 12.5px; font-weight: 400;
          color: var(--text-muted); text-decoration: none;
          transition: all .2s; border: 1px solid transparent;
          line-height: 1.3;
        }
        .toc-item a:hover {
          color: var(--text-primary);
          background: var(--bg-raised);
          border-color: var(--border-faint);
        }
        .toc-num {
          font-family: var(--font-mono); font-size: 9px;
          color: var(--brand-hot); min-width: 20px; letter-spacing: .5px;
        }

        /* ── CONTENT AREA ── */
        .terms-content { padding: 40px 0 80px 48px; }

        /* Intro notice */
        .terms-notice {
          background: rgba(197,45,181,.07);
          border: 1px solid var(--border-subtle);
          border-radius: 14px; padding: 20px 24px;
          margin-bottom: 48px;
          display: flex; gap: 14px; align-items: flex-start;
        }
        .terms-notice-icon { font-size: 20px; flex-shrink: 0; margin-top: 1px; }
        .terms-notice p {
          font-size: 13px; color: var(--text-secondary); line-height: 1.7;
        }
        .terms-notice strong { color: var(--text-primary); font-weight: 600; }

        /* Section */
        .terms-section {
          margin-bottom: 56px;
          scroll-margin-top: 84px;
        }
        .terms-section-header {
          display: flex; align-items: center; gap: 16px; margin-bottom: 20px;
          padding-bottom: 16px; border-bottom: 1px solid var(--border-faint);
        }
        .terms-section-num {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 2px;
          color: var(--brand-hot); background: rgba(197,45,181,.1);
          border: 1px solid rgba(197,45,181,.22);
          padding: 4px 10px; border-radius: 6px; flex-shrink: 0;
        }
        .terms-section-title {
          font-family: var(--font-display); font-size: 22px; font-weight: 700;
          color: var(--text-primary); letter-spacing: -.4px;
        }
        .terms-paras { display: flex; flex-direction: column; gap: 14px; }
        .terms-para {
          font-size: 14px; color: var(--text-secondary); line-height: 1.8;
          padding-left: 16px; border-left: 2px solid var(--border-faint);
          transition: border-color .2s;
        }
        .terms-para:hover { border-left-color: var(--border-default); }

        /* CTA footer */
        .terms-cta {
          background: var(--brand-grad); border-radius: 20px;
          padding: 40px 44px; margin-top: 48px; position: relative; overflow: hidden;
        }
        .terms-cta::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(255,255,255,.06) 1px, transparent 1px);
          background-size: 28px 28px; pointer-events: none;
        }
        .terms-cta-tag {
          display: inline-flex; align-items: center;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 2px;
          text-transform: uppercase; color: rgba(255,255,255,.7);
          background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.2);
          padding: 4px 12px; border-radius: 100px; margin-bottom: 14px;
        }
        .terms-cta h3 {
          font-family: var(--font-display); font-size: 26px; font-weight: 800;
          color: #fff; letter-spacing: -.5px; margin-bottom: 10px;
          position: relative; z-index: 1;
        }
        .terms-cta p {
          font-size: 14px; color: rgba(255,255,255,.75); margin-bottom: 22px;
          max-width: 440px; line-height: 1.65; position: relative; z-index: 1;
        }
        .terms-cta-btns { display: flex; gap: 12px; flex-wrap: wrap; position: relative; z-index: 1; }
        .terms-cta-btn-white {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff; color: var(--brand-deep);
          padding: 11px 24px; border-radius: 100px;
          font-family: var(--font-body); font-weight: 700; font-size: 13px;
          text-decoration: none; transition: all .3s;
          box-shadow: 0 4px 16px rgba(0,0,0,.2);
        }
        .terms-cta-btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.25); }
        .terms-cta-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,.12); color: #fff;
          padding: 10px 22px; border-radius: 100px;
          font-family: var(--font-body); font-weight: 600; font-size: 13px;
          text-decoration: none; border: 1.5px solid rgba(255,255,255,.3);
          transition: all .3s;
        }
        .terms-cta-btn-ghost:hover { background: rgba(255,255,255,.2); border-color: rgba(255,255,255,.6); }

        /* ── FOOTER ── */
        .terms-footer {
          background: var(--bg-surface);
          border-top: 1px solid var(--border-faint);
          padding: 32px 56px;
          display: flex; align-items: center;
          justify-content: space-between; flex-wrap: wrap; gap: 16px;
        }
        .terms-footer p {
          font-family: var(--font-mono); font-size: 11px; color: var(--text-disabled);
          letter-spacing: .5px;
        }
        .terms-footer-links { display: flex; gap: 0; }
        .terms-footer-links a {
          font-family: var(--font-mono); font-size: 11px; color: var(--text-disabled);
          text-decoration: none; padding: 0 16px;
          border-right: 1px solid var(--border-faint);
          transition: color .2s; letter-spacing: .5px;
        }
        .terms-footer-links a:last-child { border-right: none; }
        .terms-footer-links a:hover { color: var(--brand-light); }

        @media (max-width: 960px) {
          .terms-nav, .terms-hero { padding-left: 20px; padding-right: 20px; }
          .terms-layout { grid-template-columns: 1fr; padding: 0 20px; }
          .terms-toc { display: none; }
          .terms-content { padding: 32px 0 60px; }
        }
      `}</style>

      <div className="terms-page">

        {/* ── HERO ── */}
        <div className="terms-hero">
          <div className="terms-hero-inner">
            <div className="terms-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>Legal</span>
              <span>›</span>
              <span>Terms of Use</span>
            </div>
            <h1>Terms of <em>Use</em></h1>
            <p className="terms-hero-desc">
              Please read these Terms of Use carefully before accessing or using MedXL's
              healthcare technology platform, software products, or services. These Terms
              govern your relationship with MedXL Ventures Private Limited.
            </p>
            <div className="terms-meta-row">
              <div className="terms-meta-chip">
                <span className="terms-meta-dot" style={{background:'#22C55E'}}/>
                Effective: 1 January 2025
              </div>
              <div className="terms-meta-chip">
                <span className="terms-meta-dot" style={{background:'#F5A623'}}/>
                Last Updated: 25 May 2025
              </div>
              <div className="terms-meta-chip">
                <span className="terms-meta-dot" style={{background:'#C52DB5'}}/>
                Version 2.0
              </div>
              <div className="terms-meta-chip">
                <span className="terms-meta-dot" style={{background:'#60A5FA'}}/>
                Governing Law: India
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN ── */}
        <div className="terms-layout">

          {/* SIDEBAR TOC */}
          <aside className="terms-toc">
            <div className="toc-label">Contents</div>
            <ul className="toc-list">
              {sections.map(s => (
                <li className="toc-item" key={s.id}>
                  <a href={`#${s.id}`}>
                    <span className="toc-num">{s.num}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* CONTENT */}
          <main className="terms-content">

            {/* Notice */}
            <div className="terms-notice">
              <span className="terms-notice-icon">⚠️</span>
              <p>
                <strong>Important:</strong> These Terms of Use ("Terms") govern your access to and use of the website located at <strong>www.medxl.in</strong> ("Website"), and all software products, IT services, and related offerings provided by MedXL Ventures Private Limited ("MedXL", "we", "us", or "our"), a company registered under the Companies Act 2013 in Tamil Nadu, India.

By accessing our Website or entering into a service agreement with MedXL, you ("Client", "you") agree to be bound by these Terms. If you do not agree, please discontinue use immediately.
              </p>
            </div>

            {/* Sections */}
            {sections.map(s => (
              <div className="terms-section" key={s.id} id={s.id}>
                <div className="terms-section-header">
                  <span className="terms-section-num">{s.num}</span>
                  <h2 className="terms-section-title">{s.title}</h2>
                </div>
                <div className="terms-paras">
                  {s.content.map((para, i) => (
                    <p className="terms-para" key={i}>{para}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="terms-cta">
              <div className="terms-cta-tag">Questions about these Terms?</div>
              <h3>Need Clarification or Legal Assistance?</h3>
              <p>
                Our legal team is available to address any questions about these Terms,
                our data processing practices, or compliance requirements specific to
                your healthcare organisation.
              </p>
              <div className="terms-cta-btns">
                <a href="mailto:info@medxl.in" className="terms-cta-btn-white">
                  ✉ info@medxl.in
                </a>
                <a href="https://api.whatsapp.com/send/?phone=918148181288"
                  target="_blank" rel="noreferrer" className="terms-cta-btn-ghost">
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </main>
        </div>

        {/* ── FOOTER ── */}
        <footer className="terms-footer">
          <p>© 2025 MedXL Ventures Private Limited · All rights reserved · Chennai, Tamil Nadu, India</p>
          <div className="terms-footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <a href="mailto:legal@medxl.in">Contact Legal</a>
          </div>
        </footer>

      </div>
    </>
  )
}