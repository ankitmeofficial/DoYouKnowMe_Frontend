import { achievementsData } from '../data/portfolioData';
import { Trophy, Award, CheckCircle2, Zap, Star, ShieldCheck } from 'lucide-react';

const Achievements = () => {
  const ach = achievementsData[0];

  return (
    <section id="achievements" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-fade-up">
          <div className="section-tag">
            <Trophy size={14} />
            <span>Honors & Recognitions</span>
          </div>
          <h2 className="section-title">
            Hackathon & <span className="gradient-text-gold">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Demonstrated engineering excellence under competitive time pressure and technical evaluation.
          </p>
        </div>

        {/* Achievement Spotlight Card */}
        <div className="reveal-scale delay-100" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div
            className="glass-panel"
            style={{
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(255, 183, 3, 0.3)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Background Glow */}
            <div
              style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(255, 183, 3, 0.15) 0%, transparent 70%)',
                filter: 'blur(30px)',
              }}
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '2rem',
                alignItems: 'flex-start',
              }}
              className="achievement-grid"
            >
              {/* Trophy Badge Node */}
              <div
                style={{
                  width: '85px',
                  height: '85px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'linear-gradient(135deg, #ffb703, #f77f00)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000000',
                  boxShadow: '0 0 30px rgba(255, 183, 3, 0.4)',
                }}
              >
                <Trophy size={46} />
              </div>

              {/* Text & Points */}
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '0.75rem' }}>
                  <span className="badge badge-gold">
                    <Star size={12} fill="#ffb703" /> National Hackathon Winner
                  </span>
                  <span className="badge badge-cyan">{ach.organization} • {ach.year}</span>
                  <span className="badge badge-purple">{ach.competitors}</span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.6rem',
                    fontWeight: 800,
                    color: 'var(--text-main)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {ach.title}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '1.25rem' }}>
                  {ach.details.map((detail, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--accent-emerald)', marginTop: '2px', flexShrink: 0 }} />
                      <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 650px) {
          .achievement-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            justify-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Achievements;
