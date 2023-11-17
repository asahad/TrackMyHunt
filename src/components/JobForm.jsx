// JobForm.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";

const validationSchema = Yup.object().shape({
  company: Yup.string().required("Company is required"),
  positionTitle: Yup.string().required("Position title is required"),
});

const JobForm = ({ onSave, onDiscard }) => (
  <div className="form-container">
    <h4>Add Job</h4>
    <Formik
      initialValues={{ company: "", positionTitle: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        onSave({
          company: values.company,
          position: values.positionTitle, // Ensure this field name is 'position'
          daysAgo: 0, // Default value
        });
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="company" type="text" placeholder="Company" />
          <ErrorMessage name="company" component="div" />
          <Field
            name="positionTitle"
            type="text"
            placeholder="Position Title"
          />
          <ErrorMessage name="positionTitle" component="div" />
          <Button type="submit" disabled={isSubmitting} sytle={{}}>
            Save Job
          </Button>
          <Button
            variant="secondary"
            onClick={onDiscard}
            style={{ margin: "10px" }}
          >
            Discard
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default JobForm;
