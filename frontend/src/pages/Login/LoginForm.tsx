// Import MUI components
import { CatchingPokemonSharp, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { muiCustomization } from "styles/common";
import loginSchema from "./validation";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axiosService from "network/axios";
import { useLoader } from "context/LoaderProvider";
import { toast } from "react-toastify";

const LoginForm = () => {
  const { showLoader, hideLoader }: any = useLoader();
  const { userButtonStyle, formLabelStyle, errorTextStyle } = muiCustomization;
  const [showPassword, setShowPassword] = useState(false);
  // Define a state variable to store failure responses
  const [failureRes, setFailureRes] = useState("");
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const initialValues = {
    email: "",
    password: "",
  };
  const handleFormSubmit = (values: any) => {
    // Show a loader or loading indicator
    showLoader();
    // Send a POST request using axiosService to the login endpoint
    axiosService
      .postUserService("/user/login", values)
      .then((res: any) => {
        console.log(res, "response")
        // Check if the response indicates success
        if (res?.data?.status === true) {
          // Store access token, refresh token, and user data in session storage
          toast.success(res?.data?.message);

          sessionStorage?.setItem("expense-access-token", res?.data?.token)

          // Navigate to the home page 
          navigate("/expense");
        } else {
          // Set the failure response message
          console.log(res?.data?.message)
        }
      })
      .catch((err: any) => {
        // Set the failure response message based on the error
        setFailureRes(err.response?.data?.message || err?.message);
      })
      .finally(() => {
        hideLoader(); // Hide the loader or loading indicator
      });
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: handleFormSubmit,
  });

  return (
    <>
      <Box sx={customStyles.formContainer}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              color: "appThemeCo  lor.main",
              fontSize: "2rem",
              textAlign: "left",
              fontWeight: 600,
              mb: 2
            }}
          >
            Login
          </Typography>
          <form onSubmit={formik.handleSubmit}>
           
          <FormControl sx={{ width: "35ch" }} variant="standard">
            <Typography sx={{ textAlign:"left", color: "#273240", fontSize: "0.8rem", mb: 1, fontWeight: "700"  }}>Email</Typography>
              <TextField
                name="email"
                size="small"
                sx={{  "& input::placeholder": {
                  fontSize: "0.8rem",
                }}}
                autoComplete="off"
                placeholder="Your email address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.email && formik.errors.email)}
              />
            </FormControl>
            <Typography sx={errorTextStyle}>
              {formik.touched.email && formik.errors.email}
            </Typography>
            <FormControl sx={{ width: "35ch" }} variant="standard">
            <Typography sx={{ textAlign:"left", color: "#273240", fontSize: "0.8rem", mb: 1, fontWeight: "700"  }}>Password</Typography>
              <TextField
              sx={{ 
                "& input::placeholder": {
                  fontSize: "0.8rem",
                },
              }}
                name="password"
                size="small"
                placeholder="Your password"
                autoComplete="off"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.password && formik.errors.password)}
              />
            </FormControl>
            <Typography
              sx={errorTextStyle}
            >
              {formik.touched.password && formik.errors.password}
            </Typography>
            <Button type="submit" sx={{ color: "#FFFFFF", backgroundColor: "#DC3434", width: "40ch",  "&:hover": {
          backgroundColor: "#DC3434",
        }, }}>SIGN IN</Button>
          </form>

          <Typography sx={{ color: "#8d8d8d", fontSize: "0.8rem", fontWeight: "700", mt: 2 }}>Not a user ? <Link to={"/register"} style={{ textDecoration: "none" }}>Sign Up</Link></Typography>

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

export default LoginForm;
