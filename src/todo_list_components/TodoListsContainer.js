import Grid from "@mui/material/Grid";
import * as React from "react";
import TodoLists from "./TodoLists";
import { Box } from "@material-ui/core";
import myTodoLists from "./mockData";
export default function TodoListsContainer() {
  return (
    <React.Fragment>
      <Box sx={{ m: 20 }}>
        <Grid container spacing={12}>
          <TodoLists todoLists={myTodoLists} />
        </Grid>
      </Box>
    </React.Fragment>
  );
}
