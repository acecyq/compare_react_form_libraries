import { object, string } from "yup";

export const simpleFormValidationScheme = object().shape({
  name: object().shape({
    firstName: string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
    lastName: string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .required("Required")
  }),
  email: string()
    .email("Invalid email")
    .required("Required"),
  address: object().shape({
    streetName: string().required("Required"),
    blockNumber: string()
      .matches(/^[0-9]+[a-z]*$/i, "Invalid Block Number")
      .required("Required"),
    unitNumber: string()
      .matches(/^#[0-9]{1,2}[-]{1}[0-9]*$/, "Invalid Unit Number")
      .required("Required")
  })
});
