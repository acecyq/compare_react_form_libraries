import { Typography, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const styles = theme => ({
  debug: {
    whiteSpace: "pre"
  }
});

function Debug({ classes, ...formikProps }) {
  return (
    <div>
      <Typography
        classes={{ root: classes.debug }}
        align="left"
        component="p"
        variant="body2"
      >
        {JSON.stringify(formikProps, null, 4)}
      </Typography>
    </div>
  );
}

Debug.propTypes = {
  classes: PropTypes.object.isRequired,
  formikProps: PropTypes.object.isRequired
};

export default withStyles(styles)(Debug);
