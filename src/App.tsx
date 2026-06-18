import React, { useState, useEffect, useCallback } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Achievements,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import './index.scss';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setLoaded(true);
    // Small delay for the exit animation to finish
    setTimeout(() => setShowContent(true), 100);
  }, []);

  // Re-run scroll reveal after content shows
  useEffect(() => {
    if (!showContent) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' as ScrollBehavior });

    // Initialize scroll reveals for any .reveal elements
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [showContent]);

  return (
    <>
      {/* Premium Custom Cursor */}
      <CustomCursor />

      {/* Loading Screen */}
      {!loaded && <Loader onComplete={handleLoaderComplete} />}

      {/* Main App */}
      <div
        className="main-container"
        style={{
          opacity: showContent ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navigation />
        <main id="main-content">
          <Main />
          <Expertise />
          <Timeline />
          <Achievements />
          <Project />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;