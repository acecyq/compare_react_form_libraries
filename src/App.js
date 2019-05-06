import { Tab, Tabs } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { Formik } from "formik";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import BettererForm from "./Container/BettererForm";
import BetterForm from "./Container/BetterForm";
import {
  bettererFormInitialValues,
  bettererFormSchemas,
  bettererFormValues,
  initialBettererFormSchema,
  simpleFormValidationSchema
} from "./Container/constants";
import SimpleForm from "./Container/SimpleForm";
import { mergeObjects, submitFormBasic } from "./Container/utilities";

function App() {
  const [tabValue, setTabValue] = useState(0);
  const [steps, setSteps] = useState(0);
  const [initialValues, setInitialValues] = useState(bettererFormInitialValues);
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
            submitFormBasic(values, setSubmitting);
          }}
          validateOnChange={false}
          validationSchema={simpleFormValidationSchema}
        />
        <Formik
          render={props => (
            <BettererForm steps={steps} setSteps={setSteps} {...props} />
          )}
          enableReinitialize
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            console.log("form values", values);
            if (steps < 5) {
              setBettererFormSchema(
                bettererFormSchema.concat(bettererFormSchemas[steps])
              );
              setInitialValues(mergeObjects(values, bettererFormValues[steps]));
              setSteps(steps + 1);
            }
            
            if (steps < 6) {
              console.log("form is submitted");
              setSubmitting(false);
              return;
            }

            console.log("form is finally submitted");
          }}
          validationSchema={bettererFormSchema}
          validateOnChange={false}
        />
      </SwipeableViews>
    </div>
  );
}

export default App;
