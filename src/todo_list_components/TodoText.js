import Typography from "@mui/material/Typography";
import { useState } from "react";
export default function TodoText(props) {
  return (
    <Typography varaint="div">
      <div style={{ width: "250", fontSize: 40 }}>{props.name || ""}</div>
    </Typography>
  );
}
