import React from "react";

import StartingBalanceModal from "./StartingBalanceModal";
import ActionLink from "./ActionLink";
import Icon from "./Icon";

import "../styles/CurrentMonthViewHeader.scss";

const CurrentMonthViewHeaderVerbage = ({ modalvisible, setModalvisible }) => {
  const changeModal = () => {
    setModalvisible(!modalvisible);
  };

  return (
    <>
      {!modalvisible ? (
        <div className="current-month-view-header-wrapper">
          <p className="subtitle">Your starting balance</p>
          <div className="description">
            This is the cash you have available at the start of the month.
            Estimates are ok.{" "}
            <div className="Nav-link underline" onClick={changeModal}>
              Help me calculate
            </div>
          </div>
          <div className="starting-balance-input">
            <div className="starting-balance">
              <div className="dollar-sign-icon-wrapper">
                <Icon type="dollar-sign-icon" />
              </div>
              <div className="starting-balance-value">500</div>
            </div>
            <div className="edit-btn">
              <ActionLink text="Edit" icon="pencil-edit-icon" />
            </div>
          </div>
        </div>
      ) : (
        <StartingBalanceModal closemodal={changeModal} />
      )}
    </>
  );
};

export default CurrentMonthViewHeaderVerbage;
