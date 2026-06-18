import React, { useEffect, useRef, useState } from 'react';
import './Loader.scss';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'done'>('loading');
  const rafRef = useRef<number>(0);
  const startTime = useRef(Date.now());

  useEffect(() => {
    const duration = 1800; // ms

    const tick = () => {
      const elapsed = Date.now() - startTime.current;
      const p = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(p));

      if (p < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setPhase('done');
        setTimeout(onComplete, 600);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onComplete]);

  return (
    <div className={`loader ${phase === 'done' ? 'loader--exit' : ''}`}>
      <div className="loader__bg" />

      {/* Aurora blobs */}
      <div className="loader__blob loader__blob--1" />
      <div className="loader__blob loader__blob--2" />
      <div className="loader__blob loader__blob--3" />

      <div className="loader__content">
        <div className="loader__monogram">
          <span className="loader__monogram-letter">K</span>
          <span className="loader__monogram-letter">S</span>
        </div>

        <div className="loader__name">Kankshi Shah</div>
        <div className="loader__tagline">Software & AI Engineer</div>

        <div className="loader__bar-container">
          <div className="loader__bar" style={{ width: `${progress}%` }} />
        </div>

        <div className="loader__progress">{progress}%</div>
      </div>
    </div>
  );
};

export default Loader;
