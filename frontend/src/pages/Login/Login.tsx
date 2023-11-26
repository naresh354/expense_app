import React, { ReactElement } from "react";

import LoginBackgroundImg from "assets/loginBackgroundImage.jpg";

//  Import MUI components
import { Box } from "@mui/material";

import LoginForm from "./LoginForm";


function Login(): ReactElement {
  return (
    <Box sx={customStyles.container}>
      <LoginForm />
    </Box>
  );
}

const customStyles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};
 

export default Login;
