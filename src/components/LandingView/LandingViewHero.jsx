import React from "react";

import img1 from "../../assets/landing-page-hero-img.png";

import "../../css/LandingViewHero.css";

export const LandingViewHero = () => {
  return (
    <div className="landing-view-hero-wrapper">
      <div className="component-body">
        <div className="hero_heading-wrapper">
          <h1 className="hero-heading">myMoney Calendar</h1>
          <p className="hero_subhead">
            Adjusting when you pay bills can help you save money, reduce strees,
            and have more money available for what's important to you. This
            calendar will help you visualize your spending and offer strategies
            to help you save.
          </p>
        </div>

        <div className="hero_image-wrapper">
          <div className="hero-image">
            <img src={img1} alt="calendar"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
