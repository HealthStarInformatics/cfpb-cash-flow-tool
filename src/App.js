import React from "react";
import { Route, Switch } from "react-router-dom";
import { DayModal } from "./components/DayModal";
import { CalendarView } from "./components/CalendarView";
import { LandingPage } from "./components/LandingPage";
import { MonthSelectView } from "./components/MonthSelectView";
import { StrategyView } from "./components/StrategyView";
import { TestNav } from "./components/TestNav";
import "./styles/App.scss";

export const AppContext = React.createContext();

class App extends React.Component {
  state = {
    incomes: {},
    expenses: {},
    selectedMonth: null
  };

  render() {
    const contextObject = {
      ...this.state,
      setState: this.setState.bind(this)
    };

    return (
      <AppContext.Provider value={contextObject}>
        <TestNav />
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
