import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

/**
 * props: anchorEl, handleClose, props.open
 * anchorEl: The element the menu appears at
 * handleClickEdit: The event handler for clicking edit
 * handleClickDelete: The event handler for clicking delete
 * open: The open or closed state of the menu
 */
export default function Todo(props) {
  function handleClickEdit(e) {
    props.setEditorOpen(true);
    props.setAnchorEl(null);
    props.handleCloseMenu();
  }
  function handleClickDelete(e) {
    props.setAnchorEl(null);
    console.log("delete");
    props.handleCloseMenu();
  }
  return (
    <React.Fragment>
      <Menu
        anchorEl={props.anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        onClose={props.handleCloseMenu}
        open={props.open}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <MenuItem onClick={handleClickEdit}>edit</MenuItem>

        <MenuItem onClick={handleClickDelete}>delete</MenuItem>
      </Menu>
    </React.Fragment>
  );
}
