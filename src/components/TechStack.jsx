import { useState } from 'react';
import { techStackData } from '../data/portfolioData';
import {
  Code2, FileCode2, Terminal, Atom, Cpu, Layout, Palette, Wind, Boxes,
  Server, Route, Globe, ShieldCheck, Database, Zap, GitFork, TrendingUp,
  GitBranch, Send, ArrowLeftRight, CloudUpload, Lock, Sparkles, Layers, Search,
  Smartphone, QrCode
} from 'lucide-react';

const iconMap = {
  Code2, FileCode2, Terminal, Atom, Cpu, Layout, Palette, Wind, Boxes,
  Server, Route, Globe, ShieldCheck, Database, Zap, GitFork, TrendingUp,
  GitBranch, Send, ArrowLeftRight, CloudUpload, Lock, Sparkles, Smartphone, QrCode
};

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...techStackData.map((cat) => cat.category)];

  // Flatten and filter skills
  const allSkills = techStackData.flatMap((cat) =>
    cat.skills.map((skill) => ({ ...skill, category: cat.category }))
  );

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-fade-up">
          <div className="section-tag">
            <Layers size={14} />
            <span>Tech Arsenal</span>
          </div>
          <h2 className="section-title">
            Technologies & <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive breakdown of my technical stack across client-side UI, server architecture, database tuning, and DevOps tooling.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div
          className="reveal-fade-up delay-100"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            marginBottom: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Category Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.6rem',
              justifyContent: 'center',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="badge-shake"
                style={{
                  padding: '0.5rem 1.1rem',
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

          {/* Search Box */}
          <div
            style={{
              position: 'relative',
              maxWidth: '380px',
              width: '100%',
            }}
          >
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
              }}
            />
            <input
              type="text"
              placeholder="Search skill (e.g. React, JWT, Mongo)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 1rem 0.65rem 2.6rem',
                borderRadius: 'var(--radius-full)',
                background: 'var(--input-bg)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'var(--transition)',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--primary-cyan)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid-3">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            const delayClass = `delay-${((index % 3) + 1) * 100}`;
            return (
              <div
                key={index}
                className={`glass-panel tech-card-hover reveal-fade-up ${delayClass}`}
                style={{
                  padding: '1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Header info */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div
                      className="tech-icon-box"
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(0, 242, 254, 0.1)',
                        border: '1px solid rgba(0, 242, 254, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary-cyan)',
                        transition: 'var(--transition)',
                      }}
                    >
                      <IconComponent size={22} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        {skill.name}
                      </h4>
                      <span className="badge badge-purple badge-shake" style={{ marginTop: '0.2rem' }}>
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: 'var(--primary-cyan)',
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {skill.description}
                </p>

                {/* Level Progress Bar */}
                <div
                  style={{
                    width: '100%',
                    height: '6px',
                    borderRadius: '3px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, var(--primary-cyan), var(--accent-emerald))',
                      borderRadius: '3px',
                      boxShadow: '0 0 10px var(--primary-cyan)',
                      transition: 'width 1s ease-in-out',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)' }}>
            No skills found matching "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
};

export default TechStack;
