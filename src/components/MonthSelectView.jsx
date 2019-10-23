import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { AppContext } from "../App";
import headerImg from "../assets/month-select-header.png";
import { generateMonthOptions } from "../services/dateServices";
import "../styles/View.scss";
import { Divider } from "./shared/Divider";
import { ViewHeader } from "./ViewHeader";

import SiteFooter from "./SiteFooter";
import PrivacyNotice from "./PrivacyNotice";

export const MonthSelectView = () => {
  const { selectedMonth, setState } = useContext(AppContext);

  return (
    <div>
      <div className="view month">
        <ViewHeader
          image={headerImg}
          imgAltText="empty calendar"
          title="Start by selecting a month."
        />
        <Select
          value={selectedMonth}
          onChange={opt => setState({ selectedMonth: opt })}
          options={generateMonthOptions()}
          placeholder="Select a month"
        />
        <div className="actions">
          <Link to="/calendar">
            <button className="primary">Next: Customize your calendar</button>
          </Link>
        </div>
        <Divider color="dark" />
      </div>
      <PrivacyNotice />
      <SiteFooter />
    </div>
  );
};
