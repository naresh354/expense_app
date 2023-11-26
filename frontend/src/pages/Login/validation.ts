import * as yup from "yup";
// Import constants, functions and services

// Login
const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default loginSchema;