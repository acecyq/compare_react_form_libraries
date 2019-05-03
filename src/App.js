import { Tab, Tabs } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import BetterForm from "./Container/BetterForm";
import SimpleForm from "./Container/SimpleForm";

function App() {
  const [tabValue, setTabValue] = useState(0);

  return (
    <div>
      <CssBaseline />
      <Typography align="center" color="primary" variant="h4" gutterBottom>
        Formik Demo
      </Typography>
      <Tabs
        value={tabValue}
        onChange={(_, value) => setTabValue(value)}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab label="Simple Form" />
        <Tab label="Better Form" />
      </Tabs>
      <SwipeableViews
        index={tabValue}
        onChangeIndex={index => setTabValue(index)}
      >
        <SimpleForm />
        <BetterForm />
      </SwipeableViews>
    </div>
  );
}

export default App;
