import React from "react"

import './Projects.css'

function Projects(props) {
    return (
        <div className="projectsContainer">
            <p className="projectsTitle">Projects</p>
            <a className="projectsOptionContainer1" href="https://airebnb-clone-cm.web.app/">
                <p className="projectsOptionContainerLeftText">/ 00 Airebnb - Airbnb Clone</p>
                <p className="projectsOptionContainerLeftText2">Created an advanced Airbnb clone using React, Express, MongoDB, NodeJS, AWS S3, and more, precisely mimicking the platform's features and UI, resulting in a modern, high fidelity Airbnb clone.</p>
            </a>
            <a className="projectsOptionContainer2" href="https://evolve-cm.web.app/">
                <p className="projectsOptionContainerLeftText">/ 01 Evolve - Evolutionary AI Game</p>
                <p className="projectsOptionContainerLeftText2">Engineered an ultra-high-performance neural network architecture using Object Oriented Programming in JavaScript, implementing Exponential Linear Unit (ELU) activation functions in hidden layers, achieving a staggering 1.2 million synaptic connections per second.</p>
            </a>
            <a className="projectsOptionContainer3" href="https://spill-7cae7.web.app/">
                <p className="projectsOptionContainerLeftText">/ 02 Spill - Social Media Web Application</p>
                <p className="projectsOptionContainerLeftText2">Developed a full-featured, full stack social media web application employing React, incorporating essential features like following, posting, commenting, and liking, fostering community growth and connection.</p>
            </a>
        </div>
    )
}

export default Projects
