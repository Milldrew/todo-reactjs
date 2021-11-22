import { useState } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
export default function TodoCheckbox(props) {
  const [checked, setChecked] = useState(props.checked);

  /**
   * @ remarks This component indicates whether the todo isDone or not with isDone Boolean value.
   * @props this componenets recieves the isDone ssetIsDone hook through the prop componenets isDone, and setIsDone.
   * @reference https://mui.com/components/checkboxes/#main-content
   */
  function toggleCheck() {
    console.log(props.isDone);
    props.setIsDone(!props.isDone);
  }

  return (
    <ListItemIcon>
      <Checkbox
        color="success"
        sx={{
          "& .MuiSvgIcon-root": { fontSize: 50 },
          color: "sucess.main",
        }}
        key={Math.random()}
        onClick={toggleCheck}
        edge="start"
        checked={props.isDone}
      />
    </ListItemIcon>
  );
}
