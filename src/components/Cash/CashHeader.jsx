import React from "react";
import { Icon } from "../shared/Icon";

export const CashHeader = ({ icon, title, editing, setEditing }) => (
  <div className="cash-header">
    <div className="cash-title">
      <img src={icon} alt="cash flow arrow" />
      <span>{title}</span>
    </div>
    {editing && (
      <div className="text-button" onClick={() => setEditing(false)}>
        <span>Cancel</span>
        <span>
          <Icon type="close-icon" />
        </span>
      </div>
    )}
  </div>
);

CashHeader.defaultProps = {
  icon: "",
  title: "",
  editing: false,
  setEditing: null
};
