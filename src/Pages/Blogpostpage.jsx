import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { blogPosts, getPostBySlug, categoryAccent } from '../data/blogPosts'

function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })
}

function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-.5px', margin: '40px 0 16px' }}>{block.text}</h2>
    case 'h3':
      return <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18.5px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-.3px', margin: '28px 0 10px' }}>{block.text}</h3>
    case 'p':
      return <p style={{ fontSize: '15.5px', color: 'var(--text-secondary)', lineHeight: 1.85, fontWeight: 300, marginBottom: 18 }}>{block.text}</p>
    case 'note':
      return (
        <p style={{
          fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.8, fontStyle: 'italic',
          margin: '4px 0 22px', padding: '14px 20px', borderLeft: '2px solid var(--border-default)',
          background: 'var(--bg-raised)', borderRadius: '0 10px 10px 0',
        }}>{block.text}</p>
      )
    case 'bullets':
      return (
        <ul className="mx-feature-list" style={{ marginBottom: 22 }}>
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )
    case 'table':
      return (
        <div style={{ overflowX: 'auto', marginBottom: 26 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px' }}>
            <thead>
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i} style={{ textAlign: 'left', padding: '12px 16px', background: 'rgba(197,45,181,.10)', color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontWeight: 700, borderBottom: '1px solid var(--border-default)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-faint)', color: 'var(--text-secondary)', fontWeight: ci === 0 ? 600 : 300 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'faq':
      return (
        <div style={{ marginBottom: 22 }}>
          {block.items.map((item, i) => (
            <div key={i} style={{ padding: '18px 0', borderBottom: i < block.items.length - 1 ? '1px solid var(--border-faint)' : 'none' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>{item.q}</div>
              <div style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.8, fontWeight: 300 }}>{item.a}</div>
            </div>
          ))}
        </div>
      )
    case 'closing':
      return (
        <div style={{
          marginTop: 36, padding: '26px 28px', borderRadius: 16,
          background: 'var(--brand-grad)', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 20, flexWrap: 'wrap',
        }}>
          <p style={{ color: '#fff', fontSize: '14.5px', fontWeight: 500, lineHeight: 1.6, margin: 0, maxWidth: 480 }}>{block.text}</p>
          <Link to="/#contact" className="mx-btn-cta-white" style={{ flexShrink: 0 }}>Contact MedXL →</Link>
        </div>
      )
    default:
      return null
  }
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!post) {
    return (
      <div style={{ paddingTop: 70, background: 'var(--bg-base)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', minHeight: '60vh' }}>
        <Navbar />
        <div className="mx-container mx-text-center" style={{ padding: '100px 0' }}>
          <div className="mx-tag">404</div>
          <h1 className="mx-section-title">Article Not Found</h1>
          <p className="mx-section-sub" style={{ margin: '0 auto 28px' }}>
            This article may have moved or no longer exists.
          </p>
          <Link to="/blog" className="mx-btn-primary">← Back to Blog</Link>
        </div>
        <Footer />
      </div>
    )
  }

  const related = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3)

  return (
    <>
     <Helmet>
        {/* Basic SEO */}
        <title>{post.title} | MedXL Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <link
          rel="canonical"
          href={`https://medxl.in/blog/${post.slug}`}
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta
          property="og:url"
          content={`https://medxl.in/blog/${post.slug}`}
        />
        <meta
          property="og:image"
          content={`https://medxl.in${post.image}`}
        />
        <meta property="og:site_name" content="MedXL" />
        <meta property="og:locale" content="en_IN" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@medxl_in" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta
          name="twitter:image"
          content={`https://medxl.in${post.image}`}
        />

        {/* BlogPosting Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: `https://medxl.in${post.image}`,
            datePublished: post.date,
            dateModified: post.date,

            author: {
              "@type": "Organization",
              name: post.author
            },

            publisher: {
              "@type": "Organization",
              name: "MedXL",
              logo: {
                "@type": "ImageObject",
                url: "https://medxl.in/Favicon.jpeg"
              }
            },

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://medxl.in/blog/${post.slug}`
            },

            url: `https://medxl.in/blog/${post.slug}`
          })}
        </script>
      </Helmet>
      <style>{`
        .bpd-visual {
          height: 220px;
           max-width: 700px;
           margin: 0 auto 36px; border-radius: 22px; position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center; margin-bottom: 36px;
          background: radial-gradient(circle at 30% 20%, rgba(197,45,181,.30), transparent 60%), var(--bg-elevated);
          border: 1px solid var(--border-faint);
        }
        .bpd-visual::before {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(rgba(197,45,181,.18) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .bpd-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .bpd-related-card {
          display: flex; flex-direction: column; text-decoration: none;
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 16px; padding: 20px; transition: all .3s;
        }
        .bpd-related-card:hover { border-color: var(--border-default); background: var(--bg-elevated); transform: translateY(-3px); }
        .bpd-related-icon { font-size: 28px; margin-bottom: 10px; }
        .bpd-related-title { font-family: var(--font-display); font-size: 14.5px; font-weight: 700; color: var(--text-primary); line-height: 1.4; }
        @media (max-width: 768px) {
          .bpd-related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ paddingTop: 70, background: 'var(--bg-base)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
        <Navbar />

        <article style={{ padding: '56px 0 80px' }}>
          <div className="mx-container" style={{ maxWidth: 760 }}>

            <div className="mx-breadcrumb">
              <Link to="/">Home</Link> › <Link to="/blog">Blog</Link> › <span>{post.category}</span>
            </div>

            <div className={`mx-tag`} style={{ marginBottom: 18 }}>{post.category}</div>

            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4.5vw, 44px)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-1.5px', lineHeight: 1.12, marginBottom: 20 }}>
              {post.title}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', fontFamily: 'var(--font-mono)', fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: 32 }}>
              <span>👤 {post.author}</span>
              <span className="bp-dot" style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--text-muted)' }} />
              <span>{formatDate(post.date)}</span>
              <span className="bp-dot" style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--text-muted)' }} />
              <span>{post.readTime}</span>
            </div>

            

            {post.content.map((block, i) => <Block block={block} key={i} />)}

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 36, paddingTop: 24, borderTop: '1px solid var(--border-faint)' }}>
              {post.tags.map(t => (
                <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--brand-light)', background: 'rgba(197,45,181,.10)', border: '1px solid rgba(197,45,181,.25)', padding: '5px 12px', borderRadius: 100 }}>{t}</span>
              ))}
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="mx-section-surface">
            <div className="mx-container">
              <div className="mx-tag">Keep Reading</div>
              <h2 className="mx-section-title" style={{ fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 28 }}>More From the Blog</h2>
              <div className="bpd-related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
                {related.map(p => (
                  <Link to={`/blog/${p.slug}`} className="bpd-related-card" key={p.slug}>
                    <span className={`mx-icon-box ${categoryAccent[p.category] || 'brand'}`} style={{ width: 40, height: 40, fontSize: 18, marginBottom: 12 }}>{p.icon}</span>
                    <div className="bpd-related-title">{p.title}</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  )
}
