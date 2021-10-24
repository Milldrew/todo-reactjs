import SignUpHelpLinks from "./SignUpHelpLinks";
import SignUpForm from "./SignUpForm";
import SignUpHeader from "./SignUpHeader";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import React from "react";

export default function SignUp() {
  const paperStyle = {
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
