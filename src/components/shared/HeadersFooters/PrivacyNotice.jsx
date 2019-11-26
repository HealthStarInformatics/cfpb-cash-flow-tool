import React from "react";
import { NavLink as Link } from "react-router-dom";

import { Icon } from "../../shared/Icon";

import "../../../styles/PrivacyNotice.scss";

export const PrivacyNotice = () => (
  <div className="privacy-notice-wrapper">
    <div className="save-work-info">
      <div>
        <div>
          <Icon type="exclamation-point" />
        </div>
        <div>Saving your work</div>
      </div>
      <p>
        As long as you are using this device and browser, your work is saved for
        use next time.
      </p>
      <p>
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
