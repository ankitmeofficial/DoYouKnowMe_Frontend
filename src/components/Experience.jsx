import { useState } from 'react';
import { journeyData, experienceData, educationData } from '../data/portfolioData';
import {
  GraduationCap, Briefcase, Trophy, HeartHandshake, FolderGit2, ShieldAlert,
  Calendar, MapPin, CheckCircle, Building2, Sparkles, Milestone, ArrowRight,
  Smartphone, QrCode
} from 'lucide-react';

const iconMap = {
  GraduationCap,
  Briefcase,
  Trophy,
  HeartHandshake,
  FolderGit2,
  ShieldAlert,
  Smartphone,
  QrCode,
};

const Experience = () => {
  const [viewMode, setViewMode] = useState('journey'); // 'journey' | 'work'

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-fade-up">
          <div className="section-tag">
            <Milestone size={14} />
            <span>Full Career Roadmap</span>
          </div>
          <h2 className="section-title">
            My <span className="gradient-text">Engineering Journey</span>
          </h2>
          <p className="section-subtitle">
            A chronological timeline of my evolution — from enrolling in B.E Cyber Security to building MERN applications, winning national hackathons, and leading digital community drives.
          </p>
        </div>

        {/* View Switcher Controls */}
        <div
          className="reveal-fade-up delay-100"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3.5rem',
          }}
        >
          <button
            onClick={() => setViewMode('journey')}
            style={{
              padding: '0.65rem 1.4rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid',
              borderColor: viewMode === 'journey' ? 'var(--primary-cyan)' : 'var(--border-color)',
              background: viewMode === 'journey' ? 'rgba(0, 242, 254, 0.15)' : 'var(--bg-card)',
              color: viewMode === 'journey' ? 'var(--primary-cyan)' : 'var(--text-main)',
              fontSize: '0.92rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'var(--transition)',
            }}
          >
            <Sparkles size={16} />
            <span>Full Step-by-Step Journey</span>
          </button>

          <button
            onClick={() => setViewMode('work')}
            style={{
              padding: '0.65rem 1.4rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid',
              borderColor: viewMode === 'work' ? 'var(--primary-cyan)' : 'var(--border-color)',
              background: viewMode === 'work' ? 'rgba(0, 242, 254, 0.15)' : 'var(--bg-card)',
              color: viewMode === 'work' ? 'var(--primary-cyan)' : 'var(--text-main)',
              fontSize: '0.92rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'var(--transition)',
            }}
          >
            <Briefcase size={16} />
            <span>Work & Education Summary</span>
          </button>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '920px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Glowing Line */}
          <div
            style={{
              position: 'absolute',
              top: '25px',
              bottom: '25px',
              left: '26px',
              width: '3px',
              background: 'linear-gradient(to bottom, var(--primary-cyan), var(--accent-purple), var(--accent-gold), var(--accent-emerald))',
              borderRadius: '3px',
              boxShadow: '0 0 10px rgba(0, 242, 254, 0.3)',
              zIndex: 0,
            }}
            className="timeline-vertical-line"
          />

          {/* VIEW MODE 1: CHRONOLOGICAL STEP-BY-STEP JOURNEY */}
          {viewMode === 'journey' &&
            journeyData.map((step, idx) => {
              const IconComponent = iconMap[step.icon] || Milestone;
              const stepNumber = String(idx + 1).padStart(2, '0');

              const animClass = idx % 2 === 0 ? 'reveal-fade-left' : 'reveal-fade-right';

              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: '2rem',
                    marginBottom: '3rem',
                    position: 'relative',
                    zIndex: 2,
                  }}
                  className={`timeline-node-item ${animClass}`}
                >
                  {/* Glowing Icon Node */}
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '50%',
                      background: 'var(--node-bg)',
                      border: `2px solid ${step.color}`,
                      boxShadow: `0 0 20px ${step.color}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: step.color,
                      flexShrink: 0,
                      zIndex: 10,
                      position: 'relative',
                      fontWeight: 800,
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    <IconComponent size={24} />
                  </div>

                  {/* Glass Content Card */}
                  <div
                    className="glass-panel"
                    style={{
                      flex: 1,
                      padding: '1.75rem',
                      border: `1px solid rgba(255, 255, 255, 0.08)`,
                      position: 'relative',
                    }}
                  >
                    {/* Top Header Row */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.75rem',
                        marginBottom: '0.85rem',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.85rem',
                            fontWeight: 800,
                            color: step.color,
                            background: 'rgba(255,255,255,0.05)',
                            padding: '0.2rem 0.6rem',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--border-color)',
                          }}
                        >
                          Step {stepNumber}
                        </span>
                        <span className="badge badge-purple">{step.category}</span>
                        <span className="badge badge-cyan">{step.badge}</span>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.85rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-muted)',
                        }}
                      >
                        <Calendar size={14} style={{ color: step.color }} />
                        <span>{step.period}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.45rem',
                        fontWeight: 800,
                        color: 'var(--text-main)',
                        marginBottom: '0.3rem',
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Organization & Location */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '1rem',
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        color: 'var(--primary-cyan)',
                        marginBottom: '1rem',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Building2 size={16} />
                        <span>{step.organization}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)' }}>
                        <MapPin size={14} style={{ color: 'var(--accent-emerald)' }} />
                        <span>{step.location}</span>
                      </div>
                    </div>

                    {/* Description Paragraph */}
                    <p
                      style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.96rem',
                        lineHeight: 1.6,
                        marginBottom: '1.25rem',
                      }}
                    >
                      {step.description}
                    </p>

                    {/* Highlights Bullet List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
                      {step.highlights.map((h, hIdx) => (
                        <div key={hIdx} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                          <CheckCircle size={16} style={{ color: 'var(--accent-emerald)', marginTop: '3px', flexShrink: 0 }} />
                          <span style={{ fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Skill Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                      {step.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="badge badge-emerald">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

          {/* VIEW MODE 2: WORK EXPERIENCE & EDUCATION SUMMARY */}
          {viewMode === 'work' && (
            <>
              {/* Work Experience */}
              {experienceData.map((exp, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: '2rem',
                    marginBottom: '3rem',
                    position: 'relative',
                    zIndex: 2,
                  }}
                  className="timeline-node-item"
                >
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '50%',
                      background: 'var(--node-bg)',
                      border: '2px solid var(--primary-cyan)',
                      boxShadow: '0 0 20px rgba(0, 242, 254, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary-cyan)',
                      flexShrink: 0,
                      zIndex: 10,
                      position: 'relative',
                    }}
                  >
                    <Briefcase size={24} />
                  </div>

                  <div
                    className="glass-panel"
                    style={{
                      flex: 1,
                      padding: '1.75rem',
                      border: '1px solid rgba(0, 242, 254, 0.25)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.75rem',
                        marginBottom: '0.75rem',
                      }}
                    >
                      <div>
                        <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)' }}>
                          {exp.role}
                        </h3>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: 'var(--primary-cyan)',
                            marginTop: '0.2rem',
                          }}
                        >
                          <Building2 size={16} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <span className="badge badge-cyan">{exp.type}</span>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1.25rem',
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                        marginBottom: '1.25rem',
                        paddingBottom: '0.75rem',
                        borderBottom: '1px solid var(--border-color)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Calendar size={14} style={{ color: 'var(--accent-purple)' }} />
                        <span>{exp.period}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <MapPin size={14} style={{ color: 'var(--accent-emerald)' }} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                      {exp.points.map((pt, pIdx) => (
                        <div key={pIdx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                          <CheckCircle size={16} style={{ color: 'var(--accent-emerald)', marginTop: '3px', flexShrink: 0 }} />
                          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{pt}</p>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {exp.tech.map((t, tIdx) => (
                        <span key={tIdx} className="badge badge-purple">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Education */}
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: '2rem',
                    position: 'relative',
                    zIndex: 2,
                  }}
                  className="timeline-node-item"
                >
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '50%',
                      background: 'var(--node-bg)',
                      border: '2px solid var(--accent-purple)',
                      boxShadow: '0 0 20px rgba(157, 78, 221, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-purple)',
                      flexShrink: 0,
                      zIndex: 10,
                      position: 'relative',
                    }}
                  >
                    <GraduationCap size={26} />
                  </div>

                  <div
                    className="glass-panel"
                    style={{
                      flex: 1,
                      padding: '1.75rem',
                      border: '1px solid rgba(157, 78, 221, 0.25)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.75rem',
                        marginBottom: '0.75rem',
                      }}
                    >
                      <div>
                        <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)' }}>
                          {edu.degree}
                        </h3>
                        <div
                          style={{
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: 'var(--accent-purple)',
                            marginTop: '0.2rem',
                          }}
                        >
                          {edu.institution}
                        </div>
                      </div>
                      <span className="badge badge-purple">{edu.period}</span>
                    </div>

                    <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      Focus: {edu.focus}
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-node-item {
            gap: 1rem !important;
          }
          .timeline-vertical-line {
            left: 18px !important;
          }
          .timeline-node-item > div:first-child {
            width: 38px !important;
            height: 38px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
