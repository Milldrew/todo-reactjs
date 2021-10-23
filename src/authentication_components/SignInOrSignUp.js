import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import React from "react";

export default function SignIn() {
  const paperStyle = {
    padding: 20,
    height: "25vh",
    width: 280,
    margin: "20px auto",
  };

  const btnStyle = { margin: "8px 0" };

  return (
    <React.Fragment>
      <Grid>
        <Grid align="center">
          <h1> Todo Lists </h1>
        </Grid>

        <Paper style={paperStyle}>
          <Button
            style={btnStyle}
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            component={Link}
            to="/sign-in"
          >
            Sign in
          </Button>
          <Button
            style={btnStyle}
            type="submit"
            color="secondary"
            variant="contained"
            fullWidth
            component={Link}
            to="/sign-up"
          >
            Sign up
          </Button>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
