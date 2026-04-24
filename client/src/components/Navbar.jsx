import { useState, useEffect } from 'react'
 
const links = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Products',     href: '#' },
  { label: 'Services',     href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Blogs',        href: '#blogs' },
  { label: 'Contact',      href: '#contact' },
]
 
export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
 
  /* scroll detection */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
 
  /* lock body scroll while drawer is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])
 
  const close = () => setMenuOpen(false)
 
  return (
    <>
      <style>{`
        /* ---------- NAVBAR ---------- */
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
          height: 72px; padding: 0 60px;
          display: flex; align-items: center; justify-content: space-between;
          transition: background .4s, box-shadow .4s, height .3s;
        }
        .navbar.scrolled {
          background: rgba(5,13,26,.96);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 0 rgba(59,123,255,.15);
          height: 64px;
        }
 
        /* ---------- LOGO ---------- */
        .nav-logo {
          font-family:'Syne',sans-serif; font-size:26px; font-weight:800;
          color:#fff; text-decoration:none; letter-spacing:-.5px;
          flex-shrink:0; position:relative; z-index:10001;
        }
        .nav-logo em {
          font-style:normal;
          background:linear-gradient(135deg,#1354f9,#00d4ff);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
        }
 
        /* ---------- DESKTOP NAV LINKS ---------- */
        .nav-links {
          display:flex; align-items:center; gap:32px;
          list-style:none; margin:0; padding:0;
        }
        .nav-links a {
          font-family:'DM Sans',sans-serif; font-size:14px; font-weight:500;
          color:rgba(232,238,255,.75); text-decoration:none;
          transition:color .25s; position:relative; white-space:nowrap;
        }
        .nav-links a::after {
          content:''; position:absolute; bottom:-4px; left:0; right:0;
          height:2px; background:linear-gradient(90deg,#1354f9,#00d4ff);
          transform:scaleX(0); transition:transform .25s; border-radius:2px;
        }
        .nav-links a:hover { color:#fff; }
        .nav-links a:hover::after { transform:scaleX(1); }
 
        /* ---------- DESKTOP CTA ---------- */
        .nav-cta {
          background:linear-gradient(135deg,#1354f9,#3b7bff);
          color:#fff; padding:10px 22px; border-radius:8px;
          font-family:'DM Sans',sans-serif; font-weight:600; font-size:14px;
          text-decoration:none; flex-shrink:0;
          box-shadow:0 0 20px rgba(19,84,249,.4); transition:all .3s;
        }
        .nav-cta:hover { transform:translateY(-2px); box-shadow:0 0 32px rgba(19,84,249,.6); }
 
        /* ---------- HAMBURGER BUTTON ---------- */
        .hamburger {
          display: none;          /* shown only on mobile via media query */
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 42px; height: 42px;
          cursor: pointer;
          z-index: 10001;         /* above drawer */
          position: relative;
          flex-shrink: 0;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(59,123,255,.25);
          border-radius: 8px;
          transition: background .25s, border-color .25s;
        }
        .hamburger:hover {
          background: rgba(19,84,249,.15);
          border-color: rgba(59,123,255,.45);
        }
        .hamburger .bar {
          width: 20px; height: 2px;
          background: #fff; border-radius: 2px;
          transition: transform .35s cubic-bezier(.4,0,.2,1),
                      opacity   .35s cubic-bezier(.4,0,.2,1);
          transform-origin: center;
          display: block;
        }
        /* Morph into × */
        .hamburger.open .bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open .bar:nth-child(2) { opacity:0; transform:scaleX(0); }
        .hamburger.open .bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
 
        /* ---------- BACKDROP ---------- */
        .mob-backdrop {
          position: fixed; inset: 0;
          background: rgba(0,0,0,.55);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 9997;
          opacity: 0; pointer-events: none;
          transition: opacity .35s;
        }
        .mob-backdrop.open { opacity:1; pointer-events:auto; }
 
        /* ---------- SIDE DRAWER ---------- */
        .mob-drawer {
          position: fixed;
          top: 0; right: 0; bottom: 0;
          width: min(300px, 85vw);
          background: #060e1c;
          border-left: 1px solid rgba(59,123,255,.18);
          z-index: 9998;
          transform: translateX(100%);
          transition: transform .4s cubic-bezier(.4,0,.2,1);
          display: flex; flex-direction: column;
          padding: 90px 28px 40px;
          overflow-y: auto;
        }
        .mob-drawer.open { transform: translateX(0); }
 
        /* drawer nav links */
        .mob-drawer ul {
          list-style:none; margin:0; padding:0;
          display:flex; flex-direction:column; gap:4px;
          flex:1;
        }
        .mob-drawer ul li a {
          display: flex; align-items: center; justify-content: space-between;
          padding: 13px 16px; border-radius: 10px;
          font-family: 'DM Sans',sans-serif;
          font-size: 16px; font-weight: 500;
          color: rgba(232,238,255,.75);
          text-decoration: none;
          border: 1px solid transparent;
          transition: all .25s;
        }
        .mob-drawer ul li a:hover {
          background: rgba(19,84,249,.1);
          border-color: rgba(19,84,249,.2);
          color: #fff;
          padding-left: 22px;
        }
        .mob-arrow { color: rgba(59,123,255,.5); font-size:18px; }
 
        .mob-divider {
          height:1px; background:rgba(59,123,255,.1);
          margin:20px 0;
        }
        .mob-cta {
          display:block; text-align:center;
          background:linear-gradient(135deg,#1354f9,#3b7bff);
          color:#fff; padding:14px 24px; border-radius:10px;
          font-family:'DM Sans',sans-serif; font-weight:700; font-size:15px;
          text-decoration:none;
          box-shadow:0 8px 24px rgba(19,84,249,.4); transition:all .3s;
        }
        .mob-cta:hover { transform:translateY(-2px); box-shadow:0 12px 32px rgba(19,84,249,.55); }
 
        .mob-contact {
          display:flex; flex-direction:column; gap:8px; margin-top:20px;
        }
        .mob-contact a {
          display:flex; align-items:center; gap:10px;
          font-size:13px; color:rgba(200,212,240,.5);
          text-decoration:none; padding:8px 12px; border-radius:8px;
          transition:color .25s;
        }
        .mob-contact a:hover { color:rgba(200,212,240,.9); }
 
        /* ---------- RESPONSIVE BREAKPOINT ---------- */
        @media (max-width:960px) {
          .navbar    { padding:0 20px; }
          .nav-links { display:none !important; }
          .nav-cta   { display:none !important; }
          .hamburger { display:flex; }
        }
      `}</style>
 
      {/* ── NAVBAR BAR ── */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="nav-logo">Med<em>XL</em></a>
 
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.label}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
 
        <a href="#contact" className="nav-cta">Free Consultation</a>
 
        {/* Hamburger — visible on mobile only */}
        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          role="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </nav>
 
      {/* ── BACKDROP (click to close) ── */}
      <div className={`mob-backdrop ${menuOpen ? 'open' : ''}`} onClick={close} />
 
      {/* ── SLIDE-OUT DRAWER ── */}
      <div className={`mob-drawer ${menuOpen ? 'open' : ''}`}>
        <ul>
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} onClick={close}>
                {l.label}
                <span className="mob-arrow">›</span>
              </a>
            </li>
          ))}
        </ul>
 
        <div className="mob-divider" />
 
        <a href="#contact" className="mob-cta" onClick={close}>
          Free Consultation →
        </a>
 
        <div className="mob-contact">
          <a href="tel:+918148181288">📞 +91 8148181288</a>
          <a href="mailto:info@medxl.in">✉️ info@medxl.in</a>
        </div>
      </div>
    </>
  )
}