import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";

/**
 * @remarks this component appears when the TodoMenuButton is clicked. It contains the controls for the todo list.
 * @example when you prss ✍️ on the menu the TextField will appear for you to edit the 'name' of the todo.
 * @props this component is the most nested component and passes state to the mui menu component.
 * @reference https://mui.com/components/menus/
 */
export default function TodoMenu(props) {
  function doneClicked() {
    console.log(props.isDone);
    props.setIsDone(!props.isDone);
  }
  function editClicked() {
    props.setIsEditing(true);
  }
  function deleteTodo() {
    console.log(props.setTodoName);
    props.setTodoName("");
  }
  const divStyle = { width: "20" };
  return (
    <Menu
      id="basic-menu"
      onClick={props.handleClose}
      anchorEl={props.anchorEl}
      open={props.isOpen}
      onClose={props.handleClose}
      MenuListProps={{ "aria-labelledby": "basic-button" }}
    >
      <MenuItem>
        <div onClick={doneClicked} id="done" style={divStyle}>
          ✅
        </div>
      </MenuItem>
      <MenuItem onClick={editClicked}>
        <div id="edit" style={divStyle}>
          ✍️
        </div>
      </MenuItem>
      <MenuItem onClick={deleteTodo}>
        <div id="delete" style={divStyle}>
          🗑
        </div>
      </MenuItem>
    </Menu>
  );
}
