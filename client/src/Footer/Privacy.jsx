import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import MedXLLogo from '../components/MedXLLogo'

const sections = [
  {
    id: 'who-this-applies',
    num: '01',
    title: 'Who This Policy Applies To',
    content: [
      'This policy applies to website visitors — anyone browsing medxl.in.',
      'This policy applies to prospective clients — hospital administrators or decision-makers submitting enquiry forms.',
      'This policy applies to client organisations — hospitals, clinics, and healthcare institutions that have contracted MedXL services.',
      'This policy also applies to end users of client systems — patients, doctors, nurses, and admin staff using MedXL-powered software deployed at client hospitals.',
    ],
  },
  {
    id: 'data-we-collect',
    num: '02',
    title: 'Data We Collect',
    content: [
      'Contact Data: Name, email, phone number, hospital name, and designation — collected via enquiry forms, WhatsApp, and email.',
      'Usage Data: Browser type, IP address, pages visited, session duration, and referrer URL — collected via Google Analytics and server logs.',
      'Business Data: Hospital registration details, GST number, billing address, and contract details — collected during the onboarding process.',
      'Patient Data (via client systems): Name, ABHA ID, contact details, diagnosis, prescriptions, and lab results — processed on behalf of the client hospital via their HMS, EHR, or LIMS.',
      'Staff Data (via client systems): Name, designation, email, training records, and login credentials — sourced from LMS and HMS user management.',
    ],
  },
  {
    id: 'how-we-use',
    num: '03',
    title: 'How We Use Your Data',
    content: [
      'To respond to website enquiries and schedule consultations.',
      'To deliver contracted IT services and software products.',
      'To manage billing, payments, and service agreements.',
      'To provide technical support and helpdesk services.',
      'To send service-related communications (not marketing, unless opted in).',
      'To improve our website, services, and software through aggregate analytics.',
      'To comply with applicable legal obligations.',
      'We do not use patient health data for any purpose other than delivering the specific service contracted by the client hospital. We do not train AI models on patient data.',
    ],
  },
  {
    id: 'legal-basis',
    num: '04',
    title: 'Legal Basis for Processing',
    content: [
      'Under the DPDP Act 2023, we process personal data on the following bases:',
      'Consent — for marketing communications and optional features.',
      'Contractual necessity — to deliver services under a signed Service Agreement.',
      'Legal obligation — to comply with applicable Indian law (tax, audit, court orders).',
      'Legitimate interests — website analytics and service improvement (not overriding data principals\' rights).',
    ],
  },
  {
    id: 'data-storage',
    num: '05',
    title: 'Data Storage & Security',
    content: [
      'All data is stored on servers located within India (AWS Mumbai or Azure India regions).',
      'AES-256 encryption at rest; TLS 1.3 in transit.',
      'Role-based access control (RBAC) — staff access only what they need.',
      'Multi-factor authentication for all admin systems.',
      'Annual penetration testing and quarterly vulnerability scans.',
      'Audit logs retained for a minimum of 2 years.',
      'ISO 27001-aligned information security management practices.',
    ],
  },
  {
    id: 'data-sharing',
    num: '06',
    title: 'Data Sharing',
    content: [
      'MedXL does not sell personal data to any third party. We share data only in the following circumstances:',
      'Service delivery partners — cloud infrastructure providers (AWS/Azure), payment gateways (Razorpay/PayU), SMS/WhatsApp API providers — each bound by data processing agreements.',
      'Client hospital — patient and staff data is accessible to the contracted hospital and is owned by them.',
      'ABDM / NHA — for ABHA-linked records, as mandated by government guidelines.',
      'Legal authorities — when required by a court order, government directive, or applicable law.',
    ],
  },
  {
    id: 'data-retention',
    num: '07',
    title: 'Data Retention',
    content: [
      'Client business data: retained for the duration of the service contract plus 7 years, as required by Indian tax law.',
      'Patient health data: retained as per the client hospital\'s data retention policy (MedXL follows the hospital\'s instruction as a data processor).',
      'Website analytics data: retained for 26 months (Google Analytics default).',
      'Server logs: retained for 12 months.',
      'Upon contract termination, MedXL provides a full data export to the client within 30 days and permanently deletes data from its systems within 90 days, subject to legal retention obligations.',
    ],
  },
  {
    id: 'your-rights',
    num: '08',
    title: 'Your Rights (Data Principal Rights)',
    content: [
      'Under the DPDP Act 2023, you have the following rights:',
      'Right to access — request a copy of your personal data held by MedXL.',
      'Right to correction — request correction of inaccurate or incomplete data.',
      'Right to erasure — request deletion of your data (subject to legal retention obligations).',
      'Right to grievance redressal — raise a complaint with MedXL\'s Data Protection Officer.',
      'Right to nominate — nominate a person to exercise rights on your behalf in case of incapacity or death.',
      'To exercise these rights, contact our Data Protection Officer at privacy@medxl.in.',
    ],
  },
  {
    id: 'cookies',
    num: '09',
    title: 'Cookies',
    content: [
      'Our website uses cookies for the following purposes:',
      'Essential cookies — required for basic website functionality (session management, security).',
      'Analytics cookies — Google Analytics (anonymised) for understanding website usage.',
      'Preference cookies — remembering language or display preferences.',
      'We do not use advertising or tracking cookies. You can manage cookie preferences through your browser settings. Blocking essential cookies may impact website functionality.',
    ],
  },
  {
    id: 'childrens-data',
    num: '10',
    title: "Children's Data",
    content: [
      "MedXL's website is not directed at children under 18.",
      'For paediatric patient data processed through client hospital systems, the client hospital (as data fiduciary) is responsible for obtaining appropriate parental/guardian consent in accordance with applicable law.',
    ],
  },
  {
    id: 'policy-changes',
    num: '11',
    title: 'Changes to This Policy',
    content: [
      'We may update this Privacy Policy periodically.',
      'Material changes will be communicated to active clients by email at least 30 days in advance.',
      'The "Last Updated" date at the top of this page reflects the most recent revision.',
    ],
  },
  {
    id: 'grievance-officer',
    num: '12',
    title: 'Grievance Officer & Data Protection Officer',
    content: [
      <>
        <p>For privacy-related queries, complaints, or to exercise your data rights, contact our Data Protection Officer:</p>
        <p>
          📧 <a href="mailto:privacy@medxl.in">privacy@medxl.in</a>
          <br />
          📞 <a href="tel:+918148181288">+91 81481 81288</a>
          <br />
          📍 MedXL Ventures Private Limited, Chennai, Tamil Nadu — 600 001
        </p>
        <p>We will acknowledge your request within 3 business days and endeavour to resolve it within 30 days.</p>
      </>,
    ],
  },
]

