import React from "react";

import LinkButton from "../shared/LinkButton";
import "../../styles/GetStarted.scss";

export const GetStarted = () => {
  return (
    <div className="getstarted-wrapper">
      <LinkButton className="get-started-button" to="/month">
        Get Started
      </LinkButton>{" "}
    </div>
  );
};
