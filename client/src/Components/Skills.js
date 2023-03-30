import React from "react"

import './Skills.css'

function Skills(props) {
    return (
        <div className="skillsContainer">
            <p className="skillsTitle">Skills</p>
            <div className="skillsOptionContainer1">
                <p className="skillsOptionContainerLeftText">/ 00 Front-End</p>
                <p className="skillsOptionContainerLeftText2">JavaScript • React • React Native • Redux • HTML5 • CSS3 • Firebase • Git</p>
            </div>
            <div className="skillsOptionContainer2">
                <p className="skillsOptionContainerLeftText">/ 01 Back-End</p>
                <p className="skillsOptionContainerLeftText2">Express.js • MongoDB • Mongoose • AWS • RESTful APIs • Heroku • Git</p>
            </div>
        </div>
    )
}

export default Skills