export default function PrivacyPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <style>{`
        .privacy-page { background: var(--bg-base); min-height: 100vh; }
        /* ── HERO BANNER ── */
        .privacy-hero {
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border-faint);
          padding: 64px 56px 56px;
          position: relative; overflow: hidden;
        }
        .privacy-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(0,175,160,.06) 1px, transparent 1px);
          background-size: 36px 36px; pointer-events: none;
        }
        .privacy-hero::after {
          content: '';
          position: absolute; top: -100px; right: -100px;
          width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(0,175,160,.1) 0%, transparent 70%);
          filter: blur(60px); pointer-events: none;
        }
        .privacy-hero-inner {
          max-width: 860px; position: relative; z-index: 1;
        }
        .privacy-breadcrumb {
          display: flex; align-items: center; gap: 8px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--text-disabled);
          margin-bottom: 20px;
        }
        .privacy-breadcrumb a { color: var(--brand-light); text-decoration: none; transition: color .2s; }
        .privacy-breadcrumb a:hover { color: var(--text-primary); }
        .privacy-breadcrumb span { color: var(--text-disabled); }
        .privacy-hero h1 {
          font-family: var(--font-display); font-weight: 800;
          font-size: clamp(36px, 5vw, 60px); letter-spacing: -1.5px;
          line-height: 1.06; color: var(--text-primary); margin-bottom: 16px;
        }
        .privacy-hero h1 em {
          font-style: normal;
          background: var(--brand-grad);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .privacy-hero-desc {
          font-size: 15px; color: var(--text-secondary); line-height: 1.75;
          max-width: 640px; margin-bottom: 28px;
        }
        .privacy-meta-row {
          display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
        }
        .privacy-meta-chip {
          display: flex; align-items: center; gap: 7px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 1px;
          text-transform: uppercase; color: var(--text-muted);
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          padding: 6px 14px; border-radius: 100px;
        }
        .privacy-meta-dot { width: 5px; height: 5px; border-radius: 50%; }

        /* ── LAYOUT ── */
        .privacy-layout {
          display: grid; grid-template-columns: 240px 1fr;
          gap: 0; max-width: 1200px; margin: 0 auto;
          padding: 0 56px;
        }

        /* ── SIDEBAR TOC ── */
        .privacy-toc {
          padding: 40px 24px 40px 0;
          border-right: 1px solid var(--border-faint);
          position: sticky; top: 64px;
          height: calc(100vh - 64px);
          overflow-y: auto;
          align-self: start;
        }
        .privacy-toc-label {
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 3px;
          text-transform: uppercase; color: var(--text-disabled); margin-bottom: 16px;
          padding-left: 4px;
        }
        .privacy-toc-list { list-style: none; display: flex; flex-direction: column; gap: 2px; }
        .privacy-toc-item a {
          display: flex; align-items: center; gap: 10px;
          padding: 8px 10px; border-radius: 8px;
          font-family: var(--font-body); font-size: 12.5px; font-weight: 400;
          color: var(--text-muted); text-decoration: none;
          transition: all .2s; border: 1px solid transparent;
          line-height: 1.3;
        }
        .privacy-toc-item a:hover {
          color: var(--text-primary);
          background: var(--bg-raised);
          border-color: var(--border-faint);
        }
        .privacy-toc-num {
          font-family: var(--font-mono); font-size: 9px;
          color: var(--brand-hot); min-width: 20px; letter-spacing: .5px;
        }

        /* ── CONTENT AREA ── */
        .privacy-content { padding: 40px 0 80px 48px; }

        /* Intro notice */
        .privacy-notice {
          background: rgba(0,175,160,.07);
          border: 1px solid var(--border-subtle);
          border-radius: 14px; padding: 20px 24px;
          margin-bottom: 48px;
          display: flex; gap: 14px; align-items: flex-start;
        }
        .privacy-notice-icon { font-size: 20px; flex-shrink: 0; margin-top: 1px; }
        .privacy-notice p {
          font-size: 13px; color: var(--text-secondary); line-height: 1.7;
        }
        .privacy-notice strong { color: var(--text-primary); font-weight: 600; }

        /* Applicable law chips */
        .privacy-law-chips {
          display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px;
        }
        .privacy-law-chip {
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--text-muted);
          background: rgba(0,175,160,.08); border: 1px solid rgba(0,175,160,.22);
          padding: 4px 12px; border-radius: 6px;
        }

        /* Section */
        .privacy-section {
          margin-bottom: 56px;
          scroll-margin-top: 84px;
        }
        .privacy-section-header {
          display: flex; align-items: center; gap: 16px; margin-bottom: 20px;
          padding-bottom: 16px; border-bottom: 1px solid var(--border-faint);
        }
        .privacy-section-num {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 2px;
          color: var(--brand-hot); background: rgba(197,45,181,.1);
          border: 1px solid rgba(197,45,181,.22);
          padding: 4px 10px; border-radius: 6px; flex-shrink: 0;
        }
        .privacy-section-title {
          font-family: var(--font-display); font-size: 22px; font-weight: 700;
          color: var(--text-primary); letter-spacing: -.4px;
        }
        .privacy-paras { display: flex; flex-direction: column; gap: 14px; }
        .privacy-para {
          font-size: 14px; color: var(--text-secondary); line-height: 1.8;
          padding-left: 16px; border-left: 2px solid var(--border-faint);
          transition: border-color .2s;
        }
        .privacy-para:hover { border-left-color: var(--border-default); }
        .privacy-para a { color: var(--brand-light); text-decoration: none; }
        .privacy-para a:hover { text-decoration: underline; }
        .privacy-para p { margin: 0 0 8px; }
        .privacy-para p:last-child { margin-bottom: 0; }

        /* CTA footer */
        .privacy-cta {
          background: var(--brand-grad); border-radius: 20px;
          padding: 40px 44px; margin-top: 48px; position: relative; overflow: hidden;
        }
        .privacy-cta::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(255,255,255,.06) 1px, transparent 1px);
          background-size: 28px 28px; pointer-events: none;
        }
        .privacy-cta-tag {
          display: inline-flex; align-items: center;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 2px;
          text-transform: uppercase; color: rgba(255,255,255,.7);
          background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.2);
          padding: 4px 12px; border-radius: 100px; margin-bottom: 14px;
        }
        .privacy-cta h3 {
          font-family: var(--font-display); font-size: 26px; font-weight: 800;
          color: #fff; letter-spacing: -.5px; margin-bottom: 10px;
          position: relative; z-index: 1;
        }
        .privacy-cta p {
          font-size: 14px; color: rgba(255,255,255,.75); margin-bottom: 22px;
          max-width: 440px; line-height: 1.65; position: relative; z-index: 1;
        }
        .privacy-cta-btns { display: flex; gap: 12px; flex-wrap: wrap; position: relative; z-index: 1; }
        .privacy-cta-btn-white {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff; color: var(--brand-deep);
          padding: 11px 24px; border-radius: 100px;
          font-family: var(--font-body); font-weight: 700; font-size: 13px;
          text-decoration: none; transition: all .3s;
          box-shadow: 0 4px 16px rgba(0,0,0,.2);
        }
        .privacy-cta-btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.25); }
        .privacy-cta-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,.12); color: #fff;
          padding: 10px 22px; border-radius: 100px;
          font-family: var(--font-body); font-weight: 600; font-size: 13px;
          text-decoration: none; border: 1.5px solid rgba(255,255,255,.3);
          transition: all .3s;
        }
        .privacy-cta-btn-ghost:hover { background: rgba(255,255,255,.2); border-color: rgba(255,255,255,.6); }

        /* ── FOOTER ── */
        .privacy-footer {
          background: var(--bg-surface);
          border-top: 1px solid var(--border-faint);
          padding: 32px 56px;
          display: flex; align-items: center;
          justify-content: space-between; flex-wrap: wrap; gap: 16px;
        }
        .privacy-footer p {
          font-family: var(--font-mono); font-size: 11px; color: var(--text-disabled);
          letter-spacing: .5px;
        }
        .privacy-footer-links { display: flex; gap: 0; }
        .privacy-footer-links a {
          font-family: var(--font-mono); font-size: 11px; color: var(--text-disabled);
          text-decoration: none; padding: 0 16px;
          border-right: 1px solid var(--border-faint);
          transition: color .2s; letter-spacing: .5px;
        }
        .privacy-footer-links a:last-child { border-right: none; }
        .privacy-footer-links a:hover { color: var(--brand-light); }

        @media (max-width: 960px) {
          .privacy-nav, .privacy-hero { padding-left: 20px; padding-right: 20px; }
          .privacy-layout { grid-template-columns: 1fr; padding: 0 20px; }
          .privacy-toc { display: none; }
          .privacy-content { padding: 32px 0 60px; }
        }
      `}</style>

      <div className="privacy-page">

        {/* ── HERO ── */}
        <div className="privacy-hero">
          <div className="privacy-hero-inner">
            <div className="privacy-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>Legal</span>
              <span>›</span>
              <span>Privacy Policy</span>
            </div>
            <h1>Privacy <em>Policy</em></h1>
            <p className="privacy-hero-desc">
              How MedXL collects, uses, protects, and handles your data — and your rights
              as a data principal. This policy governs all personal and patient data
              entrusted to MedXL Ventures Private Limited.
            </p>
            <div className="privacy-meta-row">
              <div className="privacy-meta-chip">
                <span className="privacy-meta-dot" style={{ background: '#22C55E' }} />
                Effective: 1 January 2025
              </div>
              <div className="privacy-meta-chip">
                <span className="privacy-meta-dot" style={{ background: '#F5A623' }} />
                Last Updated: 1 May 2025
              </div>
              <div className="privacy-meta-chip">
                <span className="privacy-meta-dot" style={{ background: '#C52DB5' }} />
                DPDP Act 2023
              </div>
              <div className="privacy-meta-chip">
                <span className="privacy-meta-dot" style={{ background: '#60A5FA' }} />
                HIPAA Standards
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN ── */}
        <div className="privacy-layout">

          {/* SIDEBAR TOC */}
          <aside className="privacy-toc">
            <div className="privacy-toc-label">Contents</div>
            <ul className="privacy-toc-list">
              {sections.map(s => (
                <li className="privacy-toc-item" key={s.id}>
                  <a href={`#${s.id}`}>
                    <span className="privacy-toc-num">{s.num}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* CONTENT */}
          <main className="privacy-content">

            {/* Notice */}
            <div className="privacy-notice">
              <span className="privacy-notice-icon">🔒</span>
              <div>
                <p>
                  <strong>MedXL Ventures Private Limited</strong> ("MedXL", "we", "us") is committed
                  to protecting the privacy and security of personal data entrusted to us. This Privacy
                  Policy explains how we collect, use, store, share, and protect information gathered
                  through <strong>www.medxl.in</strong> and through the IT services and software products
                  we provide to hospital clients.
                </p>
                <div className="privacy-law-chips">
                  <span className="privacy-law-chip">DPDP Act 2023</span>
                  <span className="privacy-law-chip">ABDM Health Data Management Policy</span>
                  <span className="privacy-law-chip">HIPAA-Equivalent Standards</span>
                </div>
              </div>
            </div>

            {/* Sections */}
            {sections.map(s => (
              <div className="privacy-section" key={s.id} id={s.id}>
                <div className="privacy-section-header">
                  <span className="privacy-section-num">{s.num}</span>
                  <h2 className="privacy-section-title">{s.title}</h2>
                </div>
                <div className="privacy-paras">
                  {s.content.map((para, i) => (
                    <p className="privacy-para" key={i}>{para}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="privacy-cta">
              <div className="privacy-cta-tag">Questions about your data?</div>
              <h3>Contact Our Data Protection Officer</h3>
              <p>
                Your privacy matters to us. Reach out for any queries about data access,
                correction, erasure, or your rights under the DPDP Act 2023.
              </p>
              <div className="privacy-cta-btns">
                <a href="mailto:privacy@medxl.in" className="privacy-cta-btn-white">
                  ✉ privacy@medxl.in
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=918148181288"
                  target="_blank"
                  rel="noreferrer"
                  className="privacy-cta-btn-ghost"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </main>
        </div>

        {/* ── FOOTER ── */}
        <footer className="privacy-footer">
          <p>© 2025 MedXL Ventures Private Limited · All rights reserved · Chennai, Tamil Nadu, India</p>
          <div className="privacy-footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/terms">Terms of Use</Link>
            <a href="mailto:privacy@medxl.in">Contact DPO</a>
          </div>
        </footer>

      </div>
    </>
  )
}