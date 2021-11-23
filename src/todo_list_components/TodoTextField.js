import TodoCharacterCounter from "./TodoCharacterCounter";
import Input from "@mui/material/Input";
import { Fragment, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

/**
 * @description this component is for editing the text of a Todo. It appears when the ✍️ button is pressed in the menu.
 * @props The props setTodoName, and setIsEditing are used to pass the respective hooks to a event listener called handleEnterKey which triggers from the onKeyDown event listener.
 *
 */
export default function TodoTextField(props) {
  const MAX_CHARS = 10;
  const [characterCountDown, setCharacterCountDown] = useState(MAX_CHARS);
  function handleOnChange(e) {
    let numberOfChars = e.target.value.length;
    if (numberOfChars > MAX_CHARS) e.preventDefault();
    setCharacterCountDown(MAX_CHARS - numberOfChars);
  }
  function handleEnterKey(e) {
    if (
      characterCountDown === 0 &&
      e.code !== "Enter" &&
      e.code !== "Backspace"
    )
      e.preventDefault();

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
    <Fragment>
      <Typography varaint="div">
        <div style={{ width: "250", fontSize: 40 }}>
          <TextField
            id="text-field"
            autoFocus
            onChange={handleOnChange}
            onKeyDown={handleEnterKey}
          />
        </div>
      </Typography>
      <TodoCharacterCounter characterCountDown={characterCountDown} />
    </Fragment>
  );
}
