import React from "react";

import menu from "../../../assets/noun_menu_89650.png";
import logo from "../../../assets/Logo1_horizontal-lockup_@2.png";
import search from "../../../assets/noun_Magnifying Glass_89626.png";

import "../../../styles/SiteNavBar.scss";

export const SiteNavBar = () => (
  <div className="sitenavbar-wrapper">
    <div className="component-body">
      <div className="image image-container-menu">
        <img
          className="image menu-icon"
          src={menu}
          alt="hamburger menu icon"
        ></img>
      </div>
      <div className="image image-container-logo">
        <img
          className="image cf-logo-small"
          src={logo}
          alt="CFPB small logo"
        ></img>
      </div>
      <div className="image image-container-search">
        <img
          className="image search-icon"
          src={search}
          alt="search magnifying glass"
        ></img>
      </div>
    </div>
  </div>
);
