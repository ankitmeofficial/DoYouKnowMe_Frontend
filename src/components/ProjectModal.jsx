import { X, ExternalLink, CheckCircle2, Zap, Cpu, Smartphone, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const isMobileApp = project.id === 'scanpickup';

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        background: 'rgba(7, 9, 14, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem',
          position: 'relative',
          border: '1px solid var(--primary-cyan)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
          background: 'var(--bg-card)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-main)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'var(--transition)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--primary-cyan)')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-color)')}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
            <span className="badge badge-cyan">{project.badge}</span>
            <span className="badge badge-purple">{project.category}</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.8rem',
              fontWeight: 800,
              color: 'var(--text-main)',
              marginBottom: '0.3rem',
            }}
          >
            {project.title}
          </h2>
          <p style={{ color: 'var(--primary-cyan)', fontWeight: 600, fontSize: '1rem' }}>
            {project.subtitle} • {project.period}
          </p>
        </div>

        {/* Metrics Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            marginBottom: '1.75rem',
          }}
        >
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(0, 242, 254, 0.06)',
                border: '1px solid rgba(0, 242, 254, 0.2)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 900,
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--accent-emerald)',
                }}
              >
                {m.val}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '2px' }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Full Overview */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4
            style={{
              fontSize: '1.1rem',
              fontWeight: 700,
              color: 'var(--text-main)',
              marginBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Cpu size={18} style={{ color: 'var(--primary-cyan)' }} />
            Architectural Overview
          </h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.7 }}>
            {project.fullDescription || project.description}
          </p>
        </div>

        {/* Highlights */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4
            style={{
              fontSize: '1.1rem',
              fontWeight: 700,
              color: 'var(--text-main)',
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Zap size={18} style={{ color: 'var(--accent-gold)' }} />
            Key Features & Engineering Highlights
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {project.highlights.map((h, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)', marginTop: '3px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Badges */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '0.9rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.6rem', fontFamily: 'var(--font-mono)' }}>
            Technologies Used
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.tech.map((t, idx) => (
              <span key={idx} className="badge badge-purple">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {project.github && (
            <a
              href={project.github}
              target={project.github === '#' ? '_self' : '_blank'}
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ flex: 1, minWidth: '160px' }}
              onClick={(e) => {
                if (project.github === '#') e.preventDefault();
              }}
            >
              <Github size={18} />
              <span>View Source Code</span>
            </a>
          )}

          {(project.liveUrl || project.appUrl) && (
            <a
              href={project.appUrl || project.liveUrl}
              target={(project.appUrl === '#' || project.liveUrl === '#') ? '_self' : '_blank'}
              rel="noreferrer"
              className="btn btn-primary"
              style={{ flex: 1, minWidth: '160px' }}
              onClick={(e) => {
                if (
                  (project.appUrl === '#' || !project.appUrl) &&
                  (project.liveUrl === '#' || !project.liveUrl)
                ) {
                  e.preventDefault();
                }
              }}
            >
              {isMobileApp ? <Smartphone size={18} /> : <ExternalLink size={18} />}
              <span>{isMobileApp ? 'App Demo / APK' : 'Live Demo'}</span>
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
