import TodoListNameTextField from "./TodoListNameTextField";
import Todo from "./Todo";
import * as React from "react";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function TodoList(props) {
  const [isEditingListName, setIsEditingListName] = useState(false);
  const [todoListName, setTodoListName] = useState(props.name);
  function editTodoListName(e) {
    e.stopPropagation();
    setIsEditingListName(true);
  }
  console.log("From TodoList.js", props);
  const todos = props.todos.map((todo) => {
    return (
      <List>
        <Todo checked={todo.checked} name={todo.name} />
      </List>
    );
  });

  function DynamicTodoListName(props) {
    if (isEditingListName) {
      return (
        <TodoListNameTextField
          setIsEditingListName={setIsEditingListName}
          setTodoListName={setTodoListName}
        />
      );
    } else {
      return (
        <Typography onClick={editTodoListName} component="div" variant="h3">
          {todoListName}
        </Typography>
      );
    }
  }
  return (
    <React.Fragment>
      <Card
        variant="outlined"
        style={{ width: 400 }}
        sx={{ bgcolor: "primary.light", boxShadow: 5 }}
      >
        <DynamicTodoListName />
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
