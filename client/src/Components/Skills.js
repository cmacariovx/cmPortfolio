import React from "react"

import './Skills.css'

function Skills(props) {
    return (
        <div className="skillsContainer">
            <p className="skillsTitle">Skills</p>
            <div className="skillsOptionContainer1">
                <p className="skillsOptionContainerLeftText">/ 00 Programming Languages</p>
                <p className="skillsOptionContainerLeftText2">Java • Python • JavaScript • TypeScript</p>
            </div>
            <div className="skillsOptionContainer1">
                <p className="skillsOptionContainerLeftText">/ 01 Back-end</p>
                <p className="skillsOptionContainerLeftText2">REST APIs • Spring Boot • Node.js • SQL • PostgreSQL • MongoDB • Express.js</p>
            </div>
            <div className="skillsOptionContainer1">
                <p className="skillsOptionContainerLeftText">/ 02 Front-end</p>
                <p className="skillsOptionContainerLeftText2">React • Redux • React Native • HTML • CSS</p>
            </div>
            <div className="skillsOptionContainer2">
                <p className="skillsOptionContainerLeftText">/ 03 Misc</p>
                <p className="skillsOptionContainerLeftText2">Git • AWS • Docker • Nginx • Linux • OOP • Cloud Computing • English • Spanish</p>
            </div>
        </div>
    )
}

export default Skills
