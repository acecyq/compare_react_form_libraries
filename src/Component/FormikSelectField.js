import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
  withStyles
} from "@material-ui/core";
import { ErrorMessage, Field } from "formik";
import React from "react";
import PropTypes from "prop-types";

const styles = {
  selectFieldRoot: {
    marginTop: 10
  },
  errorMessage: {
    height: 22,
    paddingLeft: 14
  }
};

function FormikSelectField({ classes, name, label, data }) {
  return (
    <React.Fragment>
      <Field name={name}>
        {({ field }) => {
          console.log(field);
          return (
            <React.Fragment>
              <FormControl
                classes={{ fullWidth: classes.selectFieldRoot }}
                fullWidth
                variant="outlined"
              >
                <InputLabel htmlFor={name}>{label}</InputLabel>
                <Select
                  {...field}
                  input={
                    <OutlinedInput labelWidth={105} name={name} id={name} />
                  }
                >
                  {data.map(dataItem => (
                    <MenuItem key={dataItem.value} value={dataItem}>
                      {dataItem.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Grid classes={{ item: classes.errorMessage }} item xs={12}>
                <ErrorMessage name={name}>
                  {error => (
                    <Typography align="left" color="error" variant="body2">
                      {error.value}
                    </Typography>
                  )}
                </ErrorMessage>
              </Grid>
            </React.Fragment>
          );
        }}
      </Field>
    </React.Fragment>
  );
}

FormikSelectField.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  )
};

export default withStyles(styles)(FormikSelectField);
