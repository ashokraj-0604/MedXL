const blogs = [
  {
    title: 'How Our Healthcare Software Solutions Drive Insights',
    author: 'Andrea Sait',
    date: '03/12/2024',
    comments: 7,
    tag: 'Data Analytics',
    tagColor: '#1354f9',
    readTime: '5 min read',
    gradient: 'linear-gradient(135deg, #0f2044, #1354f9)',
    excerpt: 'Discover how data-driven decision making is transforming hospital operations and improving patient outcomes across healthcare institutions globally.',
  },
  {
    title: 'Exploring Emerging Trends in Healthcare Software Development',
    author: 'Andrea Sait',
    date: '27/11/2024',
    comments: 24,
    tag: 'Technology',
    tagColor: '#7c3aed',
    readTime: '7 min read',
    gradient: 'linear-gradient(135deg, #1a0533, #7c3aed)',
    excerpt: 'From AI-powered diagnostics to cloud-based EHR systems, explore the technologies reshaping the future of digital healthcare infrastructure.',
  },
  {
    title: 'How Software Integration Can Improve Workflow in Healthcare',
    author: 'Andrea Sait',
    date: '18/11/2024',
    comments: 24,
    tag: 'Integration',
    tagColor: '#059669',
    readTime: '6 min read',
    gradient: 'linear-gradient(135deg, #021a10, #059669)',
    excerpt: 'Seamless software integration eliminates data silos, reduces manual errors, and streamlines clinical workflows — enabling staff to focus on patient care.',
  },
]
 
export default function Blogs() {
  return (
    <>
      <style>{`
        .blogs-section {
          padding: 120px 60px;
          background: var(--navy);
          position: relative; overflow: hidden;
        }
        .blogs-header {
          display: flex; align-items: flex-end;
          justify-content: space-between; margin-bottom: 64px;
          flex-wrap: wrap; gap: 24px;
        }
        .blogs-view-all {
          display: inline-flex; align-items: center; gap: 8px;
          color: #3b7bff; font-weight: 600; font-size: 14px;
          text-decoration: none; transition: gap 0.3s;
        }
        .blogs-view-all:hover { gap: 14px; }
        .blogs-grid {
          display: grid; grid-template-columns: repeat(3,1fr);
          gap: 28px; max-width: 1200px; margin: 0 auto;
        }
        .blog-card {
          background: rgba(10,22,40,0.7);
          border: 1px solid rgba(59,123,255,0.1);
          border-radius: 20px; overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          cursor: pointer;
          display: flex; flex-direction: column;
        }
        .blog-card:hover {
          transform: translateY(-8px);
          border-color: rgba(59,123,255,0.25);
          box-shadow: 0 24px 64px rgba(0,0,0,0.4);
        }
        .blog-thumbnail {
          height: 180px; position: relative;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }
        .blog-thumbnail-bg { position: absolute; inset: 0; }
        .blog-thumbnail-icon { font-size: 48px; position: relative; z-index: 1; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4)); }
        .blog-thumbnail-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(5,13,26,0.9) 100%);
        }
        .blog-content { padding: 28px; display: flex; flex-direction: column; flex: 1; }
        .blog-tag {
          display: inline-block; font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 1.5px;
          padding: 3px 10px; border-radius: 100px;
          margin-bottom: 14px;
        }
        .blog-title {
          font-family: 'Syne', sans-serif; font-size: 17px; font-weight: 700;
          color: #fff; line-height: 1.4; margin-bottom: 12px;
          transition: color 0.3s;
        }
        .blog-card:hover .blog-title { color: #93c5fd; }
        .blog-excerpt {
          font-size: 13px; color: var(--text-muted); line-height: 1.65;
          font-weight: 300; flex: 1;
        }
        .blog-meta {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: 20px; padding-top: 20px;
          border-top: 1px solid rgba(59,123,255,0.08);
        }
        .blog-meta-left { font-size: 12px; color: var(--text-muted); }
        .blog-meta-left strong { color: rgba(200,212,240,0.7); font-weight: 600; }
        .blog-read {
          font-size: 12px; font-weight: 700; color: #3b7bff;
          display: flex; align-items: center; gap: 4px;
        }
        @media (max-width: 1024px) { .blogs-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 640px) {
          .blogs-section { padding: 80px 24px; }
          .blogs-grid { grid-template-columns: 1fr; }
        }
      `}</style>
 
      <section className="blogs-section" id="blogs">
        <div className="container">
          <div className="blogs-header">
            <div>
              <div className="section-label">Our Articles</div>
              <h2 className="section-title">Latest Articles</h2>
            </div>
            <a href="#" className="blogs-view-all">View All Articles →</a>
          </div>
          <div className="blogs-grid">
            {blogs.map((b, i) => (
              <div className="blog-card" key={i}>
                <div className="blog-thumbnail">
                  <div className="blog-thumbnail-bg" style={{background: b.gradient}} />
                  <div className="blog-thumbnail-overlay" />
                  <span className="blog-thumbnail-icon">
                    {['📊','💡','🔗'][i]}
                  </span>
                </div>
                <div className="blog-content">
                  <span className="blog-tag" style={{
                    background: `${b.tagColor}18`, color: b.tagColor
                  }}>{b.tag}</span>
                  <div className="blog-title">{b.title}</div>
                  <p className="blog-excerpt">{b.excerpt}</p>
                  <div className="blog-meta">
                    <div className="blog-meta-left">
                      By <strong>{b.author}</strong> · {b.date} · {b.readTime}
                    </div>
                    <span className="blog-read">Read →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
 