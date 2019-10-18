import React from "react";
import { Switch, Route } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { MonthSelection } from "./MonthSelection";
import { CalendarView } from "./CalendarView";
import { StrategyView } from "./StrategyView";
import { TestNav } from "./TestNav";

import "./styles/App.scss";

function App() {
  return (
    <div className="app">
      <TestNav />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/month" component={MonthSelection} />
        <Route path="/calendar" component={CalendarView} />
        <Route path="/strategies" component={StrategyView} />
      </Switch>
    </div>
  );
}

export default App;
