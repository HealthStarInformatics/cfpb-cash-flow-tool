import React from "react";

import { SiteNavBar } from "../shared/HeadersFooters/SiteNavBar";
import { LandingViewHero } from "./LandingViewHero";
import { GetStarted } from "./GetStarted";
import { PrivacyNotice } from "../shared/HeadersFooters/PrivacyNotice";
import { ContentSideBar } from "../shared/HeadersFooters/ContentSideBar";
import { SiteFooter } from "../shared/HeadersFooters/SiteFooter";

import "../../styles/LandingView.scss";

// Landing View
export const LandingView = () => (
  <section className="landing">
    <SiteNavBar />
    <LandingViewHero />
    <div className="wrapper-content-wrapper">
      <GetStarted />
      <ContentSideBar />
    </div>
    <PrivacyNotice />
    <SiteFooter />
  </section>
);
