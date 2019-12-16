import React from "react";
import { Route, Switch } from "react-router-dom";
import { CalendarView } from "./CalendarView/CalendarView";
import { DayModal } from "./CalendarView/Calendar/DayModal";
import { LandingView } from "./LandingView/LandingView";
import { MonthSelectView } from "./MonthSelectView/MonthSelectView";
import { StrategyView } from "./StrategyView/StrategyView";
// import { exampleMonthlyData } from "./mockData";

import "../css/App.css";
import { getFromStorage, saveToStorage } from "../services/storageServices";

export const AppContext = React.createContext();

class App extends React.Component {
  state = {
    selectedMonth: null,
    selectedDay: null,
    monthlyData: {} // TODO: delete example data
  };

  componentDidMount() {
    const monthlyData = getFromStorage("monthlyData");

    if (monthlyData) this.setState({ monthlyData });
  }

  componentDidUpdate() {
    saveToStorage("monthlyData", this.state["monthlyData"]);
  }

  render() {
    const contextObject = {
      ...this.state,
      setState: this.setState.bind(this)
    };

    return (
      <AppContext.Provider value={contextObject}>
        <Switch>
          <Route path="/" exact component={LandingView} />
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
