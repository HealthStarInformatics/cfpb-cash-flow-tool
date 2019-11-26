import React from "react";

import { Link } from "react-router-dom";

import menu from "../../../assets/noun_menu_89650.png";
import logo from "../../../assets/Logo1_horizontal-lockup_@2.png";
import search from "../../../assets/noun_Magnifying Glass_89626.png";

import "../../../styles/SiteNavBar.scss";

export const SiteNavBar = () => (
  <div className="sitenavbar-wrapper">
    <div className="component-body">
      <div className="mobile">
        <div className="image image-container-menu">
          <img
            className="image menu-icon"
            src={menu}
            alt="hamburger menu icon"
          />
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
      <div className="desktop">
        <div className="desktop_top-row">
          <div className="image image-container-logo header-left">
            <img
              className="image cf-logo-small"
              src={logo}
              alt="CFPB small logo"
            ></img>
          </div>
          <div className="header-right">
            <div className="image image-container-search">
              <div>
                <img
                  className="image search-icon"
                  src={search}
                  alt="search magnifying glass"
                ></img>
              </div>
              <div className="search-text">Search</div>
            </div>
            <div>
              <Link>
                {" "}
                <span>icon</span>
                <span>Submit a Complaint</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="desktop_bottom-row">
          <ul className="menu-items">
            <li className="">Consumer Tools</li>
            <li>Practitioner Resources</li>
            <li>Data & Research</li>
            <li>Policy & Compliance</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
