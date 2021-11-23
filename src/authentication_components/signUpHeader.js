import Typography from "@mui/material/Typography";
import Lock from "@material-ui/icons/Lock";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
export default function SignUpHeader() {
  return (
    <Grid align="center">
      <Avatar>
        <Lock />
      </Avatar>
      <Typography variant="h4">
        <h2>Sign Up</h2>
      </Typography>
    </Grid>
  );
}
