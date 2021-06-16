import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/homepage/Homepage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
