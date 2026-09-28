import { useState, useEffect } from 'react';
import { personalDetails } from '../data/portfolioData';
import { Menu, X, Code2, Sparkles, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: scrolled ? '0.85rem 0' : '1.25rem 0',
        transition: 'var(--transition)',
        background: scrolled ? (theme === 'dark' ? 'rgba(7, 9, 14, 0.85)' : 'rgba(248, 250, 252, 0.85)') : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '1.25rem',
            color: 'var(--text-main)',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-md)',
              background: 'linear-gradient(135deg, var(--primary-cyan), var(--accent-purple))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 'bold',
              boxShadow: 'var(--shadow-neon)',
            }}
          >
            <Code2 size={22} />
          </div>
          <span>
            Ankit<span style={{ color: 'var(--primary-cyan)' }}>.dev</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="desktop-nav">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              background: 'var(--bg-card)',
              padding: '0.4rem 1.2rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-color)',
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  style={{
                    color: isActive ? 'var(--primary-cyan)' : 'var(--text-muted)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 600 : 500,
                    transition: 'var(--transition)',
                    position: 'relative',
                    padding: '0.2rem 0.4rem',
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: '0',
                        width: '100%',
                        height: '2px',
                        background: 'var(--primary-cyan)',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px var(--primary-cyan)',
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Theme Switcher Toggle Button */}
          <button
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'var(--transition)',
              outline: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--primary-cyan)';
              e.currentTarget.style.transform = 'scale(1.08) rotate(15deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
            }}
          >
            {theme === 'dark' ? (
              <Sun size={20} style={{ color: 'var(--accent-gold)' }} />
            ) : (
              <Moon size={20} style={{ color: 'var(--accent-purple)' }} />
            )}
          </button>

          {/* CV Action */}
          <a
            href={`mailto:${personalDetails.email}?subject=Portfolio%20Inquiry`}
            className="btn btn-secondary"
            style={{ padding: '0.55rem 1.1rem', fontSize: '0.88rem' }}
          >
            <Sparkles size={16} style={{ color: 'var(--primary-cyan)' }} />
            <span>Hire Me</span>
          </a>
        </nav>

        {/* Mobile Actions (Theme Toggle + Mobile Menu Drawer Button) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="mobile-actions">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              display: 'none',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              padding: '0.5rem',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
            }}
            className="mobile-theme-btn"
          >
            {theme === 'dark' ? <Sun size={20} style={{ color: 'var(--accent-gold)' }} /> : <Moon size={20} style={{ color: 'var(--accent-purple)' }} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              padding: '0.5rem',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: theme === 'dark' ? 'rgba(9, 13, 22, 0.98)' : 'rgba(248, 250, 252, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-color)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: activeSection === link.id ? 'var(--primary-cyan)' : 'var(--text-main)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                padding: '0.5rem 0',
                borderBottom: '1px solid var(--border-color)',
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href={`mailto:${personalDetails.email}?subject=Portfolio%20Inquiry`}
            className="btn btn-primary"
            onClick={() => setMobileMenuOpen(false)}
            style={{ marginTop: '0.5rem', width: '100%' }}
          >
            <Sparkles size={18} />
            <span>Hire Me</span>
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 868px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle, .mobile-theme-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
