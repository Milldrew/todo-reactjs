import Input from "@mui/material/Input";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function TodoListNameTextField(props) {
  function handleEnterKey(e) {
    e.stopPropagation();
    if (e.code === "Enter") {
      props.setTodoListName(e.target.value);
      props.setIsEditingListName(false);
    }
  }
  useEffect(() => {});
  return (
    <Typography varaint="div">
      <div style={{ width: "250", fontSize: 40 }}>
        <TextField id="text-field" autoFocus onKeyDown={handleEnterKey} />
      </div>
    </Typography>
  );
}
