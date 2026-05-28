import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {Link} from 'react-router-dom'
// import './medxl.css'   ← already imported at the app root; remove if you import it here instead

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const footerLinks = {
  Company: [
    { label: 'About MedXL',   icon: '🏢', href: '/about' },
    { label: 'Our Team',      icon: '👥' },
    { label: 'Blogs',         icon: '📝' },
    { label: 'Careers',       icon: '💼' },
    { label: 'Contact Us',    icon: '✉️' },
  ],
  'Our Services': [
    { label: 'Cloud Solutions',   icon: '☁️',href:'/Cloudhosting' },
    { label: 'Data Analytics',    icon: '🔬', href: '/Analytics' },
    { label: 'Web Development',   icon: '🌐', href:'/Hospitalwebsite' },
    { label: 'Mobile Apps',       icon: '📱', href:'/Mobileapp' },
    { label: 'IT Consulting',     icon: '💡', href:'/ITconsulting' },
    { label: 'Digital Marketing', icon: '📣', href:'/SeoMarketing' },
  ],
  Products: [
    { label: 'LMS for Hospitals', icon: '🎓', href :'/Lms' },
    { label: 'EHR System',        icon: '🏥', href:'/Ehr' },
    { label: 'LIMS',              icon: '🗂️', href:'/Lims' },
    { label: 'HMS (Cloud)',        icon: '☁️', href:'/Hms' },
    { label: 'Telemedicine',      icon: '🩺', href:'/Telemedicine' },
    { label: 'OP Billing',        icon: '💳', href:'/OpBilling' },
  ],
}

const tags = [
  'Data Analytics', 'Website Design', 'Web Development',
  'Software Solutions', 'Digital Marketing', 'eLearning',
  'LMS for Healthcare', 'Healthcare IT', 'Cloud EHR',
  'Cloud Solutions', 'Hospital Branding', 'Cloud HIMS',
]

const socials = [
  { icon: '𝕏',  label: 'Twitter',  href: 'https://x.com/medxl_in' },
  { icon: 'in', label: 'LinkedIn', href: 'https://www.linkedin.com/company/medxl' },
  { icon: 'ig',  label: 'Facebook', href: 'https://www.instagram.com/medxl/' },
  { icon: '▶',  label: 'YouTube',  href: 'https://www.youtube.com/@medxl' },
]

const stats = [
  { num: '1,800+', label: 'Hospitals Served', icon: '🏥' },
  { num: '20+',    label: 'Yrs of Expertise', icon: '✅' },
  { num: '2cr+',   label: 'Saved / year',     icon: '💰' },
  { num: '99%',    label: 'Uptime SLA',       icon: '⭐' },
]

