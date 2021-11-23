import { useState } from "react";
import TodoMenu from "./TodoMenu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Fragment } from "react";

/**
 * @remarks this component is used to trigger the appearence of a menu.It contains the button which reveals a Material-UI Menu rendered by the custom component TodoMenu.
 * @reference https://mui.com/components/menus/
 * @props this component passes the react hooks below from the parent Todo Component.
 *
        isDone={props.isDone}
        setTodoName={props.setTodoName}
        setIsEditing={props.setIsEditing}
        setIsDone={props.setIsDone}
 */
export default function TodoMenuButton(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  function handleMenuButtonClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <Fragment>
      <IconButton
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleMenuButtonClick}
        edge="end"
        component={Button}
        size="large"
      >
        <MoreVertIcon size="large" sx={{ fontSize: 50 }} />
      </IconButton>
      <TodoMenu
        anchorEl={anchorEl}
        handleClose={handleClose}
        isOpen={open}
        isDone={props.isDone}
        setTodoName={props.setTodoName}
        todoName={props.todoName}
        setIsEditing={props.setIsEditing}
        setIsDone={props.setIsDone}
      />
    </Fragment>
  );
}
