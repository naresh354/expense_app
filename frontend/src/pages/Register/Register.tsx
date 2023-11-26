import React, { ReactElement } from "react";

import LoginBackgroundImg from "assets/loginBackgroundImage.jpg";

//  Import MUI components
import { Box } from "@mui/material";

// Import MUI Icons
//  Import External Libraries
//  Import constants, functions and services
//  Import Custom Styles
// Import Customized Components

import Registerform from "./RegisterForm";

//  Component Input Props Declaration 

//  Global Scope Variable and Constant Declarations 

function Register(): ReactElement {
  return (
    <Box sx={customStyles.container}>
      <Registerform />
    </Box>
  );
}

//  * Customized system styles can be inserted into a Material-UI component using the sx property
//  * Contains modified/Replaced CSS properties of Material UI components
//  * Reference : https://mui.com/system/getting-started/the-sx-prop/

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


//  * Styled Components Section
//  * Reference : https://mui.com/system/styled/
 

export default Register;
