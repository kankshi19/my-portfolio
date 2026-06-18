import React, { useEffect, useRef, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/kankshiphoto.jpg';

const ROLES = [
  'Software Engineer',
  'AI/ML Engineer',
  'Full Stack Developer',
  'IoT Innovator',
  'Builder & Creator',
];

function useTypewriter(words: string[], speed = 70, pause = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), speed);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), speed / 2);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex(i => (i + 1) % words.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return displayed;
}

function Main() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const role = useTypewriter(ROLES);
  const [isVisible, setIsVisible] = useState(false);

  // Particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Create particles
    const count = Math.floor((canvas.width * canvas.height) / 12000);
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.05,
      hue: Math.random() > 0.6 ? 260 : Math.random() > 0.5 ? 220 : 160, // violet, blue, emerald
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Mouse influence glow
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 200);
      gradient.addColorStop(0, 'rgba(108, 60, 247, 0.06)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        // Drift toward mouse slightly
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.vx += (dx / dist) * 0.01;
          p.vy += (dy / dist) * 0.01;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Dampen velocity
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Wrap
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.opacity})`;
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(108, 60, 247, ${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  // Mouse spotlight
  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    const onMove = (e: MouseEvent) => {
      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Entrance animation
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero" ref={heroRef} id="hero">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />

      {/* Spotlight */}
      <div ref={spotlightRef} className="hero__spotlight" aria-hidden="true" />

      {/* Aurora gradient blobs */}
      <div className="hero__aurora hero__aurora--1" aria-hidden="true" />
      <div className="hero__aurora hero__aurora--2" aria-hidden="true" />
      <div className="hero__aurora hero__aurora--3" aria-hidden="true" />

      {/* Grid overlay */}
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__content">
        {/* Badge */}
        <div className={`hero__badge ${isVisible ? 'hero__badge--visible' : ''}`}>
          <span className="hero__badge-dot" />
          <span>Available for opportunities</span>
        </div>

        {/* Greeting */}
        <p className={`hero__greeting ${isVisible ? 'hero__greeting--visible' : ''}`}>
          Hi, I'm
        </p>

        {/* Name */}
        <h1 className={`hero__name ${isVisible ? 'hero__name--visible' : ''}`}>
          Kankshi<br />
          <span className="hero__name-accent gradient-text">Shah</span>
        </h1>

        {/* Role Typewriter */}
        <div className={`hero__role ${isVisible ? 'hero__role--visible' : ''}`}>
          <span className="hero__role-prefix">{'// '}</span>
          <span className="hero__role-text">{role}</span>
          <span className="hero__role-cursor" aria-hidden="true">|</span>
        </div>

        {/* Description */}
        <p className={`hero__description ${isVisible ? 'hero__description--visible' : ''}`}>
          Building the future at the intersection of software, AI, and human experience.
          Transforming complex ideas into elegant, impactful digital solutions.
        </p>

        {/* CTAs */}
        <div className={`hero__ctas ${isVisible ? 'hero__ctas--visible' : ''}`}>
          <a
            href="#projects"
            className="hero__cta hero__cta--primary cta-btn"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>View My Work</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#contact"
            className="hero__cta hero__cta--secondary cta-btn"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Connect
          </a>
        </div>

        {/* Social Links */}
        <div className={`hero__socials ${isVisible ? 'hero__socials--visible' : ''}`}>
          <a href="https://github.com/kankshi19" target="_blank" rel="noreferrer" className="hero__social" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/kankshi-shah-76539a258/" target="_blank" rel="noreferrer" className="hero__social" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <span className="hero__social-divider" />
          <span className="hero__social-label">shahkankshi@gmail.com</span>
        </div>
      </div>

      {/* Avatar */}
      <div className={`hero__avatar-container ${isVisible ? 'hero__avatar-container--visible' : ''}`}>
        <div className="hero__avatar-ring hero__avatar-ring--1" />
        <div className="hero__avatar-ring hero__avatar-ring--2" />
        <div className="hero__avatar-ring hero__avatar-ring--3" />
        <div className="hero__avatar-glow" />
        <div className="hero__avatar-frame">
          <img src={avatar} alt="Kankshi Shah" className="hero__avatar-img" />
          <div className="hero__avatar-overlay" />
        </div>
        {/* Floating badges */}
        <div className="hero__float-badge hero__float-badge--1">
          <span>🚀</span> AI/ML
        </div>
        <div className="hero__float-badge hero__float-badge--2">
          <span>⚡</span> Full Stack
        </div>
        <div className="hero__float-badge hero__float-badge--3">
          <span>🔬</span> IoT
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator" aria-label="Scroll down">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-dot" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}

export default Main;