import React, { useEffect, useRef } from 'react';
import '../assets/styles/Timeline.scss';

type TimelineItem = {
  date: string;
  title: string;
  org: string;
  description?: string;
  type: 'work' | 'education';
  badge?: string;
};

const workItems: TimelineItem[] = [
  {
    date: '2024 — Onsite',
    title: 'Software Developer Intern',
    org: 'Rite Technologies',
    description: 'Designed responsive mobile applications and automated testing workflows, improving QA efficiency and delivery speed.',
    type: 'work',
    badge: 'Latest',
  },
  {
    date: '2024 — Remote',
    title: 'Web Developer Intern',
    org: 'Oasis Infobyte',
    description: 'Built user-friendly web applications in collaboration with cross-functional teams. Delivered clean, production-ready code.',
    type: 'work',
  },
  {
    date: '2023 — Remote',
    title: 'Java Developer Intern',
    org: 'InternSavy',
    description: 'Developed backend features using Java with hands-on experience in REST API integration and database management.',
    type: 'work',
  },
];

const educationItems: TimelineItem[] = [
  {
    date: '2025 — 2028',
    title: 'BTech — Computer Engineering',
    org: "Bhartiya Vidya Bhavan's Sardar Patel Institute of Technology",
    type: 'education',
    badge: 'Current',
  },
  {
    date: '2022 — 2025',
    title: 'Diploma — Computer Engineering',
    org: "SVKM's Shri Bhagubhai Mafatlal Polytechnic",
    description: 'Percentage: 97.33%',
    type: 'education',
    badge: 'Gold',
  },
  {
    date: '2012 — 2022',
    title: '10th Grade — ICSE',
    org: 'VPMS Orion ICSE School',
    description: 'Percentage: 97.4%',
    type: 'education',
  },
];

function TimelineCard({ item, index, side }: { item: TimelineItem; index: number; side: 'left' | 'right' }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('visible');
        obs.unobserve(el);
      }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`timeline-card reveal timeline-card--${side}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      {item.badge && (
        <span className="timeline-card__badge">{item.badge}</span>
      )}
      <div className="timeline-card__date">{item.date}</div>
      <h3 className="timeline-card__title">{item.title}</h3>
      <div className="timeline-card__org">{item.org}</div>
      {item.description && <p className="timeline-card__desc">{item.description}</p>}
      <div className="timeline-card__dot" />
      <div className="timeline-card__connector" />
    </div>
  );
}

function Timeline() {
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

  const renderTimeline = (items: TimelineItem[], label: string) => (
    <div className="timeline-block">
      <div className="timeline-block__label reveal" ref={label === 'Experience' ? undefined : undefined}>
        <span className="section-label">{label}</span>
      </div>
      <div className="timeline-track">
        <div className="timeline-track__line" />
        <div className="timeline-track__items">
          {items.map((item, i) => (
            <TimelineCard key={i} item={item} index={i} side={i % 2 === 0 ? 'left' : 'right'} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="timeline-section" id="history">
      <div className="timeline-section__bg" aria-hidden="true" />

      <div className="timeline-section__container">
        <div ref={headerRef} className="timeline-section__header reveal">
          <span className="section-label">Journey</span>
          <h2 className="timeline-section__title">
            The path that<br />
            <span className="gradient-text">shaped me</span>
          </h2>
          <p className="timeline-section__subtitle">
            A chronicle of growth — from first lines of code to shipping production systems.
          </p>
        </div>

        {renderTimeline(workItems, 'Experience')}
        {renderTimeline(educationItems, 'Education')}
      </div>
    </section>
  );
}

export default Timeline;