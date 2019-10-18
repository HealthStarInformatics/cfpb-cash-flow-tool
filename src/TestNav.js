import React from "react";
import { Link } from "react-router-dom";

export const TestNav = () => (<nav>
  <ul>
    <Link to="/">
      <li>LandingPage</li>
    </Link>
    <Link to="/month">
      <li>MonthSelection</li>
    </Link>
    <Link to="/calendar">
      <li>CalendarView</li>
    </Link>
    <Link to="/strategies">
      <li>StrategyView</li>
    </Link>
  </ul>
</nav>);
