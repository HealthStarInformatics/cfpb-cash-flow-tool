import React from "react";

import img1 from "../../assets/landing-page-hero-img.png";

import "../../styles/LandingViewHero.scss";

export const LandingViewHero = () => {
  return (
    <div className="landing-page-hero-wrapper">
      <h2>myMoney Calendar</h2>
      <p>
        Adjusting when you pay bills can help you save money, reduce strees, and
        have more money available for what's important to you. This calendar
        will help you visualize your spending and offer strategies to help you
        save.
      </p>
      <div className="lphero-img">
        <img className="hero-image" src={img1} alt="calendar"></img>
      </div>
    </div>
  );
};
