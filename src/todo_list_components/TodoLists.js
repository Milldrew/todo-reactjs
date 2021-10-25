import Grid from "@mui/material/Grid";
import * as React from "react";
import TodoList from "./TodoList.js";
import Todo from "./Todo.js";

export default function TodoLists(props) {
  console.log(props.todoLists[0].todos);
  const todoLists = props.todoLists.map((todoList) => {
    console.log("from TodoLists map", todoList);
    return (
      <Grid item xs={12} md={6} xl={3}>
        <TodoList name={todoList.name} todos={todoList.todos} />
      </Grid>
    );
  });
  const myTodoLists = <React.Fragment>{todoLists}</React.Fragment>;
  return <React.Fragment>{myTodoLists}</React.Fragment>;
}
