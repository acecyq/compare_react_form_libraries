import { Grid, TextField, Typography, withStyles } from "@material-ui/core";
import { Field, ErrorMessage } from "formik";
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

function FormikTextField({ classes, name, label, fieldProps, textFieldProps }) {
  return (
    <React.Fragment>
      <Field name={name} {...fieldProps}>
        {({ field }) => (
          <TextField
            {...field}
            className={classes.formElement}
            fullWidth
            id="firstName"
            label={<Typography>{label}</Typography>}
            placeholder={label}
            variant="outlined"
            {...textFieldProps}
          />
        )}
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

export default withStyles(styles)(FormikTextField);
