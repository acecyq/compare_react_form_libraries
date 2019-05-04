import { Tab, Tabs } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { Formik } from "formik";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import BettererForm from "./Container/BettererForm";
import BetterForm from "./Container/BetterForm";
import {
  initialBettererFormSchema,
  simpleFormValidationSchema,
  bettererFormSchemas
} from "./Container/constants";
import SimpleForm from "./Container/SimpleForm";

function App() {
  const [tabValue, setTabValue] = useState(0);
  const [steps, setSteps] = useState(0);
  const [bettererFormSchema, setBettererFormSchema] = useState(
    initialBettererFormSchema
  );

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
        <Tab label="Betterer Form" />
      </Tabs>
      <SwipeableViews
        index={tabValue}
        onChangeIndex={index => setTabValue(index)}
      >
        <SimpleForm />
        <Formik
          component={BetterForm}
          initialValues={{
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
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("form is submitted");
            console.log("form values", values);
            setSubmitting(false);
          }}
          validateOnChange={false}
          validationSchema={simpleFormValidationSchema}
        />
        <Formik
          render={props => <BettererForm steps={steps} {...props} />}
          initialValues={{
            name: {
              firstName: ""
            }
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("form is submitted");
            console.log("form values", values);
            setBettererFormSchema(
              bettererFormSchema.concat(bettererFormSchemas[steps])
            );
            setSteps(steps + 1);
            setSubmitting(false);
          }}
          validationSchema={bettererFormSchema}
          validateOnChange={false}
        />
      </SwipeableViews>
    </div>
  );
}

export default App;
