import Grid from "@mui/material/Grid";
import * as React from "react";
import TodoLists from "./TodoLists";
import myTodoLists from "./mockData";
export default function TodoListsContainer() {
  return (
    <React.Fragment>
      <Grid container align="center" spacing={12}>
        <TodoLists todoLists={myTodoLists} />
      </Grid>
    </React.Fragment>
  );
}
