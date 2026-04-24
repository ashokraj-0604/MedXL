import { useState } from 'react'

const steps = [
  { num: '01', label: 'Share your requirements' },
  { num: '02', label: 'Discuss with our experts' },
  { num: '03', label: 'Get a free quote' },
  { num: '04', label: 'Start the project' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'
  const [focused, setFocused] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }
    setStatus('loading')
    // Simulate API call - replace with axios.post('/api/contact', form) later
    setTimeout(() => setStatus('success'), 1500)
  }

  const inputBase = {
    width: '100%', padding: '14px 18px',
    background: 'rgba(5,13,26,0.6)',
    border: '1px solid rgba(59,123,255,0.15)',
    borderRadius: 10, fontSize: 14, color: '#e8eeff',
    outline: 'none', boxSizing: 'border-box',
    fontFamily: "'DM Sans', sans-serif",
    transition: 'border-color 0.3s, box-shadow 0.3s',
    marginBottom: 16,
  }
  const focusedStyle = { borderColor: 'rgba(19,84,249,0.5)', boxShadow: '0 0 0 3px rgba(19,84,249,0.1)' }

  return (
    <>
      <style>{`
        .contact-section {
          padding: 120px 60px;
          background: linear-gradient(180deg, var(--navy-2) 0%, var(--navy) 100%);
          position: relative; overflow: hidden;
        }
        .contact-section::before {
          content: '';
          position: absolute; bottom: -200px; left: 50%; transform: translateX(-50%);
          width: 800px; height: 800px; border-radius: 50%;
          background: radial-gradient(circle, rgba(19,84,249,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .contact-inner {
          display: grid; grid-template-columns: 1fr 1.2fr;
          gap: 80px; align-items: start; max-width: 1200px; margin: 0 auto;
        }
        .contact-info {}
        .contact-steps {
          display: flex; flex-direction: column; gap: 16px; margin-top: 40px;
        }
        .contact-step {
          display: flex; align-items: center; gap: 16px;
          padding: 16px 20px;
          background: rgba(10,22,40,0.6);
          border: 1px solid rgba(59,123,255,0.1);
          border-radius: 12px; transition: all 0.3s;
        }
        .contact-step:hover {
          border-color: rgba(59,123,255,0.25);
          background: rgba(19,84,249,0.06);
          transform: translateX(6px);
        }
        .contact-step-num {
          font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 800;
          color: #1354f9; min-width: 28px;
        }
        .contact-step-label {
          font-size: 14px; color: rgba(200,212,240,0.75); font-weight: 500;
        }
        .contact-details {
          display: flex; flex-direction: column; gap: 16px; margin-top: 36px;
        }
        .contact-detail-item {
          display: flex; align-items: center; gap: 14px;
          color: rgba(200,212,240,0.7); font-size: 15px;
          text-decoration: none; transition: color 0.25s;
        }
        .contact-detail-item:hover { color: #fff; }
        .contact-detail-icon {
          width: 40px; height: 40px; border-radius: 10px;
          background: rgba(19,84,249,0.12); border: 1px solid rgba(19,84,249,0.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; flex-shrink: 0;
        }

        /* Form */
        .contact-form-wrap {
          background: rgba(10,22,40,0.8);
          border: 1px solid rgba(59,123,255,0.15);
          border-radius: 24px; padding: 48px;
          box-shadow: 0 40px 80px rgba(0,0,0,0.3);
        }
        .form-title {
          font-family: 'Syne', sans-serif; font-size: 24px; font-weight: 800;
          color: #fff; margin-bottom: 8px;
        }
        .form-subtitle { font-size: 14px; color: var(--text-muted); margin-bottom: 32px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-success {
          background: rgba(5,150,105,0.1); border: 1px solid rgba(5,150,105,0.3);
          border-radius: 12px; padding: 16px 20px;
          color: #34d399; font-size: 14px; font-weight: 500;
          display: flex; align-items: center; gap: 10px; margin-bottom: 20px;
        }
        .form-error {
          background: rgba(220,38,38,0.1); border: 1px solid rgba(220,38,38,0.2);
          border-radius: 12px; padding: 16px 20px;
          color: #f87171; font-size: 14px; margin-bottom: 20px;
        }
        .submit-btn {
          width: 100%; padding: 15px; border: none; border-radius: 12px;
          background: linear-gradient(135deg, #1354f9, #3b7bff);
          color: #fff; font-family: 'DM Sans', sans-serif;
          font-size: 16px; font-weight: 700; cursor: pointer;
          box-shadow: 0 8px 32px rgba(19,84,249,0.4);
          transition: all 0.3s; display: flex; align-items: center;
          justify-content: center; gap: 10px;
        }
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px); box-shadow: 0 16px 48px rgba(19,84,249,0.55);
        }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        .spinner {
          width: 18px; height: 18px; border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff; border-radius: 50%;
          animation: spin-slow 0.8s linear infinite;
        }
        select option { background: #0a1628; }
        @media (max-width: 960px) {
          .contact-section { padding: 80px 24px; }
          .contact-inner { grid-template-columns: 1fr; gap: 48px; }
          .contact-form-wrap { padding: 32px 24px; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-info">
            <div className="section-label">You Are Here</div>
            <h2 className="section-title">Let's Start</h2>
            <p style={{fontSize:15, color:'var(--text-muted)', lineHeight:1.75, fontWeight:300, marginTop:16}}>
              Initiating your journey to optimization and growth. Tell us about your needs and
              our experts will reach out within 24 hours.
            </p>

            <div className="contact-steps">
              {steps.map(s => (
                <div className="contact-step" key={s.num}>
                  <span className="contact-step-num">{s.num}</span>
                  <span className="contact-step-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="contact-details">
              {[
                ['📞', '+91-8148181288', 'tel:+918148181288'],
                ['✉️', 'info@medxl.in', 'mailto:info@medxl.in'],
                ['📍', 'Chennai, Tamil Nadu, India', '#'],
              ].map(([icon, text, href]) => (
                <a href={href} className="contact-detail-item" key={text}>
                  <div className="contact-detail-icon">{icon}</div>
                  {text}
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-wrap">
            <div className="form-title">Send us a message</div>
            <div className="form-subtitle">We'll discuss your project and get back to you promptly.</div>

            {status === 'success' && (
              <div className="form-success">✅ Message sent! We'll be in touch within 24 hours.</div>
            )}
            {status === 'error' && (
              <div className="form-error">⚠️ Please fill in all required fields (Name, Email, Message).</div>
            )}

            <div className="form-row">
              <input
                name="name" placeholder="Full Name *" value={form.name}
                onChange={handleChange}
                onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                style={{...inputBase, ...(focused === 'name' ? focusedStyle : {})}}
              />
              <input
                name="email" type="email" placeholder="Email Address *" value={form.email}
                onChange={handleChange}
                onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                style={{...inputBase, ...(focused === 'email' ? focusedStyle : {})}}
              />
            </div>
            <div className="form-row">
              <input
                name="phone" placeholder="Phone Number" value={form.phone}
                onChange={handleChange}
                onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                style={{...inputBase, ...(focused === 'phone' ? focusedStyle : {})}}
              />
              <select
                name="service" value={form.service} onChange={handleChange}
                onFocus={() => setFocused('service')} onBlur={() => setFocused(null)}
                style={{...inputBase, ...(focused === 'service' ? focusedStyle : {}), color: form.service ? '#e8eeff' : '#7a8aaa'}}
              >
                <option value="">Select a Service</option>
                {['Custom Software Development','IT & Business Consulting','eLearning & Content','Mobile App Development','Data Analytics & BI','Digital Marketing'].map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <textarea
              name="message" placeholder="Your Message *" rows={5}
              value={form.message} onChange={handleChange}
              onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
              style={{...inputBase, resize:'vertical', ...(focused === 'message' ? focusedStyle : {})}}
            />
            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? <><div className="spinner" /> Sending...</> : 'Send Request →'}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}