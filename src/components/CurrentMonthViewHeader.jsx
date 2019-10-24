import React, { useState } from "react";

import CurrentMonthViewHeaderVerbage from "./CurrentMonthViewHeaderVerbage";

import "../styles/CurrentMonthViewHeader.scss";

const CurrentMonthViewHeader = () => {
  const [modalvisible, setModalvisible] = useState(false);

  return (
    <div className="current-month-view-header-wrapper">
      <CurrentMonthViewHeaderVerbage
        modalvisible={modalvisible}
        setModalvisible={setModalvisible}
      />
    </div>
  );
};

export default CurrentMonthViewHeader;
