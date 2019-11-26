import React from "react";
import { NavLink as Link } from "react-router-dom";

import usflag from "../../../assets/us-flag.png";

import "../../../styles/GlobalEyebrow.scss";

export const GlobalEyebrow = () => (
  <div className="global-eyebrow-wrapper">
    <div className="component-body">
      <div className="official-website">
        <ul className="eyebrow-list">
          <li className="m-list_item">
            <img src={usflag} alt="US Flag"></img>
          </li>

          <li className="m-list_item a-tagline">
            An official website of the United States government
          </li>
        </ul>
      </div>
      <div className="white-space"></div>

      <div className="global-eyebrow_actions language-list">
        <ul className="eyebrow-list">
          <li className="m-list_item">
            <Link className="eyebrow-item" to="/es/" hreflang="es" lang="es">
              Espanol
            </Link>
          </li>

          <li class="m-list_item">
            <Link
              className="eyebrow-item"
              to="/language/zh/"
              hreflang="zh"
              lang="zh"
            >
              ZH
            </Link>
          </li>

          <li class="m-list_item">
            <Link
              className="eyebrow-item"
              to="/language/vi/"
              hreflang="vi"
              lang="vi"
            >
              Tieng Viet
            </Link>
          </li>

          <li class="m-list_item">
            <Link
              className="eyebrow-item"
              to="/language/ko/"
              hreflang="ko"
              lang="ko"
            >
              KO
            </Link>
          </li>

          <li class="m-list_item">
            <Link
              className="eyebrow-item"
              to="/language/tl/"
              hreflang="tl"
              lang="tl"
            >
              Tagalog
            </Link>
          </li>

          <li class="m-list_item">
            <Link
              className="eyebrow-item"
              to="/language/ru/"
              hreflang="ru"
              lang="ru"
            >
              RU
            </Link>
          </li>

          <li class="m-list_item">
            <Link
              className="eyebrow-item"
              to="/language/ar/"
              hreflang="ar"
              lang="ar"
            >
              AR
            </Link>
          </li>
          <li class="m-list_item">
            <Link
              className="eyebrow-item"
              to="/language/aht/"
              hreflang="ht"
              lang="ht"
            >
              Kreyol Ayisyen
            </Link>
          </li>
          <li class="m-list_item phone">
            <Link className="eyebrow-item" to="tel:+1-855-411-2372">
              (855) 411-2372
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
