import { useState } from 'react'
 
const footerLinks = {
  Company: ['About', 'Our Products', 'Our Services', 'Blogs', 'Careers', 'Contacts'],
  'For Hospitals': ['Cloud Solutions', 'Data Analytics', 'Web Development', 'Mobile Apps', 'IT Consulting', 'Digital Marketing'],
  Products: ['LMS for Hospitals', 'Cloud based EHR', 'Cloud based HIMS', 'SaaS HMS', 'Cloud based LIMS', 'OP Billing'],
}
 
const tags = [
  'Data Analytics','Website Design','Web Development','Software Solutions',
  'Digital Marketing','eLearning','LMS for Healthcare','Healthcare IT Audit',
  'Cloud Based EHR','Cloud Solutions','Hospital Branding','Cloud Based HIMS',
]
 
export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
 
  return (
    <>
      <style>{`
        .footer {
          background: var(--navy-2);
          border-top: 1px solid rgba(59,123,255,0.1);
          padding: 80px 60px 0;
          position: relative; overflow: hidden;
        }
        .footer::before {
          content: '';
          position: absolute; top: -200px; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(19,84,249,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 48px; padding-bottom: 60px;
          border-bottom: 1px solid rgba(59,123,255,0.08);
          max-width: 1200px; margin: 0 auto;
        }
        .footer-brand {}
        .footer-logo {
          font-family: 'Syne', sans-serif; font-size: 28px;
          font-weight: 800; color: #fff; margin-bottom: 16px;
          display: inline-block;
        }
        .footer-logo em {
          font-style: normal;
          background: linear-gradient(135deg, #1354f9, #00d4ff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .footer-tagline {
          font-size: 14px; color: var(--text-muted); line-height: 1.7;
          margin-bottom: 28px; font-weight: 300; max-width: 280px;
        }
        .footer-socials { display: flex; gap: 10px; }
        .social-btn {
          width: 38px; height: 38px; border-radius: 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(59,123,255,0.15);
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; cursor: pointer;
          transition: all 0.3s; text-decoration: none;
        }
        .social-btn:hover {
          background: rgba(19,84,249,0.15);
          border-color: rgba(19,84,249,0.35);
          transform: translateY(-3px);
        }
        .footer-col-title {
          font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700;
          color: #fff; margin-bottom: 24px; text-transform: uppercase;
          letter-spacing: 1px;
        }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 12px; }
        .footer-links a {
          font-size: 14px; color: var(--text-muted); text-decoration: none;
          transition: color 0.25s; display: flex; align-items: center; gap: 6px;
          font-weight: 300;
        }
        .footer-links a::before {
          content: '›'; color: rgba(19,84,249,0.5); font-size: 16px;
          transition: color 0.25s;
        }
        .footer-links a:hover { color: rgba(200,212,240,0.9); }
        .footer-links a:hover::before { color: #1354f9; }
 
        /* Tags section */
        .footer-tags {
          max-width: 1200px; margin: 0 auto;
          padding: 40px 0; border-bottom: 1px solid rgba(59,123,255,0.08);
          display: flex; flex-wrap: wrap; gap: 10px;
        }
        .footer-tag {
          padding: 6px 14px; border-radius: 100px;
          font-size: 12px; font-weight: 600;
          background: rgba(10,22,40,0.8);
          border: 1px solid rgba(59,123,255,0.12);
          color: var(--text-muted);
          text-decoration: none; transition: all 0.25s;
        }
        .footer-tag:hover {
          border-color: rgba(59,123,255,0.3);
          color: #93c5fd; background: rgba(19,84,249,0.08);
        }
 
        /* Newsletter */
        .footer-newsletter {
          max-width: 1200px; margin: 0 auto;
          padding: 40px 0; border-bottom: 1px solid rgba(59,123,255,0.08);
          display: flex; align-items: center;
          justify-content: space-between; gap: 32px; flex-wrap: wrap;
        }
        .newsletter-text {}
        .newsletter-title {
          font-family: 'Syne', sans-serif; font-size: 20px;
          font-weight: 700; color: #fff; margin-bottom: 6px;
        }
        .newsletter-sub { font-size: 14px; color: var(--text-muted); font-weight: 300; }
        .newsletter-form {
          display: flex; gap: 12px; flex-shrink: 0; flex-wrap: wrap;
        }
        .newsletter-input {
          padding: 12px 20px; border-radius: 10px;
          background: rgba(5,13,26,0.8);
          border: 1px solid rgba(59,123,255,0.2);
          color: #e8eeff; font-family: 'DM Sans', sans-serif;
          font-size: 14px; outline: none; width: 260px;
          transition: border-color 0.3s;
        }
        .newsletter-input:focus { border-color: rgba(19,84,249,0.5); }
        .newsletter-input::placeholder { color: var(--text-muted); }
        .newsletter-btn {
          padding: 12px 24px; border-radius: 10px; border: none;
          background: linear-gradient(135deg, #1354f9, #3b7bff);
          color: #fff; font-family: 'DM Sans', sans-serif;
          font-weight: 700; font-size: 14px; cursor: pointer;
          transition: all 0.3s; white-space: nowrap;
          box-shadow: 0 4px 16px rgba(19,84,249,0.35);
        }
        .newsletter-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(19,84,249,0.5); }
 
        /* Bottom bar */
        .footer-bottom {
          max-width: 1200px; margin: 0 auto;
          padding: 24px 0; display: flex;
          align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 16px;
        }
        .footer-copy {
          font-size: 13px; color: var(--text-muted);
        }
        .footer-copy span { color: rgba(200,212,240,0.6); }
        .footer-bottom-links { display: flex; gap: 24px; }
        .footer-bottom-links a {
          font-size: 13px; color: var(--text-muted);
          text-decoration: none; transition: color 0.25s;
        }
        .footer-bottom-links a:hover { color: #fff; }
 
        @media (max-width: 1024px) {
          .footer-top { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .footer { padding: 60px 24px 0; }
          .footer-top { grid-template-columns: 1fr; gap: 36px; }
          .footer-newsletter { flex-direction: column; align-items: flex-start; }
          .newsletter-input { width: 100%; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>
 
      <footer className="footer">
        {/* Main grid */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">Med<em>XL</em></div>
            <p className="footer-tagline">
              Empowering hospitals and clinics with innovative technology solutions
              that streamline operations and elevate patient care.
            </p>
            <div className="footer-socials">
              {['𝕏','in','f','▶'].map((s,i) => (
                <a href="#" className="social-btn" key={i}>{s}</a>
              ))}
            </div>
          </div>
 
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <div className="footer-col-title">{title}</div>
              <ul className="footer-links">
                {links.map(l => <li key={l}><a href="#">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
 
        {/* Tags */}
        <div className="footer-tags">
          {tags.map(t => <a href="#" className="footer-tag" key={t}>{t}</a>)}
        </div>
 
        {/* Newsletter */}
        <div className="footer-newsletter">
          <div className="newsletter-text">
            <div className="newsletter-title">📬 Stay Updated</div>
            <div className="newsletter-sub">Subscribe to the latest technology trends in Healthcare.</div>
          </div>
          <div className="newsletter-form">
            {subscribed ? (
              <div style={{color:'#34d399', fontWeight:600, fontSize:15}}>
                ✅ Subscribed! Thank you.
              </div>
            ) : (
              <>
                <input
                  className="newsletter-input"
                  type="email" placeholder="Enter your email address"
                  value={email} onChange={e => setEmail(e.target.value)}
                />
                <button className="newsletter-btn"
                  onClick={() => { if (email) setSubscribed(true) }}>
                  Subscribe →
                </button>
              </>
            )}
          </div>
        </div>
 
        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-copy">
            Copyright © <span>MedXL Ventures Private Limited</span>, All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </footer>
    </>
  )
}