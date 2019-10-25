import React from "react";
import { StrategyCardAction } from "./StrategyCardAction";

export const StrategyCard = ({ heading, title, description, action }) => (
  <div className="strategy-card">
    <div className="heading">{heading}</div>
    {title && <div className="title">{title}</div>}
    {description && <div className="description">{description}</div>}
    {action && <StrategyCardAction {...action} />}
  </div>
);
