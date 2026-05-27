import LegalPage from '../layouts/Legaldetailpage'

const noticeText = (
  <>
    <p>
      <strong>MedXL Ventures Private Limited</strong> uses cookies to ensure our website functions
      correctly, understand how visitors use it, and improve your experience. We do{' '}
      <strong>not</strong> use advertising or tracking cookies, and we never sell or share your
      data for advertising purposes.
    </p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
      {['Essential', 'Analytics', 'Performance', 'Functional', 'No Ad Cookies'].map(c => (
        <span key={c} style={{
          fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '1.5px',
          textTransform: 'uppercase', color: 'var(--text-muted)',
          background: 'rgba(245,166,35,.10)', border: '1px solid rgba(245,166,35,.25)',
          padding: '4px 12px', borderRadius: 6,
        }}>{c}</span>
      ))}
    </div>
  </>
)

const cookieTypes = [
  { icon: '🔒', label: 'Essential Cookies',    rgb: '0,175,160',  desc: 'Strictly necessary for the website to function. Set in response to actions like logging in or filling out forms. Cannot be switched off without affecting site operation.' },
  { icon: '📊', label: 'Analytics Cookies',    rgb: '96,165,250', desc: 'Help us understand how visitors interact with medxl.in — which pages are visited most, how long users stay, and where traffic comes from. We use Google Analytics (anonymised).' },
  { icon: '⚡', label: 'Performance Cookies',  rgb: '245,166,35', desc: 'Collect information about how the website loads and behaves. Help us identify bottlenecks and deliver a faster experience across all devices.' },
  { icon: '⚙️', label: 'Functional Cookies',  rgb: '197,45,181', desc: 'Allow the website to remember your choices — such as language preference or display settings — so you do not have to re-enter them each visit.' },
]

const browserLinks = [
  { label: 'Google Chrome',    url: 'https://support.google.com/chrome/answer/95647' },
  { label: 'Mozilla Firefox',  url: 'https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer' },
  { label: 'Safari (Mac & iOS)', url: 'https://support.apple.com/en-in/guide/safari/sfri11471/mac' },
  { label: 'Microsoft Edge',   url: 'https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge' },
]

const COOKIE_CONFIG = {
  title: 'Cookie',
  titleHighlight: 'Policy',
  description:
    'How MedXL uses cookies and similar technologies on medxl.in — what we collect, why we use them, and how you can manage your preferences at any time.',
  accentRgb: '245,166,35',
  noticeIcon: '🍪',
  noticeText,
  chips: [
    { label: 'Effective: 27 May 2026',  dot: '#22C55E' },
    { label: 'Last Updated: 27 May 2026', dot: '#F5A623' },
    { label: 'No Ad Cookies',           dot: '#C52DB5' },
    { label: 'DPDP Act 2023',           dot: '#60A5FA' },
  ],
  navCta: { label: 'Cookie Queries', href: 'mailto:info@medxl.in' },
  breadcrumb: 'Cookie Policy',
  sections: [
    {
      id: 'what-are-cookies',
      num: '01',
      title: 'What Are Cookies?',
      content: [
        'Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work efficiently and to provide useful information to website owners.',
        'Cookies help improve website functionality, remember your preferences, and deliver a smoother, more personalised experience every time you return to a site.',
      ],
    },
    {
      id: 'types-of-cookies',
      num: '02',
      title: 'Types of Cookies We Use',
      content: [
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 4 }}>
            {cookieTypes.map(c => (
              <div key={c.label} style={{
                display: 'flex', gap: 14, alignItems: 'flex-start',
                padding: '16px 18px',
                background: `rgba(${c.rgb},.06)`,
                border: `1px solid rgba(${c.rgb},.22)`,
                borderRadius: 12,
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                  background: `rgba(${c.rgb},.14)`, border: `1px solid rgba(${c.rgb},.3)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
                }}>{c.icon}</div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700,
                    color: 'var(--text-primary)', marginBottom: 5, letterSpacing: '-.2px',
                  }}>{c.label}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.75 }}>{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </>,
      ],
    },
    {
      id: 'third-party-cookies',
      num: '03',
      title: 'Third-Party Cookies',
      content: [
        'MedXL may integrate trusted third-party services that place their own cookies on your device. These providers operate under their own privacy policies and are selected for their reliability and compliance standards.',
        'Third-party services we use may include: Google Analytics (anonymised website traffic analysis), cloud hosting providers (AWS / Azure India), and embedded services such as Google Maps or WhatsApp chat widgets.',
        'We do not allow third-party advertisers to place tracking or advertising cookies on medxl.in. MedXL products are ad-free and we do not sell or share your data for advertising purposes.',
      ],
    },
    {
      id: 'managing-cookies',
      num: '04',
      title: 'Managing Cookies',
      content: [
        'You are in control of cookies stored on your device. You can manage your cookie preferences at any time through your browser settings.',
        'You can: disable cookies entirely in your browser settings; delete cookies that have already been stored on your device; or block specific third-party cookies while allowing essential ones.',
        'Please note that disabling certain cookies — particularly essential cookies — may affect website functionality. Some features, forms, or interactive elements may not work correctly if cookies are fully disabled.',
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
            <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 4, fontWeight: 600 }}>
              Manage cookies in your browser:
            </div>
            {browserLinks.map(b => (
              <div key={b.label} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 14px',
                background: 'var(--bg-raised)', border: '1px solid var(--border-faint)',
                borderRadius: 10,
              }}>
                <span style={{ fontSize: 11, color: 'rgba(0,175,160,1)', fontFamily: 'var(--font-mono)' }}>→</span>
                <a href={b.url} target="_blank" rel="noreferrer"
                  style={{ fontSize: 13, color: 'var(--brand-light)', textDecoration: 'none' }}>
                  {b.label}
                </a>
              </div>
            ))}
          </div>
        </>,
      ],
    },
    {
      id: 'updates',
      num: '05',
      title: 'Updates to This Policy',
      content: [
        'We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or the services we use.',
        'Any material changes will be posted on this page with a revised effective date. We encourage you to review this page periodically to stay informed.',
        'Continued use of medxl.in after any changes to this policy constitutes your acceptance of the updated Cookie Policy.',
      ],
    },
    {
      id: 'contact',
      num: '06',
      title: 'Contact Us',
      content: [
        <>
          <p>If you have any questions about our use of cookies or this Cookie Policy, please get in touch:</p>
          <p>
            📧 <a href="mailto:info@medxl.in">info@medxl.in</a><br />
            🌐 <a href="https://www.medxl.in" target="_blank" rel="noreferrer">www.medxl.in</a><br />
            📞 <a href="tel:+919884021188">+91 98840 21188</a><br />
            📍 MedXL Ventures Private Limited, Chennai, Tamil Nadu — 600 001
          </p>
        </>,
      ],
    },
  ],
  ctaTag:   'Questions about cookies?',
  ctaTitle: "We're Happy to Help",
  ctaDesc:  'If you have any questions about how MedXL uses cookies or how to manage your preferences, our team is here to assist.',
  ctaPrimary:   { label: '✉ info@medxl.in', href: 'mailto:info@medxl.in' },
  ctaSecondary: { label: '🔒 Privacy Policy', to: '/privacy' },
  footerLinks: [
    { label: 'Home',          to: '/'        },
    { label: 'Privacy Policy',to: '/privacy' },
    { label: 'Terms of Use',  to: '/terms'   },
    { label: 'Contact Us',    href: 'mailto:info@medxl.in' },
  ],
}

export default function CookiePolicyPage() {
  return <LegalPage config={COOKIE_CONFIG} />
}