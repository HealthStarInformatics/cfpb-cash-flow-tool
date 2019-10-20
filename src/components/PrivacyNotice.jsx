import React from "react";
import { NavLink as Link } from 'react-router-dom';

import '../styles/PrivacyNotice.scss'; 

const PrivacyNotice = () => (
    <div className="privacy-notice-wrapper">
        <div className="save-work-info">
            <div>
                <div>
                    <svg aria-labelledby="title" width="20" height="20" fill="#ff9e1b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200">
                        <title id="title" lang="en">alert circle</title>
                            <path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm-49.7 234.6c0-27.6 22.4-50 50-50s50 22.4 50 50v328.6c0 27.6-22.4 50-50 50s-50-22.4-50-50V339.8zm50 582.5c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7S572 811 572 850.6s-32.1 71.7-71.7 71.7z"/>
                    </svg>
                </div>
                <div>
                    How to save your work
                </div>
            </div>
            <p>This tool uses cookies to <strong>temporarily</strong> save your work.
                You need to use the same device and browser to see work
                you've already completed.  <Link to="#" className="Nav_link">Learn how to save a permanent
                copy of your work.</Link>
            </p>
        </div>
        <div className="privacy-statement">
            <div>
                    Privacy Statement
            </div>
            <p>We take protecting your personal digital privacy seriously.  
                <Link to="#" className="Nav_link">Visit our Privacy, Policy & Legal Notices page.</Link>
            </p>
        </div>


    </div>
);

export default PrivacyNotice;
