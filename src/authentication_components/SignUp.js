import mainTheme from "../theme";
import SignUpHelpLinks from "./SignUpHelpLinks";
import SignUpForm from "./SignUpForm";
import SignUpHeader from "./SignUpHeader";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import React from "react";

export default function SignUp() {
  const paperStyle = {
    backgroundColor: mainTheme.palette.primary.light,
    padding: 20,
    height: null,
    width: 280,
    margin: "20px auto",
  };

  const btnStyle = { margin: "8px 0" };

  return (
    <React.Fragment>
      <Grid>
        <Paper style={paperStyle}>
          <SignUpHeader />
          <SignUpForm />
          <SignUpHelpLinks />
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
