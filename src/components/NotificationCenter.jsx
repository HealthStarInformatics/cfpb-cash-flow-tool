import React from "react";
import { ReactComponent as StarIcon } from "../assets/star-icon.svg";

const NotificationCenter = () => (
  <div className="notification-center-wrapper">
    <div>
      <StarIcon className="star-icon" />
      Nice! Your calendar updated to reflect your positive starting balance.
      Learn more about your spending by adding a few income and expenses on the
      days you expect to receive or pay them.
    </div>
  </div>
);

export default NotificationCenter;
