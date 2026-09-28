import { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Fixed Scroll Progress Line */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '4px',
          zIndex: 10001,
          pointerEvents: 'none',
          background: 'rgba(255, 255, 255, 0.05)',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #00f2fe 0%, #00f5a0 50%, #9d4edd 100%)',
            boxShadow: '0 0 15px #00f2fe, 0 0 5px #00f5a0',
            transition: 'width 0.1s ease-out',
            borderTopRightRadius: '2px',
            borderBottomRightRadius: '2px',
          }}
        />
      </div>
    </>
  );
};

export default ScrollProgressBar;
