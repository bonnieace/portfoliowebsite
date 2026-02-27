'use client'
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faCloud, faMobileAlt, faFilm, faChain, faRobot } from '@fortawesome/free-solid-svg-icons';
import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import TeamPage from "./components/team";
import Projects from "./components/projects";
import TestimonialsSection from "./components/testimonials";
import { Analytics } from "@vercel/analytics/next"
// ─── SERVICES DATA ───────────────────────────────────────────────────────────
const services = [
  { title: "Custom Software", description: "Scalable and robust custom software solutions tailored to your business needs.", icon: faLaptopCode },
  { title: "Cloud Computing", description: "Leverage cloud power to enhance your operational efficiency and agility.", icon: faCloud },
  { title: "Mobile Apps", description: "User-friendly mobile applications for Android and iOS platforms.", icon: faMobileAlt },
  { title: "3D & 2D Animation", description: "Product design, explainer videos, cartoons, animations and music videos.", icon: faFilm },
  { title: "Blockchain", description: "Secure decentralized blockchain solutions to revolutionize your business.", icon: faChain },
  { title: "AI & Machine Learning", description: "AI-powered solutions to automate processes and improve decision-making.", icon: faRobot },
];

// ─── NAV ─────────────────────────────────────────────────────────────────────
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#', icon: <AiOutlineHome />, label: 'Home' },
    { href: '#services', icon: <RiServiceLine />, label: 'Services' },
    { href: '#projects', icon: <BiBook />, label: 'Projects' },
    { href: '#testimonials', icon: <AiOutlineUser />, label: 'About' },
    { href: '#contact', icon: <AiOutlineMessage />, label: 'Contact' },
  ];

  return (
    <>
      <style>{`
        .nav-float {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem;
          border-radius: 9999px;
          background: rgba(5, 8, 20, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(99, 179, 237, 0.2);
          box-shadow: 0 0 40px rgba(66, 153, 225, 0.1), 0 20px 60px rgba(0,0,0,0.5);
          transition: all 0.4s ease;
        }
        .nav-float.scrolled {
          background: rgba(5, 8, 20, 0.9);
          border-color: rgba(99, 179, 237, 0.35);
          box-shadow: 0 0 60px rgba(66, 153, 225, 0.2), 0 20px 60px rgba(0,0,0,0.6);
        }
        .nav-link {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          border-radius: 9999px;
          color: rgba(200, 220, 255, 0.5);
          font-size: 1.2rem;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
        }
        .nav-link:hover {
          color: #90cdf4;
          background: rgba(99, 179, 237, 0.12);
          transform: translateY(-3px) scale(1.1);
        }
        .nav-link.active {
          color: #fff;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.6), 0 4px 15px rgba(0,0,0,0.3);
          transform: translateY(-4px) scale(1.15);
        }
        .nav-label {
          position: absolute;
          bottom: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.6rem;
          font-family: 'Space Mono', monospace;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #90cdf4;
          white-space: nowrap;
          background: rgba(5,8,20,0.95);
          border: 1px solid rgba(99,179,237,0.2);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease;
        }
        .nav-link:hover .nav-label {
          opacity: 1;
        }
        .nav-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(99,179,237,0.3);
          margin: 0 0.1rem;
        }
      `}</style>

      <nav className={`nav-float ${scrolled ? 'scrolled' : ''}`}>
        {links.map((link, i) => (
          <React.Fragment key={link.href}>
            <a
              href={link.href}
              onClick={() => setActiveNav(link.href)}
              className={`nav-link ${activeNav === link.href ? 'active' : ''}`}
            >
              {link.icon}
              <span className="nav-label">{link.label}</span>
            </a>
            {i < links.length - 1 && <div className="nav-dot" />}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
};

// ─── HERO ─────────────────────────────────────────────────────────────────────
const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');

        :root {
          --ink: #050814;
          --blue: #3b82f6;
          --cyan: #06b6d4;
          --text: #c8d8f0;
          --muted: rgba(200,216,240,0.45);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: var(--ink); color: var(--text); font-family: 'Syne', sans-serif; }

        .hero-wrap {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: var(--ink);
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at ${mousePos.x}% ${mousePos.y}%, rgba(59,130,246,0.12) 0%, transparent 55%),
                      radial-gradient(ellipse at 80% 20%, rgba(6,182,212,0.08) 0%, transparent 45%),
                      radial-gradient(ellipse at 10% 90%, rgba(99,102,241,0.07) 0%, transparent 40%);
          transition: background 0.3s ease;
        }
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 2rem 4rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 768px) {
          .hero-content { grid-template-columns: 1fr; gap: 2rem; padding: 5rem 1.5rem 6rem; }
          .hero-image-col { order: -1; }
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 1.5rem;
        }
        .hero-eyebrow::before {
          content: '';
          width: 2rem;
          height: 1px;
          background: var(--cyan);
        }
        .hero-h1 {
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
          color: #fff;
        }
        .hero-h1 .gradient-word {
          background: linear-gradient(90deg, var(--blue), var(--cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-sub {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--muted);
          max-width: 460px;
          margin-bottom: 2.5rem;
        }
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 2rem;
          background: linear-gradient(135deg, var(--blue), var(--cyan));
          color: #fff;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(59,130,246,0.35);
        }
        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--cyan), var(--blue));
          opacity: 0;
          transition: opacity 0.3s;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(59,130,246,0.5); }
        .btn-primary:hover::after { opacity: 1; }
        .btn-primary span { position: relative; z-index: 1; }
        .btn-ghost {
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          color: var(--muted);
          text-decoration: none;
          border-bottom: 1px solid rgba(200,216,240,0.2);
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }
        .btn-ghost:hover { color: var(--cyan); border-color: var(--cyan); }

        .hero-socials {
          display: flex;
          gap: 1rem;
          margin-top: 3rem;
        }
        .hero-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.2rem;
          height: 2.2rem;
          border: 1px solid rgba(99,179,237,0.2);
          border-radius: 50%;
          color: var(--muted);
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.3s;
        }
        .hero-social-link:hover {
          border-color: var(--blue);
          color: var(--blue);
          background: rgba(59,130,246,0.1);
          transform: translateY(-3px);
        }

        .hero-image-col {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .hero-image-frame {
          position: relative;
          width: 100%;
          max-width: 440px;
        }
        .hero-image-frame::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(59,130,246,0.4), rgba(6,182,212,0.1), transparent);
          z-index: 0;
        }
        .hero-image-frame img {
          position: relative;
          z-index: 1;
          width: 100%;
          border-radius: 12px;
          display: block;
        }
        .hero-badge {
          position: absolute;
          bottom: -1rem;
          left: -1rem;
          background: rgba(5,8,20,0.9);
          border: 1px solid rgba(59,130,246,0.3);
          border-radius: 8px;
          padding: 0.75rem 1rem;
          backdrop-filter: blur(10px);
          z-index: 2;
        }
        .hero-badge-num {
          font-size: 1.5rem;
          font-weight: 800;
          color: #fff;
          line-height: 1;
        }
        .hero-badge-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          color: var(--cyan);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-top: 0.2rem;
        }
        .hero-badge-2 {
          position: absolute;
          top: -1rem;
          right: -1rem;
          background: rgba(5,8,20,0.9);
          border: 1px solid rgba(6,182,212,0.3);
          border-radius: 8px;
          padding: 0.75rem 1rem;
          backdrop-filter: blur(10px);
          z-index: 2;
        }
        .floating {
          animation: float 5s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .hero-scroll-hint {
          position: absolute;
          bottom: 5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          z-index: 3;
        }
        .scroll-line {
          width: 1px;
          height: 3rem;
          background: linear-gradient(to bottom, var(--blue), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }
        .scroll-text {
          font-family: 'Space Mono', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.25em;
          color: var(--muted);
          text-transform: uppercase;
          writing-mode: vertical-rl;
        }

/* ─── SERVICES ───────────────────────────────────── */
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 1rem;
        }
        .section-tag::before, .section-tag::after {
          content: '';
          width: 1.5rem;
          height: 1px;
          background: var(--cyan);
          opacity: 0.5;
        }
        .section-h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
        }
        .section-h2 span {
          background: linear-gradient(90deg, var(--blue), var(--cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .services-section {
          padding: 7rem 2rem;
          background: var(--ink);
          position: relative;
        }
        .services-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent);
        }

        /* ── Desktop: unified bordered panel with hairline dividers ── */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 0;
          max-width: 1100px;
          margin: 0 auto;
          border: 1px solid rgba(59,130,246,0.12);
          border-radius: 12px;
          overflow: hidden;
        }

        /* inner dividers via box-shadow so border-radius stays clean */
        .service-card {
          background: rgba(10,15,35,0.8);
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          transition: background 0.3s;
          cursor: default;
          /* hairline right + bottom borders acting as grid lines */
          box-shadow:
            1px 0 0 0 rgba(59,130,246,0.1),
            0 1px 0 0 rgba(59,130,246,0.1);
        }
        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(59,130,246,0.06), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .service-card:hover { background: rgba(15,22,50,0.9); }
        .service-card:hover::before { opacity: 1; }

        .service-icon-wrap {
          width: 3rem;
          height: 3rem;
          border: 1px solid rgba(59,130,246,0.3);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue);
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          transition: all 0.3s;
          position: relative;
          z-index: 1;
        }
        .service-card:hover .service-icon-wrap {
          background: linear-gradient(135deg, var(--blue), var(--cyan));
          border-color: transparent;
          color: #fff;
          box-shadow: 0 0 20px rgba(59,130,246,0.4);
        }
        .service-num {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: rgba(200,216,240,0.15);
          letter-spacing: 0.1em;
        }
        .service-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.75rem;
          position: relative;
          z-index: 1;
        }
        .service-desc {
          font-size: 0.875rem;
          line-height: 1.7;
          color: var(--muted);
          position: relative;
          z-index: 1;
        }
        .service-line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0;
          background: linear-gradient(90deg, var(--blue), var(--cyan));
          transition: width 0.4s ease;
        }
        .service-card:hover .service-line { width: 100%; }

        /* ── Mobile: break into individual floating cards ── */
        @media (max-width: 767px) {
          .services-section {
            padding: 5rem 1.25rem;
          }

          /* Reset the unified panel — each card becomes standalone */
          .services-grid {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            border: none;
            border-radius: 0;
            overflow: visible;
            background: transparent;
          }

          .service-card {
            border-radius: 12px;
            border: 1px solid rgba(59,130,246,0.12);
            /* remove the box-shadow grid-line trick */
            box-shadow: none;
            padding: 1.75rem 1.5rem;
          }

          .service-card:hover {
            box-shadow: 0 8px 30px rgba(0,0,0,0.4), 0 0 20px rgba(59,130,246,0.08);
          }

          .service-num {
            top: 1.25rem;
            right: 1.25rem;
          }
        }

        /* ── Tablet: 2-col grid, still with card gaps ── */
        @media (min-width: 768px) and (max-width: 1023px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        /* ─── FOOTER ───────────────────────────────────────── */
        .footer {
          background: rgba(3,5,15,0.98);
          border-top: 1px solid rgba(59,130,246,0.15);
          padding: 4rem 2rem;
          text-align: center;
        }
        .footer-brand {
          font-size: 1.5rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.5rem;
        }
        .footer-brand span {
          background: linear-gradient(90deg, var(--blue), var(--cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer-contact {
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          color: var(--muted);
          letter-spacing: 0.05em;
          margin: 1rem 0 2rem;
        }
        .footer-contact a { color: var(--cyan); text-decoration: none; }
        .footer-contact a:hover { text-decoration: underline; }
        .footer-copy {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: rgba(200,216,240,0.2);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* ─── TESTIMONIALS SECTION ─────────────────────────── */
        .testimonials-section {
          padding: 7rem 2rem;
          background: rgba(5,8,20,0.97);
          position: relative;
        }
        .testimonials-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent);
        }

        /* ─── ANIMATIONS ───────────────────────────────────── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.8s ease forwards; }
        .delay-1 { animation-delay: 0.15s; opacity: 0; }
        .delay-2 { animation-delay: 0.3s; opacity: 0; }
        .delay-3 { animation-delay: 0.45s; opacity: 0; }
        .delay-4 { animation-delay: 0.6s; opacity: 0; }
      `}</style>

      <section className="hero-wrap">
        <div className="hero-bg" />
        <div className="hero-grid" />

        <div className="hero-content">
          {/* Text Column */}
          <div>
            <p className="hero-eyebrow fade-up">Next-Gen Software Studio</p>
            <h1 className="hero-h1 fade-up delay-1">
              We Build <span className="gradient-word">Digital</span><br />
              Solutions That<br />
              <span className="gradient-word">Scale</span>
            </h1>
            <p className="hero-sub fade-up delay-2">
              At Swahilipro Software Studios, we craft customized software that empowers your business to achieve goals with ease and efficiency — from mobile apps to AI systems.
            </p>
            <div className="hero-cta-row fade-up delay-3">
              <a href="#services" className="btn-primary">
                <span>Explore Services</span>
              </a>
              <a href="#projects" className="btn-ghost">View Our Work →</a>
            </div>
            <div className="hero-socials fade-up delay-4">
              <a href="https://www.linkedin.com/in/bonnie-masota-310267248/" target="_blank" rel="noopener noreferrer" className="hero-social-link"><BsLinkedin /></a>
              <a href="https://github.com/bonnieace" target="_blank" rel="noopener noreferrer" className="hero-social-link"><BsGithub /></a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hero-social-link"><BsDribbble /></a>
            </div>
          </div>

          {/* Image Column */}
          <div className="hero-image-col">
            <div className="hero-image-frame floating">
              <img src="a.png" alt="Kioo Technologies" />
              <div className="hero-badge">
                <div className="hero-badge-num">50+</div>
                <div className="hero-badge-label">Projects Shipped</div>
              </div>
              <div className="hero-badge-2">
                <div className="hero-badge-num" style={{fontSize:'1.1rem'}}>6+</div>
                <div className="hero-badge-label">Services</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-hint">
          <div className="scroll-line" />
          <span className="scroll-text">Scroll</span>
        </div>
      </section>
    </>
  );
};

