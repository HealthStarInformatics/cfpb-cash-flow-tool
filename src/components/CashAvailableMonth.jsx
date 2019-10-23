import React from "react";
import { ReactComponent as DollarSign } from "../assets/dollar-sign.svg";

const CashAvailableMonth = () => (
  <div className="cash-available-month-wrapper">
    <div className="page-subtotal">Total Available Cash</div>
    <div className="total-available-cash-value-wrapper">
      <div className="dollar-sign-icon-wrapper">
        <DollarSign className="dollar-sign-icon" />
      </div>
      <div className="total-value">0</div>
    </div>
  </div>
);

export default CashAvailableMonth;
