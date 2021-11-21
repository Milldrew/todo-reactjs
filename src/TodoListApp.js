import Paper from "@mui/material/Paper";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import TodoListsContainer from "./todo_list_components/TodoListsContainer";
import SignIn from "./authentication_components/SignIn";
import SignUp from "./authentication_components/SignUp";
import SignInOrSignUp from "./authentication_components/SignInOrSignUp";

/**
 * @description This component is the most senior parent component of the todo list components and handles the routing of a TodoListApp
 * @returns Some react-router-dom.js logic as well as the appropriate subcomponents.
 * @props This component has no props
 *
 */
function TodoListApp() {
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
            <Grid>
              <Grid align="center">
                <Paper
                  sx={{
                    bgcolor: "secondary.light",
                    mx: 10,
                    my: 30,
                    py: 30,
                    width: null,
                  }}
                >
                  <TodoListsContainer />
                </Paper>
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

export default TodoListApp;
