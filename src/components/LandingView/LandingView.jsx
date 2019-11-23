import React from "react";

import { SiteNavBar } from "../shared/HeadersFooters/SiteNavBar";
import { LandingViewHero } from "./LandingViewHero";
import { GetStarted } from "./GetStarted";
import { PrivacyNotice } from "../shared/HeadersFooters/PrivacyNotice";
import { SiteFooter } from "../shared/HeadersFooters/SiteFooter";

import "../../styles/LandingView.scss";

export const LandingView = () => (
  <section id="landing">
    <SiteNavBar />
    <LandingViewHero />
    <GetStarted />
    <PrivacyNotice />
    <SiteFooter />
  </section>
);
