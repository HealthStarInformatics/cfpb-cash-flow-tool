import React from "react";
import { Route, Switch } from "react-router-dom";
import { CalendarView } from "./components/CalendarView";
import { DayModal } from "./components/DayModal";
import { LandingPage } from "./components/LandingPage";
import { MonthSelectView } from "./components/MonthSelectView";
import { StrategyView } from "./components/StrategyView/StrategyView";
import { exampleMonthlyData } from "./mockData";
import "./styles/App.scss";

export const AppContext = React.createContext();

class App extends React.Component {
  state = {
    incomes: {}, // TODO: Update DayModal to use monthlyData then delete this.
    expenses: {}, // TODO: Update DayModal to use monthlyData then delete this.
    selectedMonth: null,
    selectedDay: null,
    monthlyData: exampleMonthlyData // TODO: delete example data
    // monthlyData: {}
  };

  render() {
    const contextObject = {
      ...this.state,
      setState: this.setState.bind(this)
    };

    return (
      <AppContext.Provider value={contextObject}>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/month" component={MonthSelectView} />
          <Route path="/calendar" component={CalendarView} />
          <Route path="/strategies" component={StrategyView} />
          <Route path="/day" component={DayModal} />
        </Switch>
      </AppContext.Provider>
    );
  }
}

export default App;
