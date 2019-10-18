import React from "react";
import { Switch, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { MonthSelection } from "./components/MonthSelection";
import { CalendarView } from "./components/CalendarView";
import { StrategyView } from "./components/StrategyView";
import { TestNav } from "./components/TestNav";
import "./styles/App.scss";

const Context = React.createContext();

class App extends React.Component {
  state = {
    incomes: {},
    expenses: {}
  };

  render = () => {
    const contextObject = {
      ...this.state,
      setState: this.setState.bind(this)
    };

    return (
      <Context.Provider value={contextObject}>
        <TestNav />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/month" component={MonthSelection} />
          <Route path="/calendar" component={CalendarView} />
          <Route path="/strategies" component={StrategyView} />
        </Switch>
      </Context.Provider>
    );
  };
}

export default App;
