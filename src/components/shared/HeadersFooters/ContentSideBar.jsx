import React from "react";
import { NavLink as Link } from "react-router-dom";

import { Icon } from "../../shared/Icon";
import { Divider } from "../Divider";

import "../../../styles/ContentSideBar.scss";

export const ContentSideBar = () => (
  <div className="content-side-bar-wrapper">
    <div>
      <h3>About us</h3>
      <p>
        We're the Consumer Financial Protection Bureau (CFPB), a U.S. government
        agency that makes sure banks, lenders, and other financial companies
        treat you fairly.
      </p>
      <p>Learn how the CFPB can help you</p>
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
        <h2 className="a-heading">LATEST BLOG POSTS</h2>
      </header>

      <div>
        <p>We’re working to better serve people through financial coaching</p>
        <p>AUG 17, 2017</p>
      </div>

      <div>
        <p>
          Effective financial education: Five principles and how to use them
        </p>
        <p>JUN 14, 2017</p>
      </div>

      <div></div>
      <h2>Four elements define personal financial well - being</h2>
      <p>JAN 27, 2015</p>
    </div>
    <div className="block">
      <header className="m-slug-header">
        <h2 className="a-heading">LEGAL DISCLAIMER</h2>
      </header>
      <p>
        The content on this page provides general consumer information.It is not
        legal advice or regulatory guidance.The CFPB updates this information
        periodically.This information may include links or references to third -
        party resources or content.We do not endorse the third - party or
        guarantee the accuracy of this third - party information.There may be
        other resources that also serve your needs.
      </p>
    </div>
  </div>
);
