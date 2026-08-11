'use client'

import Image from 'next/image'
import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Check, Code2, Menu, X } from 'lucide-react'
import { useState } from 'react'

const projects = [
  { title: 'Insightful', type: 'Plataforma SaaS', description: 'Experiência de dados que transforma informações complexas em decisões claras para equipes modernas.', tags: ['Next.js', 'React', 'TypeScript'], href: 'https://insightful.com.br' },
  { title: 'Jusbrasil', type: 'Produto digital', description: 'Interfaces e sistemas que aproximam pessoas do acesso à informação jurídica de forma simples.', tags: ['React', 'Design System', 'Produto'], href: 'https://www.jusbrasil.com.br' },
  { title: 'Portal de Vagas', type: 'Web app', description: 'Uma experiência objetiva para conectar talentos e oportunidades em um só lugar.', tags: ['Next.js', 'Node.js', 'UX'], href: 'https://www.linkedin.com' },
  { title: 'Cardápio Digital', type: 'Experiência mobile', description: 'Produto leve e intuitivo para restaurantes apresentarem seus pratos e receberem pedidos.', tags: ['React', 'Mobile first', 'API'], href: 'https://github.com/vitorjimenez' },
]

const experience = [
  { period: '2022 — presente', role: 'Desenvolvedor Full Stack', company: 'Insightful', detail: 'Construção de produtos digitais com foco em performance, arquitetura sustentável e experiências que geram confiança.' },
  { period: '2020 — 2022', role: 'Desenvolvedor Front-end', company: 'Jusbrasil', detail: 'Evolução de interfaces de alto tráfego e colaboração próxima com produto, design e engenharia.' },
  { period: '2019 — 2020', role: 'Desenvolvedor Web', company: 'Projetos independentes', detail: 'Desenvolvimento de aplicações web para negócios que precisavam transformar uma ideia em algo real.' },
]

const skills = ['React', 'Next.js', 'TypeScript', 'Java', 'Node.js', 'PostgreSQL', 'Design Systems', 'APIs', 'Git']

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return <main>
    <header className="site-header"><div className="container nav-wrap"><a className="wordmark" href="#inicio" onClick={closeMenu}>VJ<span>.</span></a><button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button><nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Navegação principal"><a href="#sobre" onClick={closeMenu}>Sobre</a><a href="#projetos" onClick={closeMenu}>Projetos</a><a href="#experiencia" onClick={closeMenu}>Experiência</a><a className="nav-contact" href="#contato" onClick={closeMenu}>Vamos conversar <ArrowUpRight size={15} /></a></nav></div></header>

    <section className="hero" id="inicio"><div className="container hero-grid"><div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> Disponível para novos projetos</p><h1>Construo produtos digitais que <em>fazem sentido.</em></h1><p className="hero-lead">Sou Vitor Jimenez, desenvolvedor full stack. Transformo problemas complexos em experiências digitais claras, rápidas e confiáveis.</p><div className="hero-actions"><a className="button button-dark" href="#projetos">Ver meu trabalho <ArrowDownRight size={17} /></a><a className="text-link" href="mailto:vitorjimenez.dev@gmail.com">Entrar em contato <ArrowUpRight size={16} /></a></div></div><div className="portrait-wrap"><div className="portrait-frame"><Image src="/profile.jpg" alt="Vitor Jimenez, desenvolvedor full stack" fill priority sizes="(max-width: 768px) 90vw, 420px" /></div><div className="portrait-note">Tecnologia com intenção<br /><strong>São Paulo, BR</strong></div></div></div><div className="container hero-foot"><span>Desenvolvimento web</span><span className="line" /><span>Produto &amp; engenharia</span><span className="hero-arrow">↓</span></div></section>

    <section className="statement" id="sobre"><div className="container statement-grid"><p className="section-kicker">01 / Sobre</p><div><h2>Menos ruído. <span>Mais impacto.</span></h2><p className="statement-text">Acredito que boa tecnologia não precisa ser complicada para ser poderosa. Trabalho na interseção entre engenharia, produto e design para criar soluções que as pessoas entendem — e querem usar.</p><div className="principles"><div><b>01</b><span>Clareza antes da complexidade</span></div><div><b>02</b><span>Detalhe que resolve problemas</span></div><div><b>03</b><span>Código feito para durar</span></div></div></div></div></section>

    <section className="projects section" id="projetos"><div className="container"><div className="section-heading"><div><p className="section-kicker">02 / Seleção de trabalho</p><h2>Projetos com <span>propósito.</span></h2></div><p>Alguns produtos e experiências que tive o prazer de construir.</p></div><div className="project-list">{projects.map((project, index) => <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.title}><div className="project-index">0{index + 1}</div><div className="project-main"><p className="project-type">{project.type}</p><h3>{project.title} <ArrowUpRight size={23} /></h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><ArrowUpRight className="project-arrow" size={24} /></a>)}</div></div></section>

    <section className="experience section" id="experiencia"><div className="container experience-grid"><p className="section-kicker">03 / Experiência</p><div><h2>Construindo <span>com consistência.</span></h2><div className="timeline">{experience.map(item => <div className="timeline-item" key={item.company}><p className="period">{item.period}</p><div><h3>{item.role}</h3><p className="company">{item.company}</p><p className="detail">{item.detail}</p></div></div>)}</div></div></div></section>

    <section className="skills section"><div className="container skills-grid"><div><p className="section-kicker">04 / Ferramentas</p><h2>Minha caixa<br /><span>de ferramentas.</span></h2></div><div className="skills-content"><p>As tecnologias mudam. O cuidado com o que construímos permanece.</p><div className="skill-cloud">{skills.map(skill => <span key={skill}><Check size={14} />{skill}</span>)}</div></div></div></section>

    <section className="contact" id="contato"><div className="container contact-inner"><p className="section-kicker">05 / Contato</p><h2>Tem uma ideia?<br /><em>Vamos tirar do papel.</em></h2><a className="contact-email" href="mailto:vitorjimenez.dev@gmail.com">vitorjimenez.dev@gmail.com <ArrowUpRight size={22} /></a><div className="contact-bottom"><span>Aberto a conversas interessantes</span><div className="socials"><a href="https://github.com/vitorjimenez" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={19} /></a><a href="https://www.linkedin.com/in/vitor-jimenez/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={19} /></a></div></div></div></section>
    <footer><div className="container"><span>© {new Date().getFullYear()} Vitor Jimenez</span><span>Feito com intenção.</span></div></footer>
  </main>
}
