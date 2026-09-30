import { useState, useEffect, useRef } from 'react';

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING CORE ENGINE...');
  const [isExiting, setIsExiting] = useState(false);
  const canvasRef = useRef(null);

  // Status message phases
  useEffect(() => {
    if (progress < 30) {
      setStatusText('INITIALIZING CORE ENGINE...');
    } else if (progress < 60) {
      setStatusText('LOADING MERN ARCHITECTURE...');
    } else if (progress < 90) {
      setStatusText('DECRYPTING CYBER SECURITY MODULES...');
    } else {
      setStatusText('SYSTEM OPTIMIZED. WELCOME!');
    }
  }, [progress]);

  // Particle background for loading screen
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2 + 1,
      vy: -(Math.random() * 0.8 + 0.3),
      alpha: Math.random() * 0.7 + 0.2,
      color: Math.random() > 0.5 ? '#00f2fe' : '#9d4edd',
    }));

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.y += p.vy;
        if (p.y < 0) p.y = h;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExiting(true), 250);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 950);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12 + 6);
      });
    }, 75);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#05070c',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transform: isExiting ? 'translateY(-100%)' : 'translateY(0%)',
        transition: 'transform 0.9s cubic-bezier(0.77, 0, 0.175, 1)',
        pointerEvents: isExiting ? 'none' : 'auto',
        overflow: 'hidden',
      }}
    >
      {/* Background Particle Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Cyber Grid Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(0, 242, 254, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 242, 254, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          pointerEvents: 'none',
        }}
      />

      {/* Ambient Pulsing Back Glow */}
      <div
        style={{
          position: 'absolute',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.22) 0%, rgba(157, 78, 221, 0.18) 45%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'pulseGlow 2.5s infinite ease-in-out',
        }}
      />

      {/* Futuristic Multi-Ring Monogram Hub */}
      <div
        style={{
          position: 'relative',
          width: '180px',
          height: '180px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2.5rem',
        }}
      >
        {/* Outer Ring 1 (Clockwise Spin with Glowing Nodes) */}
        <svg
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            animation: 'spinClockwise 4s linear infinite',
          }}
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="47"
            fill="none"
            stroke="rgba(255, 255, 255, 0.06)"
            strokeWidth="2"
          />
          <circle
            cx="50"
            cy="50"
            r="47"
            fill="none"
            stroke="url(#ringGradient1)"
            strokeWidth="3"
            strokeDasharray="140 150"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="ringGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f2fe" />
              <stop offset="100%" stopColor="#9d4edd" />
            </linearGradient>
          </defs>
        </svg>

        {/* Middle Ring 2 (Counter Clockwise) */}
        <svg
          style={{
            position: 'absolute',
            width: '82%',
            height: '82%',
            animation: 'spinCounter 2.8s linear infinite',
          }}
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="url(#ringGradient2)"
            strokeWidth="2.5"
            strokeDasharray="90 180"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="ringGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f5a0" />
              <stop offset="100%" stopColor="#00f2fe" />
            </linearGradient>
          </defs>
        </svg>

        {/* Inner Radar Sweeper */}
        <div
          style={{
            position: 'absolute',
            width: '65%',
            height: '65%',
            borderRadius: '50%',
            border: '1px dashed rgba(0, 242, 254, 0.3)',
            animation: 'spinClockwise 2s linear infinite',
          }}
        />

        {/* Glowing Capital "A" Monogram */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            className="monogram-a-text"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '4.8rem',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #ffffff 0%, #00f2fe 40%, #9d4edd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 20px rgba(0, 242, 254, 0.75))',
              letterSpacing: '-3px',
              userSelect: 'none',
            }}
          >
            A
          </span>
        </div>
      </div>

      {/* Cyberpunk Status Panel */}
      <div style={{ textAlign: 'center', zIndex: 3, width: '100%', maxWidth: '360px', padding: '0 1rem' }}>
        {/* Brand */}
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.4rem',
            fontWeight: 900,
            letterSpacing: '4px',
            color: '#ffffff',
            marginBottom: '0.4rem',
          }}
        >
          DOYOUKNOWME<span style={{ color: 'var(--primary-cyan)' }}>.ONLINE</span>
        </h2>

        {/* Status Line */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--primary-cyan)',
            letterSpacing: '1px',
            marginBottom: '1rem',
            minHeight: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--accent-emerald)',
              boxShadow: '0 0 8px var(--accent-emerald)',
              animation: 'pulseGlow 1s infinite',
            }}
          />
          <span>{statusText}</span>
        </div>

        {/* Neon Progress Bar */}
        <div
          style={{
            width: '100%',
            height: '5px',
            background: 'rgba(255, 255, 255, 0.06)',
            borderRadius: '10px',
            margin: '0 auto 0.75rem auto',
            overflow: 'hidden',
            border: '1px solid rgba(0, 242, 254, 0.2)',
            boxShadow: '0 0 10px rgba(0, 242, 254, 0.15)',
          }}
        >
          <div
            style={{
              width: `${Math.min(progress, 100)}%`,
              height: '100%',
              background: 'linear-gradient(90deg, var(--primary-cyan) 0%, var(--accent-emerald) 50%, var(--accent-purple) 100%)',
              borderRadius: '10px',
              boxShadow: '0 0 15px var(--primary-cyan)',
              transition: 'width 0.15s ease-out',
            }}
          />
        </div>

        {/* Digital Percentage Counter */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            color: 'rgba(255, 255, 255, 0.6)',
          }}
        >
          <span>SYSTEM_INIT</span>
          <span style={{ color: '#ffffff', fontWeight: 700 }}>{Math.min(progress, 100)}%</span>
        </div>
      </div>

      {/* Cyber Keyframe Animations */}
      <style>{`
        @keyframes spinClockwise {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spinCounter {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        .monogram-a-text {
          animation: monogramPulse 2s ease-in-out infinite alternate;
        }
        @keyframes monogramPulse {
          0% {
            filter: drop-shadow(0 0 15px rgba(0, 242, 254, 0.6));
          }
          100% {
            filter: drop-shadow(0 0 30px rgba(157, 78, 221, 0.9));
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