// ─── SERVICES SECTION ─────────────────────────────────────────────────────────
const ServicesSection = () => (
  <section id="services" className="services-section">
    <div className="section-header">
      <p className="section-tag">What We Do</p>
      <h2 className="section-h2">Our <span>Services</span></h2>
    </div>
    <div className="services-grid">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <span className="service-num">0{index + 1}</span>
          <div className="service-icon-wrap">
            <FontAwesomeIcon icon={service.icon} />
          </div>
          <h3 className="service-title">{service.title}</h3>
          <p className="service-desc">{service.description}</p>
          <div className="service-line" />
        </div>
      ))}
    </div>
  </section>
);


// ─── FOOTER ───────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer id="contact" className="footer">
    <div className="footer-brand">Next - Gen <span>Software Studios</span></div>
    <p className="footer-contact">
      <a href="mailto:Bonniemasota@gmail.com">Bonniemasota@gmail.com</a>
      {' · '}
      <a href="tel:0722218106">0722 218 106</a>
    </p>
    <p className="footer-copy">&copy; 2024 Next - Gen · All rights reserved</p>
  </footer>
);

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ background: '#050814' }}>
      <Analytics/>
      <HeroSection />
      
      <ServicesSection />
      <Projects />
      <TestimonialsSection /> 
      <TeamPage />
      <Footer />
    </div>
  );
}