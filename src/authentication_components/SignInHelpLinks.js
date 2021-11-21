import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
/**
 * @description this component is for Forgot Password and SignUp links
 * @params none
 */
export default function SignInHelpLinks() {
  return (
    <Fragment>
      <Typography>
        <Link to="forgot-password">Forgot password ?</Link>
      </Typography>
      <Typography>
        Do you have an account?
        <Link to="/sign-up">Sign up ?</Link>
      </Typography>
    </Fragment>
  );
}
