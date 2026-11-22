export type Project = {
  number: string
  title: string
  category: string
  summary: string
  outcome: string
  tags: string[]
  organization?: string
  href?: string
  visual: 'rag' | 'robotics' | 'governance' | 'incidents' | 'distributed' | 'mtls'
  details: string[]
}

export type Experience = {
  year: string
  role: string
  organization: string
  dates: string
  bullets: string[]
  tags: string[]
}

export const portfolio = {
  name: 'Sherine Chally',
  email: 'sherinechally@gmail.com',
  location: 'Los Angeles, California',
  github: 'https://github.com/sherinechally',
  linkedin: 'https://linkedin.com/in/sherinechally',
  intro: "I'm a Software Engineer with 3.5 years of enterprise experience at Morgan Stanley and a background in Data Science at UCLA. I build scalable software, intelligent systems, and technology with security and responsibility in mind.",
  about: 'My experience spans enterprise software engineering, distributed architectures, machine learning, and responsible AI. After 3.5 years at Morgan Stanley, I pursued a Master of Engineering in Data Science at UCLA, expanding my expertise into intelligent systems and AI safety.',
  interests: 'I’m interested in the intersection of software engineering, machine learning, and building technology that people can trust.',
  highlights: [
    { value: '3.5', unit: 'years', label: 'Enterprise engineering experience' },
    { value: '30+', unit: '', label: 'Legacy mainframe jobs migrated' },
    { value: '3×', unit: '', label: 'Improvement in RAG Hit Rate@1' },
    { value: '20/20', unit: '', label: 'Agentic AI benchmark cases passed' },
  ],
  projects: [
    {
      number: '01', title: 'Reflective Hybrid RAG for Recommendation', category: 'AI / NLP / Information Retrieval',
      summary: 'A hybrid Dense + SPLADE retrieval architecture with a reflection layer for recommendation.',
      outcome: '3× Hit Rate@1', tags: ['RAG', 'SPLADE', 'NLP', 'Qdrant'], visual: 'rag',
      href: 'https://github.com/sherinechally/ReflectiveHybridRAGforRecommendation',
      details: ['Improved from 12.5% to 37.5% on the Agent Society Goodreads benchmark.', 'Combined dense and sparse retrieval, then added a reflection layer to refine recommendations.'],
    },
    {
      number: '02', title: 'Quant-Aware Speculative Action Chunking', category: 'Robotics / VLA / ML Optimization',
      summary: 'Optimized point-cloud diffusion-policy inference using overlap chunking and INT8 quantization.',
      outcome: '5.58× INT8 speedup', tags: ['Diffusion Policies', 'INT8', 'Point Clouds', 'Robotics'], visual: 'robotics',
      href: 'https://github.com/sherinechally/3D-Diffusion-Policy_CS269',
      details: ['Latency reduced from 243 ms to 171 ms.', 'Overlap chunking improved success rate from 0.75 to 0.85.', 'INT8 quantization delivered a 5.58× speedup.'],
    },
    {
      number: '03', title: 'Agentic AI Governance Layer', category: 'AI Safety / Agentic Systems / Security',
      summary: 'Governance for a four-agent LangGraph pipeline, with controls at every handoff and human approval for financial transactions.',
      outcome: '20/20 benchmark cases passed', tags: ['LangGraph', 'OWASP', 'AI Safety', 'Human Approval'], organization: 'iDox AI', visual: 'governance',
      details: ['Enforced four OWASP agentic-AI controls at every handoff.', 'Implemented token-gated human approval for financial transactions.', 'Designed and evaluated a four-agent LangGraph pipeline.'],
    },
    {
      number: '04', title: 'AI Incident Tracker', category: 'Responsible AI / Full-Stack Engineering',
      summary: 'An incident-tracking dashboard supporting the AI Literacy Kit for teachers of teenagers aged 13–18.',
      outcome: 'Youth-centered incident taxonomy', tags: ['Python', 'React', 'Responsible AI', 'Data Visualization'], organization: 'Youth for Responsible AI (Y4RAI)', visual: 'incidents',
      details: ['Categorized incidents by youth impact, risk area, region, and policy safeguard.', 'Built for the Tooling Track to support responsible AI education.'],
    },
    {
      number: '05', title: 'Legacy Systems Modernization', category: 'Distributed Systems / Backend Engineering',
      summary: 'Moved legacy mainframe workloads and input feeds into a scalable distributed architecture.',
      outcome: '30+ jobs · 24 input feeds', tags: ['Java', 'APIs', 'Message Queues', 'Distributed Systems'], organization: 'Morgan Stanley', visual: 'distributed',
      details: ['Migrated more than 30 legacy mainframe jobs and 24 input feeds.', 'Used APIs and message queues to enable scalable Prime Brokerage functionality, measured by Liquidity Coverage Ratio (LCR).'],
    },
    {
      number: '06', title: 'Secure Database Architecture', category: 'Cybersecurity / Backend Infrastructure',
      summary: 'Independently replaced Kerberos authentication with mutual TLS on an internal PostgreSQL database.',
      outcome: 'Enterprise secure-transmission compliance', tags: ['PostgreSQL', 'mTLS', 'Security', 'Infrastructure'], organization: 'Morgan Stanley', visual: 'mtls',
      details: ['Replaced Kerberos with mutual TLS (mTLS) on an internal PostgreSQL database.', 'Met enterprise secure-transmission compliance requirements.'],
    },
  ] satisfies Project[],
  experience: [
    { year: '2026', role: 'Tech Fellow', organization: 'Youth for Responsible AI', dates: 'July 2026 – September 2026', bullets: ['Developed the AI Incident Tracker dashboard for the Tooling Track, supporting responsible AI education.'], tags: ['Python', 'React', 'Responsible AI'] },
    { year: '2026', role: 'AI/ML Intern', organization: 'iDox AI', dates: 'June 2026 – August 2026', bullets: ['Designed governance and human approval controls for multi-agent AI systems.', 'Passed all 20 benchmark cases.'], tags: ['LangGraph', 'OWASP', 'AI Safety'] },
    { year: '2022–2025', role: 'Software Engineer II', organization: 'Morgan Stanley', dates: 'January 2024 – July 2025', bullets: ['Migrated 30+ mainframe jobs and 24 input feeds.', 'Built scalable distributed architecture using APIs and message queues.', 'Independently implemented mTLS for PostgreSQL.'], tags: ['Java', 'APIs', 'Message Queues', 'PostgreSQL'] },
    { year: '2022–2025', role: 'Software Engineer I', organization: 'Morgan Stanley', dates: 'January 2023 – December 2023', bullets: ['Led a production application migration from Angular 8 to Angular 16.', 'Improved code hygiene compliance from 0.86% to 100%.', 'Earned a departmental Certificate of Recognition.'], tags: ['Angular', 'TypeScript'] },
    { year: '2022–2025', role: 'Technology Analyst and Spring Analyst Intern', organization: 'Morgan Stanley', dates: 'January 2022 – December 2022', bullets: ['Built a self-service dashboard that replaced emailed file requests to developers.'], tags: ['Internal Tools', 'Dashboard'] },
  ] satisfies Experience[],
  skills: [
    { category: 'Programming languages', ink: 'blue', items: ['Java', 'Python', 'C++', 'JavaScript', 'TypeScript', 'SQL'] },
    { category: 'Backend and frontend', ink: 'pink', items: ['Spring Boot', 'Angular', 'React', 'REST APIs', 'Message Queues'] },
    { category: 'Data and databases', ink: 'teal', items: ['PostgreSQL', 'Qdrant', 'Snowflake'] },
    { category: 'AI and machine learning', ink: 'purple', items: ['LangGraph', 'RAG', 'SPLADE', 'NLP', 'Diffusion Policies', 'INT8 Quantization'] },
    { category: 'Infrastructure and security', ink: 'orange', items: ['AWS', 'Docker', 'Jenkins', 'Linux', 'mTLS', 'OWASP Agentic AI Controls'] },
  ],
  education: [
    { institution: 'University of California, Los Angeles', degree: 'Master of Engineering — Data Science', date: 'Expected December 2026', stamp: 'IN PROGRESS', coursework: ['Large-Scale Machine Learning', 'Big Data Analytics', 'Natural Language Processing', 'Neural Networks & Deep Learning'] },
    { institution: 'SRM Institute of Science and Technology', degree: 'B.Tech — Computer Science and Engineering', date: 'Graduated May 2022', stamp: 'GPA 3.88 / 4.00', coursework: ['Machine Learning', 'Data Science', 'Artificial Intelligence', 'Data Structures & Algorithms', 'Operating Systems', 'Database Management Systems'] },
  ],
} as const

export function resumeText() {
  const lines = [
    portfolio.name.toUpperCase(), 'SOFTWARE ENGINEER / AI & ML / LOS ANGELES', '',
    portfolio.email, portfolio.github, portfolio.linkedin, portfolio.location, '',
    'PROFILE', portfolio.intro, '', 'EXPERIENCE',
    ...portfolio.experience.flatMap((item) => [`${item.role} — ${item.organization}`, item.dates, ...item.bullets.map((bullet) => `• ${bullet}`), '']),
    'SELECTED PROJECTS',
    ...portfolio.projects.flatMap((project) => [`${project.number}. ${project.title} — ${project.category}`, project.summary, `Outcome: ${project.outcome}`, ...project.details.map((detail) => `• ${detail}`), '']),
    'EDUCATION',
    ...portfolio.education.flatMap((item) => [`${item.degree} — ${item.institution}`, item.date, item.stamp, `Coursework: ${item.coursework.join(', ')}`, '']),
    'TECHNICAL TOOLKIT', ...portfolio.skills.map((group) => `${group.category}: ${group.items.join(', ')}`),
  ]
  return lines.join('\n')
}
