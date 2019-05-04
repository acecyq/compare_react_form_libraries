import { Button, Grid, Paper, Typography, withStyles } from "@material-ui/core";
import { Form } from "formik";
import PropTypes from "prop-types";
import React from "react";
import Debug from "../Component/Debug";
import FormikTextField from "../Component/FormikTextField";
import { bettererFormFormikPropsShape } from "./constants";

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

function BettererForm({ classes, steps, setSteps, ...formikProps }) {
  const { handleBlur, isSubmitting, setFieldValue, submitForm } = formikProps;

  return (
    <Grid container justify="space-around" alignContent="flex-start">
      <Grid item md={4} xs={12}>
        <Paper className={classes.paper} elevation={10} square>
          <Form>
            <Typography align="center" color="textPrimary" variant="body2">
              Fill in your particulars
            </Typography>

            <FormikTextField
              name="name.firstName"
              label="First Name"
              setFieldValue={setFieldValue}
              handleBlur={handleBlur}
            />
            {steps > 0 && (
              <FormikTextField
                name="name.lastName"
                label="Last Name"
                setFieldValue={setFieldValue}
                handleBlur={handleBlur}
              />
            )}
            {steps > 1 && (
              <FormikTextField
                name="email"
                label="Email Address"
                setFieldValue={setFieldValue}
                handleBlur={handleBlur}
              />
            )}
            {steps > 2 && (
              <FormikTextField
                name="address.streetName"
                label="Street Name"
                setFieldValue={setFieldValue}
                handleBlur={handleBlur}
              />
            )}
            {steps > 3 && (
              <FormikTextField
                name="address.blockNumber"
                label="Block Number"
                setFieldValue={setFieldValue}
                handleBlur={handleBlur}
              />
            )}
            {steps > 4 && (
              <FormikTextField
                name="address.unitNumber"
                label="Unit Number"
                setFieldValue={setFieldValue}
                handleBlur={handleBlur}
              />
            )}

            <Grid container justify="space-around" alignItems="center">
              <Grid item xs={4}>
                <Button
                  className={classes.formElement}
                  variant="outlined"
                  color="primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Grid>

              <Grid item xs={4}>
                <Button
                  className={classes.formElement}
                  variant="outlined"
                  color="secondary"
                  type="reset"
                  disabled={isSubmitting}
                >
                  Reset
                </Button>
              </Grid>
            </Grid>

            {steps > 4 && (
              <Grid container justify="center">
                <Grid item xs={6}>
                  <Button
                    className={classes.formElement}
                    variant="outlined"
                    color="default"
                    onClick={() => {
                      setSteps(10);
                      submitForm();
                    }}
                    disabled={isSubmitting}
                  >
                    Final Submit
                  </Button>
                </Grid>
              </Grid>
            )}
          </Form>
        </Paper>
      </Grid>
      <Grid item md={7} xs={12}>
        <Paper className={classes.paper} elevation={10} square>
          <Debug values={formikProps} />
        </Paper>
      </Grid>
    </Grid>
  );
}

BettererForm.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.shape({
    formikProps: bettererFormFormikPropsShape
  })
};

export default withStyles(styles)(BettererForm);
