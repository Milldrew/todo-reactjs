import EditorDialog from "./EditDialog";
import TodoMenu from "./TodoMenu";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import ListItemIcon from "@mui/material/ListItemIcon";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import * as React from "react";

export default function Todo(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = React.useState({
    name: props.name,
    checked: props.checked,
  });

  const [editorOpen, setEditorOpen] = React.useState(false);

  const menuOpen = Boolean(anchorEl);

  function handleMenu(e) {
    setAnchorEl(e.currentTarget);
  }
  function handleCloseMenu() {
    setAnchorEl(null);
  }

  function toggleCheck({ target: { checked } }) {
    console.log(checked);
  }
  return (
    <React.Fragment>
      <ListItem>
        <ListItemIcon>
          <Checkbox
            key={Math.random()}
            onClick={toggleCheck}
            edge="start"
            checked={state.status}
          />
        </ListItemIcon>
        <span style={{ width: 300 }}>{state.name}</span>
        <IconButton
          component={Button}
          aria-controls="demo-positioned-menu"
          aria-haspopup="true"
          aria-expanded={menuOpen ? "true" : undefined}
          onClick={handleMenu}
        >
          <MoreVertIcon />
        </IconButton>
        <TodoMenu
          setAnchorEl={setAnchorEl}
          handleCloseMenu={handleCloseMenu}
          anchorEl={anchorEl}
          open={menuOpen}
          setEditorOpen={setEditorOpen}
        ></TodoMenu>
        <EditorDialog editorOpen={editorOpen} setEditorOpen={setEditorOpen} />
      </ListItem>
    </React.Fragment>
  );
}
