import React from "react";

import { ContentMain } from "../../components/LandingView/ContentMain";
import { ContentSideBar } from "../shared/HeadersFooters/ContentSideBar";
import "../../styles/ContentWrapper.scss";

export const ContentWrapper = () => {
  return (
    <div className="content-wrapper">
      <div className="body-component">
        <div className="content-main">
          <ContentMain />
        </div>
        <div className="content-sidebar">
          <ContentSideBar />
        </div>
      </div>
    </div>
  );
};
