import * as yup from "yup";

// Define a schema for signup validation
export const signUpValidationSchema = yup.object().shape({
  userName: yup.string().required("Username is required").min(3, "Username must be at least 3 characters"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
});

