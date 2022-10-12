import * as Yup from "yup";

export const signupSchema = Yup.object({
  name: Yup.string().min(2).max(10).required("please enter your name"),

  email: Yup.string().email().required("Please enter email"),

  password: Yup.string()
    .min(6, "Password must be 6 characters")
    .required("Please Enter Password"),
  confirm_password: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"),null],"Password must match"),
});
