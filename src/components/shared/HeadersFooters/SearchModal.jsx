import React from "react";
// import { Link } from "react-router-dom";

import search from "../../../assets/noun_Magnifying Glass_89626.png";
// import { Icon } from "../Icon";

import "../../../styles/SearchModal.scss";

export const SearchModal = closeModal => (
  <>
    <div
      className="global-search"
      data-js-hook="behavior_flyout-menu state_atomic_init"
    >
      <div
        className="global-search_content u-move-transition u-move-to-origin"
        data-js-hook="behaviro_flyout-menu_content"
        aria-expanded="true"
        role="search"
      >
        <form
          className="global-search_content-form"
          action="https://search.consumerfinance.gov/search"
          method="get"
        >
          <div className="o-form__input-w-btn">
            <div className="o-form__input-w-btn_input-container">
              <div className="btn-inside-input input-contains label">
                <img
                  className="image search-icon"
                  src={search}
                  alt="search magnifying glass"
                ></img>

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
            <div className="o-form__input-w-btn_btn-container">
              <button className="a-btn">Search</button>
            </div>
          </div>
        </form>
      </div>
      <div className="global-search_content-suggestions">
        <p className="h5">Suggested search terms:</p>
        <ul clasName="m-list m-list__horizontal">
          <li className="m-list_item">
            <a
              class="m-list_link"
              href="https://search.consumerfinance.gov/search?utf8=%E2%9C%93&affiliate=cfpb&query=regulations"
            >
              Regulations
            </a>
          </li>
          <li className="m-list_item">
            <a
              class="m-list_link"
              href="https://search.consumerfinance.gov/search?utf8=%E2%9C%93&affiliate=cfpb&query=compliance+guides"
            >
              Compliance Guides
            </a>
          </li>
          <li className="m-list_item">
            <a
              class="m-list_link"
              href="https://search.consumerfinance.gov/search?utf8=%E2%9C%93&affiliate=cfpb&query=mortgage"
            >
              Mortgage
            </a>
          </li>
          <li className="m-list_item">
            <a
              class="m-list_link"
              href="https://search.consumerfinance.gov/search?utf8=%E2%9C%93&affiliate=cfpb&query=college+loans"
            >
              College loans
            </a>
          </li>
        </ul>
      </div>
    </div>
  </>
);
