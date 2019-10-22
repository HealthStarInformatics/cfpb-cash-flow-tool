import React from "react";
import { joinClasses } from "../../services/stringServices";
import { ReactComponent as DollarIcon } from "../../assets/dollar-icon.svg";
import { ReactComponent as MinusIcon } from "../../assets/minus-icon.svg";

/**
 * CalendarDay
 * @param {Number} number Day in the month
 * @param {String} date i.e. 'Friday, October 4, 2019'
 * @param {Function} setState Update function for global state
 * @param {Boolean} hasEntries Flag to display dots
 * @param {Boolean} hasCash Flag to display red/green stylings
 * @param {Boolean} showCashStyling Flag to avoid styling days for which we don't have enough info
 */
export const CalendarDay = ({
  number,
  date,
  setState,
  hasEntries,
  hasCash,
  showCashStyling
}) => {
  // Dynamically determine styling for the day
  const classHasEntries = hasEntries ? "hasEntries" : "noEntries";
  const classHasCash = showCashStyling
    ? hasCash
      ? "hasCash"
      : "noCash"
    : null;

  const classes = joinClasses(["day", classHasEntries, classHasCash]);

  const Icon = hasCash ? DollarIcon : MinusIcon;

  return (
    <div className={classes} onClick={() => setState({ selectedDay: date })}>
      <div className="number">{number}</div>
      <div className="dots">•••••</div>
      <div className="symbol">
        <Icon />
      </div>
    </div>
  );
};

/**
 * CalendarDayPlaceholder
 * Dummy component for non-month days
 */
export const CalendarDayPlaceholder = () => (
  <div className="day placeholder"></div>
);
