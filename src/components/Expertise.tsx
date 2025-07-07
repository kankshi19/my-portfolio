import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "React",
    "Node",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Flutter",
    "Flask",
    "Python",
    "Java",
    "C#",
    "SQL",
    "Firebase",
    "MongoDB",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Linux",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "Gemini",
    "Hugging Face",
    "Machine learning",
    "Deep learning",
];

const labelsFourth = [
    "Raspberry Pi 4",
    "ESP32",
    "Arduino",
    "GPS",
    "GSM"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack and App Development</h3>
                    <p>Designed and developed end-to-end web and mobile applications with a strong focus on clean architecture, seamless user experience, and scalable backend systems. Well-versed in the full development lifecycle, from planning to deployment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Worked with GitHub, Docker, and AWS, focusing on automating testing workflows during my internship. Gained practical experience in cloud infrastructure through hands-on projects using AWS.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMicrochip} size="3x" />
                    <h3>IoT & Embedded Systems</h3>
                    <p>Worked on real-time IoT applications using microcontrollers like ESP32, along with GPS and GSM modules. Familiar with sensor integration, edge device communication, and prototyping with Raspberry Pi for hardware-software interfacing.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>


                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Built and deployed custom ML models on Hugging Face, with hands-on experience in GenAI, face detection, and prompt engineering. Exploring real-world applications of LLMs and intelligent systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;