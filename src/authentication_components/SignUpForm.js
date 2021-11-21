import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { Fragment } from "react";
export default function SignUpForm() {
  const btnStyle = { margin: "8px 0" };
  return (
    <Fragment>
      <TextField label="Enter Username" fullWidth required />
      <TextField label="Enter Password" type="password" fullWidth required />
      <TextField label="Confirm Password" type="password" fullWidth required />
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
    </Fragment>
  );
}
