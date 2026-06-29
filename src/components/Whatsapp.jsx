import { useState, useEffect } from 'react'

const WHATSAPP_NUMBER = '919884021188'
const DEFAULT_MESSAGE = "Hi MedXL! I'd like to know more about your hospital IT services."

export default function WhatsAppButton({
  phone    = WHATSAPP_NUMBER,
  message  = DEFAULT_MESSAGE,
  label    = 'Chat with us',
}) {
  const [visible,  setVisible]  = useState(false)   // tooltip open
  const [scrolled, setScrolled] = useState(false)   // scrolled past 300px
  const [pulse,    setPulse]    = useState(true)    // initial ping ring

  /* Show button after 300px scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Stop pulse ring after first 4 s */
  useEffect(() => {
    const t = setTimeout(() => setPulse(false), 4000)
    return () => clearTimeout(t)
  }, [])

  const href = `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(message)}`

  return (
    <>
      <style>{`
        /* ── KEYFRAMES ── */
        @keyframes wa-slide-in {
          from { opacity: 0; transform: translateY(20px) scale(.9); }
          to   { opacity: 1; transform: translateY(0)    scale(1);  }
        }
        @keyframes wa-pulse {
          0%   { transform: scale(1);   opacity: .7; }
          100% { transform: scale(2.6); opacity: 0;  }
        }
        @keyframes wa-tooltip-in {
          from { opacity: 0; transform: translateX(8px); }
          to   { opacity: 1; transform: translateX(0);   }
        }

        /* ── WRAPPER ── */
        .wa-fab-wrap {
          position: fixed;
          right: 28px; bottom: 28px;
          z-index: 9999;
          display: flex; flex-direction: column;
          align-items: flex-end; gap: 10px;
        }

        /* ── TOOLTIP CARD ── */
        .wa-tooltip {
          display: flex; align-items: flex-start; gap: 12px;
          background: var(--bg-raised);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          padding: 16px 18px;
          max-width: 272px;
          box-shadow: 0 20px 48px rgba(0,0,0,.45), 0 0 0 1px var(--border-faint);
          animation: wa-tooltip-in .25s var(--ease) both;
          position: relative;
        }
        /* tail */
        .wa-tooltip::after {
          content: '';
          position: absolute; bottom: -7px; right: 22px;
          width: 13px; height: 13px;
          background: var(--bg-raised);
          border-right: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          transform: rotate(45deg);
        }
        .wa-tooltip-avatar {
          width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
          box-shadow: 0 4px 12px rgba(37,211,102,.3);
        }
        .wa-tooltip-body {}
        .wa-tooltip-name {
          font-family: var(--font-display); font-size: 13px;
          font-weight: 700; color: var(--text-primary); margin-bottom: 3px;
        }
        .wa-tooltip-status {
          font-family: var(--font-mono); font-size: 9px;
          letter-spacing: 1px; text-transform: uppercase;
          color: #22C55E; margin-bottom: 8px;
          display: flex; align-items: center; gap: 5px;
        }
        .wa-status-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #22C55E; flex-shrink: 0;
          box-shadow: 0 0 6px #22C55E;
        }
        .wa-tooltip-msg {
          font-size: 13px; color: var(--text-muted);
          line-height: 1.55; font-weight: 300; margin-bottom: 12px;
        }
        .wa-tooltip-cta {
          display: inline-flex; align-items: center; gap: 7px;
          background: #25D366; color: #fff;
          font-family: var(--font-body); font-size: 12px; font-weight: 700;
          padding: 8px 14px; border-radius: 100px; text-decoration: none;
          transition: background .2s, transform .2s;
          box-shadow: 0 4px 14px rgba(37,211,102,.35);
        }
        .wa-tooltip-cta:hover { background: #22c55e; transform: translateY(-1px); }
        .wa-tooltip-close {
          position: absolute; top: 10px; right: 12px;
          background: none; border: none; cursor: pointer;
          color: var(--text-disabled); font-size: 16px;
          line-height: 1; padding: 2px 4px;
          transition: color .2s;
        }
        .wa-tooltip-close:hover { color: var(--text-muted); }

        /* ── FAB BUTTON ── */
        .wa-fab {
          position: relative;
          width: 58px; height: 58px; border-radius: 50%;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          box-shadow: 0 8px 28px rgba(37,211,102,.45);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; border: none;
          transition: transform .25s var(--ease), box-shadow .25s;
          animation: wa-slide-in .4s var(--ease) both;
        }
        .wa-fab:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 36px rgba(37,211,102,.55);
        }
        .wa-fab:active { transform: scale(.96); }

        /* WhatsApp SVG icon */
        .wa-fab svg { width: 30px; height: 30px; fill: #fff; }

        /* Pulse ring */
        .wa-pulse-ring {
          position: absolute; inset: 0; border-radius: 50%;
          border: 2px solid #25D366;
          animation: wa-pulse 1.8s ease-out infinite;
          pointer-events: none;
        }

        /* Label badge */
        .wa-label {
          position: absolute; left: -108px; top: 50%;
          transform: translateY(-50%);
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 8px; padding: 5px 12px;
          font-family: var(--font-body); font-size: 12px; font-weight: 600;
          color: var(--text-primary); white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0,0,0,.3);
          pointer-events: none;
          opacity: 0; transition: opacity .2s;
        }
        .wa-label::after {
          content: '';
          position: absolute; right: -6px; top: 50%;
          transform: translateY(-50%) rotate(45deg);
          width: 10px; height: 10px;
          background: var(--bg-raised);
          border-top: 1px solid var(--border-faint);
          border-right: 1px solid var(--border-faint);
        }
        .wa-fab:hover .wa-label { opacity: 1; }

        /* Hidden when not scrolled */
        .wa-fab-wrap.hidden {
          opacity: 0; pointer-events: none;
          transform: translateY(12px);
          transition: opacity .3s, transform .3s;
        }
        .wa-fab-wrap.visible {
          opacity: 1; pointer-events: auto;
          transform: translateY(0);
          transition: opacity .3s, transform .3s;
        }

        /* Mobile */
        @media (max-width: 480px) {
          .wa-fab-wrap { right: 16px; bottom: 20px; }
          .wa-fab { width: 52px; height: 52px; }
          .wa-fab svg { width: 26px; height: 26px; }
          .wa-tooltip { max-width: calc(100vw - 40px); }
          .wa-label { display: none; }
        }
      `}</style>

      <div className={`wa-fab-wrap ${scrolled ? 'visible' : 'hidden'}`}>

        {/* Tooltip card */}
        {visible && (
          <div className="wa-tooltip" role="dialog" aria-label="WhatsApp chat">
            <div className="wa-tooltip-avatar">💬</div>
            <div className="wa-tooltip-body">
              <div className="wa-tooltip-name">MedXL Support</div>
              <div className="wa-tooltip-status">
                <span className="wa-status-dot" /> Online now
              </div>
              <div className="wa-tooltip-msg">
                Hi! 👋 How can we help your hospital today?
                We typically reply in minutes.
              </div>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="wa-tooltip-cta"
                onClick={() => setVisible(false)}
              >
                {/* WhatsApp logo inline */}
                <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, fill: '#fff', flexShrink: 0 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.523 5.843L.057 23.428a.75.75 0 00.914.914l5.628-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.948 0-3.773-.527-5.335-1.443l-.38-.228-3.94 1.027 1.046-3.818-.25-.394A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Start chat on WhatsApp
              </a>
            </div>
            <button
              className="wa-tooltip-close"
              onClick={() => setVisible(false)}
              aria-label="Close"
            >×</button>
          </div>
        )}

        {/* FAB */}
        <button
          className="wa-fab"
          onClick={() => setVisible(v => !v)}
          aria-label="Open WhatsApp chat"
        >
          {pulse && <span className="wa-pulse-ring" />}
          <span className="wa-label">{label}</span>
          {/* WhatsApp SVG */}
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.523 5.843L.057 23.428a.75.75 0 00.914.914l5.628-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.948 0-3.773-.527-5.335-1.443l-.38-.228-3.94 1.027 1.046-3.818-.25-.394A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
        </button>

      </div>
    </>
  )
}