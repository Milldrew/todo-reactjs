import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SignInOrSignUp from "./components/SignInOrSignUp";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/">
            <SignInOrSignUp />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
