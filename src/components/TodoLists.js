import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import * as React from "react";
import TodoList from "./TodoList.js";

export default function TodoLists(props) {
  const btnStyle = { margin: "30px 0" };
  const makeSpace = { margin: "30px" };
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <div style={makeSpace}>take up space</div>
      </Grid>
      <Grid item xs={6}>
        <Button
          color="primary"
          fullWidth
          style={btnStyle}
          type="submit"
          variant="contained"
        >
          add
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          color="secondary"
          fullWidth
          style={btnStyle}
          type="submit"
          variant="contained"
        >
          Edit
        </Button>
      </Grid>
      <Grid item xs={12}>
        <h1> Todo Lists </h1>
      </Grid>
      <Grid item xs={12} md={6} xl={3}>
        <TodoList />
      </Grid>
      <Grid item xs={12} md={6} xl={3}>
        <TodoList />
      </Grid>
      <Grid item xs={12} md={6} xl={3}>
        <TodoList />
      </Grid>
      <Grid item xs={12} md={6} xl={3}>
        <TodoList />
      </Grid>
    </React.Fragment>
  );
}
/*
      <Grid item xs={12}>
        <ul>
          <li>input: array of todo lists</li>
          <li>output: active, completed lists,all</li>
          <li>behavior: edit a list or add a list </li>
          <li>Todo List => input: name, todos, status</li>
          <li>
            behavior: edit a list, change status, delete a list, add a todo
          </li>
          <li>Todo => input: name, status</li>
          <li>behavior: edit, delete </li>
        </ul>
      </Grid>
      */
