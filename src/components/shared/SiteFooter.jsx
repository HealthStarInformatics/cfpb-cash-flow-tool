import React from "react";
import { NavLink as Link } from "react-router-dom";

import Icon from "./Icon";

import usflag from "../../assets/us-flag.png";

import "../../styles/SiteFooter.scss";

const SiteFooter = () => (
  <div className="site-footer-wrapper">
    <Link
      to="#"
      className="Nav_link no-decoration"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <button className="lp-btn secondary back-to-top-btn">
        <div>
          <div>Back to top</div>
          <div>
            <Icon type="up-arrow-icon" />
          </div>
        </div>
      </button>
    </Link>

    <ul className="top-ul">
      <li>Contact Us</li>
      <li>Newsroom</li>
      <li>Careers</li>
      <li>CFPB Ombudsman</li>
    </ul>
    <ul className="social-media-ul">
      <li>
        <Icon type="facebook-icon" />
      </li>
      <li>
        <Icon type="twitter-icon" />
      </li>
      <li>
        <Icon type="linkedin-icon" />
      </li>
      <li>
        <Icon type="youtube-icon" />
      </li>
      <li>
        <Icon type="flickr-icon" />
      </li>
    </ul>
    <ul className="bottom-ul">
      <li>Accessibility</li>
      <li>FOIA</li>
      <li>No FEAR Act</li>
      <li>Open Government</li>
      <li>Plain Writing</li>
      <li>Privacy, Policy & Legal Notices</li>
      <li className="ext-link">
        <div>USA.gov</div>
        <Link to="#" className="Nav_link">
          <div>
            <Icon type="external-link-icon" />
          </div>
        </Link>
      </li>
      <li className="ext-link">
        <div>Office of Inspector General</div>
        <Link to="#">
          <Icon type="external-link-icon" />
        </Link>
      </li>
    </ul>
    <div className="official-website">
      <div>
        <img src={usflag} alt="US Flag"></img>
      </div>
      <div>An Official Website of the United States Government</div>
    </div>
  </div>
);

export default SiteFooter;
