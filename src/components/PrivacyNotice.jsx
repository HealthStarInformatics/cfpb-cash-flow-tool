import React from "react";
import { NavLink as Link } from "react-router-dom";
import { ReactComponent as ExclamationPointIcon } from "../assets/exclamation-point.svg";

import "../styles/PrivacyNotice.scss";

const PrivacyNotice = () => (
  <div className="privacy-notice-wrapper">
    <div className="save-work-info">
      <div>
        <div>
          <ExclamationPointIcon className="exclamation-point" />
        </div>
        <div>How to save your work</div>
      </div>
      <p>
        This tool uses cookies to <strong>temporarily</strong> save your work.
        You need to use the same device and browser to see work you've already
        completed.{" "}
        <Link to="#" className="Nav_link">
          Learn how to save a permanent copy of your work.
        </Link>
      </p>
    </div>
    <div className="privacy-statement">
      <div>Privacy Statement</div>
      <p>
        We take protecting your personal digital privacy seriously.
        <Link to="#" className="Nav_link">
          Visit our Privacy, Policy & Legal Notices page.
        </Link>
      </p>
    </div>
  </div>
);

export default PrivacyNotice;
