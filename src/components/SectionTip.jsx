import React from "react";
import { ReactComponent as LightBulb } from "../assets/light-bulb.svg";

import "../styles/CalendarView.scss";

const SectionTip = () => (
  <div className="section-tip-wrapper">
    <div>
      <LightBulb className="light-bulb" />
      Tip: You can access strategies for improving cash flow at any time. But
      the more information you add to the calendar, the more personalized your
      strategies will become.
    </div>
  </div>
);

export default SectionTip;
