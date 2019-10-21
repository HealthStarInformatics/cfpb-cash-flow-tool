import React, { useState } from "react";
import { cashConfig } from "../../config/cashConfig";
import { CashEditAmount } from "./CashEditAmount";
import { CashEditName } from "./CashEditName";
import { CashEditType } from "./CashEditType";
import { LabeledCheckbox } from "../shared/LabeledCheckbox";

export const CashEdit = ({ current, section, setEditing, setState }) => {
  const [type, setType] = useState(current.type);
  const [name, setName] = useState(current.name || "");
  const [amount, setAmount] = useState(current.amount || "");
  const [recurring, setRecurring] = useState(current.recurring || false);

  const config = cashConfig[section];

  const saveEntry = e => {
    e.preventDefault();
    setState(prevState => {
      const thisId = current.id || Date.now();
      setEditing(false);
      return {
        [section]: {
          ...prevState[section],
          [thisId]: {
            id: thisId,
            date: current.date,
            type,
            name,
            amount,
            recurring
          }
        }
      };
    });
  };

  const deleteEntry = e => {
    e.preventDefault();
    setState(prevState => {
      setEditing(false);
      const newData = prevState[section];
      delete newData[current.id];
      return {
        [section]: { ...newData }
      };
    });
  };

  return (
    <form className="cash-edit" onSubmit={saveEntry}>
      <CashEditType type={type} setType={setType} config={config} />

      {type && <CashEditName name={name} setName={setName} config={config} />}
      {type && <CashEditAmount amount={amount} setAmount={setAmount} />}
      {type && (
        <LabeledCheckbox
          id="recurring"
          checked={recurring}
          update={setRecurring}
          label={`Recurring ${config.type}`}
          cname="modal-input"
        />
      )}

      {type && (
        <div className="form-actions">
          <button className="primary" type="submit">
            Save this {config.type}
          </button>
          <button className="secondary" onClick={deleteEntry}>
            Delete this {config.type}
          </button>
        </div>
      )}
    </form>
  );
};
