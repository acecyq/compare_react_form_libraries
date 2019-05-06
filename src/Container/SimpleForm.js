import { Button, Grid, Paper, TextField, Typography, withStyles } from "@material-ui/core";
import { ErrorMessage, Field, Form, withFormik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { compose } from "recompose";
import Debug from "../Component/Debug";
import { formikPropsShape, simpleFormValidationSchema } from "./constants";
import { submitFormBasic } from "./utilities";

const styles = theme => ({
  formElement: {
    marginTop: 10
  },
  paper: {
    width: "100%",
    padding: 20
  },
  errorMessage: {
    height: 22,
    paddingLeft: 14
  }
});

function SimpleForm({ classes, ...formikProps }) {
  return (
    <Grid container justify="space-around" alignContent="flex-start">
      <Grid item md={4} xs={12}>
        <Paper className={classes.paper} elevation={10} square>
          <Form>
            <Typography align="center" color="textPrimary" variant="body2">
              Fill in your particulars
            </Typography>

            <Field name="name.firstName">
              {({ field }) => (
                <TextField
                  {...field}
                  className={classes.formElement}
                  fullWidth
                  id="firstName"
                  label={<Typography>First Name</Typography>}
                  placeholder="First Name"
                  variant="outlined"
                />
              )}
            </Field>
            <Grid classes={{ item: classes.errorMessage }} item xs={12}>
              <ErrorMessage name="name.firstName">
                {error => (
                  <Typography align="left" color="error" variant="body2">
                    {error}
                  </Typography>
                )}
              </ErrorMessage>
            </Grid>

            <Field name="name.lastName">
              {({ field }) => (
                <TextField
                  {...field}
                  className={classes.formElement}
                  fullWidth
                  id="lastName"
                  label={<Typography>Last Name</Typography>}
                  placeholder="Last Name"
                  variant="outlined"
                />
              )}
            </Field>
            <Grid classes={{ item: classes.errorMessage }} item xs={12}>
              <ErrorMessage name="name.lastName">
                {error => (
                  <Typography align="left" color="error" variant="body2">
                    {error}
                  </Typography>
                )}
              </ErrorMessage>
            </Grid>

            <Field name="email">
              {({ field }) => (
                <TextField
                  {...field}
                  className={classes.formElement}
                  fullWidth
                  id="email"
                  label={<Typography>Email</Typography>}
                  placeholder="Email Address"
                  variant="outlined"
                />
              )}
            </Field>
            <Grid classes={{ item: classes.errorMessage }} item xs={12}>
              <ErrorMessage name="email">
                {error => (
                  <Typography align="left" color="error" variant="body2">
                    {error}
                  </Typography>
                )}
              </ErrorMessage>
            </Grid>

            <Field name="address.streetName">
              {({ field }) => (
                <TextField
                  {...field}
                  className={classes.formElement}
                  fullWidth
                  id="streetName"
                  label={<Typography>Street Name</Typography>}
                  placeholder="Street Name"
                  variant="outlined"
                />
              )}
            </Field>
            <Grid classes={{ item: classes.errorMessage }} item xs={12}>
              <ErrorMessage name="address.streetName">
                {error => (
                  <Typography align="left" color="error" variant="body2">
                    {error}
                  </Typography>
                )}
              </ErrorMessage>
            </Grid>

            <Field name="address.blockNumber">
              {({ field }) => (
                <TextField
                  {...field}
                  className={classes.formElement}
                  fullWidth
                  id="blockNumber"
                  label={<Typography>Block Number</Typography>}
                  placeholder="Block Number"
                  variant="outlined"
                />
              )}
            </Field>
            <Grid classes={{ item: classes.errorMessage }} item xs={12}>
              <ErrorMessage name="address.blockNumber">
                {error => (
                  <Typography align="left" color="error" variant="body2">
                    {error}
                  </Typography>
                )}
              </ErrorMessage>
            </Grid>

            <Field name="address.unitNumber">
              {({ field }) => (
                <TextField
                  {...field}
                  className={classes.formElement}
                  fullWidth
                  id="unitNumber"
                  label={<Typography>Unit Number</Typography>}
                  placeholder="Unit Number"
                  variant="outlined"
                />
              )}
            </Field>
            <Grid classes={{ item: classes.errorMessage }} item xs={12}>
              <ErrorMessage name="address.unitNumber">
                {error => (
                  <Typography align="left" color="error" variant="body2">
                    {error}
                  </Typography>
                )}
              </ErrorMessage>
            </Grid>

            <Grid container justify="space-around" alignItems="center">
              <Grid item xs={4}>
                <Button
                  className={classes.formElement}
                  variant="outlined"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>

              <Grid itemxs={4}>
                <Button
                  className={classes.formElement}
                  variant="outlined"
                  color="secondary"
                  type="reset"
                >
                  Reset
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Paper>
      </Grid>
      <Grid item md={7} xs={12}>
        <Paper className={classes.paper} elevation={10} square>
          <Debug values={{ formikProps }} />
        </Paper>
      </Grid>
    </Grid>
  );
}

SimpleForm.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.shape({
    formikProps: formikPropsShape
  })
};

export default compose(
  withFormik({
    displayName: "Simple Form",
    handleSubmit: (values, { setSubmitting }) => {
      submitFormBasic(values, setSubmitting);
    },
    mapPropsToValues: () => ({
      name: {
        firstName: "",
        lastName: ""
      },
      email: "",
      address: {
        streetName: "",
        blockNumber: "",
        unitNumber: ""
      }
    }),
    validationSchema: simpleFormValidationSchema,
    validateOnChange: false
  }),
  withStyles(styles)
)(SimpleForm);
