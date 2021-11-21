import TodoMenuButton from "./TodoMenuButton";
import TodoText from "./TodoText";
import TodoCheckbox from "./TodoCheckbox";
import ListItem from "@mui/material/ListItem";
import * as React from "react";

export default function Todo(props) {
  return (
    <React.Fragment>
      <ListItem alignItems="center">
        <TodoCheckbox checked={props.checked} />
        <TodoText name={props.name} />
        <TodoMenuButton />
      </ListItem>
    </React.Fragment>
  );
}
