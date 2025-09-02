import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - onsite"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Rite Technologies</h4>
            <p>
              Designed responsive mobile applications and tested various projects using automation tools.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - remote"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Web Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Oasis Infobyte</h4>
            <p>
              Built user-friendly web applications and collaborated with cross-functional teams.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - remote"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Java Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">InternSavy</h4>
            <p>
              Developed backend features using Java, with hands-on experience in API integration and database management.
            </p>
          </VerticalTimelineElement>
          </VerticalTimeline>

      </div>

      <div className="items-container">
        <h1>Education History</h1>
          <VerticalTimeline>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 - 2028"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">BTech - Computer Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Bhartiya Vidya Bhavan's Sardar Patel Institute of Technology </h4>
            {/* <p>
              Percentage: 97.33%
            </p> */}
          </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Diploma - Computer Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">SVKM’s Shri Bhagubhai Mafatlal Polytechnic</h4>
            <p>
              Percentage: 97.33%
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2012 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">10th Grade</h3>
            <h4 className="vertical-timeline-element-subtitle">VPMS Orion ICSE School</h4>
            <p>
              Percentage: 97.4%
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

    </div>
  );
}

export default Timeline;