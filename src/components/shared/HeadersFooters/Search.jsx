import React from "react";
import { Link } from "react-router-dom";

import { Icon } from "../Icon";

// import "../../../styles/Search.scss";

export const Search = () => (
  <>
    <div className="search-mobile">
      <div className="image search-wrapper">
        <div className="search-icon-wrapper">
          <Link>
            <span>
              <Icon type="search-icon" />
            </span>
          </Link>
        </div>
        <div className="search-icon-text">Search</div>
        <div className="submit-complaint-wrapper">
          <Link>
            <span>
              <Icon type="complaint-icon" />
            </span>
            <span>Submit a Complaint</span>
          </Link>
        </div>
      </div>
    </div>
  </>
);
