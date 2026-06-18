import React from 'react';
import '../assets/styles/Footer.scss';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__aurora" aria-hidden="true" />
      <div className="footer__container">
        <div className="footer__brand">
          <span className="footer__logo gradient-text">KS</span>
          <p className="footer__tagline">Building the future, one commit at a time.</p>
        </div>

        <div className="footer__links">
          <div className="footer__links-col">
            <span className="footer__links-title">Navigate</span>
            {['expertise', 'history', 'achievements', 'projects', 'contact'].map(id => (
              <button
                key={id}
                className="footer__link"
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>

          <div className="footer__links-col">
            <span className="footer__links-title">Connect</span>
            <a href="https://github.com/kankshi19" target="_blank" rel="noreferrer" className="footer__link">GitHub</a>
            <a href="https://www.linkedin.com/in/kankshi-shah-76539a258/" target="_blank" rel="noreferrer" className="footer__link">LinkedIn</a>
            <a href="mailto:shahkankshi@gmail.com" className="footer__link">Email</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__divider" />
        <div className="footer__bottom-content">
          <p className="footer__copyright">
            © {currentYear} Kankshi Shah. Designed & built with 💜
          </p>
          <div className="footer__badge">
            <span className="footer__badge-dot" />
            <span>Open to opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;