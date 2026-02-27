'use client'
import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: "Kioo Technologies transformed our construction workflow completely. The Jenga app has saved us hours every week in tracking and reporting.",
    author: "Samuel Ochieng",
    role: "Site Foreman",
    company: "BuildRight Kenya",
    initials: "SO",
    color: "#3b82f6",
    rating: 5,
  },
  {
    quote: "The ChickFarm app is exactly what the local poultry industry needed. Simple, powerful, and built with real farmers in mind.",
    author: "Mary Wambui",
    role: "Poultry Farmer",
    company: "Wambui Farms",
    initials: "MW",
    color: "#06b6d4",
    rating: 5,
  },
  {
    quote: "Working with Kioo was a pleasure from start to finish. They understood our vision for Swahilipro and delivered beyond expectations.",
    author: "Dr. James Kariuki",
    role: "Computer Science Lecturer",
    company: "University of Nairobi",
    initials: "JK",
    color: "#6366f1",
    rating: 5,
  },
  {
    quote: "The POS system they built works seamlessly across all our devices. The offline mode alone has saved us from so many potential issues.",
    author: "Grace Njeri",
    role: "Business Owner",
    company: "Njeri Retail",
    initials: "GN",
    color: "#10b981",
    rating: 5,
  },
  {
    quote: "Professional team, clean code, and a product that actually works. Kioo Tech is the go-to studio for serious digital solutions in Kenya.",
    author: "Peter Mwangi",
    role: "CTO",
    company: "TechHub Nairobi",
    initials: "PM",
    color: "#f59e0b",
    rating: 5,
  },
];

const StarRating = ({ count }) => (
  <div style={{ display: 'flex', gap: '3px', marginBottom: '1.25rem' }}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

export default function TestimonialCard() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);

  const goTo = (index) => {
    if (isAnimating || index === active) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActive(index);
      setIsAnimating(false);
    }, 250);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const t = testimonials[active];

  return (
    <>
      <style>{`
        .testi-wrap {
          max-width: 860px;
          margin: 0 auto;
          position: relative;
        }

        /* Large decorative quote mark */
        .testi-bigquote {
          position: absolute;
          top: -1rem;
          left: 0;
          font-size: 8rem;
          line-height: 1;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          color: rgba(59,130,246,0.08);
          pointer-events: none;
          user-select: none;
        }

        .testi-card {
          background: rgba(8,12,30,0.85);
          border: 1px solid rgba(59,130,246,0.12);
          border-radius: 16px;
          padding: 3rem;
          position: relative;
          overflow: hidden;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .testi-card.animating {
          opacity: 0;
          transform: translateY(8px);
        }
        .testi-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(to bottom, var(--accent-color, #3b82f6), transparent);
          border-radius: 16px 0 0 16px;
        }
        .testi-card::after {
          content: '';
          position: absolute;
          bottom: 0; right: 0;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, var(--accent-color, rgba(59,130,246,0.06)) 0%, transparent 70%);
          pointer-events: none;
        }

        .testi-quote {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          font-weight: 500;
          line-height: 1.75;
          color: rgba(200,216,240,0.85);
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }

        .testi-author-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          position: relative;
          z-index: 1;
        }
        .testi-avatar {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 0.9rem;
          font-weight: 800;
          color: #fff;
          flex-shrink: 0;
          border: 2px solid rgba(255,255,255,0.1);
        }
        .testi-author-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          color: #fff;
          font-size: 0.95rem;
        }
        .testi-author-meta {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.08em;
          color: rgba(200,216,240,0.4);
          margin-top: 0.15rem;
        }

        /* Dots */
        .testi-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2.5rem;
        }
        .testi-dot {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: rgba(99,179,237,0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .testi-dot.active {
          width: 24px;
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          box-shadow: 0 0 10px rgba(59,130,246,0.4);
        }

        /* Side cards preview */
        .testi-previews {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        @media (max-width: 600px) {
          .testi-previews { display: none; }
          .testi-card { padding: 2rem 1.5rem; }
        }
        .testi-preview {
          background: rgba(8,12,30,0.6);
          border: 1px solid rgba(59,130,246,0.08);
          border-radius: 10px;
          padding: 1rem 1.25rem;
          cursor: pointer;
          transition: all 0.25s ease;
          opacity: 0.5;
        }
        .testi-preview:hover, .testi-preview.active {
          opacity: 1;
          border-color: rgba(59,130,246,0.25);
        }
        .testi-preview-name {
          font-family: 'Syne', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.15rem;
        }
        .testi-preview-role {
          font-family: 'Space Mono', monospace;
          font-size: 0.55rem;
          color: rgba(200,216,240,0.35);
          letter-spacing: 0.08em;
        }
        .testi-preview-snippet {
          font-size: 0.75rem;
          color: rgba(200,216,240,0.4);
          margin-top: 0.4rem;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <div className="testi-wrap">
        <div className="testi-bigquote">"</div>

        {/* Main card */}
        <div
          className={`testi-card ${isAnimating ? 'animating' : ''}`}
          style={{ '--accent-color': t.color }}
        >
          <StarRating count={t.rating} />
          <p className="testi-quote">"{t.quote}"</p>
          <div className="testi-author-row">
            <div className="testi-avatar" style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}>
              {t.initials}
            </div>
            <div>
              <div className="testi-author-name">{t.author}</div>
              <div className="testi-author-meta">{t.role} · {t.company}</div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="testi-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testi-dot ${i === active ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Preview cards */}
        <div className="testi-previews">
          {testimonials
            .filter((_, i) => i !== active)
            .slice(0, 2)
            .map((item) => {
              const idx = testimonials.indexOf(item);
              return (
                <div
                  key={idx}
                  className={`testi-preview ${idx === active ? 'active' : ''}`}
                  onClick={() => goTo(idx)}
                >
                  <div className="testi-preview-name">{item.author}</div>
                  <div className="testi-preview-role">{item.role}</div>
                  <p className="testi-preview-snippet">"{item.quote}"</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}