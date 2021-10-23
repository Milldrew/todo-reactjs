import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Fragment } from "react";

export default function AddEditTodoLists() {
  const btnStyle = {
    fontSize: 44,
    maxHeight: "80px",
    minHeight: "80px",
    margin: "30px 0",
  };
  return (
    <Grid container>
      <Grid item xs={12} m={6}>
        <Button
          size="large"
          color="primary"
          fullWidth
          style={btnStyle}
          type="submit"
          variant="contained"
        >
          add
        </Button>
      </Grid>
      <Grid item xs={12} m={6}>
        <Button
          color="secondary"
          fullWidth
          style={btnStyle}
          type="submit"
          variant="contained"
        >
          Edit
        </Button>
      </Grid>
    </Grid>
  );
}
