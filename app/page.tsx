'use client'

import Image from 'next/image'
import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Check, Code2, Cloud, Database, Menu, Server, X } from 'lucide-react'
import { useState } from 'react'

const services = [
  { title: 'Sites Modernos', description: 'Desenvolvimento de sites responsivos, rápidos e otimizados para conversão, com design moderno e UX intuitiva.' },
  { title: 'Aplicações Web', description: 'Aplicações web escaláveis com React, Next.js e tecnologias modernas, com interface interativa e backend robusto.' },
  { title: 'APIs REST', description: 'Criação de APIs robustas com Spring Boot e Java, priorizando segurança, performance e documentação completa.' },
  { title: 'Deploy & Cloud', description: 'Implementação e deploy na nuvem utilizando Docker e pipelines CI/CD para entregar software com confiança.' },
]

const projects = [
  { title: 'Gicartomante', type: 'Full Stack', description: 'Plataforma para criação de pedidos direcionados à cartomancia e astrologia.', tags: ['Java', 'Spring', 'Next', 'React'], badges: ['Sistema Completo', 'Production Ready'], href: 'https://gicartomante.com.br' },
  { title: 'BBB Application', type: 'Full Stack', description: 'Sistema completo inspirado no Big Brother Brasil com cadastro, login, gerenciamento de participantes, votação e estatísticas em tempo real.', tags: ['Next.js', 'Spring Boot', 'MySQL', 'Docker'], badges: ['Frontend Moderno', 'Backend Robusto', 'Containerizado'], href: 'https://github.com/vitorjimenez/bbb' },
  { title: 'Desafio Técnico Mbras', type: 'Frontend', description: 'Interface moderna para plataforma imobiliária com design diferenciado, responsiva e otimizada para conversão de leads.', tags: ['React', 'Next.js', 'Tailwind CSS'], badges: ['UI/UX Moderno', 'Responsivo', 'Performance'], href: 'https://desafio-frontend-kappa-three.vercel.app' },
  { title: 'Go Service', type: 'Full Stack', description: 'Plataforma de freelancing completa com sistema de contratos, pagamentos e avaliações, desenvolvida em parceria com a Porto Seguro.', tags: ['Java', 'Spring', 'JavaScript'], badges: ['Microserviços', 'Sistema Completo', 'Production Ready'], href: 'https://github.com/vitorjimenez/goservice' },
]

const experience = [
  { period: 'Dez 2025 — presente', role: 'Engenheiro de Software Pleno', company: 'Banco Nacional de Paris — Cardif', detail: 'Desenvolvimento de microserviços em Spring Boot com alta disponibilidade, APIs RESTful, otimização de queries e índices Oracle, code review, mentoria e filas resilientes com Dead Letter Topics.' },
  { period: 'Ago 2023 — Dez 2025', role: 'Engenheiro de Software', company: 'Porto Seguro', detail: 'Desenvolvimento de features em Salesforce com Apex, LWC e JavaScript, criação de microsserviços REST Contract-First, automação, troubleshooting e investigação de causa raiz com clientes.' },
]

