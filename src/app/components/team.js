'use client'
import React, { useState } from 'react';

const teamMembers = [
  {
    name: "Boniface Masota",
    position: "CEO · Lead Developer",
    bio: "Guiding Kioo's strategic direction and overseeing the development of innovative software solutions that push the boundaries of what's possible.",
    image: "/IMG_20210801_223225_769.jpg",
    initials: "BM",
    color: "#3b82f6",
  },
  {
    name: "Ann Nyathika",
    position: "Business Operations Manager",
    bio: "Optimizing processes and driving efficiency across all business functions with a keen eye for detail and a proactive, results-oriented approach.",
    image: "/Screenshot_2023-12-04-20-11-19-19.jpg",
    initials: "AN",
    color: "#06b6d4",
  },
  {
    name: "Cate Wanjiru",
    position: "Client Satisfaction Manager",
    bio: "Ensuring the highest level of client satisfaction by understanding needs, fostering positive relationships and delivering exceptional service.",
    image: "/GBWA-20180214003918.jpg",
    initials: "CW",
    color: "#6366f1",
  },
];

const TeamCard = ({ member, index }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <>
      <style>{`
        .team-card {
          position: relative;
          background: rgba(8, 12, 30, 0.8);
          border: 1px solid rgba(59,130,246,0.1);
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
        }
        .team-card:hover {
          border-color: rgba(59,130,246,0.35);
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.5), 0 0 30px rgba(59,130,246,0.08);
        }
        .team-image-wrap {
          position: relative;
          aspect-ratio: 3/4;
          overflow: hidden;
          background: #030712;
        }
        .team-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.5s ease;
          filter: grayscale(20%);
        }
        .team-card:hover .team-image-wrap img {
          transform: scale(1.04);
          filter: grayscale(0%);
        }
        .team-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 3rem;
          font-weight: 800;
          color: rgba(255,255,255,0.6);
        }
        .team-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 2rem 1.5rem 1.5rem;
          background: linear-gradient(to top, rgba(5,8,20,0.97) 0%, rgba(5,8,20,0.7) 60%, transparent 100%);
          transform: translateY(0);
          transition: all 0.3s ease;
        }
        .team-name {
          font-family: 'Syne', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.2rem;
        }
        .team-position {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }
        .team-bio {
          font-size: 0.8rem;
          line-height: 1.65;
          color: rgba(200,216,240,0.5);
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, opacity 0.3s ease;
          opacity: 0;
        }
        .team-card:hover .team-bio {
          max-height: 6rem;
          opacity: 1;
        }
        .team-socials {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        .team-social-btn {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.5);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .team-social-btn:hover {
          border-color: rgba(255,255,255,0.4);
          background: rgba(255,255,255,0.12);
          color: #fff;
          transform: translateY(-2px);
        }
        .team-index {
          position: absolute;
          top: 1rem;
          right: 1rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          color: rgba(200,216,240,0.2);
          z-index: 2;
        }
        .team-accent-line {
          position: absolute;
          bottom: 0; left: 0;
          width: 0;
          height: 2px;
          transition: width 0.4s ease;
        }
        .team-card:hover .team-accent-line { width: 100%; }
      `}</style>

      <div className="team-card">
        <div className="team-image-wrap">
          <span className="team-index">/{String(index + 1).padStart(2, '0')}</span>
          {imgError ? (
            <div className="team-fallback" style={{ background: `linear-gradient(135deg, ${member.color}22, #050814)` }}>
              {member.initials}
            </div>
          ) : (
            <img src={member.image} alt={member.name} onError={() => setImgError(true)} />
          )}
          <div className="team-overlay">
            <h3 className="team-name">{member.name}</h3>
            <p className="team-position" style={{ color: member.color }}>{member.position}</p>
            <p className="team-bio">{member.bio}</p>
            <div className="team-socials">
              <button className="team-social-btn" aria-label="Facebook">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8H6v4h3v12h5V12h3.6l.4-4h-4V6.3c0-1.2.3-1.6 1.5-1.6H18V0h-3.8C10.5 0 9 1.6 9 4.6V8z"/></svg>
              </button>
              <button className="team-social-btn" aria-label="LinkedIn">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
              </button>
              <button className="team-social-btn" aria-label="Twitter">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
              </button>
            </div>
          </div>
        </div>
        <div className="team-accent-line" style={{ background: `linear-gradient(90deg, ${member.color}, transparent)` }} />
      </div>
    </>
  );
};

export default function TeamPage() {
  return (
    <>
      <style>{`
        .team-section {
          padding: 7rem 2rem;
          background: rgba(5, 8, 20, 0.98);
          position: relative;
        }
        .team-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent);
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }
      `}</style>

      <section className="team-section">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ width: '1.5rem', height: '1px', background: '#6366f1', display: 'inline-block' }} />
            The People
            <span style={{ width: '1.5rem', height: '1px', background: '#6366f1', display: 'inline-block' }} />
          </p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Team Behind <span style={{ background: 'linear-gradient(90deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Kioo</span>
          </h2>
          <p style={{ color: 'rgba(200,216,240,0.45)', maxWidth: '480px', margin: '0 auto', fontSize: '0.9rem', lineHeight: 1.7 }}>
            Meet the dedicated professionals driving our success and delivering exceptional solutions.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}