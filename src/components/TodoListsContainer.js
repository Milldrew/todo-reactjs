import Grid from "@mui/material/Grid";
import * as React from "react";
import TodoLists from "./TodoLists";
import { Paper, Box } from "@material-ui/core";

export default function TodoListsContainer() {
  return (
    <React.Fragment>
      <Box>
        <Grid container spacing={12}>
          <TodoLists />
        </Grid>
      </Box>
    </React.Fragment>
  );
}
