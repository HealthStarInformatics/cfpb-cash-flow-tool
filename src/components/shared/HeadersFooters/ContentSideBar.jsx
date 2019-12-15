import React from "react";
import { Link } from "react-router-dom";

// import "../../../styles/ContentSideBar.scss";

export const ContentSideBar = () => (
  <div className="content-side-bar-wrapper">
    <div>
      <h3>About us</h3>
      <p>
        We're the Consumer Financial Protection Bureau (CFPB), a U.S. government
        agency that makes sure banks, lenders, and other financial companies
        treat you fairly.
      </p>
      <Link to="/about-us/the-bureau/">Learn how the CFPB can help you</Link>
    </div>
    <div className="block">
      <header className="m-slug-header">
        <h2 className="a-heading">STILL HAVE A QUESTION?</h2>
      </header>

      <p>Call us if you still can't find what you're looking for.</p>
      <p>(855) 411-2372)</p>
      <p>TTY/TDD: (855) 729-2372</p>
    </div>
    <div className="block">
      <header className="m-slug-header">
        <h2 className="a-heading">HOW THE CFPB IS PROTECTING YOU</h2>
      </header>

      <Link to="/about-us/blog/easy-remember/guidelines/help-people-reduce-credit-card-debt/">
        Easy-to-remember guidelines help people reduce credit card debt
      </Link>
    </div>
    <div className="block">
      <header className="m-slug-header">
        <h2 className="a-heading">PRINT RESOURCES</h2>
      </header>
      <ul>
        <li>
          <Link to="/about-us/blog/easy-remember/guidelines/help-people-reduce-credit-card-debt/">
            My credit spending rules to live by
          </Link>
        </li>
        <li>
          <Link to="/about-us/blog/easy-remember/guidelines/help-people-reduce-credit-card-debt/">
            How to find the best credit card
          </Link>
        </li>
        <li>
          <Link to="/about-us/blog/easy-remember/guidelines/help-people-reduce-credit-card-debt/">
            How to find mistabkes in your credit card bill
          </Link>
        </li>
      </ul>
    </div>
  </div>
);
