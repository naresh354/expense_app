import { createTheme } from "@mui/material/styles";
// Create a theme instance.
const palette = {
  primary: {
    main: "#464646",
  },
  appThemeColor: {
    main: "#A73EBC",
  },
  lightColor: {
    contrastText: "#818181",
  },
  formLabelColor: {
    main: "#ADADAD",
  },
};

const theme = createTheme({
  palette: Object.keys(palette).length > 0 ? palette : undefined,
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});
export default theme;
