import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// ─────────────────────────────────────────────
//  JOB LISTINGS
//  To add a new job: copy one object below and
//  paste it at the end of this array.
//  Fields:
//    id          – unique slug (used in URL hash)
//    title       – job title shown on card & detail
//    type        – "Full-Time" | "Part-Time" | "Contract" | "Internship"
//    experience  – e.g. "0–2 Years"
//    location    – e.g. "Chennai (On-Site)" or "Remote"
//    department  – used for filter chips
//    accentRgb   – RGB triplet for card accent colour
//    summary     – 1–2 sentence teaser shown on the card
//    about       – paragraph(s) shown in the detail panel
//    responsibilities – string[] bullet points
//    skills      – string[] bullet points (qualifications / tech skills)
//    perks       – string[] bullet points (what we offer)
// ─────────────────────────────────────────────
const jobs = [
  {
    id: 'bda',
    title: 'Business Development Associate',
    type: 'Full-Time',
    experience: '0–2 Years',
    location: 'Chennai (On-Site)',
    department: 'Sales',
    accentRgb: '0,175,160',
    summary:
      "Drive MedXL's growth by identifying new business opportunities and building long-term client relationships in the healthcare technology space.",
    about:
      "MedSocio / MedXL is seeking an enthusiastic and result-driven Business Development Associate to fuel our growth in the healthcare technology space. As a BDA, you will identify new business opportunities, build client relationships, and drive revenue across our product lines.",
    responsibilities: [
      'Identify and prospect potential clients including hospitals, clinics, diagnostic centres, and healthcare professionals.',
      'Conduct product demonstrations and presentations via calls, video conferences, and in-person meetings.',
      'Generate qualified leads through cold calling, email outreach, LinkedIn, and industry events.',
      'Maintain and manage a sales pipeline using CRM tools; track and report on KPIs weekly.',
      'Collaborate with product and marketing teams to craft compelling pitches and proposals.',
      'Negotiate and close deals aligned with company pricing and commercial policies.',
      'Build and sustain long-term relationships with existing clients for retention and upselling.',
      'Stay updated on healthcare industry trends, competitor activities, and market dynamics.',
      'Meet monthly and quarterly revenue targets set by the sales manager.',
    ],
    skills: [
      "Bachelor's degree in Business Administration, Marketing, Life Sciences, or related field.",
      "0–2 years of experience in business development, sales, or client-facing roles (healthcare/tech preferred).",
      'Strong verbal and written communication skills in English; regional languages are a plus.',
      'Proficiency in MS Office; familiarity with CRM platforms (HubSpot, Salesforce, or similar).',
      'Self-motivated with a hunter mindset and a passion for closing deals.',
      'Ability to understand healthcare workflows and articulate digital health value.',
    ],
    perks: [
      'Competitive stipend / CTC with performance-based incentives.',
      'Structured onboarding and mentorship from senior sales leaders.',
      'Fast-track career growth in a high-impact healthtech startup.',
      'Opportunity to work at the intersection of healthcare and technology.',
    ],
  },
  {
    id: 'fullstack',
    title: 'Full Stack Developer',
    type: 'Full-Time',
    experience: '0–2 Years',
    location: 'Chennai (On-Site)',
    department: 'Engineering',
    accentRgb: '197,45,181',
    summary:
      "Build scalable healthcare web applications on the MEAN stack, integrating Python services and AI/ML models in a collaborative engineering team.",
    about:
      "We are looking for a passionate Full Stack Developer to join our engineering team. You will work on building scalable web applications for the healthcare ecosystem using the MEAN stack, with integration of Python-based services for backend data processing and analytics. You will collaborate closely with designers, product managers, and AI engineers to deliver world-class digital health products.",
    responsibilities: [
      'Design, develop, and maintain full-stack web applications using the MEAN stack (MongoDB, Express.js, Angular, Node.js).',
      'Build and integrate RESTful APIs and microservices; work with Python (FastAPI / Flask / Django) for backend pipelines.',
      'Develop responsive, accessible, and mobile-friendly front-end interfaces using Angular and modern CSS frameworks.',
      'Write clean, modular, and well-documented code adhering to coding standards.',
      'Collaborate with the AI/ML team to integrate machine learning models into production applications.',
      'Implement authentication, authorisation, and security best practices (JWT, OAuth2, HTTPS).',
      'Participate in code reviews, sprint planning, and agile ceremonies.',
      'Optimise application performance, debug issues, and ensure high availability.',
      'Work with cloud platforms (AWS / GCP / Azure) for deployment and infrastructure management.',
      'Maintain version control using Git and contribute to CI/CD pipelines.',
    ],
    skills: [
      'MongoDB: schema design, indexing, aggregation pipelines.',
      'Express.js: RESTful API development, middleware, routing.',
      'Angular: component architecture, RxJS, Angular Material, state management (NgRx).',
      'Node.js: server-side JavaScript, async programming, npm ecosystem.',
      'Python proficiency — FastAPI, Flask, or Django; Pandas, NumPy preferred.',
      'Git / GitHub / GitLab; Docker basics; SQL (PostgreSQL / MySQL).',
      'B.E. / B.Tech / B.Sc in Computer Science, IT, or related field.',
    ],
    perks: [
      'Opportunity to work on a live, production-grade healthtech platform.',
      'Mentorship from experienced engineers and exposure to AI/ML integrations.',
      'Collaborative and innovation-driven work culture.',
      'Competitive compensation with growth-linked appraisals.',
    ],
  },
  {
    id: 'ops-exec',
    title: 'Operations / Accounts / HR / Finance Executive',
    type: 'Full-Time',
    experience: '0–2 Years',
    location: 'Chennai (On-Site)',
    department: 'Operations',
    accentRgb: '56,189,248',
    summary:
      "A multi-track opening across Operations, Accounts, HR, and Finance — candidates are placed based on academic background and aptitude.",
    about:
      "MedSocio / MedXL is expanding its back-office and support functions to keep pace with rapid growth. We are looking for detail-oriented, proactive, and adaptable executives to join our Operations, Accounts, HR, or Finance teams. These roles are foundational to smooth business functioning and offer significant learning and growth opportunities.",
    responsibilities: [
      'Operations: coordinate day-to-day activities, scheduling, logistics, vendor coordination, and MIS reporting.',
      'Accounts: manage bookkeeping, AP/AR, bank reconciliation, GST filings, and monthly closing.',
      'HR: end-to-end recruitment, onboarding, payroll inputs, leave management, and statutory compliance.',
      'Finance: support financial planning, budgeting, MIS reports, fundraising documentation, and compliance.',
      'Maintain accurate records, documentation, and compliance checklists across whichever track you are placed in.',
      'Support process improvements and standard operating procedures (SOP) development.',
    ],
    skills: [
      "Bachelor's degree in Commerce, Business Administration, Management, or related field (MBA preferred for Finance/HR).",
      "0–2 years of relevant experience; strong internships welcome.",
      "Proficiency in MS Office (Excel, Word, PowerPoint); Tally / Zoho familiarity is a plus.",
      "Strong attention to detail, numerical aptitude, and organisational skills.",
      "Excellent written and verbal communication; ability to handle sensitive data responsibly.",
    ],
    perks: [
      'Exposure to a high-growth healthtech startup across multiple business functions.',
      'Mentorship and structured learning from senior functional leads.',
      'Competitive compensation with appraisal cycles.',
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Executive',
    type: 'Full-Time',
    experience: '0–2 Years',
    location: 'Chennai (On-Site)',
    department: 'Marketing',
    accentRgb: '245,166,35',
    summary:
      "Own multi-channel digital campaigns across SEO, paid ads, social media, and content to amplify the MedXL brand in the healthcare technology space.",
    about:
      "We are looking for a creative and data-driven Digital Marketing Executive to amplify the MedSocio / MedXL brand in the healthcare technology space. You will plan and execute digital campaigns, grow our online presence, and generate quality leads through multi-channel marketing strategies.",
    responsibilities: [
      'Plan, execute, and optimise campaigns across SEO, SEM, social media, email, and content marketing.',
      'Manage and grow social media handles (LinkedIn, Instagram, X/Twitter, YouTube, Facebook).',
      'Create and publish blog posts, case studies, newsletters, infographics, and short-form video scripts.',
      'Run and optimise Google Ads and Meta Ads campaigns within defined budgets.',
      'Execute SEO strategies: keyword research, on-page optimisation, backlink building, and technical audits.',
      'Manage email marketing via Mailchimp / HubSpot / Zoho Campaigns; build and segment mailing lists.',
      'Track and report campaign performance using Google Analytics 4, Search Console, and social insights.',
      'Collaborate with design team for creative assets aligned with brand guidelines.',
      'Support the sales team with marketing collateral, landing pages, and lead nurturing workflows.',
    ],
    skills: [
      "Bachelor's degree in Marketing, Mass Communication, Business Administration, or related field.",
      "0–2 years of digital marketing experience (agency or in-house); healthcare/B2B is a plus.",
      'Proficiency in Google Ads, Meta Ads Manager, Google Analytics 4, and Search Console.',
      'Basic graphic design skills using Canva, Adobe Express, or Figma (preferred).',
      'Strong copywriting skills for both B2B and B2C healthcare audiences.',
      'Google Ads, HubSpot, or Meta Blueprint certifications are a strong plus.',
    ],
    perks: [
      'Opportunity to own and scale digital marketing for a growing healthtech brand.',
      'Exposure to both B2B and B2C marketing in the healthcare sector.',
      'Creative freedom backed by data-driven decision making.',
      'Fast-track learning with mentorship from experienced marketers.',
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning Research Associate',
    type: 'Full-Time',
    experience: '0–2 Years',
    location: 'Chennai (On-Site)',
    department: 'R&D',
    accentRgb: '134,105,245',
    summary:
      'Work at the frontier of Generative AI and LLMs applied to healthcare — building RAG pipelines, fine-tuning medical LLMs, and productionising AI solutions.',
    about:
      "MedSocio / MedXL's R&D team is at the cutting edge of applying Generative AI and Machine Learning to solve real-world healthcare challenges. We are looking for an intellectually curious AI & ML Research Associate to join our growing team. You will work on LLM fine-tuning, retrieval-augmented generation (RAG) pipelines, and applied ML solutions in the medical domain.",
    responsibilities: [
      'Design, build, and evaluate RAG pipelines for medical knowledge retrieval and Q&A systems.',
      'Fine-tune and instruction-tune LLMs (LLaMA, Mistral, BioMedLM, etc.) on healthcare datasets.',
      'Work with embedding models and vector databases (Pinecone, Weaviate, ChromaDB, FAISS).',
      'Develop prompt engineering strategies and evaluate outputs using standard benchmarks.',
      'Build NLP pipelines for clinical text: NER, entity linking, summarisation, and classification.',
      'Collaborate with engineering to productionise ML models via REST APIs and serving frameworks.',
      'Research and implement state-of-the-art techniques from arXiv, NeurIPS, EMNLP, and similar.',
      'Prepare internal research notes, model cards, and experiment reports.',
      'Contribute to data privacy and responsible AI practices in compliance with healthcare regulations.',
    ],
    skills: [
      'Strong Python; proficiency in PyTorch or TensorFlow.',
      'Hugging Face Transformers, PEFT (LoRA / QLoRA), LangChain / LlamaIndex.',
      'Vector databases: Pinecone, Weaviate, ChromaDB, FAISS, or Qdrant.',
      'MLOps tools: MLflow, Weights & Biases (W&B), DVC.',
      'B.E. / B.Tech / M.Tech / M.Sc in CS, Data Science, AI/ML, or Biomedical Engineering.',
      'Strong project portfolio, Kaggle rankings, or published papers are highly valued.',
    ],
    perks: [
      'Direct involvement in frontier AI research applied to real-world healthcare problems.',
      'Access to GPU compute infrastructure for model training and experimentation.',
      'Mentorship from senior AI researchers and clinicians.',
      'Opportunities to publish research and present at conferences.',
      'Competitive compensation with strong emphasis on intellectual ownership and impact.',
    ],
  },
]

// department filter options (derived from jobs above)
const departments = ['All', ...Array.from(new Set(jobs.map(j => j.department)))]

const APPLY_EMAIL = 'info@medxl.in'

export default function CareersPage() {
  const blobRef = useRef(null)
  const [activeDept, setActiveDept] = useState('All')
  const [selectedJob, setSelectedJob] = useState(null)
  const detailRef = useRef(null)

  useEffect(() => {
    const fn = e => {
      if (!blobRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 40
      const y = (e.clientY / window.innerHeight - 0.5) * 40
      blobRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
    }
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])

  // scroll detail panel into view on mobile
  useEffect(() => {
    if (selectedJob && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [selectedJob])

  const filtered = activeDept === 'All' ? jobs : jobs.filter(j => j.department === activeDept)

  const applyLink = job =>
    `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(`${job.title} — Application — [Your Name]`)}`

  return (
    <>
      <Helmet>
        <title>Careers | MedXL</title>
        <meta
          name="description"
          content="Join MedXL and help build healthcare technology that matters. Explore open roles across engineering, sales, marketing, operations, and AI research."
        />
        <link rel="canonical" href="https://medxl.in/careers" />
      </Helmet>

      <style>{`
        /* ════ PAGE SHELL ════ */
        .cr-page { background: var(--bg-base); color: var(--text-primary); font-family: var(--font-body); }

        /* ════ HERO ════ */
        .cr-hero { position: relative; overflow: hidden; padding: 130px 56px 80px; background: var(--bg-base); }
        .cr-hero-mesh {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background:
            radial-gradient(ellipse 60% 55% at 14% 50%, rgba(197,45,181,.16) 0%, transparent 65%),
            radial-gradient(ellipse 45% 40% at 86% 18%, rgba(92,37,132,.14) 0%, transparent 60%),
            radial-gradient(ellipse 35% 35% at 68% 88%, rgba(140,42,158,.12) 0%, transparent 60%);
        }
        .cr-hero-grid {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image:
            linear-gradient(rgba(197,45,181,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(197,45,181,.05) 1px, transparent 1px);
          background-size: 72px 72px;
        }
        .cr-hero-blob {
          position: absolute; top: 40%; left: 80%; transform: translate(-50%,-50%);
          width: 560px; height: 560px;
          background: radial-gradient(circle, rgba(197,45,181,.10) 0%, transparent 70%);
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: blob 13s ease-in-out infinite; filter: blur(50px);
          transition: transform 1.4s cubic-bezier(.4,0,.2,1); pointer-events: none; z-index: 0;
        }
        .cr-hero-inner { position: relative; z-index: 2; max-width: 720px; margin: 0 auto; text-align: center; }
        .cr-breadcrumb {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--text-disabled); margin-bottom: 22px;
          animation: fade-up .5s var(--ease) both;
        }
        .cr-breadcrumb a { color: var(--brand-light); text-decoration: none; transition: color .2s; }
        .cr-breadcrumb a:hover { color: var(--text-primary); }
        .cr-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
          color: var(--brand-light); background: rgba(197,45,181,.12); border: 1px solid rgba(197,45,181,.28);
          padding: 6px 16px; border-radius: 100px; margin: 0 auto 24px; width: fit-content;
          animation: fade-up .6s var(--ease) both;
        }
        .cr-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--brand-hot); position: relative; flex-shrink: 0; }
        .cr-eyebrow-dot::after {
          content: ''; position: absolute; inset: -4px; border-radius: 50%; border: 1px solid var(--brand-hot);
          animation: pulse-ring 2s ease-out infinite;
        }
        .cr-hero-title {
          font-family: var(--font-display); font-weight: 800; font-size: clamp(38px, 5.2vw, 64px);
          letter-spacing: -2.2px; line-height: 1.05; color: var(--text-primary); margin-bottom: 20px;
          animation: fade-up .6s .1s var(--ease) both;
        }
        .cr-hero-title em {
          font-style: normal; background: var(--brand-grad);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .cr-hero-desc {
          font-size: 16px; color: var(--text-secondary); line-height: 1.8; font-weight: 300;
          max-width: 560px; margin: 0 auto; animation: fade-up .6s .2s var(--ease) both;
        }

        /* ════ FILTER CHIPS ════ */
        .cr-filters {
          display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;
          padding: 0 56px 40px;
        }
        .cr-chip {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase;
          padding: 7px 18px; border-radius: 100px; border: 1px solid var(--border-faint);
          background: var(--bg-raised); color: var(--text-muted);
          cursor: pointer; transition: all .2s var(--ease);
        }
        .cr-chip:hover { border-color: rgba(197,45,181,.4); color: var(--text-primary); }
        .cr-chip.cr-chip--active {
          background: rgba(197,45,181,.14); border-color: rgba(197,45,181,.45);
          color: var(--brand-light);
        }

        /* ════ TWO-COLUMN LAYOUT ════ */
        .cr-body {
          display: grid; grid-template-columns: 380px 1fr; gap: 24px;
          padding: 0 56px 96px; max-width: 1200px; margin: 0 auto;
          align-items: start;
        }

        /* ════ JOB LIST ════ */
        .cr-list { display: flex; flex-direction: column; gap: 14px; }
        .cr-card {
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 18px; padding: 22px 22px 20px; cursor: pointer;
          position: relative; overflow: hidden;
          transition: all .25s var(--ease);
        }
        .cr-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, rgba(var(--accent),1), rgba(197,45,181,1));
          transform: scaleX(0); transform-origin: left; transition: transform .3s var(--ease);
        }
        .cr-card:hover, .cr-card--active {
          border-color: rgba(var(--accent),.4); background: var(--bg-elevated);
          transform: translateX(4px);
        }
        .cr-card:hover::before, .cr-card--active::before { transform: scaleX(1); }
        .cr-card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; margin-bottom: 8px; }
        .cr-card-title {
          font-family: var(--font-display); font-size: 15px; font-weight: 700;
          color: var(--text-primary); letter-spacing: -.2px; line-height: 1.3;
        }
        .cr-dept-badge {
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 1px; text-transform: uppercase;
          padding: 3px 10px; border-radius: 100px; flex-shrink: 0;
          background: rgba(var(--accent),.12); color: rgb(var(--accent));
          border: 1px solid rgba(var(--accent),.28);
        }
        .cr-card-meta { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 10px; }
        .cr-meta-item {
          display: flex; align-items: center; gap: 5px;
          font-size: 11.5px; color: var(--text-muted); font-family: var(--font-mono);
        }
        .cr-meta-dot { width: 5px; height: 5px; border-radius: 50%; background: rgba(var(--accent),.6); flex-shrink: 0; }
        .cr-card-summary { font-size: 12.5px; color: var(--text-secondary); line-height: 1.6; }

        /* ════ DETAIL PANEL ════ */
        .cr-detail {
          background: var(--bg-raised); border: 1px solid var(--border-faint);
          border-radius: 22px; padding: 36px 36px 40px; position: sticky; top: 100px;
        }
        .cr-detail-empty {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          min-height: 400px; text-align: center; gap: 16px;
        }
        .cr-detail-empty-icon {
          width: 64px; height: 64px; border-radius: 50%;
          background: rgba(197,45,181,.10); border: 1px solid rgba(197,45,181,.22);
          display: flex; align-items: center; justify-content: center; font-size: 26px;
        }
        .cr-detail-empty-title {
          font-family: var(--font-display); font-size: 18px; font-weight: 700; color: var(--text-primary);
        }
        .cr-detail-empty-sub { font-size: 13px; color: var(--text-muted); max-width: 240px; line-height: 1.6; }

        .cr-detail-header { margin-bottom: 28px; }
        .cr-detail-chips { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 14px; }
        .cr-detail-chip {
          font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 1px; text-transform: uppercase;
          padding: 4px 12px; border-radius: 100px;
          background: rgba(var(--accent),.10); color: rgb(var(--accent));
          border: 1px solid rgba(var(--accent),.28);
        }
        .cr-detail-chip-plain {
          font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 1px; text-transform: uppercase;
          padding: 4px 12px; border-radius: 100px;
          background: var(--bg-elevated); color: var(--text-muted); border: 1px solid var(--border-faint);
        }
        .cr-detail-title {
          font-family: var(--font-display); font-size: clamp(20px,2.2vw,28px); font-weight: 800;
          color: var(--text-primary); letter-spacing: -.5px; margin-bottom: 6px;
        }
        .cr-detail-loc { font-size: 13px; color: var(--text-muted); }

        .cr-section-label {
          font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 2px; text-transform: uppercase;
          color: rgb(var(--accent)); margin: 24px 0 10px;
          display: flex; align-items: center; gap: 8px;
        }
        .cr-section-label::after {
          content: ''; flex: 1; height: 1px; background: rgba(var(--accent),.2);
        }
        .cr-detail-about { font-size: 13.5px; color: var(--text-secondary); line-height: 1.8; }
        .cr-detail-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 7px; }
        .cr-detail-list li {
          display: flex; gap: 10px; align-items: flex-start;
          font-size: 13px; color: var(--text-secondary); line-height: 1.65;
        }
        .cr-detail-bullet {
          width: 6px; height: 6px; border-radius: 50%; background: rgba(var(--accent),.7);
          flex-shrink: 0; margin-top: 7px;
        }
        .cr-apply-btn {
          display: inline-flex; align-items: center; gap: 8px; margin-top: 28px;
          font-family: var(--font-body); font-size: 14px; font-weight: 700;
          color: #fff; text-decoration: none;
          padding: 13px 28px; border-radius: 12px;
          background: linear-gradient(135deg, rgb(var(--accent)), rgba(197,45,181,1));
          transition: opacity .2s, transform .2s; box-shadow: 0 4px 20px rgba(var(--accent),.28);
        }
        .cr-apply-btn:hover { opacity: .88; transform: translateY(-2px); }

        /* ════ CTA BANNER ════ */
        .cr-cta-wrap { padding: 0 56px 96px; max-width: 1200px; margin: 0 auto; }
        .cr-cta {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, rgba(197,45,181,.18) 0%, rgba(92,37,132,.22) 100%);
          border: 1px solid rgba(197,45,181,.3); border-radius: 28px; padding: 52px 56px;
          display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap;
        }
        .cr-cta::before {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(rgba(197,45,181,.07) 1px, transparent 1px);
          background-size: 32px 32px; pointer-events: none;
        }
        .cr-cta::after {
          content: ''; position: absolute; top: -80px; right: -80px; width: 320px; height: 320px;
          border-radius: 50%; background: rgba(197,45,181,.14); filter: blur(60px); pointer-events: none;
        }
        .cr-cta-inner { position: relative; z-index: 1; max-width: 600px; }
        .cr-cta-chip {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
          color: var(--text-muted); background: var(--bg-raised); border: 1px solid var(--border-faint);
          padding: 5px 14px; border-radius: 100px; margin-bottom: 18px;
        }
        .cr-cta h2 {
          font-family: var(--font-display); font-size: clamp(24px,3vw,36px); font-weight: 800;
          color: var(--text-primary); letter-spacing: -1px; margin-bottom: 12px;
        }
        .cr-cta p { font-size: 14.5px; color: var(--text-secondary); line-height: 1.75; margin: 0; }
        .cr-cta-btns { position: relative; z-index: 1; display: flex; gap: 14px; flex-wrap: wrap; flex-shrink: 0; }

        /* ════ RESPONSIVE ════ */
        @media (max-width: 900px) {
          .cr-body { grid-template-columns: 1fr; padding: 0 20px 72px; }
          .cr-hero { padding: 110px 20px 60px; }
          .cr-filters { padding: 0 20px 32px; }
          .cr-detail { position: static; }
          .cr-cta { padding: 36px 28px; flex-direction: column; align-items: flex-start; }
          .cr-cta-wrap { padding: 0 20px 72px; }
        }
      `}</style>

      <div className="cr-page">
        <Navbar />

        {/* ── HERO ── */}
        <section className="cr-hero">
          <div className="cr-hero-mesh" />
          <div className="cr-hero-grid" />
          <div className="cr-hero-blob" ref={blobRef} />

          <div className="cr-hero-inner">
            <div className="cr-breadcrumb">
              <Link to="/">Home</Link><span>›</span><span>Careers</span>
            </div>

            <div className="cr-eyebrow">
              <span className="cr-eyebrow-dot" />
              We're Hiring
            </div>

            <h1 className="cr-hero-title">
              Build the Future of <em>Healthcare</em>
            </h1>

            <p className="cr-hero-desc">
              Join a small, focused team working at the intersection of technology and medicine.
              We're looking for people who move fast, think deeply, and care about impact.
            </p>
          </div>
        </section>

        {/* ── FILTER CHIPS ── */}
        <div className="cr-filters">
          {departments.map(dept => (
            <button
              key={dept}
              className={`cr-chip${activeDept === dept ? ' cr-chip--active' : ''}`}
              onClick={() => { setActiveDept(dept); setSelectedJob(null) }}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* ── TWO-COLUMN BODY ── */}
        <div className="cr-body">

          {/* JOB LIST */}
          <div className="cr-list">
            {filtered.map(job => (
              <div
                key={job.id}
                className={`cr-card${selectedJob?.id === job.id ? ' cr-card--active' : ''}`}
                style={{ '--accent': job.accentRgb }}
                onClick={() => setSelectedJob(job)}
              >
                <div className="cr-card-top">
                  <div className="cr-card-title">{job.title}</div>
                  <span className="cr-dept-badge">{job.department}</span>
                </div>
                <div className="cr-card-meta">
                  <span className="cr-meta-item"><span className="cr-meta-dot" />{job.type}</span>
                  <span className="cr-meta-item"><span className="cr-meta-dot" />{job.experience}</span>
                  <span className="cr-meta-item"><span className="cr-meta-dot" />{job.location}</span>
                </div>
                <div className="cr-card-summary">{job.summary}</div>
              </div>
            ))}
          </div>

          {/* DETAIL PANEL */}
          <div className="cr-detail" ref={detailRef} style={selectedJob ? { '--accent': selectedJob.accentRgb } : {}}>
            {!selectedJob ? (
              <div className="cr-detail-empty">
                <div className="cr-detail-empty-icon">💼</div>
                <div className="cr-detail-empty-title">Select a role</div>
                <div className="cr-detail-empty-sub">Click any job listing on the left to read the full description and apply.</div>
              </div>
            ) : (
              <>
                <div className="cr-detail-header">
                  <div className="cr-detail-chips">
                    <span className="cr-detail-chip">{selectedJob.department}</span>
                    <span className="cr-detail-chip-plain">{selectedJob.type}</span>
                    <span className="cr-detail-chip-plain">{selectedJob.experience}</span>
                    <span className="cr-detail-chip-plain">{selectedJob.location}</span>
                  </div>
                  <div className="cr-detail-title">{selectedJob.title}</div>
                  <div className="cr-detail-loc">MedSocio / MedXL · {selectedJob.location}</div>
                </div>

                <div className="cr-section-label">About the Role</div>
                <p className="cr-detail-about">{selectedJob.about}</p>

                <div className="cr-section-label">Responsibilities</div>
                <ul className="cr-detail-list">
                  {selectedJob.responsibilities.map((r, i) => (
                    <li key={i}><span className="cr-detail-bullet" /><span>{r}</span></li>
                  ))}
                </ul>

                <div className="cr-section-label">Skills &amp; Qualifications</div>
                <ul className="cr-detail-list">
                  {selectedJob.skills.map((s, i) => (
                    <li key={i}><span className="cr-detail-bullet" /><span>{s}</span></li>
                  ))}
                </ul>

                {selectedJob.perks?.length > 0 && (
                  <>
                    <div className="cr-section-label">What We Offer</div>
                    <ul className="cr-detail-list">
                      {selectedJob.perks.map((p, i) => (
                        <li key={i}><span className="cr-detail-bullet" /><span>{p}</span></li>
                      ))}
                    </ul>
                  </>
                )}

                <a
                  href={applyLink(selectedJob)}
                  className="cr-apply-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apply for this Role →
                </a>
              </>
            )}
          </div>
        </div>

        {/* ── CTA BANNER ── */}
        <div className="cr-cta-wrap">
          <div className="cr-cta">
            <div className="cr-cta-inner">
              <div className="cr-cta-chip">
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--brand-hot)', display: 'inline-block' }} />
                Don't see your role?
              </div>
              <h2>Send Us an Open Application</h2>
              <p>
                We're always looking for exceptional people. If you think you'd be a great fit for
                MedXL but don't see a matching role, write to us — tell us what you're great at
                and why healthcare tech excites you.
              </p>
            </div>
            <div className="cr-cta-btns">
              <a
                href={`mailto:${APPLY_EMAIL}?subject=${encodeURIComponent('Open Application — [Your Name]')}`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 700,
                  color: '#fff', textDecoration: 'none',
                  padding: '13px 28px', borderRadius: 12,
                  background: 'linear-gradient(135deg, rgba(197,45,181,1), rgba(92,37,132,1))',
                  position: 'relative', zIndex: 1,
                }}
              >
                Write to Us →
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}