import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { cashConfig } from "../../config/cashConfig";
import { filterByDate } from "../../services/objectServices";
import "../../styles/Cash.scss";
import { CashEdit } from "./CashEdit";
import { CashHeader } from "./CashHeader";
import { CashList } from "./CashList";

/**
 * CashIn/CashOut
 * @param {String} section incomes/expenses
 * @param {Date} date selected date
 */
export const Cash = ({ section = "incomes", date }) => {
  const [editing, setEditing] = useState(false);
  const [selected, setSelected] = useState({});
  const { incomes, expenses, setState } = useContext(AppContext);

  const config = cashConfig[section];
  const data = section === "incomes" ? incomes : expenses;

  return (
    <div className="cash-section">
      <CashHeader
        editing={editing}
        setEditing={setEditing}
        icon={config.icon}
        title={config.title}
      />

      {!editing && (
        <CashList
          data={filterByDate(data, date)}
          setEditing={setEditing}
          setSelected={setSelected}
          addButtonText={config.addButtonText}
          section={section}
          date={date}
        />
      )}

      {editing && (
        <CashEdit
          current={selected}
          setState={setState}
          setEditing={setEditing}
          section={section}
        />
      )}
    </div>
  );
};

export default Cash;
