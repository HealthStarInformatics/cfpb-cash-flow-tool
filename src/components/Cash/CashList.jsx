import React from "react";
import { Divider } from "../shared/Divider";
import { AddCashButton } from "./AddCashButton";
import { CashListEntry } from "./CashListEntry";
import { hasEntries } from "../../services/objectServices";

const CashListEmptyState = () => (
  <p className="empty-state">You haven't added anything yet.</p>
);

const CashListEntries = ({ data, ...setters }) => (
  <>
    {data.map(current => (
      <CashListEntry key={current.id} current={current} {...setters} />
    ))}
    <Divider />
  </>
);

export const CashList = ({ data, editing, addButtonText, ...setters }) => {
  const empty = !hasEntries(data);
  const classname = "cash-list" + (empty ? " empty" : "");

  return (
    <div className={classname}>
      {empty && <CashListEmptyState />}
      {!empty && <CashListEntries data={data} {...setters} />}
      <AddCashButton addButtonText={addButtonText} {...setters} />
    </div>
  );
};
