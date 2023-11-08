import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";

// Schema for form validation
const validationSchema = Yup.object().shape({
  company: Yup.string().required("Company is required"),
  positionTitle: Yup.string().required("Position title is required"),
  remark: Yup.string().optional(),
});

const JobForm = () => (
  <div className="form-container">
    <h4>Add Job</h4>
    <Formik
      initialValues={{
        company: "",
        positionTitle: "",
        remark: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        // Submit your form values here
        // For example, you could send them to a backend server:
        // axios.post('/api/submit', values)

        // Simulate a network request
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="company">Company</label>
            <Field type="text" name="company" />
            <ErrorMessage
              name="company"
              component="div"
              className="error-message"
            />
          </div>

          <div>
            <label htmlFor="positionTitle">Position Title</label>
            <Field type="text" name="positionTitle" />
            <ErrorMessage
              name="positionTitle"
              component="div"
              className="error-message"
            />
          </div>

          <div>
            <label htmlFor="Description">Description</label>
            <Field type="text" name="remark" as="textarea" />
            <ErrorMessage
              name="description"
              component="div"
              className="error-message"
            />
          </div>

          <Button type="submit" disabled={isSubmitting}>
            Save Job
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default JobForm;
