import { Button, Grid, Paper, Typography, withStyles } from "@material-ui/core";
import { Form } from "formik";
import PropTypes from "prop-types";
import React from "react";
import Debug from "../Component/Debug";
import FormikTextField from "../Component/FormikTextField";
import { formikPropsShape } from "./constants";

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

function BetterForm({ classes, ...formikProps }) {
  const { handleBlur, handleSubmit, setFieldValue } = formikProps;

  return (
    <Grid container justify="space-around" alignContent="flex-start">
      <Grid item xs={4}>
        <Paper className={classes.paper} elevation={10} square>
          <Form onSubmit={handleSubmit}>
            <Typography align="center" color="textPrimary" variant="body2">
              Fill in your particulars
            </Typography>

            <FormikTextField
              name="name.firstName"
              label="First Name"
              setFieldValue={setFieldValue}
              handleBlur={handleBlur}
            />
            <FormikTextField
              name="name.lastName"
              label="Last Name"
              setFieldValue={setFieldValue}
              handleBlur={handleBlur}
            />
            <FormikTextField
              name="email"
              label="Email Address"
              setFieldValue={setFieldValue}
              handleBlur={handleBlur}
            />
            <FormikTextField
              name="address.streetName"
              label="Street Name"
              setFieldValue={setFieldValue}
              handleBlur={handleBlur}
            />
            <FormikTextField
              name="address.blockNumber"
              label="Block Number"
              setFieldValue={setFieldValue}
              handleBlur={handleBlur}
            />
            <FormikTextField
              name="address.unitNumber"
              label="Unit Number"
              setFieldValue={setFieldValue}
              handleBlur={handleBlur}
            />

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
      <Grid item xs={7}>
        <Paper className={classes.paper} elevation={10} square>
          <Debug values={{ formikProps }} />
        </Paper>
      </Grid>
    </Grid>
  );
}

BetterForm.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.shape({
    formikProps: formikPropsShape
  })
};

export default withStyles(styles)(BetterForm);
