import { useState } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
export default function TodoCheckbox(props) {
  const [checked, setChecked] = useState(props.checked);
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
        checked={checked}
      />
    </ListItemIcon>
  );
}
function toggleCheck({ target: { checked } }) {
  console.log(checked);
}