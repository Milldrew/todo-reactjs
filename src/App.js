import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import TodoListsContainer from "./components/TodoListsContainer";
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
          <Route path="/todo-lists">
            <Grid justifyContent="space-between">
              <Grid align="center">
                <Header />
                <TodoListsContainer />
              </Grid>
            </Grid>
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
