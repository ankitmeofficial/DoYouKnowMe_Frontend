import { useState, useEffect } from 'react';
import { personalDetails } from '../data/portfolioData';
import photo1 from '../assets/Photo 1.png';
import photo3 from '../assets/Photo 3.png';
import { ArrowRight, MapPin, Mail, ShieldCheck, Terminal, Award, FileText } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const Hero = () => {
  const titles = [
    'Full Stack Developer',
    'MERN Stack Specialist',
    'Cyber Security Enthusiast',
    'Hackathon Winner (Rank 3/80+)',
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLightMode, setIsLightMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved) return saved === 'light';
      return document.documentElement.getAttribute('data-theme') === 'light';
    }
    return false;
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLightMode(document.documentElement.getAttribute('data-theme') === 'light');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let timer;

    if (!isDeleting && displayText === currentTitle) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      const speed = isDeleting ? 35 : 70;
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? currentTitle.substring(0, displayText.length - 1)
          : currentTitle.substring(0, displayText.length + 1);
        setDisplayText(nextText);
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex]);

  return (
    <section id="hero" className="section" style={{ paddingTop: '8.5rem', paddingBottom: '5rem', minHeight: '92vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Bio & Intro */}
          <div className="reveal-fade-left">
            {/* Status Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div className="section-tag" style={{ margin: 0 }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--accent-emerald)',
                    boxShadow: '0 0 8px var(--accent-emerald)',
                  }}
                />
                Available for Roles
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.9rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem',
                }}
              >
                <MapPin size={14} style={{ color: 'var(--primary-cyan)' }} />
                <span>{personalDetails.location}</span>
              </div>
            </div>

            {/* Main Greeting */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: 900,
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.1,
                marginBottom: '1rem',
              }}
            >
              Hi, I'm <span className="gradient-text">{personalDetails.name}</span>
            </h1>

            {/* Dynamic Typing Subtitle */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
                color: 'var(--primary-cyan)',
                minHeight: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                marginBottom: '1.5rem',
                fontWeight: 600,
              }}
            >
              <span>{displayText}</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '1.2em',
                  background: 'var(--primary-cyan)',
                  borderRadius: '1px',
                  animation: 'cursorBlink 0.8s infinite',
                  flexShrink: 0,
                }}
              />
            </div>

            {/* Objective Paragraph */}
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '1.08rem',
                lineHeight: 1.7,
                marginBottom: '2.2rem',
                maxWidth: '650px',
              }}
            >
              {personalDetails.objective}
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <a href="#projects" className="btn btn-primary">
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
              <a
                href="#about"
                className="btn btn-secondary"
                style={{ borderColor: 'rgba(157, 78, 221, 0.4)', color: 'var(--accent-purple)' }}
              >
                <FileText size={18} />
                <span>View Details</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <span style={{ color: 'var(--text-dim)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'var(--font-mono)' }}>
                Connect:
              </span>
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-main)',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-cyan)';
                  e.currentTarget.style.color = 'var(--primary-cyan)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-main)';
                }}
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-main)',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-cyan)';
                  e.currentTarget.style.color = 'var(--primary-cyan)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-main)';
                }}
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Photo Card */}
          <div className="reveal-fade-right reveal-scale delay-200" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Ambient Back Glow */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '320px',
                height: '320px',
                background: 'radial-gradient(circle, rgba(0, 242, 254, 0.25) 0%, rgba(157, 78, 221, 0.2) 50%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 1,
              }}
            />

            {/* Glass Avatar Container */}
            <div
              className="glass-panel"
              style={{
                position: 'relative',
                zIndex: 2,
                padding: '12px',
                borderRadius: '24px',
                maxWidth: '360px',
                width: '100%',
                background: 'var(--bg-card)',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
              }}
            >
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  aspectRatio: '4/5',
                  background: 'var(--bg-main)',
                }}
              >
                {/* Dark Mode Photo 1 */}
                <img
                  src={photo1}
                  alt={personalDetails.name}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 35%',
                    opacity: isLightMode ? 0 : 1,
                    pointerEvents: isLightMode ? 'none' : 'auto',
                    transition: 'opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s ease',
                    zIndex: 1,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Light Mode Photo 3 */}
                <img
                  src={photo3}
                  alt={personalDetails.name}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 38%',
                    opacity: isLightMode ? 1 : 0,
                    pointerEvents: isLightMode ? 'auto' : 'none',
                    transition: 'opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s ease',
                    zIndex: 2,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Overlaid Gradient */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '35%',
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.45), transparent)',
                    zIndex: 3,
                  }}
                />

                {/* Badge Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    right: '12px',
                    background: 'var(--bg-card)',
                    backdropFilter: 'blur(12px)',
                    padding: '0.65rem 0.9rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    zIndex: 4,
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>MERN & CyberSec</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--primary-cyan)' }}>Sambhram Institute (2022-26)</div>
                  </div>
                  <ShieldCheck size={24} style={{ color: 'var(--accent-emerald)' }} />
                </div>
              </div>

              {/* Floating Accent Badge 1 */}
              <div
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  zIndex: 20,
                  background: 'var(--bg-card)',
                  border: '1px solid var(--primary-cyan)',
                  padding: '0.5rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: 'var(--shadow-card)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <Award size={18} style={{ color: 'var(--accent-gold)' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)' }}>Rank 3 Hackathon</span>
              </div>

              {/* Floating Accent Badge 2 */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '80px',
                  left: '-20px',
                  zIndex: 20,
                  background: 'var(--bg-card)',
                  border: '1px solid var(--accent-purple)',
                  padding: '0.5rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: 'var(--shadow-card)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <Terminal size={18} style={{ color: 'var(--accent-purple)' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)' }}>JWT & REST APIs</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: center;
          }
          .hero-grid > div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
