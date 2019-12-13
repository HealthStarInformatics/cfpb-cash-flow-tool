import React from "react";
import { Link } from "react-router-dom";

import search from "../../../assets/noun_Magnifying Glass_89626.png";
import { Icon } from "../Icon";

import "../../../styles/Search.scss";

export const Search = () => (
  <>
    <div className="search-mobile">
      <div className="image search-wrapper">
        <div className="search-icon-wrapper">
          <img
            className="image search-icon"
            src={search}
            alt="search magnifying glass"
          ></img>
        </div>
        <div className="search-icon-text">Search</div>
        <div className="submit-complaint-wrapper">
          <Link>
            <span>
              <Icon type="complaint-icon" />
            </span>
            <span>Submit a Complaint</span>
          </Link>
        </div>
      </div>
    </div>

    <div className="search-desktop">
      <div className="image image-container-search">
        <div className="search-icon-wrapper">
          <img
            className="image search-icon"
            src={search}
            alt="search magnifying glass"
          ></img>
        </div>
        <div className="search-icon-text">Search</div>
      </div>
      <div className="global-search_content-desktop">
        <div className="form__input-w-btn">
          <form
            className="global-search_content-form"
            action="https://search.consumerfinance.gov/search"
            method="get"
          >
            <div className="input-w-btn-input">
              <div className="form__input-w-btn_input-container">
                <div className="input-w-btn-image">
                  <img
                    className="image search-icon"
                    src={search}
                    alt="search magnifying glass"
                  ></img>
                </div>
                <div class="btn-inside-input input-contains-label">
                  <input
                    id="global-search_query"
                    name="query"
                    type="text"
                    title="Search the CFPB"
                    className="a-text-input"
                    placeholder="Search the CFPB"
                  />
                </div>
              </div>
              <div className="form__input-w-btn_btn-container">
                <button className="a-btn">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
);
