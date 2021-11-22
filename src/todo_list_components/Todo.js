import TodoTextField from "./TodoTextField";
import TodoMenuButton from "./TodoMenuButton";
import TodoText from "./TodoText";
import TodoCheckbox from "./TodoCheckbox";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import { useState } from "react";

/**
 * @remarks This component is the parent of all Todo's subcomponents. It is responsible delegating hooks, passing state and rendering ui to subcomponenets.
 * @hooks Hook derived state values for the Todo include: isDone, todoName, isEditing.
 */
export default function Todo(props) {
  const [isDone, setIsDone] = useState(props.checked);
  const [todoName, setTodoName] = useState(props.name);
  const [isEditing, setIsEditing] = useState(false);

  function TodoDynamicText(textProps) {
    return isEditing ? (
      <TodoTextField setIsEditing={setIsEditing} setTodoName={setTodoName} />
    ) : (
      <TodoText name={textProps.name} />
    );
  }
  return (
    <React.Fragment>
      <ListItem alignItems="center">
        <TodoCheckbox isDone={isDone} setIsDone={setIsDone} checked={true} />
        <TodoDynamicText name={todoName} />
        <TodoMenuButton
          isDone={isDone}
          setIsDone={setIsDone}
          setIsEditing={setIsEditing}
          setTodoName={setTodoName}
        />
      </ListItem>
    </React.Fragment>
  );
}
