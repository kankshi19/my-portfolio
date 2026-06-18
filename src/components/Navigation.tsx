import React, { useEffect, useState } from 'react';
import '../assets/styles/Navigation.scss';

const navItems = [
  { label: 'Expertise', id: 'expertise' },
  { label: 'Journey', id: 'history' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Scroll progress
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);

      // Active section detection
      const sections = navItems.map(item => document.getElementById(item.id));
      let current = '';
      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />

      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`} id="navigation">
        <div className="nav__container">
          {/* Logo */}
          <button className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
            <span className="nav__logo-text gradient-text">KS</span>
          </button>

          {/* Desktop Nav */}
          <nav className="nav__links" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav__link nav-link ${activeSection === item.id ? 'nav__link--active' : ''}`}
                onClick={() => scrollToSection(item.id)}
                aria-label={`Go to ${item.label}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="https://github.com/kankshi19"
            target="_blank"
            rel="noreferrer"
            className="nav__cta cta-btn"
            aria-label="View GitHub"
          >
            <span>GitHub</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 2.5h7m0 0v7m0-7L2.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>

          {/* Hamburger */}
          <button
            className={`nav__hamburger ${mobileOpen ? 'nav__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`nav__mobile ${mobileOpen ? 'nav__mobile--open' : ''}`} aria-hidden={!mobileOpen}>
        <div className="nav__mobile-content">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              className="nav__mobile-link"
              onClick={() => scrollToSection(item.id)}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <span className="nav__mobile-link-number">0{i + 1}</span>
              {item.label}
            </button>
          ))}
          <div className="nav__mobile-socials">
            <a href="https://github.com/kankshi19" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/kankshi-shah-76539a258/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;