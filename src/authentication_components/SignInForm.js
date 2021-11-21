import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Fragment } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
/**
 * @description A component for the form input fields and Sign In Button
 * @params none
 */
export default function SignInForm() {
  const btnStyle = { margin: "8px 0" };
  return (
    <Fragment>
      <TextField label="Enter Username" fullWidth required />
      <TextField label="Enter Password" type="password" fullWidth required />
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
        Sign in
      </Button>
    </Fragment>
  );
}
