import { useState, useEffect } from 'react';
import photo2 from '../assets/Photo 2.png';
import photo4 from '../assets/Photo 4.png';
import { personalDetails, educationData } from '../data/portfolioData';
import { ShieldCheck, Cpu, Zap, Award, GraduationCap, CheckCircle2 } from 'lucide-react';

const About = () => {
  const edu = educationData[0];
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

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-fade-up">
          <div className="section-tag">
            <Cpu size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Architecting <span className="gradient-text">Secure & Scalable</span> Web Solutions
          </h2>
          <p className="section-subtitle">
            Bridging robust full-stack engineering with cybersecurity fundamentals to deliver high-impact applications.
          </p>
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.85fr 1.15fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Photo Card */}
          <div className="reveal-fade-left reveal-scale" style={{ position: 'relative' }}>
            <div className="animated-border-card">
              <div className="glass-panel animated-border-card-inner">
                <div
                  style={{
                    borderRadius: '14px',
                    overflow: 'hidden',
                    position: 'relative',
                    aspectRatio: '4/5',
                    background: 'var(--bg-main)',
                  }}
                >
                  {/* Dark Mode Photo 2 */}
                  <img
                    src={photo2}
                    alt="Ankit Kumar Singh Profile"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                      opacity: isLightMode ? 0 : 1,
                      pointerEvents: isLightMode ? 'none' : 'auto',
                      transition: 'opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s ease',
                      zIndex: 1,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Light Mode Photo 4 */}
                  <img
                    src={photo4}
                    alt="Ankit Kumar Singh Profile"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                      opacity: isLightMode ? 1 : 0,
                      pointerEvents: isLightMode ? 'auto' : 'none',
                      transition: 'opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s ease',
                      zIndex: 2,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.45) 0%, transparent 60%)',
                      zIndex: 3,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '16px',
                      right: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      background: 'var(--bg-card)',
                      backdropFilter: 'blur(10px)',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-color)',
                      zIndex: 4,
                    }}
                  >
                    <GraduationCap size={28} style={{ color: 'var(--primary-cyan)', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>{edu.degree}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{edu.institution}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content & Stats */}
          <div className="reveal-fade-right delay-200">
            <h3
              style={{
                fontSize: '1.8rem',
                fontWeight: 800,
                fontFamily: 'var(--font-heading)',
                marginBottom: '1rem',
                color: 'var(--text-main)',
              }}
            >
              Driven Full-Stack Engineer with a Passion for Performance & Security
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              I specialize in building end-to-end web applications with **React.js, Node.js, Express, and MongoDB**. My focus is on writing clean, modular component trees and engineering secure REST API pipelines backed by token authorization and database index optimization.
            </p>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Currently pursuing my **B.E. in CSE (Cyber Security)** at Sambhram Institute of Technology, Bangalore, I bring an analytical approach to web security, authorization models, and API resilience.
            </p>

            {/* Quick Highlights List */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
              {[
                'JWT Token Auth & Refresh Flow',
                'React Memoization & Speed Optimization',
                'Modular Clean Architecture',
                'MongoDB Index & Schema Design',
                'RESTful Routing & Middleware',
                'Community Leadership & NSS',
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
              {personalDetails.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      color: idx % 2 === 0 ? 'var(--primary-cyan)' : 'var(--accent-emerald)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>{stat.label}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
