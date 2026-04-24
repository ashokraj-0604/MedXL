const clients = [
  'Apollo Hospitals','Fortis Healthcare','Max Healthcare','Manipal Hospitals',
  'Narayana Health','AIIMS Delhi','Aster DM Healthcare','Columbia Asia',
  'Medanta','SRL Diagnostics','Thyrocare','Dr Lal PathLabs',
]
 
export default function Clients() {
  return (
    <>
      <style>{`
        .clients-section {
          padding: 60px 0;
          background: rgba(10,22,40,0.8);
          border-top: 1px solid rgba(59,123,255,0.1);
          border-bottom: 1px solid rgba(59,123,255,0.1);
          overflow: hidden; position: relative;
        }
        .clients-label {
          text-align: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 600;
          color: rgba(200,212,240,0.4);
          letter-spacing: 3px; text-transform: uppercase;
          margin-bottom: 32px;
        }
        .marquee-track {
          display: flex; gap: 0; overflow: hidden;
          -webkit-mask: linear-gradient(90deg, transparent, black 15%, black 85%, transparent);
          mask: linear-gradient(90deg, transparent, black 15%, black 85%, transparent);
        }
        .marquee-inner {
          display: flex; gap: 0;
          animation: marquee 30s linear infinite;
          flex-shrink: 0;
          min-width: max-content;
        }
        .marquee-item {
          display: flex; align-items: center; gap: 10px;
          padding: 12px 36px;
          color: rgba(200,212,240,0.45);
          font-family: 'DM Sans', sans-serif;
          font-size: 15px; font-weight: 500;
          white-space: nowrap;
          border-right: 1px solid rgba(59,123,255,0.1);
          transition: color 0.3s;
        }
        .marquee-item:hover { color: rgba(200,212,240,0.9); }
        .marquee-item svg {
          width: 16px; height: 16px;
          fill: rgba(19,84,249,0.5);
        }
      `}</style>
 
      <section className="clients-section">
        <div className="clients-label">Our Partners &amp; Clients</div>
        <div className="marquee-track">
          <div className="marquee-inner">
            {[...clients, ...clients].map((c, i) => (
              <div className="marquee-item" key={i}>
                <svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="4"/></svg>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}