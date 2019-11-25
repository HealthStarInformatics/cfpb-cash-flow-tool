import React from "react";
import { NavLink as Link } from "react-router-dom";

import { Icon } from "../../shared/Icon";
import { Divider } from "../Divider";

import usflag from "../../../assets/us-flag.png";

import "../../../styles/SiteFooter.scss";

export const SiteFooter = () => (
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

    <div className="o-footer_pre">
      <ul className="top-ul">
        <li className="divider">
          <Divider color="dotted" />
        </li>
        <li>Contact Us</li>
        <li className="divider">
          <Divider color="dotted" />
        </li>
        <li>Newsroom</li>
        <li className="divider">
          <Divider color="dotted" />
        </li>
        <li>Careers</li>
        <li className="divider">
          <Divider color="dotted" />
        </li>
        <li>CFPB Ombudsman</li>
        <li className="divider">
          <Divider color="dotted" />
        </li>
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
    </div>
    <div className="o-footer">
      <div className="o-footer-col">
        <ul className="o-footer_list m-list">
          <li className="divider">
            <Divider color="dotted" />
          </li>
          <li>
            <Link to="#">FOIA</Link>
          </li>
          <li className="divider">
            <Divider color="dotted" />
          </li>
          <li>
            <Link to="#">Plain Writing</Link>
          </li>
          <li className="divider">
            <Divider color="dotted" />
          </li>
          <li>
            <Link to="#">Privacy</Link>
          </li>
          <li className="divider">
            <Divider color="dotted" />
          </li>
          <li>
            <Link to="#">Accessibility</Link>
          </li>
          <li className="divider">
            <Divider color="dotted" />
          </li>
          <li>
            <Link to="#">Privacy, Policy & Legal Notices</Link>
          </li>
          <li className="divider">
            <Divider color="dotted" />
          </li>
          <li>
            <Divider color="dotted" />
            <Link to="#">Open Government</Link>
          </li>
          <li className="divider">
            <Divider color="dotted" />
          </li>
          <li>
            <Link to="#">Information Quality Guidelines</Link>
          </li>
        </ul>
      </div>
      <div className="o-footer-col">
        <ul class="o-footer_list m-list">
          <li className="divider">
            <Divider color="dotted" />
          </li>
          <li>
            <Link to="#">Administrative Adjudication</Link>
          </li>
          <li className="divider">
            <Divider color="dotted" />
          </li>
          <li>
            <Link to="#">Accessibility</Link>
          </li>
          <li className="divider">
            <Divider color="dotted" />
          </li>
          <li>
            <Link to="#">Office of Civil Rights</Link>
          </li>
          <li className="divider">
            <Divider color="dotted" />
          </li>
          <li>
            <Link to="#">No FEAR Act Data</Link>
          </li>
          <li className="divider">
            <Divider color="dotted" />
          </li>
          <li>
            <Link to="#">Tribal</Link>
          </li>
        </ul>
      </div>
      <div className="o-footer-col right-col">
        <ul className="o-footer-list m-list">
          <li className="divider">
            <Divider color="dotted" />
          </li>
          <li className="ext-link">
            <Link to="#">
              <div>USA.gov</div>
            </Link>
            <Link to="#">
              <Icon type="external-link-icon" />
            </Link>
          </li>
          <li className="divider">
            <Divider color="dotted" />
          </li>
          <li className="ext-link">
            <Link to="#">
              <div>Office of Inspector General</div>
            </Link>
            <Link to="#" className="icon-link">
              <Icon type="external-link-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="official-website">
      <div>
        <img src={usflag} alt="US Flag"></img>
      </div>
      <div>An Official Website of the United States Government</div>
    </div>
  </div>
);
