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
                <p className="heroContainerRightText">Full Stack Software Engineer with proficiency in multiple languages, including Java, Python, JavaScript, TypeScript. Demonstrating strong capabilities in developing performant and scalable applications across various domains.</p>
            </div>
        </div>
    )
}

export default Hero
