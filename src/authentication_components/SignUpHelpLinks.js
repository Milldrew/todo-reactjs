import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
export default function SignUpHelpLinks() {
  return (
    <Fragment>
      <Typography>
        <Link to="forgot-password">Forgot password ?</Link>
      </Typography>
      <Typography>
        Do you have an account?
        <Link to="/sign-in">Sign in ?</Link>
      </Typography>
    </Fragment>
  );
}
