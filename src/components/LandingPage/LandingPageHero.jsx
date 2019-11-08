import React from "react";
import { Link } from "react-router-dom";

import img1 from "../../assets/landing-page-hero-img.png";

import "../../styles/LandingPageHero.scss";

const LandingPageHero = () => {
  return (
    <div className="landing-page-hero-wrapper">
      <p className="tools-title">money tools</p>
      <p className="page-title">myMoney Calendar</p>
      <p className="description">
        Adjusting when you pay bills can help you save money, reduce strees, and
        have more money available for what's important to you. This calendar
        will help you visualize your spending and offer strategies to help you
        save.
      </p>
      <div className="lphero-img">
        <img className="hero-image" src={img1} alt="calendar"></img>
      </div>
      <Link to="/month">
        <button className="lp-btn primary">Get started </button>
      </Link>
    </div>
  );
};

export default LandingPageHero;
