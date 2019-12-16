import React from "react";
// import { ReactComponent as DollarIcon } from "../../../assets/dollar-icon.svg";
// import { ReactComponent as MinusIcon } from "../../../assets/minus-icon.svg";

import { Icon } from "../../shared/Icon";

/**
 * Displays what the Calendar symbols mean
 * @param {Any} show A flag to display or hide the Calendar Key
 */
export const CalendarKey = ({ show }) => {
  if (!show) return null;

  return (
    <div className="calendar-key">
      <div className="item cash">
        <span>
          <Icon type="dollar-sign-icon" />
        </span>
        <div>Available cash</div>
      </div>
      <div className="item nocash">
        <span>
          <Icon type="minus-sign-icon" />
        </span>
        <div>No available cash</div>
      </div>
      <div className="item has-entries">
        <div className="dots">•••••</div>
        <div>Has entries</div>
      </div>
    </div>
  );
};
