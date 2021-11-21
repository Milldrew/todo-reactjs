import { createTheme } from "@mui/material/styles";
//#ff9800
//#1976d2
const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#ff9800",
      light: "#ffc947",
      dark: "#c66900",
    },
    secondary: {
      main: "#ff7043",
      light: "#ffa270",
      dark: "#c63f17",
    },
    sucess: {
      main: "#000000",
      light: "#000000",
      dark: "#000000",
    },
  },
});

export default mainTheme;