const techGroups = [
  { title: 'Frontend', icon: Code2, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'] },
  { title: 'Backend', icon: Server, items: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'Maven'] },
  { title: 'Banco de Dados', icon: Database, items: ['PostgreSQL', 'MySQL', 'DynamoDB', 'Oracle'] },
  { title: 'Cloud & DevOps', icon: Cloud, items: ['AWS', 'Docker', 'GCP', 'Jenkins', 'Kafka'] },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return <main>
    <header className="site-header"><div className="container nav-wrap"><a className="wordmark" href="#inicio" onClick={closeMenu}>VJ<span>.</span></a><button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button><nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Navegação principal"><a href="#sobre" onClick={closeMenu}>Sobre</a><a href="#servicos" onClick={closeMenu}>Serviços</a><a href="#projetos" onClick={closeMenu}>Projetos</a><a href="#tecnologias" onClick={closeMenu}>Stack</a><a href="#experiencia" onClick={closeMenu}>Experiência</a><a className="nav-contact" href="#contato" onClick={closeMenu}>Vamos conversar <ArrowUpRight size={15} /></a></nav></div></header>

    <section className="hero" id="inicio"><div className="container hero-grid"><div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> Disponível para novos projetos</p><h1>Criação de sites e aplicações web <em>modernas.</em></h1><p className="hero-lead">Sou Vitor Jimenez, desenvolvedor full stack especializado em soluções digitais escaláveis e de alta performance.</p><div className="hero-actions"><a className="button button-dark" href="#projetos">Ver meu trabalho <ArrowDownRight size={17} /></a><a className="text-link" href="#contato">Entrar em contato <ArrowUpRight size={16} /></a></div></div><div className="portrait-wrap"><div className="portrait-frame"><Image src="/profile.jpg" alt="Vitor Jimenez, desenvolvedor web full stack" fill priority sizes="(max-width: 768px) 90vw, 420px" /></div><div className="portrait-note">Tecnologia com intenção<br /><strong>São Paulo, BR</strong></div></div></div><div className="container hero-foot"><span>Desenvolvimento web</span><span className="line" /><span>Produto &amp; engenharia</span><span className="hero-arrow">↓</span></div></section>

    <section className="statement" id="sobre"><div className="container statement-grid"><p className="section-kicker">01 / Sobre</p><div><h2>Engenharia para <span>ideias reais.</span></h2><p className="statement-text">Desenvolvo soluções digitais escaláveis e de alta performance. Minha experiência combina frontend, backend, cloud e arquitetura para transformar necessidades de negócio em produtos confiáveis.</p><div className="principles"><div><b>01</b><span>Performance desde a base</span></div><div><b>02</b><span>Arquitetura que escala</span></div><div><b>03</b><span>Qualidade compartilhada</span></div></div></div></div></section>

    <section className="section services-section" id="servicos"><div className="container"><div className="section-heading"><div><p className="section-kicker">02 / Serviços</p><h2>Do conceito à <span>produção.</span></h2></div><p>Construção completa para tirar produtos digitais do papel com segurança.</p></div><div className="service-grid">{services.map((service, index) => <article className="service-card" key={service.title}><span className="service-index">0{index + 1}</span><h3>{service.title}</h3><p>{service.description}</p></article>)}</div></div></section>

    <section className="projects section" id="projetos"><div className="container"><div className="section-heading"><div><p className="section-kicker">03 / Projetos destacados</p><h2>Trabalho <span>entregue.</span></h2></div><p>Projetos reais que mostram amplitude técnica e atenção à experiência.</p></div><div className="project-list">{projects.map((project, index) => <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.title}><div className="project-index">0{index + 1}</div><div className="project-main"><p className="project-type">{project.type}</p><h3>{project.title} <ArrowUpRight size={23} /></h3><p>{project.description}</p><p className="project-tech">{project.tags.join(' • ')}</p><div className="tags">{project.badges.map(badge => <span key={badge}>{badge}</span>)}</div></div><ArrowUpRight className="project-arrow" size={24} /></a>)}</div></div></section>

    <section className="experience section" id="experiencia"><div className="container experience-grid"><p className="section-kicker">04 / Experiência profissional</p><div><h2>Experiência que <span>entrega.</span></h2><div className="timeline">{experience.map(item => <div className="timeline-item" key={item.company}><p className="period">{item.period}</p><div><h3>{item.role}</h3><p className="company">{item.company}</p><p className="detail">{item.detail}</p></div></div>)}</div></div></div></section>

    <section className="skills section" id="tecnologias"><div className="container skills-grid"><div><p className="section-kicker">05 / Stack tecnológico</p><h2>Ferramentas para<br /><span>construir bem.</span></h2></div><div className="skills-content"><p>Uma stack completa para criar interfaces, serviços, dados e infraestrutura preparados para produção.</p><div className="tech-groups">{techGroups.map(group => { const Icon = group.icon; return <div className="tech-group" key={group.title}><h3><Icon size={17} />{group.title}</h3><div className="skill-cloud">{group.items.map(item => <span key={item}><Check size={14} />{item}</span>)}</div></div> })}</div></div></div></section>

    <section className="contact" id="contato"><div className="container contact-inner"><p className="section-kicker">06 / Contato</p><h2>Vamos <em>conversar?</em></h2><p className="contact-intro">Tem um produto, desafio técnico ou ideia para tirar do papel? Estou disponível para construir algo consistente com você.</p><div className="contact-links"><a className="contact-email" href="mailto:vitorjimenez.dev@gmail.com">vitorjimenez.dev@gmail.com <ArrowUpRight size={22} /></a><a className="contact-phone" href="tel:+5511943907410">(11) 94390-7410</a></div><div className="contact-bottom"><span>Aberto a conversas interessantes</span><div className="socials"><a href="https://github.com/vitorjimenez" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={19} /></a><a href="https://linkedin.com/in/vitorjimenez" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={19} /></a></div></div></div></section>
    <footer><div className="container"><span>© {new Date().getFullYear()} Vitor Jimenez. Desenvolvedor Web Full Stack.</span><span>Feito com intenção.</span></div></footer>
  </main>
}
