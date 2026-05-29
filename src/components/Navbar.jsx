import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import medxlIcon from '../assets/Favicon.png'


const links = [
  { label: 'Home',         href: '/#home',        route: null      },
  { label: 'About',        href: '/about',         route: '/about'  },
  { label: 'Services',     href: '/services',     route: '/services' },
  { label: 'Products',     href: '/products',     route: '/products' },
  { label: 'Price',        href: '/price',        route: '/price'      },
  { label: 'Contact',      href: '/#contact',      route: null      },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <style>{`
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
          height: 72px; padding: 0 56px;
          display: flex; align-items: center; justify-content: space-between;
          transition: all .4s var(--ease);
        }
        .nav.scrolled {
          height: 64px;
          background: rgba(8,4,18,.96);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid var(--border-faint);
          box-shadow: 0 4px 32px rgba(197,45,181,.08);
        }
        .nav-logo-wrap {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; flex-shrink: 0; z-index: 10001;
        }
        .nav-logo-text {
          font-family: var(--font-display); font-size: 22px; font-weight: 800;
          background: var(--brand-grad);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; letter-spacing: .5px;
        }
        .nav-links {
          display: flex; align-items: center; gap: 32px;
          list-style: none; margin: 0; padding: 0;
        }
        .nav-links a {
          font-family: var(--font-body); font-size: 13.5px; font-weight: 500;
          color: var(--text-secondary); text-decoration: none;
          transition: color .2s; position: relative;
        }
        .nav-links a::after {
          content: ''; position: absolute; bottom: -4px; left: 0; right: 0;
          height: 1.5px; background: var(--brand-grad);
          transform: scaleX(0); transform-origin: left;
          transition: transform .3s var(--ease); border-radius: 2px;
        }
        .nav-links a:hover { color: var(--text-primary); }
        .nav-links a:hover::after { transform: scaleX(1); }
        .nav-cta {
          background: var(--brand-grad); color: #fff;
          padding: 9px 22px; border-radius: 100px;
          font-family: var(--font-body); font-weight: 600; font-size: 13px;
          text-decoration: none; flex-shrink: 0;
          box-shadow: 0 4px 18px rgba(197,45,181,.4);
          transition: all .3s var(--ease); letter-spacing: .2px;
        }
        .nav-cta:hover {
          background: var(--brand-grad-h);
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(197,45,181,.5);
        }
        /* Phone link */
        .nav-phone {
          font-family: var(--font-mono); font-size: 11px;
          color: var(--text-muted); text-decoration: none;
          letter-spacing: .5px; transition: color .2s;
        }
        .nav-phone:hover { color: var(--brand-light); }

        /* Hamburger */
        .nav-ham {
          display: none; flex-direction: column; justify-content: center;
          align-items: center; gap: 5px;
          width: 42px; height: 42px; border-radius: 10px;
          background: var(--bg-raised); border: 1px solid var(--border-subtle);
          cursor: pointer; z-index: 10001; flex-shrink: 0; transition: all .25s;
        }
        .nav-ham:hover { background: var(--bg-elevated); border-color: var(--border-default); }
        .nav-ham .bar {
          width: 18px; height: 1.5px; background: var(--text-primary); border-radius: 2px;
          transition: transform .35s var(--ease), opacity .3s; display: block;
        }
        .nav-ham.open .bar:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .nav-ham.open .bar:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nav-ham.open .bar:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* Backdrop */
        .nav-backdrop {
          position: fixed; inset: 0; z-index: 9997;
          background: rgba(4,2,10,.7); backdrop-filter: blur(6px);
          opacity: 0; pointer-events: none; transition: opacity .35s;
        }
        .nav-backdrop.open { opacity: 1; pointer-events: auto; }

        /* Drawer */
        .nav-drawer {
          position: fixed; top: 0; right: 0; bottom: 0;
          width: min(310px,88vw); z-index: 9998;
          background: var(--bg-surface);
          border-left: 1px solid var(--border-subtle);
          box-shadow: -8px 0 40px rgba(197,45,181,.12);
          transform: translateX(100%);
          transition: transform .4s var(--ease);
          display: flex; flex-direction: column;
          padding: 88px 28px 40px; overflow-y: auto;
        }
        .nav-drawer.open { transform: translateX(0); }
        .drawer-top {
          display: flex; align-items: center; gap: 10px; margin-bottom: 28px;
          padding-bottom: 24px; border-bottom: 1px solid var(--border-faint);
        }
        .drawer-links { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 4px; flex: 1; }
        .drawer-links li a {
          display: flex; align-items: center; justify-content: space-between;
          padding: 13px 16px; border-radius: 10px;
          font-family: var(--font-body); font-size: 15px; font-weight: 500;
          color: var(--text-secondary); text-decoration: none;
          border: 1px solid transparent; transition: all .25s;
        }
        .drawer-links li a:hover {
          background: var(--bg-elevated); border-color: var(--border-subtle);
          color: var(--text-primary); padding-left: 22px;
        }
        .drawer-arrow { color: var(--brand-light); font-size: 18px; }
        .drawer-sep { height: 1px; background: var(--border-faint); margin: 20px 0; }
        .drawer-cta {
          display: block; text-align: center;
          background: var(--brand-grad); color: #fff;
          padding: 14px; border-radius: 100px;
          font-family: var(--font-body); font-weight: 700; font-size: 14px;
          text-decoration: none; transition: all .3s;
          box-shadow: 0 8px 24px rgba(197,45,181,.4);
        }
        .drawer-cta:hover { background: var(--brand-grad-h); transform: translateY(-2px); }
        .drawer-meta { display: flex; flex-direction: column; gap: 10px; margin-top: 20px; }
        .drawer-meta a {
          display: flex; align-items: center; gap: 10px;
          font-family: var(--font-mono); font-size: 12px;
          color: var(--text-muted); text-decoration: none; padding: 8px 12px;
          border-radius: 8px; transition: color .2s;
        }
        .drawer-meta a:hover { color: var(--brand-light); }

        @media (max-width: 960px) {
          .nav { padding: 0 20px; }
          .nav-links, .nav-cta, .nav-phone { display: none !important; }
          .nav-ham { display: flex; }
        }
      `}</style>

      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="/" className="nav-logo-wrap">
          <img src={medxlIcon} alt="MedXL" width={34} height={34}
              style={{ display: 'block', flexShrink: 0 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <span className="nav-logo-text">MEDXL</span>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '9px',
              fontWeight: 500,
              color: 'var(--text-muted)',
              letterSpacing: '0.4px',
              whiteSpace: 'nowrap',
              marginTop: '-8px'
            }}>
              Where Hospitals Meet Excellence
            </span>
          </div>
        </a>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.label}>
              {l.route
                ? <Link to={l.route}>{l.label}</Link>
                : <a href={l.href}>{l.label}</a>}
            </li>
          ))}
        </ul>
        <div style={{display:'flex',alignItems:'center',gap:20}}>
          <a href="tel:+919884021188" className="nav-phone">📞 +91 98840 21188</a>
          <a href="/#contact" className="nav-cta">Free Consultation</a>
        </div>
        <div className={`nav-ham ${open ? 'open' : ''}`} onClick={() => setOpen(v => !v)}>
          <span className="bar"/><span className="bar"/><span className="bar"/>
        </div>
      </nav>

      <div className={`nav-backdrop ${open ? 'open' : ''}`} onClick={close} />
      <div className={`nav-drawer ${open ? 'open' : ''}`}>
       <div className="drawer-top">
        <img src={medxlIcon} alt="MedXL" width={30} height={30}
            style={{ display: 'block', flexShrink: 0 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: 18
            , fontWeight: 800,
            background: 'var(--brand-grad)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>
            MEDXL
          </span>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '9px',
            fontWeight: 500,
            color: 'var(--text-muted)',
            letterSpacing: '0.4px',
            whiteSpace: 'nowrap'
          }}>
            Where Hospitals Meet Excellence
          </span>
        </div>
      </div>
        <ul className="drawer-links">
          {links.map(l => (
            <li key={l.label}>
              {l.route
                ? <Link to={l.route} onClick={close}>{l.label}<span className="drawer-arrow">›</span></Link>
                : <a href={l.href} onClick={close}>{l.label}<span className="drawer-arrow">›</span></a>}
            </li>
          ))}
        </ul>
        <div className="drawer-sep" />
        <a href="/#contact" className="drawer-cta" onClick={close}>Free Consultation →</a>
        <div className="drawer-meta">
          <a href="tel:+919884021188">📞 +91 98840 21188</a>
          <a href="mailto:info@medxl.in">✉️ info@medxl.in</a>
        </div>
      </div>
    </>
  )
}