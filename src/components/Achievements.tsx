import React from "react";
import mock01 from '../assets/images/mock01.jpg';
import mock02 from '../assets/images/mock02.jpg';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.jpg';
import '../assets/styles/Achievements.scss';

function Achievements() {
    return(
    <div className="achievements-container" id="achievements">
        <h1>Achievements</h1>
        <div className="achievements-grid">
            <div className="achievement">
                <a href="https://www.linkedin.com/posts/kankshi-shah-76539a258_technothon2025-hackathon-teamwork-activity-7302300994531422208-QABW/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9qxL0B4ghBwxurx8sm6767vyq28_Ox0vM" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.linkedin.com/posts/kankshi-shah-76539a258_technothon2025-hackathon-teamwork-activity-7302300994531422208-QABW/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9qxL0B4ghBwxurx8sm6767vyq28_Ox0vM" target="_blank" rel="noreferrer"><h2>VES Technathon Winner</h2></a>
                <p>Achieved 1st place for building an innovative tech solution in a competitive 24-hour hackathon, showcasing strong problem-solving and teamwork skills.</p>
            </div>
            <div className="achievement">
                <a href="https://www.linkedin.com/posts/kankshi-shah-76539a258_enigma2024-gratitude-togetherwerise-activity-7172281031532691456-kF4J?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9qxL0B4ghBwxurx8sm6767vyq28_Ox0vM" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.linkedin.com/posts/kankshi-shah-76539a258_enigma2024-gratitude-togetherwerise-activity-7172281031532691456-kF4J?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9qxL0B4ghBwxurx8sm6767vyq28_Ox0vM" target="_blank" rel="noreferrer"><h2>President at ENIGMA 2024</h2></a>
                <p>Led the successful planning and execution of ENIGMA, a large-scale inter-college tech event, coordinating teams, managing logistics, and driving participation across institutions.</p>
            </div>
            
        </div>
        <br/> <br/>
        <br/>
        <h1>Certifications</h1>
        <div className="achievements-grid">
            <div className="achievement">
                <a href="https://www.udemy.com/certificate/UC-7de3a57b-3f49-400d-a72e-e51631bf15e3/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.udemy.com/certificate/UC-7de3a57b-3f49-400d-a72e-e51631bf15e3/" target="_blank" rel="noreferrer"><h2>Flutter Developement </h2></a>
                <p>Completed a comprehensive Flutter course covering app UI, state management, and backend integration.</p>
            </div>
            <div className="achievement">
                <a href="https://www.freecodecamp.org/certification/Kankshi_Shah/foundational-c-sharp-with-microsoft" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.freecodecamp.org/certification/Kankshi_Shah/foundational-c-sharp-with-microsoft" target="_blank" rel="noreferrer"><h2> Foundational C# Development </h2></a>
                <p>Gained hands-on expertise in C# fundamentals, object-oriented programming, and application building through industry-recognized course by Microsoft and freeCodeCamp.</p>
            </div>
        </div>

        <br/> <br/>
    </div>


    );
}
export default Achievements;