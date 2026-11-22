'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2, Ellipsis, Network, Mail, MapPin, Play, RotateCcw, Sparkles } from 'lucide-react'
import { portfolio, resumeText } from '@/lib/portfolio-data'

gsap.registerPlugin(ScrollTrigger)

const nav = [
  ['About', '#about'], ['Projects', '#projects'], ['Experience', '#experience'],
  ['Skills', '#skills'], ['Education', '#education'], ['Contact', '#contact'],
] as const
const collaborators = [
  { name: 'Backend', color: '#2189e8', task: 'laying the architecture' },
  { name: 'AI / ML', color: '#f238a5', task: 'tuning retrieval + models' },
  { name: 'Security', color: '#00a39b', task: 'checking every handoff' },
  { name: 'Research', color: '#8660df', task: 'annotating the evidence' },
  { name: 'Systems', color: '#f07532', task: 'connecting the services' },
  { name: 'Design', color: '#d5a900', task: 'setting the type' },
]
const inkColor: Record<string, string> = { blue: '#1687e8', pink: '#ed3c9d', teal: '#00a39b', purple: '#8861e4', orange: '#ef7133' }

function Mark({ className = '' }: { className?: string }) {
  return <span aria-hidden="true" className={`crop-marks ${className}`}><i /><i /><i /><i /></span>
}

function ProjectDiagram({ kind }: { kind: (typeof portfolio.projects)[number]['visual'] }) {
  const diagrams: Record<typeof kind, { top: string; bottom: string; mark: string }> = {
    rag: { top: 'DENSE RETRIEVAL', bottom: 'SPLADE / REFLECTION', mark: '3×' },
    robotics: { top: 'OBSERVE → CHUNK', bottom: 'QUANTIZE / EXECUTE', mark: '5.58×' },
    governance: { top: 'AGENT 01 · 02 · 03 · 04', bottom: 'VERIFY / APPROVE', mark: '20/20' },
    incidents: { top: 'YOUTH IMPACT / REGION', bottom: 'RISK / SAFEGUARDS', mark: 'AI' },
    distributed: { top: 'MAINFRAME', bottom: 'API → QUEUE → SERVICES', mark: '30+' },
    mtls: { top: 'CLIENT CERTIFICATE', bottom: 'mTLS / POSTGRESQL', mark: 'TLS' },
  }
  const data = diagrams[kind]
  return (
    <div className={`project-diagram diagram-${kind}`} aria-hidden="true">
      <div className="diagram-meta"><span>ENGINEERING STUDY</span><span>FIG. {kind === 'rag' ? '01' : kind === 'robotics' ? '02' : '04'}</span></div>
      <div className="diagram-mark">{data.mark}</div>
      <div className="diagram-flow"><span>{data.top}</span><i /><span>{data.bottom}</span></div>
      <div className="diagram-grid" />
    </div>
  )
}

function SectionHeading({ index, label, title, id }: { index: string; label: string; title: string; id: string }) {
  return <div className="section-heading"><p className="eyebrow"><span>{index} —</span> {label}</p><h2 id={id}>{title}</h2></div>
}