/* ─────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────── */
export default function Footer() {
  const [email, setEmail]       = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (email.includes('@')) setSubscribed(true)
  }

  return (
    <>
      <style>{`
        /* ── FOOTER SHELL ── */
        .ft {
          background: var(--bg-base);
          border-top: 1px solid var(--border-faint);
          position: relative;
          overflow: hidden;
          font-family: var(--font-body);
        }

        /* Ambient glow — reuses brand tokens */
        .ft-glow {
          position: absolute;
          bottom: -240px; left: 50%;
          transform: translateX(-50%);
          width: 900px; height: 480px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(197,45,181,.06) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
          filter: blur(48px);
        }

        /* Dot-grid texture (matches mx-hero pattern) */
        .ft::before {
          content: '';
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image: radial-gradient(rgba(197,45,181,.04) 1px, transparent 1px);
          background-size: 36px 36px;
        }

        /* ── CTA BANNER — extends .mx-cta-banner layout but dark variant ── */
        .ft-banner {
          position: relative; z-index: 1;
          margin: 72px 56px 0;
          border-radius: 24px;
          background: linear-gradient(135deg,
            rgba(197,45,181,.13) 0%,
            rgba(140,42,158,.08) 50%,
            rgba(92,37,132,.05) 100%);
          border: 1px solid var(--border-subtle);
          padding: 52px 56px;
          display: flex; align-items: center;
          justify-content: space-between;
          gap: 40px; flex-wrap: wrap;
          overflow: hidden;
        }
        .ft-banner::before {
          content: '';
          position: absolute; top: -60px; right: -60px;
          width: 280px; height: 280px; border-radius: 50%;
          background: radial-gradient(circle, rgba(197,45,181,.14), transparent 70%);
          pointer-events: none;
        }
        .ft-banner::after {
          content: '';
          position: absolute; bottom: -40px; left: 200px;
          width: 180px; height: 180px; border-radius: 50%;
          background: radial-gradient(circle, rgba(245,166,35,.07), transparent 70%);
          pointer-events: none;
        }
        .ft-banner-left { position: relative; z-index: 1; }
        .ft-banner-eyebrow {
          /* reuse .mx-tag styles inline to avoid extra DOM node */
          display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--font-mono); font-size: 10px;
          letter-spacing: 3px; text-transform: uppercase;
          color: var(--brand-light);
          margin-bottom: 14px;
        }
        .ft-banner-eyebrow::before {
          content: ''; width: 20px; height: 1px;
          background: var(--brand-grad);
        }
        .ft-banner-title {
          font-family: var(--font-display);
          font-size: clamp(24px, 3vw, 38px);
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.1; letter-spacing: -1px;
        }
        .ft-banner-title em {
          font-style: normal;
          background: var(--brand-grad);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ft-banner-sub {
          font-size: 14px; color: var(--text-muted);
          margin-top: 10px; font-weight: 300;
        }
        .ft-banner-actions {
          display: flex; gap: 12px; flex-wrap: wrap;
          position: relative; z-index: 1;
        }

        /* ── MAIN GRID ── */
        .ft-main {
          position: relative; z-index: 1;
          padding: 72px 56px 0;
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1fr;
          gap: 56px;
          max-width: 1400px; margin: 0 auto;
        }

        /* Brand column */
        .ft-logo {
          font-family: var(--font-display); font-size: 28px; font-weight: 800;
          color: var(--text-primary); text-decoration: none;
          letter-spacing: -1.5px;
          display: inline-flex; align-items: center; gap: 8px;
          margin-bottom: 20px;
        }
        .ft-logo-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--brand-grad);
          box-shadow: 0 0 14px var(--brand-hot);
          animation: ftPulse 2.5s ease-out infinite;
        }
        @keyframes ftPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: .6; transform: scale(1.5); }
        }
        .ft-tagline {
          font-size: 14px; color: var(--text-muted); line-height: 1.75;
          max-width: 280px; font-weight: 300; margin-bottom: 28px;
        }

        /* Stat chips — uses bg-raised + border-faint from design system */
        .ft-stats { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 28px; }
        .ft-stat-chip {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 14px; border-radius: 10px;
          background: var(--bg-raised);
          border: 1px solid var(--border-faint);
          transition: border-color .25s;
        }
        .ft-stat-chip:hover { border-color: var(--border-default); }
        .ft-stat-num {
          font-family: var(--font-display); font-size: 15px; font-weight: 800;
          color: var(--text-primary); letter-spacing: -0.4px;
        }
        .ft-stat-label {
          font-size: 11px; color: var(--text-muted);
          font-family: var(--font-mono);
        }

        /* Social links */
        .ft-socials { display: flex; gap: 8px; }
        .ft-social {
          width: 38px; height: 38px; border-radius: 10px;
          background: var(--bg-raised);
          border: 1px solid var(--border-faint);
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 700;
          color: var(--text-muted); text-decoration: none;
          transition: all .3s var(--ease);
        }
        .ft-social:hover {
          background: rgba(197,45,181,.12);
          border-color: var(--border-default);
          color: var(--brand-light);
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(197,45,181,.2);
        }

        /* Link columns */
        .ft-col-title {
          font-family: var(--font-display); font-size: 12px; font-weight: 700;
          color: var(--text-primary); margin-bottom: 22px;
          text-transform: uppercase; letter-spacing: 2px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border-faint);
          position: relative;
        }
        .ft-col-title::after {
          content: ''; position: absolute; bottom: -1px; left: 0;
          width: 28px; height: 1px;
          background: var(--brand-grad);
          transition: width .3s var(--ease);
        }
        .ft-col:hover .ft-col-title::after { width: 100%; }

        .ft-links { display: flex; flex-direction: column; gap: 2px; }
        .ft-links a {
          display: flex; align-items: center; gap: 9px;
          padding: 7px 10px; border-radius: 8px;
          font-size: 13.5px; color: var(--text-muted);
          text-decoration: none; font-weight: 400;
          border: 1px solid transparent;
          transition: all .25s var(--ease);
        }
        .ft-links a:hover {
          color: var(--text-primary);
          background: var(--bg-raised);
          border-color: var(--border-faint);
          padding-left: 16px;
        }
        .ft-link-icon { font-size: 13px; opacity: .45; transition: opacity .25s; }
        .ft-links a:hover .ft-link-icon { opacity: 1; }

        /* ── TAGS ── */
        .ft-tags-section {
          position: relative; z-index: 1;
          padding: 32px 56px;
          border-top: 1px solid var(--border-faint);
          margin-top: 56px;
        }
        .ft-tags-label {
          font-family: var(--font-mono); font-size: 10px;
          letter-spacing: 3px; text-transform: uppercase;
          color: var(--text-disabled); margin-bottom: 16px;
        }
        .ft-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .ft-tag {
          padding: 5px 14px; border-radius: 100px;
          font-size: 12px; font-weight: 500;
          background: var(--bg-raised);
          border: 1px solid var(--border-faint);
          color: var(--text-muted); text-decoration: none;
          transition: all .25s var(--ease);
        }
        .ft-tag:hover {
          border-color: var(--border-default);
          color: var(--brand-light);
          background: rgba(197,45,181,.1);
          transform: translateY(-2px);
        }

        /* ── BOTTOM BAR ── */
        .ft-bottom {
          position: relative; z-index: 1;
          padding: 24px 56px;
          border-top: 1px solid var(--border-faint);
          display: flex; align-items: center;
          justify-content: space-between;
          flex-wrap: wrap; gap: 16px;
        }
        .ft-copy {
          font-size: 13px; color: var(--text-disabled); font-weight: 300;
        }
        .ft-copy strong { color: var(--text-muted); font-weight: 500; }
        .ft-bottom-links { display: flex; }
        .ft-bottom-links a {
          font-size: 12px; color: var(--text-disabled); text-decoration: none;
          padding: 4px 16px; border-right: 1px solid var(--border-faint);
          transition: color .25s;
        }
        .ft-bottom-links a:last-child { border-right: none; }
        .ft-bottom-links a:hover { color: var(--text-primary); }
        .ft-made {
          font-size: 12px; color: var(--text-disabled);
          font-family: var(--font-mono);
          display: flex; align-items: center; gap: 6px;
        }
        .ft-made span { color: var(--brand-light); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .ft-main { grid-template-columns: 1.4fr 1fr 1fr; }
          .ft-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 768px) {
          .ft-banner      { margin: 56px 20px 0; padding: 36px 24px; }
          .ft-main        { grid-template-columns: 1fr 1fr; padding: 48px 20px 0; gap: 36px; }
          .ft-brand       { grid-column: 1 / -1; }
          .ft-newsletter  { margin: 40px 20px 0; padding: 28px 24px; flex-direction: column; align-items: flex-start; }
          .ft-nl-input    { width: 100%; }
          .ft-tags-section { padding: 24px 20px; }
          .ft-bottom      { padding: 20px; flex-direction: column; text-align: center; }
          .ft-bottom-links { flex-wrap: wrap; justify-content: center; }
          .ft-made        { display: none; }
        }
        @media (max-width: 480px) {
          .ft-main { grid-template-columns: 1fr; }
          .ft-banner-actions { flex-direction: column; }
          .ft-banner-actions a { width: 100%; justify-content: center; }
        }
      `}</style>

      <footer className="ft">
        <div className="ft-glow" />

        {/* ── CTA BANNER ── */}
        <div className="ft-banner">
          <div className="ft-banner-left">
            <div className="ft-banner-eyebrow">Ready to transform?</div>
            <h2 className="ft-banner-title">
              Ready To Give Your Hospital<br />
              A <em>Dedicated</em> IT Team?
            </h2>
            <p className="ft-banner-sub">
              Free consultation · No commitment · Response within 24 hrs
            </p>
          </div>
          <div className="ft-banner-actions">
            <a href="/#contact" className="mx-btn-primary">
              Book Free Consultation
            </a>
            <a href="tel:+919884021188" className="mx-btn-ghost">
              📞 Call Us Now
            </a>
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="ft-main">
          {/* Brand column */}
          <div className="ft-brand">
            <a href="#home" className="ft-logo">
              MedXL
              <span className="ft-logo-dot" />
            </a>
            <p className="ft-tagline">
              India's dedicated IT partner for 20–150 bedded hospitals.
              Technology that lets your clinical team focus on what matters: patient care.
            </p>

            {/* Stats chips */}
            <div className="ft-stats">
              {stats.map(s => (
                <div className="ft-stat-chip" key={s.label}>
                  <span style={{ fontSize: 14 }}>{s.icon}</span>
                  <div>
                    <div className="ft-stat-num">{s.num}</div>
                    <div className="ft-stat-label">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="ft-socials">
              {socials.map(s => (
                <a key={s.label} href={s.href} className="ft-social" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div className="ft-col" key={title}>
              <div className="ft-col-title">{title}</div>
              <ul className="ft-links">
                {links.map(l => (
                  <li key={l.label}>
                    <a href={l.href}>
                      <span className="ft-link-icon">{l.icon}</span>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        {/* ── TAGS ── */}
        <div className="ft-tags-section">
          <div className="ft-tags-label">Popular Topics</div>
          <div className="ft-tags">
            {tags.map(t => (
              <a href="#" className="ft-tag" key={t}>{t}</a>
            ))}
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="ft-bottom">
          <div className="ft-copy">
            Copyright © 2024 <strong>MedXL Ventures Private Limited</strong>.
            All rights reserved.
          </div>
          <div className="ft-bottom-links">
            <a href="/Terms">Terms of Use</a>
            <a href="/Privacy">Privacy Policy</a>
            <a href="/Cookies">Cookie Policy</a>
          </div>
          <div className="ft-made">
            Built with <span>♥</span> for Healthcare
          </div>
        </div>
      </footer>
    </>
  )
}