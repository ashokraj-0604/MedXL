import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
 
// Drop the matching headshots in src/assets/team/ (krrishiv.jpg, vasu.jpg,
// aakash.jpg are provided alongside this file). Ashok has no photo yet —
// his card renders an initials avatar in the same style until one is added.
import krrishivPhoto from '../assets/team/krrishiv.jpg'
import vasuPhoto from '../assets/team/vasu.jpg'
import aakashPhoto from '../assets/team/aakash.jpg'
import ashokPhoto from '../assets/team/ashok.jpg'
import guruPhoto from '../assets/team/guru.jpg'
const team = [
  {
    name: 'Ashok Raj A ',
    role: 'Fullstack Developer',                 // ← add Ashok's title here
    linkedin: 'https://www.linkedin.com/in/ashokraj0604/',             // ← add Ashok's LinkedIn URL here
    photo: ashokPhoto,              // ← add Ashok's photo import here once available
    accentRgb: '197,45,181',  // brand magenta
  },
  {
    name: 'Krrishiv B',
    role: 'Business Development Associate',
    linkedin: 'https://www.linkedin.com/in/krrishivb',
    photo: krrishivPhoto,
    accentRgb: '0,175,160',   // teal
  },
  {
    name: 'Guru Ganesh S',
    role: 'Business Development Associate',
    linkedin: 'https://linkedin.com/in/guruganesh7',
    photo: guruPhoto,
    accentRgb: '245,166,35',  // gold
  },
  {
    name: 'Vasu P',
    role: 'Project Management Associate',
    linkedin: 'https://linkedin.com/in/vasu-p-7b6aa9390',
    photo: vasuPhoto,
    accentRgb: '56,189,248',  // sky blue
  },
  {
    name: 'Aakash Priyadharshan M',
    role: 'Product Management Associate',
    linkedin: 'https://linkedin.com/in/aakash-priyadharshan-m-6090b42b3',
    photo: aakashPhoto,
    accentRgb: '245,166,35',  // gold
  },
  
]
 
function initialsOf(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase()
}
 
