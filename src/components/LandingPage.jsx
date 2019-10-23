import React from "react";

import LandingPageHeader from "./LandingPageHeader";
import LandingPageHero from "./LandingPageHero";
import PrivacyNotice from "./PrivacyNotice";
import SiteFooter from "./SiteFooter";

import "../styles/LandingPage.scss";

export const LandingPage = () => (
  <section id="landing">
    <LandingPageHeader />
    <LandingPageHero />
    <PrivacyNotice />
    <SiteFooter />
  </section>
);
