import React, { useState, useContext } from "react";

import { AppContext } from "../../App";
import "../../styles/Modal.scss";

import { CloseModalButton } from "../CloseModalButton";
import { LabeledMoneyInput } from "./LabeledMoneyInput";

const StartingBalanceModal = ({ closeModal, setStartingBal }) => {
  const { monthlyData, selectedMonth, setState } = useContext(AppContext);
  const [checkingAmt, setCheckingAmt] = useState(
    monthlyData[selectedMonth.label].startingBalance.checking
  );
  const [prepaidAmt, setPrepaidAmt] = useState(
    monthlyData[selectedMonth.label].startingBalance.prepaid
  );
  const [otherAmt, setOtherAmt] = useState(
    monthlyData[selectedMonth.label].startingBalance.other
  );

  const saveEntry = e => {
    e.preventDefault();

    const totalAmt = checkingAmt + prepaidAmt + otherAmt;
    setStartingBal(totalAmt);

    setState(previousState => ({
      monthlyData: {
        ...previousState.monthlyData,
        [selectedMonth.label]: {
          ...previousState.monthlyData[selectedMonth.label],
          startingBalance: {
            ...previousState.monthlyData[selectedMonth.label].startingBalance,
            total: totalAmt,
            checking: checkingAmt,
            prepaid: prepaidAmt,
            other: otherAmt,
            startDay: 1
          }
        }
      }
    }));

    closeModal();
  };

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="header section">
          <CloseModalButton closeModal={closeModal} />

          <p className="large-title">Let's calculate your starting balance</p>
          <p className="description">
            This is calculated by adding your checking account(s), prepaid
            cards, and any other money you can use for expenses.
          </p>
          <form className="starting-balance-edit" onSubmit={saveEntry}>
            <LabeledMoneyInput
              type="Checking account(s)"
              id="checkingAmt"
              autoFocus="autofocus"
              desc=""
              amount={checkingAmt}
              setAmount={setCheckingAmt}
            />
            <LabeledMoneyInput
              type="Prepaid Card(s)"
              id="prepaidAmt"
              desc=""
              amount={prepaidAmt}
              setAmount={setPrepaidAmt}
            />
            <LabeledMoneyInput
              id="otheramt"
              desc="Enter any additional money you have available, like cash."
              amount={otherAmt}
              setAmount={setOtherAmt}
            />
            <div className="button-list form-actions">
              <button className="primary" type="submit">
                Add starting balance
              </button>
              <button className="secondary" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StartingBalanceModal;
