import React from "react";
import { dayString, newDayString } from "../services/dateServices";
import "../styles/Modal.scss";
import Cash from "./Cash/Cash";
import { CashAvailableToday } from "./Cash/CashAvailableToday";
import { CloseModalButton } from "./CloseModalButton";
import { Divider } from "./shared/Divider";

export const DayModal = ({ closeModal, selectedDate = newDayString() }) => (
  <div className="day modal">
    <div className="header section ">
      <CloseModalButton closeModal={closeModal} />
      <div className="title">You've selected:</div>
      <div className="date">{dayString(selectedDate)}</div>
    </div>
    <Divider color="dark" />
    <Cash section="incomes" date={selectedDate} />
    <Divider color="dark" />
    <Cash section="expenses" date={selectedDate} />
    <CashAvailableToday date={selectedDate} />
    <div className="actions section">
      <button className="primary" onClick={closeModal}>
        Done
      </button>
    </div>
  </div>
);
