const clients = [
  { name: 'Hospital Website & Appointment Booking ',      icon: '🏥' },
  { name: 'Hospital Management System(HMS) ',     icon: '🖥️' },
  { name: 'Electronic Health Records(EHR)',        icon: '📋' },
  { name: 'LMS for Healthcare Institutions',     icon: '🎓' },
  { name: 'Social Media Management',       icon: '📱' },
  { name: 'Cloud Hosting & Maintenance',           icon: '☁️' },
  { name: 'Cybersecurity & Compliance',   icon: '🛡️' },
  { name: 'Data Analytics & BI',         icon: '📊' },
]
export default function Clients() {
  return (
    <>
      <style>{`
        .clients {
          padding: 48px 0;
          background: var(--bg-surface);
          border-top: 1px solid var(--border-faint);
          border-bottom: 1px solid var(--border-faint);
          overflow: hidden;
        }
        .clients-label {
          text-align: center; margin-bottom: 24px;
          font-family: var(--font-mono); font-size: 10px;
          letter-spacing: 3px; text-transform: uppercase;
          color: var(--text-disabled);
        }
        .marquee-wrap {
          overflow: hidden;
          mask: linear-gradient(90deg,transparent,black 12%,black 88%,transparent);
          -webkit-mask: linear-gradient(90deg,transparent,black 12%,black 88%,transparent);
        }
        .marquee-row {
          display: flex; min-width: max-content;
          animation: marquee-ltr 30s linear infinite;
          padding: 4px 0;
        }
        .marquee-row:hover { animation-play-state: paused; }
        .marquee-chip {
          display: flex; align-items: center; gap: 9px;
          padding: 10px 24px; margin: 0 6px;
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 100px; white-space: nowrap; cursor: default;
          transition: all .3s var(--ease);
          font-family: var(--font-body); font-size: 13.5px; font-weight: 500;
          color: var(--text-secondary);
        }
        .marquee-chip:hover {
          border-color: var(--border-default); color: var(--text-primary);
          background: var(--bg-elevated); transform: translateY(-2px);
        }
      `}</style>
      <section className="clients">
        <div className="clients-label">Trusted by 1,800+ Healthcare Institutions Across India</div>
        <div className="marquee-wrap">
          <div className="marquee-row">
            {[...clients,...clients,...clients].map((c,i)=>(
              <div className="marquee-chip" key={i}>
                <span>{c.icon}</span>{c.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}