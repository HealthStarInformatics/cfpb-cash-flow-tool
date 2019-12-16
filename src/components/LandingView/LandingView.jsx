import React from "react";

import { SiteNavBar } from "../shared/HeadersFooters/SiteNavBar";
import { LandingViewHero } from "./LandingViewHero";
import { ContentWrapper } from "./ContentWrapper";
import { PrivacyNotice } from "../shared/HeadersFooters/PrivacyNotice";
import { SiteFooter } from "../shared/HeadersFooters/SiteFooter";

// import "../../css/LandingView.css";

// Landing View
export const LandingView = () => (
  <section className="landing">
    <SiteNavBar />
    <LandingViewHero />
    <ContentWrapper />
    <PrivacyNotice />
    <SiteFooter />
  </section>
);
