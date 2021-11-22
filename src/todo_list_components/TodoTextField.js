import Input from "@mui/material/Input";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

/**
 * @description this component is for editing the text of a Todo. It appears when the ✍️ button is pressed in the menu.
 * @props The props setTodoName, and setIsEditing are used to pass the respective hooks to a event listener called handleEnterKey which triggers from the onKeyDown event listener.
 *
 */
export default function TodoTextField(props) {
  const [characterCountDown, setChracterCountDown] = useState();
  function handleEnterKey(e) {
    e.stopPropagation();
    if (e.code === "Enter") {
      props.setTodoName(e.target.value);
      props.setIsEditing(false);
    }
  }
  useEffect(() => {
    window.document.getElementById("text-field").focus();
  });
  return (
    <Typography varaint="div">
      <div style={{ width: "250", fontSize: 40 }}>
        <TextField id="text-field" autoFocus onKeyDown={handleEnterKey} />
      </div>
    </Typography>
  );
}
