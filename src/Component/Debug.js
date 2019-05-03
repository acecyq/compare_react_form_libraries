import React from "react";
import { Typography, withStyles } from "@material-ui/core";

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

export default withStyles(styles)(Debug);
