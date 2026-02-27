'use client'
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    title: "Jenga App",
    description: "A cloud-based construction system that allows owners and foremen to track expenses, manage human resources and check-in features.",
    images: ["/iPhone 15 Mockup, Perspective (1).png", "/jenga.png"],
    type: "mobile-app",
    tag: "Construction Tech"
  },
  {
    title: "ChickFarm",
    description: "An AgriTech mobile application that allows chicken farmers to track mortality rates, vaccines and expenses.",
    images: ["/Mobile App Screen Mockup, Mosaic (2).png"],
    type: "mobile-app",
    tag: "AgriTech"
  },
  {
    title: "Portugalgo",
    description: "An owners portal app that allows home owners to list their homes on Portugalgo for listing and manage reservations.",
    images: ["/iPhone 15 Mockup, Perspective (2).png", "/portugal.png"],
    type: "mobile-app",
    tag: "PropTech"
  },
  {
    title: "POS System",
    description: "A cloud-based point of sale system available on mobile, computers, tablets, and POS devices with offline mode.",
    images: ["/iPhone1.png", "/Iphone 15 Screens Mockup (1).png"],
    type: "mobile-app",
    tag: "Retail Tech"
  },
  {
    title: "Ankara",
    description: "A cloud-based invoicing system available on mobile, computers, tablets, and POS devices with offline mode.",
    images: ["/Iphone 15 Screens Mockup.png", "/iPhone 15 Mockup, Perspective.png"],
    type: "mobile-app",
    tag: "FinTech"
  },
  {
    title: "E-Commerce",
    description: "An online store for various products with a user-friendly interface and secure payment options.",
    images: ["/Iphone 15 Screens Mockup (2).png", "/iPhone 15 Pro Mockup, Front and Back View (1).png"],
    type: "mobile-app",
    tag: "E-Commerce"
  },
  {
    title: "Swahilipro",
    description: "A Swahili compiler and programming language that allows Swahili speakers to write and execute code in their native language.",
    images: ["/Macbook Mockup Front View UV (3).png", "/iPad Pro Mockup UV (2).png"],
    type: "website",
    tag: "Dev Tools",
    link: 'https://swahilipro-web.vercel.app/',
  },
  {
    title: "ChatPDF",
    description: "An AI project that uses OpenAI embeddings to interact with PDF files stored in an AWS S3 bucket.",
    images: ["/Macbook Mockup Front View UV (6).png", "/Macbook Mockup Front View UV (7).png"],
    type: "website",
    tag: "Artificial Intelligence",
    link: 'https://github.com/bonnieace/chatpdf_frontend',
  },
  {
    title: "Tshiroh's Kitchen",
    description: "A bakery website showcasing different cakes and flavors, client reviews and booking functionality.",
    images: ["/Macbook Mockup Front View UV (1).png", "/Macbook Mockup Front View UV (4).png"],
    type: "website",
    tag: "Food & Beverage",
    link: 'https://tshiroh.s3.eu-north-1.amazonaws.com/Cake-Website/index.html',
  },
  {
    title: "MEXC Futures Bot",
    description: "A cryptocurrency webapp using the MEXC API to trade futures using the martingale trading strategy.",
    images: ["/iPad Pro Mockup UV (1).png", "/Macbook Mockup Front View UV (2).png"],
    type: "website",
    tag: "FinTech",
    link: 'https://mexc-sigma.vercel.app/',
  },
  {
    title: "Portfolio Website",
    description: "A software developer portfolio showcasing different skills and projects, customer reviews and intuitive UI.",
    images: ["/Macbook Mockup Front View UV (5).png"],
    type: "website",
    tag: "Portfolio",
    link: 'https://bonifacemasota.netlify.app/',
  },
  {
    title: "Animation Playlist",
    description: "A YouTube playlist with animated videos ranging from explainer videos, AI voice-over videos and Blender animations.",
    images: ["/Macbook Mockup Front View UV (8).png"],
    type: "website",
    tag: "Animation",
    link: 'https://www.youtube.com/watch?v=Elq9Vt-kBLM&list=PLGngOqJJtp0fvHwazN4kDpLspzYex6fSD',
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dotsClass: 'slick-dots custom-dots',
};

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <style>{`
        .proj-card {
          position: relative;
          background: rgba(8, 12, 30, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.1);
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .proj-card:hover {
          border-color: rgba(59, 130, 246, 0.4);
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(59,130,246,0.1);
        }
        .proj-image-wrap {
          position: relative;
          overflow: hidden;
          background: #ffffff;
        }
        .proj-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .proj-card:hover .proj-image-wrap img {
          transform: scale(1.04);
        }
        .proj-tag {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.25rem 0.6rem;
          background: rgba(5, 8, 20, 0.85);
          border: 1px solid rgba(6, 182, 212, 0.3);
          color: #06b6d4;
          border-radius: 4px;
          backdrop-filter: blur(8px);
          z-index: 2;
        }
        .proj-num {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: rgba(200,216,240,0.2);
          z-index: 2;
        }
        .proj-body {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .proj-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.5rem;
        }
        .proj-desc {
          font-size: 0.82rem;
          line-height: 1.7;
          color: rgba(200,216,240,0.5);
          flex: 1;
          margin-bottom: 1rem;
        }
        .proj-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #3b82f6;
          text-decoration: none;
          border: 1px solid rgba(59,130,246,0.3);
          padding: 0.4rem 0.9rem;
          border-radius: 4px;
          align-self: flex-start;
          transition: all 0.25s ease;
        }
        .proj-link:hover {
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          border-color: transparent;
          color: #fff;
          box-shadow: 0 4px 15px rgba(59,130,246,0.35);
        }
        .proj-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(59,130,246,0.3), transparent);
          margin-bottom: 1rem;
        }
        .custom-dots li button:before {
          color: rgba(99,179,237,0.4) !important;
          font-size: 6px !important;
        }
        .custom-dots li.slick-active button:before {
          color: #3b82f6 !important;
        }
      `}</style>

      <div
        className="proj-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="proj-image-wrap" style={{ aspectRatio: project.type === 'mobile-app' ? '9/10' : '16/10' }}>
          <span className="proj-tag">{project.tag}</span>
          <span className="proj-num">/{String(index + 1).padStart(2, '0')}</span>
          {project.images.length > 1 ? (
            <Slider {...sliderSettings}>
              {project.images.map((img, i) => (
                <div key={i}><img src={img} alt={`${project.title} ${i + 1}`} /></div>
              ))}
            </Slider>
          ) : (
            <img src={project.images[0]} alt={project.title} />
          )}
        </div>

        <div className="proj-body">
          <div className="proj-divider" />
          <h3 className="proj-title">{project.title}</h3>
          <p className="proj-desc">{project.description}</p>
          {project.type === 'website' && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="proj-link">
              View Project →
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.type === filter);

  return (
    <>
      <style>{`
        .projects-section {
          padding: 7rem 2rem;
          background: #050814;
          position: relative;
        }
        .projects-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent);
        }
        .proj-filter-row {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
        }
        .filter-btn {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.45rem 1.1rem;
          border-radius: 9999px;
          border: 1px solid rgba(59,130,246,0.2);
          background: transparent;
          color: rgba(200,216,240,0.45);
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .filter-btn:hover {
          border-color: rgba(59,130,246,0.4);
          color: #90cdf4;
        }
        .filter-btn.active {
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          border-color: transparent;
          color: #fff;
          box-shadow: 0 0 16px rgba(59,130,246,0.35);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
      `}</style>

      <section id="projects" className="projects-section">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#06b6d4', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ width: '1.5rem', height: '1px', background: '#06b6d4', display: 'inline-block' }} />
            What We've Built
            <span style={{ width: '1.5rem', height: '1px', background: '#06b6d4', display: 'inline-block' }} />
          </p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Our <span style={{ background: 'linear-gradient(90deg, #3b82f6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Works</span>
          </h2>
        </div>

        <div className="proj-filter-row">
          {['all', 'mobile-app', 'website'].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`filter-btn ${filter === f ? 'active' : ''}`}>
              {f === 'all' ? 'All Work' : f === 'mobile-app' ? 'Mobile Apps' : 'Websites'}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}