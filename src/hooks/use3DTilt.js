import { useEffect } from 'react';

export const use3DTilt = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.glass-panel');
    let rafId = null;

    cards.forEach((card) => {
      const handleMouseMove = (e) => {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = ((y - centerY) / centerY) * -6;
          const rotateY = ((x - centerX) / centerX) * 6;

          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
      };

      const handleMouseLeave = () => {
        if (rafId) cancelAnimationFrame(rafId);
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      card._tiltCleanup = () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      cards.forEach((card) => {
        if (card._tiltCleanup) card._tiltCleanup();
      });
    };
  }, []);
};

export default use3DTilt;
