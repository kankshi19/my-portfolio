import React from "react";
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.jpg';
import mock06 from '../assets/images/mock06.jpg';
import mock09 from '../assets/images/mock09.jpeg';
import mock10 from '../assets/images/mock10.jpeg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <br/> <br/>
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/kankshi19/final_year_project" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/kankshi19/final_year_project" target="_blank" rel="noreferrer"><h2>NirBhaya: IOT based women safety wearable</h2></a>
                <p>Developed a glove-based safety device with GPS, GSM, and voice-triggered SOS alerts, integrated with a Flutter app featuring real-time tracking and AI-based safety route prediction.</p>
            </div>
            <div className="project">
                <a href="https://github.com/kankshi19/Drive-Safe" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/kankshi19/Drive-Safe" target="_blank" rel="noreferrer"><h2>DriveSafe : AI-Based Driving Behavior App:</h2></a>
                <p>Designed a Flutter-based smartphone app that leverages onboard sensors and AI/ML to deliver real-time driving insights, feedback, and rewards, enabling scalable, user-friendly road safety solutions.</p>
            </div>
            <div className="project">
                <a href="https://github.com/kankshi19/Expense_tracker" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/kankshi19/Expense_tracker" target="_blank" rel="noreferrer"><h2>SpendSavy : Flask-based Web Application</h2></a>
                <p>Developed a web-based expense tracking application using Python Flask, enabling users to manage and visualize their daily expenses with ease.</p>
            </div>
            <div className="project">
                <a href="https://github.com/kankshi19/BetterWorld" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/kankshi19/BetterWorld" target="_blank" rel="noreferrer"><h2>BetterWorld : Social Impact Platform </h2></a>
                <p>Developed a platform to create and join communities, events, and petitions for social causes, featuring a rewards system to promote engagement and collective action.</p>
            </div>
            <div className="project">
                <a href="https://github.com/kankshi19/MobileApp" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/kankshi19/MobileApp" target="_blank" rel="noreferrer"><h2>All-in-One Utility App : Java Mobile Application</h2></a>
                <p>Built a multifunctional mobile app integrating a calendar, calculator, weather, notepad, and messenger into one platform, designed to simplify daily tasks and enhance user efficiency with a seamless, customizable interface</p>
            </div>
            <div className="project">
                <a href="https://github.com/kankshi19/Quizathon---mini-project" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/kankshi19/Quizathon---mini-project" target="_blank" rel="noreferrer"><h2>Quizathon : C Language Project</h2></a>
                <p>Developed an interactive online quiz platform in C, enabling users to take timed quizzes, receive instant feedback, and track scores, designed for efficient learning and assessment.</p>
            </div>
        </div>
    </div>


    );
}

export default Project;