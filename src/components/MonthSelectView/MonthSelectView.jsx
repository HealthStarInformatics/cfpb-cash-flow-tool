import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { AppContext } from "../App";
import headerImg from "../../assets/month-select-header.png";
import { generateMonthOptions } from "../../services/dateServices";
// import "../../css/View.css";
import { PrivacyNotice } from "../shared/HeadersFooters/PrivacyNotice";
import { Divider } from "../shared/Divider";
import { SiteFooter } from "../shared/HeadersFooters/SiteFooter";
import { ViewHeader } from "../shared/HeadersFooters/ViewHeader";

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
