import { ArrowDownRight, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

const experience = [
  {
    role: 'AI/ML Intern',
    company: 'iDox AI',
    dates: 'Jun 2026 — Aug 2026',
    bullets: [
      'Designed a governance layer for a 4-agent LangGraph pipeline, enforcing four OWASP agentic-AI controls at every handoff.',
      'Added a token-gated human approval gate for financial transactions; passed 20/20 benchmark cases.',
    ],
    tags: ['LangGraph', 'AI security'],
  },
  {
    role: 'Tech Fellow',
    company: 'Youth for Responsible AI',
    dates: 'Jul 2026 — Sep 2026',
    bullets: [
      'Built the AI Incident Tracker dashboard for the Tooling Track, cataloging incidents by youth impact, risk area, region, and policy safeguard.',
      'Supported the AI Literacy Kit for teachers of teens ages 13–18.',
    ],
    tags: ['Python', 'React', 'Responsible AI'],
  },
  {
    role: 'Software Engineer II',
    company: 'Morgan Stanley',
    dates: 'Jan 2024 — Jul 2025',
    bullets: [
      'Migrated 30+ legacy mainframe jobs and 24 input feeds to a scalable distributed architecture using APIs and message queues, enabling new Prime Brokerage functionality measured by Liquidity Coverage Ratio.',
      'Independently replaced Kerberos with mTLS on an internal PostgreSQL database to meet secure data-transmission compliance requirements.',
    ],
    tags: ['Java', 'APIs', 'Message queues', 'PostgreSQL'],
  },
  {
    role: 'Software Engineer I',
    company: 'Morgan Stanley',
    dates: 'Jan 2023 — Dec 2023',
    bullets: [
      'Led the end-to-end migration of a production web application from Angular 8 to Angular 16.',
      'Raised code hygiene compliance from 0.86% to 100%; received a departmental Certificate of Recognition.',
    ],
    tags: ['Angular', 'TypeScript'],
  },
  {
    role: 'Technology Analyst & Spring Analyst Intern',
    company: 'Morgan Stanley',
    dates: 'Jan 2022 — Dec 2022',
    bullets: ['Built a self-service dashboard for business users, replacing emailed file requests to developers.'],
    tags: ['Dashboard', 'Internal tools'],
  },
]

const projects = [
  {
    name: 'Reflective Hybrid RAG for Recommendation',
    dates: 'Sep 2025 — Dec 2025',
    description: 'Combined Dense + SPLADE retrieval with a reflection layer for recommendation.',
    result: '3× Hit Rate@1',
    detail: '12.5% → 37.5% on the Agent Society Goodreads benchmark',
    href: 'https://github.com/sherinechally/ReflectiveHybridRAGforRecommendation',
    code: 'github.com/sherinechally/ReflectiveHybridRAGforRecommendation',
  },
  {
    name: 'Quant-Aware Speculative Action Chunking',
    dates: 'Apr 2026 — Jun 2026',
    description: 'Improved point-cloud diffusion-policy inference with overlap chunking and INT8 quantization.',
    result: '5.58× speedup',
    detail: 'Latency 243 ms → 171 ms · success rate 0.75 → 0.85',
    href: 'https://github.com/sherinechally/3D-Diffusion-Policy_CS269',
    code: 'github.com/sherinechally/3D-Diffusion-Policy_CS269',
  },
]

const skills = {
  Languages: ['Java', 'Python', 'C++', 'JavaScript', 'TypeScript', 'SQL'],
  Technologies: ['Spring Boot', 'Angular', 'React', 'PostgreSQL', 'Qdrant', 'Snowflake', 'AWS', 'Docker', 'Jenkins', 'Linux'],
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#667064]">
      <span className="font-mono text-[#d15d38]">{number}</span>
      <span>{children}</span>
      <span aria-hidden="true" className="h-px flex-1 bg-[#d9d8cf]" />
    </div>
  )
}

