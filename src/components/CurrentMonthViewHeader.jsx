import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as DollarSignIcon } from "../assets/dollar-sign.svg";
import { ReactComponent as PencilEditIcon } from "../assets/pencil-edit.svg";

const CurrentMonthViewHeader = () => (
  <div>
    <p className="page-subtitle">Your starting balance</p>
    <p className="description">
      This is the cash you have available at the start of the month. Estimates
      are ok.{" "}
      <Link to="#" className="Nav-link">
        Help me calculate
      </Link>
    </p>
    <div className="starting-balance-input">
      <div className="starting-balance">
        <div className="dollar-sign-icon-wrapper">
          <DollarSignIcon className="dollar-sign-icon" />
        </div>
        <div className="starting-balance-value">500</div>
      </div>
      <div className="edit-btn">
        <div>
          <Link to="/" className="Nav_link">
            Edit
          </Link>
        </div>
        <div>
          <PencilEditIcon className="pencil-edit-icon" />
        </div>
      </div>
    </div>
  </div>
);

export default CurrentMonthViewHeader;
