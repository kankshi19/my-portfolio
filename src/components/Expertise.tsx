import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import '../assets/styles/Expertise.scss';

const skills = [
  {
    icon: faReact,
    title: 'Full Stack & App Dev',
    color: '#3b82f6',
    description: 'End-to-end web and mobile applications with clean architecture, seamless UX, and scalable backend systems. Mastered the full development lifecycle.',
    tags: ['React', 'Node.js', 'JavaScript', 'TypeScript', 'Flutter', 'Flask', 'Python', 'Java', 'C#', 'SQL', 'Firebase', 'MongoDB'],
  },

  {
    icon: faPython,
    title: 'GenAI & LLM Engineering',
    color: '#6c3cf7',
    description: 'Building and deploying custom ML models, GenAI systems, and intelligent applications. Deep expertise in LLMs, prompt engineering, and AI-powered solutions.',
    tags: ['OpenAI', 'Groq', 'Gemini', 'Hugging Face', 'Machine Learning', 'NLP'],
  },
  {
    icon: faMicrochip,
    title: 'IoT & Embedded Systems',
    color: '#f72585',
    description: 'Real-time IoT applications using microcontrollers with GPS/GSM modules. Expert in sensor integration, edge computing, and hardware-software interfacing.',
    tags: ['Raspberry Pi 4', 'ESP32', 'Arduino', 'GPS', 'GSM', 'Edge AI'],
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('visible');
        obs.unobserve(el);
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="skill-card reveal"
      style={{ '--card-color': skill.color, transitionDelay: `${index * 0.1}s` } as React.CSSProperties}
    >
      <div className="skill-card__icon-wrap">
        <FontAwesomeIcon icon={skill.icon} />
        <div className="skill-card__icon-glow" />
      </div>
      <h3 className="skill-card__title">{skill.title}</h3>
      <p className="skill-card__desc">{skill.description}</p>
      <div className="skill-card__tags">
        {skill.tags.map(tag => (
          <span key={tag} className="skill-card__tag">{tag}</span>
        ))}
      </div>
      <div className="skill-card__border-glow" />
    </div>
  );
}

function Expertise() {
  const headerRef = useReveal();

  return (
    <section className="expertise-section" id="expertise">
      {/* Background decoration */}
      <div className="expertise-section__bg" aria-hidden="true" />

      <div className="expertise-section__container">
        {/* Header */}
        <div ref={headerRef} className="expertise-section__header reveal">
          <span className="section-label">Expertise</span>
          <h2 className="expertise-section__title">
            Crafting at the<br />
            <span className="gradient-text">intersection of disciplines</span>
          </h2>
          <p className="expertise-section__subtitle">
            Four core domains where I build, innovate, and deliver exceptional results.
          </p>
        </div>

        {/* Grid */}
        <div className="skill-grid">
          {skills.map((skill, i) => (
            <SkillCard key={skill.title} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;