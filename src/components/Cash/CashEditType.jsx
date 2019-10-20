import React from "react";
import { capitalize } from "../../services/stringServices";
import Select from "react-select";

export const CashEditType = ({ config, type, setType }) => (
  <div className="type modal-input">
    <label htmlFor="type">{capitalize(config.type)} type</label>
    <Select
      value={type}
      onChange={setType}
      placeholder={`Select ${config.type} type`}
      options={config.typeOptions}
    />
  </div>
);
