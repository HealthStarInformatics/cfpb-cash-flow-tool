import React from "react";

// import img1 from "../../assets/landing-page-hero-img.png";

import "../../css/LandingViewHero.css";

export const LandingViewHero = () => {
  return (
    <section class="m-hero" id="hero1">
      <div class="m-hero_wrapper wrapper">
        <div class="m-hero_text">
          <h1 class="m-hero_heading">myMoney Calendar</h1>
          <p class="m-hero_subhead">
            Adjusting when you pay bills can help you save money, reduce strees,
            and have more money available for what's important to you. This
            calendar will help you visualize your spending and offer strategies
            to help you save.
          </p>
        </div>
        <div class="m-hero_image-wrapper">
          <div class="m-hero_image"></div>
        </div>
      </div>
    </section>
  );
};
