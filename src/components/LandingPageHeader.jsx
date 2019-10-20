import React from "react";

import menu from "../assets/noun_menu_89650.png";
import logo from "../assets/Logo1_horizontal-lockup_@2.png";
import search from "../assets/noun_Magnifying Glass_89626.png";

import '../styles/LandingPageHeader.scss';

const LandingPageHeader = () => (
    <div className="lph-wrapper">
        <div className="lph-image lph-image-container-menu">
            <img className="lph-image menu-icon" src={menu} alt="hamburger menu icon"></img>
        </div>
        <div className="lph-image lph-image-container-logo">
            <img className="lph-image cf-logo-small" src={logo} alt="CFPB small logo"></img>
        </div>
        <div className="lph-image lph-image-container-search">
            <img className="lph-image search-icon" src={search} alt="search magnifying glass"></img>
        </div>
    </div>
    
);

export default LandingPageHeader;
