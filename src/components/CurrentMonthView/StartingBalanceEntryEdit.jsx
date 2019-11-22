import React from "react";
import { formatCurrency, toCents } from "../../services/currencyServices";

import Icon from "../shared/Icon";

import "../../styles/CurrentMonthViewHeader.scss";

const StartingBalanceEntryEdit = ({
  startingBal,
  setStartingBal,
  startingBalanceTotal,
  editing,
  setEditing,
  setState,
  month,
  changeModal
}) => {
  const handleSave = startingBal => {
    setState(previousState => ({
      monthlyData: {
        ...previousState.monthlyData,
        [month]: {
          ...previousState.monthlyData[month],
          startingBalance: {
            ...previousState.monthlyData[month].startingBalance,
            total: startingBal,
            startDay: 1,
            checking: 0,
            prepaid: 0,
            other: 0
          }
        }
      }
    }));

    setEditing(false);
  };

  return (
    <div className="input">
      <form className="row" onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          className="amount"
          autoFocus="autofocus"
          onFocus={e => e.target.select()}
          onChange={e => handleSave(toCents(e.target.value))}
          value={formatCurrency(startingBalanceTotal)}
        />
        <div className="action-link" onClick={e => changeModal(e)}>
          <span>edit</span>
          <span>
            <Icon type="pencil-edit-icon" />
          </span>
        </div>
      </form>
    </div>
  );
};

export default StartingBalanceEntryEdit;
