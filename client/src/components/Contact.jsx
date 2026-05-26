import { useState } from 'react'

const steps = [
  { num:'01', label:'Share your requirements',   icon:'📋' },
  { num:'02', label:'Discuss with our experts',  icon:'💬' },
  { num:'03', label:'Get a tailored quote',       icon:'📄' },
  { num:'04', label:'Kick off your project',     icon:'🚀' },
]

export default function Contact() {
  const [form, setForm]     = useState({ name:'', email:'', phone:'', service:'', message:'' })
  const [status, setStatus] = useState(null)
  const [focused, setFocused] = useState(null)

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = () => {
    if (!form.name || !form.email || !form.message) { setStatus('error'); return }
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1600)
  }

  const base = {
    width:'100%', padding:'13px 18px',
    background:'rgba(13,15,14,.7)',
    border:'1px solid var(--border)',
    borderRadius:10, fontSize:14, color:'var(--cream)',
    fontFamily:"'Cabinet Grotesk', sans-serif",
    outline:'none', boxSizing:'border-box',
    transition:'border-color .3s, box-shadow .3s',
    marginBottom:14,
  }
  const focusStyle = { borderColor:'rgba(155,39,175,.45)', boxShadow:'0 0 0 3px rgba(155,39,175,.1)' }

  return (
    <>
      <style>{`
        .contact {
          padding: 120px 56px;
          background: var(--ink-2);
          position: relative; overflow: hidden;
        }
        .contact::before {
          content: '';
          position: absolute; bottom: -300px; left: 50%; transform: translateX(-50%);
          width: 800px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(155,39,175,.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .contact-inner {
          display: grid; grid-template-columns: 1fr 1.2fr;
          gap: 80px; align-items: start;
          max-width: 1200px; margin: 0 auto;
        }

        /* Left */
        .contact-steps { display: flex; flex-direction: column; gap: 10px; margin-top: 36px; }
        .contact-step {
          display: flex; align-items: center; gap: 16px;
          padding: 16px 20px; border-radius: 12px;
          background: var(--fog); border: 1px solid var(--border);
          transition: all .3s var(--ease); cursor: default;
        }
        .contact-step:hover {
          border-color: var(--border-em);
          background: var(--purple-dim);
          transform: translateX(8px);
        }
        .contact-step-num {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 2px;
          color: var(--purple-light); min-width: 24px;
        }
        .contact-step-icon { font-size: 18px; }
        .contact-step-label { font-size: 14px; color: var(--fog-3); font-weight: 500; }

        .contact-info { display: flex; flex-direction: column; gap: 12px; margin-top: 32px; }
        .contact-info-item {
          display: flex; align-items: center; gap: 14px;
          font-size: 14px; color: var(--fog-3); text-decoration: none;
          padding: 12px 16px; border-radius: 10px;
          border: 1px solid var(--border); background: var(--fog);
          transition: all .25s;
        }
        .contact-info-item:hover { color: var(--cream); border-color: var(--border-em); }
        .contact-info-icon {
          width: 36px; height: 36px; border-radius: 9px;
          background: var(--purple-dim); border: 1px solid var(--border-em);
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; flex-shrink: 0;
        }

        /* Right — form */
        .contact-form {
          background: var(--ink-3);
          border: 1px solid var(--border);
          border-radius: 28px; padding: 48px;
          position: relative; overflow: hidden;
          box-shadow: 0 40px 80px rgba(0,0,0,.3);
        }
        .contact-form::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--purple-light), var(--gold));
        }
        .form-title {
          font-family: var(--font-display); font-size: 26px; font-weight: 700;
          color: var(--cream); margin-bottom: 6px; letter-spacing: -0.8px;
        }
        .form-sub { font-size: 14px; color: var(--fog-3); margin-bottom: 32px; font-weight: 300; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

        .form-msg {
          border-radius: 12px; padding: 14px 18px;
          font-size: 14px; font-weight: 500;
          display: flex; align-items: center; gap: 10px; margin-bottom: 20px;
        }
        .form-msg.success {
          background: rgba(155,39,175,.1); border: 1px solid rgba(155,39,175,.25);
          color: var(--purple-light);
        }
        .form-msg.error {
          background: rgba(255,107,107,.08); border: 1px solid rgba(255,107,107,.2);
          color: #ff6b6b;
        }
        .submit-btn {
          width: 100%; padding: 15px; border: none; border-radius: 12px;
          background: var(--grad); color: var(--ink);
          font-family: var(--font-body); font-size: 15px; font-weight: 700;
          cursor: pointer; transition: all .3s var(--ease);
          display: flex; align-items: center; justify-content: center; gap: 10px;
          letter-spacing: .3px;
          box-shadow: 0 8px 24px var(--purple-glow);
        }
        .submit-btn:hover:not(:disabled) {
          background: #b83ec7; transform: translateY(-2px);
          box-shadow: 0 16px 40px var(--purple-glow);
        }
        .submit-btn:disabled { opacity: .7; cursor: not-allowed; }
        .btn-spinner {
          width: 18px; height: 18px; border-radius: 50%;
          border: 2px solid rgba(0,0,0,.2); border-top-color: var(--ink);
          animation: spin-cw .7s linear infinite;
        }

        select option { background: #141714; }

        @media (max-width: 960px) {
          .contact { padding: 80px 20px; }
          .contact-inner { grid-template-columns: 1fr; gap: 48px; }
          .contact-form { padding: 32px 24px; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="contact" id="contact">
        <div className="contact-inner">
          {/* Left */}
          <div>
            <div className="section-eyebrow">Contact Us</div>
            <h2 className="section-title">Let's <em>Start</em></h2>
            <p className="section-desc" style={{marginTop:16}}>
              Tell us about your hospital's challenges and we'll put together
              a tailored technology roadmap — at no cost.
            </p>

            <div className="contact-steps">
              {steps.map(s => (
                <div className="contact-step" key={s.num}>
                  <span className="contact-step-num">{s.num}</span>
                  <span className="contact-step-icon">{s.icon}</span>
                  <span className="contact-step-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="contact-info">
              {[
                ['📞', '+91 8148181288', 'tel:+918148181288'],
                ['✉️', 'info@medxl.in',  'mailto:info@medxl.in'],
                ['📍', 'Chennai, Tamil Nadu, India', '#'],
              ].map(([icon, text, href]) => (
                <a href={href} className="contact-info-item" key={text}>
                  <div className="contact-info-icon">{icon}</div>
                  {text}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact-form">
            <div className="form-title">Send a Message</div>
            <div className="form-sub">We respond within 24 hours, guaranteed.</div>

            {status === 'success' && (
              <div className="form-msg success">✅ Message sent! We'll be in touch soon.</div>
            )}
            {status === 'error' && (
              <div className="form-msg error">⚠️ Please fill in Name, Email and Message.</div>
            )}

            <div className="form-row">
              <input name="name" placeholder="Full Name *" value={form.name} onChange={change}
                onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                style={{...base, ...(focused==='name' ? focusStyle : {})}} />
              <input name="email" type="email" placeholder="Email Address *" value={form.email} onChange={change}
                onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                style={{...base, ...(focused==='email' ? focusStyle : {})}} />
            </div>
            <div className="form-row">
              <input name="phone" placeholder="Phone Number" value={form.phone} onChange={change}
                onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                style={{...base, ...(focused==='phone' ? focusStyle : {})}} />
              <select name="service" value={form.service} onChange={change}
                onFocus={() => setFocused('service')} onBlur={() => setFocused(null)}
                style={{...base, color: form.service ? 'var(--cream)' : 'rgba(245,240,232,.4)',
                  ...(focused==='service' ? focusStyle : {})}}>
                <option value="">Select a Service</option>
                {['Custom Software Development','IT & Business Consulting','eLearning & Content','Mobile App Development','Data Analytics & BI','Digital Marketing'].map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <textarea name="message" placeholder="Tell us about your project *" rows={5}
              value={form.message} onChange={change}
              onFocus={() => setFocused('msg')} onBlur={() => setFocused(null)}
              style={{...base, resize:'vertical', ...(focused==='msg' ? focusStyle : {})}} />
            <button className="submit-btn" onClick={submit} disabled={status==='loading'}>
              {status === 'loading'
                ? <><div className="btn-spinner" /> Sending...</>
                : <>Send Message →</>
              }
            </button>
          </div>
        </div>
      </section>
    </>
  )
}