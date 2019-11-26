import React from "react";
import { Link } from "react-router-dom";

import LinkButton from "../shared/LinkButton";
import img1 from "../../assets/featured-content-img.png";
import "../../styles/ContentMain.scss";

export const ContentMain = () => {
  return (
    <div className="content-main-wrapper">
      <section className="featured-content-module">
        <div className="featured-content-module_text">
          <h2>Title of the featured content block</h2>
          <div className="featured-content-module_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="featured-content-module_link">
            <Link to="/month">Get Started</Link>
          </div>
        </div>
        <div className="featured-content-module_visual">
          <img
            className="featured-content-module_img"
            src={img1}
            alt="lasdkjf;a"
          />
        </div>
      </section>
    </div>
  );
};
