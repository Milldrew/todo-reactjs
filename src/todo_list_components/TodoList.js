import Todo from "./Todo";
import * as React from "react";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";

export default function TodoList(props) {
  console.log("From TodoList.js", props);
  const todos = props.todos.map((todo) => {
    return (
      <List>
        <Todo checked={todo.checked} name={todo.name} />
      </List>
    );
  });
  return (
    <React.Fragment>
      <Card style={{ width: 400 }}>
        <Typography component="div" variant="h3">
          {props.name}
        </Typography>
        {todos}
      </Card>
    </React.Fragment>
  );
}

/*
  const todos = props.myTodoList.todos.map((todo) => {
    return (
      <List>
        <Todo defaultChecked={todo.checked} checked name={props.name} />
      </List>
    );
  });
  */
