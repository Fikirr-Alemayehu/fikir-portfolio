import { useState, useEffect } from "react";

function Particles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      // Don't create particles if clicking on playful icon or score display
      if (e.target.closest('.playful-icon') || e.target.closest('.score-display')) {
        return;
      }

      const newParticles = [];
      const colors = ['#06b6d4', '#22d3ee', '#0891b2', '#0e7490'];

      for (let i = 0; i < 12; i++) {
        newParticles.push({
          id: Date.now() + i,
          x: e.clientX,
          y: e.clientY,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 8 + 4,
          vx: (Math.random() - 0.5) * 10,
          vy: (Math.random() - 0.5) * 10,
          life: 1
        });
      }

      setParticles(prev => [...prev, ...newParticles]);

      // Remove particles after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticles[0].id));
      }, 1000);
    };

    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="particles-container">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            '--vx': particle.vx,
            '--vy': particle.vy
          }}
        />
      ))}
    </div>
  );
}

export default Particles;
