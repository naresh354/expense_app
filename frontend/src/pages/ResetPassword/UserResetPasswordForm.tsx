// Import MUI components
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";


import { AppButton } from "components/button/AppButton";
import { useState } from "react";
import { muiCustomization } from "styles/common";
import { styled } from "@mui/system";
import useDrawer from "hooks";

const UserResetPasswordForm = () => {
  const { userButtonStyle, formLabelStyle } = muiCustomization;

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <Box sx={customStyles.formContainer}>
        <Box
          component="img"
          src="assets/DocqBot.svg"
          
          sx={{ width: "50%", mx: "auto", display: "block" }}
          alt="DocubatLogo"
        />
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              color: "appThemeColor.main",
              fontSize: "19px",
              fontWeight: 600,
              pt: 3,
            }}
          >
            Reset Password
          </Typography>
          <Typography
            sx={{ color: "lightColor.contrastText", fontSize: "12px", pt: 1.5 }}
          >
            Please enter your new password
          </Typography>

          <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
            <InputLabel
              htmlFor="standard-adornment-password"
              sx={{
                ...formLabelStyle,
                "&.Mui-focused": {
                  color: "formLabelColor.main", // Replace with the desired focused label color
                },
              }}
            >
              New Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              sx={customStyles.InputField}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
            <InputLabel
              htmlFor="standard-adornment-password"
              sx={{
                ...formLabelStyle,
                "&.Mui-focused": {
                  color: "formLabelColor.main", // Replace with the desired focused label color
                },
              }}
            >
              Confirm New Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showConfirmPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              sx={customStyles.InputField}
            />
          </FormControl>
          <AppButton
            label={"Reset Password"}
            size={"medium"}
            endIcon={<img src="assets/icons/RightArrow.svg" />}
            style={userButtonStyle}
          />
        </Box>
      </Box>
    </>
  );
};
// * Customized system styles can be inserted into a Material-UI component using the sx property
// * Contains modified/Replaced CSS properties of Material UI components
// * Reference : https://mui.com/system/getting-started/the-sx-prop/

const customStyles = {
  formContainer: {
    bgcolor: "white",
    borderRadius: 2,
    p: 4,
    maxWidth: 400,
  },
  InputField: {
    borderBottomColor: "#BD4ED7", // Replace with the desired border color
    borderBottomWidth: 1.8, // You can adjust the width of the border
    borderBottomStyle: "solid",
    "&:hover": {
      borderBottomColor: "#BD4ED7", // Replace with the desired hovered border color
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#BD4ED7", // Replace with the desired focused border color
    },
  },
};

//   * Styled Components Section
//  * Reference : https://mui.com/system/styled/

export default UserResetPasswordForm;
