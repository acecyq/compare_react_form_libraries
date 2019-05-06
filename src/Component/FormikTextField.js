import {
  Fab,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  withStyles
} from "@material-ui/core";
import { ErrorMessage, Field } from "formik";
import PropTypes from "prop-types";
import React from "react";

const styles = theme => ({
  formElement: {
    marginTop: 10
  },
  errorMessage: {
    height: 22,
    paddingLeft: 14
  }
});

function FormikTextField({
  classes,
  name,
  label,
  fieldProps,
  setFieldValue,
  textFieldProps,
  handleBlur
}) {
  return (
    <React.Fragment>
      <Field name={name} {...fieldProps}>
        {({ field }) => {
          return (
            <TextField
              {...field}
              className={classes.formElement}
              fullWidth
              id={name.split()[0]}
              label={<Typography>{label}</Typography>}
              placeholder={label}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Fab
                      size="small"
                      color="secondary"
                      onClick={async () => {
                        // clear field value
                        await setFieldValue(name, "");

                        // performs on blur on the field. Validation is async
                        await handleBlur();
                      }}
                    >
                      X
                    </Fab>
                  </InputAdornment>
                )
              }}
              {...textFieldProps}
            />
          );
        }}
      </Field>
      <Grid classes={{ item: classes.errorMessage }} item xs={12}>
        <ErrorMessage name={name}>
          {error => (
            <Typography align="left" color="error" variant="body2">
              {error}
            </Typography>
          )}
        </ErrorMessage>
      </Grid>
    </React.Fragment>
  );
}

FormikTextField.propTypes = {
  // Required
  classes: PropTypes.object.isRequired,
  handleBlur: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,

  fieldProps: PropTypes.object,
  textFieldProps: PropTypes.object
};

export default withStyles(styles)(FormikTextField);
