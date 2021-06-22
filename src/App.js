import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/homepage/Homepage";
import LoginPage from "./components/loginpage/LoginPage";
import Navigation from "./components/layout/Nav";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/loginpage">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
