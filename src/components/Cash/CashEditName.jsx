import React from "react";
import { capitalize } from "../../services/stringServices";

export const CashEditName = ({ config, name, setName }) => (
  <div className="name modal-input">
    <label htmlFor="name">{capitalize(config.type)} name</label>
    <p className="description">
      Giving your {config.type} a name will help you identify it from other
      similar {config.type}s.
    </p>
    <input
      type="text"
      id="name"
      placeholder={config.namePlaceholder}
      onChange={e => setName(e.target.value)}
      value={name}
    />
  </div>
);
