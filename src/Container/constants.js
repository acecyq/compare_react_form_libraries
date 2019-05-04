import { object, string } from "yup";
import PropTypes from "prop-types";

function getValueShape(type, isRequired) {
  return PropTypes.shape({
    name: PropTypes.shape({
      firstName: PropTypes[type][isRequired],
      lastName: PropTypes[type][isRequired]
    })[isRequired],
    email: PropTypes[type][isRequired],
    address: PropTypes.shape({
      streetName: PropTypes[type][isRequired],
      blockNumber: PropTypes[type][isRequired],
      unitNumber: PropTypes[type][isRequired]
    })[isRequired]
  }).isRequired;
}

export const formikPropsShape = PropTypes.shape({
  values: getValueShape("string", "isRequired"),
  errors: getValueShape("string"),
  touched: getValueShape("bool", "isRequired"),
  isSubmitting: PropTypes.bool.isRequired,
  isValidating: PropTypes.bool.isRequired,
  submitCount: PropTypes.number.isRequired,
  dirty: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
  initialValues: getValueShape("string", "isRequired"),
  validateOnChange: PropTypes.bool.isRequired,
  validateOnBlur: PropTypes.bool.isRequired
});

function getInitialBettererFormValueShape(type, isRequired) {
  return PropTypes.shape({
    name: PropTypes.shape({
      name: PropTypes.shape({
        firstName: PropTypes[type][isRequired]
      })
    })
  });
}

export const bettererFormFormikPropsShape = PropTypes.shape({
  values: getInitialBettererFormValueShape("string", "isRequired"),
  errors: getInitialBettererFormValueShape("string"),
  touched: getInitialBettererFormValueShape("bool", "isRequired"),
  isSubmitting: PropTypes.bool.isRequired,
  isValidating: PropTypes.bool.isRequired,
  submitCount: PropTypes.number.isRequired,
  dirty: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
  initialValues: getInitialBettererFormValueShape("string", "isRequired"),
  validateOnChange: PropTypes.bool.isRequired,
  validateOnBlur: PropTypes.bool.isRequired
});

export const simpleFormValidationSchema = object().shape({
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

export const initialBettererFormSchema = object().shape({
  name: object().shape({
    firstName: string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .required("Required")
  })
});

export const bettererFormSchemas = [
  object().shape({
    name: object().shape({
      lastName: string()
        .min(2, "Too Short!")
        .max(10, "Too Long!")
        .required("Required")
    })
  }),
  object().shape({
    email: string()
      .email("Invalid email")
      .required("Required")
  }),
  object().shape({
    address: object().shape({
      streetName: string().required("Required")
    })
  }),
  object().shape({
    address: object().shape({
      blockNumber: string()
        .matches(/^[0-9]+[a-z]*$/i, "Invalid Block Number")
        .required("Required")
    })
  }),
  object().shape({
    address: object().shape({
      unitNumber: string()
        .matches(/^#[0-9]{1,2}[-]{1}[0-9]*$/, "Invalid Unit Number")
        .required("Required")
    })
  })
];