export default function TeamPage() {
  const blobRef = useRef(null)
 
  useEffect(() => {
    const fn = (e) => {
      if (!blobRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 40
      const y = (e.clientY / window.innerHeight - 0.5) * 40
      blobRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
    }
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])
 
  return (
    <>
    <Helmet>
        <title>Our Team | MedXL</title>
        <meta name="description" content="Meet the talented professionals behind MedXL's innovative healthcare solutions." />
        <link rel="canonical" content="https://medxl.in/team" />
      </Helmet>
      <style>{`
        .tm-page { background: var(--bg-base); color: var(--text-primary); font-family: var(--font-body); }
 
        /* ════════════════════════════════════════
           HERO
        ════════════════════════════════════════ */
        .tm-hero { position: relative; overflow: hidden; padding: 130px 56px 80px; background: var(--bg-base); }
        .tm-hero-mesh {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background:
            radial-gradient(ellipse 60% 55% at 14% 50%, rgba(197,45,181,.16) 0%, transparent 65%),
            radial-gradient(ellipse 45% 40% at 86% 18%, rgba(92,37,132,.14) 0%, transparent 60%),
            radial-gradient(ellipse 35% 35% at 68% 88%, rgba(140,42,158,.12) 0%, transparent 60%);
        }
        .tm-hero-grid {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image:
            linear-gradient(rgba(197,45,181,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(197,45,181,.05) 1px, transparent 1px);
          background-size: 72px 72px;
        }
        .tm-hero-blob {
          position: absolute; top: 40%; left: 80%; transform: translate(-50%, -50%);
          width: 560px; height: 560px;
          background: radial-gradient(circle, rgba(197,45,181,.10) 0%, transparent 70%);
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: blob 13s ease-in-out infinite; filter: blur(50px);
          transition: transform 1.4s cubic-bezier(.4,0,.2,1); pointer-events: none; z-index: 0;
        }
        .tm-hero-inner { position: relative; z-index: 2; max-width: 720px; margin: 0 auto; text-align: center; }
        .tm-breadcrumb {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--text-disabled); margin-bottom: 22px;
          animation: fade-up .5s var(--ease) both;
        }
        .tm-breadcrumb a { color: var(--brand-light); text-decoration: none; transition: color .2s; }
        .tm-breadcrumb a:hover { color: var(--text-primary); }
        .tm-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
          color: var(--brand-light); background: rgba(197,45,181,.12); border: 1px solid rgba(197,45,181,.28);
          padding: 6px 16px; border-radius: 100px; margin: 0 auto 24px; width: fit-content;
          animation: fade-up .6s var(--ease) both;
        }
        .tm-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--brand-hot); position: relative; flex-shrink: 0; }
        .tm-eyebrow-dot::after {
          content: ''; position: absolute; inset: -4px; border-radius: 50%; border: 1px solid var(--brand-hot);
          animation: pulse-ring 2s ease-out infinite;
        }
        .tm-hero-title {
          font-family: var(--font-display); font-weight: 800; font-size: clamp(38px, 5.2vw, 64px);
          letter-spacing: -2.2px; line-height: 1.05; color: var(--text-primary); margin-bottom: 20px;
          animation: fade-up .6s .1s var(--ease) both;
        }
        .tm-hero-title em {
          font-style: normal; background: var(--brand-grad);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .tm-hero-desc {
          font-size: 16px; color: var(--text-secondary); line-height: 1.8; font-weight: 300;
          max-width: 560px; margin: 0 auto; animation: fade-up .6s .2s var(--ease) both;
        }
 
        /* ════════════════════════════════════════
           TEAM GRID
        ════════════════════════════════════════ */
        .tm-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
        }
        .tm-card {
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 22px; padding: 36px 24px 28px; text-align: center;
          position: relative; overflow: hidden;
          transition: all .3s var(--ease);
        }
        .tm-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, rgba(var(--accent),1), rgba(197,45,181,1));
          transform: scaleX(0); transform-origin: left; transition: transform .35s var(--ease);
        }
        .tm-card:hover { transform: translateY(-6px); border-color: rgba(var(--accent),.4); background: var(--bg-elevated); }
        .tm-card:hover::before { transform: scaleX(1); }
 
        .tm-avatar-wrap {
          width: 128px; height: 128px; margin: 0 auto 22px; position: relative;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(var(--accent),.5), rgba(197,45,181,.5));
          padding: 3px;
        }
        .tm-avatar-inner {
          width: 100%; height: 100%; border-radius: 50%; overflow: hidden;
          background: var(--bg-elevated); display: flex; align-items: center; justify-content: center;
        }
        .tm-avatar-photo {
          width: 100%; height: 100%; object-fit: cover; display: block;
          filter: saturate(.92); transition: filter .3s;
        }
        .tm-card:hover .tm-avatar-photo { filter: saturate(1.05); }
        .tm-avatar-initials {
          font-family: var(--font-display); font-weight: 800; font-size: 34px;
          color: rgba(var(--accent),1); letter-spacing: -1px;
        }
        .tm-avatar-placeholder-ring {
          position: absolute; inset: -3px; border-radius: 50%;
          border: 2px dashed rgba(var(--accent),.45);
        }
 
        .tm-name {
          font-family: var(--font-display); font-size: 17px; font-weight: 700;
          color: var(--text-primary); letter-spacing: -.3px; margin-bottom: 6px;
        }
        .tm-role {
          font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .5px;
          color: var(--text-muted); line-height: 1.5; margin-bottom: 18px;
          min-height: 16px;
        }
        .tm-role.tm-role-empty {
          color: rgba(var(--accent),.7); font-style: italic;
        }
 
        .tm-linkedin {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: var(--font-body); font-size: 12.5px; font-weight: 600;
          color: rgb(var(--accent)); text-decoration: none;
          padding: 7px 16px; border-radius: 100px;
          background: rgba(var(--accent),.10); border: 1px solid rgba(var(--accent),.28);
          transition: background .25s, border-color .25s, gap .25s;
        }
        .tm-linkedin:hover { background: rgba(var(--accent),.18); border-color: rgba(var(--accent),.5); gap: 10px; }
        .tm-linkedin-disabled {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: var(--font-body); font-size: 12.5px; font-weight: 600;
          color: var(--text-disabled); padding: 7px 16px; border-radius: 100px;
          background: var(--bg-elevated); border: 1px solid var(--border-faint);
        }
 
        /* ════════════════════════════════════════
           CTA BANNER
        ════════════════════════════════════════ */
        .tm-cta-wrap { padding: 0 56px 96px; max-width: 1200px; margin: 0 auto; }
        .tm-cta {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, rgba(197,45,181,.18) 0%, rgba(92,37,132,.22) 100%);
          border: 1px solid rgba(197,45,181,.3); border-radius: 28px; padding: 52px 56px;
          display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap;
        }
        .tm-cta::before {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(rgba(197,45,181,.07) 1px, transparent 1px);
          background-size: 32px 32px; pointer-events: none;
        }
        .tm-cta::after {
          content: ''; position: absolute; top: -80px; right: -80px; width: 320px; height: 320px;
          border-radius: 50%; background: rgba(197,45,181,.14); filter: blur(60px); pointer-events: none;
        }
        .tm-cta-inner { position: relative; z-index: 1; max-width: 600px; }
        .tm-cta-chip {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
          color: var(--text-muted); background: var(--bg-raised); border: 1px solid var(--border-faint);
          padding: 5px 14px; border-radius: 100px; margin-bottom: 18px;
        }
        .tm-cta h2 {
          font-family: var(--font-display); font-size: clamp(24px,3vw,36px); font-weight: 800;
          color: var(--text-primary); letter-spacing: -1px; margin-bottom: 12px;
        }
        .tm-cta p { font-size: 14.5px; color: var(--text-secondary); line-height: 1.75; margin: 0; }
        .tm-cta-btns { position: relative; z-index: 1; display: flex; gap: 14px; flex-wrap: wrap; flex-shrink: 0; }
 
        /* ════════════════════════════════════════
           RESPONSIVE
        ════════════════════════════════════════ */
        @media (max-width: 1024px) {
          .tm-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .tm-hero { padding: 110px 20px 60px; }
        }
        @media (max-width: 600px) {
          .tm-grid { grid-template-columns: 1fr; }
          .tm-cta { padding: 36px 28px; flex-direction: column; align-items: flex-start; }
          .tm-cta-wrap { padding: 0 20px 72px; }
        }
      `}</style>
 
      <div className="tm-page">
        <Navbar />
 
        {/* ── HERO ── */}
        <section className="tm-hero">
          <div className="tm-hero-mesh" />
          <div className="tm-hero-grid" />
          <div className="tm-hero-blob" ref={blobRef} />
 
          <div className="tm-hero-inner">
            <div className="tm-breadcrumb">
              <Link to="/">Home</Link><span>›</span><span>Team</span>
            </div>
 
            <div className="tm-eyebrow">
              <span className="tm-eyebrow-dot" />
              Our Team
            </div>
 
            <h1 className="tm-hero-title">
              The People Behind <em>MedXL</em>
            </h1>
 
            <p className="tm-hero-desc">
              A small, focused team building healthcare technology for Indian
              hospitals — from product and engineering to the people who help
              hospitals get started.
            </p>
          </div>
        </section>
 
        {/* ── TEAM GRID ── */}
        <section className="mx-section" style={{ paddingTop: 0 }}>
          <div className="mx-container">
            <div className="tm-grid">
              {team.map(member => (
                <div className="tm-card" key={member.name} style={{ '--accent': member.accentRgb }}>
                  <div className="tm-avatar-wrap">
                    <div className="tm-avatar-inner">
                      {member.photo ? (
                        <img src={member.photo} alt={member.name} className="tm-avatar-photo" />
                      ) : (
                        <span className="tm-avatar-initials">{initialsOf(member.name)}</span>
                      )}
                    </div>
                    {!member.photo && <div className="tm-avatar-placeholder-ring" />}
                  </div>
 
                  <div className="tm-name">{member.name}</div>
                  <div className={`tm-role${!member.role ? ' tm-role-empty' : ''}`}>
                    {member.role || 'Role coming soon'}
                  </div>
 
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      className="tm-linkedin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      in&nbsp;LinkedIn →
                    </a>
                  ) : (
                    <span className="tm-linkedin-disabled">in&nbsp;LinkedIn</span>
                  )}
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