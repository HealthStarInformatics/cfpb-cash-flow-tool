import { isEmpty } from "lodash";
import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AppContext } from "../../App";
import { range } from "../../services/arrayServices";
import {
  createWeekRows,
  getMonthInfo,
  initializeMonthlyData
} from "../../services/calendarServices";
import { totalAmount } from "../../services/currencyServices";
import { deriveDateString } from "../../services/dateServices";
import { filterByDate } from "../../services/objectServices";
import "../../styles/Calendar.scss";
import { CalendarBody } from "./CalendarBody";
import { CalendarDay, CalendarDayPlaceholder } from "./CalendarDay";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarKey } from "./CalendarKey";
import { DayModal } from "../DayModal";

/**
 * Calendar - Pulls data from AppContext and displays a calendar for the selectedMonth
 */
export const Calendar = () => {
  const { monthlyData, selectedDay, selectedMonth, setState } = useContext(
    AppContext
  );

  // Can't show data unless user has selected a month
  if (!selectedMonth) return <Redirect to="/month" />;

  // Create an entry in App's state.monthlyData if none exists for this month
  if (!monthlyData[selectedMonth.label]) {
    initializeMonthlyData(selectedMonth.label, setState);
    return null;
  }

  // Get info needed to draw the calendar
  const { firstWeekday, daysInMonth } = getMonthInfo(selectedMonth.label);

  // Initialize an array with placeholders for non-month days
  const days = range(firstWeekday).map((_, idx) => (
    <CalendarDayPlaceholder key={`placeholder${idx}`} />
  ));

  // Get the info needed to derive the daily styles
  const { startingBalance, incomes, expenses } = monthlyData[
    selectedMonth.label
  ];

  let todaysDate, todaysIncomes, todaysExpenses, todayHasEntries, todayIsStyled;

  let currentBalance = startingBalance.total;

  // Create an entry for each day of month
  range(1, daysInMonth + 1).forEach(dayNumber => {
    todaysDate = deriveDateString(dayNumber, selectedMonth.label);
    todaysIncomes = filterByDate(incomes, todaysDate);
    todaysExpenses = filterByDate(expenses, todaysDate);
    todayHasEntries = !isEmpty(todaysIncomes) || !isEmpty(todaysExpenses);

    // In the event that a starting balance is not provided, start styling from the first day that has incomes/expenses
    if (!startingBalance.startDay && todayHasEntries) {
      startingBalance.startDay = dayNumber;
    }

    // If the start day is later than the current day, but today has entries, start styling from today
    if (startingBalance.startDay > dayNumber && todayHasEntries) {
      startingBalance.startDay = dayNumber;
    }

    todayIsStyled =
      startingBalance.startDay && dayNumber >= startingBalance.startDay;

    currentBalance += totalAmount(todaysIncomes) - totalAmount(todaysExpenses);

    days.push(
      <CalendarDay
        key={dayNumber}
        number={dayNumber}
        date={todaysDate}
        setState={setState}
        hasCash={currentBalance > 0}
        hasEntries={todayHasEntries}
        showCashStyling={todayIsStyled}
      />
    );
  });

  return (
    <>
      {selectedDay && (
        <DayModal
          selectedDate={selectedDay}
          closeModal={() => setState({ selectedDay: null })}
        />
      )}
      <div className="calendar">
        <CalendarHeader />
        <CalendarBody rows={createWeekRows(days)} />
        <CalendarKey show={startingBalance} />
      </div>
    </>
  );
};

export default Calendar;
