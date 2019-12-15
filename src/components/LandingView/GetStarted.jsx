import React from "react";

import LinkButton from "../shared/LinkButton";
import "../../css/ContentMain.css";

export const ContentMain = () => {
  return (
    <div className="getstarted-wrapper">
      <LinkButton className="get-started-button" to="/month">
        Get Started
      </LinkButton>{" "}
    </div>
  );
};
