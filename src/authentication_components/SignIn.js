import SignInHelpLinks from "./SignInHelpLinks";
import SignInForm from "./SignInForm";
import SignInHeader from "./SignInHeader";
import Grid from "@mui/material/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
/**
 * @description This component holds the sign in form's subcomponents.
 * @params none
 *
 */
export default function SignIn() {
  const paperStyle = {
    padding: 20,
    height: "null",
    width: 280,
    margin: "20px auto",
  };

  return (
    <React.Fragment>
      <Grid>
        <Paper style={paperStyle}>
          <SignInHeader />
          <SignInForm />
          <SignInHelpLinks />
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
