import React from "react";

import { GlobalEyebrow } from "../shared/HeadersFooters/GlobalEyebrow";
import { SiteNavBar } from "../shared/HeadersFooters/SiteNavBar";
import { LandingViewHero } from "./LandingViewHero";
import { ContentWrapper } from "./ContentWrapper";
import { PrivacyNotice } from "../shared/HeadersFooters/PrivacyNotice";
import { SiteFooter } from "../shared/HeadersFooters/SiteFooter";

import "../../styles/LandingView.scss";

// Landing View
export const LandingView = () => (
  <section className="landing">
    <div className="desktop-view">
      <GlobalEyebrow view="desktop" />
    </div>

    <SiteNavBar />
    <LandingViewHero />
    <ContentWrapper />
    <PrivacyNotice />
    <SiteFooter />
    <div className="mobile-view">
      <GlobalEyebrow view="mobile" />
    </div>
  </section>
);
