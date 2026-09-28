import { extracurricularData } from '../data/portfolioData';
import { HeartHandshake, Users, ShieldAlert } from 'lucide-react';

const Extracurricular = () => {
  return (
    <section id="community" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-fade-up">
          <div className="section-tag">
            <HeartHandshake size={14} />
            <span>Social Impact</span>
          </div>
          <h2 className="section-title">
            Leadership & <span className="gradient-text-emerald">Community Service</span>
          </h2>
          <p className="section-subtitle">
            Extracurricular contributions promoting digital literacy, telecom security awareness, and grassroots community development.
          </p>
        </div>

        <div className="grid-2">
          {extracurricularData.map((item, idx) => {
            const animClass = idx % 2 === 0 ? 'reveal-fade-left' : 'reveal-fade-right';
            return (
              <div
                key={idx}
                className={`glass-panel ${animClass}`}
                style={{
                  padding: '2rem',
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                  border: '1px solid rgba(0, 245, 160, 0.2)',
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(0, 245, 160, 0.12)',
                    border: '1px solid rgba(0, 245, 160, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-emerald)',
                    flexShrink: 0,
                  }}
                >
                  {idx === 0 ? <ShieldAlert size={28} /> : <Users size={28} />}
                </div>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span className="badge badge-emerald">{item.role}</span>
                    <span className="badge badge-purple">{item.period}</span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: 'var(--text-main)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
