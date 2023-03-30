import React from "react";

import './Header.css'

function Header(props) {
    return (
        <div className="headerContainer">
            <div className="headerContainerLeft">
                <p className="headerContainerLeftLogo">CM</p>
            </div>
            <div className="headerContainerRight">
                <div className="headerContainerRightNav">
                    <a className="headerContainerRightNavText">GitHub</a>
                    <a className="headerContainerRightNavText2">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default Header
