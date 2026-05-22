import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationId: number;

    const initParticles = (width: number, height: number) => {
      particles = [];
      // Calculate dense but high-performing count of particles based on screen area
      const density = Math.min(160, Math.floor((width * height) / 10000));
      for (let i = 0; i < density; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 2 + 1,
          alpha: Math.random() * 0.4 + 0.15,
        });
      }
    };

    const draw = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const maxDistance = 140;

      // Draw constellation connections first
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.12;
            ctx.strokeStyle = `rgba(59, 163, 129, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw the particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        ctx.fillStyle = `rgba(59, 163, 129, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Occasional soft glow for slightly larger key particles
        if (p.radius > 2.2) {
          ctx.save();
          ctx.shadowBlur = 6;
          ctx.shadowColor = '#3ba381';
          ctx.fillStyle = `rgba(59, 163, 129, ${p.alpha * 1.5})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        // Update particle offsets
        p.x += p.vx;
        p.y += p.vy;

        // Soft screen border wrap-around logic
        if (p.x < -10) p.x = canvas.width + 10;
        else if (p.x > canvas.width + 10) p.x = -10;

        if (p.y < -10) p.y = canvas.height + 10;
        else if (p.y > canvas.height + 10) p.y = -10;
      }

      animationId = requestAnimationFrame(draw);
    };

    // Responsively monitor dimensions of parent element to secure full coverage
    const parent = canvas.parentElement;
    const observer = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const { width, height } = entries[0].contentRect;
      canvas.width = width;
      canvas.height = height;
      initParticles(width, height);
    });

    if (parent) {
      observer.observe(parent);
      // Fallback initial sizes if rect is 0 initially
      const rect = parent.getBoundingClientRect();
      const initialWidth = rect.width || window.innerWidth;
      const initialHeight = rect.height || window.innerHeight;
      canvas.width = initialWidth;
      canvas.height = initialHeight;
      initParticles(initialWidth, initialHeight);
    } else {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(window.innerWidth, window.innerHeight);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      id="particles-bg-canvas"
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
