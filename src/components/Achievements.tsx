import React, { useEffect, useRef } from 'react';
import mock01 from '../assets/images/mock01.jpg';
import mock02 from '../assets/images/mock02.jpg';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.jpg';
import mock11 from '../assets/images/mock11.jpg';
import '../assets/styles/Achievements.scss';

const achievements = [
  {
    img: mock02,
    title: 'VES Technathon Winner 🏆',
    subtitle: '1st Place · Hackathon 2025',
    desc: 'Achieved 1st place for building an innovative tech solution in a competitive 24-hour hackathon, showcasing strong problem-solving and teamwork.',
    link: 'https://www.linkedin.com/posts/kankshi-shah-76539a258_technothon2025-hackathon-teamwork-activity-7302300994531422208-QABW/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9qxL0B4ghBwxurx8sm6767vyq28_Ox0vM',
    color: '#f59e0b',
    type: 'achievement',
  },
  {
    img: mock01,
    title: 'President at ENIGMA 2024',
    subtitle: 'Leadership · Inter-College Event',
    desc: 'Led the successful planning and execution of ENIGMA, a large-scale inter-college tech event, coordinating teams and driving participation across institutions.',
    link: 'https://www.linkedin.com/posts/kankshi-shah-76539a258_enigma2024-gratitude-togetherwerise-activity-7172281031532691456-kF4J?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9qxL0B4ghBwxurx8sm6767vyq28_Ox0vM',
    color: '#6c3cf7',
    type: 'achievement',
  },
];

const certifications = [
  {
    img: mock08,
    title: 'Flutter Development',
    subtitle: 'Udemy Certification',
    desc: 'Comprehensive Flutter course covering app UI, state management, navigation, and backend integration — building production-ready mobile applications.',
    link: 'https://www.udemy.com/certificate/UC-7de3a57b-3f49-400d-a72e-e51631bf15e3/',
    color: '#3b82f6',
    type: 'cert',
  },
  {
    img: mock07,
    title: 'Foundational C# with Microsoft',
    subtitle: 'freeCodeCamp · Microsoft',
    desc: 'Gained hands-on expertise in C# fundamentals, object-oriented programming, and application building through this industry-recognized Microsoft course.',
    link: 'https://www.freecodecamp.org/certification/Kankshi_Shah/foundational-c-sharp-with-microsoft',
    color: '#06d6a0',
    type: 'cert',
  },
  {
    img: mock11,
    title: 'Certificate of Excellence',
    subtitle: 'HackerRank Orchestrate',
    desc: 'Secured 815th place globally by building and submitting an AI Agent in HackerRank international AI hackathon, showcasing expertise in Agentic AI, automation, and real-world AI system development',
    link: 'https://www.linkedin.com/in/kankshi-shah-76539a258/',
    color: '#06d6a0',
    type: 'cert',
  },
];

function AchievementCard({ item, index }: { item: typeof achievements[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className={`achieve-card reveal achieve-card--${item.type}`}
      ref={ref as any}
      style={{ '--card-color': item.color, transitionDelay: `${index * 0.1}s` } as React.CSSProperties}
      aria-label={item.title}
    >
      <div className="achieve-card__img-wrap">
        <img src={item.img} alt={item.title} className="achieve-card__img" loading="lazy" />
        <div className="achieve-card__img-overlay" />
      </div>
      <div className="achieve-card__body">
        <div className="achieve-card__subtitle">{item.subtitle}</div>
        <h3 className="achieve-card__title">{item.title}</h3>
        <p className="achieve-card__desc">{item.desc}</p>
        <div className="achieve-card__cta">
          <span>View Details</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 2h10v10M4 10L12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      <div className="achieve-card__accent" />
    </a>
  );
}

function Achievements() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="achievements-section" id="achievements">
      <div className="achievements-section__bg" aria-hidden="true" />

      <div className="achievements-section__container">
        {/* Header */}
        <div ref={headerRef} className="achievements-section__header reveal">
          <span className="section-label">Recognition</span>
          <h2 className="achievements-section__title">
            Wins &<br />
            <span className="gradient-text">Milestones</span>
          </h2>
          <p className="achievements-section__subtitle">
            Recognition earned through dedication, innovation, and leadership.
          </p>
        </div>

        {/* Achievements */}
        <div className="achievements-subsection">
          <h3 className="achievements-subsection__title">Achievements</h3>
          <div className="achievements-grid">
            {achievements.map((item, i) => (
              <AchievementCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="achievements-subsection">
          <h3 className="achievements-subsection__title">Certifications</h3>
          <div className="achievements-grid">
            {certifications.map((item, i) => (
              <AchievementCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;