import { useState, useMemo, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { blogPosts, blogCategories, categoryAccent } from '../data/blogPosts'

const PAGE_SIZE = 6

// Maps the badge-variant strings already used in blogPosts.js (brand / gold /
// green / info / rose) to the RGB triplets those variants render as in CSS,
// so card accents, hover borders, and the dot-grid backgrounds can all be
// driven from a single per-post value via the --accent custom property.
const ACCENT_RGB = {
  brand: '197,45,181',
  gold: '245,166,35',
  green: '34,197,94',
  info: '96,165,250',
  rose: '239,68,68',
}

function accentFor(category) {
  return ACCENT_RGB[categoryAccent[category] || 'brand'] || ACCENT_RGB.brand
}

function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
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

  const featured = blogPosts.find(p => p.featured) || blogPosts[0]
  const rest = blogPosts.filter(p => p.slug !== featured.slug)

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return rest
    return rest.filter(p => p.category === activeCategory)
  }, [activeCategory, rest])

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  function handleCategoryClick(cat) {
    setActiveCategory(cat)
    setVisibleCount(PAGE_SIZE)
  }

  const heroStats = [
    { icon: '📚', num: `${blogPosts.length}+`, label: 'Articles' },
    { icon: '🗂️', num: `${blogCategories.length}`, label: 'Categories' },
    { icon: '🔄', num: 'Weekly', label: 'New Content' },
  ]

  const featuredAccent = accentFor(featured.category)

  return (
    <>
      <Helmet>
        <title>Blog | MedXL — Hospital IT Insights & Resources</title>
        <meta
          name="description"
          content="Practical guides on Hospital Management Systems, EHR, online appointment booking, hospital websites, and healthcare IT — written for 20–150 bedded hospitals in India."
        />
        <link rel="canonical" href="https://medxl.in/blog" />
      </Helmet>

      <style>{`
        .bp-page { background: var(--bg-base); color: var(--text-primary); font-family: var(--font-body); }

        /* ════════════════════════════════════════
           HERO — mesh / grid / blob, matches
           ProductsPage & ServiceDetailPage hero
        ════════════════════════════════════════ */
        .bp-hero {
          position: relative; overflow: hidden;
          padding: 130px 56px 70px;
          background: var(--bg-base);
        }
        .bp-hero-mesh {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background:
            radial-gradient(ellipse 60% 55% at 14% 50%, rgba(197,45,181,.16) 0%, transparent 65%),
            radial-gradient(ellipse 45% 40% at 86% 18%, rgba(92,37,132,.14) 0%, transparent 60%),
            radial-gradient(ellipse 35% 35% at 68% 88%, rgba(140,42,158,.12) 0%, transparent 60%);
        }
        .bp-hero-grid {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image:
            linear-gradient(rgba(197,45,181,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(197,45,181,.05) 1px, transparent 1px);
          background-size: 72px 72px;
        }
        .bp-hero-blob {
          position: absolute; top: 40%; left: 80%;
          transform: translate(-50%, -50%);
          width: 560px; height: 560px;
          background: radial-gradient(circle, rgba(197,45,181,.10) 0%, transparent 70%);
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: blob 13s ease-in-out infinite;
          filter: blur(50px);
          transition: transform 1.4s cubic-bezier(.4,0,.2,1);
          pointer-events: none; z-index: 0;
        }
        .bp-hero-inner {
          position: relative; z-index: 2;
          max-width: 720px; margin: 0 auto; text-align: center;
        }
        .bp-breadcrumb {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--text-disabled);
          margin-bottom: 22px;
          animation: fade-up .5s var(--ease) both;
        }
        .bp-breadcrumb a { color: var(--brand-light); text-decoration: none; transition: color .2s; }
        .bp-breadcrumb a:hover { color: var(--text-primary); }

        .bp-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: var(--font-mono); font-size: 10px;
          letter-spacing: 3px; text-transform: uppercase;
          color: var(--brand-light);
          background: rgba(197,45,181,.12); border: 1px solid rgba(197,45,181,.28);
          padding: 6px 16px; border-radius: 100px;
          margin: 0 auto 24px; width: fit-content;
          animation: fade-up .6s var(--ease) both;
        }
        .bp-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--brand-hot); position: relative; flex-shrink: 0;
        }
        .bp-eyebrow-dot::after {
          content: ''; position: absolute; inset: -4px; border-radius: 50%;
          border: 1px solid var(--brand-hot);
          animation: pulse-ring 2s ease-out infinite;
        }

        .bp-hero-title {
          font-family: var(--font-display); font-weight: 800;
          font-size: clamp(38px, 5.2vw, 64px);
          letter-spacing: -2.2px; line-height: 1.05;
          color: var(--text-primary); margin-bottom: 20px;
          animation: fade-up .6s .1s var(--ease) both;
        }
        .bp-hero-title em {
          font-style: normal;
          background: var(--brand-grad);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .bp-hero-desc {
          font-size: 16px; color: var(--text-secondary); line-height: 1.8;
          font-weight: 300; max-width: 560px; margin: 0 auto 32px;
          animation: fade-up .6s .2s var(--ease) both;
        }
        .bp-hero-actions {
          display: flex; gap: 14px; flex-wrap: wrap; justify-content: center;
          margin-bottom: 44px;
          animation: fade-up .6s .3s var(--ease) both;
        }

        .bp-hero-stats {
          display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;
          padding-top: 32px; border-top: 1px solid var(--border-faint);
          animation: fade-up .6s .4s var(--ease) both;
        }
        .bp-hero-stat {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 18px; border-radius: 12px;
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          transition: border-color .3s, background .3s;
        }
        .bp-hero-stat:hover { border-color: var(--border-default); background: var(--bg-elevated); }
        .bp-hero-stat-icon {
          width: 30px; height: 30px; border-radius: 8px;
          background: rgba(197,45,181,.12); border: 1px solid rgba(197,45,181,.25);
          display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0;
        }
        .bp-hero-stat-num { font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--text-primary); letter-spacing: -.4px; line-height: 1; text-align: left; }
        .bp-hero-stat-label { font-family: var(--font-mono); font-size: 9.5px; color: var(--text-muted); margin-top: 3px; letter-spacing: .5px; text-transform: uppercase; text-align: left; }

        /* ════════════════════════════════════════
           SECTION LABEL (shared)
        ════════════════════════════════════════ */
        .bp-section-label {
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 3px;
          text-transform: uppercase; color: var(--brand-light);
          background: rgba(197,45,181,.09); border: 1px solid rgba(197,45,181,.25);
          padding: 5px 14px; border-radius: 100px; width: fit-content; margin-bottom: 16px;
        }

        /* ════════════════════════════════════════
           FEATURED POST
        ════════════════════════════════════════ */
        .bp-featured {
          display: grid; grid-template-columns: 1fr 1fr;
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 24px; overflow: hidden; text-decoration: none;
          position: relative;
          transition: border-color .3s, transform .3s, background .3s;
        }
        .bp-featured::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, rgba(var(--accent),1), rgba(197,45,181,1));
          transform: scaleX(0); transform-origin: left;
          transition: transform .4s var(--ease); z-index: 3;
        }
        .bp-featured:hover { border-color: rgba(var(--accent),.4); transform: translateY(-4px); background: var(--bg-elevated); }
        .bp-featured:hover::before { transform: scaleX(1); }

        .bp-featured-visual {
          position: relative; min-height: 300px;
          background: radial-gradient(circle at 30% 20%, rgba(var(--accent),.28), transparent 60%), var(--bg-elevated);
          display: flex; align-items: center; justify-content: center;
        }
        .bp-featured-visual::before {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(rgba(var(--accent),.20) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .bp-featured-icon { font-size: 80px; position: relative; z-index: 1; filter: drop-shadow(0 8px 24px rgba(0,0,0,.4)); }
        .bp-featured-badge {
          position: absolute; top: 18px; left: 18px; z-index: 1;
          display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--font-mono); font-size: 10px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase; color: #fff;
          background: linear-gradient(120deg, rgba(var(--accent),1), rgba(197,45,181,1));
          padding: 6px 14px; border-radius: 100px;
        }
        .bp-featured-body { padding: 44px 48px; display: flex; flex-direction: column; justify-content: center; }
        .bp-featured-meta {
          display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
          font-family: var(--font-mono); font-size: 11.5px; color: var(--text-muted);
          margin-bottom: 16px; letter-spacing: .3px;
        }
        .bp-dot { width: 3px; height: 3px; border-radius: 50%; background: var(--text-muted); }
        .bp-featured-title {
          font-family: var(--font-display); font-size: clamp(22px, 2.6vw, 30px);
          font-weight: 700; color: var(--text-primary); line-height: 1.22;
          letter-spacing: -.5px; margin-bottom: 14px;
        }
        .bp-featured-excerpt { font-size: 14.5px; color: var(--text-secondary); line-height: 1.75; font-weight: 300; margin-bottom: 22px; }
        .bp-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 22px; }
        .bp-tag-chip {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 1px;
          text-transform: uppercase; color: var(--brand-light);
          background: rgba(197,45,181,.10); border: 1px solid rgba(197,45,181,.25);
          padding: 5px 11px; border-radius: 100px;
        }
        .bp-read-link {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 14px; font-weight: 700; color: rgba(var(--accent),1);
          transition: gap .25s;
        }
        .bp-featured:hover .bp-read-link { gap: 12px; }

        /* ════════════════════════════════════════
           FILTERS
        ════════════════════════════════════════ */
        .bp-filters {
          display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;
          margin: 0 0 44px;
        }
        .bp-filter-pill {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--font-body); font-size: 13px; font-weight: 600;
          padding: 9px 20px; border-radius: 100px; cursor: pointer;
          border: 1.5px solid var(--border-default); background: transparent;
          color: var(--text-secondary); transition: all .25s;
        }
        .bp-filter-dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(var(--pill-accent), 1); flex-shrink: 0; }
        .bp-filter-pill:hover { border-color: var(--border-strong); color: var(--text-primary); background: rgba(197,45,181,.08); }
        .bp-filter-pill.active {
          background: var(--brand-grad); border-color: transparent; color: #fff;
          box-shadow: 0 6px 20px rgba(197,45,181,.35);
        }
        .bp-filter-pill.active .bp-filter-dot { background: #fff; }

        /* ════════════════════════════════════════
           GRID CARDS
        ════════════════════════════════════════ */
        .bp-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
        }
        .bp-card {
          display: flex; flex-direction: column; text-decoration: none;
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 18px; overflow: hidden; position: relative;
          transition: all .3s var(--ease);
        }
        .bp-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, rgba(var(--accent),1), rgba(197,45,181,1));
          transform: scaleX(0); transform-origin: left;
          transition: transform .35s var(--ease); z-index: 2;
        }
        .bp-card:hover { transform: translateY(-5px); border-color: rgba(var(--accent),.4); background: var(--bg-elevated); }
        .bp-card:hover::before { transform: scaleX(1); }
        .bp-card-visual {
          height: 140px; position: relative; display: flex; align-items: center; justify-content: center;
          background: radial-gradient(circle at 70% 30%, rgba(var(--accent),.22), transparent 65%), var(--bg-elevated);
        }
        .bp-card-visual::before {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(rgba(var(--accent),.14) 1px, transparent 1px);
          background-size: 22px 22px;
        }
        .bp-card-icon { font-size: 44px; position: relative; z-index: 1; }
        .bp-card-badge {
          position: absolute; top: 12px; right: 12px; z-index: 1;
          font-family: var(--font-mono); font-size: 9px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase; white-space: nowrap;
          padding: 4px 10px; border-radius: 100px;
          background: rgba(var(--accent),.16); color: rgb(var(--accent));
          border: 1px solid rgba(var(--accent),.35);
        }
        .bp-card-body { padding: 22px; display: flex; flex-direction: column; flex: 1; }
        .bp-card-meta {
          font-family: var(--font-mono); font-size: 10.5px; color: var(--text-muted);
          letter-spacing: .5px; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;
        }
        .bp-card-title {
          font-family: var(--font-display); font-size: 16.5px; font-weight: 700;
          color: var(--text-primary); line-height: 1.32; letter-spacing: -.2px;
          margin-bottom: 10px;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .bp-card-excerpt {
          font-size: 13px; color: var(--text-secondary); line-height: 1.65; font-weight: 300;
          margin-bottom: 16px; flex: 1;
          display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
        }
        .bp-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 14px; border-top: 1px solid var(--border-faint);
          font-size: 12.5px;
        }
        .bp-card-author { color: var(--text-muted); display: flex; align-items: center; gap: 6px; }
        .bp-card-readlink { color: rgb(var(--accent)); font-weight: 700; }

        .bp-empty {
          text-align: center; padding: 60px 20px; color: var(--text-muted);
          font-size: 14px; grid-column: 1 / -1;
        }

        .bp-loadmore-wrap { display: flex; justify-content: center; margin-top: 48px; }

        /* ════════════════════════════════════════
           CTA BANNER
        ════════════════════════════════════════ */
        .bp-cta-wrap { padding: 0 56px 96px; max-width: 1200px; margin: 0 auto; }
        .bp-cta {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, rgba(197,45,181,.18) 0%, rgba(92,37,132,.22) 100%);
          border: 1px solid rgba(197,45,181,.3);
          border-radius: 28px; padding: 52px 56px;
          display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap;
        }
        .bp-cta::before {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(rgba(197,45,181,.07) 1px, transparent 1px);
          background-size: 32px 32px; pointer-events: none;
        }
        .bp-cta::after {
          content: ''; position: absolute; top: -80px; right: -80px;
          width: 320px; height: 320px; border-radius: 50%;
          background: rgba(197,45,181,.14); filter: blur(60px); pointer-events: none;
        }
        .bp-cta-inner { position: relative; z-index: 1; max-width: 600px; }
        .bp-cta-chip {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--text-muted);
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          padding: 5px 14px; border-radius: 100px; margin-bottom: 18px;
        }
        .bp-cta h2 {
          font-family: var(--font-display); font-size: clamp(24px,3vw,36px);
          font-weight: 800; color: var(--text-primary); letter-spacing: -1px; margin-bottom: 12px;
        }
        .bp-cta p { font-size: 14.5px; color: var(--text-secondary); line-height: 1.75; margin: 0; }
        .bp-cta-btns { position: relative; z-index: 1; display: flex; gap: 14px; flex-wrap: wrap; flex-shrink: 0; }

        /* ════════════════════════════════════════
           RESPONSIVE
        ════════════════════════════════════════ */
        @media (max-width: 1024px) {
          .bp-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .bp-hero { padding: 110px 20px 60px; }
        }
        @media (max-width: 768px) {
          .bp-featured { grid-template-columns: 1fr; }
          .bp-featured-visual { min-height: 200px; }
          .bp-featured-body { padding: 32px 24px; }
          .bp-grid { grid-template-columns: 1fr; }
          .bp-cta { padding: 36px 28px; flex-direction: column; align-items: flex-start; }
          .bp-cta-wrap { padding: 0 20px 72px; }
        }
      `}</style>

      <div className="bp-page">
        <Navbar />

        {/* ── HERO ── */}
        <section className="bp-hero">
          <div className="bp-hero-mesh" />
          <div className="bp-hero-grid" />
          <div className="bp-hero-blob" ref={blobRef} />

          <div className="bp-hero-inner">
            <div className="bp-breadcrumb">
              <Link to="/">Home</Link><span>›</span><span>Blog</span>
            </div>

            <div className="bp-eyebrow">
              <span className="bp-eyebrow-dot" />
              MedXL Blog
            </div>

            <h1 className="bp-hero-title">
              Hospital IT, <em>Explained Simply</em>
            </h1>

            <p className="bp-hero-desc">
              Practical guides on HMS, EHR, online booking, billing, and hospital
              websites — written for the people actually running 20–150 bedded
              hospitals.
            </p>

            <div className="bp-hero-actions">
              <a href="#articles" className="mx-btn-primary">Browse Articles ↓</a>
              <Link to="/products" className="mx-btn-ghost">Explore Our Products →</Link>
            </div>

            <div className="bp-hero-stats">
              {heroStats.map(s => (
                <div className="bp-hero-stat" key={s.label}>
                  <div className="bp-hero-stat-icon">{s.icon}</div>
                  <div>
                    <div className="bp-hero-stat-num">{s.num}</div>
                    <div className="bp-hero-stat-label">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED POST ── */}
        <section className="mx-section" style={{ paddingTop: 0 }}>
          <div className="mx-container">
            <Link
              to={`/blog/${featured.slug}`}
              className="bp-featured"
              style={{ '--accent': featuredAccent }}
            >
              <div className="bp-featured-visual">
                <span className="bp-featured-badge">✦ Featured</span>
                <span className="bp-featured-icon">{featured.icon}</span>
              </div>
              <div className="bp-featured-body">
                <div className="bp-featured-meta">
                  <span>{featured.author}</span>
                  <span className="bp-dot" />
                  <span>{formatDate(featured.date)}</span>
                  <span className="bp-dot" />
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="bp-featured-title">{featured.title}</h2>
                <p className="bp-featured-excerpt">{featured.excerpt}</p>
                <div className="bp-tags">
                  {featured.tags.map(t => <span className="bp-tag-chip" key={t}>{t}</span>)}
                </div>
                <span className="bp-read-link">Read Full Article →</span>
              </div>
            </Link>
          </div>
        </section>

        {/* ── FILTERS + GRID ── */}
        <section className="mx-section" style={{ paddingTop: 0 }} id="articles">
          <div className="mx-container">
            <div className="bp-filters">
              {['All', ...blogCategories].map(cat => {
                const pillAccent = cat === 'All' ? ACCENT_RGB.brand : accentFor(cat)
                return (
                  <button
                    key={cat}
                    className={`bp-filter-pill${activeCategory === cat ? ' active' : ''}`}
                    style={{ '--pill-accent': pillAccent }}
                    onClick={() => handleCategoryClick(cat)}
                  >
                    <span className="bp-filter-dot" />
                    {cat}
                  </button>
                )
              })}
            </div>

            <div className="bp-grid">
              {visible.length === 0 && (
                <div className="bp-empty">No articles in this category yet — check back soon.</div>
              )}
              {visible.map(post => {
                const accent = accentFor(post.category)
                return (
                  <Link
                    to={`/blog/${post.slug}`}
                    className="bp-card"
                    key={post.slug}
                    style={{ '--accent': accent }}
                  >
                    <div className="bp-card-visual">
                      <span className="bp-card-badge">{post.category}</span>
                      <span className="bp-card-icon">{post.icon}</span>
                    </div>
                    <div className="bp-card-body">
                      <div className="bp-card-meta">
                        <span>{formatDate(post.date)}</span>
                        <span className="bp-dot" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="bp-card-title">{post.title}</h3>
                      <p className="bp-card-excerpt">{post.excerpt}</p>
                      <div className="bp-card-footer">
                        <span className="bp-card-author">👤 {post.author}</span>
                        <span className="bp-card-readlink">Read →</span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
            {hasMore && (
              <div className="bp-loadmore-wrap">
                <button className="mx-btn-ghost" onClick={() => setVisibleCount(c => c + PAGE_SIZE)}>
                  Load More Articles
                </button>
              </div>
            )}
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}