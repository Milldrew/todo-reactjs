import { useState } from "react";
export default function TodoText(props) {
  return (
    <span style={{ width: 300, fontSize: 40 }}>{props.name || "name"}</span>
  );
}
