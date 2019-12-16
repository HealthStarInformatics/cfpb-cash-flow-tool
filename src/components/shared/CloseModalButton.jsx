import React from "react";

import { Icon } from "../shared/Icon";

export const CloseModalButton = ({ closeModal }) => (
  <div className="text-button close-modal" onClick={closeModal}>
    <span>Close</span>
    <span>
      <Icon type="close-icon" />
    </span>
  </div>
);
