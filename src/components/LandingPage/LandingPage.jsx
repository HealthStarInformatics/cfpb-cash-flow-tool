import React from "react";

import LandingPageHeader from "./LandingPageHeader";
import LandingPageHero from "./LandingPageHero";
import PrivacyNotice from "../shared/PrivacyNotice";
import SiteFooter from "../shared/SiteFooter";

import "../../styles/LandingPage.scss";

export const LandingPage = () => (
  <section id="landing">
    <LandingPageHeader />
    <LandingPageHero />
    <PrivacyNotice />
    <SiteFooter />
  </section>
);
