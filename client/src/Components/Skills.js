import React from "react"

import './Skills.css'

function Skills(props) {
    return (
        <div className="skillsContainer">
            <p className="skillsTitle">Skills</p>
            <div className="skillsOptionContainer1">
                <p className="skillsOptionContainerLeftText">/ 00 Languages</p>
                <p className="skillsOptionContainerLeftText2">JavaScript • Java • Python</p>
            </div>
            <div className="skillsOptionContainer1">
                <p className="skillsOptionContainerLeftText">/ 01 Back-end</p>
                <p className="skillsOptionContainerLeftText2">SQL • PostgreSQL • MongoDB • Express.js • Node.js • REST APIs • Mongoose • TensorFlow.js</p>
            </div>
            <div className="skillsOptionContainer1">
                <p className="skillsOptionContainerLeftText">/ 02 Front-end</p>
                <p className="skillsOptionContainerLeftText2">React • Redux • HTML • CSS • React Native</p>
            </div>
            <div className="skillsOptionContainer2">
                <p className="skillsOptionContainerLeftText">/ 03 Main Tools</p>
                <p className="skillsOptionContainerLeftText2">Git • AWS • Firebase • Heroku • pgAdmin • MongoDB Atlas • Linux • Postman • VS Code • Agile</p>
            </div>
        </div>
    )
}

export default Skills
