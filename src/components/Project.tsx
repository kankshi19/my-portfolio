import React, { useEffect, useRef } from 'react';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.jpg';
import mock06 from '../assets/images/mock06.jpg';
import mock09 from '../assets/images/mock09.jpeg';
import mock10 from '../assets/images/mock10.jpeg';
import '../assets/styles/Project.scss';

const projects = [
  {
    img: mock06,
    title: 'NirBhaya',
    subtitle: 'IoT Women Safety Wearable',
    desc: 'A glove-based safety device with GPS, GSM, and voice-triggered SOS alerts. Integrated with Flutter app featuring real-time tracking and AI-based safety route prediction.',
    tags: ['IoT', 'Flutter', 'AI/ML', 'GPS/GSM'],
    link: 'https://github.com/kankshi19/final_year_project',
    color: '#f72585',
    featured: true,
  },
  {
    img: mock04,
    title: 'SpendSavy',
    subtitle: 'Flask-based Expense Tracker',
    desc: 'Web-based expense tracking application using Python Flask, enabling users to manage and visualize their daily expenses with intuitive charts.',
    tags: ['Python', 'Flask', 'SQL', 'Charts'],
    link: 'https://github.com/kankshi19/Expense_tracker',
    color: '#06d6a0',
  },
  {
    img: mock05,
    title: 'DriveSafe',
    subtitle: 'AI-Based Driving Behavior App',
    desc: 'Flutter-based smartphone app leveraging onboard sensors and AI/ML for real-time driving insights, feedback, and rewards — enabling scalable road safety solutions.',
    tags: ['Flutter', 'AI/ML', 'Sensors', 'Firebase'],
    link: 'https://github.com/kankshi19/Drive-Safe',
    color: '#3b82f6',
    featured: true,
  },
  {
    img: mock04,
    title: 'SpendSavy',
    subtitle: 'Flask-based Expense Tracker',
    desc: 'Web-based expense tracking application using Python Flask, enabling users to manage and visualize their daily expenses with intuitive charts.',
    tags: ['Python', 'Flask', 'SQL', 'Charts'],
    link: 'https://github.com/kankshi19/Expense_tracker',
    color: '#06d6a0',
  },
  {
    img: mock09,
    title: 'BetterWorld',
    subtitle: 'Social Impact Platform',
    desc: 'Platform to create and join communities, events, and petitions for social causes. Features a rewards system to promote engagement and collective action.',
    tags: ['React', 'Node.js', 'Firebase', 'Social'],
    link: 'https://github.com/kankshi19/BetterWorld',
    color: '#6c3cf7',
  },
  {
    img: mock10,
    title: 'All-in-One Utility',
    subtitle: 'Java Mobile Application',
    desc: 'Multifunctional mobile app integrating calendar, calculator, weather, notepad, and messenger — designed for efficiency with a seamless, customizable interface.',
    tags: ['Java', 'Android', 'APIs', 'UI/UX'],
    link: 'https://github.com/kankshi19/MobileApp',
    color: '#f59e0b',
  },
  {
    img: mock03,
    title: 'Quizathon',
    subtitle: 'C Language Quiz Platform',
    desc: 'Interactive online quiz platform in C — enabling users to take timed quizzes, receive instant feedback, and track scores for efficient learning and assessment.',
    tags: ['C', 'Algorithms', 'Data Structures'],
    link: 'https://github.com/kankshi19/Quizathon---mini-project',
    color: '#ec4899',
  },

  
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // 3D tilt on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-8px) scale(1.01)`;
    el.style.boxShadow = `${-x * 20}px ${y * 20}px 60px rgba(0,0,0,0.5), 0 0 40px ${project.color}18`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = '';
    el.style.boxShadow = '';
  };

  return (
    <div
      ref={ref}
      className={`project-card reveal ${project.featured ? 'project-card--featured' : ''}`}
      style={{ '--card-color': project.color, transitionDelay: `${(index % 3) * 0.1}s` } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      <div ref={imgRef} className="project-card__img-wrap">
        <img src={project.img} alt={project.title} className="project-card__img" loading="lazy" />
        <div className="project-card__img-overlay" />
        {project.featured && <span className="project-card__featured-badge">Featured</span>}

        {/* Hover CTA */}
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="project-card__view-btn"
          aria-label={`View ${project.title} on GitHub`}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2h12v12M4 12L13 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          View Project
        </a>
      </div>

      {/* Body */}
      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__subtitle">{project.subtitle}</span>
          <a href={project.link} target="_blank" rel="noreferrer" className="project-card__github" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.desc}</p>
        <div className="project-card__tags">
          {project.tags.map(tag => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>
      </div>

      {/* Bottom color accent */}
      <div className="project-card__accent" />
    </div>
  );
}

function Project() {
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
    <section className="projects-section" id="projects">
      <div className="projects-section__bg" aria-hidden="true" />

      <div className="projects-section__container">
        <div ref={headerRef} className="projects-section__header reveal">
          <span className="section-label">Projects</span>
          <h2 className="projects-section__title">
            Things I've<br />
            <span className="gradient-text">built & shipped</span>
          </h2>
          <p className="projects-section__subtitle">
            A selection of projects that showcase my range — from AI-powered mobile apps to IoT safety devices.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;