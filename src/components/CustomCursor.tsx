import React, { useEffect, useRef } from 'react';
import '../assets/styles/CustomCursor.scss';

const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const mouse = useRef({ x: 0, y: 0 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isHovering = useRef(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => { isHovering.current = true; };
    const onLeave = () => { isHovering.current = false; };

    const interactiveSelectors = 'a, button, [role="button"], input, textarea, .project-card, .skill-card, .nav-link, .cta-btn';

    const addListeners = () => {
      document.querySelectorAll(interactiveSelectors).forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    window.addEventListener('mousemove', onMove);
    addListeners();

    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    const animate = () => {
      const dot = cursorDotRef.current;
      const ring = cursorRingRef.current;

      if (dot && ring) {
        // Dot follows instantly
        dot.style.transform = `translate(${mouse.current.x - 4}px, ${mouse.current.y - 4}px)`;

        // Ring lags slightly
        const rx = parseFloat(ring.dataset.x || '0');
        const ry = parseFloat(ring.dataset.y || '0');
        const nx = rx + (mouse.current.x - rx) * 0.12;
        const ny = ry + (mouse.current.y - ry) * 0.12;
        ring.dataset.x = String(nx);
        ring.dataset.y = String(ny);
        ring.style.transform = `translate(${nx - 20}px, ${ny - 20}px) scale(${isHovering.current ? 1.8 : 1})`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={cursorRingRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
