import React from "react"

import './Hero.css'

import GradientPath from "./GradientPath"

function Hero(props) {
    return (
        <div className="heroContainer">
            <div className="heroContainerLeft">
                <p className="heroContainerLeftTitle">Carlos Macario</p>
                <p className="heroContainerLeftSubTitle">Full Stack Software Engineer</p>
                <div className="heroContainerLeftButtonsContainer">
                    <a href="https://github.com/cmacariovx" className="heroContainerLeftButton">GitHub</a>
                    <a href="https://www.linkedin.com/in/carlos-macariooo/" className="heroContainerRightButton">LinkedIn</a>
                </div>
            </div>
            <div className="heroContainerRight">
                <p className="heroContainerRightText">Self-taught full stack software engineer with a strong foundation in software development principles. Proficiency in JavaScript, various frameworks and libraries including React. Skilled in problem-solving, teamwork, and quickly adapting to new technologies.</p>
            </div>
        </div>
    )
}

export default Hero
