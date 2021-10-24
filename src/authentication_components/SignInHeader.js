import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Lock from "@material-ui/icons/Lock";

/**
 * @description A component for the header of the sign in form
 * @props none
 */
export default function SignInHeader() {
  return (
    <Grid align="center">
      <Avatar>
        <Lock />
      </Avatar>
      <h2>Sign In</h2>
    </Grid>
  );
}
