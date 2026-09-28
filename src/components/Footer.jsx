import { personalDetails } from '../data/portfolioData';
import { ArrowUp, Code2, Heart, Mail, ShieldCheck } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-main)',
        borderTop: '1px solid var(--border-color)',
        padding: '3.5rem 0 2rem 0',
        position: 'relative',
        zIndex: 10,
        transition: 'var(--transition)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            marginBottom: '2.5rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid var(--border-color)',
          }}
        >
          {/* Brand Info */}
          <div>
            <a
              href="#hero"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                textDecoration: 'none',
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '1.4rem',
                color: 'var(--text-main)',
                marginBottom: '0.5rem',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-md)',
                  background: 'linear-gradient(135deg, var(--primary-cyan), var(--accent-purple))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#040810',
                }}
              >
                <Code2 size={20} />
              </div>
              <span>
                {personalDetails.name}<span style={{ color: 'var(--primary-cyan)' }}>.dev</span>
              </span>
            </a>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Full Stack Developer • MERN Architecture • Cyber Security Enthusiast
            </p>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--bg-card)',
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
              <Linkedin size={18} />
            </a>
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--bg-card)',
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
              <Github size={18} />
            </a>
            <a
              href={`mailto:${personalDetails.email}`}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--bg-card)',
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
              <Mail size={18} />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              title="Back to Top"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--primary-cyan)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#040810',
                cursor: 'pointer',
                boxShadow: '0 0 15px rgba(0, 242, 254, 0.4)',
                transition: 'var(--transition)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-dim)',
          }}
        >
          <div>
            © {new Date().getFullYear()} {personalDetails.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <span>Crafted with</span>
            <Heart size={14} style={{ color: '#f72585', fill: '#f72585' }} />
            <span>using React 19 & Express MERN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
