import React, { useRef, useState, useEffect } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const EMAIL_SERVICE_ID = 'service_gneydharma';
  const EMAIL_TEMPLATE_ID = 'template_0yxq18n';
  const EMAIL_PUBLIC_KEY = '6GF0O1ieMTBKhVLk9';

  useEffect(() => {
    [headerRef, formRef].forEach(ref => {
      const el = ref.current;
      if (!el) return;
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); }
      }, { threshold: 0.1 });
      obs.observe(el);
      return () => obs.disconnect();
    });
  }, []);

  const validateEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const sendEmail = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setSubmitStatus(null);

    const valid = {
      name: name.trim() !== '',
      email: email.trim() !== '' && validateEmail(email.trim()),
      message: message.trim() !== '',
    };

    setNameError(!valid.name);
    setEmailError(!valid.email);
    setMessageError(!valid.message);

    if (!valid.name || !valid.email || !valid.message) return;

    setIsLoading(true);
    try {
      await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        { from_name: name.trim(), from_email: email.trim(), message: message.trim(), to_email: 'shahkankshi@gmail.com', reply_to: email.trim() },
        EMAIL_PUBLIC_KEY
      );
      setName(''); setEmail(''); setMessage('');
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const socials = [
    { label: 'GitHub', href: 'https://github.com/kankshi19', icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    )},
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kankshi-shah-76539a258/', icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )},
    { label: 'Email', href: 'mailto:shahkankshi@gmail.com', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
        <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )},
  ];

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="contact-section__bg" aria-hidden="true" />

      <div className="contact-section__container">
        {/* Header */}
        <div ref={headerRef} className="contact-section__header reveal">
          <span className="section-label">Contact</span>
          <h2 className="contact-section__title">
            Let's build something<br />
            <span className="gradient-text">extraordinary</span>
          </h2>
          <p className="contact-section__subtitle">
            Have a project in mind or want to chat about opportunities?
            I'm always open to conversations about new ideas.
          </p>

          {/* Social links */}
          <div className="contact-socials">
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="contact-social" aria-label={s.label}>
                {s.icon}
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div ref={formRef} className="contact-form-wrap reveal">
          {submitStatus === 'success' && (
            <div className="contact-alert contact-alert--success">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 10l2.5 2.5L13 7" stroke="#06d6a0" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="10" cy="10" r="9" stroke="#06d6a0" strokeWidth="1.5"/>
              </svg>
              <span>Message sent! I'll be in touch soon. ✨</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="contact-alert contact-alert--error">
              <span>⚡ Something went wrong. Please email me at <a href="mailto:shahkankshi@gmail.com">shahkankshi@gmail.com</a></span>
            </div>
          )}

          <form onSubmit={sendEmail} noValidate>
            <div className="form-row">
              <div className={`form-field ${nameError ? 'form-field--error' : ''}`}>
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="What's your name?"
                  value={name}
                  onChange={e => { setName(e.target.value); if (nameError && e.target.value.trim()) setNameError(false); }}
                  disabled={isLoading}
                />
                {nameError && <span className="form-field__error">Name is required</span>}
              </div>

              <div className={`form-field ${emailError ? 'form-field--error' : ''}`}>
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="How can I reach you?"
                  value={email}
                  onChange={e => { setEmail(e.target.value); if (emailError && e.target.value.trim()) setEmailError(false); }}
                  disabled={isLoading}
                />
                {emailError && <span className="form-field__error">Valid email is required</span>}
              </div>
            </div>

            <div className={`form-field ${messageError ? 'form-field--error' : ''}`}>
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                placeholder="Tell me about your project or idea..."
                rows={7}
                value={message}
                onChange={e => { setMessage(e.target.value); if (messageError && e.target.value.trim()) setMessageError(false); }}
                disabled={isLoading}
              />
              {messageError && <span className="form-field__error">Message is required</span>}
            </div>

            <button type="submit" className="contact-submit cta-btn" disabled={isLoading}>
              {isLoading ? (
                <>
                  <div className="contact-submit__spinner" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;