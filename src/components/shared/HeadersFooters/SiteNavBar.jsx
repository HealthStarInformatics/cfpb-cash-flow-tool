import React, { useState } from "react";

import logo from "../../../assets/cfpb-logo.png";

import { SearchModal } from "./SearchModal";
import { Icon } from "../Icon";
import { Search } from "./Search";

// import "../../../css/Icon.css";
// import "../../../styles/SiteNavBar.scss";

export const SiteNavBar = () => {
  const [searchModalVisible, setSearchModalVisible] = useState(true);

  const changeModal = () => {
    setSearchModalVisible(!searchModalVisible);
  };

  return (
    <div className="sitenavbar-wrapper">
      <div className="sitenavbar-mobile">
        <div className="sitebar-logo-wrapper">
          <div className="image image-container-menu">
            <span>
              <Icon type="menu-icon" />
            </span>
          </div>
          <div className="image image-container-logo">
            <img
              className="image cf-logo-small"
              src={logo}
              alt="CFPB small logo"
            ></img>
          </div>
        </div>
        <div className="sitebar-search-wrapper">
          <Search />
        </div>
      </div>
      <div>
        {searchModalVisible && <SearchModal closeModal={changeModal} />}
      </div>
    </div>
  );
};
