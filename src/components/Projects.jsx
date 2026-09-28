import { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import {
  FolderGit2, ArrowUpRight, Sparkles, Zap, CheckCircle2,
  Smartphone, QrCode, Trophy, ExternalLink, Filter
} from 'lucide-react';
import { Github } from './Icons';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  // Categories list derived from project data
  const categories = ['All', ...new Set(projectsData.map((p) => p.category))];

  const filteredProjects = projectsData.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-fade-up">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world full-stack web and mobile applications built with React Native, Supabase, MERN architecture, and high-performance workflows.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          className="reveal-fade-up delay-100"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--text-dim)',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)',
              marginRight: '0.5rem',
            }}
          >
            <Filter size={14} />
            <span>Filter:</span>
          </div>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="badge-shake"
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid',
                borderColor: activeCategory === cat ? 'var(--primary-cyan)' : 'var(--border-color)',
                background: activeCategory === cat ? 'rgba(0, 242, 254, 0.15)' : 'var(--bg-card)',
                color: activeCategory === cat ? 'var(--primary-cyan)' : 'var(--text-main)',
                fontSize: '0.88rem',
                fontWeight: activeCategory === cat ? 600 : 500,
                cursor: 'pointer',
                transition: 'var(--transition)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredProjects.map((project, pIdx) => {
            const animClass = pIdx % 2 === 0 ? 'reveal-fade-left' : 'reveal-fade-right';
            const isMobileApp = project.id === 'scanpickup';

            return (
              <div
                key={project.id}
                className={`glass-panel ${animClass}`}
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  border: '1px solid var(--border-color)',
                  transition: 'var(--transition)',
                  overflow: 'hidden',
                }}
              >
                <div>
                  {/* Top Badge & Date */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <span className="badge badge-cyan">{project.badge}</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.82rem',
                        color: 'var(--text-dim)',
                      }}
                    >
                      {project.period}
                    </span>
                  </div>

                  {/* Dedicated Preview Graphic Area */}
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      marginBottom: '1.25rem',
                      padding: '1.25rem 1rem',
                      background: isMobileApp
                        ? 'linear-gradient(135deg, rgba(0, 242, 254, 0.1) 0%, rgba(157, 78, 221, 0.12) 100%)'
                        : project.id === 'campusfolio'
                        ? 'linear-gradient(135deg, rgba(0, 242, 254, 0.08) 0%, rgba(79, 172, 254, 0.1) 100%)'
                        : 'linear-gradient(135deg, rgba(255, 183, 3, 0.08) 0%, rgba(157, 78, 221, 0.1) 100%)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '140px',
                    }}
                  >
                    {/* Ambient Glow */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '120px',
                        height: '120px',
                        background: isMobileApp
                          ? 'radial-gradient(circle, rgba(0, 242, 254, 0.3) 0%, transparent 70%)'
                          : 'radial-gradient(circle, rgba(157, 78, 221, 0.25) 0%, transparent 70%)',
                        filter: 'blur(20px)',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Preview Graphic Elements */}
                    <div
                      style={{
                        position: 'relative',
                        zIndex: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.6rem',
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '14px',
                          background: 'var(--bg-card)',
                          border: isMobileApp
                            ? '1.5px solid var(--primary-cyan)'
                            : '1.5px solid var(--accent-purple)',
                          boxShadow: isMobileApp ? '0 0 15px rgba(0, 242, 254, 0.3)' : '0 0 15px rgba(157, 78, 221, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: isMobileApp ? 'var(--primary-cyan)' : 'var(--accent-purple)',
                        }}
                      >
                        {isMobileApp ? (
                          <QrCode size={28} />
                        ) : project.id === 'campusfolio' ? (
                          <FolderGit2 size={26} />
                        ) : (
                          <Trophy size={26} style={{ color: 'var(--accent-gold)' }} />
                        )}
                      </div>

                      <div>
                        <div
                          style={{
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            color: 'var(--text-main)',
                            letterSpacing: '0.5px',
                          }}
                        >
                          {isMobileApp ? 'Mobile App Preview' : 'Platform Architecture'}
                        </div>
                        <div
                          style={{
                            fontSize: '0.74rem',
                            fontFamily: 'var(--font-mono)',
                            color: isMobileApp ? 'var(--primary-cyan)' : 'var(--text-muted)',
                            marginTop: '2px',
                          }}
                        >
                          {isMobileApp
                            ? 'com.scanpickup.app • Android Native'
                            : project.subtitle}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.45rem',
                      fontWeight: 800,
                      color: 'var(--text-main)',
                      marginBottom: '0.3rem',
                    }}
                  >
                    {project.title}
                  </h3>
                  <div
                    style={{
                      color: 'var(--primary-cyan)',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      marginBottom: '0.85rem',
                    }}
                  >
                    {project.subtitle}
                  </div>

                  {/* Short Description */}
                  <p
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.92rem',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Feature Highlights List */}
                  {project.featureHighlights && (
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                        gap: '0.45rem 0.75rem',
                        marginBottom: '1.25rem',
                        background: 'rgba(255, 255, 255, 0.02)',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-color)',
                      }}
                    >
                      {project.featureHighlights.map((feat, fIdx) => (
                        <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                          <CheckCircle2 size={14} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-main)', fontWeight: 500 }}>
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Metrics Highlight Pills */}
                  <div
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      marginBottom: '1.25rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    {project.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: 'var(--radius-md)',
                          padding: '0.4rem 0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                        }}
                      >
                        <Zap size={13} style={{ color: 'var(--accent-gold)' }} />
                        <div>
                          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>
                            {m.val}
                          </span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '0.3rem' }}>
                            {m.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.75rem' }}>
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="badge badge-purple">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions Bar with 3 Buttons */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    flexWrap: 'wrap',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--border-color)',
                  }}
                >
                  {/* Button 1: View Project / Details */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-secondary"
                    style={{ padding: '0.55rem 0.9rem', fontSize: '0.85rem', flex: 1 }}
                  >
                    <Sparkles size={15} style={{ color: 'var(--primary-cyan)' }} />
                    <span>View Project</span>
                  </button>

                  {/* Button 2: GitHub */}
                  {project.github && (
                    <a
                      href={project.github}
                      target={project.github === '#' ? '_self' : '_blank'}
                      rel="noreferrer"
                      className="btn btn-secondary"
                      style={{ padding: '0.55rem 0.9rem', fontSize: '0.85rem' }}
                      onClick={(e) => {
                        if (project.github === '#') {
                          e.preventDefault();
                          setSelectedProject(project);
                        }
                      }}
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  )}

                  {/* Button 3: Live Demo / App */}
                  {(project.liveUrl || project.appUrl) && (
                    <a
                      href={project.appUrl || project.liveUrl}
                      target={
                        (project.appUrl === '#' || project.liveUrl === '#') ? '_self' : '_blank'
                      }
                      rel="noreferrer"
                      className="btn btn-secondary"
                      style={{
                        padding: '0.55rem 0.9rem',
                        fontSize: '0.85rem',
                        borderColor: 'rgba(0, 242, 254, 0.3)',
                        color: 'var(--primary-cyan)',
                      }}
                      onClick={(e) => {
                        if (
                          (project.appUrl === '#' || !project.appUrl) &&
                          (project.liveUrl === '#' || !project.liveUrl)
                        ) {
                          e.preventDefault();
                          setSelectedProject(project);
                        }
                      }}
                    >
                      {isMobileApp ? <Smartphone size={15} /> : <ExternalLink size={15} />}
                      <span>{isMobileApp ? 'App Demo' : 'Live Demo'}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal display */}
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    </section>
  );
};

export default Projects;
