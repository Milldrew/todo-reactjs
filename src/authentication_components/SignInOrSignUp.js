import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import React from "react";
import mainTheme from "../theme";
import { ThemeProvider } from "@mui/material/styles";
export default function SignIn() {
  const paperStyle = {
    padding: 20,
    height: "null",
    width: 280,
    margin: "20px auto",
  };

  const signInStyle = {
    margin: "8px 0",
    backgroundColor: mainTheme.palette.primary.main,
  };
  const signUpStyle = {
    margin: "8px 0",
    backgroundColor: mainTheme.palette.secondary.main,
  };
  console.log(mainTheme);

  return (
    <React.Fragment>
      <ThemeProvider theme={mainTheme}>
        <Grid>
          <Grid align="center">
            <Typography variant="h3">
              <h1> Todo Lists </h1>
            </Typography>
          </Grid>

          <Paper style={paperStyle}>
            <Button
              style={signInStyle}
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
              style={signUpStyle}
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
      </ThemeProvider>
    </React.Fragment>
  );
}
