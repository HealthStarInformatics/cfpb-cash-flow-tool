import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { cashConfig } from "../../config/cashConfig";
// import { filterByDate } from "../../services/objectServices";
import "../../styles/Cash.scss";
import { CashEdit } from "./CashEdit";
import { CashHeader } from "./CashHeader";
import { CashList } from "./CashList";

/**
 * CashIn/CashOut
 * @param {String} section incomes/expenses
 * @param {Date} date selected date
 */
export const Cash = ({ section = "incomes", date, data, setState }) => {
  const [editing, setEditing] = useState(false);
  const [selected, setSelected] = useState({});
  const { selectedMonth } = useContext(AppContext);

  if (!selectedMonth) return null;

  const config = cashConfig[section];

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
          data={data}
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
          data={data}
          setEditing={setEditing}
          section={section}
          selectedMonth={selectedMonth}
        />
      )}
    </div>
  );
};

export default Cash;
