import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Lock from "@material-ui/icons/Lock";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import React from "react";

export default function SignUp() {
  const paperStyle = {
    padding: 20,
    height: "90vh",
    width: 280,
    margin: "20px auto",
  };

  const avatarStyle = { backgroundColor: "#3f51b5" };
  const btnStyle = { margin: "8px 0" };

  return (
    <React.Fragment>
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <Lock />
            </Avatar>
            <h2>Sign Up</h2>
          </Grid>
          <TextField label="Enter Username" fullWidth required />
          <TextField
            label="Enter Password"
            type="password"
            fullWidth
            required
          />
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox name="RememberUser" color="primary" />}
            label="Remember me"
          />
          <Button
            style={btnStyle}
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
          >
            sign up
          </Button>
          <Typography>
            <Link to="forgot-password">Forgot password ?</Link>
          </Typography>
          <Typography>
            Do you have an account?
            <Link to="/sign-in">Sign in ?</Link>
          </Typography>
        </Paper>
      </Grid>
      <TextField></TextField>
    </React.Fragment>
  );
}
