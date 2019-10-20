import React from "react";

import LandingPageHeader from './LandingPageHeader';
import LandingPageHero from './LandingPageHero';
import PrivacyNotice from './PrivacyNotice';
import SiteFooter from './SiteFooter';

import '../styles/LandingPage.scss';

export const LandingPage = () => (
    <section id="landing">

 {/*<a class="a-link a-link__icon" href="#">
    <span class="a-link_text">Download the info sheet</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.5 1200" class="cf-icon-svg"><path d="M65 370.5h654.5c35.9 0 65-29.1 65-65s-29.1-65-65-65H65c-35.9 0-65 29.1-65 65s29.1 65 65 65zM719.5 515H65c-35.9 0-65 29.1-65 65s29.1 65 65 65h654.5c35.9 0 65-29.1 65-65s-29.1-65-65-65zM719.5 789.4H65c-35.9 0-65 29.1-65 65s29.1 65 65 65h654.5c35.9 0 65-29.1 65-65s-29.1-65-65-65z"/></svg>
    </a> */}
        <LandingPageHeader />
        <LandingPageHero />
        <PrivacyNotice />
        <SiteFooter />
    </section>
);
        
