import React from "react";

import "../styles/CurrentMonthViewHeader.scss";

const StartingBalanceModal = (props) => (
  <div className="starting-balance-modal-wrapper">
    <div>
        <div className="modal-desc underline" onClick={props.closemodal}>Close Modal</div>
      This is the where the StartingBalanceModal will be.
    </div>
  </div>
);

export default StartingBalanceModal;
