import React from "react"

import './Projects.css'

function Projects(props) {
    return (
        <div className="projectsContainer">
            <p className="projectsTitle">Projects</p>
            <a className="projectsOptionContainer1" href="https://evolve-cm.site/">
                <p className="projectsOptionContainerLeftText">/ 00 Evolve - Evolutionary AI Game</p>
                <p className="projectsOptionContainerLeftText2">Engineered a feed-forward neural network from scratch in JavaScript capable of 2.2 million synaptic connections per second. <br></br> <br></br> The AI character then uses this neural network as it's brain, and paired with it's sensor system, the character navigates a complex and randomized obstacle course.</p>
            </a>
            <a className="projectsOptionContainer2" href="https://www.aceleet.io/">
                <p className="projectsOptionContainerLeftText">/ 01 Aceleet.io - Data Structures & Algorithms Assistant</p>
                <p className="projectsOptionContainerLeftText2">Developed an application that identifies DS&A weaknesses and recommends respective topics and problems using spaced repetition.</p>
            </a>
            <a className="projectsOptionContainer3">
                <p className="projectsOptionContainerLeftText">/ 02 Minimize - Personal Finance iOS App (Awaiting Apple Approval)</p>
                <p className="projectsOptionContainerLeftText2">Developed a full-featured personal finance app aimed at empowering users to minimize excessive costs and take control of their financial health.</p>
            </a>
            <a className="projectsOptionContainer4" href="https://airebnb-clone-cm.web.app/">
                <p className="projectsOptionContainerLeftText">/ 03 Airebnb - Airbnb Clone</p>
                <p className="projectsOptionContainerLeftText2">Created an advanced Airbnb clone precisely mimicking the platform's features and UI, resulting in a modern, high fidelity Airbnb clone.</p>
            </a>
            <a className="projectsOptionContainer5" href="https://spill-7cae7.web.app/">
                <p className="projectsOptionContainerLeftText">/ 04 Spill - Social Media Web Application</p>
                <p className="projectsOptionContainerLeftText2">Developed a full-featured social media web application incorporating features like following, posting, commenting, and liking.</p>
            </a>
        </div>
    )
}

export default Projects
