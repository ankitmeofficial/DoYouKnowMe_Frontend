import { useState } from 'react';
import { personalDetails } from '../data/portfolioData';
import { sendContactMessage } from '../utils/api';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields (Name, Email, Message).' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await sendContactMessage(formData);
      setLoading(false);
      setStatus({ type: 'success', message: response.message || 'Message sent successfully! I will reply soon.' });
      
      // Trigger confetti celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f2fe', '#9d4edd', '#00f5a0'],
      });

      // Clear form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setLoading(false);
      setStatus({ type: 'error', message: err.message || 'Failed to send message. Please try again.' });
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-fade-up">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="section-subtitle">
            Whether you have a full-stack engineering position, project collaboration, or cybersecurity initiative, my inbox is always open.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.85fr 1.15fr',
            gap: '3rem',
            alignItems: 'flex-start',
          }}
          className="contact-grid"
        >
          {/* Contact Details Cards */}
          <div className="reveal-fade-left" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Email Card */}
            <a
              href={`mailto:${personalDetails.email}`}
              className="glass-panel"
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                textDecoration: 'none',
                color: 'var(--text-main)',
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(0, 242, 254, 0.1)',
                  border: '1px solid rgba(0, 242, 254, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary-cyan)',
                  flexShrink: 0,
                }}
              >
                <Mail size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  Email Address
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, marginTop: '0.1rem' }}>
                  {personalDetails.email}
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${personalDetails.phone}`}
              className="glass-panel"
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                textDecoration: 'none',
                color: 'var(--text-main)',
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(0, 245, 160, 0.1)',
                  border: '1px solid rgba(0, 245, 160, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-emerald)',
                  flexShrink: 0,
                }}
              >
                <Phone size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  Phone / WhatsApp
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, marginTop: '0.1rem' }}>
                  {personalDetails.phone}
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div
              className="glass-panel"
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(157, 78, 221, 0.1)',
                  border: '1px solid rgba(157, 78, 221, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-purple)',
                  flexShrink: 0,
                }}
              >
                <MapPin size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  Current Location
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, marginTop: '0.1rem' }}>
                  {personalDetails.location}
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div
              className="glass-panel"
              style={{
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                Professional Networks
              </span>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '0.5rem 0.85rem' }}
                >
                  <Linkedin size={18} style={{ color: 'var(--primary-cyan)' }} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '0.5rem 0.85rem' }}
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form Card */}
          <div
            className="glass-panel reveal-fade-right delay-200"
            style={{
              padding: '2.5rem',
              border: '1px solid var(--border-glow)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 800,
                color: 'var(--text-main)',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <Sparkles size={20} style={{ color: 'var(--primary-cyan)' }} />
              Send a Direct Message
            </h3>

            {/* Status Alert Banner */}
            {status.message && (
              <div
                style={{
                  padding: '0.85rem 1.1rem',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontSize: '0.92rem',
                  background: status.type === 'success' ? 'rgba(0, 245, 160, 0.12)' : 'rgba(247, 37, 133, 0.12)',
                  border: status.type === 'success' ? '1px solid rgba(0, 245, 160, 0.3)' : '1px solid rgba(247, 37, 133, 0.3)',
                  color: status.type === 'success' ? 'var(--accent-emerald)' : '#ff4d6d',
                }}
              >
                {status.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-row">
                {/* Name */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--text-muted)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--input-bg)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'var(--transition)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--primary-cyan)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--text-muted)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--input-bg)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'var(--transition)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--primary-cyan)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    marginBottom: '0.4rem',
                  }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Full Stack Engineering Opportunity / Project Discussion"
                  value={formData.subject}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--input-bg)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'var(--transition)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--primary-cyan)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    marginBottom: '0.4rem',
                  }}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your team, project requirements, or opportunity details..."
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--input-bg)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'var(--font-body)',
                    transition: 'var(--transition)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--primary-cyan)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
                style={{ width: '100%', padding: '0.95rem' }}
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