function ExperienceItem({ item, index }: { item: (typeof experience)[number]; index: number }) {
  return (
    <article className="grid gap-4 border-b border-[#deddd4] py-7 last:border-b-0 md:grid-cols-[minmax(0,1fr)_190px] md:gap-10 md:py-8">
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#20251f]">{item.role}</h3>
          <span className="text-[#7b7f75]">@</span>
          <span className="text-lg font-medium text-[#4b574a]">{item.company}</span>
        </div>
        <ul className="mt-4 grid gap-2.5 text-[14px] leading-7 text-[#555b52]">
          {item.bullets.map((bullet) => <li key={bullet} className="flex gap-3"><span aria-hidden="true" className="mt-[13px] size-1.5 shrink-0 rounded-full bg-[#d15d38]" /><span>{bullet}</span></li>)}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => <span key={tag} className="rounded-full border border-[#d9d8cf] px-2.5 py-1 font-mono text-[10px] text-[#62695f]">{tag}</span>)}
        </div>
      </div>
      <div className="flex items-start gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[#7b7f75] md:justify-end md:pt-2">
        <span className="text-[#d15d38]">0{index + 1}</span>{item.dates}
      </div>
    </article>
  )
}

export default function ResumePortfolio() {
  return (
    <main className="min-h-screen bg-[#f5f3ec] text-[#20251f] selection:bg-[#d15d38] selection:text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a href="#top" className="font-mono text-sm font-bold tracking-[-0.08em]">SC<span className="text-[#d15d38]">.</span></a>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 font-mono text-[10px] uppercase tracking-[0.14em] text-[#687065] sm:flex">
          <a className="transition-colors hover:text-[#d15d38]" href="#experience">Experience</a>
          <a className="transition-colors hover:text-[#d15d38]" href="#projects">Projects</a>
          <a className="transition-colors hover:text-[#d15d38]" href="#education">Education</a>
        </nav>
        <a href="#experience" className="inline-flex items-center gap-2 rounded-full border border-[#c8c9bf] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors hover:border-[#20251f] hover:bg-[#20251f] hover:text-[#f5f3ec]">
          Experience <ArrowDownRight aria-hidden="true" size={14} />
        </a>
      </header>

      <section id="top" className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12 lg:pt-24">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_270px] lg:gap-16">
          <div>
            <p className="mb-7 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.19em] text-[#687065]"><span className="size-2 rounded-full bg-[#d15d38]" /> Software engineer · Los Angeles, CA</p>
            <h1 className="max-w-4xl text-[clamp(4rem,11vw,9.6rem)] font-semibold leading-[0.82] tracking-[-0.095em]">Sherine<br /><span className="text-[#d15d38]">Chally</span></h1>
            <p className="mt-9 max-w-2xl text-lg leading-8 text-[#555b52] sm:text-xl sm:leading-9">I build scalable backend architectures and secure AI systems, grounded in 3.5 years of enterprise engineering at Morgan Stanley and graduate study in Data Science at UCLA.</p>
          </div>
          <aside className="border-l border-[#d9d8cf] pl-5 lg:mb-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-[#85897f]">Currently focused on</p>
            <p className="mt-3 text-2xl font-medium leading-tight tracking-[-0.05em]">Reliable systems.<br />Responsible AI.</p>
            <div className="mt-7 grid gap-3 text-sm text-[#62695f]">
              <a className="flex items-center gap-3 hover:text-[#d15d38]" href="mailto:sherinechally@gmail.com"><Mail size={15} /> sherinechally@gmail.com</a>
              <a className="flex items-center gap-3 hover:text-[#d15d38]" href="tel:+14243650103"><Phone size={15} /> +1 (424) 365-0103</a>
              <span className="flex items-center gap-3"><MapPin size={15} /> Los Angeles, California</span>
            </div>
            <div className="mt-6 flex gap-3">
              <a aria-label="GitHub" href="https://github.com/sherinechally" target="_blank" rel="noreferrer" className="grid size-10 place-items-center rounded-full border border-[#d3d3c9] font-mono text-[10px] font-bold transition-colors hover:bg-[#20251f] hover:text-white">GH</a>
              <a aria-label="LinkedIn" href="https://linkedin.com/in/sherinechally" target="_blank" rel="noreferrer" className="grid size-10 place-items-center rounded-full border border-[#d3d3c9] font-mono text-[10px] font-bold transition-colors hover:bg-[#20251f] hover:text-white">in</a>
              <a aria-label="Personal website" href="https://sherinechally.netlify.app" target="_blank" rel="noreferrer" className="grid size-10 place-items-center rounded-full border border-[#d3d3c9] transition-colors hover:bg-[#20251f] hover:text-white"><ArrowUpRight size={17} /></a>
            </div>
          </aside>
        </div>
        <div className="mt-16 grid grid-cols-2 border-y border-[#d9d8cf] py-5 sm:grid-cols-4 sm:py-6">
          {[
            ['3.5 yrs', 'Enterprise engineering'],
            ['30+', 'Mainframe jobs migrated'],
            ['20 / 20', 'AI governance benchmarks'],
            ['5.58×', 'Project speedup'],
          ].map(([value, label]) => <div key={label} className="border-r border-[#d9d8cf] px-3 py-3 first:pl-0 last:border-0 sm:px-5"><p className="text-2xl font-semibold tracking-[-0.07em] sm:text-3xl">{value}</p><p className="mt-1 max-w-28 font-mono text-[9px] uppercase leading-4 tracking-[0.09em] text-[#7a8075] sm:text-[10px]">{label}</p></div>)}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl scroll-mt-8 px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <SectionLabel number="01">Experience</SectionLabel>
        <div className="mt-5">{experience.map((item, index) => <ExperienceItem key={`${item.company}-${item.role}`} item={item} index={index} />)}</div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl scroll-mt-8 px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <SectionLabel number="02">Selected projects</SectionLabel>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => <article key={project.name} className="group flex min-h-[310px] flex-col justify-between border border-[#d9d8cf] bg-[#f8f7f1] p-6 transition-colors hover:border-[#b8b9ae] sm:p-8">
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.13em] text-[#81867b]"><span>Project 0{index + 1}</span><span>{project.dates}</span></div>
              <h3 className="mt-8 max-w-sm text-3xl font-semibold leading-[1.05] tracking-[-0.07em]">{project.name}</h3>
              <p className="mt-4 max-w-lg text-sm leading-6 text-[#62695f]">{project.description}</p>
            </div>
            <div className="mt-8 flex flex-col gap-4 border-t border-[#e2e0d7] pt-5 sm:flex-row sm:items-end sm:justify-between">
              <div><p className="text-2xl font-semibold tracking-[-0.06em] text-[#d15d38]">{project.result}</p><p className="mt-1 font-mono text-[10px] leading-5 text-[#73796f]">{project.detail}</p></div>
              <a href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[#4b574a] underline decoration-[#c6c8bd] underline-offset-4 group-hover:text-[#d15d38]">View project <ArrowUpRight size={14} /></a>
            </div>
          </article>)}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1fr] lg:px-12">
        <div>
          <SectionLabel number="03">Technical toolkit</SectionLabel>
          <div className="mt-8 grid gap-7">
            {Object.entries(skills).map(([group, items]) => <div key={group}><h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#85897f]">{group}</h3><div className="mt-3 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-full bg-[#e9e8df] px-3 py-1.5 text-xs text-[#4b574a]">{item}</span>)}</div></div>)}
          </div>
        </div>
        <div id="education" className="scroll-mt-8">
          <SectionLabel number="04">Education</SectionLabel>
          <article className="mt-8 border-b border-[#d9d8cf] pb-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-xl font-semibold tracking-[-0.05em]">M.Eng., Data Science</h3><span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#7b7f75]">Dec 2026</span></div>
            <p className="mt-1 text-[#4b574a]">University of California, Los Angeles</p>
            <p className="mt-3 text-sm leading-6 text-[#73796f]">Large-Scale ML · Big Data Analytics · NLP · Neural Networks & Deep Learning</p>
          </article>
          <article className="pt-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-xl font-semibold tracking-[-0.05em]">B.Tech, Computer Science & Engineering</h3><span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#7b7f75]">May 2022</span></div>
            <p className="mt-1 text-[#4b574a]">SRM Institute of Science and Technology</p>
            <p className="mt-2 font-mono text-[11px] text-[#d15d38]">GPA 3.88 / 4.00</p>
            <p className="mt-3 text-sm leading-6 text-[#73796f]">Machine Learning · Data Science · AI · Data Structures & Algorithms · OS · DBMS</p>
          </article>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-5 border-t border-[#d9d8cf] px-5 py-8 font-mono text-[10px] uppercase tracking-[0.12em] text-[#7b7f75] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <span>© 2026 Sherine Chally</span>
        <a className="inline-flex items-center gap-2 text-[#4b574a] hover:text-[#d15d38]" href="mailto:sherinechally@gmail.com">Let&apos;s build something meaningful <ArrowUpRight size={14} /></a>
      </footer>
    </main>
  )
}