export default function OverprintSwarmTemplate() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [filter, setFilter] = useState<string | null>(null)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [quickView, setQuickView] = useState(false)
  const [tourStep, setTourStep] = useState<number | null>(null)
  const [replay, setReplay] = useState(0)
  const sections = useMemo(() => nav.map(([name, href]) => ({ name, href })), [])
  const visibleProjects = useMemo(() => filter ? portfolio.projects.filter((project) => project.tags.includes(filter)) : portfolio.projects, [filter])
  const resumeHref = `data:text/plain;charset=utf-8,${encodeURIComponent(resumeText())}`

  useEffect(() => {
    const root = rootRef.current
    if (!root || quickView || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      const hero = root.querySelector<HTMLElement>('.hero-run')
      const title = root.querySelector<HTMLElement>('.hero-title')
      const bluePlate = root.querySelector<HTMLElement>('.title-blue')
      const pinkPlate = root.querySelector<HTMLElement>('.title-pink')
      const glyphs = [...root.querySelectorAll<HTMLElement>('.title-blue .hero-glyph')]
      const cursors = [...root.querySelectorAll<HTMLElement>('.collab-cursor')]
      if (hero && title && bluePlate && pinkPlate) {
      gsap.fromTo(glyphs, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.18, stagger: 0.025, ease: 'power2.out', delay: 0.2 })
      const loadingMessage = root.querySelector<HTMLElement>('.loading-message')
      const loadingCount = root.querySelector<HTMLElement>('.loading-count')
      const loadingBar = root.querySelector<HTMLElement>('.loading-line i')
      const loadingMessages = ['Initializing workspace…', 'Connecting systems…', 'Loading intelligence…', 'Ready to build.', 'Scroll to explore ↓']
      gsap.timeline({ scrollTrigger: {
        trigger: hero, start: 'top top', end: 'bottom bottom', scrub: 0.8,
        onUpdate: (trigger) => {
          const step = Math.min(loadingMessages.length - 1, Math.floor(trigger.progress * loadingMessages.length))
          if (loadingMessage) loadingMessage.textContent = loadingMessages[step]
          if (loadingCount) loadingCount.textContent = `${String(step + 1).padStart(2, '0')} / 0${loadingMessages.length}`
          if (loadingBar) loadingBar.style.width = `${Math.max(18, trigger.progress * 100)}%`
        },
      } })
        .fromTo(title, { scale: 0.88, y: 34 }, { scale: 1, y: 0, ease: 'none' }, 0)
        .fromTo(pinkPlate, { x: 0, y: 0 }, { x: 7, y: 5, ease: 'none' }, 0.15)
        .fromTo(bluePlate, { x: 0, y: 0 }, { x: -2, y: -2, ease: 'none' }, 0.15)
      cursors.forEach((cursor, index) => {
          const phase = index / Math.max(1, cursors.length - 1)
          gsap.fromTo(cursor, { x: `${(index % 2 ? 15 : -15)}vw`, y: `${(index - 2) * 44}px`, rotate: -8 + index * 2 }, {
            x: `${(phase * 60 - 30)}vw`, y: `${((index % 3) - 1) * 78}px`, rotate: 0,
            scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom bottom', scrub: 0.7 },
          })
        })
      }
      root.querySelectorAll<HTMLElement>('[data-assemble]').forEach((element) => {
        gsap.fromTo(element, { y: 36, opacity: 0, scale: 0.96, rotate: Number(element.dataset.tilt ?? 0) }, {
          y: 0, opacity: 1, scale: 1, rotate: 0, ease: 'power2.out',
          scrollTrigger: { trigger: element, start: 'top 88%', end: 'top 54%', scrub: 0.6 },
        })
      })
      root.querySelectorAll<HTMLElement>('.selection-frame').forEach((frame) => gsap.fromTo(frame, { opacity: 0, scale: 0.96 }, {
        opacity: 1, scale: 1, ease: 'none',
        scrollTrigger: { trigger: frame.parentElement, start: 'top 84%', end: 'top 58%', scrub: 0.6 },
      }))
      root.querySelectorAll<HTMLElement>('.project-stamp').forEach((stamp) => gsap.fromTo(stamp, { scale: 1.6, rotate: -10, opacity: 0 }, {
        scale: 1, rotate: -4, opacity: 1, ease: 'back.out(2)',
        scrollTrigger: { trigger: stamp.parentElement, start: 'top 84%', end: 'top 63%', scrub: 0.6 },
      }))
      root.querySelectorAll<HTMLElement>('.section-rule').forEach((rule) => gsap.fromTo(rule, { scaleX: 0 }, {
        scaleX: 1, transformOrigin: 'left center', ease: 'none',
        scrollTrigger: { trigger: rule.parentElement, start: 'top 82%', end: 'top 55%', scrub: 0.7 },
      }))
      root.querySelectorAll<HTMLElement>('.stat-stamp').forEach((stamp) => gsap.fromTo(stamp, { scale: 1.3, rotate: -12, opacity: 0 }, {
        scale: 1, rotate: 0, opacity: 1, ease: 'back.out(2)',
        scrollTrigger: { trigger: stamp, start: 'top 88%', end: 'top 70%', scrub: 0.7 },
      }))
    }, root)
    return () => ctx.revert()
  }, [quickView, replay])

  const startTour = () => {
    setTourStep(0)
    document.querySelector('#about')?.scrollIntoView({ behavior: quickView ? 'instant' : 'smooth' })
  }
  const advanceTour = () => {
    if (tourStep === null) return
    const next = tourStep + 1
    if (next >= sections.length) { setTourStep(null); return }
    setTourStep(next)
    document.querySelector(sections[next].href)?.scrollIntoView({ behavior: quickView ? 'instant' : 'smooth' })
  }
  const replayBuild = () => {
    setQuickView(false)
    setTourStep(null)
    setReplay((current) => current + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main ref={rootRef} className={`overprint-portfolio${quickView ? ' recruiter-view' : ''}`}>
      <div className="paper-grain" aria-hidden="true" />
      <div className="hero-run" id="top">
        <section className="hero-stage" aria-labelledby="hero-title">
          <Mark />
          <header className="masthead">
            <a href="#top" className="brand">SHERINE CHALLY<span>®</span></a>
            <nav aria-label="Main navigation">{nav.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
            <a className="top-contact" href="#contact">LET&apos;S TALK <ArrowDownRight size={14} /></a>
          </header>
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="hero-kicker"><i /> SOFTWARE ENGINEER / AI &amp; ML / LOS ANGELES</p>
              <h1 className="hero-title" id="hero-title" aria-label="Engineering. Intelligence. Responsibly."><span className="title-blue" aria-hidden="true">{['Engineering.', 'Intelligence.', 'Responsibly.'].map((line) => <span className="title-line" key={line}>{Array.from(line).map((letter, index) => <span className="hero-glyph" key={index}>{letter}</span>)}</span>)}</span><span className="title-pink" aria-hidden="true">{['Engineering.', 'Intelligence.', 'Responsibly.'].map((line) => <span className="title-line" key={line}>{Array.from(line).map((letter, index) => <span className="hero-glyph" key={index}>{letter}</span>)}</span>)}</span></h1>
              <p className="hero-intro">{portfolio.intro}</p>
              <div className="hero-actions">
                <a href="#projects" className="ink-button">Explore my work <ArrowDown size={15} /></a>
                <a href={resumeHref} download="Sherine-Chally-Resume.txt" className="text-button">View résumé <ArrowUpRight size={15} /></a>
              </div>
            </div>
            <div className="system-art" role="img" aria-label="Overlapping pink and blue halftone circles with the words Intelligence, with intent">
              <svg className="art-print" viewBox="0 0 440 440" aria-hidden="true" focusable="false">
                <defs>
                  <pattern id="hero-pink-dots" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="2.2" fill="#FF5CBC" /></pattern>
                  <pattern id="hero-blue-dots" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="2.2" fill="#3B96FF" /></pattern>
                  <path id="hero-ring-top" d="M 52 220 A 168 168 0 0 1 388 220" />
                  <path id="hero-ring-bottom" d="M 388 220 A 168 168 0 0 1 52 220" />
                </defs>
                <circle cx="178" cy="178" r="151" fill="url(#hero-pink-dots)" />
                <circle cx="262" cy="262" r="151" fill="url(#hero-blue-dots)" />
                <circle className="art-circle art-circle-pink" cx="178" cy="178" r="108" />
                <circle className="art-circle art-circle-blue" cx="262" cy="262" r="108" />
                <text className="art-ring"><textPath href="#hero-ring-top" startOffset="50%" textAnchor="middle">SOFTWARE · INTELLIGENCE · RESPONSIBLE AI ·</textPath></text>
                <text className="art-ring"><textPath href="#hero-ring-bottom" startOffset="50%" textAnchor="middle">BUILD FOR PEOPLE · VERIFY THE SYSTEM ·</textPath></text>
                <text className="art-core-label" x="220" y="207">INTELLIGENCE</text>
                <text className="art-core-arrow" x="220" y="241">↗</text>
                <text className="art-core-subtitle" x="220" y="264">WITH INTENT</text>
              </svg>
            </div>
          </div>
          <div className="hero-colophon"><span>INDEPENDENT SYSTEMS THINKING</span><span>LOS ANGELES, CA · 2026</span><span className="loader-label"><i /> initializing_portfolio.tsx</span></div>
          <div className="loading-panel" aria-hidden="true"><span className="loading-count">01 / 05</span><div className="loading-line"><i /></div><span className="loading-message">Initializing workspace…</span></div>
          <div className="cursor-layer" aria-hidden="true">{collaborators.map((person, index) => <div className="collab-cursor" key={person.name} style={{ '--cursor': person.color, '--delay': `${index * -0.4}s` } as React.CSSProperties}><i /><span>{person.name}</span></div>)}</div>
          <a href="#about" className="scroll-note"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>
      </div>

      <section className="identity-strip" aria-label="Collaborator disciplines"><span className="eyebrow">A COLLABORATIVE CANVAS</span>{collaborators.map((person) => <span key={person.name} className="identity-item"><i style={{ background: person.color }} />{person.name}<small>{person.task}</small></span>)}<button className="quiet-button" onClick={startTour}><Play size={13} /> Guided tour</button><button className="quiet-button" aria-pressed={quickView} onClick={() => setQuickView((value) => !value)}><Sparkles size={13} /> {quickView ? 'Full experience' : 'Recruiter view'}</button><button className="quiet-button" onClick={replayBuild}><RotateCcw size={13} /> Replay build</button></section>

      <section className="portfolio-section about-section" id="about" aria-labelledby="about-title">
        <i className="section-rule" aria-hidden="true" /><SectionHeading index="01" label="THE ENGINEER" title="I build systems that are scalable, intelligent, and trustworthy." id="about-title" />
        <div className="about-layout"><div className="about-copy"><p>{portfolio.about}</p><p>{portfolio.interests}</p><span className="margin-note">FIELD NOTE 001<br />BUILD FOR PEOPLE.<br />VERIFY THE SYSTEM.</span></div>
          <div className="stats-grid">{portfolio.highlights.map((stat, index) => <div className="stat" key={stat.label} data-assemble data-tilt={index % 2 ? 5 : -4}><span className="stat-stamp">{stat.value}<small>{stat.unit}</small></span><p>{stat.label}</p></div>)}</div>
        </div>
      </section>

      <section className="portfolio-section projects-section" id="projects" aria-labelledby="projects-title">
        <i className="section-rule" aria-hidden="true" /><SectionHeading index="02" label="SELECTED WORK" title="From Ideas to Systems." id="projects-title" />
        <div className="project-controls"><p>Six studies in building useful, dependable technology.</p><button className="filter-reset" onClick={() => setFilter(null)} disabled={!filter}>{filter ? `Clear filter · ${filter}` : 'FILTER BY TECHNOLOGY ↓'}</button></div>
        <div className="project-grid">{visibleProjects.map((project, index) => <article key={project.number} className={`project-card card-${project.visual}`} data-assemble data-tilt={index % 2 ? 3 : -2}>
          <div className="card-topline"><span>PROJECT {project.number}</span><span>{project.category}</span></div><ProjectDiagram kind={project.visual} />
          <div className="card-actions"><button className="card-menu-trigger" aria-label={`More actions for ${project.title}`} aria-expanded={activeMenu === project.number} aria-controls={`project-menu-${project.number}`} onClick={() => setActiveMenu((current) => current === project.number ? null : project.number)}><Ellipsis size={18} /></button>{activeMenu === project.number && <div className="card-context-menu" id={`project-menu-${project.number}`} role="group" aria-label={`Actions for ${project.title}`} onKeyDown={(event) => { if (event.key === 'Escape') setActiveMenu(null) }}><button onClick={() => { const notes = document.getElementById(`notes-${project.number}`); notes?.setAttribute('open', ''); setActiveMenu(null) }}>Open engineering notes</button>{project.href ? <a href={project.href} target="_blank" rel="noreferrer">Open repository <ArrowUpRight size={12} /></a> : <span>Case study · no public repo</span>}<button onClick={() => setActiveMenu(null)}>Close menu</button></div>}</div>
          <div className="project-content"><div className="project-title-row"><h3>{project.title}</h3>{project.organization && <span className="organization-stamp">{project.organization}</span>}</div><span className="project-stamp" aria-hidden="true">FIELD NOTE / {project.number}</span><p className="project-summary">{project.summary}</p><p className="project-outcome">{project.outcome}</p>
            <div className="tag-list" aria-label={`Filter projects by a technology in ${project.title}`}>{project.tags.map((tag) => <button key={tag} onClick={() => setFilter((current) => current === tag ? null : tag)} aria-pressed={filter === tag} className="tech-tag">{tag}</button>)}</div>
            <details className="case-study" id={`notes-${project.number}`}><summary>Open engineering notes <ArrowRight size={14} /></summary><div className="case-study-body"><ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>{project.href ? <a href={project.href} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={14} /></a> : <span className="case-study-label"><Check size={14} /> CASE STUDY · NO PUBLIC REPOSITORY</span>}</div></details>
            {project.href && <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><Code2 size={15} /> VIEW REPOSITORY <ArrowUpRight size={14} /></a>}
          </div><span className="selection-frame" aria-hidden="true">{Array.from({ length: 8 }, (_, handle) => <i key={handle} />)}<b className="resize-grip" /></span></article>)}</div>
        {visibleProjects.length === 0 && <p className="empty-filter">No projects use that technology. <button onClick={() => setFilter(null)}>Show all projects</button></p>}
      </section>

      <section className="portfolio-section experience-section" id="experience" aria-labelledby="experience-title">
        <i className="section-rule" aria-hidden="true" /><SectionHeading index="03" label="THE JOURNEY" title="Experience, Engineered." id="experience-title" />
        <div className="experience-list">{portfolio.experience.filter((item) => item.organization !== 'Morgan Stanley').map((item, index) => <article className="experience-item" key={`${item.role}-${item.dates}`} data-assemble><div className="experience-year">{item.year}<span> / 0{index + 1}</span></div><div className="experience-main"><p className="experience-date">{item.dates}</p><h3>{item.role}</h3><p className="experience-org">{item.organization}</p><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><div className="tag-list">{item.tags.map((tag) => <span className="tech-tag static-tag" key={tag}>{tag}</span>)}</div></div><span className="timeline-node" aria-hidden="true" /></article>)}
          <article className="experience-item morgan-progression" data-assemble><div className="experience-year">2022–2025<span> / 03</span></div><div className="experience-main"><details className="company-accordion" open><summary><span>Morgan Stanley</span><small>THREE CONNECTED MILESTONES</small></summary><div className="role-milestones">{portfolio.experience.filter((item) => item.organization === 'Morgan Stanley').map((item) => <section className="role-milestone" key={item.role}><p className="experience-date">{item.dates}</p><h3>{item.role}</h3><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><div className="tag-list">{item.tags.map((tag) => <span className="tech-tag static-tag" key={tag}>{tag}</span>)}</div></section>)}</div></details></div><span className="timeline-node" aria-hidden="true" /></article>
        </div>
      </section>

      <section className="portfolio-section skills-section" id="skills" aria-labelledby="skills-title">
        <i className="section-rule" aria-hidden="true" /><SectionHeading index="04" label="THE TOOLKIT" title="Tools of the Trade." id="skills-title" />
        <div className="toolkit-grid">{portfolio.skills.map((group, index) => <article className={`toolkit-card ink-${group.ink}`} key={group.category} data-assemble data-tilt={index % 2 ? 3 : -3}><span className="toolkit-index">INK PLATE 0{index + 1}</span><h3>{group.category}</h3><div className="toolkit-labels">{group.items.map((item) => <button key={item} className="tool-label" onClick={() => { setFilter((current) => current === item ? null : item); document.querySelector('#projects')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }) }} aria-label={`Filter projects tagged ${item}`}>{item}</button>)}</div></article>)}</div>
        <p className="toolkit-note">A working toolkit, not a scorecard. Select a label to find related project work where available.</p>
      </section>

      <section className="portfolio-section education-section" id="education" aria-labelledby="education-title">
        <i className="section-rule" aria-hidden="true" /><SectionHeading index="05" label="ALWAYS LEARNING" title="Learning is part of the system." id="education-title" />
        <div className="academic-grid">{portfolio.education.map((record, index) => <article className="academic-card" key={record.institution} data-assemble data-tilt={index ? 3 : -3}><div className="academic-header"><span>ACADEMIC RECORD / 0{index + 1}</span><span className="academic-seal">{index ? 'SRM' : 'UCLA'}</span></div><p className="academic-date">{record.date}</p><h3>{record.degree}</h3><p className="academic-school">{record.institution}</p><span className="academic-stamp">{record.stamp}</span><div className="academic-rule" /><p className="eyebrow">SELECTED COURSEWORK</p><ul>{record.coursework.map((course) => <li key={course}>{course}</li>)}</ul></article>)}</div>
      </section>

      <footer className="closing-section" id="contact" aria-labelledby="contact-title">
        <i className="section-rule" aria-hidden="true" /><p className="eyebrow">06 — WHAT&apos;S NEXT</p><h2 id="contact-title"><span>Let&apos;s build</span><span className="closing-blue">something</span><span className="closing-pink" aria-hidden="true">something</span><span>meaningful.</span></h2><p className="closing-copy">Interested in software engineering, AI/ML, and building secure, responsible intelligent systems.</p>
        <div className="contact-grid"><a href={`mailto:${portfolio.email}`}><Mail size={17} /><span>{portfolio.email}</span><ArrowUpRight size={15} /></a><a href={portfolio.github} target="_blank" rel="noreferrer"><Code2 size={17} /><span>GitHub / @sherinechally</span><ArrowUpRight size={15} /></a><a href={portfolio.linkedin} target="_blank" rel="noreferrer"><Network size={17} /><span>LinkedIn / sherinechally</span><ArrowUpRight size={15} /></a><a href={resumeHref} download="Sherine-Chally-Resume.txt"><ArrowDown size={17} /><span>Download résumé · TXT</span><ArrowDownRight size={15} /></a><span className="location-line"><MapPin size={17} />{portfolio.location}</span></div>
        <div className="footer-bottom"><span>DESIGNED WITH INTENTION. BUILT WITH CURIOSITY.</span><a href="#top">BACK TO THE TOP ↑</a></div><Mark className="footer-crops" />
      </footer>

      {tourStep !== null && <aside className="tour-card" role="group" aria-label="Guided portfolio tour" aria-live="polite"><span className="tour-count">GUIDED TOUR · {String(tourStep + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}</span><strong>{sections[tourStep].name}</strong><p>{tourStep === 0 ? 'Start with the engineering principles behind the work.' : `Explore ${sections[tourStep].name.toLowerCase()} through the portfolio.`}</p><div><button onClick={advanceTour}>{tourStep === sections.length - 1 ? 'Finish tour' : 'Next section'} <ArrowRight size={14} /></button><button onClick={() => setTourStep(null)}>Exit</button></div></aside>}
    </main>
  )
}
