import React from "react";
import ReactDOM from "react-dom";
import TodoListApp from "./TodoListApp";
import { ThemeProvider } from "@mui/material/styles";
import mainTheme from "./theme";
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <TodoListApp />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
