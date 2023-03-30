import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function CreateService() {
  return (
    <div className="createServicePage">
      <Formik>
        <Form className="formContainer">
          <label>Test Name: </label>
          <Field
            id="inputCreateTest"
            name="Test-name"
            placeholder="(Ex. Kareem...)"
          />
          <label>Audio File: </label>
          <Field
            id="inputCreateTest"
            name="Test-audio"
            placeholder="(Ex. Kareem...)"
          />
          <label>Test Question: </label>
          <Field
            id="inputCreateTest"
            name="Test-Question"
            placeholder="(Ex. Kareem...)"
          />

          <button type="submit">Create Test</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateService;
